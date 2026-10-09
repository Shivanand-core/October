import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search, Menu, X, FileText, BookOpen, ShieldCheck, HelpCircle } from 'lucide-react';

interface Props {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
}

interface NavItem {
  label: string;
  path?: string;
  children?: { label: string; path: string; description?: string }[];
}

export const PrimaryNavigation: React.FC<Props> = ({ currentPath, onNavigate, onOpenSearch }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const navItems: NavItem[] = [
    { label: 'HOME', path: '/' },
    {
      label: 'ABOUT',
      children: [
        { label: 'About the Journal', path: '/about', description: 'Overview, history, institutional lineage & particulars' },
        { label: 'Aims & Scope', path: '/about/aims-and-scope', description: 'Disciplinary focus & multidisciplinary research areas' },
        { label: 'Journal Information', path: '/about/journal-information', description: 'Official particulars, indexing status & publishing details' }
      ]
    },
    { label: 'EDITORIAL BOARD', path: '/editorial-board' },
    {
      label: 'PUBLICATIONS',
      children: [
        { label: 'Current Issue', path: '/publications/current', description: 'Volume 1, Issue 1 (Inaugural Issue 2026)' },
        { label: 'Archives', path: '/publications/archives', description: 'Browse volumes, issues and publication history' },
        { label: 'Articles', path: '/publications/articles', description: 'Index of multidisciplinary peer-reviewed research' }
      ]
    },
    {
      label: 'FOR AUTHORS',
      children: [
        { label: 'Author Guidelines', path: '/for-authors/guidelines', description: 'Formatting, citations, structure and submission standards' },
        { label: 'Submission Guidelines', path: '/for-authors/submission', description: 'Step-by-step submission requirements' },
        { label: 'Call for Papers', path: '/for-authors/call-for-papers', description: 'Active CFP for upcoming Volume 1, Issue 2' },
        { label: 'Publication Process', path: '/for-authors', description: 'Editorial workflow from initial receipt to final dissemination' }
      ]
    },
    {
      label: 'POLICIES',
      children: [
        { label: 'Peer Review Policy', path: '/policies/peer-review' },
        { label: 'Publication Ethics', path: '/policies/publication-ethics' },
        { label: 'Plagiarism Policy', path: '/policies/plagiarism' },
        { label: 'Copyright & Licensing', path: '/policies/copyright-and-licensing' },
        { label: 'Open Access Policy', path: '/policies/open-access' },
        { label: 'Archiving Policy', path: '/policies/archiving-policy' },
        { label: 'Corrections & Retractions', path: '/policies/corrections-and-retractions' },
        { label: 'AI Use Policy', path: '/policies/ai-use-policy' },
        { label: 'Complaints & Appeals', path: '/policies/complaints-and-appeals' }
      ]
    },
    { label: 'CONTACT', path: '/contact' }
  ];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  };

  const isCurrentActive = (item: NavItem): boolean => {
    if (item.path === currentPath) return true;
    if (item.children) {
      return item.children.some(child => child.path === currentPath);
    }
    return false;
  };

  return (
    <nav 
      ref={navRef}
      className="bg-[#7F3040] text-white sticky top-0 z-40 shadow-sm border-t border-[#9B3D51]/50 border-b border-[#642331]"
      aria-label="Main Journal Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          
          {/* Mobile Journal Brand Mark (Visible only on small mobile viewports) */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-sm hover:bg-[#642331] text-white focus:outline-none focus:ring-2 focus:ring-[#C6A15B]"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <span 
              onClick={() => handleLinkClick('/')}
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
              className="text-sm font-bold tracking-wide cursor-pointer text-stone-100 hover:text-white"
            >
              SHIVRAJ 350
            </span>
          </div>

          {/* Desktop Navigation Items */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const active = isCurrentActive(item);
              const isOpen = openDropdown === item.label;

              if (!item.children) {
                return (
                  <button
                    key={item.label}
                    onClick={() => handleLinkClick(item.path!)}
                    className={`px-3 py-2 text-xs font-semibold tracking-wider transition-colors uppercase relative rounded-xs whitespace-nowrap ${
                      active
                        ? 'text-white bg-[#642331]'
                        : 'text-stone-200 hover:text-white hover:bg-[#642331]/60'
                    }`}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C6A15B]" />
                    )}
                  </button>
                );
              }

              return (
                <div key={item.label} className="relative group">
                  <button
                    onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    aria-expanded={isOpen}
                    className={`px-3 py-2 text-xs font-semibold tracking-wider transition-colors uppercase inline-flex items-center gap-1 rounded-xs whitespace-nowrap ${
                      active || isOpen
                        ? 'text-white bg-[#642331]'
                        : 'text-stone-200 hover:text-white hover:bg-[#642331]/60'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#C6A15B]' : 'text-stone-300'}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {isOpen && (
                    <div
                      onMouseLeave={() => setOpenDropdown(null)}
                      className={`absolute left-0 mt-0 bg-[#F8F5EE] text-[#292929] shadow-xl border border-[#C6A15B]/30 rounded-xs py-2 z-50 ${
                        item.children.length > 5 ? 'w-80 grid grid-cols-1' : 'w-72'
                      }`}
                    >
                      <div className="px-3 py-1.5 border-b border-[#E8DED3] mb-1">
                        <span className="text-[10px] font-bold tracking-widest uppercase text-[#7F3040]">
                          {item.label} SECTION
                        </span>
                      </div>
                      {item.children.map((child) => (
                        <button
                          key={child.path}
                          onClick={() => handleLinkClick(child.path)}
                          className="w-full text-left px-3 py-2 hover:bg-[#E8DED3]/60 transition-colors group flex flex-col"
                        >
                          <span className={`text-xs font-semibold group-hover:text-[#7F3040] ${
                            currentPath === child.path ? 'text-[#7F3040] font-bold' : 'text-[#292929]'
                          }`}>
                            {child.label}
                          </span>
                          {child.description && (
                            <span className="text-[11px] text-[#575551] font-normal leading-tight mt-0.5 line-clamp-1">
                              {child.description}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Action: Search Affordance */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-200 hover:text-white bg-[#642331]/80 hover:bg-[#642331] border border-[#9B3D51] rounded-xs transition-colors focus:outline-none focus:ring-1 focus:ring-[#C6A15B]"
              title="Search articles, authors, disciplines"
            >
              <Search className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span className="hidden sm:inline">Search Journal</span>
              <span className="sm:hidden">Search</span>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#642331] border-t border-[#7F3040] px-4 pt-3 pb-6 space-y-2">
          {navItems.map((item) => {
            if (!item.children) {
              return (
                <button
                  key={item.label}
                  onClick={() => handleLinkClick(item.path!)}
                  className={`w-full text-left px-3 py-2.5 text-sm font-semibold tracking-wider rounded-xs ${
                    currentPath === item.path ? 'bg-[#7F3040] text-[#C6A15B]' : 'text-stone-200'
                  }`}
                >
                  {item.label}
                </button>
              );
            }

            const isExpanded = mobileExpandedSection === item.label;

            return (
              <div key={item.label} className="border-b border-[#7F3040]/60 pb-1">
                <button
                  onClick={() => setMobileExpandedSection(isExpanded ? null : item.label)}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold tracking-wider text-stone-200"
                >
                  <span>{item.label}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180 text-[#C6A15B]' : ''}`} />
                </button>
                {isExpanded && (
                  <div className="pl-4 pr-2 py-1 space-y-1 bg-[#501a24]/50 rounded-xs">
                    {item.children.map((child) => (
                      <button
                        key={child.path}
                        onClick={() => handleLinkClick(child.path)}
                        className={`w-full text-left py-2 px-2 text-xs font-medium rounded-xs block ${
                          currentPath === child.path ? 'text-[#C6A15B] font-bold' : 'text-stone-300 hover:text-white'
                        }`}
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </nav>
  );
};
