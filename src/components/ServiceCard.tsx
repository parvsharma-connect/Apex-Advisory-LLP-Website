import React from 'react';
import { 
  Briefcase, 
  ShieldCheck, 
  TrendingUp, 
  ShieldAlert, 
  Compass, 
  Cpu, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import type { ServiceItem } from '../data/mockData';

interface ServiceCardProps {
  service: ServiceItem;
  onSelect: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-blue-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-sky-400" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-purple-400" />;
      case 'Compass': return <Compass className="w-6 h-6 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-blue-400" />;
      default: return <Briefcase className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <div 
      onClick={() => onSelect(service)}
      className="apple-card-dark rounded-3xl p-8 sm:p-10 flex flex-col justify-between cursor-pointer group relative overflow-hidden"
    >
      {/* Background Subtle Gradient Glow on Hover */}
      <div 
        className="absolute -right-20 -top-20 w-48 h-48 rounded-full bg-blue-500/10 blur-3xl group-hover:bg-blue-500/20 transition-all duration-500" 
        aria-hidden="true"
      />

      <div>
        {/* Header Icon & Eyebrow */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            {getIcon(service.iconName)}
          </div>
          <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
            {service.eyebrow}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-blue-300 transition-colors">
          {service.title}
        </h3>
        <p className="text-sm font-medium text-blue-400/90 mb-4 tracking-tight">
          {service.tagline}
        </p>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed mb-6 font-normal">
          {service.description}
        </p>

        {/* Highlight Deliverables */}
        <div className="space-y-2 pt-2 border-t border-white/5 mb-6">
          {service.deliverables.slice(0, 3).map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2 size={13} className="text-blue-400 shrink-0" />
              <span className="truncate">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Metrics & Action Link */}
      <div className="pt-6 border-t border-white/10 flex items-center justify-between">
        <div>
          <div className="text-lg font-bold text-white tracking-tight">
            {service.impactMetric.value}
          </div>
          <div className="text-[11px] text-slate-400">
            {service.impactMetric.label}
          </div>
        </div>
        
        <div className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 group-hover:text-blue-300 group-hover:translate-x-1 transition-all">
          <span>View Scope</span>
          <ArrowRight size={14} />
        </div>
      </div>
    </div>
  );
};
