import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { ProfileHero } from './components/ProfileHero';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectPreviewModal } from './components/ProjectPreviewModal';
import { NotFoundView } from './components/NotFoundView';
import { Project } from './types';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('joanna_portfolio_dark_mode');
    if (saved !== null) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // ignore JSON parse error
      }
    }
    return false;
  });

  const [scrollProgress, setScrollProgress] = useState(0);
  const [previewProject, setPreviewProject] = useState<Project | null>(null);
  const [previewMode, setPreviewMode] = useState<'live' | 'code'>('live');
  const [show404, setShow404] = useState(false);

  // Sync dark mode class with root html
  useEffect(() => {
    localStorage.setItem('joanna_portfolio_dark_mode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

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

  const handleOpenLivePreview = (project: Project) => {
    setPreviewProject(project);
    setPreviewMode('live');
  };

  const handleOpenCodePreview = (project: Project) => {
    setPreviewProject(project);
    setPreviewMode('code');
  };

  if (show404) {
    return <NotFoundView onReturnHome={() => setShow404(false)} />;
  }

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#F8FAFC] dark:bg-[#0F172A] text-[#1F2937] dark:text-[#F8FAFC] transition-colors duration-300 font-sans selection:bg-[#7A0000] selection:text-white">
      {/* Top Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-slate-800 z-50 pointer-events-none">
        <div
          className="h-full bg-[#7A0000] dark:bg-red-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Sticky Header Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Page Sections */}
      <main className="w-full max-w-full overflow-x-hidden">
        {/* Profile (Hero replacement) */}
        <ProfileHero />

        {/* Technical Skills */}
        <SkillsSection />

        {/* Featured Projects */}
        <ProjectsSection
          onOpenLivePreview={handleOpenLivePreview}
          onOpenCodePreview={handleOpenCodePreview}
        />

        {/* Work & Leadership Experience */}
        <ExperienceSection />

        {/* Certifications */}
        <CertificationsSection />

        {/* Contact Form & Socials */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Preview Modal */}
      <ProjectPreviewModal
        project={previewProject}
        mode={previewMode}
        onClose={() => setPreviewProject(null)}
      />
    </div>
  );
}
