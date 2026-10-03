import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { JournalAtAGlanceSection } from '../components/home/JournalAtAGlanceSection';
import { QuickAccessSection } from '../components/home/QuickAccessSection';
import { CurrentIssueSection } from '../components/home/CurrentIssueSection';
import { LatestArticlesSection } from '../components/home/LatestArticlesSection';
import { CallForPapersSection } from '../components/home/CallForPapersSection';
import { NoticesSection } from '../components/home/NoticesSection';
import { EditorialPrinciplesSection } from '../components/home/EditorialPrinciplesSection';

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

      {/* Quick Access / Academic Pathways */}
      <QuickAccessSection onNavigate={onNavigate} />

      {/* Current Issue Section */}
      <CurrentIssueSection onNavigate={onNavigate} />

      {/* Latest Articles / Research Section */}
      <LatestArticlesSection
        onNavigate={onNavigate}
        onSelectArticle={onSelectArticle}
      />

      {/* Call for Papers Section */}
      <CallForPapersSection onNavigate={onNavigate} />

      {/* Journal Notices / Announcements */}
      <NoticesSection onNavigate={onNavigate} />

      {/* Editorial Principles & Institutional Foundations */}
      <EditorialPrinciplesSection />
    </div>
  );
};
