import React, { useState } from 'react';
import { Mail, MapPin, ExternalLink, ArrowUp, ChevronDown } from 'lucide-react';
import { JOURNAL_DATA } from '../../data/journal';

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
    <footer className="bg-[#292929] text-[#F8F5EE] border-t-4 border-[#7F3040]">
      
      {/* MOBILE FOOTER (Viewport < md): Compact with Collapsible Accordion Sections */}
      <div className="md:hidden px-4 py-8 space-y-6">
        
        {/* Brand & Institutional Identity */}
        <div className="space-y-2 border-b border-stone-700/80 pb-5">
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#C6A15B] block">
            ACADEMIC PUBLICATION
          </span>
          <h4 
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
            className="text-2xl font-bold text-white tracking-wide"
          >
            SHIVRAJ <span className="text-[#C6A15B]">350</span>
          </h4>
          <p className="text-xs uppercase tracking-wider text-stone-300 font-medium">
            International Peer Reviewed Multidisciplinary Journal
          </p>
          <div className="pt-2 text-xs text-stone-300">
            <strong className="text-white">Shivaji College, University of Delhi</strong>
            <p className="text-[11px] text-stone-400 mt-0.5">
              Accredited by NAAC with Grade &quot;A&quot; · Ring Road, Raja Garden, New Delhi – 110027
            </p>
          </div>
        </div>

        {/* Collapsible Accordion Sections */}
        <div className="divide-y divide-stone-800 border-y border-stone-800">
          
          {/* 1. About Journal */}
          <div>
            <button
              onClick={() => toggleSection('about')}
              className="w-full py-3.5 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#C6A15B]"
              aria-expanded={openSection === 'about'}
            >
              <span>ABOUT JOURNAL</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openSection === 'about' ? 'rotate-180 text-white' : ''}`} />
            </button>
            {openSection === 'about' && (
              <ul className="pb-3 pt-1 space-y-2.5 text-xs text-stone-300 pl-1">
                <li>
                  <button onClick={() => onNavigate('/about')} className="hover:text-white transition-colors text-left block w-full">
                    About the Journal (Overview)
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('/about/aims-and-scope')} className="hover:text-white transition-colors text-left block w-full">
                    Aims & Scope
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('/about/journal-information')} className="hover:text-white transition-colors text-left block w-full">
                    Journal Particulars & Indexing
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('/editorial-board')} className="hover:text-white transition-colors text-left block w-full">
                    Editorial Board & Advisory Council
                  </button>
                </li>
              </ul>
            )}
          </div>

          {/* 2. Publications */}
          <div>
            <button
              onClick={() => toggleSection('publications')}
              className="w-full py-3.5 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#C6A15B]"
              aria-expanded={openSection === 'publications'}
            >
              <span>PUBLICATIONS</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openSection === 'publications' ? 'rotate-180 text-white' : ''}`} />
            </button>
            {openSection === 'publications' && (
              <ul className="pb-3 pt-1 space-y-2.5 text-xs text-stone-300 pl-1">
                <li>
                  <button onClick={() => onNavigate('/publications/current')} className="hover:text-white transition-colors text-left block w-full">
                    Current Issue (Inaugural Release)
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('/publications/archives')} className="hover:text-white transition-colors text-left block w-full">
                    Archives & Past Issues
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('/publications/articles')} className="hover:text-white transition-colors text-left block w-full">
                    Articles Repository & Search
                  </button>
                </li>
              </ul>
            )}
          </div>

          {/* 3. For Authors */}
          <div>
            <button
              onClick={() => toggleSection('authors')}
              className="w-full py-3.5 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#C6A15B]"
              aria-expanded={openSection === 'authors'}
            >
              <span>FOR AUTHORS</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openSection === 'authors' ? 'rotate-180 text-white' : ''}`} />
            </button>
            {openSection === 'authors' && (
              <ul className="pb-3 pt-1 space-y-2.5 text-xs text-stone-300 pl-1">
                <li>
                  <button onClick={() => onNavigate('/for-authors/guidelines')} className="hover:text-white transition-colors text-left block w-full">
                    Author Guidelines & Preparation
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('/for-authors/submission')} className="hover:text-white transition-colors text-left block w-full">
                    Manuscript Submission Instructions
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('/for-authors/call-for-papers')} className="hover:text-white transition-colors text-left block w-full">
                    Official Call for Papers
                  </button>
                </li>
              </ul>
            )}
          </div>

          {/* 4. Policies */}
          <div>
            <button
              onClick={() => toggleSection('policies')}
              className="w-full py-3.5 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#C6A15B]"
              aria-expanded={openSection === 'policies'}
            >
              <span>POLICIES & ETHICS</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openSection === 'policies' ? 'rotate-180 text-white' : ''}`} />
            </button>
            {openSection === 'policies' && (
              <ul className="pb-3 pt-1 space-y-2.5 text-xs text-stone-300 pl-1">
                <li>
                  <button onClick={() => onNavigate('/policies/peer-review')} className="hover:text-white transition-colors text-left block w-full">
                    Double-Blind Peer Review Policy
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('/policies/publication-ethics')} className="hover:text-white transition-colors text-left block w-full">
                    COPE Publication Ethics
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('/policies/plagiarism')} className="hover:text-white transition-colors text-left block w-full">
                    Plagiarism & Similarity Standards
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('/policies/open-access')} className="hover:text-white transition-colors text-left block w-full">
                    Open Access & Archiving
                  </button>
                </li>
              </ul>
            )}
          </div>

          {/* 5. Contact & Inquiries */}
          <div>
            <button
              onClick={() => toggleSection('contact')}
              className="w-full py-3.5 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#C6A15B]"
              aria-expanded={openSection === 'contact'}
            >
              <span>CONTACT & EDITORIAL OFFICE</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openSection === 'contact' ? 'rotate-180 text-white' : ''}`} />
            </button>
            {openSection === 'contact' && (
              <div className="pb-4 pt-1 space-y-3 text-xs text-stone-300 pl-1">
                <div>
                  <span className="text-[#C6A15B] font-semibold block">Editorial Inquiries:</span>
                  <a
                    href={`mailto:${JOURNAL_DATA.email}`}
                    className="text-stone-200 hover:text-white inline-flex items-center gap-1.5 mt-0.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span>{JOURNAL_DATA.email}</span>
                  </a>
                </div>
                <div>
                  <span className="text-[#C6A15B] font-semibold block">College Portal:</span>
                  <a
                    href={JOURNAL_DATA.collegeWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-200 hover:text-white inline-flex items-center gap-1.5 mt-0.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span>www.shivajicollege.ac.in</span>
                  </a>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Back to Top */}
        <div className="pt-2 text-center">
          <button
            onClick={scrollToTop}
            className="w-full py-2.5 px-4 bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white text-xs font-medium rounded-xs inline-flex items-center justify-center gap-1.5 transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
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
