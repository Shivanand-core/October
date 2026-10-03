import React, { useState } from 'react';
import { Calendar, Layers, Download, Quote, FileText, ArrowRight, User, Building, BookOpen } from 'lucide-react';
import { ALL_ISSUES, SAMPLE_ARTICLES } from '../data/articles';
import { Article } from '../types/journal';
import { CitationModal } from '../components/layout/CitationModal';
import { getAssetPath } from '../utils/assets';

interface Props {
  onNavigate: (path: string) => void;
  onSelectArticle: (slug: string) => void;
}

export const CurrentIssuePage: React.FC<Props> = ({ onNavigate, onSelectArticle }) => {
  const currentIssue = ALL_ISSUES[0];
  const [selectedCitation, setSelectedCitation] = useState<Article | null>(null);

  return (
    <div className="py-6 sm:py-10 md:py-16 px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Breadcrumb & Title */}
      <div className="border-b border-[#E8DED3] pb-4 sm:pb-6 mb-6 sm:mb-8">
        <div className="flex items-center gap-2 text-xs text-[#575551] mb-2">
          <button onClick={() => onNavigate('/')} className="hover:text-[#7F3040]">Home</button>
          <span>/</span>
          <button onClick={() => onNavigate('/publications')} className="hover:text-[#7F3040]">Publications</button>
          <span>/</span>
          <span className="text-[#7F3040] font-semibold">Current Issue</span>
        </div>
        <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-[#7F3040]">
          CURRENT PUBLICATION
        </span>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-academic text-[#292929] mt-1">
          Volume 1, Issue 1 (January–June 2026)
        </h1>
        <p className="text-xs sm:text-base text-[#575551] font-editorial-body mt-2 max-w-3xl">
          Inaugural Issue of <em>Shivraj 350: International Peer Reviewed Multidisciplinary Journal</em>, published by Shivaji College, University of Delhi.
        </p>
      </div>

      {/* Issue Overview Card */}
      <div className="bg-white border border-[#E8DED3] rounded-xs p-4 sm:p-7 mb-8 sm:mb-10 shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
          
          {/* Issue Cover Thumbnail */}
          <div className="md:col-span-3 flex justify-center">
            <div className="relative w-full max-w-[180px] sm:max-w-[210px] aspect-[3819/4963] rounded-xs shadow-md border border-[#E8DED3] overflow-hidden group bg-[#F8F5EE] select-none">
              <img
                src={getAssetPath('logos/cover-page.jpg')}
                alt="Shivraj 350 - Volume 1, Issue 1 Official Cover Page"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </div>

          <div className="md:col-span-5 space-y-3.5">
            <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#575551]">
              <span className="font-bold text-[#7F3040] uppercase tracking-wider">
                INAUGURAL EDITION
              </span>
              <span aria-hidden="true">•</span>
              <span>Shivaji College (DU)</span>
              <span aria-hidden="true">•</span>
              <span className="text-emerald-800 font-medium">Open Access</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold font-academic text-[#292929]">
              Inaugurating Multidisciplinary Dialogues in Higher Education
            </h2>

            <p className="text-xs sm:text-sm text-[#575551] font-editorial-body leading-relaxed">
              This inaugural volume marks the launch of a permanent platform for rigorous academic scholarship. 
              The collection brings together peer-reviewed contributions across environmental modeling, historical jurisprudence, 
              computational biochemical analysis, and interdisciplinary methodologies.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#7F3040] text-white font-semibold uppercase tracking-wider rounded-xs hover:bg-[#642331] transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Issue TOC</span>
              </button>

              <button
                onClick={() => onNavigate('/publications/archives')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#F8F5EE] border border-[#E8DED3] text-[#292929] font-medium uppercase tracking-wider rounded-xs hover:bg-[#E8DED3] transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#7F3040]" />
                <span>All Archives</span>
              </button>
            </div>
          </div>

          {/* Quick Particulars Box */}
          <div className="md:col-span-4 bg-[#F8F5EE] border border-[#E8DED3] p-4 sm:p-5 rounded-xs space-y-2 text-xs">
            <h3 className="font-bold text-[#7F3040] uppercase tracking-wider text-[11px] border-b border-[#E8DED3] pb-1.5">
              Issue Particulars
            </h3>
            <div className="flex justify-between py-1 border-b border-[#E8DED3]/60">
              <span className="text-slate-600">Volume / Issue:</span>
              <span className="font-semibold text-slate-900">Vol. 1, No. 1</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#E8DED3]/60">
              <span className="text-slate-600">Period:</span>
              <span className="font-semibold text-slate-900">January–June 2026</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#E8DED3]/60">
              <span className="text-slate-600">Publisher:</span>
              <span className="font-semibold text-slate-900">Shivaji College (DU)</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-600">Review Model:</span>
              <span className="font-semibold text-slate-900">Double-Blind Review</span>
            </div>
          </div>

        </div>
      </div>

      {/* Table of Contents & Articles List */}
      <div className="space-y-6">
        <div className="border-b border-[#E8DED3] pb-3 flex items-center justify-between">
          <h2 className="text-2xl font-bold font-academic text-[#292929]">
            Table of Contents
          </h2>
          <span className="text-xs text-[#575551]">
            {SAMPLE_ARTICLES.length} Articles Published in This Issue
          </span>
        </div>

        {SAMPLE_ARTICLES.map((article, idx) => (
          <article
            key={article.id}
            className="bg-white border border-[#E8DED3] hover:border-[#7F3040] p-6 rounded-xs transition-all shadow-2xs hover:shadow-xs group"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2 text-xs text-[#575551]">
                  <span className="font-bold text-[#7F3040] uppercase">
                    {article.articleType}
                  </span>
                  <span aria-hidden="true">•</span>
                  <span>Pages {article.pages}</span>
                  {article.isSampleOrPreview && (
                    <>
                      <span aria-hidden="true">•</span>
                      <span className="text-amber-800 font-semibold text-[10px] uppercase">
                        Continuous Publishing Preview
                      </span>
                    </>
                  )}
                </div>

                <h3
                  onClick={() => onSelectArticle(article.slug)}
                  className="text-xl font-bold font-academic text-[#292929] group-hover:text-[#7F3040] cursor-pointer transition-colors leading-snug"
                >
                  {article.title}
                </h3>

                <div className="text-xs text-[#575551] flex flex-wrap items-center gap-x-4 gap-y-1">
                  <div className="flex items-center gap-1 font-medium text-slate-800">
                    <User className="w-3.5 h-3.5 text-[#7F3040]" />
                    <span>{article.authors.map(a => a.name).join(', ')}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-600">
                    <Building className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span className="line-clamp-1">{article.authors[0]?.affiliation}</span>
                  </div>
                </div>

                <p className="text-xs text-[#575551] font-editorial-body leading-relaxed line-clamp-2 pt-1">
                  {article.abstract}
                </p>
              </div>

              <div className="w-full md:w-auto shrink-0 flex flex-row md:flex-col gap-2 border-t md:border-t-0 md:border-l border-[#E8DED3] pt-3 md:pt-0 md:pl-5">
                <button
                  onClick={() => onSelectArticle(article.slug)}
                  className="flex-1 md:flex-initial px-3 py-2 bg-[#7F3040] hover:bg-[#642331] text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Read Article</span>
                </button>
                <button
                  onClick={() => setSelectedCitation(article)}
                  className="px-3.5 py-2 bg-white hover:bg-[#F8F5EE] border border-[#E8DED3] text-[#292929] text-xs font-medium rounded-xs transition-colors flex items-center justify-center gap-1"
                >
                  <Quote className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>Cite</span>
                </button>
              </div>

            </div>
          </article>
        ))}
      </div>

      {/* Citation Modal */}
      <CitationModal
        article={selectedCitation}
        isOpen={!!selectedCitation}
        onClose={() => setSelectedCitation(null)}
      />

    </div>
  );
};
