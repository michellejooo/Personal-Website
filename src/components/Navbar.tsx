import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const NAV_ITEMS = [
  { label: 'Profile', href: '#profile' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'More', href: '#more' },
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
          second: '2-digit',
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
          ? 'py-3 backdrop-blur-md bg-[#e2c28e]/95 border-b border-[#3D2314]/20 shadow-xs'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
        {/* Real-time Current Time */}
        <a
          href="#profile"
          onClick={(e) => handleNavClick(e, '#profile')}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#ebd7bc] border border-[#7A0000]/20 text-[#7A0000] text-xs sm:text-sm font-bold tracking-wider select-none shadow-2xs hover:border-[#7A0000]/50 transition-all shrink-0"
          id="nav-current-time"
          title="Waktu Sekarang (WIB)"
        >
          <span className="tracking-widest">{timeString || '--:--:--'}</span>
          <span className="text-[10px] font-extrabold text-[#7A0000] uppercase tracking-normal">
            WIB
          </span>
        </a>

        {/* Navigation Links - Desktop Only */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-1.5 bg-[#ebd7bc] p-1 sm:p-1.5 rounded-full border border-[#7A0000]/20 backdrop-blur-md shadow-xs">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 shrink-0 ${
                  isActive
                    ? 'bg-[#7A0000] text-white shadow-xs shadow-[#7A0000]/30'
                    : 'text-[#7A0000]/80 hover:text-[#7A0000] hover:bg-[#f4ebdb]'
                }`}
                id={`nav-link-${sectionId}`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Menu Toggle (Garis 3) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex p-1.5 sm:p-2.5 rounded-xl bg-[#ebd7bc] text-[#7A0000] hover:bg-[#f4ebdb] transition-colors border border-[#7A0000]/20 items-center justify-center min-w-[34px] min-h-[34px] sm:min-w-[40px] sm:min-h-[40px] shrink-0 active:scale-95 shadow-xs cursor-pointer"
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
        <div className="absolute top-full left-0 right-0 bg-[#ebd7bc]/98 backdrop-blur-xl border-b border-[#7A0000]/20 shadow-xl px-4 sm:px-8 py-5 flex flex-col gap-2 transition-all">
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
                    className={`px-3 py-2.5 rounded-xl text-xs font-bold text-center transition-all ${
                      isActive
                        ? 'bg-[#7A0000] text-white shadow-xs'
                        : 'text-[#7A0000]/80 hover:bg-[#f4ebdb] hover:text-[#7A0000]'
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
