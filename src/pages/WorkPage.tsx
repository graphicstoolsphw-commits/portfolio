import React, { useState, useMemo } from 'react';
import { ALL_PROJECTS } from '../data/portfolioData';
import { PageRoute, WorkCategoryKey } from '../types';
import { ArrowRight, Sparkles } from 'lucide-react';

interface WorkPageProps {
  onNavigate: (page: PageRoute, categoryKey?: WorkCategoryKey, projectId?: string) => void;
  initialFilter?: string;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onNavigate, initialFilter = 'all' }) => {
  const [activeFilter, setActiveFilter] = useState<string>(initialFilter);

  const filterTabs = [
    { label: 'All', key: 'all' },
    { label: 'Ecommerce', key: 'ecommerce' },
    { label: 'Marketplace & Amazon', key: 'marketplace' },
    { label: 'Branding & Packaging', key: 'branding' },
    { label: 'Social & Campaign', key: 'social' },
    { label: 'AI & Motion', key: 'motion' },
    { label: 'Catalogues & Print', key: 'catalogues' },
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return ALL_PROJECTS;
    return ALL_PROJECTS.filter((p) => p.categoryKey === activeFilter);
  }, [activeFilter]);

  return (
    <div id="work-page-root" className="pt-28 sm:pt-36 pb-32 bg-[#F5F2EC] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <div className="mb-14 space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] font-medium text-[#5C5E58]">
            ARCHIVE & CASE STUDIES
          </p>
          <h1 className="font-editorial text-5xl sm:text-6xl lg:text-7xl text-[#20211E] tracking-tight leading-[1.05]">
            Selected Work
          </h1>
          <p className="text-base sm:text-lg text-[#5C5E58] max-w-2xl leading-relaxed">
            A curated selection of visual work across ecommerce, branding, packaging, marketplaces, print, campaigns and motion.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 border-b border-[#20211E]/10 scrollbar-none">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                id={`filter-btn-${tab.key}`}
                onClick={() => setActiveFilter(tab.key)}
                className={`px-4 py-2.5 text-xs uppercase tracking-[0.15em] transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#20211E] text-[#F5F2EC] font-medium'
                    : 'bg-[#EEEAE2] text-[#5C5E58] hover:text-[#20211E] hover:bg-[#E5DFD3]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Editorial Disciplined Masonry Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProjects.map((project, idx) => {
            // Disciplined editorial aspect variation
            const isFeaturedSize = idx % 5 === 0;

            return (
              <div
                key={project.id}
                id={`work-project-card-${project.id}`}
                onClick={() => onNavigate('case-study', undefined, project.id)}
                className={`group bg-[#EEEAE2] border border-[#20211E]/10 cursor-pointer flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-[#20211E]/30 hover:shadow-md ${
                  isFeaturedSize ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Thumbnail Container */}
                <div
                  className={`overflow-hidden relative bg-[#E5DFD3] ${
                    isFeaturedSize
                      ? 'aspect-[16/10]'
                      : project.aspect === 'tall'
                      ? 'aspect-[3/4]'
                      : project.aspect === 'square'
                      ? 'aspect-square'
                      : 'aspect-[4/3]'
                  }`}
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-medium text-[#F5F2EC]">
                      <span>View Project Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>

                  {project.tag && (
                    <div className="absolute top-4 left-4 px-2.5 py-1 bg-[#20211E]/80 backdrop-blur-sm text-[#F5F2EC] text-[10px] uppercase tracking-[0.15em]">
                      {project.tag}
                    </div>
                  )}
                </div>

                {/* Project Metadata */}
                <div className="p-6 flex flex-col justify-between flex-1 space-y-3">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs text-[#5C5E58]">
                      <span className="uppercase tracking-[0.18em] text-[#6E755E] font-medium">
                        {project.categoryLabel}
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

                  <div className="pt-2 flex items-center justify-between text-xs uppercase tracking-[0.15em] text-[#20211E] border-t border-[#20211E]/10">
                    <span className="group-hover:underline">Explore Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center text-[#5C5E58]">
            <p className="font-editorial text-2xl">No projects in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};
