import React from 'react';
import { NAV_ITEMS } from './Navbar';
import { PROFILE_DATA } from '../data/portfolioData';
import { ArrowUp, Linkedin, Github, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#ebd7bc]/50 border-t border-[#D5B18C] py-8 sm:py-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Quick Navigation Links */}
          <div className="w-full md:w-auto">
            <h4 className="text-xs font-metadata font-bold uppercase tracking-wider text-[#63352C] mb-3 text-center md:text-left">
              ✦ Quick Navigation ✦
            </h4>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-xs">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[#63352C] hover:text-[#850000] font-heading font-bold transition-colors py-1"
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
              className="py-2.5 px-5 rounded-xl bg-[#F3E4CC] hover:bg-[#850000] hover:text-[#F3E4CC] text-[#850000] text-xs font-heading font-bold transition-colors flex items-center justify-center gap-2 group shadow-2xs border border-[#D5B18C] cursor-pointer"
              id="footer-back-to-top-btn"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Tiny Bottom Social Media Icons (LinkedIn, GitHub, Instagram) */}
        <div className="mt-5 pt-4 border-t border-[#D5B18C]/60 flex items-center justify-center gap-2">
          <a
            href={PROFILE_DATA.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 rounded-md bg-[#F3E4CC] border border-[#D5B18C] flex items-center justify-center text-[#850000] hover:text-[#F3E4CC] hover:bg-[#850000] hover:border-[#850000] transition-colors cursor-pointer"
            title="LinkedIn"
            aria-label="LinkedIn Profile"
            id="footer-social-linkedin"
          >
            <Linkedin className="w-3 h-3" />
          </a>

          <a
            href={PROFILE_DATA.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 rounded-md bg-[#F3E4CC] border border-[#D5B18C] flex items-center justify-center text-[#850000] hover:text-[#F3E4CC] hover:bg-[#850000] hover:border-[#850000] transition-colors cursor-pointer"
            title="GitHub"
            aria-label="GitHub Profile"
            id="footer-social-github"
          >
            <Github className="w-3 h-3" />
          </a>

          <a
            href={PROFILE_DATA.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 rounded-md bg-[#F3E4CC] border border-[#D5B18C] flex items-center justify-center text-[#850000] hover:text-[#F3E4CC] hover:bg-[#850000] hover:border-[#850000] transition-colors cursor-pointer"
            title="Instagram"
            aria-label="Instagram Profile"
            id="footer-social-instagram"
          >
            <Instagram className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
};

