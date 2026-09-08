import React, { useState } from 'react';
import { REELS_DATA } from '../data/portfolioData';
import { ReelItem, PageRoute } from '../types';
import { Play, ArrowRight } from 'lucide-react';

interface ReelsPageProps {
  onOpenReel: (reel: ReelItem) => void;
  onNavigate: (page: PageRoute) => void;
}

export const ReelsPage: React.FC<ReelsPageProps> = ({ onOpenReel, onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'AI Product Reels',
    'Furniture / Interior Motion',
    'Product Ads',
    'Social Videos',
    'Motion Graphics',
  ];

  const filteredReels = selectedCategory === 'All'
    ? REELS_DATA
    : REELS_DATA.filter((r) => {
        if (selectedCategory === 'Furniture / Interior Motion') return r.category === 'Interior Motion';
        if (selectedCategory === 'AI Product Reels') return r.category === 'AI Product Reels';
        if (selectedCategory === 'Product Ads') return r.category === 'Product Ads';
        if (selectedCategory === 'Social Videos') return r.category === 'Social Videos';
        if (selectedCategory === 'Motion Graphics') return r.category === 'Motion Graphics';
        return true;
      });

  return (
    <div id="reels-page-root" className="pt-28 sm:pt-36 pb-32 bg-[#F5F2EC] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <div className="mb-14 space-y-4 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] font-medium text-[#6E755E]">
            MOTION & REELS
          </p>
          <h1 className="font-editorial text-5xl sm:text-6xl lg:text-7xl text-[#20211E] tracking-tight leading-[1.04]">
            Products in motion.
          </h1>
          <p className="text-base sm:text-lg text-[#5C5E58] leading-relaxed pt-1">
            Art-directed cinematic micro-films, 9:16 vertical social reels, and dynamic product simulations engineered for contemporary digital storefronts.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 border-b border-[#20211E]/10 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.15em] transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#20211E] text-[#F5F2EC] font-medium'
                    : 'bg-[#EEEAE2] text-[#5C5E58] hover:text-[#20211E] hover:bg-[#E5DFD3]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Clean Gallery of Vertical and Landscape Videos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReels.map((reel) => {
            const isLandscape = reel.aspect === 'horizontal';

            return (
              <div
                key={reel.id}
                id={`reel-card-${reel.id}`}
                onClick={() => onOpenReel(reel)}
                className={`group bg-[#EEEAE2] border border-[#20211E]/10 flex flex-col justify-between overflow-hidden cursor-pointer transition-all hover:border-[#20211E]/30 hover:shadow-md ${
                  isLandscape ? 'sm:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
              >
                <div
                  className={`relative overflow-hidden bg-[#202A21] ${
                    isLandscape ? 'aspect-[16/9]' : 'aspect-[9/16] sm:aspect-[3/4]'
                  }`}
                >
                  <img
                    src={reel.posterImage}
                    alt={reel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                  {/* Top Duration Badge */}
                  <div className="absolute top-4 right-4 px-2.5 py-1 bg-black/60 backdrop-blur-sm text-[#F5F2EC] text-[10px] font-mono tracking-wider">
                    {reel.duration}
                  </div>

                  {/* Play Button Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#F5F2EC]/90 text-[#20211E] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white transition-all">
                      <Play className="w-5 h-5 ml-0.5 fill-current" />
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#5C5E58]">
                    <span className="uppercase tracking-[0.18em] text-[#6E755E] font-medium">
                      {reel.category}
                    </span>
                    <span>{reel.year}</span>
                  </div>

                  <h3 className="font-editorial text-2xl text-[#20211E] group-hover:text-[#6E755E] transition-colors leading-snug">
                    {reel.title}
                  </h3>

                  <p className="text-xs text-[#5C5E58] leading-relaxed line-clamp-2">
                    {reel.brief}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-xs uppercase tracking-[0.15em] text-[#20211E] border-t border-[#20211E]/10">
                    <span className="group-hover:underline">Play Reel</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-24 p-10 bg-[#EEEAE2] border border-[#20211E]/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-editorial text-2xl sm:text-3xl text-[#20211E]">
              Need tailored product motion?
            </h3>
            <p className="text-xs text-[#5C5E58] mt-1">
              Custom aspect ratios: 9:16 for TikTok / Reels, 1:1 for Carousels, 16:9 for Flagship Heroes.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 bg-[#20211E] text-[#F5F2EC] text-xs uppercase tracking-[0.15em] hover:bg-[#202A21] transition-colors cursor-pointer whitespace-nowrap"
          >
            Inquire About Motion →
          </button>
        </div>
      </div>
    </div>
  );
};
