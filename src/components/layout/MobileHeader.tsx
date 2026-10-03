import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Search, ChevronRight, BookOpen, FileText, Send, ExternalLink, 
  ShieldCheck, Home, Users, Mail, Compass, Layers, PenTool, Award, 
  HelpCircle, Scale, FileCheck, CheckCircle2, BookmarkCheck, ArrowRight
} from 'lucide-react';
import { JOURNAL_DATA } from '../../data/journal';
import { getAssetPath } from '../../utils/assets';

interface Props {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
}

export const MobileHeader: React.FC<Props> = ({ currentPath, onNavigate, onOpenSearch }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Close drawer when route changes
  useEffect(() => {
    setDrawerOpen(false);
  }, [currentPath]);

  // Lock body scroll and handle ESC key when drawer is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [drawerOpen]);

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setDrawerOpen(false);
  };

  return (
    <header className="md:hidden fixed top-0 left-0 right-0 z-40 bg-[#7F3040] text-white shadow-md border-b border-[#642331]">
      {/* Compact Mobile Top Bar (h-14) */}
      <div className="px-3.5 sm:px-4 h-14 flex items-center justify-between">
        
        {/* Left: Journal Identity with Logo */}
        <div 
          onClick={() => handleLinkClick('/')}
          className="flex items-center gap-2.5 cursor-pointer select-none"
        >
          <div className="w-9 h-9 rounded-full bg-white p-0.5 border border-[#C6A15B]/60 flex items-center justify-center shrink-0 shadow-xs overflow-hidden relative z-0">
            <img 
              src={getAssetPath('logos/shivaji-college-logo.svg')} 
              alt="Shivaji College Seal" 
              className="w-full h-full object-contain block select-none pointer-events-none rounded-full"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
          <div className="flex flex-col justify-center relative z-10">
            <span 
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
              className="text-lg font-bold text-white tracking-wide leading-tight"
            >
              SHIVRAJ <span className="text-[#C6A15B]">350</span>
            </span>
            <span className="text-[10px] text-stone-300 font-medium tracking-wider uppercase leading-none mt-0.5 flex items-center gap-1">
              <a 
                href="https://shivaji.du.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="hover:text-white hover:underline transition-colors"
                title="Visit Shivaji College Official Website"
              >
                Shivaji College
              </a>
              <span className="text-[#C6A15B]">•</span>
              <a 
                href="https://www.du.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="hover:text-white hover:underline transition-colors"
                title="Visit University of Delhi Official Website"
              >
                DU
              </a>
            </span>
          </div>
        </div>

        {/* Right: Search & Hamburger Actions */}
        <div className="flex items-center gap-1">
          <button
            onClick={onOpenSearch}
            className="w-10 h-10 flex items-center justify-center rounded-xs text-stone-200 hover:text-white hover:bg-[#642331] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C6A15B] cursor-pointer"
            aria-label="Open search dialog"
          >
            <Search className="w-5 h-5 text-[#C6A15B]" />
          </button>

          <button
            onClick={() => setDrawerOpen(true)}
            className="w-10 h-10 flex items-center justify-center rounded-xs text-white hover:bg-[#642331] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C6A15B] cursor-pointer"
            aria-label="Open mobile navigation menu"
            aria-expanded={drawerOpen}
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>

      </div>

      {/* Full-Height Solid Opaque Mobile Side Drawer Modal */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Deep Dark Solid Backdrop (Completely covers background content) */}
          <div 
            className="fixed inset-0 bg-black/85 transition-opacity animate-in fade-in duration-200"
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          />

          {/* 100% Solid Opaque Slide-over Drawer Panel */}
          <div 
            className="relative ml-auto w-[88vw] max-w-[370px] bg-[#1C1C1C] text-[#F8F5EE] h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-250 border-l border-stone-800"
            role="dialog"
            aria-modal="true"
            aria-label="Journal Navigation Drawer"
          >
            {/* Drawer Header (Solid Burgundy #7F3040, h-14 aligning with top bar) */}
            <div className="h-14 px-4 bg-[#7F3040] text-white flex items-center justify-between border-b border-[#642331] shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-white p-0.5 border border-[#C6A15B]/70 flex items-center justify-center shrink-0 shadow-xs overflow-hidden">
                  <img 
                    src={getAssetPath('logos/shivaji-college-logo.svg')} 
                    alt="Shivaji College Seal" 
                    className="w-full h-full object-contain block rounded-full"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span 
                    style={{ fontFamily: "'Times New Roman', Times, serif" }}
                    className="text-base font-bold text-white tracking-wide leading-tight"
                  >
                    SHIVRAJ <span className="text-[#C6A15B]">350</span>
                  </span>
                  <span className="text-[10px] text-stone-300 uppercase tracking-wider leading-none mt-0.5 flex items-center gap-1">
                    <a
                      href="https://shivaji.du.ac.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white hover:underline transition-colors"
                      title="Visit Shivaji College Official Website"
                    >
                      Shivaji College
                    </a>
                    <span className="text-[#C6A15B]">•</span>
                    <a
                      href="https://www.du.ac.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white hover:underline transition-colors"
                      title="Visit University of Delhi Official Website"
                    >
                      DU
                    </a>
                  </span>
                </div>
              </div>

              <button
                onClick={() => setDrawerOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-xs text-stone-200 hover:text-white hover:bg-[#642331] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C6A15B] cursor-pointer"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Priority Navigation Strip */}
            <div className="p-3 bg-[#242424] border-b border-stone-800 grid grid-cols-2 gap-2 shrink-0">
              <button
                onClick={() => handleLinkClick('/publications/current')}
                className="w-full py-2.5 px-2 bg-[#7F3040] hover:bg-[#642331] text-white text-xs font-semibold rounded-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs cursor-pointer active:scale-98"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                <span className="truncate">Current Issue</span>
              </button>

              <button
                onClick={() => handleLinkClick('/for-authors/submission')}
                className="w-full py-2.5 px-2 bg-[#2E2E2E] hover:bg-[#383838] text-white border border-[#C6A15B]/40 text-xs font-semibold rounded-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs cursor-pointer active:scale-98"
              >
                <Send className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                <span className="truncate">Submit Paper</span>
              </button>
            </div>

            {/* In-drawer Search Button */}
            <div className="px-3 py-2 bg-[#222222] border-b border-stone-800 shrink-0">
              <button
                onClick={() => {
                  setDrawerOpen(false);
                  onOpenSearch();
                }}
                className="w-full py-2 px-3 bg-[#2A2A2A] hover:bg-[#333333] border border-stone-700 rounded-xs text-xs text-stone-300 flex items-center justify-between transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2 truncate">
                  <Search className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                  <span className="truncate">Search articles, authors, DOIs...</span>
                </span>
                <span className="text-[10px] bg-[#3A3A3A] px-1.5 py-0.5 rounded-2xs text-[#C6A15B] font-mono shrink-0 ml-1">
                  Search
                </span>
              </button>
            </div>

            {/* Comprehensive Section Buttons List (Fully populated, 100% opaque, no empty void) */}
            <nav className="flex-1 overflow-y-auto px-3 py-3 space-y-4 text-xs">
              
              {/* Home Direct Button */}
              <button
                onClick={() => handleLinkClick('/')}
                className={`w-full py-2.5 px-3 rounded-xs flex items-center justify-between transition-colors cursor-pointer border ${
                  currentPath === '/' 
                    ? 'bg-[#7F3040]/30 border-[#C6A15B] text-white font-bold' 
                    : 'bg-[#252525] border-stone-800 text-stone-200 hover:bg-[#2C2C2C] hover:border-stone-700'
                }`}
              >
                <span className="flex items-center gap-2.5 font-semibold text-sm">
                  <Home className="w-4 h-4 text-[#C6A15B]" />
                  <span>Journal Home</span>
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
              </button>

              {/* 1. PUBLICATIONS SECTION */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 px-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#C6A15B]">
                    PUBLICATIONS
                  </span>
                </div>
                <div className="space-y-1">
                  <button
                    onClick={() => handleLinkClick('/publications/current')}
                    className={`w-full py-2 px-2.5 rounded-xs flex items-center justify-between text-left transition-colors cursor-pointer border ${
                      currentPath === '/publications/current'
                        ? 'bg-[#7F3040]/40 border-[#C6A15B] text-white font-bold'
                        : 'bg-[#252525] border-stone-800/80 text-stone-200 hover:bg-[#2C2C2C]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <BookOpen className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                      <span>Current Issue (Vol. 1, Issue 1)</span>
                    </span>
                    <span className="text-[10px] bg-[#7F3040] text-white px-1.5 py-0.5 rounded-2xs font-semibold">
                      New
                    </span>
                  </button>

                  <button
                    onClick={() => handleLinkClick('/publications/articles')}
                    className={`w-full py-2 px-2.5 rounded-xs flex items-center justify-between text-left transition-colors cursor-pointer border ${
                      currentPath === '/publications/articles'
                        ? 'bg-[#7F3040]/40 border-[#C6A15B] text-white font-bold'
                        : 'bg-[#252525] border-stone-800/80 text-stone-200 hover:bg-[#2C2C2C]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                      <span>Articles Repository & Search</span>
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
                  </button>

                  <button
                    onClick={() => handleLinkClick('/publications/archives')}
                    className={`w-full py-2 px-2.5 rounded-xs flex items-center justify-between text-left transition-colors cursor-pointer border ${
                      currentPath === '/publications/archives'
                        ? 'bg-[#7F3040]/40 border-[#C6A15B] text-white font-bold'
                        : 'bg-[#252525] border-stone-800/80 text-stone-200 hover:bg-[#2C2C2C]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <FileCheck className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                      <span>Archives & Past Issues</span>
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
                  </button>
                </div>
              </div>

              {/* 2. ABOUT THE JOURNAL SECTION */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 px-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#C6A15B]">
                    ABOUT THE JOURNAL
                  </span>
                </div>
                <div className="space-y-1">
                  <button
                    onClick={() => handleLinkClick('/about')}
                    className={`w-full py-2 px-2.5 rounded-xs flex items-center justify-between text-left transition-colors cursor-pointer border ${
                      currentPath === '/about'
                        ? 'bg-[#7F3040]/40 border-[#C6A15B] text-white font-bold'
                        : 'bg-[#252525] border-stone-800/80 text-stone-200 hover:bg-[#2C2C2C]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Compass className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                      <span>Journal Overview & Mission</span>
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
                  </button>

                  <button
                    onClick={() => handleLinkClick('/about/aims-and-scope')}
                    className={`w-full py-2 px-2.5 rounded-xs flex items-center justify-between text-left transition-colors cursor-pointer border ${
                      currentPath === '/about/aims-and-scope'
                        ? 'bg-[#7F3040]/40 border-[#C6A15B] text-white font-bold'
                        : 'bg-[#252525] border-stone-800/80 text-stone-200 hover:bg-[#2C2C2C]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <BookmarkCheck className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                      <span>Aims & Scope</span>
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
                  </button>

                  <button
                    onClick={() => handleLinkClick('/about/journal-information')}
                    className={`w-full py-2 px-2.5 rounded-xs flex items-center justify-between text-left transition-colors cursor-pointer border ${
                      currentPath === '/about/journal-information'
                        ? 'bg-[#7F3040]/40 border-[#C6A15B] text-white font-bold'
                        : 'bg-[#252525] border-stone-800/80 text-stone-200 hover:bg-[#2C2C2C]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                      <span>Journal Particulars & Indexing</span>
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
                  </button>

                  <button
                    onClick={() => handleLinkClick('/editorial-board')}
                    className={`w-full py-2 px-2.5 rounded-xs flex items-center justify-between text-left transition-colors cursor-pointer border ${
                      currentPath === '/editorial-board'
                        ? 'bg-[#7F3040]/40 border-[#C6A15B] text-white font-bold'
                        : 'bg-[#252525] border-stone-800/80 text-stone-200 hover:bg-[#2C2C2C]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                      <span>Editorial Board & Leadership</span>
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
                  </button>
                </div>
              </div>

              {/* 3. FOR AUTHORS SECTION */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 px-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#C6A15B]">
                    FOR AUTHORS
                  </span>
                </div>
                <div className="space-y-1">
                  <button
                    onClick={() => handleLinkClick('/for-authors/guidelines')}
                    className={`w-full py-2 px-2.5 rounded-xs flex items-center justify-between text-left transition-colors cursor-pointer border ${
                      currentPath === '/for-authors/guidelines'
                        ? 'bg-[#7F3040]/40 border-[#C6A15B] text-white font-bold'
                        : 'bg-[#252525] border-stone-800/80 text-stone-200 hover:bg-[#2C2C2C]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <PenTool className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                      <span>Author Guidelines & Preparation</span>
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
                  </button>

                  <button
                    onClick={() => handleLinkClick('/for-authors/submission')}
                    className={`w-full py-2 px-2.5 rounded-xs flex items-center justify-between text-left transition-colors cursor-pointer border ${
                      currentPath === '/for-authors/submission'
                        ? 'bg-[#7F3040]/40 border-[#C6A15B] text-white font-bold'
                        : 'bg-[#252525] border-stone-800/80 text-stone-200 hover:bg-[#2C2C2C]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Send className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                      <span>Manuscript Submission Instructions</span>
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
                  </button>

                  <button
                    onClick={() => handleLinkClick('/for-authors/call-for-papers')}
                    className={`w-full py-2 px-2.5 rounded-xs flex items-center justify-between text-left transition-colors cursor-pointer border ${
                      currentPath === '/for-authors/call-for-papers'
                        ? 'bg-[#7F3040]/40 border-[#C6A15B] text-white font-bold'
                        : 'bg-[#252525] border-stone-800/80 text-stone-200 hover:bg-[#2C2C2C]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                      <span>Official Call for Papers</span>
                    </span>
                    <span className="text-[10px] bg-emerald-900/80 border border-emerald-500/40 text-emerald-300 px-1.5 py-0.5 rounded-2xs font-semibold">
                      Open
                    </span>
                  </button>
                </div>
              </div>

              {/* 4. POLICIES & ETHICS SECTION */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 px-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#C6A15B]">
                    POLICIES & ETHICS
                  </span>
                </div>
                <div className="space-y-1">
                  <button
                    onClick={() => handleLinkClick('/policies/peer-review')}
                    className={`w-full py-2 px-2.5 rounded-xs flex items-center justify-between text-left transition-colors cursor-pointer border ${
                      currentPath === '/policies/peer-review'
                        ? 'bg-[#7F3040]/40 border-[#C6A15B] text-white font-bold'
                        : 'bg-[#252525] border-stone-800/80 text-stone-200 hover:bg-[#2C2C2C]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                      <span>Double-Blind Peer Review</span>
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
                  </button>

                  <button
                    onClick={() => handleLinkClick('/policies/publication-ethics')}
                    className={`w-full py-2 px-2.5 rounded-xs flex items-center justify-between text-left transition-colors cursor-pointer border ${
                      currentPath === '/policies/publication-ethics'
                        ? 'bg-[#7F3040]/40 border-[#C6A15B] text-white font-bold'
                        : 'bg-[#252525] border-stone-800/80 text-stone-200 hover:bg-[#2C2C2C]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Scale className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                      <span>COPE Publication Ethics</span>
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
                  </button>

                  <button
                    onClick={() => handleLinkClick('/policies/plagiarism')}
                    className={`w-full py-2 px-2.5 rounded-xs flex items-center justify-between text-left transition-colors cursor-pointer border ${
                      currentPath === '/policies/plagiarism'
                        ? 'bg-[#7F3040]/40 border-[#C6A15B] text-white font-bold'
                        : 'bg-[#252525] border-stone-800/80 text-stone-200 hover:bg-[#2C2C2C]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                      <span>Plagiarism & Similarity Standards</span>
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
                  </button>

                  <button
                    onClick={() => handleLinkClick('/policies/open-access')}
                    className={`w-full py-2 px-2.5 rounded-xs flex items-center justify-between text-left transition-colors cursor-pointer border ${
                      currentPath === '/policies/open-access'
                        ? 'bg-[#7F3040]/40 border-[#C6A15B] text-white font-bold'
                        : 'bg-[#252525] border-stone-800/80 text-stone-200 hover:bg-[#2C2C2C]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                      <span>Open Access & Archiving</span>
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
                  </button>
                </div>
              </div>

              {/* 5. CONTACT & INSTITUTION SECTION */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 px-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#C6A15B]">
                    CONTACT & INSTITUTION
                  </span>
                </div>
                <div className="space-y-1">
                  <button
                    onClick={() => handleLinkClick('/contact')}
                    className={`w-full py-2 px-2.5 rounded-xs flex items-center justify-between text-left transition-colors cursor-pointer border ${
                      currentPath === '/contact'
                        ? 'bg-[#7F3040]/40 border-[#C6A15B] text-white font-bold'
                        : 'bg-[#252525] border-stone-800/80 text-stone-200 hover:bg-[#2C2C2C]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                      <span>Contact Editorial Office</span>
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
                  </button>

                  <a
                    href={JOURNAL_DATA.collegeWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-2.5 rounded-xs flex items-center justify-between text-left transition-colors cursor-pointer bg-[#252525] border border-stone-800/80 text-stone-200 hover:bg-[#2C2C2C]"
                  >
                    <span className="flex items-center gap-2">
                      <ExternalLink className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                      <span>Shivaji College (shivaji.du.ac.in)</span>
                    </span>
                    <span className="text-[10px] text-[#C6A15B]">External ↗</span>
                  </a>
                </div>
              </div>

            </nav>

            {/* Solid Drawer Institutional Footer (Without Address) */}
            <div className="p-3 bg-[#171717] border-t border-stone-800 text-xs shrink-0 flex items-center justify-between">
              <span className="font-semibold text-stone-200 text-xs flex items-center gap-1">
                <a
                  href="https://shivaji.du.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline transition-colors"
                  title="Visit Shivaji College Official Website"
                >
                  Shivaji College
                </a>
                <span className="text-[#C6A15B]">•</span>
                <a
                  href="https://www.du.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline transition-colors"
                  title="Visit University of Delhi Official Website"
                >
                  University of Delhi
                </a>
              </span>
              <span className="text-[10px] text-[#C6A15B] font-bold bg-[#7F3040]/50 px-2 py-0.5 rounded-2xs border border-[#C6A15B]/30">
                NAAC Grade &quot;A&quot;
              </span>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
