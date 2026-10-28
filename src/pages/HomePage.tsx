import React, { useState } from 'react';
import { ArrowRight, ChevronRight, Quote } from 'lucide-react';
import { HeroSection } from '../components/HeroSection';
import { ServiceCard } from '../components/ServiceCard';
import { ServiceModal } from '../components/ServiceModal';
import { IndustryGrid } from '../components/IndustryGrid';
import { InsightCard } from '../components/InsightCard';
import { SubNav } from '../components/SubNav';
import { 
  SERVICES_DATA, 
  ARTICLES_DATA, 
  TESTIMONIALS_DATA, 
  FIRM_DETAILS,
  type ServiceItem,
  type ArticleItem 
} from '../data/mockData';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
  onContactClick: () => void;
  onArticleRead: (article: ArticleItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setCurrentPage, onContactClick, onArticleRead }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page-enter">
      {/* Hero Section */}
      <HeroSection
        onExploreServices={() => navigateTo('services')}
        onMeetFirm={() => navigateTo('about')}
        onContactClick={onContactClick}
      />

      {/* SubNav - Services */}
      <SubNav
        title="Advisory Services"
        subtitle={FIRM_DETAILS.tagline}
        actions={[
          { label: 'All Services', onClick: () => navigateTo('services') },
          { label: 'Consult', onClick: onContactClick, isPrimary: true },
        ]}
      />

      {/* ── Services Section ── */}
      <section className="section-dark py-20 sm:py-28 relative">
        <div className="glow-mesh w-[500px] h-[500px] bg-blue-700/10 -top-40 -left-20" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14 reveal">
            <div className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
              Practice Areas
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Six Disciplines of <span className="text-gradient-blue">Strategic Excellence</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
              Deep domain expertise delivered through institutional-grade engagement frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES_DATA.map((service, idx) => (
              <div key={service.id} className={`reveal reveal-delay-${idx + 1}`}>
                <ServiceCard service={service} onSelect={setSelectedService} />
              </div>
            ))}
          </div>

          <div className="text-center mt-14 reveal">
            <button
              onClick={() => navigateTo('services')}
              className="apple-btn-secondary text-base group"
            >
              <span>View Full Service Catalog</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* ── Full-Width Impact Band ── */}
      <section className="relative bg-gradient-to-r from-[#061325] via-[#0B1D40] to-[#061325] py-24 sm:py-32 overflow-hidden">
        <div className="glow-mesh w-[400px] h-[400px] bg-blue-600/15 top-1/2 left-1/4 -translate-y-1/2" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center reveal">
          <div className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4">
            Institutional Track Record
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]">
            Decades of Proven<br />Advisory Impact
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-12">
            Our outcomes speak to a record of fiduciary integrity, analytical depth, and commercial relevance.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: '15+', label: 'Years of Advisory Practice' },
              { value: '$42B+', label: 'Transaction Value Advised' },
              { value: '98.4%', label: 'Client Retention Rate' },
              { value: '140+', label: 'Buyout Mandates Delivered' },
            ].map((stat, idx) => (
              <div key={idx} className={`reveal reveal-delay-${idx + 1}`}>
                <div className="text-3xl sm:text-4xl font-extrabold text-gradient-silver mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries Section ── */}
      <section className="section-dark py-20 sm:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14 reveal">
            <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">
              Industry Expertise
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Sector-Specific <span className="text-gradient-cyan">Strategic Depth</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
              Dedicated advisory professionals who understand your industry's unique regulatory, commercial, and operational landscape.
            </p>
          </div>

          <div className="reveal">
            <IndustryGrid onContactClick={onContactClick} />
          </div>
        </div>
      </section>

      {/* ── Testimonials Section ── */}
      <section className="relative bg-gradient-to-b from-[#030712] via-[#061325] to-[#030712] py-20 sm:py-28 overflow-hidden">
        <div className="glow-mesh w-[500px] h-[500px] bg-indigo-600/10 top-0 right-0" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14 reveal">
            <div className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
              Client Perspectives
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Trusted by <span className="text-gradient-blue">Global Enterprises</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {TESTIMONIALS_DATA.map((testimonial, idx) => (
              <div key={testimonial.id} className={`reveal reveal-delay-${idx + 1} apple-card-dark rounded-3xl p-8 sm:p-10 relative overflow-hidden`}>
                <div className="absolute top-6 right-8 opacity-5">
                  <Quote size={80} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-900/40 text-blue-300 font-semibold border border-blue-500/20 text-[11px] uppercase tracking-wider">
                      {testimonial.sector}
                    </span>
                    <span className="text-xs text-emerald-400 font-medium">{testimonial.metric}</span>
                  </div>
                  <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="pt-5 border-t border-white/10 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-700 to-cyan-500 flex items-center justify-center text-xs font-bold text-white">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{testimonial.author}</div>
                      <div className="text-xs text-slate-400">{testimonial.role}, {testimonial.organization}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Insights Section ── */}
      <section className="section-dark py-20 sm:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-14 reveal">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
                Thought Leadership
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Latest Advisory Insights
              </h2>
            </div>
            <button
              onClick={() => navigateTo('insights')}
              className="text-sm font-medium text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors group"
            >
              <span>View All Insights</span>
              <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {ARTICLES_DATA.slice(0, 3).map((article, idx) => (
              <div key={article.id} className={`reveal reveal-delay-${idx + 1}`}>
                <InsightCard article={article} onRead={onArticleRead} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onConsult={(_title) => {
            onContactClick();
          }}
        />
      )}
    </div>
  );
};
