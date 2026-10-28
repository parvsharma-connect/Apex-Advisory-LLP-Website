import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, CheckCircle2, ChevronRight, X, Sparkles, Award, Globe, Heart, Send } from 'lucide-react';
import { SubNav } from '../components/SubNav';
import { JOB_OPENINGS_DATA, type JobOpening } from '../data/mockData';

interface CareersPageProps {
  setCurrentPage: (page: string) => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ setCurrentPage }) => {
  const [selectedDept, setSelectedDept] = useState<string>('All');
  const [activeJob, setActiveJob] = useState<JobOpening | null>(null);
  const [applyingJob, setApplyingJob] = useState<JobOpening | null>(null);
  
  // Application form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedIn: '',
    experienceYears: '3-5 years',
    coverNote: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const departments = ['All', 'Strategy & Transactions', 'Tax & Legal', 'Digital & Technology', 'Financial Advisory'];

  const filteredJobs = JOB_OPENINGS_DATA.filter(
    (job) => selectedDept === 'All' || job.department === selectedDept
  );

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setApplyingJob(null);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        linkedIn: '',
        experienceYears: '3-5 years',
        coverNote: ''
      });
    }, 2500);
  };

  return (
    <div className="pt-11 bg-slate-950 text-white min-h-screen">
      <SubNav 
        title="Careers at Apex Advisory"
        actionLabel="Join Our Talent Network"
        onAction={() => setCurrentPage('contact')}
      />

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-16 pb-16 sm:pt-24 sm:pb-20 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
          <Briefcase size={13} />
          High-Impact Careers
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
          Architect the future of global enterprise.
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
          At Apex Advisory LLP, we unite world-class legal minds, quantitative strategists, and technology leaders to solve humanity's most complex commercial challenges.
        </p>
      </section>

      {/* Values & Culture Pillars (Apple 4-Grid) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 hover:border-blue-500/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-6 border border-blue-500/20">
              <Award size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Merit-Driven Equity</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Transparent, meritocratic progression to partnership. Zero artificial tenure gates.
            </p>
          </div>

          <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 hover:border-blue-500/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center mb-6 border border-indigo-500/20">
              <Globe size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Global Mobility</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Secondment opportunities across London, New York, Singapore, and Zurich practices.
            </p>
          </div>

          <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 hover:border-blue-500/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-purple-600/20 text-purple-400 flex items-center justify-center mb-6 border border-purple-500/20">
              <Sparkles size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Fellowship Stipend</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              $15,000 annual budget for executive education, certifications, and international conferences.
            </p>
          </div>

          <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 hover:border-blue-500/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center mb-6 border border-emerald-500/20">
              <Heart size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Holistic Wellbeing</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Comprehensive global healthcare, flexible hybrid rhythm, and sabbaticals after 4 years.
            </p>
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 pb-4 border-b border-white/10 gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight mb-2">
              Current Practice Openings
            </h2>
            <p className="text-slate-400 text-sm">
              Discover active mandates across our global advisory desks.
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  selectedDept === dept
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Roles List */}
        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-slate-900 border border-white/10 hover:border-blue-500/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all group"
            >
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-900/40 text-blue-300 font-semibold border border-blue-500/20 text-xs uppercase">
                    {job.department}
                  </span>
                  <span className="flex items-center gap-1 text-slate-400 text-xs">
                    <MapPin size={12} /> {job.location}
                  </span>
                  <span className="flex items-center gap-1 text-slate-400 text-xs">
                    <Clock size={12} /> {job.type}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {job.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">
                  {job.overview}
                </p>
              </div>

              <div className="flex items-center gap-3 self-start md:self-center flex-shrink-0">
                <button
                  onClick={() => setActiveJob(job)}
                  className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-semibold transition-colors"
                >
                  View Details
                </button>
                <button
                  onClick={() => setApplyingJob(job)}
                  className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all shadow-md shadow-blue-900/30 inline-flex items-center gap-1.5"
                >
                  Apply Now <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Role Details Modal */}
      {activeJob && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-white/15 rounded-3xl max-w-2xl w-full my-8 p-6 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div>
                <span className="px-3 py-1 rounded-full bg-blue-900/40 text-blue-300 font-semibold border border-blue-500/20 uppercase tracking-wider text-xs">
                  {activeJob.department}
                </span>
                <span className="text-xs text-slate-400 ml-3">{activeJob.location} • {activeJob.type}</span>
              </div>
              <button
                onClick={() => setActiveJob(null)}
                className="p-2 text-slate-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10"
              >
                <X size={20} />
              </button>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              {activeJob.title}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {activeJob.overview}
            </p>

            {/* Responsibilities */}
            <div className="mb-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-blue-300 mb-3">
                Core Responsibilities
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                {activeJob.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="mb-8">
              <h4 className="text-sm font-bold uppercase tracking-wider text-blue-300 mb-3">
                Candidate Qualifications
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                {activeJob.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => setActiveJob(null)}
                className="px-5 py-2.5 rounded-full bg-white/5 text-slate-400 hover:text-white text-xs font-semibold"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const target = activeJob;
                  setActiveJob(null);
                  setApplyingJob(target);
                }}
                className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-900/30"
              >
                Proceed to Application
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Application Form Modal */}
      {applyingJob && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-white/15 rounded-3xl max-w-xl w-full my-8 p-6 sm:p-10 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div>
                <h3 className="text-lg font-bold text-white">Apply for Role</h3>
                <p className="text-xs text-blue-400">{applyingJob.title} — {applyingJob.location}</p>
              </div>
              <button
                onClick={() => setApplyingJob(null)}
                className="p-2 text-slate-400 hover:text-white rounded-full bg-white/5"
              >
                <X size={20} />
              </button>
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Application Received</h4>
                <p className="text-sm text-slate-400 max-w-sm mx-auto">
                  Our Managing Partners review all candidacies with extreme discretion. You will receive an encrypted status update within 72 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">
                    Full Legal Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Sarah J. Vance"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">
                      Corporate Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="s.vance@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 019-2834"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">
                    LinkedIn / Professional Profile
                  </label>
                  <input
                    type="url"
                    value={formData.linkedIn}
                    onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
                    placeholder="https://linkedin.com/in/username"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">
                    Executive Summary / Candidate Note
                  </label>
                  <textarea
                    rows={3}
                    value={formData.coverNote}
                    onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                    placeholder="Highlight your notable transactions, legal opinions, or strategic leadership..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="pt-4 flex items-center justify-end gap-3 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setApplyingJob(null)}
                    className="px-5 py-2.5 rounded-full bg-white/5 text-slate-400 hover:text-white text-xs font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold inline-flex items-center gap-2 shadow-md shadow-blue-900/30"
                  >
                    <Send size={14} /> Submit Confidential Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
