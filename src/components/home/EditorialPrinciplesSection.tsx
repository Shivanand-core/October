import React from 'react';
import { Compass, BookMarked, Scale, GraduationCap } from 'lucide-react';

export const EditorialPrinciplesSection: React.FC = () => {
  const pillars = [
    {
      title: 'Multidisciplinary Scope',
      headline: 'Sciences, Humanities & Commerce',
      description: 'Bridging empirical inquiry, quantitative sciences, social policies, and qualitative humanistic reflections within a cohesive scholarly repository.',
      icon: Compass
    },
    {
      title: 'Double-Blind Review',
      headline: 'Uncompromised Evaluation',
      description: 'Systematic external peer evaluation concealing author and referee identities to ensure objective assessment and scholarly rigor.',
      icon: Scale
    },
    {
      title: 'University Lineage',
      headline: 'Shivaji College, University of Delhi',
      description: 'Rooted in the academic heritage of one of India’s premier central universities, fostering independent research and knowledge stewardship.',
      icon: GraduationCap
    },
    {
      title: 'Open Scholarship',
      headline: 'Barrier-Free Dissemination',
      description: 'Democratizing peer-reviewed findings for scholars, educators, policymakers, and civic researchers worldwide through an open-access online model.',
      icon: BookMarked
    }
  ];

  return (
    <section className="py-12 bg-[#E8DED3]/30 border-b border-[#E8DED3] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-[11px] font-bold tracking-widest uppercase text-[#7F3040] block mb-1">
            SCHOLARLY COMMITMENT
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-academic text-[#292929]">
            Editorial Principles & Institutional Foundations
          </h3>
          <div className="w-16 h-0.5 bg-[#C6A15B] mx-auto mt-2.5 opacity-80" />
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white border border-[#E8DED3] p-5 sm:p-6 rounded-xs shadow-2xs hover:border-[#C6A15B] transition-colors"
              >
                <div className="w-10 h-10 rounded-xs bg-[#F8F5EE] border border-[#E8DED3] flex items-center justify-center mb-4 text-[#7F3040]">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold tracking-wider uppercase text-[#7F3040] block">
                  {item.title}
                </span>
                <h4 className="text-base font-bold font-academic text-[#292929] mt-1 mb-2">
                  {item.headline}
                </h4>
                <p className="text-xs text-[#575551] font-editorial-body leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Institutional Fact Bar */}
        <div className="mt-8 bg-white border border-[#E8DED3] p-4 rounded-xs flex flex-wrap items-center justify-around gap-4 text-xs text-[#575551] text-center">
          <div>
            <span className="font-bold text-[#7F3040] text-sm block">2026</span>
            <span>Inception Year</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-[#E8DED3]" />
          <div>
            <span className="font-bold text-[#292929] text-sm block">Online</span>
            <span>Digital Repository Format</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-[#E8DED3]" />
          <div>
            <span className="font-bold text-[#292929] text-sm block">Biannual</span>
            <span>Proposed Schedule</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-[#E8DED3]" />
          <div>
            <span className="font-bold text-[#7F3040] text-sm block">New Delhi</span>
            <span>Place of Publication</span>
          </div>
        </div>

      </div>
    </section>
  );
};
