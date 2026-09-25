import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Github, CheckCircle, FileText, ExternalLink } from 'lucide-react';

interface ProjectsSectionProps {
  onOpenEssay?: (essayUrl?: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenEssay }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filters = ['All', 'Lomba Essay', 'Web Development', 'Full Stack', 'Data Analytics', 'UI/UX'];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Lomba Essay') return project.category === 'Lomba Essay';
    if (activeFilter === 'Data Analytics') return project.category === 'Data Analytics';
    if (activeFilter === 'Full Stack') return project.category === 'Full Stack';
    if (activeFilter === 'Web Development') return project.category === 'Web Development';
    if (activeFilter === 'UI/UX') return project.category === 'UI/UX' || project.category === 'Full Stack' || project.title === 'Echo';
    return true;
  });

  return (
    <section id="projects" className="py-16 sm:py-20 bg-white dark:bg-[#0B0F17] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#7A0000] dark:text-red-400">
            Portfolio Showcase
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-3 text-sm text-gray-600 dark:text-slate-300">
            Full-stack web applications, data analytics dashboards, and interactive digital systems
          </p>
          <div className="mt-3 w-16 h-1 bg-[#7A0000] mx-auto rounded-full" />
        </div>

        {/* Project Filter Tabs */}
        <div className="mt-10 flex items-center justify-center gap-2 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeFilter === filter
                  ? 'bg-[#7A0000] text-white shadow-md shadow-[#7A0000]/30'
                  : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700'
              }`}
              id={`project-filter-${filter.replace(/\s+/g, '-').toLowerCase()}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <motion.div layout className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl bg-white dark:bg-slate-800/90 border border-gray-100 dark:border-slate-700/80 shadow-lg overflow-hidden flex flex-col hover:border-[#7A0000]/40 dark:hover:border-red-500/40 transition-all hover:-translate-y-1.5 group"
                id={`project-card-${project.id}`}
              >
                {/* Image Thumbnail Container */}
                <div className={`relative aspect-video overflow-hidden ${project.id === 'beaqua-system' ? 'bg-white border-b border-gray-200 dark:border-slate-700' : 'bg-slate-900'} group`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* Overlay Gradient */}
                  {project.id === 'beaqua-system' ? (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  )}

                  {/* Status Tag */}
                  <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{project.status}</span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 right-3 bg-[#7A0000]/95 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg shadow-sm">
                    {project.category}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#7A0000] dark:group-hover:text-red-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-2.5 text-xs text-gray-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Features list bullet previews */}
                    <div className="mt-4 space-y-1.5">
                      {project.features.slice(0, 2).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-[11px] text-gray-500 dark:text-slate-400">
                          <CheckCircle className="w-3.5 h-3.5 text-[#7A0000] dark:text-red-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100 dark:border-slate-700/80">
                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-slate-700/80 text-gray-700 dark:text-slate-200 text-[10px] font-semibold border border-gray-200/60 dark:border-slate-600/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    {project.essayUrl ? (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            if (onOpenEssay) {
                              onOpenEssay(project.essayUrl);
                            } else if (project.essayUrl) {
                              window.open(project.essayUrl, '_blank', 'noopener,noreferrer');
                            }
                          }}
                          className="flex-1 py-2.5 px-4 rounded-xl bg-[#7A0000] hover:bg-[#990000] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors"
                          title="View Essay & Concept Paper"
                          id={`btn-essay-${project.id}`}
                        >
                          <FileText className="w-4 h-4" />
                          <span>View Essay</span>
                          <ExternalLink className="w-3 h-3 opacity-80" />
                        </button>
                        {project.githubUrl && project.githubUrl !== '#' && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-2.5 px-3 rounded-xl bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-slate-600 text-xs font-semibold flex items-center justify-center gap-1.5 border border-gray-200 dark:border-slate-600 transition-colors"
                            title="View GitHub Repository"
                            id={`btn-github-${project.id}`}
                          >
                            <Github className="w-4 h-4" />
                            <span className="hidden sm:inline">GitHub</span>
                          </a>
                        )}
                      </div>
                    ) : project.githubUrl && project.githubUrl !== '#' && project.githubUrl !== '' ? (
                      <div className="flex items-center">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2.5 px-4 rounded-xl bg-[#7A0000] hover:bg-[#990000] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors"
                          title="View GitHub Repository"
                          id={`btn-github-${project.id}`}
                        >
                          <Github className="w-4 h-4" />
                          <span>View on GitHub</span>
                        </a>
                      </div>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
