/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageRoute, WorkCategoryKey, ReelItem } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { CategoryGalleryPage } from './pages/CategoryGalleryPage';
import { ProjectCaseStudyPage } from './pages/ProjectCaseStudyPage';
import { ExpertisePage } from './pages/ExpertisePage';
import { AboutPage } from './pages/AboutPage';
import { ReelsPage } from './pages/ReelsPage';
import { ContactPage } from './pages/ContactPage';
import { ReelModal } from './components/ReelModal';
import { InquiryModal } from './components/InquiryModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [selectedCategoryKey, setSelectedCategoryKey] = useState<WorkCategoryKey>('ecommerce');
  const [selectedProjectId, setSelectedProjectId] = useState<string>('premier-housewares-furniture');
  const [activeReel, setActiveReel] = useState<ReelItem | null>(null);
  const [inquiryModal, setInquiryModal] = useState<{
    isOpen: boolean;
    type: 'project' | 'meeting' | 'brief' | 'product-image';
  }>({
    isOpen: false,
    type: 'project',
  });

  const handleNavigate = (page: PageRoute, categoryKey?: WorkCategoryKey, projectId?: string) => {
    if (categoryKey) {
      setSelectedCategoryKey(categoryKey);
    }
    if (projectId) {
      setSelectedProjectId(projectId);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInquiry = (type: 'project' | 'meeting' | 'brief' | 'product-image' = 'project') => {
    setInquiryModal({
      isOpen: true,
      type,
    });
  };

  const handleCloseInquiry = () => {
    setInquiryModal((prev) => ({ ...prev, isOpen: false }));
  };

  // Scroll to top on page route transition
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F2EC] text-[#20211E] selection:bg-[#202A21] selection:text-[#F5F2EC]">
      {/* Global Navigation Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenReel={setActiveReel}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentPage === 'work' && (
          <WorkPage
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'category-gallery' && (
          <CategoryGalleryPage
            categoryKey={selectedCategoryKey}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'case-study' && (
          <ProjectCaseStudyPage
            projectId={selectedProjectId}
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentPage === 'expertise' && (
          <ExpertisePage
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentPage === 'reels' && (
          <ReelsPage
            onOpenReel={setActiveReel}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onOpenInquiryModal={handleOpenInquiry}
          />
        )}
      </main>

      {/* Global Editorial Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Reel Modal Player */}
      <ReelModal
        reel={activeReel}
        onClose={() => setActiveReel(null)}
      />

      {/* Project Inquiry, Meeting Booking & Brief Modal */}
      <InquiryModal
        isOpen={inquiryModal.isOpen}
        initialType={inquiryModal.type}
        onClose={handleCloseInquiry}
      />
    </div>
  );
}
