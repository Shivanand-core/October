import React, { useState } from 'react';
import { Search, Filter, FileText, Download, Quote, User, Building, X, Check, RotateCcw } from 'lucide-react';
import { SAMPLE_ARTICLES } from '../data/articles';
import { Article } from '../types/journal';
import { CitationModal } from '../components/layout/CitationModal';

interface Props {
  onNavigate: (path: string) => void;
  onSelectArticle: (slug: string) => void;
}

export const ArticlesPage: React.FC<Props> = ({ onNavigate, onSelectArticle }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [tempType, setTempType] = useState<string>('All');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [selectedCitation, setSelectedCitation] = useState<Article | null>(null);

  const filteredArticles = SAMPLE_ARTICLES.filter((article) => {
    const matchesSearch =
      searchQuery.trim() === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.authors.some(a => a.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
      article.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesType =
      selectedType === 'All' || article.articleType === selectedType;

    return matchesSearch && matchesType;
  });

  const openMobileFilter = () => {
    setTempType(selectedType);
    setMobileFilterOpen(true);
  };

  const applyMobileFilter = () => {
    setSelectedType(tempType);
    setMobileFilterOpen(false);
  };

  const resetMobileFilter = () => {
    setTempType('All');
    setSelectedType('All');
    setMobileFilterOpen(false);
  };

  return (
    <div className="py-6 sm:py-10 md:py-16 px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Page Header */}
      <div className="border-b border-[#E8DED3] pb-4 sm:pb-6 mb-6 sm:mb-8">
        <div className="flex items-center gap-2 text-xs text-[#575551] mb-2">
          <button onClick={() => onNavigate('/')} className="hover:text-[#7F3040]">Home</button>
          <span>/</span>
          <button onClick={() => onNavigate('/publications')} className="hover:text-[#7F3040]">Publications</button>
          <span>/</span>
          <span className="text-[#7F3040] font-semibold">Articles</span>
        </div>
        <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-[#7F3040]">
          PEER-REVIEWED INDEX
        </span>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-academic text-[#292929] mt-1">
          Articles Repository
        </h1>
        <p className="text-xs sm:text-base text-[#575551] font-editorial-body mt-2 max-w-3xl">
          Search and browse peer-reviewed research papers published in <em>Shivraj 350</em>. Complete open-access texts and bibliographic metadata.
        </p>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="bg-white border border-[#E8DED3] p-3.5 sm:p-5 rounded-xs mb-6 sm:mb-8 space-y-3 sm:space-y-4 shadow-2xs">
        
        {/* Search Input (Full Width on Mobile) */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-3 text-[#7F3040]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, author, keyword..."
              className="w-full pl-9 pr-8 py-2.5 bg-[#F8F5EE] border border-[#E8DED3] focus:border-[#7F3040] rounded-xs text-xs sm:text-sm text-[#292929] outline-none"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2.5 text-stone-400 hover:text-stone-700"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Desktop Filter Dropdown (Preserved) */}
          <div className="hidden sm:flex items-center gap-2 sm:w-60">
            <Filter className="w-4 h-4 text-[#7F3040] shrink-0" />
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3 py-2 bg-[#F8F5EE] border border-[#E8DED3] text-xs font-medium text-[#292929] rounded-xs outline-none focus:border-[#7F3040]"
            >
              <option value="All">All Contribution Types</option>
              <option value="Research Article">Research Articles</option>
              <option value="Review Article">Review Articles</option>
              <option value="Case Study">Case Studies</option>
            </select>
          </div>

          {/* Mobile Filter Button (Opens Bottom Sheet / Modal) */}
          <div className="sm:hidden flex items-center justify-between gap-2 pt-1">
            <button
              onClick={openMobileFilter}
              className={`flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 border rounded-xs text-xs font-semibold uppercase tracking-wider transition-colors ${
                selectedType !== 'All' 
                  ? 'bg-[#7F3040] text-white border-[#7F3040]' 
                  : 'bg-[#F8F5EE] text-[#292929] border-[#E8DED3] hover:bg-[#E8DED3]'
              }`}
            >
              <Filter className="w-4 h-4" />
              <span>{selectedType !== 'All' ? `Type: ${selectedType}` : 'Filter by Type'}</span>
            </button>

            {selectedType !== 'All' && (
              <button
                onClick={() => setSelectedType('All')}
                className="py-2.5 px-3 text-xs text-[#7F3040] border border-[#7F3040]/30 rounded-xs bg-white"
                title="Reset filter"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Counter & Clear state */}
        <div className="flex items-center justify-between text-xs text-[#575551] pt-2 border-t border-[#F8F5EE]">
          <span>
            Showing {filteredArticles.length} of {SAMPLE_ARTICLES.length} papers
          </span>
          {(searchQuery || selectedType !== 'All') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedType('All');
              }}
              className="text-[#7F3040] hover:underline font-medium text-[11px]"
            >
              Reset all filters
            </button>
          )}
        </div>
      </div>

      {/* Articles Listing (Single-Column on Mobile with generous spacing) */}
      <div className="space-y-4 sm:space-y-6">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-12 bg-white border border-[#E8DED3] rounded-xs p-6">
            <p className="text-base font-semibold text-[#292929]">No articles matched your criteria</p>
            <p className="text-xs text-[#575551] mt-1">Try resetting search parameters or selecting &quot;All Contribution Types&quot;.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedType('All');
              }}
              className="mt-4 px-4 py-2 bg-[#7F3040] text-white text-xs font-semibold uppercase rounded-xs"
            >
              View All Articles
            </button>
          </div>
        ) : (
          filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white border border-[#E8DED3] hover:border-[#7F3040] p-4 sm:p-6 rounded-xs transition-all shadow-2xs hover:shadow-xs group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  
                  {/* Category & Volume Info */}
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-[#575551]">
                    <span className="font-bold text-[#7F3040] uppercase">
                      {article.articleType}
                    </span>
                    <span aria-hidden="true">•</span>
                    <span>Vol. {article.volume}, Issue {article.issue} ({article.year})</span>
                    {article.pages && (
                      <>
                        <span aria-hidden="true">•</span>
                        <span>pp. {article.pages}</span>
                      </>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => onSelectArticle(article.slug)}
                    className="text-lg sm:text-2xl font-bold font-academic text-[#292929] group-hover:text-[#7F3040] transition-colors cursor-pointer leading-snug"
                  >
                    {article.title}
                  </h3>

                  {/* Authors & Institutional Affiliation */}
                  <div className="text-xs text-[#575551] space-y-1">
                    <div className="flex items-center gap-1.5 font-medium text-slate-800">
                      <User className="w-3.5 h-3.5 text-[#7F3040]" />
                      <span>{article.authors.map(a => a.name).join(', ')}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <Building className="w-3.5 h-3.5 text-[#C6A15B]" />
                      <span className="line-clamp-1">{article.authors[0]?.affiliation}</span>
                    </div>
                  </div>

                  {/* Abstract Preview */}
                  <p className="text-xs sm:text-sm text-[#575551] font-editorial-body leading-relaxed line-clamp-3 pt-0.5">
                    {article.abstract}
                  </p>

                  {/* Keywords */}
                  <div className="flex flex-wrap items-center gap-1 pt-1.5 text-[11px] sm:text-xs text-[#575551]">
                    <span className="font-semibold text-slate-700">Keywords:</span>
                    {article.keywords.map((kw, i) => (
                      <span key={kw}>
                        {kw}{i < article.keywords.length - 1 ? ',' : ''}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Touch-Friendly Action Buttons */}
                <div className="w-full md:w-44 shrink-0 flex flex-row md:flex-col items-center md:items-stretch gap-2 pt-3 md:pt-0 border-t md:border-t-0 md:border-l border-[#E8DED3] md:pl-5">
                  <button
                    onClick={() => onSelectArticle(article.slug)}
                    className="flex-1 md:w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-[#7F3040] hover:bg-[#642331] text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors shrink-0"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Read Article</span>
                  </button>

                  <button
                    onClick={() => window.print()}
                    className="flex-1 sm:flex-initial md:w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#F8F5EE] hover:bg-[#E8DED3] border border-[#E8DED3] text-[#292929] text-xs font-medium rounded-xs transition-colors shrink-0"
                    title="Download / View Scholarly Offprint"
                  >
                    <Download className="w-3.5 h-3.5 text-[#7F3040]" />
                    <span>PDF</span>
                  </button>

                  <button
                    onClick={() => setSelectedCitation(article)}
                    className="px-3 py-2 bg-white hover:bg-[#F8F5EE] border border-[#E8DED3] text-[#575551] hover:text-[#7F3040] text-xs font-medium rounded-xs transition-colors shrink-0"
                    title="Generate bibliographic citation"
                  >
                    <Quote className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span className="hidden sm:inline">Cite</span>
                  </button>
                </div>
              </div>
            </article>
          ))
        )}
      </div>

      {/* Mobile Filter Bottom Sheet / Modal */}
      {mobileFilterOpen && (
        <div className="sm:hidden fixed inset-0 z-50 flex items-end justify-center">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileFilterOpen(false)}
          />

          {/* Bottom Sheet Card */}
          <div className="relative w-full bg-[#F8F5EE] border-t-2 border-[#7F3040] rounded-t-lg shadow-2xl p-5 z-10 max-h-[80vh] flex flex-col animate-in slide-in-from-bottom duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8DED3]">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#7F3040]" />
                <h3 className="text-base font-bold font-academic text-[#292929]">
                  Filter Articles by Type
                </h3>
              </div>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="p-1 text-stone-400 hover:text-stone-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Filter Options */}
            <div className="py-4 space-y-2.5 overflow-y-auto flex-1">
              {[
                { label: 'All Contribution Types', value: 'All' },
                { label: 'Research Articles', value: 'Research Article' },
                { label: 'Review Articles', value: 'Review Article' },
                { label: 'Case Studies', value: 'Case Study' }
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setTempType(opt.value)}
                  className={`w-full flex items-center justify-between p-3.5 rounded-xs text-xs font-semibold transition-colors ${
                    tempType === opt.value
                      ? 'bg-[#7F3040] text-white shadow-xs'
                      : 'bg-white text-[#292929] border border-[#E8DED3] hover:bg-[#E8DED3]/40'
                  }`}
                >
                  <span>{opt.label}</span>
                  {tempType === opt.value && <Check className="w-4 h-4" />}
                </button>
              ))}
            </div>

            {/* Footer Buttons */}
            <div className="pt-3 border-t border-[#E8DED3] flex items-center gap-3">
              <button
                onClick={resetMobileFilter}
                className="flex-1 py-3 px-4 bg-white border border-[#E8DED3] text-[#575551] text-xs font-semibold uppercase tracking-wider rounded-xs flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>

              <button
                onClick={applyMobileFilter}
                className="flex-2 py-3 px-4 bg-[#7F3040] text-white text-xs font-semibold uppercase tracking-wider rounded-xs flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span>Apply Filters</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Citation Modal */}
      <CitationModal
        article={selectedCitation}
        isOpen={!!selectedCitation}
        onClose={() => setSelectedCitation(null)}
      />

    </div>
  );
};
