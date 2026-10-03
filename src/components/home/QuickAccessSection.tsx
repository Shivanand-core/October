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
      description: 'Distinguished faculty across sciences, humanities, commerce, and external advisory scholars overseeing peer evaluation.',
      path: '/editorial-board',
      icon: Users
    },
    {
      title: 'PUBLICATIONS',
      subtitle: 'Current Issue, Archives & Articles',
      description: 'Explore peer-reviewed research papers, review essays, and browse archival issues published by Shivaji College.',
      path: '/publications',
      icon: BookOpen
    },
    {
      title: 'FOR AUTHORS',
      subtitle: 'Guidelines & Submission Process',
      description: 'Author instructions, manuscript structure, ethical compliance, referencing formats, and active Call for Papers.',
      path: '/for-authors',
      icon: PenTool
    },
    {
      title: 'POLICIES',
      subtitle: 'Peer Review & Ethics Framework',
      description: 'Rigorous double-blind review protocols, COPE-aligned ethics, plagiarism standards, and copyright stewardship.',
      path: '/policies',
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-12 bg-[#F8F5EE] border-b border-[#E8DED3] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-8 flex items-center justify-between border-b border-[#E8DED3] pb-3">
          <div>
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#7F3040]">
              ACADEMIC PATHWAYS
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-academic text-[#292929] mt-0.5">
              Explore the Journal
            </h3>
          </div>
          <span className="hidden sm:inline text-xs text-[#575551]">
            Official Institutional Repository
          </span>
        </div>

        {/* 4 Task-Oriented Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                onClick={() => onNavigate(card.path)}
                className="bg-white border border-[#E8DED3] hover:border-[#7F3040] p-6 rounded-xs cursor-pointer group transition-all duration-200 hover:shadow-xs flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Restrained Accent */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xs bg-[#F8F5EE] border border-[#E8DED3] flex items-center justify-center group-hover:bg-[#7F3040]/10 transition-colors">
                      <Icon className="w-5 h-5 text-[#7F3040]" />
                    </div>
                    <div className="w-6 h-[1.5px] bg-[#C6A15B] opacity-60 group-hover:w-10 transition-all" />
                  </div>

                  {/* Title & Subtitle */}
                  <h4 className="text-sm font-bold tracking-wider text-[#7F3040] uppercase">
                    {card.title}
                  </h4>
                  <p className="text-xs font-semibold text-[#292929] mt-0.5 mb-2 font-academic text-base">
                    {card.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-[#575551] leading-relaxed font-editorial-body line-clamp-3">
                    {card.description}
                  </p>
                </div>

                {/* Arrow Action */}
                <div className="pt-4 mt-4 border-t border-[#F8F5EE] flex items-center justify-between text-xs font-semibold text-[#7F3040] group-hover:text-[#642331]">
                  <span>Access Section</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
