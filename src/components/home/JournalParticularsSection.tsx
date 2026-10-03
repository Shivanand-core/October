import React, { useState } from 'react';
import { JOURNAL_PARTICULARS, JournalParticularItem } from '../../data/journal';
import { Mail, ShieldCheck, Copy, Check, MapPin, Layers, Sparkles, BookOpen, SlidersHorizontal } from 'lucide-react';

export const JournalParticularsSection: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [mobileFilter, setMobileFilter] = useState<'all' | 'identity' | 'specs' | 'contact'>('all');

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const filteredItems = mobileFilter === 'all' 
    ? JOURNAL_PARTICULARS 
    : JOURNAL_PARTICULARS.filter(item => item.category === mobileFilter);

  return (
    <section 
      aria-labelledby="journal-particulars-heading"
      className="bg-[#F8F5EE] border-b border-[#E8DED3] py-8 sm:py-10 lg:py-12 px-3 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-5 sm:mb-8 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-1.5 sm:mb-2">
            <span className="h-0.5 w-5 sm:w-6 bg-[#C6A15B]" aria-hidden="true" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#7F3040]">
              Institutional Registry
            </span>
          </div>
          <h2 
            id="journal-particulars-heading"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
            className="text-2xl sm:text-3xl font-bold text-[#7F3040] tracking-tight"
          >
            JOURNAL PARTICULARS
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-stone-600 font-serif italic mt-1">
            Essential information about Shivraj 350
          </p>

          {/* MOBILE ONLY: Quick Categorization Chips for Fast Navigation */}
          <div className="md:hidden mt-4 flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 -mx-1 px-1">
            <button
              onClick={() => setMobileFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-sm border whitespace-nowrap transition-all ${
                mobileFilter === 'all'
                  ? 'bg-[#7F3040] text-white border-[#7F3040] shadow-xs'
                  : 'bg-white text-stone-700 border-[#E8DED3] hover:bg-[#F2ECE1]'
              }`}
            >
              All (15)
            </button>
            <button
              onClick={() => setMobileFilter('identity')}
              className={`px-3 py-1.5 text-xs font-medium rounded-sm border whitespace-nowrap transition-all ${
                mobileFilter === 'identity'
                  ? 'bg-[#7F3040] text-white border-[#7F3040] shadow-xs'
                  : 'bg-white text-stone-700 border-[#E8DED3] hover:bg-[#F2ECE1]'
              }`}
            >
              Identity
            </button>
            <button
              onClick={() => setMobileFilter('specs')}
              className={`px-3 py-1.5 text-xs font-medium rounded-sm border whitespace-nowrap transition-all ${
                mobileFilter === 'specs'
                  ? 'bg-[#7F3040] text-white border-[#7F3040] shadow-xs'
                  : 'bg-white text-stone-700 border-[#E8DED3] hover:bg-[#F2ECE1]'
              }`}
            >
              Specs
            </button>
            <button
              onClick={() => setMobileFilter('contact')}
              className={`px-3 py-1.5 text-xs font-medium rounded-sm border whitespace-nowrap transition-all ${
                mobileFilter === 'contact'
                  ? 'bg-[#7F3040] text-white border-[#7F3040] shadow-xs'
                  : 'bg-white text-stone-700 border-[#E8DED3] hover:bg-[#F2ECE1]'
              }`}
            >
              Contact
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW: Full scholarly two-column table (35-40% label, 60-65% value) */}
        {/* ========================================================================= */}
        <div className="hidden md:block bg-white border border-[#E8DED3] rounded-sm shadow-xs overflow-hidden">
          {/* Subtle Burgundy Top Accent Rule */}
          <div className="h-1 bg-gradient-to-r from-[#7F3040] via-[#A04255] to-[#7F3040]" />

          {/* Desktop Table Header */}
          <div className="grid grid-cols-12 bg-[#F6F1E8] border-b border-[#E8DED3] py-2.5 px-6 text-xs font-bold uppercase tracking-wider text-[#5A5046]">
            <div className="col-span-5 lg:col-span-4">Particulars / Attribute</div>
            <div className="col-span-7 lg:col-span-8">Journal Specifications</div>
          </div>

          {/* Desktop Table Rows */}
          <div className="divide-y divide-[#EFE8DF]">
            {JOURNAL_PARTICULARS.map((item: JournalParticularItem, index: number) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`px-6 py-3.5 transition-colors ${
                    isEven ? 'bg-[#FFFFFF]' : 'bg-[#FCFAF6]'
                  } hover:bg-[#F9F5EC]`}
                >
                  <div className="grid grid-cols-12 items-baseline gap-4">
                    <div className="col-span-5 lg:col-span-4 font-semibold text-[13px] text-[#554C42] tracking-wide uppercase font-academic">
                      {item.label}
                    </div>

                    <div className="col-span-7 lg:col-span-8 text-[14.5px] text-[#292929] leading-relaxed flex items-center justify-between gap-3">
                      <div>
                        {item.isConfirmed ? (
                          item.isLink && item.linkHref ? (
                            <a
                              href={item.linkHref}
                              className="text-[#7F3040] hover:text-[#5B1B29] font-medium hover:underline inline-flex items-center gap-1.5 transition-colors"
                            >
                              <Mail className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                              <span>{item.value}</span>
                            </a>
                          ) : (
                            <span className="font-normal font-sans text-stone-900">
                              {item.value}
                            </span>
                          )
                        ) : (
                          <span className="inline-flex items-center gap-2 text-stone-500 italic font-serif text-[14px]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]/70 shrink-0" />
                            <span>{item.value}</span>
                          </span>
                        )}
                      </div>

                      {/* Desktop Quick Copy Action for Email & Address */}
                      {(item.id === 'email' || item.id === 'address') && (
                        <button
                          onClick={() => handleCopy(item.value, item.id)}
                          className="shrink-0 p-1 text-stone-400 hover:text-[#7F3040] transition-colors rounded hover:bg-stone-100"
                          title={`Copy ${item.label}`}
                          aria-label={`Copy ${item.label}`}
                        >
                          {copiedKey === item.id ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Table Footer */}
          <div className="bg-[#FAF7F0] border-t border-[#E8DED3] px-6 py-2.5 flex items-center justify-between text-xs text-stone-500">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#7F3040] shrink-0" />
              <span>Official Institutional Repository Data • Shivaji College, University of Delhi</span>
            </span>
            <span className="text-[11px] text-stone-400 font-mono">
              Estd. 2026 • New Delhi, India
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VIEW: Highly Ergonomic, Compact Layout */}
        {/* ========================================================================= */}
        <div className="md:hidden space-y-3">
          
          {/* 1. Identity Section (Prominent Cards) */}
          {(mobileFilter === 'all' || mobileFilter === 'identity') && (
            <div className="bg-white border border-[#E8DED3] rounded-sm p-4 shadow-xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#F0EAE1]">
                <span className="text-[11px] font-bold text-[#7F3040] uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
                  Journal Identification
                </span>
                <span className="text-[10px] text-stone-400 font-medium">Core Registry</span>
              </div>

              {/* Journal Title */}
              <div>
                <span className="text-[10px] font-semibold text-stone-500 uppercase tracking-wider block mb-0.5">
                  Journal Title
                </span>
                <p 
                  style={{ fontFamily: "'Times New Roman', Times, serif" }}
                  className="text-base font-bold text-[#7F3040] leading-snug"
                >
                  Shivraj 350: International Peer Reviewed Multidisciplinary Journal
                </p>
              </div>

              {/* Publisher & Institution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-[#F8F4EE]">
                <div>
                  <span className="text-[10px] font-semibold text-stone-500 uppercase tracking-wider block mb-0.5">
                    Publisher & Publishing Institution
                  </span>
                  <p className="text-xs font-semibold text-stone-900 leading-snug">
                    Shivaji College, University of Delhi
                  </p>
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-stone-500 uppercase tracking-wider block mb-0.5">
                    Subject Classification
                  </span>
                  <span className="inline-block bg-[#F8F4EE] border border-[#E8DED3] text-[#7F3040] font-semibold text-[11px] px-2 py-0.5 rounded-xs">
                    Multidisciplinary
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* 2. Compact 2-Column Grid for Specifications (Reduces vertical scroll by 50%) */}
          {(mobileFilter === 'all' || mobileFilter === 'specs') && (
            <div className="bg-white border border-[#E8DED3] rounded-sm p-3.5 shadow-xs">
              <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#F0EAE1]">
                <span className="text-[11px] font-bold text-[#7F3040] uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
                  Publication Specifications
                </span>
                <span className="text-[10px] text-stone-400 font-medium">8 Specifications</span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {/* Starting Year */}
                <div className="bg-[#FAF7F2] p-2.5 rounded-xs border border-[#EFE8DF]/80">
                  <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block mb-0.5">
                    Starting Year
                  </span>
                  <span className="text-sm font-bold text-stone-900">2026</span>
                </div>

                {/* Format */}
                <div className="bg-[#FAF7F2] p-2.5 rounded-xs border border-[#EFE8DF]/80">
                  <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block mb-0.5">
                    Publication Format
                  </span>
                  <span className="text-sm font-bold text-stone-900">Online</span>
                </div>

                {/* Country */}
                <div className="bg-[#FAF7F2] p-2.5 rounded-xs border border-[#EFE8DF]/80">
                  <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block mb-0.5">
                    Country of Publication
                  </span>
                  <span className="text-xs font-semibold text-stone-800">India</span>
                </div>

                {/* Place */}
                <div className="bg-[#FAF7F2] p-2.5 rounded-xs border border-[#EFE8DF]/80">
                  <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block mb-0.5">
                    Place of Publication
                  </span>
                  <span className="text-xs font-semibold text-stone-800">New Delhi</span>
                </div>

                {/* ISSN */}
                <div className="bg-[#FAF7F2] p-2.5 rounded-xs border border-[#EFE8DF]/80">
                  <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block mb-0.5">
                    ISSN
                  </span>
                  <span className="text-[11px] text-stone-500 italic font-serif leading-tight block">
                    To be officially confirmed
                  </span>
                </div>

                {/* Frequency */}
                <div className="bg-[#FAF7F2] p-2.5 rounded-xs border border-[#EFE8DF]/80">
                  <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block mb-0.5">
                    Frequency
                  </span>
                  <span className="text-[11px] text-stone-500 italic font-serif leading-tight block">
                    To be officially confirmed
                  </span>
                </div>

                {/* Language */}
                <div className="bg-[#FAF7F2] p-2.5 rounded-xs border border-[#EFE8DF]/80">
                  <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block mb-0.5">
                    Language
                  </span>
                  <span className="text-[11px] text-stone-500 italic font-serif leading-tight block">
                    To be officially confirmed
                  </span>
                </div>

                {/* Publication Fee */}
                <div className="bg-[#FAF7F2] p-2.5 rounded-xs border border-[#EFE8DF]/80">
                  <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block mb-0.5">
                    Publication Fee
                  </span>
                  <span className="text-[11px] text-stone-500 italic font-serif leading-tight block">
                    To be officially confirmed
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* 3. Editorial Office & Contact Card (Touch-friendly 44px tap targets & direct action) */}
          {(mobileFilter === 'all' || mobileFilter === 'contact') && (
            <div className="bg-white border border-[#E8DED3] rounded-sm p-4 shadow-xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#F0EAE1]">
                <span className="text-[11px] font-bold text-[#7F3040] uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
                  Editorial Secretariat & Office
                </span>
                <span className="text-[10px] text-stone-400 font-medium">Direct Contact</span>
              </div>

              {/* Office Name */}
              <div>
                <span className="text-[10px] font-semibold text-stone-500 uppercase tracking-wider block mb-0.5">
                  Editorial Office
                </span>
                <p className="text-xs font-semibold text-stone-900 leading-snug">
                  Shivaji College, University of Delhi
                </p>
              </div>

              {/* Email with direct touch button */}
              <div className="bg-[#FBF8F3] p-3 rounded-xs border border-[#EAE2D5] space-y-2">
                <span className="text-[10px] font-bold text-[#7F3040] uppercase tracking-wider block">
                  Official Communication Email
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href="mailto:journal@shivaji.du.ac.in"
                    className="text-xs sm:text-sm font-semibold text-[#7F3040] hover:underline flex items-center gap-1.5 truncate"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                    <span className="truncate">journal@shivaji.du.ac.in</span>
                  </a>
                  <button
                    onClick={() => handleCopy('journal@shivaji.du.ac.in', 'mobile-email')}
                    className="shrink-0 px-2.5 py-1.5 text-[11px] font-medium bg-white border border-[#E8DED3] rounded text-stone-700 active:bg-stone-100 flex items-center gap-1"
                    aria-label="Copy Email"
                  >
                    {copiedKey === 'mobile-email' ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-stone-500" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Physical Address */}
              <div className="pt-1">
                <span className="text-[10px] font-semibold text-stone-500 uppercase tracking-wider block mb-1">
                  Postal Address
                </span>
                <div className="flex items-start justify-between gap-2 bg-[#FAF7F2] p-2.5 rounded-xs border border-[#EFE8DF]/80">
                  <div className="flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#7F3040] shrink-0 mt-0.5" />
                    <p className="text-xs text-stone-800 leading-relaxed font-sans">
                      Ring Road, Raja Garden, New Delhi – 110027, India
                    </p>
                  </div>
                  <button
                    onClick={() => handleCopy('Ring Road, Raja Garden, New Delhi – 110027, India', 'mobile-address')}
                    className="shrink-0 p-1 text-stone-400 active:text-[#7F3040]"
                    title="Copy Address"
                    aria-label="Copy Address"
                  >
                    {copiedKey === 'mobile-address' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* Institutional note on mobile */}
          <div className="bg-[#FAF7F0] border border-[#E8DED3] rounded-xs px-3 py-2 flex items-center justify-between text-[11px] text-stone-500">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3 h-3 text-[#7F3040] shrink-0" />
              <span>Official Institutional Data</span>
            </span>
            <span className="font-mono text-[10px] text-stone-400">Shivaji College · DU</span>
          </div>

        </div>

      </div>
    </section>
  );
};
