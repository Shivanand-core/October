import React from 'react';
import { X, Download, Printer, FileText, Building2, CheckCircle2 } from 'lucide-react';
import { Article } from '../../types/journal';

interface Props {
  article: Article | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ScholarlyPdfViewerModal: React.FC<Props> = ({ article, isOpen, onClose }) => {
  if (!isOpen || !article) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6">
      <div 
        className="bg-[#525659] w-full max-w-4xl h-[92vh] sm:h-[88vh] rounded-sm shadow-2xl flex flex-col overflow-hidden border border-stone-600"
        role="dialog"
        aria-modal="true"
        aria-label="PDF Offprint Viewer"
      >
        {/* PDF Reader Toolbar */}
        <div className="bg-[#323639] text-white px-3 sm:px-4 py-2.5 flex items-center justify-between border-b border-stone-700 shrink-0">
          <div className="flex items-center gap-2 truncate pr-2">
            <FileText className="w-4 h-4 text-[#C6A15B] shrink-0" />
            <span className="text-xs font-medium text-stone-200 truncate">
              {article.slug}.pdf — Shivraj 350 Official Offprint
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-[#7F3040] hover:bg-[#642331] text-white text-xs font-medium rounded-xs transition-colors shadow-xs"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
              <span className="sm:hidden">Print</span>
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-xs text-stone-400 hover:text-white hover:bg-stone-700 transition-colors"
              aria-label="Close PDF Viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable PDF Document Canvas */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-6 md:p-8 flex justify-center bg-[#525659]">
          <div className="w-full max-w-3xl bg-white text-[#292929] shadow-xl p-5 sm:p-10 md:p-12 space-y-6 text-left border border-stone-300">
            
            {/* Header: Institutional Publisher Header */}
            <div className="border-b-2 border-[#7F3040] pb-4 flex items-center justify-between">
              <div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#7F3040] block">
                  SHIVRAJ 350 · MULTIDISCIPLINARY JOURNAL
                </span>
                <span className="text-xs text-stone-600 block mt-0.5 font-academic font-semibold">
                  Shivaji College · University of Delhi
                </span>
              </div>
              <div className="text-right text-[10px] text-stone-500">
                <span className="font-semibold block text-[#7F3040]">OFFICIAL OFFPRINT</span>
                <span>Vol. {article.volume}, Issue {article.issue} ({article.year})</span>
              </div>
            </div>

            {/* Title & Metadata */}
            <div className="space-y-3">
              <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 bg-[#F8F5EE] border border-[#E8DED3] text-[#7F3040]">
                {article.articleType}
              </span>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold font-academic leading-tight text-[#292929]">
                {article.title}
              </h1>

              {/* Authors */}
              <div className="text-xs sm:text-sm text-stone-800 font-semibold pt-1">
                {article.authors.map(a => a.name).join(', ')}
              </div>
              <div className="text-[11px] sm:text-xs text-stone-500">
                {article.authors[0]?.affiliation}
              </div>

              {article.doi && (
                <div className="text-[11px] text-[#7F3040] font-mono">
                  DOI: {article.doi}
                </div>
              )}
            </div>

            {/* Abstract Callout */}
            <div className="bg-[#F8F5EE] border-l-4 border-[#7F3040] p-4 text-xs sm:text-sm font-editorial-body text-stone-700 leading-relaxed space-y-1">
              <span className="font-bold uppercase tracking-wider text-[11px] text-[#7F3040] block">
                Abstract
              </span>
              <p>{article.abstract}</p>
            </div>

            {/* Keywords */}
            <div className="text-xs text-stone-600 border-b border-stone-200 pb-4">
              <span className="font-semibold text-stone-800">Keywords: </span>
              <span>{article.keywords.join(', ')}</span>
            </div>

            {/* Full text sections */}
            {article.sections && article.sections.map((sec) => (
              <div key={sec.heading} className="space-y-2 pt-2">
                <h2 className="text-base sm:text-lg font-bold font-academic text-[#7F3040] border-b border-stone-200 pb-1">
                  {sec.heading}
                </h2>
                <p className="text-xs sm:text-sm font-editorial-body text-stone-800 leading-relaxed text-left">
                  {sec.content}
                </p>
              </div>
            ))}

            {/* References */}
            {article.references && article.references.length > 0 && (
              <div className="pt-6 border-t-2 border-stone-300 space-y-2">
                <h3 className="text-sm font-bold font-academic uppercase tracking-wider text-stone-800">
                  References
                </h3>
                <ol className="list-decimal list-inside text-[11px] text-stone-600 space-y-1 font-editorial-body">
                  {article.references.map((ref, idx) => (
                    <li key={idx} className="break-words">{ref}</li>
                  ))}
                </ol>
              </div>
            )}

            {/* Document Footer */}
            <div className="pt-6 border-t border-stone-200 text-center text-[10px] text-stone-500">
              Published by Shivaji College, University of Delhi · Ring Road, Raja Garden, New Delhi – 110027 · Open Access CC-BY 4.0
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
