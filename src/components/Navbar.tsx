import React, { useState, useEffect } from 'react';
import { Sun, Moon, FileText, Menu, X, Code2 } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const NAV_ITEMS = [
  { label: 'Profile', href: '#profile' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
}) => {
  const [activeSection, setActiveSection] = useState('profile');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          ? 'py-3 backdrop-blur-md bg-white/80 dark:bg-[#0F172A]/85 border-b border-gray-200/50 dark:border-slate-800/80 shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 flex items-center justify-between gap-1.5 sm:gap-4">
        {/* Brand Logo */}
        <a
          href="#profile"
          onClick={(e) => handleNavClick(e, '#profile')}
          className="flex items-center gap-1.5 sm:gap-2.5 group shrink-0"
          id="nav-brand-logo"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#7A0000] flex items-center justify-center text-white shadow-md shadow-[#7A0000]/30 group-hover:scale-105 transition-transform duration-200">
            <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <span className="hidden sm:inline text-sm sm:text-base font-extrabold text-gray-900 dark:text-white tracking-tight">
            Joanna's Portfolio
          </span>
        </a>

        {/* Navigation Links (Positioned directly between Logo and Buttons) */}
        <nav className="flex items-center gap-1 bg-gray-100/80 dark:bg-slate-800/80 p-1 sm:p-1.5 rounded-full border border-gray-200/80 dark:border-slate-700/70 backdrop-blur-md overflow-x-auto no-scrollbar max-w-[calc(100vw-130px)] sm:max-w-none shadow-xs">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                  isActive
                    ? 'bg-[#7A0000] text-white shadow-sm shadow-[#7A0000]/25'
                    : 'text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-slate-700/50'
                }`}
                id={`nav-link-${sectionId}`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-1.5 sm:p-2 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors border border-gray-200 dark:border-slate-700"
            aria-label="Toggle dark mode"
            id="nav-theme-toggle"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[#7A0000]" />}
          </button>

          {/* Menu Toggle (Garis 3) - Visible across all screens (mobile & desktop) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex p-1.5 sm:p-2.5 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-slate-100 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors border border-gray-200 dark:border-slate-700 items-center justify-center min-w-[34px] min-h-[34px] sm:min-w-[42px] sm:min-h-[42px] shrink-0 active:scale-95 shadow-xs"
            aria-label="Toggle navigation menu"
            id="nav-menu-toggle"
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5] text-gray-900 dark:text-white" />
            ) : (
              <Menu className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5] text-gray-900 dark:text-white" />
            )}
          </button>
        </div>
      </div>


      {/* Navigation Menu Overlay (Available for both mobile and desktop toggling) */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-xl border-b border-gray-200 dark:border-slate-800 shadow-xl px-4 sm:px-8 py-5 flex flex-col gap-2 transition-all">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 pb-3 border-b border-gray-100 dark:border-slate-800">
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
                        ? 'bg-[#7A0000] text-white shadow-sm'
                        : 'text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800'
                    }`}
                    id={`menu-overlay-nav-link-${sectionId}`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            {/* Quick Theme Switch Row */}
            <div className="pt-3 flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-600 dark:text-slate-300">Appearance Mode</span>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-slate-200 border border-gray-200 dark:border-slate-700 text-xs font-semibold"
                id="menu-overlay-theme-toggle"
              >
                {darkMode ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-[#7A0000]" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
