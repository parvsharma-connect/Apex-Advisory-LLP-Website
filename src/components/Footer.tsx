import React from 'react';
import { MapPin, Phone, Mail, Globe, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { FIRM_DETAILS } from '../data/mockData';

const currentYear = new Date().getFullYear();

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const handleNav = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    firm: [
      { label: 'About Us', page: 'about' },
      { label: 'Our Leadership', page: 'about' },
      { label: 'Careers', page: 'careers' },
      { label: 'Contact', page: 'contact' },
    ],
    services: [
      { label: 'Business Advisory', page: 'services' },
      { label: 'Tax & Compliance', page: 'services' },
      { label: 'Financial Consulting', page: 'services' },
      { label: 'Risk Management', page: 'services' },
      { label: 'Corporate Strategy', page: 'services' },
      { label: 'Digital Transformation', page: 'services' },
    ],
    industries: [
      { label: 'Technology & Software', page: 'industries' },
      { label: 'Healthcare & Life Sciences', page: 'industries' },
      { label: 'Advanced Manufacturing', page: 'industries' },
      { label: 'Financial Services', page: 'industries' },
      { label: 'Retail & Consumer Goods', page: 'industries' },
      { label: 'Startups & Ventures', page: 'industries' },
    ],
    resources: [
      { label: 'Thought Leadership', page: 'insights' },
      { label: 'Market Reports', page: 'insights' },
      { label: 'Governance Frameworks', page: 'insights' },
      { label: 'Case Studies', page: 'industries' },
    ],
  };

  return (
    <footer className="relative bg-[#020510] border-t border-white/10">
      {/* Pre-Footer CTA Band */}
      <div className="relative overflow-hidden">
        <div className="glow-mesh w-[600px] h-[400px] bg-blue-600/15 top-0 left-1/2 -translate-x-1/2" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-5 max-w-3xl mx-auto leading-[1.1]">
            Ready to Transform<br />Your Business Trajectory?
          </h2>
          <p className="text-lg text-slate-400 font-normal max-w-2xl mx-auto mb-10">
            Our advisory professionals are prepared to discuss your strategic priorities and construct a bespoke engagement framework.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleNav('contact')}
              className="apple-btn-primary px-10 py-4 text-base group"
            >
              <span>Schedule Consultation</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button
              onClick={() => handleNav('services')}
              className="apple-btn-secondary px-8 py-4 text-base"
            >
              Explore Advisory Services
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
            {/* Brand Column */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-1 space-y-5">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-gradient-to-tr from-blue-700 to-sky-400 flex items-center justify-center shadow-md shadow-blue-500/20">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="m3 21 9-18 9 18-5-3-4 3-4-3-5 3z" />
                  </svg>
                </div>
                <span className="font-semibold text-sm tracking-tight text-white">
                  APEX <span className="text-blue-400 font-light">ADVISORY</span>
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
                {FIRM_DETAILS.tagline} — A global professional advisory partnership delivering strategic, financial, and operational excellence.
              </p>
              <div className="space-y-2.5 text-xs text-slate-400">
                <div className="flex items-start gap-2">
                  <MapPin size={13} className="shrink-0 mt-0.5 text-slate-500" />
                  <span>{FIRM_DETAILS.hqAddress}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={13} className="text-slate-500" />
                  <span>{FIRM_DETAILS.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={13} className="text-slate-500" />
                  <span>{FIRM_DETAILS.email}</span>
                </div>
              </div>
            </div>

            {/* Navigation Columns */}
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-4">Our Firm</h4>
              <ul className="space-y-2.5">
                {footerLinks.firm.map((link, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => handleNav(link.page)}
                      className="text-xs text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-4">Services</h4>
              <ul className="space-y-2.5">
                {footerLinks.services.map((link, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => handleNav(link.page)}
                      className="text-xs text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-4">Industries</h4>
              <ul className="space-y-2.5">
                {footerLinks.industries.map((link, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => handleNav(link.page)}
                      className="text-xs text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-4">Resources</h4>
              <ul className="space-y-2.5">
                {footerLinks.resources.map((link, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => handleNav(link.page)}
                      className="text-xs text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Global Offices Strip */}
          <div className="pt-8 border-t border-white/5 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Globe size={14} className="text-slate-500" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Global Offices</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {['New York', 'London', 'Singapore', 'Zurich', 'Mumbai', 'Dubai', 'Toronto', 'Sydney'].map((city) => (
                <span key={city} className="px-3 py-1.5 rounded-full text-xs font-medium text-slate-400 bg-white/5 border border-white/5">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-[11px] text-slate-500">
            <ShieldCheck size={13} />
            <span>© {currentYear} {FIRM_DETAILS.name}. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">{FIRM_DETAILS.registeredLLPNumber}</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-500">
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <span>•</span>
            <button className="hover:text-white transition-colors">Terms of Service</button>
            <span>•</span>
            <button className="hover:text-white transition-colors">Cookie Preferences</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
