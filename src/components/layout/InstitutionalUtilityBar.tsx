import React from 'react';
import { Mail, MapPin, ExternalLink, BookOpen, AlertCircle } from 'lucide-react';
import { JOURNAL_DATA } from '../../data/journal';

interface Props {
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
}

export const InstitutionalUtilityBar: React.FC<Props> = ({ onNavigate, onOpenSearch }) => {
  return (
    <div className="bg-[#E8DED3]/80 border-b border-[#C6A15B]/30 text-[#292929] text-[11px] sm:text-xs font-medium py-1 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* Left: Location & Affiliation */}
        <div className="flex items-center gap-x-3 text-slate-700 truncate">
          <span className="flex items-center gap-1 shrink-0">
            <MapPin className="w-3 h-3 text-[#7F3040] shrink-0" />
            <span>New Delhi, India</span>
          </span>
          <span className="hidden sm:inline text-[#C6A15B]">|</span>
          <a
            href={`mailto:${JOURNAL_DATA.email}`}
            className="hidden sm:flex items-center gap-1 hover:text-[#7F3040] transition-colors truncate"
          >
            <Mail className="w-3 h-3 text-[#7F3040] shrink-0" />
            <span className="truncate">{JOURNAL_DATA.email}</span>
          </a>
          <span className="hidden md:inline text-[#C6A15B]">|</span>
          <span className="hidden md:inline text-[#575551]">
            NAAC Accredited Grade &quot;A&quot;
          </span>
        </div>

        {/* Right: College Portal & Quick Link */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={JOURNAL_DATA.collegeWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#7F3040] hover:text-[#642331] font-semibold transition-colors"
          >
            <span>College Portal</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
          <span className="text-[#C6A15B]">|</span>
          <button
            onClick={() => onNavigate('/publications/current')}
            className="inline-flex items-center gap-1 text-[#292929] hover:text-[#7F3040] transition-colors font-medium"
          >
            <BookOpen className="w-3 h-3 text-[#7F3040]" />
            <span>Inaugural Issue</span>
          </button>
        </div>
      </div>
    </div>
  );
};
