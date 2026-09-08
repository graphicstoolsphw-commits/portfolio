import React, { useState } from 'react';
import { CATEGORIES_DATA, ALL_PROJECTS } from '../data/portfolioData';
import { PageRoute, WorkCategoryKey } from '../types';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

interface CategoryGalleryPageProps {
  categoryKey: WorkCategoryKey;
  onNavigate: (page: PageRoute, categoryKey?: WorkCategoryKey, projectId?: string) => void;
}

export const CategoryGalleryPage: React.FC<CategoryGalleryPageProps> = ({
  categoryKey,
  onNavigate,
}) => {
  const category = CATEGORIES_DATA[categoryKey] || CATEGORIES_DATA.ecommerce;
  const [selectedSubTab, setSelectedSubTab] = useState<string>('All');

  // Filter projects by category key
  const categoryProjects = ALL_PROJECTS.filter((p) => p.categoryKey === categoryKey);

  // Filter by subTab if not 'All'
  const displayedProjects = selectedSubTab === 'All'
    ? categoryProjects
    : categoryProjects.filter((p) => p.tag?.toLowerCase().includes(selectedSubTab.toLowerCase()));

  const otherCategories: WorkCategoryKey[] = (
    ['ecommerce', 'marketplace', 'branding', 'social', 'motion', 'catalogues'] as WorkCategoryKey[]
  ).filter((k) => k !== categoryKey);

  return (
    <div id="category-gallery-root" className="pt-28 sm:pt-36 pb-32 bg-[#F5F2EC] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Back navigation */}
        <div className="mb-8">
          <button
            onClick={() => onNavigate('work')}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#5C5E58] hover:text-[#20211E] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to All Work</span>
          </button>
        </div>

        {/* Category Header */}
        <div className="mb-12 border-b border-[#20211E]/10 pb-10">
          <p className="text-xs uppercase tracking-[0.25em] font-medium text-[#6E755E] mb-3">
            {category.eyebrow}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="font-editorial text-5xl sm:text-6xl lg:text-7xl text-[#20211E] tracking-tight leading-[1.04]">
                {category.title}
              </h1>
              <p className="text-base sm:text-lg text-[#5C5E58] max-w-2xl leading-relaxed">
                {category.description}
              </p>
            </div>
            <div className="lg:col-span-4 text-xs text-[#5C5E58] lg:text-right space-y-1">
              <p className="uppercase tracking-[0.18em]">Portfolio Gallery</p>
              <p>{displayedProjects.length} Selected Project Presentations</p>
            </div>
          </div>

          {/* Category Sub-Tabs */}
          {category.tabs && category.tabs.length > 0 && (
            <div className="flex items-center gap-2 overflow-x-auto pt-8 scrollbar-none">
              {category.tabs.map((tab) => {
                const isActive = selectedSubTab === tab;
                return (
                  <button
                    key={tab}
                    id={`cat-tab-${tab.replace(/\s+/g, '-').toLowerCase()}`}
                    onClick={() => setSelectedSubTab(tab)}
                    className={`px-4 py-2 text-xs uppercase tracking-[0.15em] transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-[#20211E] text-[#F5F2EC] font-medium'
                        : 'bg-[#EEEAE2] text-[#5C5E58] hover:text-[#20211E] hover:bg-[#E5DFD3]'
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Gallery Grid (12-16 project presentations) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {displayedProjects.map((project, idx) => {
            const isFeatured = idx === 0;

            return (
              <div
                key={project.id}
                id={`cat-project-card-${project.id}`}
                onClick={() => onNavigate('case-study', undefined, project.id)}
                className={`group bg-[#EEEAE2] border border-[#20211E]/10 cursor-pointer flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-[#20211E]/30 hover:shadow-md ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
              >
                <div
                  className={`overflow-hidden relative bg-[#E5DFD3] ${
                    isFeatured ? 'aspect-[16/10]' : 'aspect-[4/3]'
                  }`}
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-medium text-[#F5F2EC]">
                      <span>Open Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>

                  {project.tag && (
                    <div className="absolute top-4 left-4 px-2.5 py-1 bg-[#20211E]/80 backdrop-blur-sm text-[#F5F2EC] text-[10px] uppercase tracking-[0.15em]">
                      {project.tag}
                    </div>
                  )}
                </div>

                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#5C5E58] mb-1">
                      <span className="uppercase tracking-[0.18em] text-[#6E755E]">
                        {project.client || category.title}
                      </span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-editorial text-2xl text-[#20211E] group-hover:text-[#6E755E] transition-colors leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#5C5E58] leading-relaxed line-clamp-2">
                    {project.shortDescription}
                  </p>

                  <div className="pt-3 flex items-center justify-between text-xs uppercase tracking-[0.15em] text-[#20211E] border-t border-[#20211E]/10">
                    <span className="group-hover:underline">View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore Other Categories */}
        <div className="mt-24 pt-16 border-t border-[#20211E]/10">
          <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#5C5E58] mb-6">
            Explore Other Disciplines
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {otherCategories.map((key) => {
              const cat = CATEGORIES_DATA[key];
              return (
                <button
                  key={key}
                  onClick={() => {
                    onNavigate('category-gallery', key);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="p-4 bg-[#EEEAE2] border border-[#20211E]/10 text-left hover:border-[#20211E]/30 hover:bg-[#E5DFD3] transition-all cursor-pointer group"
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#6E755E] mb-1">Category</p>
                  <h4 className="font-editorial text-lg text-[#20211E] group-hover:text-[#6E755E] transition-colors leading-snug">
                    {cat.title}
                  </h4>
                  <div className="mt-3 flex items-center gap-1 text-[11px] uppercase tracking-[0.15em] text-[#20211E]">
                    <span>View</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
