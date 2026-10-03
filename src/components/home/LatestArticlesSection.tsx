import React, { useState } from 'react';
import { FileText, Download, Quote, ArrowRight, User, Building, ExternalLink, Sparkles } from 'lucide-react';
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
    window.print();
  };

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
              Latest Published Articles
            </h3>
          </div>
          <button
            onClick={() => onNavigate('/publications/articles')}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#7F3040] hover:text-[#5B1B29] transition-colors cursor-pointer group"
          >
            <span>View All Repository Articles</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C6A15B] group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Compact Editorial Pipeline Note */}
        <div className="mb-5 px-3.5 py-2 bg-[#F6F1E8] border-l-2 border-[#C6A15B] rounded-xs text-xs text-[#575551] flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <span>
            <strong className="text-[#292929]">Inaugural Volume 1, Issue 1:</strong> Peer-reviewed research undergoing continuous publishing.
          </span>
          <span className="text-[11px] text-[#7F3040] font-semibold shrink-0">
            Double-Blind Evaluated
          </span>
        </div>

        {/* Refined & Streamlined Articles List */}
        <div className="space-y-3.5">
          {SAMPLE_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="bg-white border border-[#E8DED3] hover:border-[#7F3040]/70 rounded-xs p-4 sm:p-5 transition-all duration-200 hover:shadow-xs group hover:bg-[#FCFAF6] flex flex-col justify-between"
            >
              <div className="space-y-2">
                
                {/* Meta Strip: Category, Volume, Date, Status */}
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
                  {article.doi && (
                    <>
                      <span aria-hidden="true" className="text-[#C6A15B]">•</span>
                      <span className="text-[10px] font-mono text-stone-400 truncate max-w-[140px] sm:max-w-none">
                        doi:{article.doi}
                      </span>
                    </>
                  )}
                </div>

                {/* Article Title */}
                <h4 
                  onClick={() => onSelectArticle(article.slug)}
                  className="text-base sm:text-[17.5px] font-bold font-academic text-[#292929] group-hover:text-[#7F3040] transition-colors cursor-pointer leading-snug pt-0.5"
                >
                  {article.title}
                </h4>

                {/* Authors & Institutional Line */}
                <div className="text-xs text-[#575551] flex flex-wrap items-center gap-x-2 gap-y-0.5">
                  <div className="flex items-center gap-1 font-medium text-stone-800">
                    <User className="w-3 h-3 text-[#7F3040] shrink-0" />
                    <span>{article.authors.map(a => a.name).join(', ')}</span>
                  </div>
                  {article.authors[0]?.affiliation && (
                    <>
                      <span className="text-stone-300">|</span>
                      <span className="text-stone-500 italic font-serif text-[11.5px] truncate max-w-sm">
                        {article.authors[0].affiliation}
                      </span>
                    </>
                  )}
                </div>

                {/* Concise Abstract Excerpt */}
                <p className="text-xs text-[#575551] font-editorial-body leading-relaxed line-clamp-2 pt-0.5">
                  {article.abstract}
                </p>

              </div>

              {/* Bottom Action Strip: Keywords on Left, Action Buttons on Right */}
              <div className="pt-3 mt-3 border-t border-[#F2ECE1] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                
                {/* Keywords Tags */}
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-[#575551]">
                  <span className="font-semibold text-stone-600 text-[10px] uppercase tracking-wider">Keywords:</span>
                  {article.keywords.slice(0, 3).map((kw) => (
                    <span 
                      key={kw} 
                      className="bg-[#F8F5EE] border border-[#E8DED3] px-1.5 py-0.5 rounded-2xs text-[10.5px] text-stone-600"
                    >
                      {kw}
                    </span>
                  ))}
                  {article.keywords.length > 3 && (
                    <span className="text-[10px] text-stone-400">+{article.keywords.length - 3}</span>
                  )}
                </div>

                {/* Compact Action Buttons */}
                <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-auto">
                  <button
                    onClick={() => onSelectArticle(article.slug)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#7F3040] hover:bg-[#642331] text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
                  >
                    <FileText className="w-3 h-3" />
                    <span>Read Article</span>
                  </button>

                  <button
                    onClick={(e) => handlePdfClick(e, article)}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-[#F8F5EE] hover:bg-[#E8DED3] text-[#292929] border border-[#E8DED3] text-xs font-medium rounded-xs transition-colors cursor-pointer"
                    title="Print / View Offprint PDF"
                  >
                    <Download className="w-3 h-3 text-[#7F3040]" />
                    <span>PDF</span>
                  </button>

                  <button
                    onClick={() => setSelectedForCitation(article)}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-white hover:bg-[#F8F5EE] text-[#575551] hover:text-[#7F3040] border border-[#E8DED3] text-xs font-medium rounded-xs transition-colors cursor-pointer"
                    title="Generate Citation"
                  >
                    <Quote className="w-3 h-3 text-[#C6A15B]" />
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
