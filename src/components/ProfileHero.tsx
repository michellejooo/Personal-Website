import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  PROFILE_DATA,
  PROFILE_AVATAR,
  SKILLS_DATA,
  PROJECTS_DATA,
  EXPERIENCE_DATA,
  CERTIFICATIONS_DATA,
  EDUCATION_DATA,
} from '../data/portfolioData';
import { MusicSection } from './MusicSection';
import {
  FolderGit2,
  Award,
  GraduationCap,
  ArrowRight,
  Mail,
  CheckCircle2,
  Wrench,
  Briefcase,
  MapPin,
} from 'lucide-react';

interface ProfileHeroProps {
  onOpenResume?: () => void;
}

// Animated running counter component
const AnimatedCounter: React.FC<{ target: number; duration?: number }> = ({
  target,
  duration = 1200,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [target, duration]);

  return <span>{count}</span>;
};

export const ProfileHero: React.FC<ProfileHeroProps> = () => {
  const typewriterPhrases = [
    'an AI & Data Analyst Enthusiast',
    'a Web Development Enthusiast',
    'a Prompt Engineer',
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
    <section id="profile" className="pt-24 sm:pt-28 lg:pt-36 pb-16 lg:pb-24 relative overflow-hidden">
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
            className="lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left justify-center"
          >
            <div className="relative group mx-auto lg:mx-0">
              {/* Decorative Red Accent Frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#7A0000] via-red-600 to-amber-500 rounded-[2rem] blur-md opacity-70 group-hover:opacity-100 transition duration-300" />

              <div className="relative w-56 h-64 sm:w-64 sm:h-76 md:w-72 md:h-84 lg:w-80 lg:h-[380px] xl:w-96 xl:h-[440px] rounded-[1.75rem] overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl bg-slate-100 dark:bg-slate-800">
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

            {/* Greeting Badge - Made larger & prominent */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-2xl bg-red-50/90 dark:bg-red-950/70 border border-red-200 dark:border-red-900/60 text-[#7A0000] dark:text-red-300 text-xs sm:text-base lg:text-lg font-bold w-fit mb-2.5 sm:mb-3.5 shadow-2xs">
              <span className="text-base sm:text-xl">👋</span>
              <span>Hello, I&apos;m <span className="font-black text-gray-950 dark:text-white">Joanna Tambunan</span></span>
            </div>

            {/* Primary Dynamic Headline - Scaled down on mobile to fit nicely */}
            <h1 className="text-base xs:text-lg sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-snug min-h-[30px] sm:min-h-[42px] flex items-center flex-wrap" id="profile-name-title">
              <span className="mr-1.5 sm:mr-2 text-gray-700 dark:text-slate-200">I&apos;m</span>
              <span className="text-[#7A0000] dark:text-red-400 font-black">{currentText}</span>
              <span className="inline-block w-0.5 sm:w-1 h-4 sm:h-7 bg-[#7A0000] dark:bg-red-400 ml-1 sm:ml-1.5 animate-pulse rounded-full" />
            </h1>

            {/* Bio / Introduction */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-gray-600 dark:text-slate-300 leading-relaxed font-normal">
              {PROFILE_DATA.introduction}
            </p>

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

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          {/* Education Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-800/90 border border-gray-100 dark:border-slate-700/80 shadow-sm hover:border-[#7A0000]/40 transition-all" id="profile-education-card">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-slate-700/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/60 text-[#7A0000] dark:text-red-400 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-gray-900 dark:text-white">Education</h2>
                  <p className="text-xs text-gray-500 dark:text-slate-400">Academic Background</p>
                </div>
              </div>
              <span className="text-[11px] font-semibold text-[#7A0000] dark:text-red-400 bg-red-50 dark:bg-red-950/50 px-2.5 py-1 rounded-full border border-red-100 dark:border-red-900/30">
                {EDUCATION_DATA.length} Institutions
              </span>
            </div>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {EDUCATION_DATA.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-gray-50/80 dark:bg-slate-700/40 border border-gray-100 dark:border-slate-700/50 relative pl-4 border-l-4 border-l-[#7A0000] dark:border-l-red-500"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-snug">
                      {edu.institution}
                    </h3>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white dark:bg-slate-800 text-gray-600 dark:text-slate-300 border border-gray-200 dark:border-slate-700 shrink-0">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-[#7A0000] dark:text-red-400 mt-1.5">
                    {edu.major}
                  </p>
                  {edu.location && (
                    <p className="text-[11px] text-gray-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-gray-400 dark:text-slate-500 shrink-0" />
                      <span>{edu.location}</span>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quick Statistics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 max-w-5xl mx-auto"
        >
          {/* Skills & Tools Count */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-gray-100 dark:border-slate-700/80 shadow-sm flex items-center gap-3.5 hover:border-[#7A0000]/40 transition-colors">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-red-50 dark:bg-red-950/60 text-[#7A0000] dark:text-red-400 flex items-center justify-center shrink-0">
              <Wrench className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white tabular-nums">
                <AnimatedCounter target={SKILLS_DATA.length} />
              </p>
              <p className="text-[11px] sm:text-xs font-semibold text-gray-600 dark:text-slate-300">
                Skills & Tech
              </p>
            </div>
          </div>

          {/* Featured Projects Count */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-gray-100 dark:border-slate-700/80 shadow-sm flex items-center gap-3.5 hover:border-[#7A0000]/40 transition-colors">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-red-50 dark:bg-red-950/60 text-[#7A0000] dark:text-red-400 flex items-center justify-center shrink-0">
              <FolderGit2 className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white tabular-nums">
                <AnimatedCounter target={PROJECTS_DATA.length} />
              </p>
              <p className="text-[11px] sm:text-xs font-semibold text-gray-600 dark:text-slate-300">
                Featured Projects
              </p>
            </div>
          </div>

          {/* Work & Leadership Experience Count */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-gray-100 dark:border-slate-700/80 shadow-sm flex items-center gap-3.5 hover:border-[#7A0000]/40 transition-colors">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-red-50 dark:bg-red-950/60 text-[#7A0000] dark:text-red-400 flex items-center justify-center shrink-0">
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white tabular-nums">
                <AnimatedCounter target={EXPERIENCE_DATA.length} />
              </p>
              <p className="text-[11px] sm:text-xs font-semibold text-gray-600 dark:text-slate-300">
                Experiences
              </p>
            </div>
          </div>

          {/* Certifications Count */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-gray-100 dark:border-slate-700/80 shadow-sm flex items-center gap-3.5 hover:border-[#7A0000]/40 transition-colors">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-red-50 dark:bg-red-950/60 text-[#7A0000] dark:text-red-400 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white tabular-nums">
                <AnimatedCounter target={CERTIFICATIONS_DATA.length} />
              </p>
              <p className="text-[11px] sm:text-xs font-semibold text-gray-600 dark:text-slate-300">
                Certifications
              </p>
            </div>
          </div>
        </motion.div>

        {/* Embedded Study Soundtrack */}
        <MusicSection />
      </div>
    </section>
  );
};
