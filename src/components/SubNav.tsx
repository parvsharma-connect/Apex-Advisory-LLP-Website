import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface SubNavProps {
  title: string;
  subtitle?: string;
  actions?: { label: string; onClick: () => void; isPrimary?: boolean }[];
  actionLabel?: string;
  onAction?: () => void;
}

export const SubNav: React.FC<SubNavProps> = ({ title, subtitle, actions, actionLabel, onAction }) => {
  const mergedActions = [
    ...(actions || []),
    ...(actionLabel && onAction ? [{ label: actionLabel, onClick: onAction, isPrimary: true }] : [])
  ];

  return (
    <div className="sticky top-11 z-40 w-full bg-[#030712]/75 backdrop-blur-xl border-b border-white/10 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between">
        <div className="flex items-baseline gap-3">
          <h2 className="text-sm font-semibold tracking-tight text-white">{title}</h2>
          {subtitle && (
            <span className="hidden sm:inline-block text-xs text-slate-400 font-normal">
              {subtitle}
            </span>
          )}
        </div>
        
        {mergedActions.length > 0 && (
          <div className="flex items-center gap-2.5">
            {mergedActions.map((act, idx) => (
              <button
                key={idx}
                onClick={act.onClick}
                className={`text-xs px-3 py-1 rounded-full font-medium transition-all duration-200 flex items-center gap-1 ${
                  act.isPrimary
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5 border border-white/10'
                }`}
              >
                <span>{act.label}</span>
                {act.isPrimary && <ArrowUpRight size={12} />}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
