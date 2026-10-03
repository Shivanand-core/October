import React, { useState } from 'react';
import { Calendar, ChevronRight, BookOpen, Layers, FileText } from 'lucide-react';
import { ARCHIVE_YEARS } from '../data/articles';

interface Props {
  onNavigate: (path: string) => void;
  onSelectArticle: (slug: string) => void;
}

export const ArchivesPage: React.FC<Props> = ({ onNavigate, onSelectArticle }) => {
  const [selectedYear, setSelectedYear] = useState<number>(2026);

  const activeArchive = ARCHIVE_YEARS.find((y) => y.year === selectedYear) || ARCHIVE_YEARS[0];

  return (
    <div className="py-10 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Page Header */}
      <div className="border-b border-[#E8DED3] pb-6 mb-8">
        <div className="flex items-center gap-2 text-xs text-[#575551] mb-2">
          <button onClick={() => onNavigate('/')} className="hover:text-[#7F3040]">Home</button>
          <span>/</span>
          <button onClick={() => onNavigate('/publications')} className="hover:text-[#7F3040]">Publications</button>
          <span>/</span>
          <span className="text-[#7F3040] font-semibold">Archives</span>
        </div>
        <span className="text-[11px] font-bold tracking-widest uppercase text-[#7F3040]">
          CHRONOLOGICAL REPOSITORY
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-academic text-[#292929] mt-1">
          Journal Publication Archives
        </h1>
        <p className="text-base text-[#575551] font-editorial-body mt-2 max-w-3xl">
          Browse volumes and editions published by Shivaji College, University of Delhi. Our scalable archive preserves the ongoing multidisciplinary scholarly record.
        </p>
      </div>

      {/* Year Selector Tabs */}
      <div className="flex items-center gap-2 border-b border-[#E8DED3] pb-3 mb-8">
        <span className="text-xs font-bold text-[#7F3040] uppercase tracking-wider mr-2">
          Publication Year:
        </span>
        {ARCHIVE_YEARS.map((y) => (
          <button
            key={y.year}
            onClick={() => setSelectedYear(y.year)}
            className={`px-4 py-2 text-xs font-semibold rounded-xs transition-colors ${
              selectedYear === y.year
                ? 'bg-[#7F3040] text-white shadow-2xs'
                : 'bg-white border border-[#E8DED3] text-[#292929] hover:bg-[#E8DED3]'
            }`}
          >
            {y.year}
          </button>
        ))}
      </div>

      {/* Volume & Issue Hierarchy Tree */}
      <div className="space-y-8">
        {activeArchive.volumes.map((vol) => (
          <div key={vol.volume} className="bg-white border border-[#E8DED3] rounded-xs p-6 sm:p-8 space-y-6">
            
            {/* Volume Title */}
            <div className="border-b border-[#E8DED3] pb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#7F3040]" />
                <h2 className="text-2xl font-bold font-academic text-[#292929]">
                  Volume {vol.volume} ({vol.year})
                </h2>
              </div>
              <span className="text-xs text-[#575551]">
                {vol.issues.length} {vol.issues.length === 1 ? 'Issue' : 'Issues'} Recorded
              </span>
            </div>

            {/* Issues Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {vol.issues.map((issue) => (
                <div
                  key={issue.issueNumber}
                  className="bg-[#F8F5EE] border border-[#E8DED3] p-5 rounded-xs space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#575551]">
                      <span className="font-bold text-[#7F3040] uppercase tracking-wider">
                        Issue {issue.issueNumber}
                      </span>
                      <span className="flex items-center gap-1 text-[11px]">
                        <Calendar className="w-3 h-3 text-[#C6A15B]" />
                        <span>{issue.period}</span>
                      </span>
                    </div>

                    <h3 className="text-lg font-bold font-academic text-[#292929]">
                      {issue.title}
                    </h3>

                    <p className="text-xs text-[#575551] font-editorial-body leading-relaxed line-clamp-3">
                      {issue.description}
                    </p>

                    {issue.articles.length > 0 && (
                      <div className="pt-2">
                        <span className="text-[11px] font-semibold text-slate-700 block mb-1">
                          Published Papers:
                        </span>
                        <ul className="text-xs text-[#575551] space-y-1 list-disc list-inside">
                          {issue.articles.map((art) => (
                            <li key={art.id} className="line-clamp-1 hover:text-[#7F3040] cursor-pointer" onClick={() => onSelectArticle(art.slug)}>
                              {art.title}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-[#E8DED3] flex items-center justify-between text-xs">
                    <span className="text-[11px] text-slate-500">
                      {issue.articles.length} {issue.articles.length === 1 ? 'article' : 'articles'}
                    </span>

                    {issue.articles.length > 0 ? (
                      <button
                        onClick={() => onNavigate('/publications/current')}
                        className="inline-flex items-center gap-1 font-semibold text-[#7F3040] hover:text-[#642331]"
                      >
                        <span>View Issue Contents</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <span className="text-amber-800 italic text-[11px]">
                        Manuscripts in Review
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
