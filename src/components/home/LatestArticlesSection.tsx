import React, { useState } from 'react';
import { FileText, Download, Quote, ArrowRight, User, Building, ExternalLink } from 'lucide-react';
import { SAMPLE_ARTICLES } from '../../data/articles';
import { Article } from '../../types/journal';
import { CitationModal } from '../layout/CitationModal';

interface Props {
  onNavigate: (path: string) => void;
  onSelectArticle: (slug: string) => void;
}

export const LatestArticlesSection: React.FC<Props> = ({ onNavigate, onSelectArticle }) => {
  const [selectedForCitation, setSelectedForCitation] = useState<Article | null>(null);

  const handlePdfClick = (e: React.MouseEvent, article: Article) => {
    e.stopPropagation();
    // Scholarly PDF reader preview or printable version
    window.print();
  };

  return (
    <section className="py-14 bg-[#F8F5EE] border-b border-[#E8DED3] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#E8DED3] pb-3 mb-8 gap-3">
          <div>
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#7F3040]">
              SCHOLARLY REPOSITORY
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-academic text-[#292929] mt-0.5">
              Latest Published Articles
            </h3>
          </div>
          <button
            onClick={() => onNavigate('/publications/articles')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7F3040] hover:text-[#642331] uppercase tracking-wider"
          >
            <span>View All Repository Articles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Development & Editorial Pipeline Notice (Section 17 Compliance) */}
        <div className="mb-6 p-3 bg-[#E8DED3]/40 border-l-2 border-[#C6A15B] text-xs text-[#575551] flex items-center justify-between">
          <span>
            <strong className="text-[#292929]">Inaugural Issue Preview:</strong> Below are representative manuscripts 
            undergoing final typesetting and continuous publishing in Volume 1, Issue 1.
          </span>
          <span className="hidden md:inline text-[11px] text-[#7F3040] font-semibold">
            Double-Blind Peer Reviewed
          </span>
        </div>

        {/* Articles List */}
        <div className="space-y-6">
          {SAMPLE_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="bg-white border border-[#E8DED3] hover:border-[#7F3040]/70 rounded-xs p-6 lg:p-7 transition-all duration-200 hover:shadow-xs group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                
                {/* Main Article Body */}
                <div className="flex-1 space-y-3">
                  
                  {/* Article Metadata (Zero-pill text styling) */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#575551]">
                    <span className="font-bold text-[#7F3040] tracking-wide uppercase">
                      {article.articleType}
                    </span>
                    <span aria-hidden="true" className="text-[#C6A15B]">•</span>
                    <span>Vol. {article.volume}, Issue {article.issue}</span>
                    <span aria-hidden="true" className="text-[#C6A15B]">•</span>
                    <span>{article.month} {article.year}</span>
                    {article.pages && (
                      <>
                        <span aria-hidden="true" className="text-[#C6A15B]">•</span>
                        <span>pp. {article.pages}</span>
                      </>
                    )}
                    {article.isSampleOrPreview && (
                      <>
                        <span aria-hidden="true" className="text-[#C6A15B]">•</span>
                        <span className="text-amber-800 font-medium">
                          Preview Release
                        </span>
                      </>
                    )}
                  </div>

                  {/* Title */}
                  <h4 
                    onClick={() => onSelectArticle(article.slug)}
                    className="text-xl sm:text-2xl font-bold font-academic text-[#292929] group-hover:text-[#7F3040] transition-colors cursor-pointer leading-snug"
                  >
                    {article.title}
                  </h4>

                  {/* Authors & Institutional Affiliation */}
                  <div className="text-xs text-[#575551] space-y-1 pt-0.5">
                    <div className="flex items-center gap-1.5 font-medium text-slate-800">
                      <User className="w-3.5 h-3.5 text-[#7F3040] shrink-0" />
                      <span>{article.authors.map(a => a.name).join(', ')}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <Building className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                      <span className="line-clamp-1">{article.authors[0]?.affiliation}</span>
                    </div>
                  </div>

                  {/* Abstract Excerpt */}
                  <p className="text-xs sm:text-sm text-[#575551] font-editorial-body leading-relaxed line-clamp-3 pt-1">
                    {article.abstract}
                  </p>

                  {/* Keywords */}
                  <div className="pt-2 flex flex-wrap items-center gap-1.5 text-xs text-[#575551]">
                    <span className="font-semibold text-slate-700">Keywords:</span>
                    {article.keywords.map((kw, idx) => (
                      <span key={kw}>
                        {kw}{idx < article.keywords.length - 1 ? ',' : ''}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Right Action Rail (Read, PDF, Cite) */}
                <div className="w-full md:w-44 shrink-0 flex flex-wrap sm:flex-nowrap md:flex-col items-center md:items-stretch gap-2 pt-3 md:pt-0 border-t md:border-t-0 md:border-l border-[#E8DED3] md:pl-5">
                  <button
                    onClick={() => onSelectArticle(article.slug)}
                    className="flex-1 sm:flex-initial md:w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-[#7F3040] hover:bg-[#642331] text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors shrink-0"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Read Article</span>
                  </button>

                  <button
                    onClick={(e) => handlePdfClick(e, article)}
                    className="flex-1 sm:flex-initial md:w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#F8F5EE] hover:bg-[#E8DED3] text-[#292929] border border-[#E8DED3] text-xs font-medium rounded-xs transition-colors shrink-0"
                    title="Download / View Scholarly Offprint PDF"
                  >
                    <Download className="w-3.5 h-3.5 text-[#7F3040]" />
                    <span>PDF</span>
                  </button>

                  <button
                    onClick={() => setSelectedForCitation(article)}
                    className="w-full sm:w-auto md:w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-white hover:bg-[#F8F5EE] text-[#575551] hover:text-[#7F3040] border border-[#E8DED3] text-xs font-medium rounded-xs transition-colors shrink-0"
                    title="Generate bibliographic citation"
                  >
                    <Quote className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span>Cite</span>
                  </button>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Citation Modal */}
      <CitationModal
        article={selectedForCitation}
        isOpen={!!selectedForCitation}
        onClose={() => setSelectedForCitation(null)}
      />
    </section>
  );
};
