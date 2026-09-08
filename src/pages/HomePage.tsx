import React from 'react';
import { PageRoute, WorkCategoryKey, ReelItem } from '../types';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { CATEGORIES_DATA, FEATURED_PROJECTS, REELS_DATA } from '../data/portfolioData';
import { ArrowRight, Play, ArrowUpRight, Compass, Layers, Printer, Sparkles, CheckCircle } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageRoute, categoryKey?: WorkCategoryKey, projectId?: string) => void;
  onOpenReel: (reel: ReelItem) => void;
  onOpenInquiry: (type?: 'project' | 'meeting' | 'brief' | 'product-image') => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenReel,
  onOpenInquiry,
}) => {
  const categoryKeys: WorkCategoryKey[] = [
    'ecommerce',
    'marketplace',
    'branding',
    'social',
    'motion',
    'catalogues',
  ];

  return (
    <div id="homepage-root" className="w-full">
      {/* ---------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* ---------------------------------------------------- */}
      <section id="hero-section" className="pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-[#20211E]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Copy: ~45% */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.25em] font-medium text-[#5C5E58]">
                  CREATIVE LEAD · VISUAL EXPERT
                </p>
                <h1 className="font-editorial text-5xl sm:text-6xl lg:text-7xl text-[#20211E] tracking-tight leading-[1.04]">
                  Upgrade your visuals <br />
                  <span className="italic font-light">— grow your brand</span>
                </h1>
              </div>

              <p className="text-base sm:text-lg text-[#5C5E58] leading-relaxed max-w-lg">
                Branding, product visuals, packaging, ecommerce content and motion — combining 13+ years of creative experience with modern AI-powered workflows.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  id="hero-cta-explore"
                  onClick={() => onNavigate('work')}
                  className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-[#20211E] text-[#F5F2EC] hover:bg-[#202A21] transition-all text-xs uppercase tracking-[0.15em] font-medium cursor-pointer"
                >
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  id="hero-cta-project"
                  onClick={() => onOpenInquiry('project')}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[#20211E] text-[#20211E] hover:bg-[#20211E] hover:text-[#F5F2EC] transition-all text-xs uppercase tracking-[0.15em] font-medium cursor-pointer"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="pt-6 border-t border-[#20211E]/10 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-[#5C5E58]">
                <span className="w-2 h-2 rounded-full bg-[#6E755E]" />
                <span>13+ Years of Creative Experience</span>
              </div>
            </div>

            {/* Right Hero Visual: ~55% */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden border border-[#20211E]/10 group bg-[#EEEAE2]">
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=85"
                  alt="High-end contemporary furniture interior lifestyle visual"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                
                {/* Subtle Editorial Caption Overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-[#F5F2EC]">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#F5F2EC]/80 block">
                      Case Preview
                    </span>
                    <span className="font-editorial text-lg text-[#F5F2EC]">
                      Architectural Furniture Visuals · Premier Housewares
                    </span>
                  </div>
                  <button
                    onClick={() => onNavigate('case-study', undefined, 'premier-housewares-furniture')}
                    className="text-xs uppercase tracking-[0.15em] underline text-[#F5F2EC] hover:text-white cursor-pointer"
                  >
                    View Project →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 01 — SELECTED WORK / WHAT I CREATE */}
      {/* ---------------------------------------------------- */}
      <section id="section-selected-work" className="py-24 sm:py-32 bg-[#F5F2EC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="mb-14">
            <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#5C5E58] mb-3">
              01 — SELECTED WORK
            </p>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#20211E] tracking-tight leading-[1.08] max-w-2xl">
              Visual solutions for <br />
              <span className="italic font-light">every stage of your brand.</span>
            </h2>
          </div>

          {/* 6 Large Clickable Image-led Cards: 2 rows × 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryKeys.map((key, index) => {
              const cat = CATEGORIES_DATA[key];
              return (
                <div
                  key={key}
                  id={`work-category-card-${key}`}
                  onClick={() => onNavigate('category-gallery', key)}
                  className="group bg-[#EEEAE2] border border-[#20211E]/10 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:border-[#20211E]/30 hover:shadow-md"
                >
                  <div className="overflow-hidden aspect-[4/3] relative bg-[#E5DFD3]">
                    <img
                      src={cat.heroImage}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 px-2.5 py-1 bg-[#20211E]/80 backdrop-blur-sm text-[#F5F2EC] text-[10px] uppercase tracking-[0.2em]">
                      0{index + 1}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-editorial text-2xl text-[#20211E] group-hover:text-[#6E755E] transition-colors leading-snug">
                        {cat.title}
                      </h3>
                      <p className="text-sm text-[#5C5E58] leading-relaxed line-clamp-2">
                        {cat.description}
                      </p>
                    </div>

                    <div className="pt-2 flex items-center justify-between border-t border-[#20211E]/10">
                      <span className="text-xs uppercase tracking-[0.15em] font-medium text-[#20211E] group-hover:underline">
                        Explore Category Gallery
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#20211E] text-[#F5F2EC] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 02 — FEATURED PROJECTS */}
      {/* ---------------------------------------------------- */}
      <section id="section-featured-projects" className="py-24 sm:py-32 bg-[#EEEAE2] border-t border-[#20211E]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#5C5E58] mb-3">
                02 — FEATURED PROJECTS
              </p>
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#20211E] tracking-tight leading-[1.08]">
                From products to <br />
                <span className="italic font-light">powerful brand stories.</span>
              </h2>
            </div>
            <button
              onClick={() => onNavigate('work')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-medium text-[#20211E] hover:text-[#6E755E] transition-colors group cursor-pointer"
            >
              <span>View All Selected Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Asymmetrical Editorial Composition */}
          <div className="space-y-16">
            {/* Project 1: Large Wide Landscape */}
            {FEATURED_PROJECTS[0] && (
              <div
                id="featured-project-0"
                onClick={() => onNavigate('case-study', undefined, FEATURED_PROJECTS[0].id)}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F5F2EC] border border-[#20211E]/10 p-6 sm:p-10 cursor-pointer hover:border-[#20211E]/30 transition-all"
              >
                <div className="lg:col-span-8 overflow-hidden aspect-[16/10] bg-[#E5DFD3]">
                  <img
                    src={FEATURED_PROJECTS[0].thumbnail}
                    alt={FEATURED_PROJECTS[0].title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="lg:col-span-4 space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#6E755E] block font-medium">
                      {FEATURED_PROJECTS[0].categoryLabel} · {FEATURED_PROJECTS[0].year}
                    </span>
                    <h3 className="font-editorial text-3xl sm:text-4xl text-[#20211E] leading-tight group-hover:text-[#6E755E] transition-colors">
                      {FEATURED_PROJECTS[0].title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#5C5E58] leading-relaxed">
                    {FEATURED_PROJECTS[0].shortDescription}
                  </p>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-medium text-[#20211E] group-hover:underline">
                      <span>View Project Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Project 2 & 3: Asymmetrical 2-Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Project 2: Portrait Editorial */}
              {FEATURED_PROJECTS[1] && (
                <div
                  id="featured-project-1"
                  onClick={() => onNavigate('case-study', undefined, FEATURED_PROJECTS[1].id)}
                  className="lg:col-span-6 group bg-[#F5F2EC] border border-[#20211E]/10 p-6 sm:p-8 flex flex-col justify-between cursor-pointer hover:border-[#20211E]/30 transition-all"
                >
                  <div className="overflow-hidden aspect-[4/3] bg-[#E5DFD3] mb-6">
                    <img
                      src={FEATURED_PROJECTS[1].thumbnail}
                      alt={FEATURED_PROJECTS[1].title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-4">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#6E755E] block font-medium">
                      {FEATURED_PROJECTS[1].categoryLabel} · {FEATURED_PROJECTS[1].year}
                    </span>
                    <h3 className="font-editorial text-2xl sm:text-3xl text-[#20211E] leading-tight group-hover:text-[#6E755E] transition-colors">
                      {FEATURED_PROJECTS[1].title}
                    </h3>
                    <p className="text-sm text-[#5C5E58] leading-relaxed">
                      {FEATURED_PROJECTS[1].shortDescription}
                    </p>
                    <div className="pt-2">
                      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-medium text-[#20211E] group-hover:underline">
                        <span>View Project Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Project 3 */}
              {FEATURED_PROJECTS[2] && (
                <div
                  id="featured-project-2"
                  onClick={() => onNavigate('case-study', undefined, FEATURED_PROJECTS[2].id)}
                  className="lg:col-span-6 group bg-[#F5F2EC] border border-[#20211E]/10 p-6 sm:p-8 flex flex-col justify-between cursor-pointer hover:border-[#20211E]/30 transition-all"
                >
                  <div className="overflow-hidden aspect-[4/3] bg-[#E5DFD3] mb-6">
                    <img
                      src={FEATURED_PROJECTS[2].thumbnail}
                      alt={FEATURED_PROJECTS[2].title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-4">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#6E755E] block font-medium">
                      {FEATURED_PROJECTS[2].categoryLabel} · {FEATURED_PROJECTS[2].year}
                    </span>
                    <h3 className="font-editorial text-2xl sm:text-3xl text-[#20211E] leading-tight group-hover:text-[#6E755E] transition-colors">
                      {FEATURED_PROJECTS[2].title}
                    </h3>
                    <p className="text-sm text-[#5C5E58] leading-relaxed">
                      {FEATURED_PROJECTS[2].shortDescription}
                    </p>
                    <div className="pt-2">
                      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-medium text-[#20211E] group-hover:underline">
                        <span>View Project Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 03 — TRANSFORMATION SECTION (Interactive Before/After) */}
      {/* ---------------------------------------------------- */}
      <BeforeAfterSlider />

      {/* ---------------------------------------------------- */}
      {/* 04 — AI REELS & MOTION */}
      {/* ---------------------------------------------------- */}
      <section id="section-motion-reels" className="py-24 sm:py-32 bg-[#F5F2EC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#5C5E58] mb-3">
                04 — MOTION & REELS
              </p>
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#20211E] tracking-tight leading-[1.08]">
                Motion that gives products <br />
                <span className="italic font-light">another dimension.</span>
              </h2>
            </div>
            <button
              onClick={() => onNavigate('reels')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-medium text-[#20211E] hover:text-[#6E755E] transition-colors group cursor-pointer"
            >
              <span>View All Reels</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* 4 Large Vertical Video Thumbnails */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REELS_DATA.slice(0, 4).map((reel) => (
              <div
                key={reel.id}
                id={`home-reel-${reel.id}`}
                onClick={() => onOpenReel(reel)}
                className="group relative aspect-[9/16] bg-[#202A21] overflow-hidden border border-[#20211E]/15 cursor-pointer"
              >
                <img
                  src={reel.posterImage}
                  alt={reel.title}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 brightness-95 group-hover:brightness-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Top Duration Badge */}
                <div className="absolute top-4 right-4 px-2 py-0.5 bg-black/60 backdrop-blur-sm text-[#F5F2EC] text-[10px] font-mono">
                  {reel.duration}
                </div>

                {/* Center Play Button with subtle pulse */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#F5F2EC]/90 text-[#20211E] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white transition-all">
                    <Play className="w-5 h-5 ml-1 fill-current" />
                  </div>
                </div>

                {/* Bottom Metadata */}
                <div className="absolute bottom-5 inset-x-5 text-[#F5F2EC] space-y-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#F5F2EC]/70">
                    {reel.category}
                  </p>
                  <h4 className="font-editorial text-lg leading-snug line-clamp-2">
                    {reel.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 05 — EXPERIENCE / CREATIVE LEADERSHIP (Dark Olive/Charcoal) */}
      {/* ---------------------------------------------------- */}
      <section id="section-leadership" className="py-24 sm:py-32 bg-[#202A21] text-[#F5F2EC] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Big Number */}
            <div className="lg:col-span-5 space-y-3">
              <span className="font-editorial text-7xl sm:text-8xl lg:text-9xl font-light tracking-tighter text-[#EEEAE2] block leading-none">
                13+
              </span>
              <p className="text-sm uppercase tracking-[0.25em] text-[#EEEAE2]/80 font-medium pl-2">
                Years of Creative Experience
              </p>
            </div>

            {/* Right Copy & Strengths */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.25em] text-[#A0A892] font-medium">
                  THE PERSON BEHIND THE WORK
                </p>
                <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#F5F2EC] tracking-tight leading-[1.08]">
                  From production craft <br />
                  <span className="italic font-light">to creative direction.</span>
                </h2>
              </div>

              <p className="text-base sm:text-lg text-[#EEEAE2]/80 leading-relaxed max-w-xl">
                I’m Muhammad Abubakar, a Creative Lead and Visual Expert with over 13 years of experience across design, branding, packaging, product imagery and digital content. I combine hands-on production knowledge with creative leadership and modern AI-assisted workflows.
              </p>

              {/* Four Strengths */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border border-[#A0A892] text-[#A0A892] flex items-center justify-center text-xs mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-[0.15em] font-medium text-[#F5F2EC]">
                      Creative Direction
                    </h4>
                    <p className="text-xs text-[#EEEAE2]/70 mt-0.5">
                      Cohesive visual systems and senior art direction for commercial brands.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border border-[#A0A892] text-[#A0A892] flex items-center justify-center text-xs mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-[0.15em] font-medium text-[#F5F2EC]">
                      Team Leadership
                    </h4>
                    <p className="text-xs text-[#EEEAE2]/70 mt-0.5">
                      Guiding multidisciplinary studios, designers, and high-tempo asset workflows.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border border-[#A0A892] text-[#A0A892] flex items-center justify-center text-xs mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-[0.15em] font-medium text-[#F5F2EC]">
                      Print & Digital Production
                    </h4>
                    <p className="text-xs text-[#EEEAE2]/70 mt-0.5">
                      Deep pre-press precision, CMYK color profiles, packaging die-lines, and large catalogues.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border border-[#A0A892] text-[#A0A892] flex items-center justify-center text-xs mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-[0.15em] font-medium text-[#F5F2EC]">
                      AI-Powered Workflows
                    </h4>
                    <p className="text-xs text-[#EEEAE2]/70 mt-0.5">
                      Accelerating lifestyle staging, virtual set dressing, and hyper-realistic product motion.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  id="leadership-cta-about"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-medium text-[#F5F2EC] hover:text-[#A0A892] transition-colors group cursor-pointer"
                >
                  <span>More About Me</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 06 — FINAL CTA */}
      {/* ---------------------------------------------------- */}
      <section id="section-final-cta" className="relative py-28 sm:py-36 overflow-hidden bg-[#1B221C] text-[#F5F2EC]">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=85"
            alt="Warm architectural interior lifestyle atmosphere"
            className="w-full h-full object-cover opacity-25 brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B221C] via-[#1B221C]/90 to-[#1B221C]/75" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-8">
          <p className="text-xs uppercase tracking-[0.25em] text-[#A0A892] font-medium">
            COLLABORATION & VISUAL EXCELLENCE
          </p>
          <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-[#F5F2EC] tracking-tight leading-[1.05]">
            Ready to create <br />
            <span className="italic font-light">something remarkable?</span>
          </h2>

          <p className="text-base sm:text-lg text-[#EEEAE2]/80 max-w-xl mx-auto leading-relaxed">
            Tell me about your brand, product or creative challenge. Let’s turn your ideas into visuals that work.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              id="cta-book-meeting-btn"
              onClick={() => onOpenInquiry('meeting')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F5F2EC] text-[#20211E] hover:bg-white transition-all text-xs uppercase tracking-[0.15em] font-medium cursor-pointer"
            >
              <span>Book a Meeting</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              id="cta-send-brief-btn"
              onClick={() => onOpenInquiry('brief')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#F5F2EC]/60 text-[#F5F2EC] hover:bg-[#F5F2EC] hover:text-[#20211E] transition-all text-xs uppercase tracking-[0.15em] font-medium cursor-pointer"
            >
              <span>Send a Brief</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-4">
            <button
              id="cta-send-product-image-btn"
              onClick={() => onOpenInquiry('product-image')}
              className="text-xs uppercase tracking-[0.18em] text-[#A0A892] underline hover:text-[#F5F2EC] transition-colors cursor-pointer"
            >
              Send a Product Image →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
