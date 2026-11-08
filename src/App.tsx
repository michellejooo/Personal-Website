import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { ProfileHero } from './components/ProfileHero';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { MoreSection } from './components/MoreSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { NotFoundView } from './components/NotFoundView';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [show404, setShow404] = useState(false);

  // Ensure dark class is removed since darkmode is disabled
  useEffect(() => {
    try {
      localStorage.removeItem('joanna_portfolio_dark_mode');
    } catch {
      // ignore
    }
    document.documentElement.classList.remove('dark');
  }, []);

  // Scroll progress listener
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (show404) {
    return <NotFoundView onReturnHome={() => setShow404(false)} />;
  }

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-retro-editorial text-[#850000] transition-colors duration-300 selection:bg-[#850000] selection:text-[#F3E4CC] relative">
      {/* Top Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[#850000]/10 z-50 pointer-events-none">
        <div
          className="h-full bg-[#850000] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="w-full max-w-full overflow-x-hidden">
        {/* Profile (Hero replacement) */}
        <ProfileHero />

        {/* Technical Skills */}
        <SkillsSection />

        {/* Featured Projects */}
        <ProjectsSection />

        {/* Work & Leadership Experience */}
        <ExperienceSection />

        {/* More: Things Abt Me & Spotify Soundtrack */}
        <MoreSection />

        {/* Contact Form & Socials */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
