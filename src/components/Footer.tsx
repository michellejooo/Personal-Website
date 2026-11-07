import React from 'react';
import { NAV_ITEMS } from './Navbar';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#d9b77e]/40 border-t border-[#7A0000]/20 py-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Quick Navigation Links */}
          <div className="w-full md:w-auto">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#7A0000] mb-3 text-center md:text-left">
              Quick Navigation
            </h4>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-xs">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[#7A0000]/85 hover:text-[#7A0000] font-semibold transition-colors py-1"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Back to Top */}
          <div className="shrink-0">
            <button
              onClick={scrollToTop}
              className="py-2.5 px-5 rounded-xl bg-[#ebd7bc] hover:bg-[#7A0000] hover:text-white text-[#7A0000] text-xs font-semibold transition-colors flex items-center justify-center gap-2 group shadow-2xs border border-[#7A0000]/25 cursor-pointer"
              id="footer-back-to-top-btn"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

