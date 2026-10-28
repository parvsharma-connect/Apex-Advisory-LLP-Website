import React, { useState } from 'react';
import { 
  Laptop, 
  HeartPulse, 
  Factory, 
  ShoppingBag, 
  Landmark, 
  Rocket, 
  ArrowRight,
  TrendingUp,
  CheckCircle
} from 'lucide-react';
import { INDUSTRIES_DATA, type IndustryItem } from '../data/mockData';

interface IndustryGridProps {
  onSelectIndustry?: (industry: IndustryItem) => void;
  onContactClick?: () => void;
}

export const IndustryGrid: React.FC<IndustryGridProps> = ({ onSelectIndustry, onContactClick }) => {
  const [activeTab, setActiveTab] = useState<string>(INDUSTRIES_DATA[0].id);

  const getIndustryIcon = (id: string) => {
    switch (id) {
      case 'technology': return <Laptop className="w-5 h-5" />;
      case 'healthcare': return <HeartPulse className="w-5 h-5" />;
      case 'manufacturing': return <Factory className="w-5 h-5" />;
      case 'retail': return <ShoppingBag className="w-5 h-5" />;
      case 'financial-services': return <Landmark className="w-5 h-5" />;
      case 'startups': return <Rocket className="w-5 h-5" />;
      default: return <Landmark className="w-5 h-5" />;
    }
  };

  const selected = INDUSTRIES_DATA.find(i => i.id === activeTab) || INDUSTRIES_DATA[0];

  return (
    <div className="space-y-10">
      
      {/* Apple-Style Pill Tab Selector */}
      <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 gap-2 no-scrollbar">
        <div className="inline-flex p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          {INDUSTRIES_DATA.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActiveTab(ind.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                activeTab === ind.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold scale-100'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {getIndustryIcon(ind.id)}
              <span>{ind.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Featured Active Industry Showcase Card */}
      <div className="apple-card-dark rounded-3xl p-8 sm:p-12 relative overflow-hidden">
        <div 
          className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" 
          aria-hidden="true" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Scope & Focus Areas */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-400/20 text-xs font-semibold text-blue-300 uppercase tracking-wider">
              {selected.eyebrow}
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              {selected.title}
            </h3>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              {selected.summary}
            </p>

            <div className="space-y-3 pt-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Core Advisory Drivers
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selected.keyDrivers.map((driver, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle size={14} className="text-blue-400 shrink-0" />
                    <span>{driver}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-2">
              {selected.focusAreas.map((area, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-slate-300 border border-white/10"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Case Highlight Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#0F1E3D] border border-blue-500/20 p-6 sm:p-8 space-y-5 shadow-xl relative">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-blue-300">
                  Client Engagement Dossier
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              <div>
                <div className="text-xs text-slate-400 mb-1 font-medium">Enterprise Profile:</div>
                <div className="text-sm font-semibold text-white">
                  {selected.caseHighlight.clientType}
                </div>
              </div>

              <div>
                <div className="text-xs text-slate-400 mb-1 font-medium">Strategic Challenge:</div>
                <div className="text-xs text-slate-300 leading-relaxed">
                  {selected.caseHighlight.challenge}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-950/60 border border-blue-400/20">
                <div className="text-[11px] text-blue-300 font-semibold mb-1 flex items-center gap-1.5">
                  <TrendingUp size={13} />
                  <span>Delivered Outcome</span>
                </div>
                <div className="text-xs font-medium text-emerald-300 leading-relaxed">
                  {selected.caseHighlight.outcome}
                </div>
              </div>

              <button
                onClick={() => {
                  if (onSelectIndustry) onSelectIndustry(selected);
                  else if (onContactClick) onContactClick();
                }}
                className="w-full py-2.5 rounded-full text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Request {selected.title.split(' ')[0]} Case Brief</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
