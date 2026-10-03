import React, { useState } from 'react';
import { BookOpen, CheckCircle, Clock, ShieldAlert, Award, FileSpreadsheet, Building2, ExternalLink } from 'lucide-react';
import { JOURNAL_DATA, SCOPE_CATEGORIES, CONTRIBUTION_TYPES } from '../data/journal';
import { JOURNAL_PARTICULARS } from '../data/journalParticulars';
import { InstitutionalLogo } from '../components/ui/InstitutionalLogo';

interface Props {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<Props> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'particulars' | 'scope' | 'contributions'>('overview');

  return (
    <div className="py-6 sm:py-10 md:py-16 px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Breadcrumb & Title */}
      <div className="border-b border-[#E8DED3] pb-4 sm:pb-6 mb-6 sm:mb-8">
        <div className="flex items-center gap-2 text-xs text-[#575551] mb-2">
          <button onClick={() => onNavigate('/')} className="hover:text-[#7F3040]">Home</button>
          <span>/</span>
          <span className="text-[#7F3040] font-semibold">About the Journal</span>
        </div>
        <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-[#7F3040]">
          INSTITUTIONAL SCHOLARSHIP
        </span>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-academic text-[#292929] mt-1">
          About Shivraj 350
        </h1>
        <p className="text-xs sm:text-base text-[#575551] font-editorial-body mt-2 max-w-3xl">
          An International Peer Reviewed Multidisciplinary Journal published by Shivaji College, University of Delhi, committed to advancing critical inquiry and interdisciplinary knowledge.
        </p>
      </div>

      {/* Internal Navigation Sub-tabs (Horizontally scrollable on mobile) */}
      <div className="flex items-center gap-2 border-b border-[#E8DED3] pb-3 mb-6 sm:mb-8 overflow-x-auto scrollbar-none sm:flex-wrap">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-3.5 sm:px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors shrink-0 ${
            activeTab === 'overview'
              ? 'bg-[#7F3040] text-white'
              : 'bg-white text-[#292929] hover:bg-[#E8DED3] border border-[#E8DED3]'
          }`}
        >
          1. Overview
        </button>
        <button
          onClick={() => setActiveTab('particulars')}
          className={`px-3.5 sm:px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors shrink-0 ${
            activeTab === 'particulars'
              ? 'bg-[#7F3040] text-white'
              : 'bg-white text-[#292929] hover:bg-[#E8DED3] border border-[#E8DED3]'
          }`}
        >
          2. Particulars Table
        </button>
        <button
          onClick={() => setActiveTab('scope')}
          className={`px-3.5 sm:px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors shrink-0 ${
            activeTab === 'scope'
              ? 'bg-[#7F3040] text-white'
              : 'bg-white text-[#292929] hover:bg-[#E8DED3] border border-[#E8DED3]'
          }`}
        >
          3. Aims & Scope
        </button>
        <button
          onClick={() => setActiveTab('contributions')}
          className={`px-3.5 sm:px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors shrink-0 ${
            activeTab === 'contributions'
              ? 'bg-[#7F3040] text-white'
              : 'bg-white text-[#292929] hover:bg-[#E8DED3] border border-[#E8DED3]'
          }`}
        >
          4. Types of Contributions
        </button>
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="space-y-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-5 text-sm text-[#292929] font-editorial-body leading-relaxed">
              <h2 className="text-2xl font-bold font-academic text-[#7F3040]">
                Institutional Genesis & Academic Vision
              </h2>
              <p>
                <strong>Shivraj 350</strong> is an international, peer-reviewed, multidisciplinary academic journal 
                conceived and published by <strong>Shivaji College, University of Delhi</strong>. Established in 2026, 
                the journal honors the enduring institutional heritage of the college and provides a vibrant intellectual 
                forum for original scholarship across natural sciences, mathematical disciplines, social sciences, humanities, 
                and applied commerce.
              </p>
              <p>
                Higher education and scientific progress increasingly require breaking through disciplinary barriers. 
                Contemporary ecological transformations, socio-political dynamics, public health crises, and technological disruptions 
                cannot be unraveled within isolated departmental boundaries. <em>Shivraj 350</em> provides a common arena 
                where theoretical rigor meets empirical investigation and qualitative discernment.
              </p>
              <p>
                The journal enforces rigorous <strong>double-blind peer review</strong>, adhering strictly to global 
                academic publishing ethics, uncompromised similarity screening, and author equity.
              </p>

              <div className="pt-4 border-t border-[#E8DED3] flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('/editorial-board')}
                  className="px-4 py-2 bg-[#7F3040] text-white text-xs font-semibold tracking-wider uppercase rounded-xs hover:bg-[#642331] transition-colors"
                >
                  View Editorial Board
                </button>
                <button
                  onClick={() => onNavigate('/policies/peer-review')}
                  className="px-4 py-2 bg-white border border-[#E8DED3] text-[#292929] text-xs font-semibold tracking-wider uppercase rounded-xs hover:bg-[#E8DED3] transition-colors"
                >
                  Peer Review Guidelines
                </button>
              </div>
            </div>

            {/* Right Card: Institutional Publisher Info */}
            <div className="lg:col-span-4 bg-white border border-[#E8DED3] p-6 rounded-xs space-y-4">
              <div className="border-b border-[#E8DED3] pb-3 flex items-center gap-3">
                <InstitutionalLogo type="shivaji" size="md" />
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#7F3040] block">
                    PUBLISHING INSTITUTION
                  </span>
                  <h3 className="text-lg font-bold font-academic text-[#292929] mt-0.5">
                    Shivaji College
                  </h3>
                  <p className="text-xs text-[#575551]">University of Delhi</p>
                </div>
              </div>

              <div className="text-xs text-[#575551] space-y-2.5">
                <p>
                  Shivaji College is a premier constituent college of the University of Delhi, accredited with Grade &quot;A&quot; by the National Assessment and Accreditation Council (NAAC).
                </p>
                <div className="p-3 bg-[#F8F5EE] border border-[#E8DED3] rounded-xs space-y-1">
                  <span className="font-semibold text-slate-800 block">Editorial Office:</span>
                  <p>Ring Road, Raja Garden, New Delhi – 110027, India</p>
                  <p className="pt-1 text-[#7F3040] font-medium">{JOURNAL_DATA.email}</p>
                </div>
                <a
                  href={JOURNAL_DATA.collegeWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#7F3040] font-semibold hover:underline pt-1"
                >
                  <span>Visit College Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Indexing & Abstracting Section (Section 31 Compliance) */}
          <div id="indexing" className="bg-[#E8DED3]/40 border border-[#E8DED3] p-6 rounded-xs space-y-3">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#7F3040]" />
              <h3 className="text-lg font-bold font-academic text-[#292929]">
                Indexing & Abstracting Status
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#575551] font-editorial-body leading-relaxed">
              As an inaugural publication commencing in 2026, <em>Shivraj 350</em> is currently completing the requisite 
              evaluation volumes for formal submission and indexing with recognized national and international scholarly databases 
              (including UGC-CARE list evaluation, DOAJ, and major bibliographic citation indices).
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/80 p-3 rounded-xs border border-[#E8DED3]">
              <Clock className="w-4 h-4 text-[#C6A15B] shrink-0" />
              <span>Indexing status: Applications pending official evaluation post inaugural volume cycle.</span>
            </div>
          </div>

        </div>
      )}

      {/* TAB 2: JOURNAL PARTICULARS TABLE (Section 22 Compliance) */}
      {activeTab === 'particulars' && (
        <div className="space-y-6">
          <div className="bg-white border border-[#E8DED3] p-4 rounded-xs text-xs text-[#575551] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span>
              Official Journal Particulars Table in accordance with scholarly publishing standards and ISSN guidelines.
            </span>
            <span className="text-[#7F3040] font-semibold">
              Updated: Academic Session 2026
            </span>
          </div>

          {/* Responsive Scholarly Table */}
          <div className="bg-white border border-[#E8DED3] rounded-xs shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#7F3040] text-white border-b border-[#642331]">
                    <th className="py-3 px-4 sm:px-6 font-semibold uppercase tracking-wider w-1/3">
                      Parameter / Particular
                    </th>
                    <th className="py-3 px-4 sm:px-6 font-semibold uppercase tracking-wider w-1/2">
                      Official Specification
                    </th>
                    <th className="py-3 px-4 sm:px-6 font-semibold uppercase tracking-wider w-1/6 text-right">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8DED3]">
                  {JOURNAL_PARTICULARS.map((item, index) => (
                    <tr 
                      key={item.label}
                      className={index % 2 === 0 ? 'bg-[#F8F5EE]/40 hover:bg-[#E8DED3]/40' : 'bg-white hover:bg-[#E8DED3]/40'}
                    >
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-[#292929] align-top">
                        {item.label}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-[#575551] leading-relaxed align-top">
                        <span className="text-[#292929] font-medium">{item.value}</span>
                        {item.notes && (
                          <span className="block text-[11px] text-slate-500 italic mt-0.5">
                            Note: {item.notes}
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-right align-top">
                        {item.isConfirmed ? (
                          <span className="inline-flex items-center gap-1 text-[11px] text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded-xs border border-emerald-200">
                            <CheckCircle className="w-3 h-3 text-emerald-600" />
                            Confirmed
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] text-amber-900 font-medium bg-amber-50 px-2 py-0.5 rounded-xs border border-amber-200">
                            <Clock className="w-3 h-3 text-amber-700" />
                            Pending
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: AIMS & SCOPE */}
      {activeTab === 'scope' && (
        <div className="space-y-8">
          <div className="border-b border-[#E8DED3] pb-4">
            <h2 className="text-2xl font-bold font-academic text-[#7F3040]">
              Aims & Scope of Shivraj 350
            </h2>
            <p className="text-sm text-[#575551] font-editorial-body mt-1">
              Fostering interdisciplinary dialogues, original scientific methodologies, and critical humanistic perspectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SCOPE_CATEGORIES.map((cat) => (
              <div key={cat.title} className="bg-white border border-[#E8DED3] p-6 rounded-xs space-y-2">
                <span className="text-[11px] font-bold tracking-wider uppercase text-[#7F3040]">
                  Core Disciplinary Cluster
                </span>
                <h3 className="text-lg font-bold font-academic text-[#292929]">
                  {cat.title}
                </h3>
                <p className="text-xs text-[#575551] font-editorial-body leading-relaxed">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[#F8F5EE] border border-[#E8DED3] p-6 rounded-xs space-y-3">
            <h3 className="text-base font-bold font-academic text-[#292929]">
              Cross-Faculty Methodological Commitment
            </h3>
            <p className="text-xs text-[#575551] leading-relaxed font-editorial-body">
              The journal actively encourages research co-authored across traditionally disparate departments—such as computational modeling in historical linguistic archives, bio-statistical modeling of environmental legislation, or ethical considerations in artificial intelligence governance.
            </p>
          </div>
        </div>
      )}

      {/* TAB 4: TYPES OF CONTRIBUTIONS */}
      {activeTab === 'contributions' && (
        <div className="space-y-6">
          <div className="border-b border-[#E8DED3] pb-4">
            <h2 className="text-2xl font-bold font-academic text-[#7F3040]">
              Types of Scholarly Contributions
            </h2>
            <p className="text-sm text-[#575551] font-editorial-body mt-1">
              Standard article classifications accepted for editorial peer review.
            </p>
          </div>

          <div className="space-y-4">
            {CONTRIBUTION_TYPES.map((type) => (
              <div key={type.name} className="bg-white border border-[#E8DED3] p-5 rounded-xs flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold font-academic text-[#292929]">
                      {type.name}
                    </h3>
                  </div>
                  <p className="text-xs text-[#575551] font-editorial-body leading-relaxed">
                    {type.description}
                  </p>
                </div>
                <div className="shrink-0 text-xs">
                  {type.status === 'Confirmed' ? (
                    <span className="text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-xs border border-emerald-200 font-semibold text-[11px]">
                      Confirmed Category
                    </span>
                  ) : (
                    <span className="text-amber-800 bg-amber-50 px-2 py-0.5 rounded-xs border border-amber-200 font-medium text-[11px]">
                      Pending Official Confirmation
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 text-center">
            <button
              onClick={() => onNavigate('/for-authors/guidelines')}
              className="px-6 py-2.5 bg-[#7F3040] text-white text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#642331] transition-colors"
            >
              Consult Author Guidelines for Manuscript Length & Formatting
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
