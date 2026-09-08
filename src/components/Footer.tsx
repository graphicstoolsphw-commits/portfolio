import React from 'react';
import { PageRoute } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="global-footer" className="bg-[#EEEAE2] text-[#20211E] border-t border-[#20211E]/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#20211E]/10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-editorial text-2xl font-semibold tracking-tight uppercase block">
              ABUBAKAR CREATIVES
            </span>
            <p className="text-sm text-[#5C5E58] max-w-sm leading-relaxed">
              Muhammad Abubakar — Creative Lead & Visual Expert. 13+ years delivering brand identity, product imagery, packaging systems, and digital motion.
            </p>
            <p className="text-xs text-[#5C5E58] italic pt-2">
              Selected imagery created for products listed across major retail and ecommerce platforms.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#20211E]">Index</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  id="footer-nav-work"
                  onClick={() => { onNavigate('work'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-[#5C5E58] hover:text-[#20211E] transition-colors cursor-pointer"
                >
                  Work — Portfolio
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-expertise"
                  onClick={() => { onNavigate('expertise'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-[#5C5E58] hover:text-[#20211E] transition-colors cursor-pointer"
                >
                  Expertise & Capabilities
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-about"
                  onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-[#5C5E58] hover:text-[#20211E] transition-colors cursor-pointer"
                >
                  About Muhammad Abubakar
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-reels"
                  onClick={() => { onNavigate('reels'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-[#5C5E58] hover:text-[#20211E] transition-colors cursor-pointer"
                >
                  Motion & Reels
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-contact"
                  onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-[#5C5E58] hover:text-[#20211E] transition-colors cursor-pointer"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Social / Connect Column */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#20211E]">Direct Connection</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#5C5E58] hover:text-[#20211E] transition-colors"
                >
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#5C5E58] hover:text-[#20211E] transition-colors"
                >
                  <span>Behance Portfolio</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#5C5E58] hover:text-[#20211E] transition-colors"
                >
                  <span>Instagram Motion</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5C5E58]">
          <p>© {currentYear} Abubakar Creatives. All rights reserved.</p>
          <p className="tracking-wide">Editorial Portfolio · Contemporary Visual Direction</p>
        </div>
      </div>
    </footer>
  );
};
