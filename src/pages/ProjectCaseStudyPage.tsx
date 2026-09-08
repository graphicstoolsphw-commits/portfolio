import React, { useState } from 'react';
import { ALL_PROJECTS } from '../data/portfolioData';
import { PageRoute, WorkCategoryKey } from '../types';
import { ArrowLeft, ArrowRight, CheckCircle2, SlidersHorizontal } from 'lucide-react';

interface ProjectCaseStudyPageProps {
  projectId: string;
  onNavigate: (page: PageRoute, categoryKey?: WorkCategoryKey, projectId?: string) => void;
  onOpenInquiry?: (type?: 'project' | 'meeting' | 'brief') => void;
}

export const ProjectCaseStudyPage: React.FC<ProjectCaseStudyPageProps> = ({
  projectId,
  onNavigate,
  onOpenInquiry,
}) => {
  const projectIndex = ALL_PROJECTS.findIndex((p) => p.id === projectId);
  const project = projectIndex !== -1 ? ALL_PROJECTS[projectIndex] : ALL_PROJECTS[0];

  const caseStudy = project.caseStudy || {
    client: project.client || 'Contemporary Lifestyle Co.',
    category: project.categoryLabel,
    year: project.year,
    role: 'Creative Direction & Visual Production',
    deliverables: [
      'High-resolution imagery suite',
      'Digital asset optimization',
      'Multi-channel presentation assets',
      'Art-directed visual staging'
    ],
    intro: `${project.title} was developed to deliver an elevated, commercial visual standard across digital touchpoints, combining thoughtful composition with photorealistic fidelity.`,
    brief: 'Provide high-fidelity product imagery that communicates material quality, proportion, and brand value for discerning international buyers.',
    visualChallenge: 'Ensuring tactile texture accuracy and balanced natural lighting while maintaining versatile multi-format crops for web, social, and print collateral.',
    creativeApproach: 'Utilizing studio lighting models and modern AI-assisted environment synthesis, each image was refined through precision frequency separation and calibrated for true-to-life color reproduction.',
    heroImage: project.thumbnail,
    gallery: [
      {
        url: project.thumbnail,
        caption: 'Primary hero presentation highlighting material authenticity and tone',
        layout: 'half' as const,
      },
      {
        url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85',
        caption: 'Secondary contextual vignette showing scale and architectural harmony',
        layout: 'half' as const,
      },
      {
        url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=85',
        caption: 'Full-width master layout demonstrating overall spatial balance',
        layout: 'full' as const,
      }
    ],
    marketplaceMockups: [
      'Digital Flagship Storefront Banner',
      'Marketplace Listing Secondary Carousel',
      'Mobile Responsive Product Detail Tile'
    ],
  };

  // Next and Prev project logic
  const prevProject = projectIndex > 0 ? ALL_PROJECTS[projectIndex - 1] : ALL_PROJECTS[ALL_PROJECTS.length - 1];
  const nextProject = projectIndex < ALL_PROJECTS.length - 1 ? ALL_PROJECTS[projectIndex + 1] : ALL_PROJECTS[0];

  // Before/after local slider state if beforeAfter data exists
  const [sliderPos, setSliderPos] = useState<number>(50);

  return (
    <div id="case-study-root" className="pt-28 sm:pt-36 pb-32 bg-[#F5F2EC] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Back navigation */}
        <div className="mb-10 flex items-center justify-between">
          <button
            onClick={() => onNavigate('work')}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#5C5E58] hover:text-[#20211E] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Work</span>
          </button>
          <span className="text-xs uppercase tracking-[0.2em] text-[#6E755E] font-medium">
            Case Study · {caseStudy.year}
          </span>
        </div>

        {/* Project Title and Header */}
        <div className="space-y-4 mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-[#6E755E] font-medium">
            {caseStudy.client} · {caseStudy.category}
          </p>
          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-[#20211E] tracking-tight leading-[1.06] max-w-4xl">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-[#5C5E58] max-w-3xl font-light leading-relaxed pt-2">
            {caseStudy.intro}
          </p>
        </div>

        {/* Top Project Metadata Table */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-b border-[#20211E]/15 mb-14 text-xs">
          <div>
            <span className="uppercase tracking-[0.2em] text-[#5C5E58] block mb-1">Client</span>
            <span className="font-medium text-[#20211E] text-sm">{caseStudy.client}</span>
          </div>
          <div>
            <span className="uppercase tracking-[0.2em] text-[#5C5E58] block mb-1">Category</span>
            <span className="font-medium text-[#20211E] text-sm">{caseStudy.category}</span>
          </div>
          <div>
            <span className="uppercase tracking-[0.2em] text-[#5C5E58] block mb-1">Role</span>
            <span className="font-medium text-[#20211E] text-sm">{caseStudy.role}</span>
          </div>
          <div>
            <span className="uppercase tracking-[0.2em] text-[#5C5E58] block mb-1">Year</span>
            <span className="font-medium text-[#20211E] text-sm">{caseStudy.year}</span>
          </div>
        </div>

        {/* Large Hero Image */}
        <div className="mb-20 overflow-hidden bg-[#EEEAE2] border border-[#20211E]/10 aspect-[16/9]">
          <img
            src={caseStudy.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Deliverables Strip */}
        <div className="bg-[#EEEAE2] p-8 border border-[#20211E]/10 mb-20">
          <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#20211E] mb-4">
            Key Project Deliverables
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {caseStudy.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs text-[#5C5E58]">
                <CheckCircle2 className="w-4 h-4 text-[#6E755E] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Project Narrative: Brief, Challenge, Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20 pt-4 border-t border-[#20211E]/10">
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#20211E]">
              01 — Project Brief
            </h3>
            <p className="text-sm text-[#5C5E58] leading-relaxed">
              {caseStudy.brief}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#20211E]">
              02 — Visual Challenge
            </h3>
            <p className="text-sm text-[#5C5E58] leading-relaxed">
              {caseStudy.visualChallenge}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#20211E]">
              03 — Creative Approach
            </h3>
            <p className="text-sm text-[#5C5E58] leading-relaxed">
              {caseStudy.creativeApproach}
            </p>
          </div>
        </div>

        {/* Before / After Comparison Area (if available) */}
        {caseStudy.beforeAfter && (
          <div className="mb-24 space-y-6">
            <div className="border-b border-[#20211E]/10 pb-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#6E755E] block mb-1">
                Visual Transformation
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl text-[#20211E]">
                Raw Studio Capture vs. Architectural Final
              </h3>
            </div>

            <div
              className="relative aspect-[16/9] overflow-hidden border border-[#20211E]/15 cursor-ew-resize select-none bg-[#EEEAE2]"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setSliderPos(Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100)));
              }}
            >
              {/* After Layer */}
              <img
                src={caseStudy.beforeAfter.afterImage}
                alt={caseStudy.beforeAfter.afterLabel}
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 px-3 py-1 bg-[#20211E]/80 backdrop-blur-sm text-[#F5F2EC] text-[10px] uppercase tracking-[0.18em]">
                {caseStudy.beforeAfter.afterLabel}
              </div>

              {/* Before Layer */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <img
                  src={caseStudy.beforeAfter.beforeImage}
                  alt={caseStudy.beforeAfter.beforeLabel}
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#F5F2EC]/90 backdrop-blur-sm text-[#20211E] text-[10px] uppercase tracking-[0.18em]">
                  {caseStudy.beforeAfter.beforeLabel}
                </div>
              </div>

              {/* Divider Handle */}
              <div
                className="absolute top-0 bottom-0 pointer-events-none"
                style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
              >
                <div className="w-[1.5px] h-full bg-white shadow-[0_0_8px_rgba(0,0,0,0.5)] relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#20211E] text-[#F5F2EC] flex items-center justify-center border border-white/40">
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Large Final Imagery & Gallery */}
        <div className="space-y-12 mb-24">
          <div className="border-b border-[#20211E]/10 pb-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#6E755E] block mb-1">
              Production Execution
            </span>
            <h3 className="font-editorial text-3xl sm:text-4xl text-[#20211E]">
              Selected Final Assets & Staged Vignettes
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudy.gallery.map((item, idx) => {
              if (item.layout === 'full') {
                return (
                  <div key={idx} className="md:col-span-2 space-y-3">
                    <div className="overflow-hidden aspect-[16/9] bg-[#EEEAE2] border border-[#20211E]/10">
                      <img
                        src={item.url}
                        alt={`Asset ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-102 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {item.caption && (
                      <p className="text-xs text-[#5C5E58] italic">{item.caption}</p>
                    )}
                  </div>
                );
              }

              return (
                <div key={idx} className="space-y-3">
                  <div className="overflow-hidden aspect-[4/3] bg-[#EEEAE2] border border-[#20211E]/10">
                    <img
                      src={item.url}
                      alt={`Asset ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-103 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {item.caption && (
                    <p className="text-xs text-[#5C5E58] italic">{item.caption}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Marketplace / Ecommerce Context or Packaging Specs (if applicable) */}
        {(caseStudy.marketplaceMockups || caseStudy.packagingDetails) && (
          <div className="bg-[#EEEAE2] p-8 border border-[#20211E]/10 mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudy.marketplaceMockups && (
                <div className="space-y-4">
                  <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-[#20211E]">
                    Digital & Marketplace Context
                  </h4>
                  <p className="text-xs text-[#5C5E58]">
                    Selected imagery created for products listed across major retail and ecommerce platforms.
                  </p>
                  <ul className="space-y-2 text-xs text-[#5C5E58]">
                    {caseStudy.marketplaceMockups.map((mockup, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#20211E]" />
                        <span>{mockup}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {caseStudy.packagingDetails && (
                <div className="space-y-4">
                  <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-[#20211E]">
                    Packaging & Print Specifications
                  </h4>
                  <ul className="space-y-2 text-xs text-[#5C5E58]">
                    {caseStudy.packagingDetails.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6E755E]" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Bottom Pagination: Previous Project / Next Project */}
        <div className="pt-12 border-t border-[#20211E]/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <button
            id="prev-project-btn"
            onClick={() => {
              onNavigate('case-study', undefined, prevProject.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group text-left space-y-1 cursor-pointer w-full sm:w-auto"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#5C5E58] flex items-center gap-1">
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
              Previous Project
            </span>
            <span className="font-editorial text-xl text-[#20211E] group-hover:text-[#6E755E] transition-colors block">
              {prevProject.title}
            </span>
          </button>

          <button
            onClick={() => (onOpenInquiry ? onOpenInquiry('project') : onNavigate('contact'))}
            className="px-6 py-3 bg-[#20211E] text-[#F5F2EC] text-xs uppercase tracking-[0.15em] hover:bg-[#202A21] transition-colors cursor-pointer"
          >
            Inquire About Similar Work →
          </button>

          <button
            id="next-project-btn"
            onClick={() => {
              onNavigate('case-study', undefined, nextProject.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group text-right space-y-1 cursor-pointer w-full sm:w-auto"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#5C5E58] flex items-center justify-end gap-1">
              Next Project
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="font-editorial text-xl text-[#20211E] group-hover:text-[#6E755E] transition-colors block">
              {nextProject.title}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
