import React, { useState } from 'react';
import { Mail, MapPin, ExternalLink, ArrowUp, ChevronDown, BookOpen, Layers, PenTool, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { JOURNAL_DATA } from '../../data/journal';
import { getAssetPath } from '../../utils/assets';

interface Props {
  onNavigate: (path: string) => void;
}

export const ScholarlyFooter: React.FC<Props> = ({ onNavigate }) => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setOpenSection(prev => prev === id ? null : id);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#242424] text-[#F8F5EE] border-t-4 border-[#7F3040]">
      
      {/* MOBILE FOOTER (Viewport < md): Scholarly, compact, highly polished */}
      <div className="md:hidden px-4 py-8 space-y-5">
        
        {/* Brand & Seal Identity Card */}
        <div className="bg-[#2D2D2D] border border-stone-700/70 rounded-xs p-4 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white p-1 border border-[#C6A15B]/60 shrink-0 shadow-xs flex items-center justify-center">
              <img 
                src={getAssetPath('logos/shivaji-college-logo.svg')} 
                alt="Shivaji College Seal" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#C6A15B] block">
                ACADEMIC PUBLICATION
              </span>
              <h4 
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
                className="text-xl font-bold text-white tracking-wide leading-tight"
              >
                SHIVRAJ <span className="text-[#C6A15B]">350</span>
              </h4>
              <p className="text-[11px] uppercase tracking-wider text-stone-300 font-medium mt-0.5">
                International Peer Reviewed Journal
              </p>
            </div>
          </div>

          <div className="pt-2.5 border-t border-stone-700/60 text-xs text-stone-300 space-y-0.5">
            <strong className="text-white block font-medium">Shivaji College, University of Delhi</strong>
            <p className="text-[11px] text-stone-400">
              NAAC Accredited Grade &quot;A&quot; · Ring Road, Raja Garden, New Delhi – 110027
            </p>
          </div>
        </div>

        {/* Journal Key Particulars 2x2 Grid */}
        <div className="grid grid-cols-2 gap-2 text-[11px]">
          <div className="bg-[#2D2D2D] border border-stone-800 p-2.5 rounded-xs">
            <span className="text-[#C6A15B] font-bold block text-[10px] uppercase tracking-wider">Format</span>
            <span className="text-stone-300">Online Scholarly Repository</span>
          </div>
          <div className="bg-[#2D2D2D] border border-stone-800 p-2.5 rounded-xs">
            <span className="text-[#C6A15B] font-bold block text-[10px] uppercase tracking-wider">Frequency</span>
            <span className="text-stone-300">Biannual Publication</span>
          </div>
          <div className="bg-[#2D2D2D] border border-stone-800 p-2.5 rounded-xs">
            <span className="text-[#C6A15B] font-bold block text-[10px] uppercase tracking-wider">Evaluation</span>
            <span className="text-stone-300">Double-Blind Peer Review</span>
          </div>
          <div className="bg-[#2D2D2D] border border-stone-800 p-2.5 rounded-xs">
            <span className="text-[#C6A15B] font-bold block text-[10px] uppercase tracking-wider">Access</span>
            <span className="text-stone-300">Open Access Repository</span>
          </div>
        </div>

        {/* Quick Contact & College Portal Card */}
        <div className="bg-[#2D2D2D] border border-stone-800 rounded-xs p-3 space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#C6A15B]">
              Direct Inquiries & Portal
            </span>
          </div>
          <div className="space-y-1.5 pt-0.5">
            <a
              href={`mailto:${JOURNAL_DATA.email}`}
              className="text-stone-200 hover:text-white flex items-center gap-2 py-1 px-2 rounded-xs bg-[#242424] border border-stone-700/60 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
              <span className="truncate">{JOURNAL_DATA.email}</span>
            </a>
            <a
              href={JOURNAL_DATA.collegeWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-200 hover:text-white flex items-center justify-between py-1 px-2 rounded-xs bg-[#242424] border border-stone-700/60 transition-colors"
            >
              <span className="truncate">www.shivajicollege.ac.in</span>
              <ExternalLink className="w-3 h-3 text-[#C6A15B] shrink-0" />
            </a>
          </div>
        </div>

        {/* Refined Accordion Navigation Sections */}
        <div className="space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#C6A15B] block px-1">
            Browse Directory
          </span>

          <div className="bg-[#2D2D2D] border border-stone-800 rounded-xs overflow-hidden divide-y divide-stone-800/80">
            
            {/* 1. About Journal */}
            <div>
              <button
                onClick={() => toggleSection('about')}
                className="w-full py-3 px-3.5 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-stone-200 hover:text-[#C6A15B] transition-colors"
                aria-expanded={openSection === 'about'}
              >
                <span className="flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>ABOUT JOURNAL</span>
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 text-stone-400 ${openSection === 'about' ? 'rotate-180 text-[#C6A15B]' : ''}`} />
              </button>
              {openSection === 'about' && (
                <ul className="px-3.5 pb-3 pt-1 space-y-2 text-xs text-stone-300 border-t border-stone-800/60 bg-[#252525]">
                  <li>
                    <button onClick={() => onNavigate('/about')} className="hover:text-[#C6A15B] transition-colors text-left flex items-center justify-between w-full py-1">
                      <span>About the Journal (Overview)</span>
                      <ArrowRight className="w-3 h-3 text-stone-500" />
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate('/about/aims-and-scope')} className="hover:text-[#C6A15B] transition-colors text-left flex items-center justify-between w-full py-1">
                      <span>Aims & Scope</span>
                      <ArrowRight className="w-3 h-3 text-stone-500" />
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate('/about/journal-information')} className="hover:text-[#C6A15B] transition-colors text-left flex items-center justify-between w-full py-1">
                      <span>Journal Particulars & Indexing</span>
                      <ArrowRight className="w-3 h-3 text-stone-500" />
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate('/editorial-board')} className="hover:text-[#C6A15B] transition-colors text-left flex items-center justify-between w-full py-1">
                      <span>Editorial Board & Leadership</span>
                      <ArrowRight className="w-3 h-3 text-stone-500" />
                    </button>
                  </li>
                </ul>
              )}
            </div>

            {/* 2. Publications */}
            <div>
              <button
                onClick={() => toggleSection('publications')}
                className="w-full py-3 px-3.5 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-stone-200 hover:text-[#C6A15B] transition-colors"
                aria-expanded={openSection === 'publications'}
              >
                <span className="flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>PUBLICATIONS</span>
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 text-stone-400 ${openSection === 'publications' ? 'rotate-180 text-[#C6A15B]' : ''}`} />
              </button>
              {openSection === 'publications' && (
                <ul className="px-3.5 pb-3 pt-1 space-y-2 text-xs text-stone-300 border-t border-stone-800/60 bg-[#252525]">
                  <li>
                    <button onClick={() => onNavigate('/publications/current')} className="hover:text-[#C6A15B] transition-colors text-left flex items-center justify-between w-full py-1">
                      <span>Current Issue (Volume 1, Issue 1)</span>
                      <ArrowRight className="w-3 h-3 text-stone-500" />
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate('/publications/archives')} className="hover:text-[#C6A15B] transition-colors text-left flex items-center justify-between w-full py-1">
                      <span>Archives & Past Volumes</span>
                      <ArrowRight className="w-3 h-3 text-stone-500" />
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate('/publications/articles')} className="hover:text-[#C6A15B] transition-colors text-left flex items-center justify-between w-full py-1">
                      <span>Articles Repository & Index</span>
                      <ArrowRight className="w-3 h-3 text-stone-500" />
                    </button>
                  </li>
                </ul>
              )}
            </div>

            {/* 3. For Authors */}
            <div>
              <button
                onClick={() => toggleSection('authors')}
                className="w-full py-3 px-3.5 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-stone-200 hover:text-[#C6A15B] transition-colors"
                aria-expanded={openSection === 'authors'}
              >
                <span className="flex items-center gap-2">
                  <PenTool className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>FOR AUTHORS</span>
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 text-stone-400 ${openSection === 'authors' ? 'rotate-180 text-[#C6A15B]' : ''}`} />
              </button>
              {openSection === 'authors' && (
                <ul className="px-3.5 pb-3 pt-1 space-y-2 text-xs text-stone-300 border-t border-stone-800/60 bg-[#252525]">
                  <li>
                    <button onClick={() => onNavigate('/for-authors/guidelines')} className="hover:text-[#C6A15B] transition-colors text-left flex items-center justify-between w-full py-1">
                      <span>Author Guidelines & Preparation</span>
                      <ArrowRight className="w-3 h-3 text-stone-500" />
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate('/for-authors/submission')} className="hover:text-[#C6A15B] transition-colors text-left flex items-center justify-between w-full py-1">
                      <span>Manuscript Submission Process</span>
                      <ArrowRight className="w-3 h-3 text-stone-500" />
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate('/for-authors/call-for-papers')} className="hover:text-[#C6A15B] transition-colors text-left flex items-center justify-between w-full py-1">
                      <span>Official Call for Papers</span>
                      <ArrowRight className="w-3 h-3 text-stone-500" />
                    </button>
                  </li>
                </ul>
              )}
            </div>

            {/* 4. Policies */}
            <div>
              <button
                onClick={() => toggleSection('policies')}
                className="w-full py-3 px-3.5 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-stone-200 hover:text-[#C6A15B] transition-colors"
                aria-expanded={openSection === 'policies'}
              >
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>POLICIES & ETHICS</span>
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 text-stone-400 ${openSection === 'policies' ? 'rotate-180 text-[#C6A15B]' : ''}`} />
              </button>
              {openSection === 'policies' && (
                <ul className="px-3.5 pb-3 pt-1 space-y-2 text-xs text-stone-300 border-t border-stone-800/60 bg-[#252525]">
                  <li>
                    <button onClick={() => onNavigate('/policies/peer-review')} className="hover:text-[#C6A15B] transition-colors text-left flex items-center justify-between w-full py-1">
                      <span>Double-Blind Peer Review</span>
                      <ArrowRight className="w-3 h-3 text-stone-500" />
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate('/policies/publication-ethics')} className="hover:text-[#C6A15B] transition-colors text-left flex items-center justify-between w-full py-1">
                      <span>COPE Publication Ethics</span>
                      <ArrowRight className="w-3 h-3 text-stone-500" />
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate('/policies/plagiarism')} className="hover:text-[#C6A15B] transition-colors text-left flex items-center justify-between w-full py-1">
                      <span>Plagiarism & Similarity Standards</span>
                      <ArrowRight className="w-3 h-3 text-stone-500" />
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate('/policies/open-access')} className="hover:text-[#C6A15B] transition-colors text-left flex items-center justify-between w-full py-1">
                      <span>Open Access & Archiving</span>
                      <ArrowRight className="w-3 h-3 text-stone-500" />
                    </button>
                  </li>
                </ul>
              )}
            </div>

          </div>
        </div>

        {/* Back to Top */}
        <div className="pt-2 flex justify-center">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2D2D2D] hover:bg-[#383838] text-stone-200 hover:text-white text-xs font-semibold rounded-full border border-stone-700/80 transition-all shadow-xs cursor-pointer active:scale-95"
          >
            <ArrowUp className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Back to top</span>
          </button>
        </div>

      </div>

      {/* DESKTOP & TABLET FOOTER (Viewport >= md): Preserves approved multi-column layout */}
      <div className="hidden md:block max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* COLUMN 1: Journal Identity & Publisher (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#C6A15B] block mb-1">
                ACADEMIC PUBLICATION
              </span>
              <h4 
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
                className="text-2xl font-bold text-white tracking-wide"
              >
                SHIVRAJ <span className="text-[#C6A15B]">350</span>
              </h4>
              <p className="text-xs uppercase tracking-wider text-stone-300 mt-1 font-medium leading-snug">
                International Peer Reviewed Multidisciplinary Journal
              </p>
            </div>

            <div className="pt-2 border-t border-stone-700/60">
              <span className="text-[11px] text-[#C6A15B] font-semibold uppercase tracking-wider block">
                Published By
              </span>
              <p className="text-sm font-semibold text-white font-academic mt-0.5">
                Shivaji College, University of Delhi
              </p>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                Accredited by NAAC with Grade &quot;A&quot;. A premier constituent college of the University of Delhi dedicated to academic inquiry, pedagogical innovation, and scholarly publishing.
              </p>
            </div>

            <div className="pt-2 text-[11px] text-stone-400 space-y-1">
              <div>ISSN (Online): <span className="text-stone-300 font-medium">To be officially confirmed</span></div>
              <div>Starting Year: <span className="text-stone-300 font-medium">2026</span></div>
              <div>Frequency: <span className="text-stone-300 font-medium">To be officially confirmed</span></div>
            </div>
          </div>

          {/* COLUMN 2: Journal & Discovery Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-widest text-[#C6A15B] border-b border-stone-700/60 pb-2">
              JOURNAL
            </h5>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button onClick={() => onNavigate('/about')} className="hover:text-white hover:underline transition-colors text-left">
                  About the Journal
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about/aims-and-scope')} className="hover:text-white hover:underline transition-colors text-left">
                  Aims & Scope
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about/journal-information')} className="hover:text-white hover:underline transition-colors text-left">
                  Journal Information
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/editorial-board')} className="hover:text-white hover:underline transition-colors text-left">
                  Editorial Board
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/publications/current')} className="hover:text-white hover:underline transition-colors text-left">
                  Current Issue
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/publications/archives')} className="hover:text-white hover:underline transition-colors text-left">
                  Archives
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/publications/articles')} className="hover:text-white hover:underline transition-colors text-left">
                  Articles Repository
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about/journal-information#indexing')} className="hover:text-white hover:underline transition-colors text-left">
                  Indexing & Abstracting
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Authors & Policies (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-widest text-[#C6A15B] border-b border-stone-700/60 pb-2">
              AUTHORS & POLICIES
            </h5>
            <ul className="space-y-1.5 text-xs text-stone-300">
              <li>
                <button onClick={() => onNavigate('/for-authors/guidelines')} className="hover:text-white hover:underline transition-colors text-left">
                  Author Guidelines
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/for-authors/submission')} className="hover:text-white hover:underline transition-colors text-left">
                  Submission Guidelines
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/for-authors/call-for-papers')} className="hover:text-white hover:underline transition-colors text-left">
                  Call for Papers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/policies/peer-review')} className="hover:text-white hover:underline transition-colors text-left">
                  Peer Review Policy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/policies/publication-ethics')} className="hover:text-white hover:underline transition-colors text-left">
                  Publication Ethics
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/policies/plagiarism')} className="hover:text-white hover:underline transition-colors text-left">
                  Plagiarism Policy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/policies/copyright')} className="hover:text-white hover:underline transition-colors text-left">
                  Copyright & Licensing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/policies/open-access')} className="hover:text-white hover:underline transition-colors text-left">
                  Open Access Policy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/policies/archiving')} className="hover:text-white hover:underline transition-colors text-left">
                  Archiving Policy
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: Contact & Editorial Office (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-widest text-[#C6A15B] border-b border-stone-700/60 pb-2">
              EDITORIAL OFFICE
            </h5>
            
            <div className="text-xs text-stone-300 space-y-2.5">
              <div>
                <p className="font-semibold text-white">Shivraj 350</p>
                <p className="text-stone-400">Shivaji College, University of Delhi</p>
                <p className="text-stone-400">Ring Road, Raja Garden</p>
                <p className="text-stone-400">New Delhi – 110027, India</p>
              </div>

              <div className="pt-2 border-t border-stone-700/60">
                <span className="text-[11px] text-[#C6A15B] block font-semibold">Editorial Inquiries:</span>
                <a
                  href={`mailto:${JOURNAL_DATA.email}`}
                  className="hover:text-[#C6A15B] text-stone-200 transition-colors inline-flex items-center gap-1.5 mt-0.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>{JOURNAL_DATA.email}</span>
                </a>
              </div>

              <div>
                <span className="text-[11px] text-[#C6A15B] block font-semibold">College Portal:</span>
                <a
                  href={JOURNAL_DATA.collegeWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C6A15B] text-stone-200 transition-colors inline-flex items-center gap-1.5 mt-0.5"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>www.shivajicollege.ac.in</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-white transition-colors"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                  <span>Back to top</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal / Institutional Strip */}
      <div className="bg-[#1c1c1c] border-t border-stone-800 py-4 px-4 sm:px-6 lg:px-8 text-xs text-stone-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p>
            © 2026 <strong className="text-stone-200">Shivraj 350: International Peer Reviewed Multidisciplinary Journal</strong>. 
            Published by Shivaji College, University of Delhi.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-stone-500">
            <span>Online Scholarly Repository</span>
            <span>·</span>
            <span>New Delhi, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
