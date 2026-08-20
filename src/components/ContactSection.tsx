import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROFILE_DATA } from '../data/portfolioData';
import { ContactFormData } from '../types';
import {
  Mail,
  Linkedin,
  Github,
  Instagram,
  Send,
  Download,
  MapPin,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

interface ContactSectionProps {
  onOpenResume?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
           Let's Connect
          </h2>
          <p className="mt-3 text-sm text-gray-600 dark:text-slate-300">
            Interested in hiring for internships, full-time engineering roles, or collaborating on tech projects? Reach out anytime!
          </p>
          <div className="mt-3 w-16 h-1 bg-[#7A0000] mx-auto rounded-full" />
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Contact Information
              </h3>
              <p className="mt-2 text-xs text-gray-600 dark:text-slate-300 leading-relaxed">
                Feel free to connect for any collaborations!
              </p>

              {/* Contact Cards */}
              <div className="mt-6 space-y-4">
                <a
                  href={`mailto:${PROFILE_DATA.contact.email}`}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-gray-100 dark:border-slate-700/80 shadow-md flex items-center gap-4 hover:border-[#7A0000] transition-colors group"
                  id="contact-info-email"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/60 text-[#7A0000] dark:text-red-400 flex items-center justify-center shrink-0 group-hover:bg-[#7A0000] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Email Address</p>
                    <p className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-[#7A0000] dark:group-hover:text-red-400 transition-colors">
                      {PROFILE_DATA.contact.email}
                    </p>
                  </div>
                </a>

                <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-gray-100 dark:border-slate-700/80 shadow-md flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/60 text-[#7A0000] dark:text-red-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Location</p>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">
                      {PROFILE_DATA.contact.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400 mb-3">
                  Connect via Social Media
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={PROFILE_DATA.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-700 dark:text-slate-300 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-colors shadow-xs"
                    title="LinkedIn Profile"
                    id="social-link-linkedin"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>

                  <a
                    href={PROFILE_DATA.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-700 dark:text-slate-300 hover:text-white hover:bg-gray-900 hover:border-gray-900 dark:hover:bg-black transition-colors shadow-xs"
                    title="GitHub Profile"
                    id="social-link-github"
                  >
                    <Github className="w-5 h-5" />
                  </a>

                  <a
                    href={PROFILE_DATA.contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-700 dark:text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 hover:border-pink-500 transition-colors shadow-xs"
                    title="Instagram Profile"
                    id="social-link-instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Resume Download Action Button (Direct Google Drive Link) */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-slate-800">
              <a
                href={PROFILE_DATA.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#7A0000] to-red-800 text-white font-bold text-xs shadow-lg shadow-[#7A0000]/25 hover:from-[#990000] hover:to-red-900 transition-all flex items-center justify-center gap-2"
                id="contact-btn-download-resume"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume / CV via Google Drive</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-800/90 border border-gray-100 dark:border-slate-700/80 shadow-xl relative">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send a Direct Message
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-center"
                >
                  <CheckCircle2 className="w-10 h-10 mx-auto text-emerald-600 dark:text-emerald-400 mb-2" />
                  <h4 className="font-bold text-base">Message Sent Successfully!</h4>
                  <p className="mt-1 text-xs text-emerald-700 dark:text-emerald-300">
                    Thank you for contacting Joanna. I have received your message and will get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-[#7A0000]"
                        id="contact-form-name"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="example@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-[#7A0000]"
                        id="contact-form-email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Internship Inquiry / Project Collaboration"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-[#7A0000]"
                      id="contact-form-subject"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Hi Joanna, I would like to discuss an opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-[#7A0000] resize-none"
                      id="contact-form-message"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-[#7A0000] hover:bg-[#990000] text-white text-xs font-bold shadow-md shadow-[#7A0000]/30 transition-all flex items-center justify-center gap-2"
                    id="contact-form-submit-btn"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
