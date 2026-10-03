import React from 'react';
import { Megaphone, Calendar, ArrowRight, ShieldCheck, FileText } from 'lucide-react';
import { ANNOUNCEMENTS_DATA } from '../../data/announcements';

interface Props {
  onNavigate: (path: string) => void;
}

export const NoticesSection: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section className="py-9 sm:py-14 bg-[#F8F5EE] border-b border-[#E8DED3] px-3.5 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#E8DED3] pb-3 mb-6 sm:mb-8 gap-2">
          <div>
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#7F3040]">
              EDITORIAL NOTIFICATIONS
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-academic text-[#292929] mt-0.5">
              Journal Notices & Announcements
            </h3>
          </div>
          <span className="text-xs text-[#575551]">
            Official Institutional Dispatch
          </span>
        </div>

        {/* Notices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {ANNOUNCEMENTS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#E8DED3] hover:border-[#7F3040] p-4.5 sm:p-6 rounded-xs flex flex-col justify-between group transition-all duration-200 hover:shadow-xs"
            >
              <div>
                {/* Notice Category & Date */}
                <div className="flex items-center justify-between text-xs text-[#575551] pb-2 mb-3 border-b border-[#F8F5EE]">
                  <span className="font-bold text-[#7F3040] text-[11px] uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-slate-500">
                    <Calendar className="w-3 h-3 text-[#C6A15B]" />
                    <span>{item.date}</span>
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-base sm:text-lg font-bold font-academic text-[#292929] group-hover:text-[#7F3040] transition-colors leading-snug">
                  {item.title}
                </h4>

                {/* Summary */}
                <p className="text-xs text-[#575551] mt-2.5 leading-relaxed font-editorial-body">
                  {item.summary}
                </p>
              </div>

              {/* Link Action */}
              {item.linkPath && (
                <div className="pt-4 mt-4 border-t border-[#F8F5EE]">
                  <button
                    onClick={() => onNavigate(item.linkPath!)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7F3040] group-hover:text-[#642331] transition-colors"
                  >
                    <span>{item.linkText || 'Learn More'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
