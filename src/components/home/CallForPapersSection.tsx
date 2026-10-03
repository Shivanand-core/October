import React from 'react';
import { Bell, ArrowRight, CheckCircle2, Calendar, FileText } from 'lucide-react';
import { CALL_FOR_PAPERS_INFO } from '../../data/announcements';

interface Props {
  onNavigate: (path: string) => void;
}

export const CallForPapersSection: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section className="py-10 sm:py-14 bg-[#E8DED3]/40 border-b border-[#E8DED3] px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* CFP Container with Academic Border & Dignified Aesthetic */}
        <div className="bg-white border-2 border-[#C6A15B]/40 rounded-xs p-5 sm:p-8 lg:p-10 shadow-xs relative overflow-hidden">
          
          {/* Subtle Corner Badge */}
          <div className="absolute top-0 right-0 bg-[#7F3040] text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-3 sm:px-4 py-1 rounded-bl-xs">
            Official Call For Papers
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* Left 7 Columns: Announcement & Scope */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#7F3040]">
                <Bell className="w-4 h-4 text-[#C6A15B]" />
                <span>Call for Manuscripts · {CALL_FOR_PAPERS_INFO.targetVolume}</span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-academic text-[#292929] leading-snug">
                Inviting Original Multidisciplinary Research Submissions
              </h3>

              <p className="text-xs sm:text-sm text-[#575551] font-editorial-body leading-relaxed">
                The Editorial Board of <em>Shivraj 350</em> cordially invites university faculty, 
                doctoral scholars, independent scientists, and humanistic researchers to submit original 
                research manuscripts, comprehensive literature reviews, and scholarly commentaries for the 
                forthcoming publication cycle.
              </p>

              {/* Covered Disciplines Grid */}
              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#292929] block mb-2">
                  Invited Disciplinary Fields:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#575551]">
                  {CALL_FOR_PAPERS_INFO.disciplinesCovered.map((field) => (
                    <div key={field} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#7F3040] shrink-0" />
                      <span>{field}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <button
                  onClick={() => onNavigate('/for-authors/call-for-papers')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#7F3040] hover:bg-[#642331] text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors"
                >
                  <span>View Full CFP Guidelines</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('/for-authors/guidelines')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#F8F5EE] hover:bg-[#E8DED3] text-[#292929] border border-[#E8DED3] text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors"
                >
                  <FileText className="w-4 h-4 text-[#7F3040]" />
                  <span>Author Guidelines</span>
                </button>
              </div>
            </div>

            {/* Right 5 Columns: Particulars Box */}
            <div className="lg:col-span-5 bg-[#F8F5EE] border border-[#E8DED3] p-5 sm:p-6 rounded-xs space-y-4">
              <h4 className="text-sm font-bold tracking-wider text-[#7F3040] uppercase border-b border-[#E8DED3] pb-2">
                Submission Particulars
              </h4>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="font-semibold text-slate-700 block">Target Issue:</span>
                  <span className="text-[#292929] font-medium">{CALL_FOR_PAPERS_INFO.targetVolume} ({CALL_FOR_PAPERS_INFO.publicationPeriod})</span>
                </div>

                <div>
                  <span className="font-semibold text-slate-700 block">Submission Deadline:</span>
                  <span className="text-[#7F3040] font-semibold flex items-center gap-1.5 mt-0.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{CALL_FOR_PAPERS_INFO.submissionDeadlines}</span>
                  </span>
                </div>

                <div>
                  <span className="font-semibold text-slate-700 block">Review Cycle:</span>
                  <span className="text-[#575551]">{CALL_FOR_PAPERS_INFO.notificationOfReview}</span>
                </div>

                <div>
                  <span className="font-semibold text-slate-700 block">Article Processing Fee:</span>
                  <span className="text-[#575551]">{CALL_FOR_PAPERS_INFO.manuscriptFee}</span>
                </div>

                <div className="pt-2 border-t border-[#E8DED3]">
                  <span className="text-[11px] text-[#575551] italic leading-tight block">
                    Manuscripts must be formatted strictly according to author guidelines and submitted via the designated editorial email address.
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
