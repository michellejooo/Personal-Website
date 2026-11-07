import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROFILE_DATA } from '../data/portfolioData';
import { CvComingSoonModal } from './CvComingSoonModal';
import {
  Mail,
  Linkedin,
  Github,
  Instagram,
  Download,
  MapPin,
  ExternalLink,
} from 'lucide-react';

interface ContactSectionProps {
  onOpenResume?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <section id="contact" className="py-14 sm:py-20 relative bg-transparent transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#7A0000]">
            Get In Touch
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#7A0000] tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="mt-3 text-sm text-[#7A0000]/80">
            Interested in collaboration, internship opportunities, or discussing web & data projects? Reach out anytime!
          </p>
          <div className="mt-3 w-16 h-1 bg-[#7A0000] mx-auto rounded-full" />
        </div>

        {/* Centered Contact Information Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <div className="p-6 sm:p-10 rounded-3xl bg-[#f4ebdb] border border-[#7A0000]/25 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-[#7A0000] text-center">
              Direct Contact
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#7A0000]/85 text-center leading-relaxed max-w-md mx-auto">
              Feel free to connect directly via email or check out my profiles on LinkedIn, GitHub, and Instagram.
            </p>

            {/* Contact Cards */}
            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${PROFILE_DATA.contact.email}`}
                className="p-3.5 sm:p-5 rounded-2xl bg-[#ebd7bc] border border-[#7A0000]/20 shadow-2xs flex items-center justify-between gap-3 sm:gap-4 hover:border-[#7A0000] transition-all group cursor-pointer"
                id="contact-info-email"
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#7A0000]/15 text-[#7A0000] flex items-center justify-center shrink-0 group-hover:bg-[#7A0000] group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#7A0000]/70">Email Address</p>
                    <p className="text-[11px] sm:text-sm font-bold text-[#7A0000] whitespace-nowrap overflow-hidden text-ellipsis">
                      {PROFILE_DATA.contact.email}
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex text-xs font-semibold text-[#7A0000] items-center gap-1 shrink-0 ml-2">
                  Send Email <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </a>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#ebd7bc] border border-[#7A0000]/20 shadow-2xs flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#7A0000]/15 text-[#7A0000] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#7A0000]/70">Location</p>
                  <p className="text-xs sm:text-sm font-bold text-[#7A0000]">
                    {PROFILE_DATA.contact.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 text-center">
              <p className="text-xs font-bold uppercase tracking-wider text-[#7A0000]/80 mb-3">
                Connect via Social Media
              </p>
              <div className="flex items-center justify-center gap-3">
                <a
                  href={PROFILE_DATA.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#ebd7bc] border border-[#7A0000]/20 flex items-center justify-center text-[#7A0000] hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-colors shadow-2xs cursor-pointer"
                  title="LinkedIn Profile"
                  id="social-link-linkedin"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href={PROFILE_DATA.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#ebd7bc] border border-[#7A0000]/20 flex items-center justify-center text-[#7A0000] hover:text-white hover:bg-black hover:border-black transition-colors shadow-2xs cursor-pointer"
                  title="GitHub Profile"
                  id="social-link-github"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={PROFILE_DATA.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#ebd7bc] border border-[#7A0000]/20 flex items-center justify-center text-[#7A0000] hover:text-white hover:bg-[#7A0000] transition-colors shadow-2xs cursor-pointer"
                  title="Instagram Profile"
                  id="social-link-instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Resume Download Action Button */}
            <div className="mt-8 pt-6 border-t border-[#7A0000]/20">
              <button
                type="button"
                onClick={() => setIsCvModalOpen(true)}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#7A0000] via-[#8C5E3C] to-[#7A0000] text-white font-bold text-xs sm:text-sm shadow-md shadow-[#7A0000]/25 hover:from-[#60050E] hover:to-[#5C0612] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                id="contact-btn-download-resume"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Curriculum Vitae Coming Soon Window Modal */}
      <CvComingSoonModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </section>
  );
};
