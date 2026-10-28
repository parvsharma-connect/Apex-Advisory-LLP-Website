import { useEffect, useState, type FormEvent, type ReactNode } from 'react';
import { ArrowRight, ArrowUpRight, Menu, X, ChevronDown, BriefcaseBusiness, ChartNoAxesCombined, Scale, ShieldCheck, Landmark, Network, Mail, Phone, MapPin } from 'lucide-react';
import { FIRM_DETAILS, SERVICES_DATA, INDUSTRIES_DATA, ARTICLES_DATA } from './data/mockData';
import { getPageMeta, normalizePath } from './siteRoutes';

const navItems = [
  { label: 'Services', href: '/services/', links: SERVICES_DATA.map(item => ({ label: item.title, href: `/services/${item.slug}/` })) },
  { label: 'Industries', href: '/industries/', links: INDUSTRIES_DATA.slice(0, 4).map(item => ({ label: item.title, href: `/industries/${item.slug}/` })) },
  { label: 'Insights', href: '/insights/', links: ARTICLES_DATA.slice(0, 4).map(item => ({ label: item.title, href: `/insights/${item.slug}/` })) },
  { label: 'About', href: '/about/', links: [{ label: 'Our approach', href: '/about/' }, { label: 'Contact', href: '/contact/' }] },
];
const serviceIcons = [BriefcaseBusiness, Scale, ChartNoAxesCombined, ShieldCheck, Landmark, Network];
const heroImage = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=960&q=78';
const heroPhrases = ['Accounting with clarity.', 'Tax with confidence.', 'Advisory for growth.'];
const currentYear = new Date().getFullYear();
const isGitHubPages = import.meta.env.VITE_GITHUB_PAGES === 'true';

type AppProps = { initialPath?: string };
const siteHref = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

function getCurrentRoute(initialPath?: string) {
  if (initialPath) return normalizePath(initialPath);
  const pathname = typeof window === 'undefined' ? '/' : window.location.pathname;
  const base = import.meta.env.BASE_URL;
  const route = base !== '/' && pathname.startsWith(base) ? pathname.slice(base.length - 1) || '/' : pathname;
  return normalizePath(route);
}

