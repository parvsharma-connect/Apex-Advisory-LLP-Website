import React from 'react';
import { X, CheckCircle2, ArrowRight, Shield, Award } from 'lucide-react';
import type { ServiceItem } from '../data/mockData';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onConsult: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onConsult }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#081126] border border-white/15 p-6 sm:p-10 text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Eyebrow & Title */}
        <div className="mb-6">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 mb-2">
            Practice Area // {service.eyebrow}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            {service.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            {service.tagline}
          </p>
        </div>

        {/* Detailed Scope */}
        <div className="space-y-4 mb-8 pt-6 border-t border-white/10">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Advisory Thesis & Strategic Mandate
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed font-normal">
            {service.longDescription}
          </p>
        </div>

        {/* Key Metrics Callout */}
        <div className="rounded-2xl bg-blue-950/40 border border-blue-500/20 p-5 mb-8 flex items-center justify-between">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">
              {service.impactMetric.value}
            </div>
            <div className="text-xs text-slate-300 font-medium">
              {service.impactMetric.label}
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-blue-300 bg-blue-900/40 px-3 py-1.5 rounded-full border border-blue-400/20">
            <Award size={14} /> Fiduciary Integrity
          </div>
        </div>

        {/* Core Capabilities */}
        <div className="mb-8">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
            Core Specialized Capabilities
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {service.capabilities.map((cap, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="font-semibold text-sm text-white mb-1.5">{cap.title}</div>
                <div className="text-xs text-slate-400 leading-relaxed">{cap.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tangible Engagement Deliverables */}
        <div className="mb-8">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
            Engagement Deliverables
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200 p-2.5 rounded-xl bg-white/5">
                <CheckCircle2 size={15} className="text-blue-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Action CTA */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 flex items-center gap-1.5">
            <Shield size={14} className="text-slate-400" />
            <span>Confidential Preliminary Consultation Available</span>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors w-full sm:w-auto text-center"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onConsult(service.title);
              }}
              className="apple-btn-primary py-2.5 px-6 text-xs w-full sm:w-auto"
            >
              <span>Consult on {service.title}</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
