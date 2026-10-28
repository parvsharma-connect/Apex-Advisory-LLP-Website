import React, { useState } from 'react';
import { Phone, MapPin, ShieldCheck, Clock, Send, CheckCircle2, ChevronDown } from 'lucide-react';
import { SubNav } from '../components/SubNav';

interface ContactPageProps {
  setCurrentPage: (page: string) => void;
}

const GLOBAL_OFFICES = [
  {
    city: "New York (Global HQ)",
    address: "Apex Tower, 450 Park Avenue, Suite 2800, New York, NY 10022",
    phone: "+1 (212) 555-0190",
    timezone: "UTC-5 (Eastern Time)",
    email: "ny.office@apexadvisory-demo.com"
  },
  {
    city: "London",
    address: "100 Bishopsgate, Level 32, London EC2N 4AG, United Kingdom",
    phone: "+44 20 7946 0920",
    timezone: "UTC+0 (GMT / BST)",
    email: "london.office@apexadvisory-demo.com"
  },
  {
    city: "Singapore",
    address: "Marina Bay Financial Centre, Tower 2, #38-01, Singapore 018983",
    phone: "+65 6789 0123",
    timezone: "UTC+8 (SGT)",
    email: "singapore.office@apexadvisory-demo.com"
  },
  {
    city: "Zurich",
    address: "Gotthardstrasse 26, 8002 Zürich, Switzerland",
    phone: "+41 44 215 8800",
    timezone: "UTC+1 (CET)",
    email: "zurich.office@apexadvisory-demo.com"
  },
  {
    city: "Mumbai",
    address: "One BKC, C-Wing, 14th Floor, Bandra Kurla Complex, Mumbai 400051",
    phone: "+91 22 6678 9000",
    timezone: "UTC+5:30 (IST)",
    email: "mumbai.office@apexadvisory-demo.com"
  }
];

const FAQS = [
  {
    q: "How does Apex Advisory engage with new corporate clients?",
    a: "We begin with a preliminary confidential alignment session led by a Managing Partner to evaluate strategic objectives, jurisdictional constraints, and mandate feasibility under standard bilateral NDA."
  },
  {
    q: "What is your typical engagement structure and fee framework?",
    a: "We structure engagements via fixed retainers, milestone-contingent advisory fees, or value-linked outcomes depending on the mandate maturity and scope complexity."
  },
  {
    q: "How do you ensure data security and confidentiality?",
    a: "All client engagements adhere to ISO 27001 and SOC 2 Type II data residency standards with end-to-end encrypted repositories and ring-fenced deal rooms."
  }
];

export const ContactPage: React.FC<ContactPageProps> = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    practice: 'Business Advisory',
    dealSize: '$50M - $250M',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-11 bg-slate-950 text-white min-h-screen">
      <SubNav 
        title="Executive Consultation & Engagement"
        actionLabel="Explore Services"
        onAction={() => setCurrentPage('services')}
      />

      {/* Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-16 pb-12 sm:pt-24 sm:pb-16 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
          <ShieldCheck size={13} />
          Strictly Confidential Inquiries
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
          Initiate an executive mandate.
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Connect directly with our practice leaders across New York, London, Singapore, Zurich, and Mumbai.
        </p>
      </section>

      {/* Main Grid: Form + Office Directory */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Inquiry Form Column (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900 border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-2">Request Partner Consultation</h2>
            <p className="text-slate-400 text-sm mb-8">
              Complete this encrypted brief to receive an initial evaluation from our practice committee within 24 business hours.
            </p>

            {submitted ? (
              <div className="py-16 text-center bg-white/5 rounded-2xl border border-emerald-500/30 p-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Consultation Request Dispatched</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed mb-6">
                  Thank you, <span className="font-semibold text-white">{formData.fullName}</span>. Your brief has been encrypted and routed to the {formData.practice} Committee. A Managing Director will reach out to you at <span className="text-blue-400">{formData.email}</span>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      organization: '',
                      practice: 'Business Advisory',
                      dealSize: '$50M - $250M',
                      message: ''
                    });
                  }}
                  className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Richard Sterling"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="r.sterling@enterprise.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">
                      Organization / Entity *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Sterling Global Capital"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">
                      Practice of Interest
                    </label>
                    <select
                      value={formData.practice}
                      onChange={(e) => setFormData({ ...formData, practice: e.target.value })}
                      className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="Business Advisory">Business Advisory</option>
                      <option value="Tax & Corporate Law">Tax & Corporate Law</option>
                      <option value="Strategy & Restructuring">Strategy & Restructuring</option>
                      <option value="Digital & Technology">Digital & Technology</option>
                      <option value="Financial Advisory & M&A">Financial Advisory & M&A</option>
                      <option value="Regulatory Compliance">Regulatory Compliance</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">
                    Scope / Transaction Enterprise Value
                  </label>
                  <select
                    value={formData.dealSize}
                    onChange={(e) => setFormData({ ...formData, dealSize: e.target.value })}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Under $50M">Under $50M</option>
                    <option value="$50M - $250M">$50M - $250M</option>
                    <option value="$250M - $1B">$250M - $1B</option>
                    <option value="$1B+">$1B+ (Global Enterprise)</option>
                    <option value="Non-transactional / Advisory">Non-transactional Retainer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">
                    Executive Brief / Mandate Overview *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Outline your strategic objectives, relevant timeline, and target jurisdictions..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="text-xs text-slate-400 flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-blue-400" /> Protected by Mutual NDA
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-900/40 inline-flex items-center gap-2"
                  >
                    <Send size={15} /> Submit Mandate Brief
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Global Presence Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-white mb-2">Global Desks</h3>
            <p className="text-slate-400 text-xs mb-4">
              Direct access to our jurisdictional resident partners.
            </p>

            {GLOBAL_OFFICES.map((office, idx) => (
              <div 
                key={idx}
                className="bg-slate-900/80 border border-white/10 rounded-2xl p-5 hover:border-blue-500/30 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-white text-base">{office.city}</h4>
                  <span className="text-[11px] text-blue-400 flex items-center gap-1">
                    <Clock size={11} /> {office.timezone}
                  </span>
                </div>
                <p className="text-xs text-slate-400 flex items-start gap-2 mb-2 leading-relaxed">
                  <MapPin size={14} className="text-slate-400 flex-shrink-0 mt-0.5" />
                  {office.address}
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs text-slate-300">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Phone size={12} className="text-blue-400" /> {office.phone}
                  </span>
                  <span className="text-slate-400 text-[11px]">{office.email}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            Engagement Inquiries FAQ
          </h3>
          <p className="text-slate-400 text-sm">Key considerations before initiating engagement.</p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => (
            <div 
              key={index}
              className="bg-slate-900 border border-white/10 rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-4 text-left font-semibold text-white flex items-center justify-between hover:text-blue-300 transition-colors"
              >
                <span className="text-sm sm:text-base">{faq.q}</span>
                <ChevronDown 
                  size={18} 
                  className={`text-slate-400 transform transition-transform duration-200 ${
                    openFaq === index ? 'rotate-180 text-blue-400' : ''
                  }`} 
                />
              </button>
              {openFaq === index && (
                <div className="px-6 pb-4 pt-1 text-slate-300 text-sm leading-relaxed border-t border-white/5">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
