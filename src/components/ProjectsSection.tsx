import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectPhotoModal } from './ProjectPhotoModal';
import { Github, CheckCircle, FileText, ExternalLink, BookOpen, GraduationCap, Users, Code2, Eye, X, ZoomIn, Building2, Images } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedPoster, setSelectedPoster] = useState<{ title: string; image: string } | null>(null);
  const [selectedProjectForPhotos, setSelectedProjectForPhotos] = useState<Project | null>(null);

  const categoriesInProjects = Array.from(new Set(PROJECTS_DATA.map((p) => p.category)));
  const filters = ['All', ...categoriesInProjects];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.category === activeFilter;
  });

  const getProjectPhotosCount = (project: Project): number => {
    if (project.proofPhotos && project.proofPhotos.length > 0) {
      return project.proofPhotos.length;
    }
    let count = 0;
    if (project.posterImage) count++;
    if (project.image && project.image !== project.posterImage) count++;
    return count > 0 ? count : (project.image ? 1 : 0);
  };

  return (
    <section id="projects" className="py-12 sm:py-20 bg-transparent relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#7A0000]">
            Portfolio Showcase
          </span>
          <h2 className="mt-1 sm:mt-2 text-2xl sm:text-4xl font-extrabold text-[#7A0000] tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-1.5 sm:mt-3 text-xs sm:text-sm text-[#7A0000]/80">
            Full-stack web applications, backend services, and interactive digital platforms
          </p>
          <div className="mt-2.5 sm:mt-3 w-12 sm:w-16 h-1 bg-[#7A0000] mx-auto rounded-full" />
        </div>

        {/* Project Filter Tabs */}
        {filters.length > 1 && (
          <div className="mt-6 sm:mt-10 flex items-center justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-1.5">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-[#7A0000] text-white shadow-md shadow-[#7A0000]/25'
                    : 'bg-[#f4ebdb] text-[#7A0000] hover:bg-[#ebd7bc] border border-[#7A0000]/25'
                }`}
                id={`project-filter-${filter.replace(/\s+/g, '-').toLowerCase()}`}
              >
                {filter}
              </button>
            ))}
          </div>
        )}

        {/* Projects Cards Grid */}
        <motion.div
          layout
          className={`mt-6 sm:mt-10 grid gap-4 sm:gap-8 ${
            filteredProjects.length <= 2
              ? 'grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const photoCount = getProjectPhotosCount(project);

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-2xl sm:rounded-3xl bg-[#f4ebdb] border border-[#7A0000]/25 shadow-xs overflow-hidden flex flex-col hover:border-[#7A0000]/50 transition-all hover:-translate-y-0.5 group"
                  id={`project-card-${project.id}`}
                >
                  {/* Image Thumbnail Container - Click opens proof photos */}
                  <div
                    className="relative aspect-[16/10] sm:aspect-video max-h-40 sm:max-h-56 overflow-hidden bg-[#201815] group/thumb cursor-pointer"
                    onClick={() => setSelectedProjectForPhotos(project)}
                    title={`Klik untuk melihat bukti foto ${project.title}`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition duration-500"
                      referrerPolicy="no-referrer"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    {/* Status Tag */}
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-black/75 backdrop-blur-md border border-white/20 text-white text-[9px] sm:text-[11px] font-semibold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full flex items-center gap-1 sm:gap-1.5 max-w-[70%]">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                      <span className="truncate">{project.status}</span>
                    </div>

                    {/* Category Pill */}
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-[#7A0000] backdrop-blur-md text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg flex items-center gap-1 shadow-sm">
                      {project.isScientificPaper && <BookOpen className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-red-200" />}
                      <span>{project.category}</span>
                    </div>

                    {/* Photo Count Tag on bottom left of thumbnail */}
                    <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 bg-black/75 backdrop-blur-md border border-white/20 text-white text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full flex items-center gap-1 shadow-sm">
                      <Images className="w-3 h-3 text-red-300" />
                      <span>{photoCount} Bukti Foto</span>
                    </div>

                    {/* Hover indicator */}
                    <div className="absolute inset-0 bg-black/45 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white text-xs font-semibold pointer-events-none">
                      <ZoomIn className="w-4 h-4 text-red-300" />
                      <span>Lihat Bukti Foto</span>
                    </div>
                  </div>

                  {/* Content Details */}
                  <div className="p-3.5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 mb-1.5 sm:mb-2.5">
                        {project.isScientificPaper && (
                          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#7A0000]/10 border border-[#7A0000]/25 text-[#7A0000] text-[9px] sm:text-[10px] font-bold">
                            <GraduationCap className="w-3 h-3" />
                            <span>Scientific Paper</span>
                          </div>
                        )}

                        {project.organization && (
                          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#ebd7bc] border border-[#7A0000]/20 text-[#7A0000] text-[9px] sm:text-[10px] font-semibold">
                            <Building2 className="w-3 h-3 text-[#7A0000]" />
                            <span className="truncate max-w-[210px] sm:max-w-none">{project.organization}</span>
                          </div>
                        )}

                        {project.role && (
                          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#7A0000]/10 border border-[#7A0000]/25 text-[#7A0000] text-[9px] sm:text-[10px] font-bold">
                            <Code2 className="w-3 h-3" />
                            <span>Role: {project.role}</span>
                          </div>
                        )}
                      </div>

                      <h3
                        className="text-sm sm:text-base md:text-lg font-bold text-[#7A0000] leading-snug cursor-pointer hover:underline"
                        onClick={() => setSelectedProjectForPhotos(project)}
                      >
                        {project.title}
                      </h3>

                      {project.paperAuthors && (
                        <div className="mt-1 sm:mt-2 flex items-center gap-1 text-[10px] sm:text-[11px] text-[#7A0000]/80 italic">
                          <Users className="w-3 h-3 text-[#7A0000] shrink-0" />
                          <span>Penulis: {project.paperAuthors}</span>
                        </div>
                      )}

                      <p className="mt-1.5 sm:mt-2.5 text-[11px] sm:text-xs text-[#7A0000]/95 leading-relaxed line-clamp-3 sm:line-clamp-none">
                        {project.description}
                      </p>

                      {/* Features list bullet previews */}
                      {project.features && project.features.length > 0 && (
                        <div className="mt-2.5 sm:mt-4 space-y-1 sm:space-y-1.5">
                          {project.features.slice(0, 2).map((feat, idx) => (
                            <div key={idx} className="flex items-start gap-1.5 text-[10px] sm:text-[11px] text-[#7A0000]/90">
                              <CheckCircle className="w-3 h-3 text-[#7A0000] shrink-0 mt-0.5" />
                              <span className="leading-tight">{feat}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="mt-3.5 sm:mt-6 pt-2.5 sm:pt-4 border-t border-[#7A0000]/20">
                      {/* Tech Stack Chips */}
                      <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-2.5 sm:mb-4">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-[#ebd7bc] text-[#7A0000] text-[9px] sm:text-[10px] font-semibold border border-[#7A0000]/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Links & Bukti Foto Button */}
                      <div className="flex flex-wrap items-center gap-2">
                        {/* Primary: View Proof Photos */}
                        <button
                          type="button"
                          onClick={() => setSelectedProjectForPhotos(project)}
                          className="flex-1 min-w-[120px] py-2 sm:py-2.5 px-3 sm:px-3.5 rounded-xl bg-[#7A0000] hover:bg-[#60050E] text-white text-[11px] sm:text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer active:scale-[0.98]"
                          title="Lihat Bukti Foto Proyek"
                          id={`btn-photos-${project.id}`}
                        >
                          <Images className="w-3.5 h-3.5" />
                          <span>Bukti Foto ({photoCount})</span>
                        </button>

                        {/* Optional View Essay Link */}
                        {project.essayUrl && (
                          <a
                            href={project.essayUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-2 sm:py-2.5 px-3 rounded-xl bg-[#ebd7bc] text-[#7A0000] hover:bg-[#dfc9aa] text-[11px] sm:text-xs font-semibold flex items-center justify-center gap-1.5 border border-[#7A0000]/20 transition-colors"
                            title="Buka Dokumen Essay"
                            id={`btn-essay-${project.id}`}
                          >
                            <FileText className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">Essay</span>
                            <ExternalLink className="w-3 h-3 opacity-80" />
                          </a>
                        )}

                        {/* Optional GitHub Link */}
                        {project.githubUrl && project.githubUrl !== '#' && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-2 sm:py-2.5 px-3 rounded-xl bg-[#ebd7bc] text-[#7A0000] hover:bg-[#dfc9aa] text-[11px] sm:text-xs font-semibold flex items-center justify-center gap-1.5 border border-[#7A0000]/20 transition-colors"
                            title="View GitHub Repository"
                            id={`btn-github-${project.id}`}
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">GitHub</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Proof Photos Lightbox Modal */}
      <ProjectPhotoModal
        isOpen={Boolean(selectedProjectForPhotos)}
        onClose={() => setSelectedProjectForPhotos(null)}
        project={selectedProjectForPhotos}
      />

      {/* Poster Lightbox Modal */}
      <AnimatePresence>
        {selectedPoster && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0"
              onClick={() => setSelectedPoster(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#f4ebdb] rounded-2xl shadow-2xl overflow-hidden border border-[#7A0000]/25 text-[#7A0000]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#7A0000]/20 bg-[#ebd7bc]">
                <div className="flex items-center gap-2 min-w-0 pr-3">
                  <div className="p-1.5 rounded-lg bg-[#7A0000] text-white shrink-0">
                    <Eye className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#7A0000] truncate">
                    {selectedPoster.title} — Official Project Poster
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedPoster(null)}
                  className="p-1.5 rounded-lg hover:bg-[#f4ebdb] text-[#7A0000] transition-colors border border-[#7A0000]/20 cursor-pointer shrink-0"
                  title="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body / Poster Display */}
              <div className="flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-black/80">
                <img
                  src={selectedPoster.image}
                  alt={`${selectedPoster.title} Poster`}
                  className="max-h-[72vh] w-auto max-w-full object-contain rounded-xl shadow-lg border border-white/10"
                />
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between px-5 py-3.5 border-t border-[#7A0000]/20 bg-[#ebd7bc]">
                <span className="text-xs text-[#7A0000]/80 hidden sm:inline">
                  CARES Campus Facility Management Platform Poster
                </span>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <a
                    href={selectedPoster.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#7A0000] hover:bg-[#60050E] text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Buka Ukuran Asli</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedPoster(null)}
                    className="px-4 py-2 rounded-xl bg-[#f4ebdb] text-[#7A0000] text-xs font-semibold hover:bg-[#ebd7bc] transition-colors cursor-pointer border border-[#7A0000]/20"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
