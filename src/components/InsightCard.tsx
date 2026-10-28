import React from 'react';
import { ArrowUpRight, Clock } from 'lucide-react';
import type { ArticleItem } from '../data/mockData';

interface InsightCardProps {
  article: ArticleItem;
  onRead: (article: ArticleItem) => void;
}

export const InsightCard: React.FC<InsightCardProps> = ({ article, onRead }) => {
  return (
    <article 
      onClick={() => onRead(article)}
      className="apple-card-dark rounded-3xl p-7 sm:p-8 flex flex-col justify-between cursor-pointer group"
    >
      <div>
        {/* Top Metadata */}
        <div className="flex items-center justify-between mb-4 text-xs">
          <span className="px-3 py-1 rounded-full bg-blue-900/40 text-blue-300 font-semibold border border-blue-500/20 uppercase tracking-wider text-[11px]">
            {article.category}
          </span>
          <div className="flex items-center gap-1.5 text-slate-400 font-medium">
            <Clock size={12} />
            <span>{article.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mb-3 group-hover:text-blue-300 transition-colors">
          {article.title}
        </h4>

        {/* Excerpt */}
        <p className="text-sm text-slate-400 leading-relaxed font-normal mb-6">
          {article.excerpt}
        </p>
      </div>

      {/* Author & Footer Link */}
      <div className="pt-6 border-t border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-700 to-indigo-500 flex items-center justify-center text-xs font-bold text-white shadow-sm">
            {article.author.avatarInitials}
          </div>
          <div>
            <div className="text-xs font-semibold text-white">{article.author.name}</div>
            <div className="text-[11px] text-slate-400">{article.date}</div>
          </div>
        </div>

        <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-blue-600 text-slate-300 group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:rotate-45">
          <ArrowUpRight size={15} />
        </div>
      </div>
    </article>
  );
};
