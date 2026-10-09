import React, { useState } from 'react';
import { FileText, Download, Quote, ArrowRight, User, Building, ExternalLink, Sparkles, Clock, BookOpen, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { OFFICIAL_ARTICLES, DEMO_ARTICLES } from '../../data/articles';
import { Article } from '../../types/journal';
import { CitationModal } from '../layout/CitationModal';

interface Props {
  onNavigate: (path: string) => void;
  onSelectArticle: (slug: string) => void;
}

export const LatestArticlesSection: React.FC<Props> = ({ onNavigate, onSelectArticle }) => {
  const [selectedForCitation, setSelectedForCitation] = useState<Article | null>(null);
  const [showDemoPreview, setShowDemoPreview] = useState(false);

  const handlePdfClick = (e: React.MouseEvent, article: Article) => {
    e.stopPropagation();
    window.print();
  };

  const hasOfficialArticles = OFFICIAL_ARTICLES.length > 0;

  return (
    <section className="py-10 sm:py-12 bg-[#F8F5EE] border-b border-[#E8DED3] px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header: Refined & Elegant */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#E8DED3] pb-3 mb-6 gap-2">
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <span className="h-0.5 w-5 bg-[#C6A15B]" aria-hidden="true" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#7F3040]">
                SCHOLARLY REPOSITORY
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-academic text-[#292929]">
              {hasOfficialArticles ? 'Latest Published Articles' : 'Research Article Repository'}
            </h3>
          </div>
          <button
            onClick={() => onNavigate('/publications/articles')}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#7F3040] hover:text-[#5B1B29] transition-colors cursor-pointer group"
          >
            <span>Browse Repository Directory</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C6A15B] group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Official Publication Pipeline Status */}
        <div className="mb-5 px-3.5 py-2.5 bg-[#F6F1E8] border-l-2 border-[#C6A15B] rounded-xs text-xs text-[#575551] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span>
            <strong className="text-[#292929]">Publication Status:</strong> Volume 1, Issue 1 (Inaugural 2026) is in active peer-review production.
          </span>
          <span className="text-[11px] text-[#7F3040] font-semibold shrink-0">
            {OFFICIAL_ARTICLES.length} Officially Published Articles
          </span>
        </div>

        {/* If Official Articles Exist: Display them */}
        {hasOfficialArticles ? (
          <div className="space-y-3.5">
            {OFFICIAL_ARTICLES.map((article) => (
              <article
                key={article.id}
                className="bg-white border border-[#E8DED3] hover:border-[#7F3040]/70 rounded-xs p-4 sm:p-5 transition-all duration-200 hover:shadow-xs group hover:bg-[#FCFAF6] flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-[#575551]">
                    <span className="text-[10px] font-bold text-[#7F3040] uppercase tracking-wider bg-[#7F3040]/5 px-2 py-0.5 rounded-2xs border border-[#7F3040]/15">
                      {article.articleType}
                    </span>
                    <span aria-hidden="true" className="text-[#C6A15B]">•</span>
                    <span className="font-medium text-stone-700">Vol. {article.volume}, Issue {article.issue}</span>
                    <span aria-hidden="true" className="text-[#C6A15B]">•</span>
                    <span>{article.month} {article.year}</span>
                    {article.pages && (
                      <>
                        <span aria-hidden="true" className="text-[#C6A15B]">•</span>
                        <span>pp. {article.pages}</span>
                      </>
                    )}
                  </div>
                  <h4 
                    onClick={() => onSelectArticle(article.slug)}
                    className="text-base sm:text-lg font-bold font-academic text-[#292929] group-hover:text-[#7F3040] transition-colors leading-snug cursor-pointer pt-0.5"
                  >
                    {article.title}
                  </h4>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Dignified Professional Empty State for Official Research */
          <div className="bg-white border border-[#E8DED3] p-6 sm:p-10 rounded-xs text-center space-y-4 shadow-2xs">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#7F3040]/10 text-[#7F3040] mx-auto">
              <Clock className="w-6 h-6" />
            </div>
            <div className="space-y-1.5 max-w-lg mx-auto">
              <h4 className="text-lg sm:text-xl font-bold font-academic text-[#292929]">
                Inaugural Volume Articles in Editorial Production
              </h4>
              <p className="text-xs sm:text-sm text-[#575551] font-editorial-body leading-relaxed">
                Manuscripts for <em>Shivraj 350</em> Volume 1, Issue 1 (Inaugural Issue 2026) are currently undergoing rigorous double-blind peer review. Formally accepted research papers will be indexed and published in this open-access repository upon editorial approval.
              </p>
            </div>

            {/* Toggle for Technical Layout Demonstrations */}
            <div className="pt-2">
              <button
                onClick={() => setShowDemoPreview(!showDemoPreview)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#F8F5EE] hover:bg-[#E8DED3] border border-[#E8DED3] text-xs font-semibold text-[#7F3040] rounded-xs transition-colors cursor-pointer"
              >
                {showDemoPreview ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                <span>{showDemoPreview ? 'Hide Technical Layout Demos' : 'View Technical Layout Previews (Demo Only)'}</span>
              </button>
            </div>
          </div>
        )}

        {/* Collapsible Technical Demonstration Layout Records */}
        {showDemoPreview && (
          <div className="mt-6 pt-6 border-t border-[#E8DED3] space-y-4">
            <div className="bg-amber-50 border border-amber-200 p-3 rounded-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-amber-900">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                <span className="font-semibold">
                  DEVELOPMENT PREVIEW: Below records are sample layouts for typesetting and PDF preview testing only. They are not published research articles.
                </span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-200/80 px-2 py-0.5 rounded-2xs shrink-0 self-start sm:self-auto">
                DEMO — NOT FOR PUBLICATION
              </span>
            </div>

            <div className="space-y-3.5">
              {DEMO_ARTICLES.map((article) => (
                <article
                  key={article.id}
                  className="bg-white border-2 border-amber-300/80 rounded-xs p-4 sm:p-5 transition-all duration-200 hover:shadow-xs group flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-[#575551]">
                      <span className="text-[9px] font-bold text-amber-900 uppercase tracking-widest bg-amber-100 px-2 py-0.5 rounded-2xs border border-amber-300">
                        DEMO — NOT FOR PUBLICATION
                      </span>
                      <span aria-hidden="true" className="text-[#C6A15B]">•</span>
                      <span className="text-[10px] font-bold text-[#7F3040] uppercase tracking-wider bg-[#7F3040]/5 px-2 py-0.5 rounded-2xs border border-[#7F3040]/15">
                        {article.articleType}
                      </span>
                      <span aria-hidden="true" className="text-[#C6A15B]">•</span>
                      <span className="font-medium text-stone-700">Vol. {article.volume}, Issue {article.issue} (Layout Demo)</span>
                    </div>

                    <h4 
                      onClick={() => onSelectArticle(article.slug)}
                      className="text-base sm:text-lg font-bold font-academic text-[#292929] group-hover:text-[#7F3040] transition-colors leading-snug cursor-pointer pt-0.5"
                    >
                      {article.title}
                    </h4>

                    <div className="flex items-center gap-1.5 text-xs text-[#575551] pt-0.5">
                      <User className="w-3.5 h-3.5 text-[#7F3040] shrink-0" />
                      <span className="font-medium">{article.authors.map(a => a.name).join(', ')}</span>
                    </div>

                    <p className="text-xs text-[#575551] font-editorial-body line-clamp-2 leading-relaxed pt-1">
                      {article.abstract}
                    </p>
                  </div>

                  <div className="pt-3.5 mt-3 border-t border-[#E8DED3]/80 flex flex-wrap items-center justify-between gap-2">
                    <button
                      onClick={() => onSelectArticle(article.slug)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#7F3040] hover:text-[#5B1B29] transition-colors cursor-pointer"
                    >
                      <span>Inspect Demo Offprint Layout</span>
                      <ArrowRight className="w-3 h-3 text-[#C6A15B]" />
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => handlePdfClick(e, article)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-xs text-stone-600 hover:text-[#7F3040] bg-[#F8F5EE] hover:bg-[#E8DED3] border border-[#E8DED3] rounded-xs transition-colors cursor-pointer"
                        title="Preview Demo PDF"
                      >
                        <Download className="w-3 h-3 text-[#7F3040]" />
                        <span>PDF Format</span>
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedForCitation(article);
                        }}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-xs text-stone-600 hover:text-[#7F3040] bg-[#F8F5EE] hover:bg-[#E8DED3] border border-[#E8DED3] rounded-xs transition-colors cursor-pointer"
                        title="View Citation Format"
                      >
                        <Quote className="w-3 h-3 text-[#C6A15B]" />
                        <span>Cite Demo</span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

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
