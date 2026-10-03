import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ChevronDown, ChevronRight, BookOpen, FileText, Send, ExternalLink, ShieldCheck } from 'lucide-react';
import { InstitutionalLogo } from '../ui/InstitutionalLogo';
import { JOURNAL_DATA } from '../../data/journal';
import { getAssetPath } from '../../utils/assets';

interface Props {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
}

export const MobileHeader: React.FC<Props> = ({ currentPath, onNavigate, onOpenSearch }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // Close drawer when route changes or user hits ESC
  useEffect(() => {
    setDrawerOpen(false);
  }, [currentPath]);

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

  const toggleSection = (label: string) => {
    setExpandedSection(prev => prev === label ? null : label);
  };

  return (
    <header className="md:hidden sticky top-0 z-40 bg-[#7F3040] text-white shadow-md border-b border-[#642331]">
      {/* Compact Mobile Top Bar */}
      <div className="px-3 sm:px-4 h-14 flex items-center justify-between">
        
        {/* Left: Journal Identity with Logo */}
        <div 
          onClick={() => handleLinkClick('/')}
          className="flex items-center gap-2.5 cursor-pointer select-none"
        >
          <div className="w-9 h-9 rounded-full bg-white p-0.5 border border-[#C6A15B]/50 flex items-center justify-center shrink-0 shadow-xs overflow-hidden relative z-0">
            <img 
              src={getAssetPath('logos/shivaji-college-logo.svg')} 
              alt="Shivaji College Seal" 
              className="w-full h-full object-contain block relative z-0"
              onError={(e) => {
                // If svg fails, hide
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
            <span className="text-[10px] text-stone-300 font-medium tracking-wider uppercase leading-none mt-0.5">
              Shivaji College · DU
            </span>
          </div>
        </div>

        {/* Right: Search & Hamburger Actions */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          <button
            onClick={onOpenSearch}
            className="w-10 h-10 flex items-center justify-center rounded-xs text-stone-200 hover:text-white hover:bg-[#642331] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C6A15B]"
            aria-label="Open search dialog"
          >
            <Search className="w-5 h-5 text-[#C6A15B]" />
          </button>

          <button
            onClick={() => setDrawerOpen(true)}
            className="w-10 h-10 flex items-center justify-center rounded-xs text-white hover:bg-[#642331] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C6A15B]"
            aria-label="Open mobile navigation menu"
            aria-expanded={drawerOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

      </div>

      {/* Full-Height Mobile Drawer Modal */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop overlay */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-over Drawer Panel */}
          <div 
            className="relative ml-auto w-full max-w-xs sm:max-w-sm bg-[#F8F5EE] text-[#292929] h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-250"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            {/* Drawer Header */}
            <div className="p-4 bg-[#7F3040] text-white flex items-center justify-between border-b border-[#642331]">
              <div className="flex items-center gap-2.5">
                <InstitutionalLogo type="shivaji" size="sm" className="w-9 h-9" />
                <div className="flex flex-col text-left">
                  <span 
                    style={{ fontFamily: "'Times New Roman', Times, serif" }}
                    className="text-base font-bold text-white tracking-wide"
                  >
                    SHIVRAJ 350
                  </span>
                  <span className="text-[10px] text-stone-300 uppercase tracking-wider">
                    University of Delhi
                  </span>
                </div>
              </div>

              <button
                onClick={() => setDrawerOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-xs text-stone-200 hover:text-white hover:bg-[#642331] transition-colors"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Action Strip inside Menu */}
            <div className="p-3 bg-[#E8DED3]/80 border-b border-[#E8DED3] flex items-center gap-2">
              <button
                onClick={() => handleLinkClick('/publications/current')}
                className="flex-1 py-2 px-2.5 bg-[#7F3040] hover:bg-[#642331] text-white text-[11px] font-semibold uppercase tracking-wider rounded-xs text-center flex items-center justify-center gap-1.5 transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Current Issue</span>
              </button>
              <button
                onClick={() => handleLinkClick('/for-authors/submission')}
                className="flex-1 py-2 px-2.5 bg-white hover:bg-[#F8F5EE] text-[#7F3040] border border-[#7F3040]/30 text-[11px] font-semibold uppercase tracking-wider rounded-xs text-center flex items-center justify-center gap-1.5 transition-colors"
              >
                <Send className="w-3.5 h-3.5 text-[#7F3040]" />
                <span>Submit</span>
              </button>
            </div>

            {/* Navigation Links Scrollable List */}
            <nav className="flex-1 overflow-y-auto divide-y divide-[#E8DED3] px-2 py-2">
              
              {/* Home */}
              <button
                onClick={() => handleLinkClick('/')}
                className={`w-full flex items-center justify-between px-3.5 py-3 text-sm font-semibold rounded-xs transition-colors ${
                  currentPath === '/' ? 'bg-[#7F3040]/10 text-[#7F3040] font-bold' : 'text-[#292929] hover:bg-[#E8DED3]/50'
                }`}
              >
                <span>Home</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </button>

              {/* About (Accordion) */}
              <div>
                <button
                  onClick={() => toggleSection('about')}
                  className="w-full flex items-center justify-between px-3.5 py-3 text-sm font-semibold text-[#292929] hover:bg-[#E8DED3]/50 rounded-xs transition-colors"
                  aria-expanded={expandedSection === 'about'}
                >
                  <span>About</span>
                  <ChevronDown className={`w-4 h-4 text-stone-500 transition-transform ${expandedSection === 'about' ? 'rotate-180 text-[#7F3040]' : ''}`} />
                </button>
                {expandedSection === 'about' && (
                  <div className="bg-[#E8DED3]/40 rounded-xs py-1 px-2 space-y-1 mb-1">
                    <button
                      onClick={() => handleLinkClick('/about')}
                      className={`w-full text-left px-3 py-2 text-xs rounded-xs block ${
                        currentPath === '/about' ? 'font-bold text-[#7F3040] bg-white' : 'text-[#575551] hover:text-[#292929]'
                      }`}
                    >
                      About the Journal (Overview)
                    </button>
                    <button
                      onClick={() => handleLinkClick('/about/aims-and-scope')}
                      className={`w-full text-left px-3 py-2 text-xs rounded-xs block ${
                        currentPath === '/about/aims-and-scope' ? 'font-bold text-[#7F3040] bg-white' : 'text-[#575551] hover:text-[#292929]'
                      }`}
                    >
                      Aims & Scope
                    </button>
                    <button
                      onClick={() => handleLinkClick('/about/journal-information')}
                      className={`w-full text-left px-3 py-2 text-xs rounded-xs block ${
                        currentPath === '/about/journal-information' ? 'font-bold text-[#7F3040] bg-white' : 'text-[#575551] hover:text-[#292929]'
                      }`}
                    >
                      Journal Particulars & Indexing
                    </button>
                  </div>
                )}
              </div>

              {/* Publications (Accordion) */}
              <div>
                <button
                  onClick={() => toggleSection('publications')}
                  className="w-full flex items-center justify-between px-3.5 py-3 text-sm font-semibold text-[#292929] hover:bg-[#E8DED3]/50 rounded-xs transition-colors"
                  aria-expanded={expandedSection === 'publications'}
                >
                  <span>Publications</span>
                  <ChevronDown className={`w-4 h-4 text-stone-500 transition-transform ${expandedSection === 'publications' ? 'rotate-180 text-[#7F3040]' : ''}`} />
                </button>
                {expandedSection === 'publications' && (
                  <div className="bg-[#E8DED3]/40 rounded-xs py-1 px-2 space-y-1 mb-1">
                    <button
                      onClick={() => handleLinkClick('/publications/current')}
                      className={`w-full text-left px-3 py-2 text-xs rounded-xs block ${
                        currentPath === '/publications/current' ? 'font-bold text-[#7F3040] bg-white' : 'text-[#575551] hover:text-[#292929]'
                      }`}
                    >
                      Current Issue (Inaugural)
                    </button>
                    <button
                      onClick={() => handleLinkClick('/publications/archives')}
                      className={`w-full text-left px-3 py-2 text-xs rounded-xs block ${
                        currentPath === '/publications/archives' ? 'font-bold text-[#7F3040] bg-white' : 'text-[#575551] hover:text-[#292929]'
                      }`}
                    >
                      Archives & Volumes
                    </button>
                    <button
                      onClick={() => handleLinkClick('/publications/articles')}
                      className={`w-full text-left px-3 py-2 text-xs rounded-xs block ${
                        currentPath === '/publications/articles' ? 'font-bold text-[#7F3040] bg-white' : 'text-[#575551] hover:text-[#292929]'
                      }`}
                    >
                      Articles Repository
                    </button>
                  </div>
                )}
              </div>

              {/* For Authors (Accordion) */}
              <div>
                <button
                  onClick={() => toggleSection('authors')}
                  className="w-full flex items-center justify-between px-3.5 py-3 text-sm font-semibold text-[#292929] hover:bg-[#E8DED3]/50 rounded-xs transition-colors"
                  aria-expanded={expandedSection === 'authors'}
                >
                  <span>For Authors</span>
                  <ChevronDown className={`w-4 h-4 text-stone-500 transition-transform ${expandedSection === 'authors' ? 'rotate-180 text-[#7F3040]' : ''}`} />
                </button>
                {expandedSection === 'authors' && (
                  <div className="bg-[#E8DED3]/40 rounded-xs py-1 px-2 space-y-1 mb-1">
                    <button
                      onClick={() => handleLinkClick('/for-authors')}
                      className={`w-full text-left px-3 py-2 text-xs rounded-xs block ${
                        currentPath === '/for-authors' ? 'font-bold text-[#7F3040] bg-white' : 'text-[#575551] hover:text-[#292929]'
                      }`}
                    >
                      Author Portal Overview
                    </button>
                    <button
                      onClick={() => handleLinkClick('/for-authors/guidelines')}
                      className={`w-full text-left px-3 py-2 text-xs rounded-xs block ${
                        currentPath === '/for-authors/guidelines' ? 'font-bold text-[#7F3040] bg-white' : 'text-[#575551] hover:text-[#292929]'
                      }`}
                    >
                      Author Guidelines & Formatting
                    </button>
                    <button
                      onClick={() => handleLinkClick('/for-authors/submission')}
                      className={`w-full text-left px-3 py-2 text-xs rounded-xs block ${
                        currentPath === '/for-authors/submission' ? 'font-bold text-[#7F3040] bg-white' : 'text-[#575551] hover:text-[#292929]'
                      }`}
                    >
                      Submission Process
                    </button>
                    <button
                      onClick={() => handleLinkClick('/for-authors/call-for-papers')}
                      className={`w-full text-left px-3 py-2 text-xs rounded-xs block ${
                        currentPath === '/for-authors/call-for-papers' ? 'font-bold text-[#7F3040] bg-white' : 'text-[#575551] hover:text-[#292929]'
                      }`}
                    >
                      Call for Papers
                    </button>
                  </div>
                )}
              </div>

              {/* Policies (Accordion) */}
              <div>
                <button
                  onClick={() => toggleSection('policies')}
                  className="w-full flex items-center justify-between px-3.5 py-3 text-sm font-semibold text-[#292929] hover:bg-[#E8DED3]/50 rounded-xs transition-colors"
                  aria-expanded={expandedSection === 'policies'}
                >
                  <span>Policies</span>
                  <ChevronDown className={`w-4 h-4 text-stone-500 transition-transform ${expandedSection === 'policies' ? 'rotate-180 text-[#7F3040]' : ''}`} />
                </button>
                {expandedSection === 'policies' && (
                  <div className="bg-[#E8DED3]/40 rounded-xs py-1 px-2 space-y-1 mb-1">
                    <button
                      onClick={() => handleLinkClick('/policies')}
                      className={`w-full text-left px-3 py-2 text-xs rounded-xs block ${
                        currentPath === '/policies' ? 'font-bold text-[#7F3040] bg-white' : 'text-[#575551] hover:text-[#292929]'
                      }`}
                    >
                      All Editorial Policies
                    </button>
                    <button
                      onClick={() => handleLinkClick('/policies/peer-review')}
                      className="w-full text-left px-3 py-2 text-xs text-[#575551] hover:text-[#292929] block"
                    >
                      Double-Blind Peer Review
                    </button>
                    <button
                      onClick={() => handleLinkClick('/policies/publication-ethics')}
                      className="w-full text-left px-3 py-2 text-xs text-[#575551] hover:text-[#292929] block"
                    >
                      Publication Ethics (COPE)
                    </button>
                    <button
                      onClick={() => handleLinkClick('/policies/plagiarism')}
                      className="w-full text-left px-3 py-2 text-xs text-[#575551] hover:text-[#292929] block"
                    >
                      Plagiarism & Similarity
                    </button>
                    <button
                      onClick={() => handleLinkClick('/policies/open-access')}
                      className="w-full text-left px-3 py-2 text-xs text-[#575551] hover:text-[#292929] block"
                    >
                      Open Access & Licensing
                    </button>
                  </div>
                )}
              </div>

              {/* Editorial Board */}
              <button
                onClick={() => handleLinkClick('/editorial-board')}
                className={`w-full flex items-center justify-between px-3.5 py-3 text-sm font-semibold rounded-xs transition-colors ${
                  currentPath === '/editorial-board' ? 'bg-[#7F3040]/10 text-[#7F3040] font-bold' : 'text-[#292929] hover:bg-[#E8DED3]/50'
                }`}
              >
                <span>Editorial Board</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </button>

              {/* Contact */}
              <button
                onClick={() => handleLinkClick('/contact')}
                className={`w-full flex items-center justify-between px-3.5 py-3 text-sm font-semibold rounded-xs transition-colors ${
                  currentPath === '/contact' ? 'bg-[#7F3040]/10 text-[#7F3040] font-bold' : 'text-[#292929] hover:bg-[#E8DED3]/50'
                }`}
              >
                <span>Contact</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </button>

            </nav>

            {/* Drawer Footer */}
            <div className="p-4 bg-white border-t border-[#E8DED3] text-xs text-[#575551] space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-800">Shivaji College</span>
                <a
                  href={JOURNAL_DATA.collegeWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7F3040] hover:underline inline-flex items-center gap-1 font-medium"
                >
                  <span>College Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-[11px] text-slate-500 leading-tight">
                Ring Road, Raja Garden, New Delhi – 110027 · NAAC Grade &quot;A&quot;
              </p>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