function App({ initialPath }: AppProps) {
  const path = getCurrentRoute(initialPath);
  const [menu, setMenu] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const meta = getPageMeta(path);
  const service = SERVICES_DATA.find(item => path === `/services/${item.slug}/`);
  const industry = INDUSTRIES_DATA.find(item => path === `/industries/${item.slug}/`);
  const article = ARTICLES_DATA.find(item => path === `/insights/${item.slug}/`);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;

    const revealTargets = document.querySelectorAll<HTMLElement>([
      '.hero-text', '.hero-image', '.intro-band > *', '.section-top', '.service-card',
      '.approach-image', '.approach-copy', '.industry-list > a', '.insight-card',
      '.contact-band > *', '.page-intro > *', '.detail-overview > *',
      '.capability-grid article', '.deliverables-section > *', '.article-body > *',
      '.contact-details > *', '.contact-visual', '.firm-footer > *',
    ].join(','));

    const groups = new Map<Element, number>();
    revealTargets.forEach((element) => {
      const group = element.parentElement!;
      const position = groups.get(group) ?? 0;
      groups.set(group, position + 1);
      element.classList.add('motion-reveal');
      element.classList.add(`motion-delay-${Math.min(position, 5)}`);
    });

    document.documentElement.classList.add('motion-ready');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('motion-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -36px 0px' });

    revealTargets.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('motion-ready');
    };
  }, [path]);

  return <div className="firm-site">
    <header className="firm-header" onMouseLeave={() => setMenu('')}>
      <nav className="firm-nav" aria-label="Main navigation">
        <a className="firm-brand" href={siteHref('/')} onClick={() => setMenu('')}><span className="brand-mark" aria-hidden="true">A</span><span>APEX <i>ADVISORY</i></span></a>
        <div className="desktop-nav">{navItems.map(item => <div className="nav-item-wrap" key={item.label} onMouseEnter={() => setMenu(item.label)}><button className={menu === item.label ? 'active' : ''} aria-expanded={menu === item.label} onMouseEnter={() => setMenu(item.label)} onFocus={() => setMenu(item.label)} onClick={() => setMenu(menu === item.label ? '' : item.label)}>{item.label}<ChevronDown size={12}/></button></div>)}</div>
        <a className="nav-cta" href={siteHref('/contact/')}>Start a conversation <ArrowUpRight size={14}/></a>
        <button className="mobile-toggle" aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X size={20}/> : <Menu size={20}/>}</button>
      </nav>
      {menu && <div className="firm-menu" onMouseEnter={() => setMenu(menu)}><div className="firm-menu-inner"><div><span className="eyebrow">Explore</span><h2>{menu}</h2><a className="text-link" href={siteHref(navItems.find(item => item.label === menu)?.href ?? '/')}>View all {menu.toLowerCase()} <ArrowRight size={14}/></a></div><div className="firm-menu-links">{navItems.find(item => item.label === menu)?.links.map(entry => <a key={entry.href} href={siteHref(entry.href)} onClick={() => setMenu('')}>{entry.label}<ArrowUpRight size={14}/></a>)}</div></div></div>}
    </header>
    {mobileOpen && <div className="mobile-nav">{navItems.map(item => <a key={item.label} href={siteHref(item.href)} onClick={() => setMobileOpen(false)}>{item.label}<ArrowRight size={17}/></a>)}<a className="mobile-cta" href={siteHref('/contact/')} onClick={() => setMobileOpen(false)}>Start a conversation <ArrowUpRight size={15}/></a></div>}
    <main id="top" onClick={() => menu && setMenu('')}>
      {path === '/' && <HomePage/>}
      {path === '/services/' && <ServicesPage/>}
      {service && <ServiceDetailPage item={service}/>}
      {path === '/industries/' && <IndustriesPage/>}
      {industry && <IndustryDetailPage item={industry}/>}
      {path === '/insights/' && <InsightsPage/>}
      {article && <InsightDetailPage item={article}/>}
      {path === '/about/' && <AboutPage/>}
      {path === '/contact/' && <ContactPage/>}
      {path === '/privacy/' && <LegalPage title="Privacy Policy" eyebrow="Website information" lead="This starter policy is a drafting aid. Confirm the legal entity, contact details, forms, hosting, analytics and retention practices before publication." sections={[
        ['Information collected', isGitHubPages ? 'This GitHub Pages site is static; the enquiry form is disabled and this website does not collect enquiry submissions. The hosting provider may log technical request data such as IP address, browser type and request time. If you contact the firm by email, your message is handled by your and the recipient’s email providers.' : 'When email delivery is configured, submitting the business enquiry form sends your name, business email, enquiry category and optional message to the firm’s inbox through MailerSend, its email delivery provider. The website does not keep a database of enquiries. MailerSend processes the information to deliver the message and may retain it under its policies. Do not submit confidential client records or sensitive financial or identity information. The hosting provider may also log technical request data such as IP address, browser type and request time. Until delivery is configured, the form will show an error instead of claiming the enquiry was sent.'],
        ['Cookies', 'This website uses a first-party apex_cookie_consent cookie and browser storage to remember your cookie choice for one year. Choose Essential only to disable optional cookies, or Allow cookies to accept optional cookies. Cookie settings lets you change your choice. No session ID, login, analytics or advertising cookie is configured.'],
        ['Third-party resources', 'This frontend has no analytics, advertising trackers, map embeds or chat widgets configured. Pages load fonts from Google Fonts and some images from Unsplash; those providers may receive technical request information, including your IP address. Review their privacy terms or host approved assets locally before launch, and confirm whether the selected host sets cookies.'],
        ['Sharing and retention', isGitHubPages ? 'This static site does not collect or deliver form submissions. Messages sent by email may be processed or retained by the sender’s and recipient’s email providers under their respective policies.' : 'When configured, submitted enquiries are delivered to parv.sharmaa@outlook.com through MailerSend. The website has no enquiry database; MailerSend and the recipient email provider may process or retain messages under their respective policies. Confirm access controls, retention periods and deletion procedures before publication.'],
        ['Your choices and contact', 'Applicable rights and how to exercise them depend on the firm’s location and the relevant law. Replace this paragraph with reviewed details and a monitored privacy contact before launch.'],
      ]}/>}
      {path === '/terms/' && <LegalPage title="Terms of Use" eyebrow="Website terms" lead="These draft terms are not a substitute for review by counsel familiar with the firm and its jurisdiction." sections={[
        ['Informational content', 'Website content is general information only. It does not create an adviser-client relationship and should not be relied on as accounting, tax, legal, investment or other professional advice.'],
        ['No engagement', 'An engagement exists only when the firm and client have agreed its scope and terms in writing. Do not share confidential information until an appropriate engagement and secure communication method are in place.'],
        ['Third-party links', 'Links to external websites are provided for convenience. The firm does not control or endorse their content, availability or privacy practices.'],
        ['Review before launch', 'Insert the verified firm identity, governing law, limitation language and contact information after legal review.'],
      ]}/>}
      {path === '/disclaimer/' && <LegalPage title="Professional Disclaimer" eyebrow="Important information" lead="Please read this notice together with the specific scope and terms of any written engagement." sections={[
        ['No professional advice', 'Articles, examples and service descriptions are for general information and discussion. They are not accounting, tax, legal, audit, investment or other professional advice and may not reflect current requirements.'],
        ['No client relationship', 'Viewing this website or contacting the firm does not by itself establish a professional relationship. Do not transmit confidential or personal records through this website.'],
        ['No outcome guarantees', 'Any examples or illustrations are not promises of results. Outcomes depend on each client’s facts, decisions and circumstances.'],
        ['Verify before relying', 'Rules and interpretations can change. Obtain advice based on your circumstances and verify current requirements with authoritative sources. Confirm all professional designations and permitted services before publication.'],
      ]}/>}
      {!['/', '/services/', '/industries/', '/insights/', '/about/', '/contact/', '/privacy/', '/terms/', '/disclaimer/'].includes(path) && !service && !industry && !article && <NotFoundPage/>}
      <SiteFooter/>
      <PageMetadata title={meta.title} description={meta.description}/>
    </main>
    <CookiePreferences/>
  </div>;
}

