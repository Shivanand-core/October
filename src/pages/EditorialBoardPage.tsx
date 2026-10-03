import React from 'react';
import { Users, Clock, Mail, ExternalLink, ShieldCheck, Award } from 'lucide-react';
import { EDITORIAL_BOARD_DATA } from '../data/editorialBoard';

interface Props {
  onNavigate: (path: string) => void;
}

export const EditorialBoardPage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="py-10 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Page Header */}
      <div className="border-b border-[#E8DED3] pb-6 mb-8">
        <div className="flex items-center gap-2 text-xs text-[#575551] mb-2">
          <button onClick={() => onNavigate('/')} className="hover:text-[#7F3040]">Home</button>
          <span>/</span>
          <span className="text-[#7F3040] font-semibold">Editorial Board</span>
        </div>
        <span className="text-[11px] font-bold tracking-widest uppercase text-[#7F3040]">
          ACADEMIC GOVERNANCE
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-academic text-[#292929] mt-1">
          Editorial Board & Advisory Council
        </h1>
        <p className="text-base text-[#575551] font-editorial-body mt-2 max-w-3xl">
          The scholarly oversight, academic integrity, and double-blind peer review architecture of <em>Shivraj 350</em> are steered by distinguished faculty from Shivaji College, University of Delhi, and external advisory scholars.
        </p>
      </div>

      {/* Official Notice regarding Roster Confirmation */}
      <div className="mb-10 bg-[#E8DED3]/40 border-l-4 border-[#7F3040] p-4 sm:p-5 rounded-xs flex items-start gap-3">
        <Clock className="w-5 h-5 text-[#7F3040] shrink-0 mt-0.5" />
        <div className="text-xs text-[#575551] space-y-1">
          <p className="font-bold text-[#292929] uppercase tracking-wider">
            Official Governance Notice
          </p>
          <p>
            The formal constitution of the multidisciplinary Editorial Board and International Advisory Council 
            is currently undergoing administrative ratifications by the Governing Body of Shivaji College, University of Delhi. 
            Official member biographies, affiliations, and institutional profiles will be published here immediately upon formal administrative notification.
          </p>
        </div>
      </div>

      {/* Editorial Hierarchy Sections */}
      <div className="space-y-12">
        {EDITORIAL_BOARD_DATA.map((group) => (
          <section key={group.roleTitle} className="space-y-4">
            
            {/* Section Role Title */}
            <div className="border-b border-[#E8DED3] pb-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h2 className="text-xl sm:text-2xl font-bold font-academic text-[#7F3040]">
                {group.roleTitle}
              </h2>
              {group.description && (
                <span className="text-xs text-[#575551] italic">
                  {group.description}
                </span>
              )}
            </div>

            {/* Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.members.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#E8DED3] p-5 sm:p-6 rounded-xs shadow-2xs hover:border-[#C6A15B] transition-colors flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    
                    {/* Header: Status & Role */}
                    <div className="flex items-center justify-between pb-2 border-b border-[#F8F5EE]">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#7F3040]">
                        {member.designation}
                      </span>
                      {member.isConfirmed ? (
                        <span className="text-[10px] text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded-xs font-semibold">
                          Confirmed
                        </span>
                      ) : (
                        <span className="text-[10px] text-amber-900 bg-amber-50 px-1.5 py-0.5 rounded-xs font-medium border border-amber-200">
                          Pending Official Notification
                        </span>
                      )}
                    </div>

                    {/* Member Name */}
                    <h3 className="text-lg font-bold font-academic text-[#292929]">
                      {member.name}
                    </h3>

                    {/* Department & Institution */}
                    <div className="text-xs text-[#575551] space-y-1">
                      <p className="font-medium text-slate-800">{member.department}</p>
                      <p>{member.institution}</p>
                    </div>

                    {/* Research Area Placeholder */}
                    {member.researchArea && (
                      <div className="text-xs text-slate-600 pt-1">
                        <span className="font-semibold text-slate-700">Specialization: </span>
                        <span>{member.researchArea}</span>
                      </div>
                    )}
                  </div>

                  {/* Footer Contact Placeholder */}
                  <div className="pt-4 mt-4 border-t border-[#F8F5EE] text-xs text-[#575551] flex items-center justify-between">
                    <span className="italic text-[11px]">Shivaji College · DU</span>
                    <span className="text-[#7F3040] text-[11px] font-medium">To be confirmed</span>
                  </div>

                </div>
              ))}
            </div>

          </section>
        ))}
      </div>

      {/* Peer Review Commitment Banner */}
      <div className="mt-14 bg-[#F8F5EE] border border-[#C6A15B]/40 p-6 sm:p-8 rounded-xs text-center max-w-3xl mx-auto space-y-3">
        <h3 className="text-xl font-bold font-academic text-[#292929]">
          Interested in Joining the Peer Reviewer Panel?
        </h3>
        <p className="text-xs sm:text-sm text-[#575551] font-editorial-body leading-relaxed">
          Faculty members, senior researchers, and subject experts holding a Ph.D. with established publications in peer-reviewed journals are invited to submit their curriculum vitae for empanelment on our subject expert review rosters.
        </p>
        <div className="pt-2">
          <a
            href="mailto:journal@shivaji.du.ac.in?subject=Application%20for%20Peer%20Reviewer%20Empanelment%20-%20Shivraj%20350"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#7F3040] hover:bg-[#642331] text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Apply for Reviewer Empanelment</span>
          </a>
        </div>
      </div>

    </div>
  );
};
