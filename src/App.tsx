/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { InstitutionalUtilityBar } from './components/layout/InstitutionalUtilityBar';
import { JournalMasthead } from './components/layout/JournalMasthead';
import { PrimaryNavigation } from './components/layout/PrimaryNavigation';
import { MobileHeader } from './components/layout/MobileHeader';
import { ScholarlyFooter } from './components/layout/ScholarlyFooter';
import { SearchModal } from './components/layout/SearchModal';

import { resolvePolicySlug } from './data/policies';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { EditorialBoardPage } from './pages/EditorialBoardPage';
import { CurrentIssuePage } from './pages/CurrentIssuePage';
import { ArchivesPage } from './pages/ArchivesPage';
import { ArticlesPage } from './pages/ArticlesPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { ForAuthorsPage } from './pages/ForAuthorsPage';
import { PoliciesPage } from './pages/PoliciesPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Helper to normalize path when hosted in a GitHub Pages subfolder (e.g. /October/ -> /)
const getCleanRoute = (pathname: string): string => {
  const knownRoutes = ['about', 'policies', 'publications', 'for-authors', 'editorial-board', 'contact', 'articles'];
  const segments = pathname.split('/').filter(Boolean);
  
  if (segments.length === 0) return '/';
  
  // If first segment is NOT a known route, it's the GitHub repository name
  if (!knownRoutes.includes(segments[0])) {
    const remaining = segments.slice(1).join('/');
    return remaining ? `/${remaining}` : '/';
  }
  
  return `/${segments.join('/')}`;
};

// Helper to retain the repository prefix when navigating (e.g. /October)
const getRepoBase = (): string => {
  const knownRoutes = ['about', 'policies', 'publications', 'for-authors', 'editorial-board', 'contact', 'articles'];
  const segments = window.location.pathname.split('/').filter(Boolean);
  if (segments.length > 0 && !knownRoutes.includes(segments[0])) {
    return `/${segments[0]}`;
  }
  return '';
};

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return getCleanRoute(window.location.pathname || '/');
  });

  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getCleanRoute(window.location.pathname || '/'));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    const cleanTarget = path.startsWith('/') ? path : `/${path}`;
    if (cleanTarget !== currentPath) {
      const fullUrl = `${getRepoBase()}${cleanTarget === '/' ? '/' : cleanTarget}`;
      window.history.pushState({}, '', fullUrl);
      setCurrentPath(cleanTarget);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectArticle = (slug: string) => {
    navigateTo(`/articles/${slug}`);
  };

  // Route matching logic
  const renderCurrentView = () => {
    // Article Detail Route: /articles/:slug
    if (currentPath.startsWith('/articles/')) {
      const slug = currentPath.replace('/articles/', '');
      return <ArticleDetailPage slug={slug} onNavigate={navigateTo} />;
    }

    // Policies routes: /policies or /policies/:slug
    if (currentPath.startsWith('/policies')) {
      const rawPolicySlug = currentPath.replace('/policies/', '').replace('/policies', '');
      const policySlug = resolvePolicySlug(rawPolicySlug);
      return <PoliciesPage initialSlug={policySlug} onNavigate={navigateTo} />;
    }

    // For Authors routes
    if (currentPath === '/for-authors/guidelines') {
      return <ForAuthorsPage subview="guidelines" onNavigate={navigateTo} />;
    }
    if (currentPath === '/for-authors/submission') {
      return <ForAuthorsPage subview="submission" onNavigate={navigateTo} />;
    }
    if (currentPath === '/for-authors/call-for-papers') {
      return <ForAuthorsPage subview="call-for-papers" onNavigate={navigateTo} />;
    }
    if (currentPath === '/for-authors') {
      return <ForAuthorsPage subview="overview" onNavigate={navigateTo} />;
    }

    // Publications routes
    if (currentPath === '/publications' || currentPath === '/publications/current') {
      return <CurrentIssuePage onNavigate={navigateTo} onSelectArticle={handleSelectArticle} />;
    }
    if (currentPath === '/publications/archives') {
      return <ArchivesPage onNavigate={navigateTo} onSelectArticle={handleSelectArticle} />;
    }
    if (currentPath === '/publications/articles') {
      return <ArticlesPage onNavigate={navigateTo} onSelectArticle={handleSelectArticle} />;
    }

    // About routes
    if (
      currentPath === '/about' ||
      currentPath === '/about/aims-and-scope' ||
      currentPath === '/about/journal-information'
    ) {
      return <AboutPage onNavigate={navigateTo} />;
    }

    // Editorial Board
    if (currentPath === '/editorial-board') {
      return <EditorialBoardPage onNavigate={navigateTo} />;
    }

    // Contact
    if (currentPath === '/contact') {
      return <ContactPage onNavigate={navigateTo} />;
    }

    // Homepage
    if (currentPath === '/' || currentPath === '') {
      return <HomePage onNavigate={navigateTo} onSelectArticle={handleSelectArticle} />;
    }

    // 404 Fallback
    return <NotFoundPage onNavigate={navigateTo} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F5EE] text-[#292929]">
      
      {/* Mobile-Specific Header (Compact, Sticky with polished hamburger drawer) */}
      <MobileHeader
        currentPath={currentPath}
        onNavigate={navigateTo}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* Desktop & Tablet Header Suite (Preserves exact approved layout) */}
      <div className="hidden md:block">
        {/* 1. Institutional Utility Bar */}
        <InstitutionalUtilityBar
          onNavigate={navigateTo}
          onOpenSearch={() => setSearchModalOpen(true)}
        />

        {/* 2. Journal Masthead */}
        <JournalMasthead onNavigate={navigateTo} />

        {/* 3. Primary Navigation */}
        <PrimaryNavigation
          currentPath={currentPath}
          onNavigate={navigateTo}
          onOpenSearch={() => setSearchModalOpen(true)}
        />
      </div>

      {/* Main Dynamic View Content */}
      <main className="flex-1 pt-14 md:pt-0">
        {renderCurrentView()}
      </main>

      {/* 11. Comprehensive Scholarly Footer */}
      <ScholarlyFooter onNavigate={navigateTo} />

      {/* Search Modal Shell */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectArticle={handleSelectArticle}
        onNavigate={navigateTo}
      />

    </div>
  );
}
