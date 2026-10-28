import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createServer } from 'vite';

const outputDir = join(process.cwd(), 'dist');
const siteOrigin = (process.env.SITE_URL || 'https://www.apexadvisory.example').replace(/\/$/, '');
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
try {
  const [{ default: App }, { staticPaths, getPageMeta }] = await Promise.all([
    server.ssrLoadModule('/src/App.tsx'),
    server.ssrLoadModule('/src/siteRoutes.ts'),
  ]);
  const template = await readFile(join(outputDir, 'index.html'), 'utf8');
  const htmlEscape = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
  for (const path of staticPaths) {
    const { title, description } = getPageMeta(path);
    const markup = renderToString(React.createElement(App, { initialPath: path }));
    const canonical = `${siteOrigin}${path}`;
    const seoHead = `\n    <meta name="description" content="${htmlEscape(description)}" />\n    <link rel="canonical" href="${htmlEscape(canonical)}" />\n    <meta property="og:type" content="website" />\n    <meta property="og:title" content="${htmlEscape(title)}" />\n    <meta property="og:description" content="${htmlEscape(description)}" />\n    <meta property="og:url" content="${htmlEscape(canonical)}" />\n    <meta name="twitter:card" content="summary_large_image" />`;
    const html = template
      .replace(/<title>.*?<\/title>/s, `<title>${htmlEscape(title)}</title>`)
      .replace(/<meta name="description"[^>]*>/i, `<meta name="description" content="${htmlEscape(description)}" />`)
      .replace('</head>', `${seoHead.replace(/<meta name="description"[^>]*>/i, '')}\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
    const target = path === '/' ? join(outputDir, 'index.html') : join(outputDir, path, 'index.html');
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, html);
  }

  const notFoundMeta = { title: 'Page not found | Apex Advisory LLP', description: 'The page you requested could not be found.' };
  const notFoundMarkup = renderToString(React.createElement(App, { initialPath: '/not-found/' }));
  const notFoundHtml = template
    .replace(/<title>.*?<\/title>/s, `<title>${htmlEscape(notFoundMeta.title)}</title>`)
    .replace(/<meta name="description"[^>]*>/i, `<meta name="description" content="${htmlEscape(notFoundMeta.description)}" />`)
    .replace('<div id="root"></div>', `<div id="root">${notFoundMarkup}</div>`);
  await writeFile(join(outputDir, '404.html'), notFoundHtml);

  const date = new Date().toISOString().slice(0, 10);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${staticPaths.map(path => `  <url><loc>${htmlEscape(`${siteOrigin}${path}`)}</loc><lastmod>${date}</lastmod></url>`).join('\n')}\n</urlset>\n`;
  await writeFile(join(outputDir, 'sitemap.xml'), sitemap);
  await writeFile(join(outputDir, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${siteOrigin}/sitemap.xml\n`);
  console.log(`Pre-rendered ${staticPaths.length} pages with page metadata.`);
} finally {
  await server.close();
}
