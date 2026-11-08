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
    <section id="profile" className="pt-24 sm:pt-28 lg:pt-36 pb-14 lg:pb-20 relative overflow-hidden">
      {/* Background Ambient Warm Editorial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#850000]/6 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-16 right-10 w-72 h-72 bg-[#D5B18C]/25 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Vintage Polaroid Photo of Joanna */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: -1.5 }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start justify-center"
          >
            {/* Polaroid Photo Card Container */}
            <div className="relative w-full max-w-[290px] sm:max-w-[320px] md:max-w-[340px] mx-auto lg:mx-0 bg-[#FAF6EE] p-3.5 sm:p-4 pb-5 sm:pb-6 rounded-sm border border-[#D5B18C] shadow-[0_18px_36px_-6px_rgba(99,53,44,0.22),0_6px_16px_rgba(99,53,44,0.1)] transition-all group">
              {/* Paper Washi Tape at Top Center */}
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-5 sm:h-6 bg-[#D5B18C]/65 border-y border-[#D5B18C] backdrop-blur-[1px] rotate-[-1deg] shadow-2xs pointer-events-none z-10"
                aria-hidden="true"
              />

              {/* Photo Frame Inside Polaroid (Aspect Square) */}
              <div className="relative w-full aspect-square bg-[#ebd7bc] overflow-hidden rounded-xs border border-[#4A2E1B]/15 shadow-inner">
                <img
                  src={avatarSrc}
                  onError={() => {
                    if (avatarSrc !== PROFILE_AVATAR_FALLBACK) {
                      setAvatarSrc(PROFILE_AVATAR_FALLBACK);
                    } else if (avatarSrc !== '/images/joanna_avatar_1785572098877.jpg') {
                      setAvatarSrc('/images/joanna_avatar_1785572098877.jpg');
                    }
                  }}
                  alt="Joanna - this is me!!"
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition duration-500"
                  referrerPolicy="no-referrer"
                  id="profile-avatar-img"
                />

                {/* Subtle vintage photo glaze overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#63352C]/15 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Polaroid Bottom Caption Area: "this is me!!" */}
              <div className="pt-3.5 sm:pt-4 text-center">
                <p className="font-heading font-black text-base sm:text-lg text-[#850000] tracking-wide lowercase">
                  this is me!!
                </p>
                <p className="text-[10px] sm:text-[11px] font-special-elite text-[#63352C] lowercase mt-0.5 tracking-tight">
                  joanna michelle tambunan
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Name, Titles, Intro & Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col"
          >
            {/* Editorial Kicker Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3E4CC] border border-[#D5B18C] text-[#850000] text-xs sm:text-sm font-heading font-bold w-fit mb-3 shadow-2xs">
              <span className="text-sm">✦</span>
              <span>Hello, I&apos;m <span className="text-[#850000] underline decoration-[#850000]/40">Joanna Tambunan</span></span>
            </div>

            {/* Primary Dynamic Headline in Space Mono Bold */}
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-heading font-bold text-[#850000] tracking-tight leading-snug min-h-[36px] sm:min-h-[52px] flex items-center flex-wrap" id="profile-name-title">
              <span className="mr-2 text-[#850000]">I&apos;m</span>
              <span className="text-[#850000] underline decoration-[#850000]/30">{currentText}</span>
              <span className="inline-block w-1 sm:w-1.5 h-6 sm:h-9 bg-[#850000] ml-1.5 animate-pulse rounded-full" />
            </h1>

            {/* Bio / Introduction in DM Sans for effortless legibility */}
            <p className="mt-4 sm:mt-5 font-body text-sm sm:text-base lg:text-lg text-[#63352C] leading-relaxed">
              {PROFILE_DATA.introduction}
            </p>

            {/* Call To Action Buttons */}
            <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleScroll('projects')}
                className="px-6 py-3 rounded-xl bg-[#850000] hover:bg-[#6b0000] text-[#F3E4CC] font-heading font-bold text-xs sm:text-sm shadow-md shadow-[#850000]/20 transition-all flex items-center gap-2 group cursor-pointer active:scale-[0.98]"
                id="profile-cta-projects"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="https://instagram.com/joannamt_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-[#F3E4CC] text-[#850000] border border-[#D5B18C] hover:text-[#F3E4CC] hover:bg-[#850000] hover:border-[#850000] transition-all shadow-xs flex items-center justify-center group cursor-pointer"
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
                className="w-11 h-11 rounded-xl bg-[#F3E4CC] text-[#850000] border border-[#D5B18C] hover:text-[#F3E4CC] hover:bg-[#850000] hover:border-[#850000] transition-all shadow-xs flex items-center justify-center group cursor-pointer"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
                id="profile-cta-linkedin"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Education Section in Soft Cream Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-12 sm:mt-14 max-w-4xl mx-auto"
        >
          <div className="p-5 sm:p-7 rounded-2xl bg-[#F3E4CC] border border-[#D5B18C] shadow-sm hover:border-[#850000]/40 transition-all" id="profile-education-card">
            <div className="flex items-center justify-between pb-4 border-b border-[#D5B18C]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#850000]/10 text-[#850000] flex items-center justify-center shrink-0 border border-[#D5B18C]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-heading font-bold text-[#850000]">Education</h2>
                  <p className="text-xs font-metadata text-[#63352C]">Academic Background</p>
                </div>
              </div>
              <span className="text-[11px] font-metadata font-bold text-[#850000] bg-[#ebd7bc] px-2.5 py-1 rounded-full border border-[#D5B18C]">
                {EDUCATION_DATA.length} Institutions
              </span>
            </div>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EDUCATION_DATA.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#ebd7bc]/50 border border-[#D5B18C] relative pl-4 border-l-4 border-l-[#850000]"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xs sm:text-sm font-heading font-bold text-[#850000] leading-snug">
                      {edu.institution}
                    </h3>
                    <span className="text-[10px] font-metadata font-bold px-2 py-0.5 rounded-full bg-[#F3E4CC] text-[#850000] border border-[#D5B18C] shrink-0">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs font-body font-medium text-[#63352C] mt-1.5">
                    {edu.major}
                  </p>
                  {edu.location && (
                    <p className="text-[11px] font-metadata text-[#63352C]/80 mt-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#850000] shrink-0" />
                      <span>{edu.location}</span>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quick Statistics Cards - Warm Cream Cards (#F3E4CC) with #D5B18C borders and #850000 numbers */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mt-8 sm:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 max-w-4xl mx-auto"
        >
          {/* Skills & Tools Count */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#F3E4CC] border border-[#D5B18C] shadow-xs flex items-center gap-3.5 hover:border-[#850000]/50 hover:-translate-y-0.5 transition-all">
            <div className="w-11 h-11 rounded-xl bg-[#ebd7bc] text-[#850000] flex items-center justify-center shrink-0 border border-[#D5B18C]">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-heading font-bold text-[#850000] tabular-nums">
                <AnimatedCounter target={SKILLS_DATA.length} />
              </p>
              <p className="text-[11px] sm:text-xs font-metadata text-[#63352C]">
                Skills &amp; Tech
              </p>
            </div>
          </div>

          {/* Featured Projects Count */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#F3E4CC] border border-[#D5B18C] shadow-xs flex items-center gap-3.5 hover:border-[#850000]/50 hover:-translate-y-0.5 transition-all">
            <div className="w-11 h-11 rounded-xl bg-[#ebd7bc] text-[#850000] flex items-center justify-center shrink-0 border border-[#D5B18C]">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-heading font-bold text-[#850000] tabular-nums">
                <AnimatedCounter target={PROJECTS_DATA.length} />
              </p>
              <p className="text-[11px] sm:text-xs font-metadata text-[#63352C]">
                Featured Projects
              </p>
            </div>
          </div>

          {/* Work & Leadership Experience Count */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#F3E4CC] border border-[#D5B18C] shadow-xs flex items-center gap-3.5 hover:border-[#850000]/50 hover:-translate-y-0.5 transition-all">
            <div className="w-11 h-11 rounded-xl bg-[#ebd7bc] text-[#850000] flex items-center justify-center shrink-0 border border-[#D5B18C]">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-heading font-bold text-[#850000] tabular-nums">
                <AnimatedCounter target={EXPERIENCE_DATA.length} />
              </p>
              <p className="text-[11px] sm:text-xs font-metadata text-[#63352C]">
                Experiences
              </p>
            </div>
          </div>

          {/* Certifications Count */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#F3E4CC] border border-[#D5B18C] shadow-xs flex items-center gap-3.5 hover:border-[#850000]/50 hover:-translate-y-0.5 transition-all">
            <div className="w-11 h-11 rounded-xl bg-[#ebd7bc] text-[#850000] flex items-center justify-center shrink-0 border border-[#D5B18C]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-heading font-bold text-[#850000] tabular-nums">
                <AnimatedCounter target={CERTIFICATIONS_DATA.length} />
              </p>
              <p className="text-[11px] sm:text-xs font-metadata text-[#63352C]">
                Certifications
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
