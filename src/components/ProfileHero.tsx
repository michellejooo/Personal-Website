import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { PROFILE_DATA, PROFILE_AVATAR } from '../data/portfolioData';
import { MusicSection } from './MusicSection';
import {
  FolderGit2,
  Award,
  Globe2,
  GraduationCap,
  ArrowRight,
  Mail,
  CheckCircle2,
} from 'lucide-react';

interface ProfileHeroProps {
  onOpenResume?: () => void;
}

export const ProfileHero: React.FC<ProfileHeroProps> = () => {
  const typewriterPhrases = [
    'Web Dev Enthusiast',
    'AI Engineer',
    'Fluent in English & Mandarin',
    'System Analyst',
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = typewriterPhrases[phraseIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && currentText === currentPhrase) {
      // Pause at full word before deleting
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && currentText === '') {
      // Switch phrase and start typing again
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % typewriterPhrases.length);
    } else {
      // Character by character typewriter speed
      const speed = isDeleting ? 35 : 75;
      timer = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? currentPhrase.substring(0, prev.length - 1)
            : currentPhrase.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex]);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="profile" className="pt-28 pb-16 lg:pt-36 lg:pb-24 relative overflow-hidden">
      {/* Background Deep Red Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#7A0000]/10 dark:bg-[#7A0000]/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-red-500/5 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Avatar & Quick Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <div className="relative group">
              {/* Decorative Red Accent Frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#7A0000] via-red-600 to-amber-500 rounded-3xl blur-sm opacity-70 group-hover:opacity-100 transition duration-300" />

              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl bg-slate-100 dark:bg-slate-800">
                <img
                  src={PROFILE_AVATAR}
                  alt="Joanna - Information Technology Student"
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition duration-500"
                  referrerPolicy="no-referrer"
                  id="profile-avatar-img"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Name, Titles, Intro & Actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col"
          >

            {/* Primary Red Typewriter Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#7A0000] dark:text-red-400 flex items-center flex-wrap leading-tight min-h-[44px]" id="profile-name-title">
              <span className="tracking-tight mr-2 sm:mr-3">Joanna |</span>
              <span className="tracking-tight">{currentText}</span>
              <span className="inline-block w-1 h-6 sm:h-8 bg-[#7A0000] dark:bg-red-400 ml-1.5 animate-pulse rounded-full" />
            </h1>

            <div className="mt-3 text-xs sm:text-sm font-semibold text-gray-500 dark:text-slate-400 flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-red-50 dark:bg-red-950/60 text-[#7A0000] dark:text-red-300 border border-red-200 dark:border-red-900/40 text-xs font-bold">
                Information Technology Major
              </span>
              <span>•</span>
              <span>Telkom University</span>
            </div>

            {/* Bio / Introduction */}
            <p className="mt-5 text-base sm:text-lg text-gray-600 dark:text-slate-300 leading-relaxed font-normal">
              {PROFILE_DATA.introduction}
            </p>

            {/* Academic GPA Highlight */}
            <div className="mt-5 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-red-50 dark:bg-red-950/70 text-[#7A0000] dark:text-red-300 text-xs sm:text-sm font-bold border border-red-200 dark:border-red-800/60 shadow-xs">
                <GraduationCap className="w-4 h-4 text-[#7A0000] dark:text-red-400" />
                <span>GPA: 3.16 / 4.00</span>
              </span>
            </div>

            {/* Technology Badges */}
            <div className="mt-3 flex flex-wrap gap-2">
              {PROFILE_DATA.technologyTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gray-100 dark:bg-slate-800/90 text-gray-700 dark:text-slate-200 text-xs font-semibold border border-gray-200/80 dark:border-slate-700/80 hover:border-[#7A0000] transition-colors"
                >
                  <CheckCircle2 className="w-3 h-3 text-[#7A0000] dark:text-red-400" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Call To Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleScroll('projects')}
                className="px-6 py-3 rounded-xl bg-[#7A0000] hover:bg-[#990000] text-white font-semibold text-sm shadow-md shadow-[#7A0000]/30 transition-all flex items-center gap-2 group"
                id="profile-cta-projects"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleScroll('contact')}
                className="px-6 py-3 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-white font-semibold text-sm border border-gray-200 dark:border-slate-700 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all flex items-center gap-2"
                id="profile-cta-contact"
              >
                <Mail className="w-4 h-4 text-[#7A0000] dark:text-red-400" />
                <span>Contact Me</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Quick Statistics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-gray-100 dark:border-slate-700/80 shadow-md flex items-center gap-4 hover:border-[#7A0000]/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/60 text-[#7A0000] dark:text-red-400 flex items-center justify-center shrink-0">
              <FolderGit2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-gray-900 dark:text-white">4</p>
              <p className="text-xs font-semibold text-gray-600 dark:text-slate-300">Featured Projects</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-gray-100 dark:border-slate-700/80 shadow-md flex items-center gap-4 hover:border-[#7A0000]/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/60 text-[#7A0000] dark:text-red-400 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-gray-900 dark:text-white">1</p>
              <p className="text-xs font-semibold text-gray-600 dark:text-slate-300">Certifications</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-gray-100 dark:border-slate-700/80 shadow-md flex items-center gap-4 hover:border-[#7A0000]/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/60 text-[#7A0000] dark:text-red-400 flex items-center justify-center shrink-0">
              <Globe2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-gray-900 dark:text-white">2</p>
              <p className="text-xs font-semibold text-gray-600 dark:text-slate-300">Languages (Fluent)</p>
            </div>
          </div>
        </motion.div>

        {/* Embedded Study Soundtrack */}
        <MusicSection />
      </div>
    </section>
  );
};