function Eyebrow({children}:{children:ReactNode}) { return <div className="eyebrow">{children}</div> }
function PageIntro({eyebrow,title,lead}:{eyebrow:string;title:ReactNode;lead:string}) { return <section className="page-intro"><div><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p>{lead}</p></div><div className="page-intro-aside"><span>APEX / ADVISORY</span><span>Clarity. Confidence. Growth.</span></div></section> }
function SectionHeading({eyebrow,title,copy}:{eyebrow:string;title:ReactNode;copy?:string}) { return <div className="section-top"><div><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2></div>{copy&&<p>{copy}</p>}</div> }
function TypedPhrases({phrases}:{phrases:string[]}) {
  const [displayed, setDisplayed] = useState('');
  const fullText = phrases.join(' ');
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayed(phrases[0] ?? '');
      return;
    }
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer: number;

    const typeLoop = () => {
      const phrase = phrases[phraseIndex] ?? '';
      charIndex += deleting ? -1 : 1;
      setDisplayed(phrase.slice(0, charIndex));

      let delay = deleting ? 45 : 90;
      if (!deleting && charIndex === phrase.length) {
        deleting = true;
        delay = 1400;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        delay = 350;
      }
      timer = window.setTimeout(typeLoop, delay);
    };

    setDisplayed('');
    timer = window.setTimeout(typeLoop, 90);
    return () => window.clearTimeout(timer);
  }, [phrases]);

  return <><span className="sr-only">{fullText}</span><em className="typing-line" aria-hidden="true"><span>{displayed}</span><span className="typing-cursor">|</span></em></>;
}
function HomePage(){
 const featured=SERVICES_DATA.slice(0,3), insights=ARTICLES_DATA.slice(0,3);
 return <>
  <div className="notice"><span>Website preview · business details and service scope require verification</span><span>India-focused draft</span></div>
  <section className="hero"><div className="hero-text"><div className="eyebrow"><span className="eyebrow-dot"/> Apex Advisory LLP</div><h1>We deliver<TypedPhrases phrases={heroPhrases}/></h1><p>Draft website for accounting, tax and business advisory services. Actual qualifications, service scope and firm details must be confirmed before publication.</p><div className="hero-actions"><a className="button-primary" href={siteHref('/services/')}>Explore service areas <ArrowRight size={16}/></a><a className="text-link" href={siteHref('/about/')}>How we work <ArrowUpRight size={15}/></a></div><div className="hero-caption"><span>Practical support for business decisions.</span><span>PREVIEW</span></div></div><div className="hero-image"><img src={heroImage} srcSet="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=640&q=78 640w, https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=960&q=78 960w, https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1280&q=78 1280w" sizes="(max-width: 700px) calc(100vw - 48px), 54vw" fetchPriority="high" decoding="async" alt="Modern city towers seen from below"/><div className="hero-motion-art" aria-hidden="true"><svg viewBox="0 0 520 380" preserveAspectRatio="none"><path className="motion-route" d="M40 315 C120 275 125 205 205 222 S300 280 350 185 S425 105 485 65"/><circle className="motion-node" r="5"><animateMotion dur="8s" repeatCount="indefinite" path="M40 315 C120 275 125 205 205 222 S300 280 350 185 S425 105 485 65"/></circle></svg><span>INSIGHT IN MOTION</span></div><div className="image-label"><span>Built around your ambition</span><span>APEX / ADVISORY</span></div></div></section>
  <section className="intro-band"><Eyebrow>A partner at every inflection point</Eyebrow><h2>Good advice makes<br/>the complex <em>clear.</em></h2><div className="intro-copy"><p>Markets shift. Regulations evolve. Growth creates new questions. We bring an independent perspective and a practical path forward—so your next move is grounded in what matters.</p><a className="text-link" href={siteHref('/about/')}>Meet Apex Advisory <ArrowUpRight size={15}/></a></div></section>
  <section className="services-section"><SectionHeading eyebrow="What we do" title={<>Expertise for the<br/><em>whole picture.</em></>} copy="From a single critical question to a complex transformation, we bring the right experience around the table."/><ServiceCards items={featured}/><div className="center-link"><a className="text-link" href={siteHref('/services/')}>Explore all services <ArrowRight size={15}/></a></div></section>
  <section className="approach-section"><div className="approach-image"><img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=78" srcSet="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=480&q=78 480w, https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=78 900w" sizes="(max-width: 700px) 100vw, 50vw" loading="lazy" decoding="async" alt="Sunlit meeting room prepared for a team discussion"/><span className="image-label">Partnership, by design</span></div><div className="approach-copy"><Eyebrow>Our approach</Eyebrow><h2>Senior minds.<br/><em>Shared purpose.</em></h2><p>We stay close to the people making the decisions. That means clear analysis, honest challenge and recommendations your team can put into action.</p><ul><li><span>01</span>Listen before we prescribe</li><li><span>02</span>Bring evidence to every decision</li><li><span>03</span>Stay accountable through delivery</li></ul><a className="text-link" href={siteHref('/about/')}>Get to know us <ArrowUpRight size={15}/></a></div></section>
  <section className="industries-section"><SectionHeading eyebrow="Where we work" title={<>Insight that meets<br/><em>your industry.</em></>} copy="We pair sector knowledge with a fresh view of the forces reshaping your business."/><IndustryRows items={INDUSTRIES_DATA.slice(0,4)}/><div className="center-link"><a className="text-link" href={siteHref('/industries/')}>Explore industries <ArrowRight size={15}/></a></div></section>
  <section className="insights-section"><SectionHeading eyebrow="Ideas in motion" title={<>Perspective for<br/><em>what’s ahead.</em></>} copy="Fresh thinking for the decisions shaping your organisation."/><InsightCards items={insights}/><div className="center-link"><a className="text-link" href={siteHref('/insights/')}>Read all insights <ArrowRight size={15}/></a></div></section>
  <ContactBand/>
 </>;
}
function ServicesPage(){return <><PageIntro eyebrow="Our services" title={<>Advice across the<br/><em>business agenda.</em></>} lead="Explore connected advisory capabilities for the decisions that shape performance, resilience and growth."/><section className="content-section"><SectionHeading eyebrow="Capabilities" title={<>One perspective.<br/><em>Multiple disciplines.</em></>} copy="We bring together the expertise each mandate needs, with senior attention from first conversation through delivery."/><ServiceCards items={SERVICES_DATA}/></section><ContactBand/></>}
function ServiceCards({items}:{items:typeof SERVICES_DATA}){return <div className="services-grid">{items.map((item,i)=>{const Icon=serviceIcons[i%serviceIcons.length];return <article className="service-card" key={item.id}><span className="service-number">{String(i+1).padStart(2,'0')}</span><Icon size={22} strokeWidth={1.5}/><h3>{item.title}</h3><p>{item.description}</p><a href={siteHref(`/services/${item.slug}/`)}>Explore this practice <ArrowUpRight size={14}/></a></article>})}</div>}
function ServiceDetailPage({item}:{item:typeof SERVICES_DATA[number]}){const Icon=serviceIcons[Math.max(0,SERVICES_DATA.indexOf(item))%serviceIcons.length];return <><PageIntro eyebrow={item.eyebrow} title={<>{item.title}<br/><em>with perspective.</em></>} lead={item.tagline}/><section className="detail-overview"><div className="detail-icon"><Icon size={28}/><span>APEX / PRACTICE</span></div><div><Eyebrow>How we help</Eyebrow><p className="detail-lead">{item.longDescription}</p></div></section><section className="content-section"><SectionHeading eyebrow="Our capabilities" title={<>Where we make<br/><em>a difference.</em> </>}/><div className="capability-grid">{item.capabilities.map((cap,index)=><article key={cap.title}><span>{String(index+1).padStart(2,'0')}</span><h3>{cap.title}</h3><p>{cap.desc}</p></article>)}</div></section><section className="deliverables-section"><Eyebrow>Typical areas of focus</Eyebrow><h2>Work that moves<br/><em>decisions forward.</em></h2><ul>{item.deliverables.map((x,i)=><li key={x}><span>{String(i+1).padStart(2,'0')}</span>{x}<ArrowUpRight size={15}/></li>)}</ul></section><ContactBand/></>}
function IndustriesPage(){return <><PageIntro eyebrow="Industries" title={<>Sector context.<br/><em>Connected thinking.</em></>} lead="We combine knowledge of your operating environment with the cross-sector view needed to see what is changing next."/><section className="content-section"><SectionHeading eyebrow="Sector perspectives" title={<>Experience shaped<br/><em>around your market.</em></>} copy="Select an industry to explore the questions and opportunities we help leadership teams navigate."/><IndustryRows items={INDUSTRIES_DATA}/></section><ContactBand/></>}
function IndustryRows({items}:{items:typeof INDUSTRIES_DATA}){return <div className="industry-list">{items.map((item,i)=><a href={siteHref(`/industries/${item.slug}/`)} key={item.id}><span className="industry-index">{String(i+1).padStart(2,'0')}</span><span className="industry-title">{item.title}</span><span className="industry-summary">{item.summary}</span><ArrowUpRight size={17}/></a>)}</div>}
function IndustryDetailPage({item}:{item:typeof INDUSTRIES_DATA[number]}){return <><PageIntro eyebrow={item.eyebrow} title={<>{item.title}<br/><em>in focus.</em></>} lead={item.summary}/><section className="detail-overview"><div className="detail-icon"><Landmark size={28}/><span>APEX / SECTOR</span></div><div><Eyebrow>What is changing</Eyebrow><div className="driver-list">{item.keyDrivers.map((x,i)=><p key={x}><span>{String(i+1).padStart(2,'0')}</span>{x}</p>)}</div></div></section><section className="deliverables-section"><Eyebrow>Where we focus</Eyebrow><h2>Questions worth<br/><em>getting right.</em></h2><ul>{item.focusAreas.map((x,i)=><li key={x}><span>{String(i+1).padStart(2,'0')}</span>{x}<ArrowUpRight size={15}/></li>)}</ul></section><ContactBand/></>}
function InsightsPage(){return <><PageIntro eyebrow="Insights" title={<>Ideas for a<br/><em>changing world.</em></>} lead="Perspectives on strategy, finance, governance, tax and technology for leaders navigating complexity."/><section className="content-section"><SectionHeading eyebrow="Latest perspectives" title={<>The questions<br/><em>behind the headlines.</em></>}/><InsightCards items={ARTICLES_DATA}/></section><ContactBand/></>}
function InsightCards({items}:{items:typeof ARTICLES_DATA}){return <div className="insight-grid">{items.map(article=><article className="insight-card" key={article.id}><span className="eyebrow">{article.category} <i>·</i> {article.readTime}</span><h3>{article.title}</h3><p>{article.excerpt}</p><a href={siteHref(`/insights/${article.slug}/`)}>Read perspective <ArrowUpRight size={14}/></a></article>)}</div>}
function InsightDetailPage({item}:{item:typeof ARTICLES_DATA[number]}){return <><PageIntro eyebrow={`${item.category} · ${item.readTime}`} title={<>{item.title}</>} lead={item.excerpt}/><article className="article-body"><div className="article-meta"><span>{item.author.name}</span><span>{item.date}</span></div>{item.content.map((paragraph,i)=><p key={i}>{paragraph}</p>)}<div className="takeaways"><Eyebrow>Key takeaways</Eyebrow><ul>{item.keyTakeaways.map(x=><li key={x}>{x}</li>)}</ul></div></article><ContactBand/></>}
function AboutPage(){return <><PageIntro eyebrow="About Apex" title={<>Independent advice.<br/><em>Lasting perspective.</em></>} lead="Apex Advisory LLP works with leadership teams at moments that matter—when the choices are complex and the path forward needs to be clear."/><section className="detail-overview"><div className="detail-icon"><BriefcaseBusiness size={28}/><span>APEX / ABOUT</span></div><div><Eyebrow>Our point of view</Eyebrow><p className="detail-lead">Clarity is built through listening, rigorous analysis and the willingness to challenge assumptions. We work alongside your people to shape decisions that are both ambitious and executable.</p></div></section><section className="approach-section"><div className="approach-image"><img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=78" srcSet="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=480&q=78 480w, https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=78 900w" sizes="(max-width: 700px) 100vw, 50vw" loading="lazy" decoding="async" alt="A bright collaborative workspace"/><span className="image-label">Working side by side</span></div><div className="approach-copy"><Eyebrow>How we work</Eyebrow><h2>Close to the<br/><em>decision makers.</em></h2><p>Our teams bring a multidisciplinary view, communicate in plain language and stay engaged as recommendations move into practice.</p><ul><li><span>01</span>Start with your context</li><li><span>02</span>Make choices and trade-offs visible</li><li><span>03</span>Keep the work practical</li></ul><a className="text-link" href={siteHref('/services/')}>Explore our services <ArrowRight size={15}/></a></div></section><ContactBand/></>}
function ContactPage(){return <><PageIntro eyebrow="Contact" title={<>Let’s talk about<br/><em>what’s next.</em></>} lead={isGitHubPages ? 'This GitHub Pages version is a static site. Please email the firm for enquiries.' : 'Share a business enquiry and we’ll get back to you at your business email.'}/><section className="contact-page"><div className="contact-details"><Eyebrow>Firm contact details</Eyebrow><div><Mail size={18}/><span><small>Email</small>{FIRM_DETAILS.email}</span></div><div><Phone size={18}/><span><small>Telephone</small>{FIRM_DETAILS.phone}</span></div><div><MapPin size={18}/><span><small>Location</small>{FIRM_DETAILS.globalPresence}</span></div><p className="contact-note">Telephone and location details are still placeholders. Do not include confidential client, financial, identity, tax or bank information.</p></div><BusinessEnquiryForm/></section></>}
function BusinessEnquiryForm(){
  const [status,setStatus]=useState('');
  const [ready,setReady]=useState(false);
  const [sending,setSending]=useState(false);
  useEffect(()=>{setReady(true);},[]);
  const submitEnquiry=async(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    const form=event.currentTarget;
    const fields=new FormData(form);
    setSending(true);
    setStatus('Sending your enquiry…');
    try{
      const response=await fetch('/api/enquiry',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:fields.get('name'),email:fields.get('email'),category:fields.get('category'),message:fields.get('message'),website:fields.get('website')})});
      const result=await response.json() as {ok?:boolean;message?:string};
      if(!response.ok||!result.ok){setStatus(result.message||'We could not send your enquiry. Please email parv.sharmaa@outlook.com.');return;}
      setStatus(result.message||'Your enquiry has been received.');
      form.reset();
    }catch{
      setStatus('We could not reach the enquiry service. Please email parv.sharmaa@outlook.com.');
    }finally{setSending(false);}
  };
  if (isGitHubPages) {
    return <div className="demo-form"><Eyebrow>Business enquiry</Eyebrow><p className="form-notice">Online enquiry submissions are not available on this GitHub Pages site. Please email {FIRM_DETAILS.email} directly. Do not send confidential client records or sensitive financial or identity information.</p></div>;
  }
  return <form className="demo-form" onSubmit={submitEnquiry}>
    <Eyebrow>Business enquiry</Eyebrow>
    <p className="form-notice">Your enquiry is emailed to the firm. Do not include PAN, Aadhaar, bank details, tax returns, invoices or other confidential documents.</p>
    <fieldset className="demo-fields" disabled={!ready}><legend>Enquiry details</legend>
    <div className="form-grid"><label htmlFor="enquiry-name">Full name<input id="enquiry-name" name="name" autoComplete="name" required maxLength={100}/></label>
    <label htmlFor="enquiry-email">Business email<input id="enquiry-email" name="email" type="email" autoComplete="email" required maxLength={254}/></label></div>
    <label htmlFor="enquiry-category">Enquiry category<select id="enquiry-category" name="category" defaultValue="" required><option value="" disabled>Select a category</option><option>Accounting and bookkeeping</option><option>Tax and GST assistance</option><option>Business advisory</option><option>LLP compliance support</option><option>Other business enquiry</option></select></label>
    <label htmlFor="enquiry-message">Message <span>(optional)</span><textarea id="enquiry-message" name="message" rows={4} maxLength={1000} placeholder="Keep this general. Do not include confidential details."/></label>
    <label className="form-honeypot" aria-hidden="true">Leave this field blank<input name="website" tabIndex={-1} autoComplete="off"/></label>
    <label className="privacy-ack"><input type="checkbox" name="privacy-read" required/><span>I have read the <a href={siteHref('/privacy/')}>Privacy Policy</a>. This acknowledgement is not a substitute for consent where consent is legally required.</span></label>
    <button type="submit" className="button-primary" disabled={!ready||sending}>{sending?'Sending…':'Send enquiry'} <ArrowUpRight size={15}/></button>
    </fieldset>
    <p className="form-status" aria-live="polite">{status}</p>
  </form>;
}
function CookiePreferences(){
  const [open,setOpen]=useState(false);
  useEffect(()=>{
    const savedCookie=document.cookie.split('; ').find((item)=>item.startsWith('apex_cookie_consent='));
    let storedChoice=false;
    try{
      const saved=JSON.parse(localStorage.getItem('apex_cookie_consent')||'null') as {choice?:string;expires?:number}|null;
      storedChoice=!!saved&&['accepted','essential'].includes(saved.choice||'')&&(saved.expires||0)>Date.now();
      if(!storedChoice)localStorage.removeItem('apex_cookie_consent');
    }catch{/* Storage may be disabled; readable cookie remains the fallback. */}
    if(!storedChoice&&!savedCookie)setOpen(true);
    const showSettings=()=>setOpen(true);
    window.addEventListener('apex:cookie-settings',showSettings);
    return()=>window.removeEventListener('apex:cookie-settings',showSettings);
  },[]);
  const choose=(choice:'accepted'|'essential')=>{
    try{localStorage.setItem('apex_cookie_consent',JSON.stringify({choice,expires:Date.now()+31536000000}));}catch{/* Keep the consent cookie even when browser storage is unavailable. */}
    document.cookie=`apex_cookie_consent=${choice}; Max-Age=31536000; Path=/; SameSite=Lax${window.location.protocol==='https:'?'; Secure':''}`;
    setOpen(false);
  };
  if(!open)return null;
  return <section className="cookie-consent" aria-labelledby="cookie-title" aria-describedby="cookie-description">
    <div><Eyebrow>Privacy settings</Eyebrow><h2 id="cookie-title">Choose your cookie settings</h2><p id="cookie-description">We use a first-party cookie and browser storage to remember your choice for one year. This website has no login, session ID, analytics or advertising cookies. <a href={siteHref('/privacy/')}>Read the Privacy Policy</a>.</p></div>
    <div className="cookie-actions"><button className="cookie-essential" onClick={()=>choose('essential')}>Essential only</button><button className="button-primary" onClick={()=>choose('accepted')}>Allow cookies</button></div>
  </section>;
}
function LegalPage({title,eyebrow,lead,sections}:{title:string;eyebrow:string;lead:string;sections:[string,string][]}){return <><PageIntro eyebrow={eyebrow} title={<>{title}<br/><em>Apex Advisory LLP.</em></>} lead={lead}/><article className="article-body legal-body">{sections.map(([heading,copy])=><section key={heading}><h2>{heading}</h2><p>{copy}</p></section>)}<p className="contact-note">Draft for website planning. Last reviewed: 28 October 2026. Replace this date and obtain jurisdiction-specific review before publication.</p></article></>}
function ContactBand(){return <section className="contact-band"><div><Eyebrow>Start a conversation</Eyebrow><h2>Make your next move<br/><em>with confidence.</em></h2></div><a href={siteHref('/contact/')} className="contact-button">Talk with our team <ArrowUpRight size={17}/></a></section>}
function NotFoundPage(){return <PageIntro eyebrow="404" title={<>This page isn’t<br/><em>here.</em></>} lead="The page may have moved. Explore our services or return to the homepage."/>}
function SiteFooter(){return <footer className="firm-footer"><div className="footer-main"><div className="footer-brand"><a className="firm-brand" href={siteHref('/')}><span className="brand-mark">A</span><span>APEX <i>ADVISORY</i></span></a><p>{FIRM_DETAILS.tagline}</p></div><div className="footer-contact"><span className="eyebrow">Connect</span><span><Mail size={14}/>{FIRM_DETAILS.email}</span><span><Phone size={14}/>{FIRM_DETAILS.phone}</span><span><MapPin size={14}/>{FIRM_DETAILS.globalPresence}</span><span className="footer-demo-note">Some contact details remain placeholders for this preview.</span></div><div className="footer-nav">{navItems.map(item=><a href={siteHref(item.href)} key={item.label}>{item.label}</a>)}<a href={siteHref('/contact/')}>Contact</a><a href={siteHref('/privacy/')}>Privacy</a><a href={siteHref('/terms/')}>Terms</a><a href={siteHref('/disclaimer/')}>Disclaimer</a><button type="button" onClick={()=>window.dispatchEvent(new Event('apex:cookie-settings'))}>Cookie settings</button></div></div><div className="footer-bottom"><span>© {currentYear} Apex Advisory LLP</span><span>Clarity. Confidence. Growth.</span><a href={siteHref('#top')}>Back to top ↑</a></div></footer>}
function PageMetadata({title,description}:{title:string;description:string}){if(typeof document!=='undefined'){document.title=title;const desc=document.querySelector('meta[name="description"]');desc?.setAttribute('content',description)}return null}
export default App;
