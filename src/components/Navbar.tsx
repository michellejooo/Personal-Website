import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const NAV_ITEMS = [
  { label: 'Profile', href: '#profile' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Things Abt Me', href: '#more' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('en-GB', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2.5 backdrop-blur-md bg-[#E5C18F]/90 border-b border-[#D5B18C] shadow-xs'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 sm:gap-4">
        {/* Brand Monogram Badge: JMT (Joanna Michelle Tambunan) */}
        <a
          href="#profile"
          onClick={(e) => handleNavClick(e, '#profile')}
          className="flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#F3E4CC] border border-[#D5B18C] text-[#850000] font-heading font-black text-sm sm:text-base tracking-widest select-none shadow-xs hover:border-[#850000]/60 hover:bg-[#ebd7bc] transition-all shrink-0 group cursor-pointer"
          id="nav-brand-jmt"
          title={`JMT (Joanna Michelle Tambunan)${timeString ? ` • ${timeString} WIB` : ''}`}
        >
          <span className="w-2 h-2 rounded-full bg-[#850000] inline-block animate-pulse shrink-0" />
          <span className="font-heading font-black tracking-widest text-[#850000] text-sm sm:text-base group-hover:scale-105 transition-transform">
            JMT
          </span>
        </a>

        {/* Navigation Links - Soft Cream Pill Background with Burgundy Active State */}
        <nav className="hidden md:flex items-center gap-1 bg-[#F3E4CC] p-1.5 rounded-full border border-[#D5B18C] shadow-xs">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-heading font-bold whitespace-nowrap transition-all duration-200 shrink-0 ${
                  isActive
                    ? 'bg-[#850000] text-[#F3E4CC] shadow-xs'
                    : 'text-[#63352C] hover:text-[#850000] hover:bg-[#E5C18F]/50'
                }`}
                id={`nav-link-${sectionId}`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Menu Toggle (Mobile) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex p-2 rounded-full bg-[#F3E4CC] text-[#850000] hover:bg-[#ebd7bc] transition-colors border border-[#D5B18C] items-center justify-center min-w-[36px] min-h-[36px] sm:min-w-[40px] sm:min-h-[40px] shrink-0 active:scale-95 shadow-xs cursor-pointer"
            aria-label="Toggle navigation menu"
            id="nav-menu-toggle"
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            ) : (
              <Menu className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#F3E4CC]/98 backdrop-blur-xl border-b border-[#D5B18C] shadow-xl px-4 sm:px-8 py-5 flex flex-col gap-2 transition-all">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 pb-1">
              {NAV_ITEMS.map((item) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-3 py-2.5 rounded-xl text-xs font-heading font-bold text-center transition-all ${
                      isActive
                        ? 'bg-[#850000] text-[#F3E4CC] shadow-xs'
                        : 'text-[#63352C] hover:bg-[#E5C18F] hover:text-[#850000]'
                    }`}
                    id={`menu-overlay-nav-link-${sectionId}`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
