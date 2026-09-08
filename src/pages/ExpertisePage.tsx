import React from 'react';
import { PageRoute, WorkCategoryKey } from '../types';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ExpertisePageProps {
  onNavigate: (page: PageRoute, categoryKey?: WorkCategoryKey, projectId?: string) => void;
  onOpenInquiry: (type?: 'project' | 'meeting' | 'brief') => void;
}

export const ExpertisePage: React.FC<ExpertisePageProps> = ({
  onNavigate,
  onOpenInquiry,
}) => {
  const expertiseGroups = [
    {
      number: '01',
      title: 'Product & Ecommerce',
      categoryKey: 'ecommerce' as WorkCategoryKey,
      subtitle: 'From pristine white-background catalog imagery to photorealistic AI lifestyle environments.',
      description: 'Precision visual asset pipelines engineered to build customer trust and lift commercial conversion rates on direct-to-consumer websites and international retail platforms.',
      items: [
        'Product photography direction',
        'Advanced frequency separation retouching',
        'Clean white-background cutouts & drop-shadows',
        'AI lifestyle imagery & virtual staging',
        'Marketplace imagery & infographics',
        'Amazon listing image optimization',
        'Amazon A+ content & Brand Story modules',
      ],
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=85',
      imageCaption: 'Architectural furniture staging balancing soft daylight and authentic material textures.',
    },
    {
      number: '02',
      title: 'Brand & Packaging',
      categoryKey: 'branding' as WorkCategoryKey,
      subtitle: 'Physical packaging architecture, tactile finishes, and brand identity systems that endure.',
      description: 'Bringing 13+ years of rigorous pre-press and structural packaging craftsmanship to modern consumer goods, luxury gift boxes, cosmetics, and lifestyle products.',
      items: [
        'Brand identity & visual guidelines',
        'Logo systems & typography hierarchy',
        'Packaging design & structural dielines',
        'Rigid boxes & magnetic closure packaging',
        'Labels, neck tags & waterproof substrates',
        'Artwork preparation & barcode validation',
        'Pre-press color management (CMYK / Pantone)',
        'Print production oversight & press checks',
      ],
      image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=1600&q=85',
      imageCaption: 'Luxury apothecary packaging featuring warm bronze hot-stamping and textured cotton stock.',
    },
    {
      number: '03',
      title: 'Content & Motion',
      categoryKey: 'motion' as WorkCategoryKey,
      subtitle: 'Atmospheric product reels, kinetic typography, and fluid commercial social narratives.',
      description: 'Transforming stationary products into compelling digital motion that captures consumer attention in crowded feeds and on flagship storefronts.',
      items: [
        'Social media creative systems',
        'Campaign design & digital launch suites',
        'High-converting advertising assets',
        'AI product reels & simulated fluid physics',
        'Motion graphics & kinetic typography',
        'Video editing & color grading',
        'Short-form product films (9:16 & 16:9)',
      ],
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
      imageCaption: 'Meditative interior motion sequence directing attention to joinery craft and light.',
    },
    {
      number: '04',
      title: 'Catalogues & Print',
      categoryKey: 'catalogues' as WorkCategoryKey,
      subtitle: 'Comprehensive multi-hundred page trade catalogues, buyer lookbooks, and retail POS.',
      description: 'Mastery over large-scale publication layouts, dense SKU indices, cross-referencing tables, and showroom collateral built for high-stakes trade buyers.',
      items: [
        'Product catalogues (100–300+ pages)',
        'Seasonal lookbooks for trade fairs',
        'Architectural specification brochures',
        'POS merchandising & showroom displays',
        'Retail collateral & direct-mail print',
        'End-to-end production management',
      ],
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1600&q=85',
      imageCaption: 'Disciplined grid systems, Swiss binding specifications, and flawless color fidelity.',
    },
  ];

  return (
    <div id="expertise-page-root" className="pt-28 sm:pt-36 pb-32 bg-[#F5F2EC] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <div className="mb-20 space-y-4 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] font-medium text-[#6E755E]">
            EXPERTISE
          </p>
          <h1 className="font-editorial text-5xl sm:text-6xl lg:text-7xl text-[#20211E] tracking-tight leading-[1.04]">
            Creative solutions <br />
            <span className="italic font-light">across every touchpoint.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#5C5E58] leading-relaxed pt-2">
            Organized into four multidisciplinary pillars, bridging deep production craftsmanship with senior creative direction and AI-accelerated workflows.
          </p>
        </div>

        {/* Four Editorial Groups with Large Images Between Sections */}
        <div className="space-y-32">
          {expertiseGroups.map((group, idx) => (
            <div
              key={group.number}
              id={`expertise-group-${group.number}`}
              className="space-y-12 border-t border-[#20211E]/15 pt-12"
            >
              {/* Pillar Title & Copy Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-4 space-y-3">
                  <span className="font-editorial text-5xl sm:text-6xl text-[#6E755E] block leading-none font-light">
                    {group.number}
                  </span>
                  <h2 className="font-editorial text-3xl sm:text-4xl text-[#20211E] leading-tight">
                    {group.title}
                  </h2>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#5C5E58]">
                    {group.subtitle}
                  </p>
                </div>

                <div className="lg:col-span-8 space-y-8">
                  <p className="text-base text-[#5C5E58] leading-relaxed max-w-2xl">
                    {group.description}
                  </p>

                  {/* Capabilities Checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#20211E]/10">
                    {group.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#6E755E] shrink-0 mt-0.5" />
                        <span className="text-xs text-[#20211E] font-medium tracking-wide">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onNavigate('category-gallery', group.categoryKey)}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-medium text-[#20211E] hover:text-[#6E755E] transition-colors cursor-pointer group"
                    >
                      <span>Explore {group.title} Portfolio</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Large Image Between Sections */}
              <div className="space-y-3">
                <div className="overflow-hidden aspect-[16/8] sm:aspect-[21/9] bg-[#EEEAE2] border border-[#20211E]/10">
                  <img
                    src={group.image}
                    alt={group.title}
                    className="w-full h-full object-cover hover:scale-102 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-xs text-[#5C5E58] italic pl-1">{group.imageCaption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Collaboration Callout */}
        <div className="mt-32 p-10 sm:p-14 bg-[#EEEAE2] border border-[#20211E]/15 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-editorial text-3xl text-[#20211E]">
              Have a custom visual challenge?
            </h3>
            <p className="text-sm text-[#5C5E58] leading-relaxed">
              Whether preparing for a seasonal product launch, catalog overhaul, or marketplace scaling, let's formulate an efficient visual production workflow.
            </p>
          </div>
          <button
            onClick={() => onOpenInquiry('project')}
            className="px-8 py-4 bg-[#20211E] text-[#F5F2EC] text-xs uppercase tracking-[0.18em] hover:bg-[#202A21] transition-colors cursor-pointer whitespace-nowrap"
          >
            Initiate Project →
          </button>
        </div>
      </div>
    </div>
  );
};
