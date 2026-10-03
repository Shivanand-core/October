import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { JournalParticularsSection } from '../components/home/JournalParticularsSection';
import { QuickAccessSection } from '../components/home/QuickAccessSection';
import { CurrentIssueSection } from '../components/home/CurrentIssueSection';
import { LatestArticlesSection } from '../components/home/LatestArticlesSection';
import { CallForPapersSection } from '../components/home/CallForPapersSection';
import { NoticesSection } from '../components/home/NoticesSection';
import { JournalAtAGlanceSection } from '../components/home/JournalAtAGlanceSection';

interface Props {
  onNavigate: (path: string) => void;
  onSelectArticle: (slug: string) => void;
}

export const HomePage: React.FC<Props> = ({ onNavigate, onSelectArticle }) => {
  return (
    <div>
      {/* 4. Hero Section */}
      <HeroSection onNavigate={onNavigate} />

      {/* Journal Particulars Section */}
      <JournalParticularsSection />

      {/* 5. Quick Access Section */}
      <QuickAccessSection onNavigate={onNavigate} />

      {/* 6. Current Issue Section */}
      <CurrentIssueSection onNavigate={onNavigate} />

      {/* 7. Latest Articles / Research Section */}
      <LatestArticlesSection
        onNavigate={onNavigate}
        onSelectArticle={onSelectArticle}
      />

      {/* 8. Call for Papers Section */}
      <CallForPapersSection onNavigate={onNavigate} />

      {/* 9. Journal Notices / Announcements */}
      <NoticesSection onNavigate={onNavigate} />

      {/* 10. Journal At a Glance */}
      <JournalAtAGlanceSection />
    </div>
  );
};
