import React, { useState } from 'react';
import { ArrowRight, BookOpen, Sparkles, Building2, CheckCircle2 } from 'lucide-react';
import { getAssetPath } from '../../utils/assets';

interface Props {
  onNavigate: (path: string) => void;
}

export const HeroSection: React.FC<Props> = ({ onNavigate }) => {
  const [photoError, setPhotoError] = useState(false);
  const campusPhotoSrc = getAssetPath('logos/new shivaji college.png');

  return (
    <>
      {/* MOBILE HERO (Viewport < md): Purpose-designed, compact, editorial */}
      <section className="md:hidden bg-gradient-to-b from-[#F8F5EE] to-[#F2ECE1] border-b border-[#E8DED3] py-6 px-4">
        <div className="max-w-md mx-auto space-y-4">
          
          {/* Eyebrow & Institutional Lineage */}
          <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-[#7F3040]">
            <a 
              href="https://shivaji.du.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-[#5B1B29] transition-colors"
              title="Visit Shivaji College Official Website (https://shivaji.du.ac.in/)"
            >
              SHIVAJI COLLEGE
            </a>
            <span className="text-[#C6A15B]" aria-hidden="true">•</span>
            <a 
              href="https://www.du.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-[#5B1B29] transition-colors"
              title="Visit University of Delhi Official Website (https://www.du.ac.in/)"
            >
              UNIVERSITY OF DELHI
            </a>
          </div>

          {/* Primary Journal Brand Title */}
          <div>
            <h1 
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
              className="text-3xl font-bold text-[#7F3040] tracking-[0.02em] leading-tight"
            >
              SHIVRAJ <span className="text-[#292929]">350</span>
            </h1>
            <div className="w-16 h-0.5 bg-[#C6A15B] my-1.5 opacity-80" />
            <p className="text-xs uppercase tracking-wider text-[#575551] font-semibold">
              International Peer Reviewed Multidisciplinary Journal
            </p>
          </div>

          {/* Short Supporting Copy */}
          <p className="text-sm text-[#575551] font-editorial-body leading-relaxed">
            A peer-reviewed academic platform published by Shivaji College, dedicated to publishing original empirical investigations, humanistic reflections, and socio-economic inquiry.
          </p>

          {/* Campus Photo Visual (Compact, non-overflowing, fully visible 3:2 aspect) */}
          <div className="relative aspect-[3/2] rounded-xs overflow-hidden bg-[#F4EFE6] border border-[#E8DED3] shadow-xs">
            <img
              src={campusPhotoSrc}
              alt="Shivaji College Campus, University of Delhi"
              className="w-full h-full object-cover object-center"
              onError={() => setPhotoError(true)}
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent py-2 px-3 text-white text-[11px]">
              <span className="font-semibold block leading-tight">Shivaji College Campus</span>
              <span className="text-[10px] text-stone-200">University of Delhi · Ring Road, Raja Garden</span>
            </div>
          </div>

          {/* Actions: One Primary CTA + Secondary Text Link */}
          <div className="pt-1 space-y-2.5">
            <button
              onClick={() => onNavigate('/publications/articles')}
              className="w-full py-3 bg-[#7F3040] hover:bg-[#642331] text-white text-xs font-semibold tracking-wider uppercase rounded-xs shadow-xs flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
            >
              <span>EXPLORE ARTICLES</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-center">
              <button
                onClick={() => onNavigate('/about')}
                className="text-xs font-semibold text-[#7F3040] hover:text-[#642331] hover:underline inline-flex items-center gap-1 transition-colors py-1"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>About the Journal & Editorial Scope →</span>
              </button>
            </div>
          </div>

          {/* Trust Indicators Strip */}
          <div className="pt-2 border-t border-[#E8DED3] flex items-center justify-around text-[10px] font-medium text-[#575551]">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#7F3040]" />
              <span>Double-Blind Review</span>
            </span>
            <span aria-hidden="true" className="text-[#C6A15B]">•</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#7F3040]" />
              <span>Open Access</span>
            </span>
            <span aria-hidden="true" className="text-[#C6A15B]">•</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#7F3040]" />
              <span>DU Lineage</span>
            </span>
          </div>

        </div>
      </section>

      {/* DESKTOP & TABLET HERO (Viewport >= md): Preserves approved layout */}
      <section className="hidden md:block bg-gradient-to-b from-[#F8F5EE] to-[#F2ECE1] border-b border-[#E8DED3] py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT SIDE: Editorial & Scholarly Purpose */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#7F3040]">
                <span>RESEARCH</span>
                <span className="text-[#C6A15B]" aria-hidden="true">•</span>
                <span>INQUIRY</span>
                <span className="text-[#C6A15B]" aria-hidden="true">•</span>
                <span>DISCOVERY</span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold text-[#292929] font-academic tracking-tight leading-[1.15] text-balance">
                A PLATFORM FOR <br />
                <span className="text-[#7F3040]">MULTIDISCIPLINARY</span> <br />
                SCHOLARSHIP
              </h2>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-[#575551] font-editorial-body leading-relaxed max-w-2xl">
                Published by <a href="https://shivaji.du.ac.in/" target="_blank" rel="noopener noreferrer" className="text-[#292929] font-semibold hover:text-[#7F3040] hover:underline" title="Visit Shivaji College Official Website">Shivaji College</a>, <a href="https://www.du.ac.in/" target="_blank" rel="noopener noreferrer" className="text-[#292929] font-semibold hover:text-[#7F3040] hover:underline" title="Visit University of Delhi Official Website">University of Delhi</a>, 
                <em> Shivraj 350</em> is a peer-reviewed academic journal dedicated to disseminating 
                original scientific investigations, humanistic reflections, socio-economic research, 
                and interdisciplinary methodologies addressing contemporary challenges.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('/publications/articles')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#7F3040] hover:bg-[#642331] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-xs shadow-xs hover:shadow-md transition-all group"
                >
                  <span>EXPLORE ARTICLES</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigate('/about')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-[#E8DED3]/60 text-[#7F3040] border border-[#7F3040]/30 hover:border-[#7F3040] text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-xs transition-colors"
                >
                  <BookOpen className="w-4 h-4 text-[#7F3040]" />
                  <span>ABOUT THE JOURNAL</span>
                </button>
              </div>

              {/* Micro Institutional Trust Badges */}
              <div className="pt-4 border-t border-[#E8DED3] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#575551]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7F3040]" />
                  <span>Double-Blind Peer Review</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7F3040]" />
                  <span>Open Access Repository</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7F3040]" />
                  <span>University of Delhi Lineage</span>
                </div>
              </div>

            </div>

            {/* RIGHT SIDE: Daylight Campus & Academic Architecture Representation */}
            <div className="lg:col-span-5">
              <div className="relative bg-[#E8DED3]/70 p-3 sm:p-4 rounded-xs border border-[#C6A15B]/30 shadow-sm">
                
                {/* Photo View if file exists, or Architectural Campus Vignette */}
                {!photoError ? (
                  <div className="relative aspect-[3/2] rounded-xs overflow-hidden bg-[#F4EFE6] border border-[#E8DED3] shadow-xs group">
                    <img
                      src={campusPhotoSrc}
                      alt="Shivaji College Campus, University of Delhi"
                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.01]"
                      onError={() => setPhotoError(true)}
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pt-6 pb-2.5 px-3 text-white text-xs">
                      <p className="font-semibold tracking-wide">Shivaji College Campus</p>
                      <p className="text-[11px] text-stone-200">University of Delhi · Ring Road, Raja Garden</p>
                    </div>
                  </div>
                ) : (
                  <div className="relative aspect-[4/3] rounded-xs overflow-hidden bg-gradient-to-tr from-[#7F3040]/10 via-[#E8DED3] to-white border border-[#E8DED3] flex flex-col justify-between p-6">
                    
                    {/* Institutional Header Stamp */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-[#7F3040]" />
                        <span className="text-[11px] font-bold tracking-widest uppercase text-[#7F3040]">
                          Shivaji College Campus
                        </span>
                      </div>
                      <span className="text-[10px] uppercase font-semibold text-[#575551] bg-white/80 px-2 py-0.5 border border-[#E8DED3]">
                        New Delhi
                      </span>
                    </div>

                    {/* Classical Architectural Motif Line Art */}
                    <div className="my-auto py-4 flex flex-col items-center justify-center text-center">
                      <div className="w-20 h-20 rounded-full border-2 border-[#C6A15B]/60 flex items-center justify-center mb-3 bg-white/70 shadow-xs">
                        <svg viewBox="0 0 64 64" className="w-12 h-12 text-[#7F3040]" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <path d="M12 52 L52 52 M16 52 L16 32 M24 52 L24 32 M32 52 L32 32 M40 52 L40 32 M48 52 L48 32" strokeLinecap="round" />
                          <path d="M10 32 L54 32 L32 16 Z" fill="#7F3040" fillOpacity="0.1" strokeLinejoin="round" />
                          <circle cx="32" cy="24" r="3" fill="#C6A15B" stroke="none" />
                          <rect x="28" y="40" width="8" height="12" fill="#7F3040" fillOpacity="0.2" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold font-academic text-[#292929] leading-snug">
                        Shivaji College
                      </h3>
                      <p className="text-xs text-[#575551] font-medium mt-0.5">
                        University of Delhi · Ring Road, Raja Garden
                      </p>
                    </div>

                    {/* Subtext and Campus Visual Caption */}
                    <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-xs border border-[#E8DED3] text-center">
                      <p className="text-[11px] text-[#575551] leading-tight">
                        Dedicated to academic excellence, NAAC Accredited &quot;A&quot; Grade college fostering research and intellectual inquiry since 1961.
                      </p>
                    </div>

                  </div>
                )}

                {/* Note regarding official photograph location */}
                <div className="mt-2 text-center">
                  <span className="text-[10px] text-[#575551]/80 italic">
                    Place campus photograph at: /public/logos/campus-photo.png
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
