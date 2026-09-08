import React, { useState, useRef, useCallback } from 'react';
import { TRANSFORMATION_DATA } from '../data/portfolioData';
import { SlidersHorizontal, Sparkles } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'slider' | 'original' | 'clean' | 'lifestyle'>('slider');
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  const handlePointerDown = () => {
    isDragging.current = true;
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  const updateSliderPos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    updateSliderPos(e.clientX);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    updateSliderPos(e.clientX);
  };

  return (
    <section id="section-transformation" className="py-24 sm:py-32 bg-[#EEEAE2] border-t border-b border-[#20211E]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#5C5E58] mb-3">
              03 — BEFORE & AFTER
            </p>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#20211E] tracking-tight leading-[1.08]">
              Same product. <br className="hidden sm:inline" />
              <span className="italic font-light">A new perspective.</span>
            </h2>
          </div>

          {/* Interactive Mode & State Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F5F2EC] border border-[#20211E]/10">
            <button
              id="transform-tab-slider"
              onClick={() => setActiveTab('slider')}
              className={`px-3.5 py-2 text-xs uppercase tracking-[0.12em] transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'slider'
                  ? 'bg-[#20211E] text-[#F5F2EC] font-medium'
                  : 'text-[#5C5E58] hover:text-[#20211E]'
              }`}
            >
              <SlidersHorizontal className="w-3 h-3" />
              <span>Interactive Slider</span>
            </button>
            <button
              id="transform-tab-original"
              onClick={() => setActiveTab('original')}
              className={`px-3.5 py-2 text-xs uppercase tracking-[0.12em] transition-all cursor-pointer ${
                activeTab === 'original'
                  ? 'bg-[#20211E] text-[#F5F2EC] font-medium'
                  : 'text-[#5C5E58] hover:text-[#20211E]'
              }`}
            >
              Original Product Shot
            </button>
            <button
              id="transform-tab-clean"
              onClick={() => setActiveTab('clean')}
              className={`px-3.5 py-2 text-xs uppercase tracking-[0.12em] transition-all cursor-pointer ${
                activeTab === 'clean'
                  ? 'bg-[#20211E] text-[#F5F2EC] font-medium'
                  : 'text-[#5C5E58] hover:text-[#20211E]'
              }`}
            >
              Clean / White Background
            </button>
            <button
              id="transform-tab-lifestyle"
              onClick={() => setActiveTab('lifestyle')}
              className={`px-3.5 py-2 text-xs uppercase tracking-[0.12em] transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'lifestyle'
                  ? 'bg-[#20211E] text-[#F5F2EC] font-medium'
                  : 'text-[#5C5E58] hover:text-[#20211E]'
              }`}
            >
              <Sparkles className="w-3 h-3 text-[#8C8068]" />
              <span>Lifestyle Visual</span>
            </button>
          </div>
        </div>

        {/* Transformation Canvas */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#E5DFD3] overflow-hidden border border-[#20211E]/10 shadow-sm select-none">
          {activeTab === 'slider' ? (
            <div
              ref={containerRef}
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
              onPointerMove={handlePointerMove}
              onClick={handleClick}
              className="relative w-full h-full cursor-ew-resize overflow-hidden touch-none"
            >
              {/* After (Lifestyle Visual) - Underlying Layer */}
              <img
                src={TRANSFORMATION_DATA.lifestyleVisual}
                alt="Final Lifestyle Environment"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 right-6 z-10 px-3 py-1 bg-[#20211E]/80 backdrop-blur-sm text-[#F5F2EC] text-[10px] uppercase tracking-[0.18em]">
                Final Lifestyle Visual
              </div>

              {/* Before (Original Shot / Clean Packshot) - Clipped Overlay */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={TRANSFORMATION_DATA.originalShot}
                  alt="Original Product Shot"
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 z-10 px-3 py-1 bg-[#F5F2EC]/90 backdrop-blur-sm text-[#20211E] text-[10px] uppercase tracking-[0.18em]">
                  Original Product Shot
                </div>
              </div>

              {/* Divider Line & Handle */}
              <div
                className="absolute top-0 bottom-0 z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                <div className="w-[1.5px] h-full bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#20211E] text-[#F5F2EC] flex items-center justify-center shadow-lg border border-white/40">
                    <SlidersHorizontal className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Interaction Hint */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#20211E]/70 backdrop-blur-sm text-[#F5F2EC] text-[11px] uppercase tracking-[0.15em] pointer-events-none">
                Drag slider to compare
              </div>
            </div>
          ) : activeTab === 'original' ? (
            <div className="relative w-full h-full">
              <img
                src={TRANSFORMATION_DATA.originalShot}
                alt="Original Product Shot"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 px-3 py-1 bg-[#F5F2EC]/95 backdrop-blur-sm text-[#20211E] text-[11px] uppercase tracking-[0.18em]">
                Raw Studio Capture
              </div>
            </div>
          ) : activeTab === 'clean' ? (
            <div className="relative w-full h-full bg-white flex items-center justify-center p-8">
              <img
                src={TRANSFORMATION_DATA.whiteBackground}
                alt="Clean White Background Asset"
                className="max-h-full max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 px-3 py-1 bg-[#20211E] text-[#F5F2EC] text-[11px] uppercase tracking-[0.18em]">
                Standard White-Background Retail Asset
              </div>
            </div>
          ) : (
            <div className="relative w-full h-full">
              <img
                src={TRANSFORMATION_DATA.lifestyleVisual}
                alt="Lifestyle Visual"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 px-3 py-1 bg-[#20211E] text-[#F5F2EC] text-[11px] uppercase tracking-[0.18em]">
                High-Conversion Architectural Lifestyle Environment
              </div>
            </div>
          )}
        </div>

        {/* Supporting Statement */}
        <div className="mt-8 max-w-3xl">
          <p className="font-editorial text-xl sm:text-2xl text-[#20211E] leading-relaxed">
            {TRANSFORMATION_DATA.description}
          </p>
        </div>
      </div>
    </section>
  );
};
