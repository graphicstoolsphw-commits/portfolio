import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { ArrowRight, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute, categoryKey?: string, projectId?: string) => void;
  onOpenInquiry?: (type?: 'project' | 'meeting' | 'brief') => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; route: PageRoute }[] = [
    { label: 'Home', route: 'home' },
    { label: 'Work', route: 'work' },
    { label: 'Expertise', route: 'expertise' },
    { label: 'About', route: 'about' },
    { label: 'Reels', route: 'reels' },
    { label: 'Contact', route: 'contact' },
  ];

  const handleNavClick = (route: PageRoute) => {
    setMobileMenuOpen(false);
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="global-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F5F2EC]/90 backdrop-blur-md border-b border-[#20211E]/10 py-3 shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
          : 'bg-[#F5F2EC] py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo / Wordmark */}
        <button
          id="brand-logo-btn"
          onClick={() => handleNavClick('home')}
          className="text-left group cursor-pointer"
        >
          <span className="block font-editorial text-2xl sm:text-2xl font-semibold tracking-tight text-[#20211E] uppercase">
            ABUBAKAR CREATIVES
          </span>
          <span className="block font-sans-ui text-[11px] uppercase tracking-[0.2em] text-[#5C5E58] group-hover:text-[#20211E] transition-colors">
            Muhammad Abubakar · Creative Lead
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav id="desktop-navigation" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = currentPage === link.route;
            return (
              <button
                key={link.route}
                id={`nav-link-${link.route}`}
                onClick={() => handleNavClick(link.route)}
                className={`text-sm tracking-wide transition-all relative py-1 cursor-pointer ${
                  isActive
                    ? 'text-[#20211E] font-medium'
                    : 'text-[#5C5E58] hover:text-[#20211E]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#20211E]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center">
          <button
            id="header-cta-btn"
            onClick={() => (onOpenInquiry ? onOpenInquiry('project') : handleNavClick('contact'))}
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-medium px-5 py-2.5 bg-[#20211E] text-[#F5F2EC] hover:bg-[#202A21] transition-colors rounded-none cursor-pointer"
          >
            <span>Let’s Work Together</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#20211E] hover:bg-[#EEEAE2] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-overlay"
          className="md:hidden fixed inset-x-0 top-[61px] bottom-0 bg-[#F5F2EC] border-t border-[#20211E]/10 p-6 flex flex-col justify-between overflow-y-auto"
        >
          <div className="space-y-6 pt-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#5C5E58]">Navigation</p>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.route}
                  id={`mobile-nav-${link.route}`}
                  onClick={() => handleNavClick(link.route)}
                  className={`text-left font-editorial text-3xl transition-colors ${
                    currentPage === link.route ? 'text-[#20211E] font-semibold italic' : 'text-[#5C5E58] hover:text-[#20211E]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-[#20211E]/10 space-y-4">
            <button
              id="mobile-header-cta"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenInquiry) {
                  onOpenInquiry('project');
                } else {
                  handleNavClick('contact');
                }
              }}
              className="w-full flex items-center justify-between text-xs uppercase tracking-[0.15em] font-medium px-5 py-3.5 bg-[#20211E] text-[#F5F2EC] hover:bg-[#202A21] transition-colors cursor-pointer"
            >
              <span>Let’s Work Together</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-xs text-[#5C5E58] text-center tracking-wide">
              Muhammad Abubakar · Creative Lead & Visual Expert
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
