import React from 'react';
import { Layers } from 'lucide-react';
import { SubNav } from '../components/SubNav';
import { IndustryGrid } from '../components/IndustryGrid';

interface IndustriesPageProps {
  setCurrentPage: (page: string) => void;
  onContactClick: () => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ setCurrentPage, onContactClick }) => {
  return (
    <div className="page-enter">
      <SubNav
        title="Industry Expertise"
        subtitle="Sector-Specific Advisory"
        actions={[
          { label: 'Services', onClick: () => { setCurrentPage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); } },
          { label: 'Discuss Your Sector', onClick: onContactClick, isPrimary: true },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 bg-gradient-to-b from-[#030712] via-[#061325] to-[#030712] overflow-hidden">
        <div className="glow-mesh w-[500px] h-[500px] bg-cyan-600/15 -top-20 left-1/3" aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/20 backdrop-blur-md mb-8">
            <Layers size={14} className="text-cyan-400" />
            <span className="text-xs font-medium tracking-wider text-cyan-200 uppercase">
              6 Specialized Sectors
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 max-w-4xl mx-auto">
            Deep Industry<br />
            <span className="text-gradient-cyan">Intelligence</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            Each sector demands specialized knowledge of its regulatory environment, competitive dynamics, and value-creation levers. Our dedicated industry teams bring proprietary frameworks to every engagement.
          </p>
        </div>
      </section>

      {/* Industries Interactive Grid */}
      <section className="section-dark py-20 sm:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="reveal">
            <IndustryGrid onContactClick={onContactClick} />
          </div>
        </div>
      </section>

      {/* Why Industry Specialization */}
      <section className="relative bg-gradient-to-r from-[#061325] via-[#0B1D40] to-[#061325] py-16 sm:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Why Sector Expertise Matters
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 reveal">
            {[
              { title: 'Regulatory Fluency', desc: 'Our advisors maintain active relationships with sector regulators and understand the compliance landscape from the inside out.' },
              { title: 'Competitive Benchmarking', desc: 'We bring proprietary benchmarking data and peer-set comparisons that generic advisors cannot access or interpret.' },
              { title: 'Operator Empathy', desc: 'Many of our partners served as operating executives in their respective industries before joining the advisory profession.' },
            ].map((item, idx) => (
              <div key={idx} className={`reveal-delay-${idx + 1} p-8 rounded-2xl bg-white/5 border border-white/10`}>
                <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
