import React, { useState } from 'react';
import { ArrowRight, Filter } from 'lucide-react';
import { SubNav } from '../components/SubNav';
import { ServiceCard } from '../components/ServiceCard';
import { ServiceModal } from '../components/ServiceModal';
import { SERVICES_DATA, type ServiceItem } from '../data/mockData';

interface ServicesPageProps {
  setCurrentPage: (page: string) => void;
  onContactClick: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ setCurrentPage, onContactClick }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <div className="page-enter">
      <SubNav
        title="Advisory Services"
        subtitle="Our Six Core Disciplines"
        actions={[
          { label: 'Industries', onClick: () => { setCurrentPage('industries'); window.scrollTo({ top: 0, behavior: 'smooth' }); } },
          { label: 'Request Briefing', onClick: onContactClick, isPrimary: true },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 bg-gradient-to-b from-[#030712] via-[#061325] to-[#030712] overflow-hidden">
        <div className="glow-mesh w-[500px] h-[500px] bg-blue-600/15 -top-20 right-1/4" aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/20 backdrop-blur-md mb-8">
            <Filter size={14} className="text-blue-400" />
            <span className="text-xs font-medium tracking-wider text-blue-200 uppercase">
              6 Practice Areas • Full-Scope Advisory
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 max-w-4xl mx-auto">
            Strategic Advisory<br />
            <span className="text-gradient-blue">Without Boundaries</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            Our multi-disciplinary practice areas converge to deliver integrated, analytically-driven solutions to the world's most consequential business challenges.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-dark py-20 sm:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES_DATA.map((service, idx) => (
              <div key={service.id} className={`reveal reveal-delay-${Math.min(idx + 1, 6)}`}>
                <ServiceCard service={service} onSelect={setSelectedService} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Model Strip */}
      <section className="relative bg-gradient-to-r from-[#061325] via-[#0B1D40] to-[#061325] py-16 sm:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Our Engagement Model
            </h2>
            <p className="text-base text-slate-400 max-w-2xl mx-auto">
              Every advisory mandate follows a structured, transparent methodology designed for institutional-quality outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
            {[
              { step: '01', title: 'Discovery', desc: 'Comprehensive stakeholder interviews, data analysis, and strategic landscape mapping.' },
              { step: '02', title: 'Diagnosis', desc: 'Quantitative root-cause analysis, gap assessments, and opportunity sizing.' },
              { step: '03', title: 'Design', desc: 'Bespoke solution architecture with clear milestones, KPIs, and governance.' },
              { step: '04', title: 'Deliver', desc: 'Hands-on implementation support, change management, and value realization tracking.' },
            ].map((phase, idx) => (
              <div key={idx} className={`reveal-delay-${idx + 1} p-6 rounded-2xl bg-white/5 border border-white/10 text-center`}>
                <div className="text-4xl font-extrabold text-gradient-blue mb-3 font-mono">{phase.step}</div>
                <h4 className="text-base font-bold text-white mb-2">{phase.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <button onClick={onContactClick} className="apple-btn-primary text-base px-10 py-4 group">
              <span>Begin Your Engagement</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onConsult={() => onContactClick()}
        />
      )}
    </div>
  );
};
