import React from 'react';
import { InstitutionalLogo } from '../ui/InstitutionalLogo';

interface Props {
  onNavigate: (path: string) => void;
}

export const JournalMasthead: React.FC<Props> = ({ onNavigate }) => {
  return (
    <header className="bg-[#F8F5EE] border-b border-[#E8DED3] py-4 sm:py-5 lg:py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* MOBILE VIEW (Screens < md): Integrated Prestigious Header */}
        <div className="md:hidden flex flex-col items-center text-center space-y-2.5">
          {/* Top Row: Institutional Logos Framing the Institution Lineage */}
          <div className="w-full flex items-center justify-between px-1">
            <div 
              onClick={() => onNavigate('/')} 
              className="flex items-center gap-2 cursor-pointer text-left"
              title="Shivaji College, University of Delhi"
            >
              <InstitutionalLogo type="shivaji" size="sm" />
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-wider text-[#7F3040] font-semibold leading-none">
                  PUBLISHER
                </span>
                <span className="text-xs font-bold text-[#292929] font-academic leading-tight mt-0.5">
                  SHIVAJI COLLEGE
                </span>
              </div>
            </div>

            <div 
              onClick={() => onNavigate('/')} 
              className="flex items-center gap-2 cursor-pointer text-right"
              title="University of Delhi, Estd. 1922"
            >
              <div className="flex flex-col items-end">
                <span className="text-[9px] uppercase tracking-wider text-[#7F3040] font-semibold leading-none">
                  AFFILIATION
                </span>
                <span className="text-xs font-bold text-[#292929] font-academic leading-tight mt-0.5">
                  UNIV. OF DELHI
                </span>
              </div>
              <InstitutionalLogo type="delhi_university" size="sm" />
            </div>
          </div>

          {/* Center Main Masthead */}
          <div 
            onClick={() => onNavigate('/')}
            className="cursor-pointer pt-1 pb-0.5 max-w-sm"
          >
            <h1 
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
              className="text-2xl sm:text-3xl font-bold text-[#7F3040] tracking-[0.03em] leading-tight hover:opacity-95 transition-opacity"
            >
              SHIVRAJ <span style={{ fontFamily: "'Times New Roman', Times, serif" }} className="tracking-normal text-[#292929]">350</span>
            </h1>
            <div className="w-20 h-[1.5px] bg-[#C6A15B] mx-auto my-1.5 opacity-80" />
            <p className="text-[11px] sm:text-xs tracking-wider uppercase text-[#575551] font-medium leading-snug px-2">
              International Peer Reviewed Multidisciplinary Journal
            </p>
          </div>
        </div>

        {/* DESKTOP & TABLET VIEW (Screens >= md): 3-Part Column Layout */}
        <div className="hidden md:flex items-center justify-between gap-6">
          
          {/* LEFT: Shivaji College Publisher / Institution Identity */}
          <div 
            onClick={() => onNavigate('/')}
            className="flex items-center gap-3 cursor-pointer group text-left w-auto justify-start"
          >
            <InstitutionalLogo type="shivaji" size="md" />
            <div className="flex flex-col">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#7F3040]">
                Publisher & Publishing Institution
              </span>
              <span className="text-base lg:text-lg font-bold tracking-tight text-[#292929] font-academic group-hover:text-[#7F3040] transition-colors leading-tight">
                SHIVAJI COLLEGE
              </span>
              <span className="text-xs text-[#575551] font-medium">
                University of Delhi · New Delhi
              </span>
            </div>
          </div>

          {/* CENTER: Main Journal Masthead (Horizontal, Issue-Neutral) */}
          <div 
            onClick={() => onNavigate('/')}
            className="text-center cursor-pointer px-4 lg:px-6 flex-1 max-w-2xl"
          >
            <div className="inline-block relative">
              <h1 
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
                className="text-3xl lg:text-[42px] font-bold text-[#7F3040] tracking-[0.02em] leading-none mb-1.5 hover:opacity-95 transition-opacity"
              >
                SHIVRAJ <span style={{ fontFamily: "'Times New Roman', Times, serif" }} className="tracking-normal text-[#292929]">350</span>
              </h1>
              {/* Restrained Champagne Hairline Rule */}
              <div className="w-28 lg:w-32 h-[1.5px] bg-[#C6A15B] mx-auto mb-2 opacity-80" />
            </div>
            <p className="text-xs lg:text-sm tracking-wide uppercase text-[#575551] font-medium leading-snug">
              International Peer Reviewed Multidisciplinary Journal
            </p>
          </div>

          {/* RIGHT: University of Delhi Affiliation */}
          <div 
            onClick={() => onNavigate('/')}
            className="flex items-center gap-3 text-right w-auto justify-end cursor-pointer group"
          >
            <div className="flex flex-col text-right">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#7F3040]">
                Academic Affiliation
              </span>
              <span className="text-base lg:text-lg font-bold tracking-tight text-[#292929] font-academic group-hover:text-[#7F3040] transition-colors leading-tight">
                UNIVERSITY OF DELHI
              </span>
              <span className="text-xs text-[#575551] font-medium">
                Estd. 1922 · Central University
              </span>
            </div>
            <InstitutionalLogo type="delhi_university" size="md" />
          </div>

        </div>
      </div>
    </header>
  );
};
