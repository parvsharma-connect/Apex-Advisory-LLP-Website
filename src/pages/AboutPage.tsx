import React from 'react';
import { Award, Target, Users, Globe, BookOpen, Shield, Heart, Zap } from 'lucide-react';
import { SubNav } from '../components/SubNav';
import { FIRM_DETAILS, LEADERSHIP_DATA } from '../data/mockData';

interface AboutPageProps {
  setCurrentPage: (page: string) => void;
  onContactClick: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setCurrentPage, onContactClick }) => {
  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const values = [
    { icon: <Shield size={24} />, title: 'Fiduciary Integrity', desc: 'Every recommendation is grounded in defensible analysis and transparent economic reasoning, never influenced by conflicted incentives.' },
    { icon: <Target size={24} />, title: 'Analytical Precision', desc: 'We apply rigorous quantitative methodologies and forensic financial scrutiny to ensure our clients act on verified, not assumed, truth.' },
    { icon: <Heart size={24} />, title: 'Client-Centric Alignment', desc: 'Our advisory mandates are structured around your commercial outcomes, with partner-level accountability from engagement inception to completion.' },
    { icon: <Zap size={24} />, title: 'Decisive Execution', desc: 'Strategy without execution velocity is academic. We architect implementable roadmaps with clear milestones and measurable accountability.' },
  ];

  const milestones = [
    { year: '2011', event: 'Founded in New York by Elena Rostova and Marcus Sterling with a vision for unconflicted advisory.' },
    { year: '2014', event: 'Expanded to London, establishing the European Tax & International Structuring practice.' },
    { year: '2017', event: 'Launched the Singapore office, anchoring our Asia-Pacific financial consulting presence.' },
    { year: '2019', event: 'Opened the Zurich Digital Transformation & Technology advisory hub.' },
    { year: '2021', event: 'Surpassed $25B in aggregate transaction value advised across global mandates.' },
    { year: '2024', event: 'Reached 450+ professionals across 8 global offices with full OECD Pillar Two compliance capability.' },
    { year: '2026', event: 'Named among top-tier advisory LLPs globally, with $42B+ cumulative transaction capital advised.' },
  ];

  return (
    <div className="page-enter">
      <SubNav
        title="About Us"
        subtitle="Our Story & Leadership"
        actions={[
          { label: 'Join Our Team', onClick: () => navigateTo('careers') },
          { label: 'Contact', onClick: onContactClick, isPrimary: true },
        ]}
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 bg-gradient-to-b from-[#030712] via-[#061325] to-[#030712] overflow-hidden">
        <div className="glow-mesh w-[500px] h-[500px] bg-blue-600/15 -top-20 left-1/3" aria-hidden="true" />
        <div className="glow-mesh w-[400px] h-[400px] bg-indigo-600/10 top-60 -right-20" aria-hidden="true" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/20 backdrop-blur-md mb-8">
            <Globe size={14} className="text-blue-400" />
            <span className="text-xs font-medium tracking-wider text-blue-200 uppercase">
              Est. {FIRM_DETAILS.foundedYear} • {FIRM_DETAILS.globalPresence}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 max-w-4xl mx-auto">
            Built on Conviction,<br />
            <span className="text-gradient-blue">Driven by Evidence.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
            {FIRM_DETAILS.name} is an independent global advisory partnership that combines deep analytical rigor with decisive strategic execution to help organizations navigate complexity and build lasting competitive advantages.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-dark py-20 sm:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14 reveal">
            <div className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">Our Guiding Principles</div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Values That Define <span className="text-gradient-blue">Our Practice</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {values.map((val, idx) => (
              <div key={idx} className={`reveal reveal-delay-${idx + 1} apple-card-dark rounded-3xl p-8 sm:p-10`}>
                <div className="w-14 h-14 rounded-2xl bg-blue-600/15 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-3">{val.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative bg-gradient-to-b from-[#030712] via-[#061325] to-[#030712] py-20 sm:py-28 overflow-hidden">
        <div className="glow-mesh w-[600px] h-[600px] bg-blue-600/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14 reveal">
            <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">Our Journey</div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              A Legacy of <span className="text-gradient-cyan">Strategic Impact</span>
            </h2>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600/60 via-blue-400/40 to-transparent" />

            <div className="space-y-8">
              {milestones.map((milestone, idx) => (
                <div key={idx} className={`reveal reveal-delay-${Math.min(idx + 1, 6)} flex items-start gap-6 pl-2`}>
                  <div className="relative flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-blue-600/20 border-2 border-blue-500/50 flex items-center justify-center z-10 relative">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                    </div>
                  </div>
                  <div className="pb-2">
                    <div className="text-xs font-bold text-blue-400 mb-1.5 font-mono tracking-wider">{milestone.year}</div>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-dark py-20 sm:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14 reveal">
            <div className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">Global Leadership</div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Meet Our <span className="text-gradient-blue">Partners</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
              Our leadership team brings together decades of experience from the world's leading advisory firms, regulatory bodies, and academic institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {LEADERSHIP_DATA.map((leader, idx) => (
              <div key={leader.id} className={`reveal reveal-delay-${Math.min(idx + 1, 6)} apple-card-dark rounded-3xl p-8 relative overflow-hidden group`}>
                <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-blue-500/5 blur-2xl group-hover:bg-blue-500/10 transition-all duration-500" />

                <div className="relative z-10">
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-cyan-500 flex items-center justify-center text-xl font-bold text-white mb-5 shadow-lg shadow-blue-600/20">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </div>

                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-white tracking-tight">{leader.name}</h3>
                    <div className="text-xs font-medium text-blue-400">{leader.role}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{leader.practice}</div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-5 line-clamp-3">
                    {leader.bio}
                  </p>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {leader.specialties.slice(0, 3).map((spec, sIdx) => (
                      <span key={sIdx} className="px-2 py-0.5 rounded-full text-[10px] font-medium text-slate-300 bg-white/5 border border-white/5">
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="pt-5 border-t border-white/10">
                    <p className="text-xs text-slate-300 italic leading-relaxed">
                      "{leader.quote}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Band */}
      <section className="relative bg-gradient-to-r from-[#061325] via-[#0B1D40] to-[#061325] py-16 sm:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center reveal">
            {[
              { icon: <Award size={28} />, label: 'Top-Tier Advisory' },
              { icon: <Users size={28} />, label: '450+ Professionals' },
              { icon: <Globe size={28} />, label: '8 Global Offices' },
              { icon: <BookOpen size={28} />, label: 'Industry Publications' },
            ].map((item, idx) => (
              <div key={idx} className="space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mx-auto">
                  {item.icon}
                </div>
                <div className="text-sm font-medium text-slate-300">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
