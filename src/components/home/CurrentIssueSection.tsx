import React from 'react';
import { ArrowRight, BookOpen, Calendar, Layers, FileCheck } from 'lucide-react';
import { ALL_ISSUES } from '../../data/articles';

interface Props {
  onNavigate: (path: string) => void;
}

export const CurrentIssueSection: React.FC<Props> = ({ onNavigate }) => {
  const currentIssue = ALL_ISSUES[0]; // Volume 1, Issue 1 (Inaugural Issue)

  return (
    <section className="py-10 sm:py-14 bg-[#E8DED3]/40 border-b border-[#E8DED3] px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Lead */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#E8DED3] pb-3 mb-6 sm:mb-8 gap-2">
          <div>
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#7F3040]">
              PUBLICATION SPOTLIGHT
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-academic text-[#292929] mt-0.5">
              Current Issue
            </h3>
          </div>
          <div className="text-xs text-[#575551] flex items-center gap-2">
            <span>Inaugural Release</span>
            <span aria-hidden="true">•</span>
            <span className="font-semibold text-[#7F3040]">Volume 1, Issue 1</span>
          </div>
        </div>

        {/* Issue Showcase Container */}
        <div className="bg-white border border-[#E8DED3] rounded-xs shadow-xs overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 p-5 sm:p-8 lg:p-10 items-center">
            
            {/* Left: Academic Monograph Cover Design */}
            <div className="md:col-span-4 lg:col-span-4 flex justify-center">
              <div className="w-full max-w-[210px] sm:max-w-[260px] aspect-[3/4] bg-[#7F3040] text-white p-4 sm:p-5 rounded-xs shadow-md border-2 border-[#C6A15B]/50 flex flex-col justify-between relative group select-none">
                
                {/* Cover Top Foil Header */}
                <div className="border-b border-[#C6A15B]/40 pb-2.5 sm:pb-3">
                  <span className="text-[10px] tracking-widest uppercase text-[#C6A15B] font-semibold block">
                    SHIVAJI COLLEGE · DU
                  </span>
                  <span className="text-[9px] text-stone-200 tracking-wider uppercase block mt-0.5">
                    Peer Reviewed Journal
                  </span>
                </div>

                {/* Cover Main Title */}
                <div className="my-auto py-3 sm:py-4 text-center">
                  <span className="text-xs uppercase tracking-widest text-stone-300 block mb-1">
                    INAUGURAL ISSUE
                  </span>
                  <h4 className="text-xl sm:text-3xl font-bold font-academic text-white tracking-wide leading-tight">
                    SHIVRAJ <span className="text-[#C6A15B]">350</span>
                  </h4>
                  <div className="w-10 sm:w-12 h-0.5 bg-[#C6A15B] mx-auto my-2" />
                  <p className="text-[10px] uppercase tracking-wider text-stone-200 px-2 leading-tight">
                    Volume 1 · Issue 1
                  </p>
                  <p className="text-[9px] text-[#C6A15B] mt-1 font-medium">
                    January–June 2026
                  </p>
                </div>

                {/* Cover Bottom Publisher Seal */}
                <div className="border-t border-[#C6A15B]/40 pt-2 flex items-center justify-between text-[9px] text-stone-300">
                  <span>New Delhi, India</span>
                  <span className="text-[#C6A15B]">ISSN Pending</span>
                </div>

                {/* Cover shine accent */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 pointer-events-none rounded-xs" />
              </div>
            </div>

            {/* Right: Issue Details & Content Navigation */}
            <div className="md:col-span-8 lg:col-span-8 space-y-4 sm:space-y-5">
              
              {/* Badge Strip */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-[#575551]">
                <span className="font-bold text-[#7F3040] uppercase tracking-wider">
                  INAUGURAL PUBLICATION
                </span>
                <span aria-hidden="true" className="text-[#C6A15B]">/</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#7F3040]" />
                  <span>January–June 2026</span>
                </span>
                <span aria-hidden="true" className="text-[#C6A15B]">/</span>
                <span className="flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5 text-[#7F3040]" />
                  <span>Volume 1, Issue 1</span>
                </span>
                {currentIssue.articleCount !== undefined && (
                  <>
                    <span aria-hidden="true" className="text-[#C6A15B]">/</span>
                    <span className="flex items-center gap-1">
                      <FileCheck className="w-3.5 h-3.5 text-[#7F3040]" />
                      <span>{currentIssue.articleCount} Articles</span>
                    </span>
                  </>
                )}
              </div>

              {/* Title & Description */}
              <h4 className="text-xl sm:text-2xl md:text-3xl font-bold font-academic text-[#292929] leading-snug">
                Inaugural Issue — Multidisciplinary Perspectives in Higher Education & Research
              </h4>

              <p className="text-xs sm:text-sm text-[#575551] font-editorial-body leading-relaxed">
                The inaugural edition of <em>Shivraj 350</em> establishes an open scholarly forum 
                championing interdisciplinary research. Spanning empirical sciences, sociological inquiry, 
                vernacular administrative historiography, and contemporary economic analyses, this inaugural 
                collection embodies the research commitment of Shivaji College, University of Delhi.
              </p>

              {/* Preview Notice */}
              <div className="bg-[#F8F5EE] border-l-2 border-[#7F3040] p-3 text-xs text-[#575551] space-y-1">
                <p className="font-semibold text-[#292929]">
                  Editorial Note on Inaugural Publication:
                </p>
                <p>
                  Articles are published in continuous online format following completion of double-blind 
                  peer review and final author revisions. Individual research papers are accessible below.
                </p>
              </div>

              {/* Primary Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <button
                  onClick={() => onNavigate('/publications/current')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#7F3040] hover:bg-[#642331] text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>VIEW CURRENT ISSUE</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>

                <button
                  onClick={() => onNavigate('/publications/archives')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white hover:bg-[#E8DED3]/50 text-[#292929] border border-[#E8DED3] text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors"
                >
                  <span>BROWSE ARCHIVES</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
