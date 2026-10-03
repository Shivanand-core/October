import React from 'react';
import { Mail, ArrowRight, ShieldCheck } from 'lucide-react';

interface Props {
  onNavigate?: (path: string) => void;
}

interface GlanceItem {
  id: string;
  label: string;
  value: string;
  isConfirmed: boolean;
  isEmail?: boolean;
}

export const JournalAtAGlanceSection: React.FC<Props> = ({ onNavigate }) => {
  const glanceItems: GlanceItem[] = [
    {
      id: 'title',
      label: 'Journal Title',
      value: 'Shivraj 350: International Peer Reviewed Multidisciplinary Journal',
      isConfirmed: true
    },
    {
      id: 'publisher',
      label: 'Publisher',
      value: 'Shivaji College, University of Delhi',
      isConfirmed: true
    },
    {
      id: 'issn',
      label: 'ISSN',
      value: 'To be officially confirmed',
      isConfirmed: false
    },
    {
      id: 'format',
      label: 'Publication Format',
      value: 'Online',
      isConfirmed: true
    },
    {
      id: 'subject',
      label: 'Subject',
      value: 'Multidisciplinary',
      isConfirmed: true
    },
    {
      id: 'starting-year',
      label: 'Starting Year',
      value: '2026',
      isConfirmed: true
    },
    {
      id: 'email',
      label: 'Journal Email',
      value: 'journal@shivaji.du.ac.in',
      isConfirmed: true,
      isEmail: true
    }
  ];

  return (
    <section 
      aria-labelledby="glance-heading"
      className="bg-[#F8F5EE] border-b border-[#E8DED3] py-7 sm:py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header: Compact & Academic */}
        <div className="mb-4 sm:mb-5 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-1.5 mb-1">
            <span className="h-0.5 w-5 bg-[#C6A15B]" aria-hidden="true" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#7F3040]">
              Institutional Specifications
            </span>
          </div>
          <h2 
            id="glance-heading"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
            className="text-xl sm:text-2xl font-bold text-[#7F3040] tracking-tight leading-tight"
          >
            JOURNAL AT A GLANCE
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-serif italic mt-0.5">
            Essential information about Shivraj 350
          </p>
        </div>

        {/* Compact Scholarly Two-Column Table */}
        <div className="bg-white border border-[#E8DED3] rounded-xs shadow-2xs overflow-hidden">
          
          {/* Restrained Burgundy Accent Rule */}
          <div className="h-0.5 bg-[#7F3040]" />

          {/* 7 Compact Rows */}
          <div className="divide-y divide-[#EFE8DF]">
            {glanceItems.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`px-3.5 sm:px-5 py-2.5 transition-colors ${
                    isEven ? 'bg-white' : 'bg-[#FCFAF6]'
                  } hover:bg-[#F9F5EE]`}
                >
                  {/* Desktop Two-Column Layout (~36% Label, ~64% Value) */}
                  <div className="hidden sm:grid sm:grid-cols-12 items-baseline gap-3">
                    <div className="sm:col-span-5 md:col-span-4 text-xs font-semibold uppercase tracking-wider text-[#554C42] font-academic">
                      {item.label}
                    </div>
                    <div className="sm:col-span-7 md:col-span-8 text-xs sm:text-[13.5px] text-[#292929]">
                      {item.isConfirmed ? (
                        item.isEmail ? (
                          <a
                            href={`mailto:${item.value}`}
                            className="text-[#7F3040] hover:text-[#5B1B29] font-medium hover:underline inline-flex items-center gap-1.5 transition-colors"
                          >
                            <Mail className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                            <span>{item.value}</span>
                          </a>
                        ) : (
                          <span className="font-normal font-sans text-[#292929]">
                            {item.value}
                          </span>
                        )
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-stone-500 italic font-serif text-[13px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]/70 shrink-0" />
                          <span>{item.value}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Mobile Stacked Layout (No Horizontal Scroll) */}
                  <div className="sm:hidden flex flex-col space-y-0.5">
                    <span className="text-[10px] font-bold text-[#7F3040] uppercase tracking-wider">
                      {item.label}
                    </span>
                    <div className="text-xs text-[#292929] leading-snug">
                      {item.isConfirmed ? (
                        item.isEmail ? (
                          <a
                            href={`mailto:${item.value}`}
                            className="text-[#7F3040] hover:text-[#5B1B29] font-medium hover:underline inline-flex items-center gap-1.5"
                          >
                            <Mail className="w-3 h-3 text-[#C6A15B] shrink-0" />
                            <span>{item.value}</span>
                          </a>
                        ) : (
                          <span className="font-normal font-sans text-[#292929]">
                            {item.value}
                          </span>
                        )
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-stone-500 italic font-serif text-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]/70 shrink-0" />
                          <span>{item.value}</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Subtle Bottom Link to Full Journal Information */}
          <div className="bg-[#FAF7F0] border-t border-[#E8DED3] px-3.5 sm:px-5 py-2.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-2 text-xs">
            <span className="text-stone-500 text-[11px] flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#7F3040] shrink-0" />
              <span>Official Institutional Data · Shivaji College, DU</span>
            </span>

            {onNavigate && (
              <button
                onClick={() => onNavigate('/about')}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#7F3040] hover:text-[#5B1B29] hover:underline transition-colors cursor-pointer self-end sm:self-auto pt-0.5 sm:pt-0"
              >
                <span>View Full Journal Information</span>
                <ArrowRight className="w-3 h-3 text-[#C6A15B]" />
              </button>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
