import { FIRM_DETAILS, SERVICES_DATA, INDUSTRIES_DATA, ARTICLES_DATA } from './data/mockData';

export const SITE_ORIGIN = 'https://www.apexadvisory.example';
export const staticPaths = [
  '/', '/services/', ...SERVICES_DATA.map(item => `/services/${item.slug}/`),
  '/industries/', ...INDUSTRIES_DATA.map(item => `/industries/${item.slug}/`),
  '/insights/', ...ARTICLES_DATA.map(item => `/insights/${item.slug}/`),
  '/about/', '/contact/', '/privacy/', '/terms/', '/disclaimer/',
];

export function normalizePath(path: string) {
  if (!path || path === '/') return '/';
  const trimmed = path.split('/').filter(Boolean).join('/');
  return trimmed ? `/${trimmed}/` : '/';
}

const concise = (value: string, max = 155) => value.length <= max ? value : `${value.slice(0, max - 1).replace(/\s+\S*$/, '')}…`;

export function getPageMeta(path: string) {
  const route = normalizePath(path);
  const service = SERVICES_DATA.find(item => route === `/services/${item.slug}/`);
  const industry = INDUSTRIES_DATA.find(item => route === `/industries/${item.slug}/`);
  const insight = ARTICLES_DATA.find(item => route === `/insights/${item.slug}/`);
  if (service) return { title: `${service.title} | ${FIRM_DETAILS.name}`, description: concise(service.description) };
  if (industry) return { title: `${industry.title} | ${FIRM_DETAILS.name}`, description: concise(industry.summary) };
  if (insight) return { title: `${insight.title} | Apex Insights`, description: concise(insight.excerpt) };
  const pages: Record<string, { title: string; description: string }> = {
    '/': { title: 'Apex Advisory LLP | Accounting and Business Advisory', description: 'Accounting, tax and business advisory information from Apex Advisory LLP. Verify firm details and service scope before engagement.' },
    '/services/': { title: 'Services | Apex Advisory LLP', description: 'Explore the accounting, tax and business advisory services described by Apex Advisory LLP.' },
    '/industries/': { title: 'Industries | Apex Advisory LLP', description: 'Explore sector perspectives for technology, healthcare, manufacturing, consumer, financial services and emerging ventures.' },
    '/insights/': { title: 'Insights and Perspectives | Apex Advisory LLP', description: 'Read perspectives on strategy, governance, finance, tax, technology and the decisions shaping business.' },
    '/about/': { title: 'About Apex Advisory LLP | Our Approach', description: 'Learn about Apex Advisory LLP, our independent approach and how we work with leadership teams.' },
    '/contact/': { title: 'Contact Apex Advisory LLP', description: 'Contact page preview. Verify firm contact details and configure message delivery before launch.' },
    '/privacy/': { title: 'Privacy Policy | Apex Advisory LLP', description: 'A plain language overview of how this website handles information.' },
    '/terms/': { title: 'Terms of Use | Apex Advisory LLP', description: 'Terms for using the Apex Advisory LLP website.' },
    '/disclaimer/': { title: 'Professional Disclaimer | Apex Advisory LLP', description: 'Important limitations on information provided on this website.' },
  };
  return pages[route] ?? { title: 'Page not found | Apex Advisory LLP', description: 'The page you requested could not be found.' };
}
