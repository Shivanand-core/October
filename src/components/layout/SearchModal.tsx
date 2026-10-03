import React, { useState } from 'react';
import { Search, X, BookOpen, ArrowRight, FileText, User } from 'lucide-react';
import { SAMPLE_ARTICLES } from '../../data/articles';
import { SCOPE_CATEGORIES } from '../../data/journal';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle: (slug: string) => void;
  onNavigate: (path: string) => void;
}

export const SearchModal: React.FC<Props> = ({ isOpen, onClose, onSelectArticle, onNavigate }) => {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  if (!isOpen) return null;

  const filteredArticles = SAMPLE_ARTICLES.filter((art) => {
    const matchesQuery =
      query.trim() === '' ||
      art.title.toLowerCase().includes(query.toLowerCase()) ||
      art.abstract.toLowerCase().includes(query.toLowerCase()) ||
      art.authors.some((a) => a.name.toLowerCase().includes(query.toLowerCase())) ||
      art.keywords.some((k) => k.toLowerCase().includes(query.toLowerCase()));

    return matchesQuery;
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-start justify-center pt-3 sm:pt-20 px-2.5 sm:px-4 pb-8">
      <div 
        className="bg-[#F8F5EE] border border-[#C6A15B]/40 rounded-xs shadow-2xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Header & Search Input */}
        <div className="p-3.5 sm:p-5 border-b border-[#E8DED3] bg-white">
          <div className="flex items-center justify-between pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7F3040] flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Shivraj 350 Scholarly Search</span>
            </span>
            <button
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-slate-700 rounded-xs transition-colors"
              aria-label="Close search modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-3 text-[#7F3040]" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles, authors, keywords, disciplines..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#F8F5EE] border border-[#E8DED3] focus:border-[#7F3040] focus:ring-1 focus:ring-[#7F3040] rounded-xs text-sm text-[#292929] placeholder:text-[#575551]/60 outline-none transition-colors"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 mt-3 pt-2 text-xs text-[#575551]">
            <span className="font-semibold text-slate-700">Explore Subjects:</span>
            {SCOPE_CATEGORIES.slice(0, 4).map((cat) => (
              <button
                key={cat.title}
                onClick={() => setQuery(cat.title.split(' ')[0])}
                className="hover:text-[#7F3040] hover:underline transition-colors"
              >
                {cat.title.split('&')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-5 space-y-4">
          <div className="flex items-center justify-between text-xs text-[#575551] pb-1">
            <span>
              {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'} found in repository index
            </span>
            <span className="italic text-[11px]">Phase 1 Search Shell</span>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-8 px-4 bg-white/60 border border-dashed border-[#E8DED3] rounded-xs">
              <p className="text-sm font-medium text-[#292929]">No published manuscripts match &quot;{query}&quot;</p>
              <p className="text-xs text-[#575551] mt-1">
                Try searching for broad disciplines such as &quot;Urban&quot;, &quot;Biochemistry&quot;, or &quot;Historiography&quot;.
              </p>
            </div>
          ) : (
            filteredArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => {
                  onSelectArticle(article.slug);
                  onClose();
                }}
                className="bg-white border border-[#E8DED3] hover:border-[#7F3040] p-4 rounded-xs cursor-pointer transition-all hover:shadow-xs group"
              >
                <div className="flex items-center gap-2 text-xs text-[#575551] mb-1">
                  <span className="font-semibold text-[#7F3040]">{article.articleType}</span>
                  <span aria-hidden="true">·</span>
                  <span>Vol. {article.volume}, Issue {article.issue} ({article.year})</span>
                  {article.isSampleOrPreview && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="text-amber-800 text-[10px] uppercase font-semibold">Preview Paper</span>
                    </>
                  )}
                </div>

                <h4 className="text-base font-semibold font-academic text-[#292929] group-hover:text-[#7F3040] transition-colors leading-snug">
                  {article.title}
                </h4>

                <p className="text-xs text-[#575551] mt-1.5 line-clamp-2 leading-relaxed font-editorial-body">
                  {article.abstract}
                </p>

                <div className="mt-3 pt-2 border-t border-[#F8F5EE] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <User className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span className="font-medium">{article.authors.map(a => a.name).join(', ')}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[#7F3040] font-semibold group-hover:translate-x-0.5 transition-transform">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-3 bg-[#E8DED3]/60 border-t border-[#E8DED3] flex items-center justify-between text-xs text-[#575551]">
          <span>Press ESC or click close to exit</span>
          <button
            onClick={() => {
              onNavigate('/publications/articles');
              onClose();
            }}
            className="text-[#7F3040] font-semibold hover:underline"
          >
            Browse Complete Articles Index →
          </button>
        </div>
      </div>
    </div>
  );
};
