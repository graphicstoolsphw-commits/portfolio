import React from 'react';
import { PageRoute } from '../types';
import { EXPERIENCE_TIMELINE, TOOLKIT_ITEMS } from '../data/portfolioData';
import { ArrowRight, Compass, ShieldCheck, Cpu, Layers } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenInquiry: (type?: 'project' | 'meeting' | 'brief') => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenInquiry }) => {
  return (
    <div id="about-page-root" className="pt-28 sm:pt-36 pb-32 bg-[#F5F2EC] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <div className="mb-16 space-y-4 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] font-medium text-[#6E755E]">
            ABOUT MUHAMMAD ABUBAKAR
          </p>
          <h1 className="font-editorial text-5xl sm:text-6xl lg:text-7xl text-[#20211E] tracking-tight leading-[1.04]">
            Creative by experience. <br />
            <span className="italic font-light">Driven by impact.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#5C5E58] font-light leading-relaxed pt-2">
            I’m Muhammad Abubakar, a Creative Lead and Visual Expert with 13+ years of experience across design, branding, packaging, product visuals and digital content.
          </p>
        </div>

        {/* Progression Journey Strip */}
        <div className="bg-[#EEEAE2] p-6 sm:p-8 border border-[#20211E]/10 mb-20">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#5C5E58] mb-4 font-medium">
            Creative Career Evolution
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#20211E]">
            <span className="px-3 py-1.5 bg-[#F5F2EC] border border-[#20211E]/10">Print & Production</span>
            <span className="text-[#6E755E]">→</span>
            <span className="px-3 py-1.5 bg-[#F5F2EC] border border-[#20211E]/10">Graphic Design</span>
            <span className="text-[#6E755E]">→</span>
            <span className="px-3 py-1.5 bg-[#F5F2EC] border border-[#20211E]/10">Branding & Packaging</span>
            <span className="text-[#6E755E]">→</span>
            <span className="px-3 py-1.5 bg-[#F5F2EC] border border-[#20211E]/10">Studio / Product Imagery</span>
            <span className="text-[#6E755E]">→</span>
            <span className="px-3 py-1.5 bg-[#F5F2EC] border border-[#20211E]/10">Ecommerce Architecture</span>
            <span className="text-[#6E755E]">→</span>
            <span className="px-3 py-1.5 bg-[#F5F2EC] border border-[#20211E]/10">Creative Leadership</span>
            <span className="text-[#6E755E]">→</span>
            <span className="px-3 py-1.5 bg-[#20211E] text-[#F5F2EC]">AI-Powered Production</span>
          </div>
        </div>

        {/* Core Pillars: My Approach, Creative Leadership, Production Experience, AI Workflows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="p-8 bg-[#EEEAE2] border border-[#20211E]/10 space-y-4">
            <div className="w-8 h-8 rounded-full bg-[#20211E] text-[#F5F2EC] flex items-center justify-center">
              <Compass className="w-4 h-4" />
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl text-[#20211E]">My Approach</h3>
            <p className="text-sm text-[#5C5E58] leading-relaxed">
              Visual craft must directly support commercial clarity. Every frame, composition, lighting choice, and packaging fold is engineered to elevate perceived product value, build consumer trust, and communicate quality without unnecessary gimmicks.
            </p>
          </div>

          <div className="p-8 bg-[#EEEAE2] border border-[#20211E]/10 space-y-4">
            <div className="w-8 h-8 rounded-full bg-[#20211E] text-[#F5F2EC] flex items-center justify-center">
              <Layers className="w-4 h-4" />
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl text-[#20211E]">Creative Leadership</h3>
            <p className="text-sm text-[#5C5E58] leading-relaxed">
              With over a decade of guiding multidisciplinary teams, I coordinate photographers, retouchers, 3D artists, and junior designers to produce unified brand worlds across hundreds of SKUs, keeping deliverables on budget and on schedule.
            </p>
          </div>

          <div className="p-8 bg-[#EEEAE2] border border-[#20211E]/10 space-y-4">
            <div className="w-8 h-8 rounded-full bg-[#20211E] text-[#F5F2EC] flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl text-[#20211E]">Production Experience</h3>
            <p className="text-sm text-[#5C5E58] leading-relaxed">
              Trained in the unforgiving discipline of offset print, spot varnishes, and packaging dies, I understand sub-millimeter tolerances and precise CMYK color calibration. What works on screen must translate flawlessly into physical reality.
            </p>
          </div>

          <div className="p-8 bg-[#EEEAE2] border border-[#20211E]/10 space-y-4">
            <div className="w-8 h-8 rounded-full bg-[#20211E] text-[#F5F2EC] flex items-center justify-center">
              <Cpu className="w-4 h-4" />
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl text-[#20211E]">AI & Modern Workflows</h3>
            <p className="text-sm text-[#5C5E58] leading-relaxed">
              I integrate generative AI not as a replacement for craft, but as a high-speed accelerator for virtual set-dressing, architectural mood-boarding, and commercial lifestyle experimentation, ensuring the physical product retains 100% geometric and material accuracy.
            </p>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-24">
          <div className="border-b border-[#20211E]/15 pb-4 mb-10">
            <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#6E755E] mb-1">
              CAREER CHRONOLOGY
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#20211E]">
              13+ Years of Professional Growth
            </h2>
          </div>

          <div className="space-y-8">
            {EXPERIENCE_TIMELINE.map((item, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#EEEAE2] border border-[#20211E]/10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
              >
                <div className="md:col-span-4 space-y-1">
                  <span className="text-xs font-mono text-[#6E755E] uppercase tracking-wider">
                    {item.period}
                  </span>
                  <h3 className="font-editorial text-2xl text-[#20211E]">
                    {item.role}
                  </h3>
                </div>

                <div className="md:col-span-8 space-y-4">
                  <p className="text-sm text-[#5C5E58] leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((h, hIdx) => (
                      <span
                        key={hIdx}
                        className="text-[11px] px-2.5 py-1 bg-[#F5F2EC] border border-[#20211E]/10 text-[#20211E]"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle Tools Strip */}
        <div className="border-t border-b border-[#20211E]/15 py-8 mb-24">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#5C5E58] mb-4">
            Production Software & Creative Tools
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-[#5C5E58]">
            {TOOLKIT_ITEMS.map((tool, idx) => (
              <span key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6E755E]" />
                <span>{tool}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-10 sm:p-14 bg-[#202A21] text-[#F5F2EC] flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-editorial text-3xl sm:text-4xl text-[#F5F2EC]">
              Let’s explore what we can build together.
            </h3>
            <p className="text-sm text-[#EEEAE2]/80 leading-relaxed">
              Available for visual direction, full packaging overhauls, ecommerce visual asset systems, and bespoke studio collaborations.
            </p>
          </div>
          <button
            onClick={() => onOpenInquiry('meeting')}
            className="px-8 py-4 bg-[#F5F2EC] text-[#20211E] hover:bg-white text-xs uppercase tracking-[0.18em] transition-colors cursor-pointer whitespace-nowrap"
          >
            Schedule Consultation →
          </button>
        </div>
      </div>
    </div>
  );
};
