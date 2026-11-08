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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3E4CC] border border-[#D5B18C] text-[#850000] font-metadata text-[11px] uppercase tracking-wider mb-2">
            <span>✦</span>
            <span>05 / Get In Touch</span>
          </div>
          <h2 className="mt-1 sm:mt-2 text-2xl sm:text-4xl font-heading font-bold text-[#850000] tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="mt-1.5 sm:mt-3 text-xs sm:text-sm font-body text-[#63352C]">
            Interested in collaboration, internship opportunities, or discussing web &amp; data projects? Reach out anytime!
          </p>
          <div className="mt-2.5 sm:mt-3 w-12 sm:w-16 h-1 bg-[#850000] mx-auto rounded-full" />
        </div>

        {/* Centered Contact Information Container */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="mt-10 sm:mt-12 max-w-2xl mx-auto"
        >
          <div className="p-6 sm:p-10 rounded-3xl bg-[#F3E4CC] border border-[#D5B18C] shadow-[0_12px_32px_rgba(99,53,44,0.08)]">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#850000] text-center">
              Direct Contact
            </h3>
            <p className="mt-2 text-xs sm:text-sm font-body text-[#63352C] text-center leading-relaxed max-w-md mx-auto">
              Feel free to connect directly via email or check out my profiles on LinkedIn, GitHub, and Instagram.
            </p>

            {/* Contact Cards */}
            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${PROFILE_DATA.contact.email}`}
                className="p-3.5 sm:p-5 rounded-2xl bg-[#ebd7bc] border border-[#D5B18C] shadow-2xs flex items-center justify-between gap-3 sm:gap-4 hover:border-[#850000] transition-all group cursor-pointer"
                id="contact-info-email"
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#F3E4CC] border border-[#D5B18C] text-[#850000] flex items-center justify-center shrink-0 group-hover:bg-[#850000] group-hover:text-[#F3E4CC] transition-colors">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-metadata font-bold uppercase tracking-wider text-[#63352C]">Email Address</p>
                    <p className="text-[11px] sm:text-sm font-mono-code font-bold text-[#850000] whitespace-nowrap overflow-hidden text-ellipsis">
                      {PROFILE_DATA.contact.email}
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex text-xs font-heading font-bold text-[#850000] items-center gap-1 shrink-0 ml-2">
                  Send Email <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </a>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#ebd7bc] border border-[#D5B18C] shadow-2xs flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F3E4CC] border border-[#D5B18C] text-[#850000] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-metadata font-bold uppercase tracking-wider text-[#63352C]">Location</p>
                  <p className="text-xs sm:text-sm font-mono-code font-bold text-[#850000]">
                    {PROFILE_DATA.contact.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 text-center">
              <p className="text-xs font-metadata font-bold uppercase tracking-wider text-[#63352C] mb-3">
                ✦ Connect via Social Media ✦
              </p>
              <div className="flex items-center justify-center gap-3">
                <a
                  href={PROFILE_DATA.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#ebd7bc] border border-[#D5B18C] flex items-center justify-center text-[#850000] hover:text-[#F3E4CC] hover:bg-[#850000] hover:border-[#850000] transition-colors shadow-2xs cursor-pointer"
                  title="LinkedIn Profile"
                  id="social-link-linkedin"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href={PROFILE_DATA.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#ebd7bc] border border-[#D5B18C] flex items-center justify-center text-[#850000] hover:text-[#F3E4CC] hover:bg-[#850000] hover:border-[#850000] transition-colors shadow-2xs cursor-pointer"
                  title="GitHub Profile"
                  id="social-link-github"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={PROFILE_DATA.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#ebd7bc] border border-[#D5B18C] flex items-center justify-center text-[#850000] hover:text-[#F3E4CC] hover:bg-[#850000] hover:border-[#850000] transition-colors shadow-2xs cursor-pointer"
                  title="Instagram Profile"
                  id="social-link-instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Resume Download Action Button */}
            <div className="mt-8 pt-6 border-t border-[#D5B18C]">
              <button
                type="button"
                onClick={() => setIsCvModalOpen(true)}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#850000] hover:bg-[#6b0000] text-[#F3E4CC] font-heading font-bold text-xs sm:text-sm shadow-md shadow-[#850000]/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
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
