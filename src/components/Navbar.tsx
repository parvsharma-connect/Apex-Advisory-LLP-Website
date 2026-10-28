import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Globe } from 'lucide-react';
import { FIRM_DETAILS } from '../data/mockData';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  openContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage, openContactModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'industries', label: 'Industries' },
    { id: 'insights', label: 'Insights' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Global Apple-Style 44px Top Nav */}
      <nav 
        className={`w-full h-11 transition-all duration-300 ${
          isScrolled 
            ? 'glass-nav-dark shadow-2xl' 
            : 'bg-[#030712]/80 backdrop-blur-md border-b border-white/5'
        }`}
        aria-label="Global"
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-white focus:outline-none group"
            aria-label="Apex Advisory LLP Home"
          >
            <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-blue-700 to-sky-400 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="m3 21 9-18 9 18-5-3-4 3-4-3-5 3z" />
              </svg>
            </div>
            <span className="font-semibold text-sm tracking-tight text-slate-100 group-hover:text-white transition-colors">
              APEX <span className="text-blue-400 font-light">ADVISORY</span>
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-7 text-xs font-normal text-slate-300">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors py-1 relative ${
                  currentPage === link.id
                    ? 'text-white font-medium'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.label}
                {currentPage === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => {
                if (openContactModal) openContactModal();
                else handleNavClick('contact');
              }}
              className="px-3.5 py-1 text-xs font-medium text-white bg-blue-600/90 hover:bg-blue-500 rounded-full transition-all duration-200 border border-blue-400/30 shadow-sm shadow-blue-600/30 hover:scale-[1.02]"
            >
              Inquire
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-11 bottom-0 bg-[#030712]/95 backdrop-blur-2xl z-40 p-6 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200">
          <div className="space-y-4 pt-4">
            <div className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase mb-2">
              Navigation Menu
            </div>
            {navLinks.map((link, idx) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left py-2.5 text-2xl font-medium tracking-tight transition-all flex items-center justify-between border-b border-white/5 ${
                  currentPage === link.id ? 'text-blue-400 font-semibold' : 'text-slate-200 hover:text-white'
                }`}
                style={{ animationDelay: `${idx * 40}ms` }}
              >
                <span>{link.label}</span>
                <ArrowRight size={18} className="opacity-40" />
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 space-y-4 pb-8">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (openContactModal) openContactModal();
                else setCurrentPage('contact');
              }}
              className="w-full py-3.5 rounded-full text-center text-sm font-semibold bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30"
            >
              Consult an Advisor
            </button>
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Globe size={14} className="text-slate-400" /> Global Partnership
              </span>
              <span>{FIRM_DETAILS.phone}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
