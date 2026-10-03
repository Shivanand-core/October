import React from 'react';
import { Users, BookOpen, PenTool, ShieldCheck, ArrowRight } from 'lucide-react';

interface Props {
  onNavigate: (path: string) => void;
}

export const QuickAccessSection: React.FC<Props> = ({ onNavigate }) => {
  const cards = [
    {
      title: 'EDITORIAL BOARD',
      subtitle: 'Editors & Academic Leadership',
      description: 'Distinguished faculty across sciences, humanities, commerce, and advisory scholars.',
      path: '/editorial-board',
      icon: Users
    },
    {
      title: 'PUBLICATIONS',
      subtitle: 'Current Issue, Archives & Articles',
      description: 'Explore peer-reviewed research papers, review essays, and archival issues.',
      path: '/publications',
      icon: BookOpen
    },
    {
      title: 'FOR AUTHORS',
      subtitle: 'Guidelines & Submission Process',
      description: 'Manuscript preparation, ethical compliance, referencing formats, and active CFP.',
      path: '/for-authors',
      icon: PenTool
    },
    {
      title: 'POLICIES',
      subtitle: 'Peer Review & Ethics Framework',
      description: 'Double-blind evaluation protocols, COPE compliance, plagiarism and copyright rules.',
      path: '/policies',
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-9 sm:py-11 bg-[#F8F5EE] border-b border-[#E8DED3] px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header: Minimal & Refined */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#E8DED3] pb-2.5 gap-1.5">
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <span className="h-0.5 w-5 bg-[#C6A15B]" aria-hidden="true" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#7F3040]">
                ACADEMIC PATHWAYS
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-academic text-[#292929]">
              Explore the Journal
            </h3>
          </div>
          <span className="text-[11px] text-stone-500 font-serif italic">
            Key Institutional Portals
          </span>
        </div>

        {/* Minimal 2x2 Blocks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                onClick={() => onNavigate(card.path)}
                className="bg-white border border-[#E8DED3] hover:border-[#7F3040] rounded-xs p-4 sm:p-4.5 transition-all duration-200 hover:shadow-xs group cursor-pointer flex items-start gap-3.5 relative overflow-hidden"
              >
                {/* Left Subtle Accent Line on Hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[2.5px] bg-transparent group-hover:bg-[#7F3040] transition-colors" />

                {/* Compact Icon Badge */}
                <div className="w-9 h-9 rounded-xs bg-[#F8F5EE] border border-[#E8DED3] flex items-center justify-center shrink-0 group-hover:bg-[#7F3040] transition-colors">
                  <Icon className="w-4 h-4 text-[#7F3040] group-hover:text-white transition-colors" />
                </div>

                {/* Content Block */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold tracking-wider text-[#7F3040] uppercase">
                      {card.title}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C6A15B] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
                  </div>

                  <h4 className="text-sm font-bold text-[#292929] font-academic group-hover:text-[#7F3040] transition-colors mt-0.5 leading-snug truncate">
                    {card.subtitle}
                  </h4>

                  <p className="text-xs text-[#575551] font-editorial-body leading-relaxed mt-1 line-clamp-2">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
