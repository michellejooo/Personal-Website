import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  PROFILE_DATA,
  PROFILE_AVATAR,
  PROFILE_AVATAR_FALLBACK,
  SKILLS_DATA,
  PROJECTS_DATA,
  EXPERIENCE_DATA,
  CERTIFICATIONS_DATA,
  EDUCATION_DATA,
} from '../data/portfolioData';
import {
  FolderGit2,
  Award,
  GraduationCap,
  ArrowRight,
  Instagram,
  Linkedin,
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

  const [avatarSrc, setAvatarSrc] = useState(PROFILE_AVATAR);
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
      {/* Background Ambient Warm Chocolate & Maroon Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#7A0000]/8 rounded-full blur-3xl pointer-events-none -z-10 animate-warm-pulse" />
      <div className="absolute top-16 right-10 w-72 h-72 bg-[#8C5E3C]/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Avatar & Quick Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left justify-center"
          >
            <div className="relative group mx-auto lg:mx-0">
              {/* Decorative Maroon & Chocolate Frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#7A0000] via-[#8C5E3C] to-[#4A2E1B] rounded-[2rem] blur-md opacity-60 group-hover:opacity-90 transition duration-300" />

              <div className="relative w-56 h-64 sm:w-64 sm:h-76 md:w-72 md:h-84 lg:w-80 lg:h-[380px] xl:w-96 xl:h-[440px] rounded-[1.75rem] overflow-hidden border-4 border-[#ebd7bc] shadow-xl bg-[#ebd7bc]">
                <img
                  src={avatarSrc}
                  onError={() => {
                    if (avatarSrc !== PROFILE_AVATAR_FALLBACK) {
                      setAvatarSrc(PROFILE_AVATAR_FALLBACK);
                    }
                  }}
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
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col"
          >
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-2xl bg-[#f4ebdb] border border-[#7A0000]/25 text-[#7A0000] text-xs sm:text-base lg:text-lg font-bold w-fit mb-2.5 sm:mb-3.5 shadow-2xs">
              <span className="text-base sm:text-xl">👋</span>
              <span>Hello, I&apos;m <span className="font-extrabold text-[#7A0000]">Joanna Tambunan</span></span>
            </div>

            {/* Primary Dynamic Headline */}
            <h1 className="text-base xs:text-lg sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-extrabold text-[#7A0000] tracking-tight leading-snug min-h-[30px] sm:min-h-[42px] flex items-center flex-wrap" id="profile-name-title">
              <span className="mr-1.5 sm:mr-2 text-[#7A0000]">I&apos;m</span>
              <span className="text-[#7A0000] font-black underline decoration-[#7A0000]/40">{currentText}</span>
              <span className="inline-block w-0.5 sm:w-1 h-4 sm:h-7 bg-[#7A0000] ml-1 sm:ml-1.5 animate-pulse rounded-full" />
            </h1>

            {/* Bio / Introduction */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-[#7A0000]/90 leading-relaxed font-normal">
              {PROFILE_DATA.introduction}
            </p>

            {/* Call To Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleScroll('projects')}
                className="px-6 py-3 rounded-xl bg-[#7A0000] hover:bg-[#60050E] text-white font-semibold text-sm shadow-md shadow-[#7A0000]/25 transition-all flex items-center gap-2 group cursor-pointer active:scale-[0.98]"
                id="profile-cta-projects"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="https://instagram.com/joannamt_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-[#f4ebdb] text-[#7A0000] border border-[#7A0000]/25 hover:text-white hover:bg-[#7A0000] transition-all shadow-xs flex items-center justify-center group cursor-pointer"
                title="Instagram (@joannamt_)"
                aria-label="Instagram Profile"
                id="profile-cta-instagram"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="https://www.linkedin.com/in/joannamt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-[#f4ebdb] text-[#7A0000] border border-[#7A0000]/25 hover:text-white hover:bg-[#7A0000] transition-all shadow-xs flex items-center justify-center group cursor-pointer"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
                id="profile-cta-linkedin"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          {/* Education Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#f4ebdb] border border-[#7A0000]/25 shadow-xs hover:border-[#7A0000]/50 transition-all" id="profile-education-card">
            <div className="flex items-center justify-between pb-4 border-b border-[#7A0000]/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#7A0000]/15 text-[#7A0000] flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-[#7A0000]">Education</h2>
                  <p className="text-xs text-[#7A0000]/80">Academic Background</p>
                </div>
              </div>
              <span className="text-[11px] font-semibold text-[#7A0000] bg-[#7A0000]/10 px-2.5 py-1 rounded-full border border-[#7A0000]/20">
                {EDUCATION_DATA.length} Institutions
              </span>
            </div>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {EDUCATION_DATA.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#ebd7bc] border border-[#7A0000]/20 relative pl-4 border-l-4 border-l-[#7A0000]"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-bold text-[#7A0000] leading-snug">
                      {edu.institution}
                    </h3>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#f4ebdb] text-[#7A0000] border border-[#7A0000]/25 shrink-0">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-[#7A0000] mt-1.5">
                    {edu.major}
                  </p>
                  {edu.location && (
                    <p className="text-[11px] text-[#7A0000]/80 mt-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#7A0000] shrink-0" />
                      <span>{edu.location}</span>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quick Statistics Cards - Slightly lighter than #e2c28e, maroon text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 max-w-5xl mx-auto"
        >
          {/* Skills & Tools Count */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#f4ebdb] border border-[#7A0000]/25 shadow-xs flex items-center gap-3.5 hover:border-[#7A0000]/50 hover:-translate-y-1 transition-all">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#7A0000]/15 text-[#7A0000] flex items-center justify-center shrink-0">
              <Wrench className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-extrabold text-[#7A0000] tabular-nums">
                <AnimatedCounter target={SKILLS_DATA.length} />
              </p>
              <p className="text-[11px] sm:text-xs font-semibold text-[#7A0000]/85">
                Skills & Tech
              </p>
            </div>
          </div>

          {/* Featured Projects Count */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#f4ebdb] border border-[#7A0000]/25 shadow-xs flex items-center gap-3.5 hover:border-[#7A0000]/50 hover:-translate-y-1 transition-all">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#7A0000]/15 text-[#7A0000] flex items-center justify-center shrink-0">
              <FolderGit2 className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-extrabold text-[#7A0000] tabular-nums">
                <AnimatedCounter target={PROJECTS_DATA.length} />
              </p>
              <p className="text-[11px] sm:text-xs font-semibold text-[#7A0000]/85">
                Featured Projects
              </p>
            </div>
          </div>

          {/* Work & Leadership Experience Count */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#f4ebdb] border border-[#7A0000]/25 shadow-xs flex items-center gap-3.5 hover:border-[#7A0000]/50 hover:-translate-y-1 transition-all">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#7A0000]/15 text-[#7A0000] flex items-center justify-center shrink-0">
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-extrabold text-[#7A0000] tabular-nums">
                <AnimatedCounter target={EXPERIENCE_DATA.length} />
              </p>
              <p className="text-[11px] sm:text-xs font-semibold text-[#7A0000]/85">
                Experiences
              </p>
            </div>
          </div>

          {/* Certifications Count */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#f4ebdb] border border-[#7A0000]/25 shadow-xs flex items-center gap-3.5 hover:border-[#7A0000]/50 hover:-translate-y-1 transition-all">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#7A0000]/15 text-[#7A0000] flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-extrabold text-[#7A0000] tabular-nums">
                <AnimatedCounter target={CERTIFICATIONS_DATA.length} />
              </p>
              <p className="text-[11px] sm:text-xs font-semibold text-[#7A0000]/85">
                Certifications
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
