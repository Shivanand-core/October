import React from 'react';
import { Home, ArrowLeft, BookOpen } from 'lucide-react';

interface Props {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center space-y-6">
      <div className="w-16 h-16 rounded-full bg-[#E8DED3] flex items-center justify-center mx-auto text-[#7F3040]">
        <BookOpen className="w-8 h-8" />
      </div>
      
      <span className="text-[11px] font-bold uppercase tracking-widest text-[#7F3040]">
        HTTP 404 · RECORD NOT FOUND
      </span>

      <h1 className="text-3xl sm:text-4xl font-bold font-academic text-[#292929]">
        Scholarly Page Not Located
      </h1>

      <p className="text-sm text-[#575551] font-editorial-body max-w-lg mx-auto leading-relaxed">
        The requested article record, issue volume, or editorial directory could not be resolved in the <em>Shivraj 350</em> repository.
      </p>

      <div className="pt-4 flex items-center justify-center gap-4">
        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#7F3040] text-white text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#642331] transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </button>

        <button
          onClick={() => onNavigate('/publications/articles')}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[#E8DED3] text-[#292929] text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#E8DED3] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Browse Repository</span>
        </button>
      </div>
    </div>
  );
};
