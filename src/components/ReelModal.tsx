import React, { useState, useEffect } from 'react';
import { ReelItem } from '../types';
import { X, Play, Pause, Volume2, VolumeX, CheckCircle2 } from 'lucide-react';

interface ReelModalProps {
  reel: ReelItem | null;
  onClose: () => void;
}

export const ReelModal: React.FC<ReelModalProps> = ({ reel, onClose }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    if (!reel) return;
    setIsPlaying(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 1.2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [reel]);

  if (!reel) return null;

  return (
    <div
      id="reel-modal-overlay"
      className="fixed inset-0 z-50 bg-[#20211E]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-fade-in"
      onClick={onClose}
    >
      <div
        id="reel-modal-container"
        className="bg-[#EEEAE2] text-[#20211E] max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#20211E]/20 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-reel-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-[#20211E] text-[#F5F2EC] hover:bg-[#202A21] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Video Preview Column */}
          <div className="md:col-span-6 bg-[#202A21] relative flex items-center justify-center min-h-[420px] overflow-hidden group">
            <img
              src={reel.posterImage}
              alt={reel.title}
              className={`w-full h-full object-cover transition-transform duration-700 ${
                isPlaying ? 'scale-105' : 'scale-100'
              }`}
              referrerPolicy="no-referrer"
            />
            {/* Subtle atmospheric vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

            {/* Simulated Live Scanline / Motion indicator */}
            {isPlaying && (
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-pulse pointer-events-none" />
            )}

            {/* Video Controls Overlay */}
            <div className="absolute bottom-4 inset-x-4 flex items-center justify-between text-[#F5F2EC] z-10">
              <button
                id="reel-play-pause-btn"
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2.5 bg-[#20211E]/80 backdrop-blur-sm hover:bg-[#20211E] transition-colors cursor-pointer"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>

              <div className="flex-1 mx-4">
                <div className="w-full bg-white/20 h-1 overflow-hidden">
                  <div
                    className="bg-[#F5F2EC] h-full transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono tracking-wider">{reel.duration}</span>
                <button
                  id="reel-mute-toggle-btn"
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 bg-[#20211E]/80 backdrop-blur-sm hover:bg-[#20211E] transition-colors cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="absolute top-4 left-4 px-2.5 py-1 bg-[#20211E]/80 backdrop-blur-sm text-[#F5F2EC] text-[10px] uppercase tracking-[0.2em]">
              {isPlaying ? 'Now Playing' : 'Paused'}
            </div>
          </div>

          {/* Details Column */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#5C5E58] mb-1">
                  {reel.category} · {reel.year}
                </p>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#20211E] leading-snug">
                  {reel.title}
                </h3>
              </div>

              <div className="space-y-2">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#20211E] font-medium">
                  Creative Brief & Motion Logic
                </p>
                <p className="text-sm text-[#5C5E58] leading-relaxed">
                  {reel.brief}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#20211E] font-medium">
                  Format Deliverables
                </p>
                <ul className="space-y-1.5 text-xs text-[#5C5E58]">
                  {reel.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#6E755E]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-[#20211E]/10 mt-6 flex items-center justify-between">
              <span className="text-xs text-[#5C5E58]">
                Shot & Directed by Muhammad Abubakar
              </span>
              <button
                onClick={onClose}
                className="text-xs uppercase tracking-[0.15em] text-[#20211E] underline hover:text-[#5C5E58] cursor-pointer"
              >
                Close Reel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
