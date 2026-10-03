import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { JournalAtAGlanceSection } from '../components/home/JournalAtAGlanceSection';
import { CurrentIssueSection } from '../components/home/CurrentIssueSection';
import { LatestArticlesSection } from '../components/home/LatestArticlesSection';
import { QuickAccessSection } from '../components/home/QuickAccessSection';
import { CallForPapersSection } from '../components/home/CallForPapersSection';
import { NoticesSection } from '../components/home/NoticesSection';

interface Props {
  onNavigate: (path: string) => void;
  onSelectArticle: (slug: string) => void;
}

export const HomePage: React.FC<Props> = ({ onNavigate, onSelectArticle }) => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection onNavigate={onNavigate} />

      {/* Journal At a Glance: Short, Compact 7-Field Scholarly Table */}
      <JournalAtAGlanceSection onNavigate={onNavigate} />

      {/* Publication Spotlight: Current Issue */}
      <CurrentIssueSection onNavigate={onNavigate} />

      {/* Latest Articles / Research Section */}
      <LatestArticlesSection
        onNavigate={onNavigate}
        onSelectArticle={onSelectArticle}
      />

      {/* Academic Pathways / Quick Access Exploration */}
      <QuickAccessSection onNavigate={onNavigate} />

      {/* Call for Papers Section */}
      <CallForPapersSection onNavigate={onNavigate} />

      {/* Journal Notices / Announcements */}
      <NoticesSection onNavigate={onNavigate} />
    </div>
  );
};
