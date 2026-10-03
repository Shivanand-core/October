import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Clock, ChevronRight, FileText, Scale, AlertTriangle, BookOpen } from 'lucide-react';
import { POLICIES_DATA } from '../data/policies';

interface Props {
  initialSlug?: string;
  onNavigate: (path: string) => void;
}

export const PoliciesPage: React.FC<Props> = ({ initialSlug, onNavigate }) => {
  const [selectedSlug, setSelectedSlug] = useState<string>(
    initialSlug || 'peer-review'
  );

  const activePolicy = POLICIES_DATA.find(p => p.slug === selectedSlug) || POLICIES_DATA[0];

  return (
    <div className="py-10 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Page Header */}
      <div className="border-b border-[#E8DED3] pb-6 mb-8">
        <div className="flex items-center gap-2 text-xs text-[#575551] mb-2">
          <button onClick={() => onNavigate('/')} className="hover:text-[#7F3040]">Home</button>
          <span>/</span>
          <span className="text-[#7F3040] font-semibold">Editorial Policies</span>
        </div>
        <span className="text-[11px] font-bold tracking-widest uppercase text-[#7F3040]">
          ETHICS & INTEGRITY
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-academic text-[#292929] mt-1">
          Editorial Policies & Standards
        </h1>
        <p className="text-base text-[#575551] font-editorial-body mt-2 max-w-3xl">
          Shivraj 350 adheres to international benchmarks in scholarly publishing ethics, transparent peer assessment, intellectual property stewardship, and digital preservation.
        </p>
      </div>

      {/* Mobile Policy Selector Dropdown (< lg) */}
      <div className="lg:hidden mb-6 bg-white border border-[#E8DED3] p-3.5 rounded-xs space-y-2 shadow-2xs">
        <label htmlFor="mobile-policy-select" className="text-[10px] font-bold uppercase tracking-widest text-[#7F3040] block">
          SELECT POLICY DOCUMENT:
        </label>
        <select
          id="mobile-policy-select"
          value={selectedSlug}
          onChange={(e) => setSelectedSlug(e.target.value)}
          className="w-full p-3 bg-[#F8F5EE] border border-[#E8DED3] text-xs font-semibold text-[#292929] rounded-xs outline-none focus:border-[#7F3040]"
        >
          {POLICIES_DATA.map((policy) => (
            <option key={policy.id} value={policy.slug}>
              {policy.title}
            </option>
          ))}
        </select>
      </div>

      {/* Two-Column Asymmetric Policy Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Policy List Navigation (4 cols) - Desktop only */}
        <div className="hidden lg:block lg:col-span-4 bg-white border border-[#E8DED3] rounded-xs p-3 space-y-1 shadow-2xs">
          <div className="p-3 border-b border-[#E8DED3] mb-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#7F3040]">
              POLICY REGISTER
            </span>
          </div>

          {POLICIES_DATA.map((policy) => {
            const isSelected = policy.slug === activePolicy.slug;
            return (
              <button
                key={policy.id}
                onClick={() => setSelectedSlug(policy.slug)}
                className={`w-full text-left p-3 rounded-xs text-xs font-semibold transition-all flex items-center justify-between group ${
                  isSelected
                    ? 'bg-[#7F3040] text-white shadow-2xs'
                    : 'text-[#292929] hover:bg-[#F8F5EE]'
                }`}
              >
                <span className="font-academic text-sm font-bold tracking-tight">
                  {policy.title}
                </span>
                <ChevronRight className={`w-3.5 h-3.5 ${isSelected ? 'text-[#C6A15B]' : 'text-stone-400 group-hover:text-[#7F3040]'}`} />
              </button>
            );
          })}
        </div>

        {/* Right Column: Active Policy Content View (8 cols) */}
        <div className="w-full lg:col-span-8 bg-white border border-[#E8DED3] rounded-xs p-4 sm:p-8 lg:p-10 shadow-xs space-y-5 sm:space-y-6">
          
          {/* Header of Active Policy */}
          <div className="border-b border-[#E8DED3] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#7F3040] block mb-1">
                JOURNAL POLICY DOCUMENT
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-academic text-[#292929]">
                {activePolicy.title}
              </h2>
            </div>

            <div>
              {activePolicy.status === 'Confirmed' ? (
                <span className="inline-flex items-center gap-1 text-[11px] text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-xs border border-emerald-200 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Confirmed Policy
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-[11px] text-amber-900 bg-amber-50 px-2.5 py-1 rounded-xs border border-amber-200 font-medium">
                  <Clock className="w-3.5 h-3.5 text-amber-700" />
                  Pending Official Confirmation
                </span>
              )}
            </div>
          </div>

          {/* Policy Summary Callout */}
          <div className="bg-[#F8F5EE] border-l-2 border-[#7F3040] p-4 text-xs sm:text-sm text-[#292929] font-editorial-body leading-relaxed italic">
            &ldquo;{activePolicy.shortSummary}&rdquo;
          </div>

          {/* Full Policy Content */}
          <div className="space-y-4 text-sm text-[#292929] font-editorial-body leading-relaxed">
            {activePolicy.content.map((paragraph, idx) => (
              <p key={idx}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Standards & Invariants */}
          {activePolicy.standards && activePolicy.standards.length > 0 && (
            <div className="pt-6 border-t border-[#E8DED3] space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Core Compliance Benchmarks:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#575551]">
                {activePolicy.standards.map((std) => (
                  <div key={std} className="flex items-center gap-2 bg-[#F8F5EE] p-2.5 rounded-xs border border-[#E8DED3]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7F3040] shrink-0" />
                    <span className="font-medium text-slate-800">{std}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Institutional Affirmation */}
          <div className="pt-6 border-t border-[#E8DED3] text-xs text-[#575551] flex items-center justify-between">
            <span>Administered by Editorial Board · Shivaji College</span>
            <button
              onClick={() => onNavigate('/contact')}
              className="text-[#7F3040] font-semibold hover:underline"
            >
              Inquire regarding policy interpretation →
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
