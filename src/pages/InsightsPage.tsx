import React, { useState, useMemo } from 'react';
import { Search, BookOpen, Clock, ArrowRight, X, Share2, Check, Sparkles } from 'lucide-react';
import { SubNav } from '../components/SubNav';
import { InsightCard } from '../components/InsightCard';
import { ARTICLES_DATA, type ArticleItem } from '../data/mockData';

interface InsightsPageProps {
  setCurrentPage: (page: string) => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ setCurrentPage }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<ArticleItem | null>(null);
  const [copied, setCopied] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const categories = ['All', 'Strategy', 'Tax & Legal', 'Finance', 'Technology', 'Governance'];

  const filteredArticles = useMemo(() => {
    return ARTICLES_DATA.filter((article) => {
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      const matchesSearch = 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.author.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredArticle = useMemo(() => {
    return ARTICLES_DATA.find((a) => a.featured) || ARTICLES_DATA[0];
  }, []);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <div className="pt-11 bg-slate-950 text-white min-h-screen">
      <SubNav 
        title="Thought Leadership & Insights"
        actionLabel="Explore Services"
        onAction={() => setCurrentPage('services')}
      />

      {/* Hero Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-16 pb-12 sm:pt-24 sm:pb-16 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
          <BookOpen size={13} />
          Executive Perspectives
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
          Clarity on global trends and corporate mandates.
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Deep-dive analysis, empirical governance data, and actionable strategic frameworks from the partners of Apex Advisory.
        </p>
      </section>

      {/* Featured Editorial Banner */}
      {featuredArticle && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div 
            onClick={() => setActiveArticle(featuredArticle)}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-900 border border-white/10 p-8 sm:p-12 hover:border-blue-500/30 transition-all duration-300 cursor-pointer shadow-2xl"
          >
            <div className="flex flex-col lg:flex-row gap-8 lg:items-center justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-blue-600/30 text-blue-300 font-semibold border border-blue-500/30 uppercase tracking-wider text-xs">
                    Featured Insight
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock size={12} /> {featuredArticle.readTime}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 group-hover:text-blue-200 transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white text-sm">
                    {featuredArticle.author.avatarInitials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{featuredArticle.author.name}</div>
                    <div className="text-xs text-slate-400">{featuredArticle.author.role} • {featuredArticle.date}</div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <span className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm px-6 py-3 rounded-full transition-all group-hover:translate-x-1 shadow-lg">
                  Read Editorial <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter and Search Bar */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-white/10">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-900/30'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search insights or authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <InsightCard
                key={article.id}
                article={article}
                onRead={(art) => setActiveArticle(art)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white/5 rounded-3xl border border-white/10">
            <p className="text-slate-400 text-lg mb-4">No insights matched your criteria.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="text-blue-400 font-medium text-sm hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </section>

      {/* Newsletter Subscription (Apple-style Journal) */}
      <section className="bg-slate-900 border-t border-b border-white/10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-12 h-12 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center mx-auto mb-4 border border-blue-500/20">
            <Sparkles size={22} />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
            The Apex Executive Briefing
          </h3>
          <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Delivered monthly: curated strategic imperatives, regulatory shifts, and economic modeling directly from our partners.
          </p>

          {subscribed ? (
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-semibold">
              <Check size={18} /> Thank you. You are registered for the next Executive Briefing.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter corporate email..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 bg-white/10 border border-white/15 rounded-full px-5 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm px-6 py-3 rounded-full transition-all whitespace-nowrap shadow-md shadow-blue-900/30"
              >
                Subscribe
              </button>
            </form>
          )}
          <p className="text-slate-400 text-xs mt-4">Zero spam. Strictly confidential. Unsubscribe at any time.</p>
        </div>
      </section>

      {/* Article Detail Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-white/15 rounded-3xl max-w-3xl w-full my-8 p-6 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <span className="px-3 py-1 rounded-full bg-blue-900/40 text-blue-300 font-semibold border border-blue-500/20 uppercase tracking-wider text-xs">
                {activeArticle.category}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="p-2 text-slate-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                  title="Share link"
                >
                  {copied ? <Check size={18} className="text-emerald-400" /> : <Share2 size={18} />}
                </button>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="p-2 text-slate-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Article Heading */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-4">
              {activeArticle.title}
            </h2>

            {/* Author bar */}
            <div className="flex items-center gap-4 py-4 mb-6 border-b border-white/10 text-xs sm:text-sm text-slate-400">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white text-sm">
                {activeArticle.author.avatarInitials}
              </div>
              <div>
                <div className="font-semibold text-white">{activeArticle.author.name}</div>
                <div className="text-xs">{activeArticle.author.role}</div>
              </div>
              <div className="ml-auto flex items-center gap-3 text-xs">
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>
            </div>

            {/* Key Takeaways Box */}
            {activeArticle.keyTakeaways && activeArticle.keyTakeaways.length > 0 && (
              <div className="bg-blue-950/40 border border-blue-500/20 rounded-2xl p-5 mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-3">
                  Strategic Mandates (Key Takeaways)
                </h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  {activeArticle.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold">•</span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Article Content */}
            <div className="space-y-5 text-slate-300 leading-relaxed text-base">
              {activeArticle.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-400">
                Published by Apex Advisory LLP Knowledge Institute. All rights reserved.
              </p>
              <button
                onClick={() => {
                  setActiveArticle(null);
                  setCurrentPage('contact');
                }}
                className="bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs px-5 py-2.5 rounded-full transition-all"
              >
                Discuss with Author
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
