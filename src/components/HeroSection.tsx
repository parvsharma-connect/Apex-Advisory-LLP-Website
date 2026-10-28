import React from 'react';
import { ArrowRight, ChevronRight, Shield, Award, TrendingUp, Users } from 'lucide-react';
import { FIRM_DETAILS } from '../data/mockData';

interface HeroSectionProps {
  onExploreServices: () => void;
  onMeetFirm: () => void;
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreServices,
  onMeetFirm,
  onContactClick
}) => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-gradient-to-b from-[#030712] via-[#061325] to-[#030712]">
      {/* Dynamic Ambient Background Glows */}
      <div 
        className="glow-mesh w-[550px] h-[550px] bg-blue-600/20 -top-24 left-1/2 -translate-x-1/2" 
        aria-hidden="true" 
      />
      <div 
        className="glow-mesh w-[400px] h-[400px] bg-cyan-500/15 top-72 -left-20" 
        aria-hidden="true" 
      />
      <div 
        className="glow-mesh w-[450px] h-[450px] bg-indigo-600/15 top-80 -right-20" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Subtle Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/20 backdrop-blur-md mb-8 animate-in fade-in duration-500">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
          <span className="text-xs font-medium tracking-wider text-blue-200 uppercase">
            {FIRM_DETAILS.name} • Professional Advisory Partnership
          </span>
        </div>

        {/* Hero Display Typography */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.08] mb-6">
          Your Next Chapter <br className="hidden sm:inline" />
          of Growth <span className="text-gradient-blue">Starts Here.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed mb-10 tracking-tight">
          We help businesses navigate complexity, strengthen strategy, and build sustainable growth through thoughtful professional advisory.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onExploreServices}
            className="apple-btn-primary w-full sm:w-auto text-base px-8 py-3.5 group"
          >
            <span>Explore Our Services</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={onMeetFirm}
            className="apple-btn-secondary w-full sm:w-auto text-base px-8 py-3.5 group"
          >
            <span>Meet Our Firm</span>
            <ChevronRight size={18} className="text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
          </button>
        </div>

        {/* Full-Width Interactive Hero Console */}
        <div className="relative rounded-3xl p-1 bg-gradient-to-b from-white/15 via-white/5 to-transparent shadow-2xl backdrop-blur-xl">
          <div className="rounded-[26px] bg-[#0A1329]/90 border border-white/10 p-6 sm:p-10 text-left overflow-hidden relative">
            
            {/* Top Console Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-slate-400 ml-2">
                  ADVISORY OPERATING CONSOLE // {FIRM_DETAILS.tagline.toUpperCase()}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Active Engagement Status: Institutional Integrity
              </div>
            </div>

            {/* 4 Core Quantitative Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-gradient-silver">
                  $42B+
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-400">
                  Transaction Capital Advised
                </div>
                <div className="text-[11px] text-blue-400 font-mono flex items-center gap-1">
                  <TrendingUp size={12} /> Institutional M&A & PE
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-gradient-silver">
                  18
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-400">
                  Global Partner Locations
                </div>
                <div className="text-[11px] text-blue-400 font-mono flex items-center gap-1">
                  <Award size={12} /> NYC, London, Zurich, SG
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-gradient-silver">
                  98.4%
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-400">
                  Client Retention Ratio
                </div>
                <div className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                  <Shield size={12} /> Long-Term Retainers
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-gradient-silver">
                  450+
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-400">
                  Advisory Specialists
                </div>
                <div className="text-[11px] text-cyan-400 font-mono flex items-center gap-1">
                  <Users size={12} /> Certified CPAs, CFAs, LLMs
                </div>
              </div>
            </div>

            {/* Bottom Insight Callout Strip */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gradient-to-r from-blue-950/40 via-transparent to-transparent -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 p-6 sm:px-10">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/20">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Latest Market Briefing
                  </div>
                  <div className="text-sm font-medium text-white">
                    Pillar Two Tax Mandates & Cross-Border Restructuring Report 2026
                  </div>
                </div>
              </div>
              <button
                onClick={onContactClick}
                className="text-xs font-medium text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors self-end sm:self-center"
              >
                <span>Request Custom Briefing</span>
                <ChevronRight size={14} />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
