import React, { useState } from 'react';
import { X, Copy, Check, Quote } from 'lucide-react';
import { Article } from '../../types/journal';

interface Props {
  article: Article | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CitationModal: React.FC<Props> = ({ article, isOpen, onClose }) => {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  if (!isOpen || !article) return null;

  const authorsString = article.authors.map(a => a.name).join(', ');
  const firstAuthorLastName = article.authors[0]?.name.split(' ').slice(-1)[0] || 'Author';

  const apaCitation = `${authorsString}. (${article.year}). ${article.title}. Shivraj 350: International Peer Reviewed Multidisciplinary Journal, ${article.volume}(${article.issue}), ${article.pages || '1-10'}.`;
  
  const mlaCitation = `${authorsString}. "${article.title}." Shivraj 350: International Peer Reviewed Multidisciplinary Journal, vol. ${article.volume}, no. ${article.issue}, ${article.year}, pp. ${article.pages || '1-10'}.`;

  const chicagoCitation = `${authorsString}. "${article.title}." Shivraj 350: International Peer Reviewed Multidisciplinary Journal ${article.volume}, no. ${article.issue} (${article.year}): ${article.pages || '1-10'}.`;

  const bibtexCitation = `@article{${firstAuthorLastName.toLowerCase()}${article.year}${article.slug.substring(0, 8)},
  title = {${article.title}},
  author = {${article.authors.map(a => a.name).join(' and ')}},
  journal = {Shivraj 350: International Peer Reviewed Multidisciplinary Journal},
  volume = {${article.volume}},
  number = {${article.issue}},
  pages = {${article.pages || '1-10'}},
  year = {${article.year}},
  publisher = {Shivaji College, University of Delhi}
}`;

  const copyToClipboard = (text: string, formatName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedFormat(formatName);
    setTimeout(() => setCopiedFormat(null), 2000);
  };

  const citationFormats = [
    { name: 'APA (7th edition)', text: apaCitation },
    { name: 'MLA (9th edition)', text: mlaCitation },
    { name: 'Chicago (17th edition)', text: chicagoCitation },
    { name: 'BibTeX', text: bibtexCitation, isMono: true }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-2.5 sm:p-4">
      <div 
        className="bg-[#F8F5EE] border border-[#C6A15B]/50 rounded-xs shadow-2xl w-full max-w-xl overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        <div className="p-3.5 sm:p-5 border-b border-[#E8DED3] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Quote className="w-5 h-5 text-[#7F3040]" />
            <h3 className="text-base font-bold font-academic text-[#292929]">
              Cite This Scholarly Article
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-700 rounded-xs"
            aria-label="Close citation modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-3.5 sm:p-6 space-y-3.5 max-h-[75vh] overflow-y-auto">
          <p className="text-xs text-[#575551]">
            Copy bibliographic reference in your required academic citation style:
          </p>

          {citationFormats.map((item) => (
            <div key={item.name} className="bg-white border border-[#E8DED3] rounded-xs p-3 sm:p-3.5">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#F8F5EE]">
                <span className="text-xs font-semibold text-[#7F3040] uppercase tracking-wide">
                  {item.name}
                </span>
                <button
                  onClick={() => copyToClipboard(item.text, item.name)}
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#292929] hover:text-[#7F3040] bg-[#F8F5EE] hover:bg-[#E8DED3] px-2.5 py-1 rounded-xs transition-colors shrink-0"
                >
                  {copiedFormat === item.name ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <p className={`text-xs text-[#292929] leading-relaxed select-all break-words ${item.isMono ? 'font-mono bg-[#F8F5EE] p-2 rounded-xs whitespace-pre overflow-x-auto text-[11px]' : 'font-editorial-body'}`}>
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="p-3 bg-[#E8DED3]/60 border-t border-[#E8DED3] text-right">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold bg-[#7F3040] text-white rounded-xs hover:bg-[#642331] transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
