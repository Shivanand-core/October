import React, { useState } from 'react';
import { Download, Quote, User, Building, ArrowLeft, Share2, Check, FileText } from 'lucide-react';
import { SAMPLE_ARTICLES } from '../data/articles';
import { CitationModal } from '../components/layout/CitationModal';
import { ScholarlyPdfViewerModal } from '../components/layout/ScholarlyPdfViewerModal';

interface Props {
  slug: string;
  onNavigate: (path: string) => void;
}

export const ArticleDetailPage: React.FC<Props> = ({ slug, onNavigate }) => {
  const [citationModalOpen, setCitationModalOpen] = useState(false);
  const [pdfModalOpen, setPdfModalOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const article = SAMPLE_ARTICLES.find(a => a.slug === slug) || SAMPLE_ARTICLES[0];

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="py-6 sm:py-10 md:py-16 px-3.5 sm:px-6 lg:px-8 max-w-4xl mx-auto pb-20 sm:pb-10">
      
      {/* Navigation Return */}
      <div className="mb-4 sm:mb-6">
        <button
          onClick={() => onNavigate('/publications/articles')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7F3040] hover:text-[#642331] uppercase tracking-wider py-1"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Articles Index</span>
        </button>
      </div>

      {/* Article Header Card */}
      <article className="bg-white border border-[#E8DED3] p-4 sm:p-8 lg:p-10 rounded-xs shadow-xs space-y-5 sm:space-y-6">
        
        {/* Metadata Kicker */}
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-[#575551] border-b border-[#E8DED3] pb-3">
          <span className="font-bold text-[#7F3040] uppercase tracking-wider">
            {article.articleType}
          </span>
          <span aria-hidden="true" className="text-[#C6A15B]">•</span>
          <span>Shivraj 350</span>
          <span aria-hidden="true" className="text-[#C6A15B]">•</span>
          <span>Vol. {article.volume}, Issue {article.issue} ({article.year})</span>
          {article.pages && (
            <>
              <span aria-hidden="true" className="text-[#C6A15B]">•</span>
              <span>pp. {article.pages}</span>
            </>
          )}
          {article.doi && (
            <>
              <span aria-hidden="true" className="text-[#C6A15B]">•</span>
              <span className="font-mono text-[11px] text-[#7F3040]">DOI: {article.doi}</span>
            </>
          )}
        </div>

        {/* Article Title */}
        <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold font-academic text-[#292929] leading-tight">
          {article.title}
        </h1>

        {/* Authors & Institutional Affiliations */}
        <div className="space-y-3 pt-1 border-b border-[#E8DED3] pb-5">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            {article.authors.map((author, index) => (
              <div key={author.name} className="flex items-center gap-1">
                <span className="text-sm font-semibold text-[#292929]">
                  {author.name}
                </span>
                {author.isCorresponding && (
                  <span className="text-[10px] text-[#7F3040] font-bold" title="Corresponding Author">
                    *
                  </span>
                )}
                {index < article.authors.length - 1 && <span className="text-stone-300">,</span>}
              </div>
            ))}
          </div>

          <div className="text-xs text-[#575551] space-y-1 font-editorial-body">
            {article.authors.map((author) => (
              <div key={author.affiliation} className="flex items-start gap-1.5">
                <Building className="w-3.5 h-3.5 text-[#C6A15B] shrink-0 mt-0.5" />
                <span>{author.affiliation}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Bar (Download PDF, Cite, Share) */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 bg-[#F8F5EE] p-3 rounded-xs border border-[#E8DED3]">
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setPdfModalOpen(true)}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#7F3040] hover:bg-[#642331] text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors shadow-2xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF Offprint</span>
            </button>

            <button
              onClick={() => setCitationModalOpen(true)}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 bg-white hover:bg-[#E8DED3] border border-[#E8DED3] text-[#292929] text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors"
            >
              <Quote className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>Cite Article</span>
            </button>
          </div>

          <button
            onClick={handleShare}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-[#575551] hover:text-[#7F3040] transition-colors border border-transparent sm:border-0 rounded-xs"
          >
            {copiedLink ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Link Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Share Article</span>
              </>
            )}
          </button>
        </div>

        {/* Abstract Container */}
        <div className="space-y-2.5 pt-2">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#7F3040]">
            Abstract
          </h2>
          <p className="text-[15px] sm:text-base text-[#292929] font-editorial-body leading-relaxed text-left bg-[#F8F5EE]/50 p-4 rounded-xs border-l-3 border-[#7F3040]">
            {article.abstract}
          </p>
        </div>

        {/* Keywords */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1 border-b border-[#E8DED3] pb-5 text-xs">
          <span className="font-bold uppercase tracking-wider text-slate-700">Keywords:</span>
          {article.keywords.map((kw) => (
            <span key={kw} className="text-[#575551] font-medium bg-[#F8F5EE] px-2.5 py-1 rounded-xs border border-[#E8DED3]">
              {kw}
            </span>
          ))}
        </div>

        {/* Full Text Sections (Optimized for Mobile Reading: 16px body, comfortable line-height, no horizontal overflow) */}
        {article.sections && article.sections.length > 0 && (
          <div className="space-y-6 sm:space-y-8 pt-3">
            <div className="border-b border-[#E8DED3] pb-2 flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-bold font-academic text-[#292929]">
                Full Text Article
              </h2>
              <span className="text-[11px] text-stone-500 font-medium">
                Open Access
              </span>
            </div>

            {article.sections.map((section) => (
              <section key={section.heading} className="space-y-2.5">
                <h3 className="text-base sm:text-lg font-bold font-academic text-[#7F3040]">
                  {section.heading}
                </h3>
                <p className="text-[16px] text-[#292929] font-editorial-body leading-[1.75] text-left break-words">
                  {section.content}
                </p>
              </section>
            ))}
          </div>
        )}

        {/* References List */}
        {article.references && article.references.length > 0 && (
          <div className="space-y-3 pt-6 border-t border-[#E8DED3]">
            <h2 className="text-base sm:text-lg font-bold font-academic text-[#292929]">
              References
            </h2>
            <ol className="space-y-2 text-xs sm:text-[13px] text-[#575551] font-editorial-body list-decimal list-inside leading-relaxed">
              {article.references.map((ref, idx) => (
                <li key={idx} className="pl-1 break-words">
                  {ref}
                </li>
              ))}
            </ol>
          </div>
        )}

      </article>

      {/* Mobile Sticky Bottom Action Bar (Easy access while reading long papers on phones) */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-xs border-t border-[#E8DED3] p-2.5 flex items-center justify-around gap-2 z-30 shadow-lg">
        <button
          onClick={() => setPdfModalOpen(true)}
          className="flex-1 py-2 px-3 bg-[#7F3040] text-white text-xs font-semibold uppercase tracking-wider rounded-xs flex items-center justify-center gap-1.5 shadow-xs"
        >
          <Download className="w-3.5 h-3.5" />
          <span>PDF Offprint</span>
        </button>

        <button
          onClick={() => setCitationModalOpen(true)}
          className="flex-1 py-2 px-3 bg-[#F8F5EE] border border-[#E8DED3] text-[#292929] text-xs font-semibold uppercase tracking-wider rounded-xs flex items-center justify-center gap-1.5"
        >
          <Quote className="w-3.5 h-3.5 text-[#C6A15B]" />
          <span>Cite</span>
        </button>

        <button
          onClick={handleShare}
          className="py-2 px-3 bg-white border border-[#E8DED3] text-[#575551] rounded-xs flex items-center justify-center"
          title="Share Article"
        >
          {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Citation Modal */}
      <CitationModal
        article={article}
        isOpen={citationModalOpen}
        onClose={() => setCitationModalOpen(false)}
      />

      {/* PDF Reader Modal */}
      <ScholarlyPdfViewerModal
        article={article}
        isOpen={pdfModalOpen}
        onClose={() => setPdfModalOpen(false)}
      />

    </div>
  );
};
