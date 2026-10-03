import React, { useState } from 'react';
import { FileText, CheckCircle2, AlertCircle, Send, ArrowRight, ShieldCheck, Clock, BookOpen } from 'lucide-react';
import { CALL_FOR_PAPERS_INFO } from '../data/announcements';

interface Props {
  subview?: 'overview' | 'guidelines' | 'submission' | 'call-for-papers';
  onNavigate: (path: string) => void;
}

export const ForAuthorsPage: React.FC<Props> = ({ subview = 'overview', onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'guidelines' | 'submission' | 'cfp'>(
    subview === 'guidelines'
      ? 'guidelines'
      : subview === 'submission'
      ? 'submission'
      : subview === 'call-for-papers'
      ? 'cfp'
      : 'overview'
  );

  return (
    <div className="py-10 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Page Header */}
      <div className="border-b border-[#E8DED3] pb-6 mb-8">
        <div className="flex items-center gap-2 text-xs text-[#575551] mb-2">
          <button onClick={() => onNavigate('/')} className="hover:text-[#7F3040]">Home</button>
          <span>/</span>
          <span className="text-[#7F3040] font-semibold">For Authors</span>
        </div>
        <span className="text-[11px] font-bold tracking-widest uppercase text-[#7F3040]">
          AUTHOR INFORMATION PORTAL
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-academic text-[#292929] mt-1">
          Information & Guidelines for Authors
        </h1>
        <p className="text-base text-[#575551] font-editorial-body mt-2 max-w-3xl">
          Everything you need to prepare, format, and submit your research manuscript to <em>Shivraj 350</em>.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[#E8DED3] pb-3 mb-8">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors ${
            activeTab === 'overview'
              ? 'bg-[#7F3040] text-white'
              : 'bg-white text-[#292929] hover:bg-[#E8DED3] border border-[#E8DED3]'
          }`}
        >
          1. Publication Process
        </button>
        <button
          onClick={() => setActiveTab('guidelines')}
          className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors ${
            activeTab === 'guidelines'
              ? 'bg-[#7F3040] text-white'
              : 'bg-white text-[#292929] hover:bg-[#E8DED3] border border-[#E8DED3]'
          }`}
        >
          2. Author Guidelines
        </button>
        <button
          onClick={() => setActiveTab('submission')}
          className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors ${
            activeTab === 'submission'
              ? 'bg-[#7F3040] text-white'
              : 'bg-white text-[#292929] hover:bg-[#E8DED3] border border-[#E8DED3]'
          }`}
        >
          3. Submission Guidelines & Checklist
        </button>
        <button
          onClick={() => setActiveTab('cfp')}
          className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors ${
            activeTab === 'cfp'
              ? 'bg-[#7F3040] text-white'
              : 'bg-white text-[#292929] hover:bg-[#E8DED3] border border-[#E8DED3]'
          }`}
        >
          4. Call for Papers (CFP)
        </button>
      </div>

      {/* OVERVIEW / PUBLICATION PROCESS */}
      {activeTab === 'overview' && (
        <div className="space-y-10">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-academic text-[#7F3040]">
              The Scholarly Publication Lifecycle
            </h2>
            <p className="text-sm text-[#575551] font-editorial-body leading-relaxed max-w-3xl">
              From submission to digital dissemination, <em>Shivraj 350</em> enforces an uncompromising, transparent editorial workflow designed to maintain empirical precision and disciplinary authenticity.
            </p>
          </div>

          {/* Stepped Process Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white border border-[#E8DED3] p-5 rounded-xs space-y-2">
              <span className="text-[11px] font-bold text-[#C6A15B] uppercase tracking-widest block">
                STAGE 01
              </span>
              <h3 className="text-base font-bold font-academic text-[#292929]">
                Editorial Desk Screening
              </h3>
              <p className="text-xs text-[#575551] font-editorial-body leading-relaxed">
                Initial appraisal by Managing Editor for journal scope conformity, manuscript formatting compliance, and digital similarity screening.
              </p>
            </div>

            <div className="bg-white border border-[#E8DED3] p-5 rounded-xs space-y-2">
              <span className="text-[11px] font-bold text-[#C6A15B] uppercase tracking-widest block">
                STAGE 02
              </span>
              <h3 className="text-base font-bold font-academic text-[#292929]">
                Double-Blind Peer Review
              </h3>
              <p className="text-xs text-[#575551] font-editorial-body leading-relaxed">
                Anonymized manuscripts are evaluated by at least two external subject specialists assessing methodology, original findings, and scholarly value.
              </p>
            </div>

            <div className="bg-white border border-[#E8DED3] p-5 rounded-xs space-y-2">
              <span className="text-[11px] font-bold text-[#C6A15B] uppercase tracking-widest block">
                STAGE 03
              </span>
              <h3 className="text-base font-bold font-academic text-[#292929]">
                Revision & Editorial Decision
              </h3>
              <p className="text-xs text-[#575551] font-editorial-body leading-relaxed">
                Authors receive referee reports with constructive feedback. Revised manuscripts undergo verification before formal acceptance.
              </p>
            </div>

            <div className="bg-white border border-[#E8DED3] p-5 rounded-xs space-y-2">
              <span className="text-[11px] font-bold text-[#C6A15B] uppercase tracking-widest block">
                STAGE 04
              </span>
              <h3 className="text-base font-bold font-academic text-[#292929]">
                Typesetting & Dissemination
              </h3>
              <p className="text-xs text-[#575551] font-editorial-body leading-relaxed">
                Professional academic proofreading, XML/PDF formatting, pagination, and open-access publication in the digital repository.
              </p>
            </div>
          </div>

          {/* Submission Portal Preparation Notice */}
          <div className="bg-[#F8F5EE] border border-[#C6A15B]/50 p-6 rounded-xs space-y-3">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#7F3040]" />
              <h3 className="text-base font-bold font-academic text-[#292929]">
                Online Manuscript Submission Portal Status
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#575551] font-editorial-body leading-relaxed">
              In accordance with Phase 1 deployment, manuscript submissions for upcoming volumes are currently received via official editorial correspondence at <strong className="text-[#7F3040]">journal@shivaji.du.ac.in</strong>. A dedicated author dashboard portal with automated manuscript tracking is in preparation for subsequent phases.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setActiveTab('submission')}
                className="px-4 py-2 bg-[#7F3040] text-white text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#642331] transition-colors"
              >
                Review Submission Instructions
              </button>
            </div>
          </div>

        </div>
      )}

      {/* GUIDELINES */}
      {activeTab === 'guidelines' && (
        <div className="space-y-8">
          <div className="border-b border-[#E8DED3] pb-4">
            <h2 className="text-2xl font-bold font-academic text-[#7F3040]">
              Manuscript Preparation & Formatting Requirements
            </h2>
            <p className="text-sm text-[#575551] font-editorial-body mt-1">
              Please ensure your manuscript conforms to these structural standards prior to submission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#575551]">
            <div className="bg-white border border-[#E8DED3] p-5 rounded-xs space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#292929]">
                Length & Typography
              </h3>
              <ul className="space-y-2 list-disc list-inside leading-relaxed font-editorial-body">
                <li><strong>Research Articles:</strong> 4,000 to 7,000 words inclusive of references, figures, and tables.</li>
                <li><strong>Review Articles:</strong> 5,000 to 8,000 words offering comprehensive state-of-the-art syntheses.</li>
                <li><strong>Commentaries / Notes:</strong> 2,000 to 3,500 words for preliminary discoveries or policy briefs.</li>
                <li><strong>Font & Spacing:</strong> Standard 12pt Times New Roman or Georgia, double-spaced throughout with 1-inch margins.</li>
              </ul>
            </div>

            <div className="bg-white border border-[#E8DED3] p-5 rounded-xs space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#292929]">
                Title Page & Anonymization
              </h3>
              <ul className="space-y-2 list-disc list-inside leading-relaxed font-editorial-body">
                <li><strong>Title:</strong> Concise, informative, and indicative of research scope (under 20 words).</li>
                <li><strong>Abstract:</strong> Structured 200–250 words outlining background, methods, key findings, and academic significance.</li>
                <li><strong>Keywords:</strong> 4 to 6 specific keywords separated by semicolons.</li>
                <li><strong>Anonymization:</strong> Main document must NOT contain author names, affiliations, or institutional grants to ensure double-blind integrity. A separate Title Page document should accompany submission.</li>
              </ul>
            </div>

            <div className="bg-white border border-[#E8DED3] p-5 rounded-xs space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#292929]">
                Referencing & Citation Styles
              </h3>
              <ul className="space-y-2 list-disc list-inside leading-relaxed font-editorial-body">
                <li><strong>Sciences & Social Sciences:</strong> APA 7th Edition format with complete volume, issue, and DOI where applicable.</li>
                <li><strong>Humanities & History:</strong> Chicago Manual of Style (17th Edition, Author-Date or Notes & Bibliography).</li>
                <li>Every in-text citation must correspond to an entry in the References list, and vice versa.</li>
              </ul>
            </div>

            <div className="bg-white border border-[#E8DED3] p-5 rounded-xs space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#292929]">
                Tables, Figures & Data
              </h3>
              <ul className="space-y-2 list-disc list-inside leading-relaxed font-editorial-body">
                <li>High-resolution figures (minimum 300 DPI for photographs, 600 DPI for vector line diagrams).</li>
                <li>Tables must be created using document table tools (not pasted as static images) with descriptive captions above.</li>
                <li>Authors must furnish source data upon reasonable editorial request to substantiate findings.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* SUBMISSION GUIDELINES & CHECKLIST */}
      {activeTab === 'submission' && (
        <div className="space-y-8">
          <div className="border-b border-[#E8DED3] pb-4">
            <h2 className="text-2xl font-bold font-academic text-[#7F3040]">
              Submission Checklist & Author Affirmations
            </h2>
            <p className="text-sm text-[#575551] font-editorial-body mt-1">
              Verify that your submission dossier satisfies every item before sending.
            </p>
          </div>

          <div className="bg-white border border-[#E8DED3] p-6 rounded-xs space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#292929]">
              Pre-Submission Verification Checklist:
            </h3>

            <div className="space-y-3 text-xs text-[#575551]">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>The manuscript has not been previously published, nor is it currently under consideration by any other journal.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>The submission file is in Microsoft Word (.docx) or LaTeX (.pdf with source files).</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>The main text document is completely anonymized for double-blind peer review.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>A separate Title Page containing author names, designations, institutional addresses, and corresponding author email is prepared.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>All references, citations, tables, and figure captions adhere strictly to the specified style guide.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>A formal statement confirming no financial or academic conflict of interest is included.</span>
              </div>
            </div>
          </div>

          {/* Submission Instructions Box */}
          <div className="bg-[#F8F5EE] border-2 border-[#7F3040]/40 p-6 rounded-xs space-y-3">
            <h3 className="text-base font-bold font-academic text-[#7F3040]">
              How to Submit Your Manuscript (Phase 1 Channel)
            </h3>
            <p className="text-xs sm:text-sm text-[#575551] font-editorial-body leading-relaxed">
              Please compile your anonymized manuscript, separate title page, and conflict of interest declaration into an email addressed to:
            </p>
            <div className="p-3 bg-white border border-[#E8DED3] rounded-xs font-mono text-xs text-[#7F3040] select-all inline-block">
              journal@shivaji.du.ac.in
            </div>
            <p className="text-xs text-[#575551]">
              <strong>Email Subject Line Format:</strong> [Manuscript Submission] - Disciplinary Area - Author Last Name - Brief Title
            </p>
          </div>
        </div>
      )}

      {/* CALL FOR PAPERS (CFP) */}
      {activeTab === 'cfp' && (
        <div className="space-y-8">
          <div className="border-b border-[#E8DED3] pb-4">
            <h2 className="text-2xl font-bold font-academic text-[#7F3040]">
              Active Call for Papers: {CALL_FOR_PAPERS_INFO.targetVolume}
            </h2>
            <p className="text-sm text-[#575551] font-editorial-body mt-1">
              Publication Period: {CALL_FOR_PAPERS_INFO.publicationPeriod}
            </p>
          </div>

          <div className="bg-white border border-[#E8DED3] p-6 sm:p-8 rounded-xs space-y-6">
            <div className="space-y-3">
              <h3 className="text-lg font-bold font-academic text-[#292929]">
                Scope & Objectives for Volume 1, Issue 2
              </h3>
              <p className="text-xs sm:text-sm text-[#575551] font-editorial-body leading-relaxed">
                Following the publication of the Inaugural Issue, <em>Shivraj 350</em> announces the call for manuscripts for Issue 2. We welcome submissions that synthesize qualitative analysis with quantitative empirical verification, novel theoretical arguments, and critical reviews across diverse multidisciplinary horizons.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7F3040] block">
                  Eligible Disciplines:
                </span>
                <ul className="text-xs text-[#575551] space-y-1 list-disc list-inside font-editorial-body">
                  {CALL_FOR_PAPERS_INFO.disciplinesCovered.map(d => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7F3040] block">
                  Important Dates:
                </span>
                <div className="text-xs text-[#575551] space-y-2 bg-[#F8F5EE] p-4 rounded-xs border border-[#E8DED3]">
                  <p><strong>Manuscript Submission:</strong> {CALL_FOR_PAPERS_INFO.submissionDeadlines}</p>
                  <p><strong>Review Period:</strong> {CALL_FOR_PAPERS_INFO.notificationOfReview}</p>
                  <p><strong>Publication Mode:</strong> Continuous Online Open Access</p>
                  <p><strong>Processing Fee:</strong> {CALL_FOR_PAPERS_INFO.manuscriptFee}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8DED3] flex items-center justify-between flex-wrap gap-4">
              <span className="text-xs text-[#575551] italic">
                Submissions accepted via editorial email: journal@shivaji.du.ac.in
              </span>
              <a
                href="mailto:journal@shivaji.du.ac.in?subject=CFP%20Submission%20Vol1%20Issue2"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#7F3040] hover:bg-[#642331] text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Manuscript for CFP</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
