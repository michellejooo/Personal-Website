import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { ExperienceItem } from '../types';
import { ExperiencePhotoModal } from './ExperiencePhotoModal';
import { ExperienceCardCarousel } from './ExperienceCardCarousel';
import { Calendar, Building2, CheckCircle2, Eye } from 'lucide-react';

const STORAGE_KEY = 'joanna_experience_custom_photos';

export const ExperienceSection: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number>(0);

  // Clear any cached photos on mount to ensure removed photos do not persist
  useEffect(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
  }, []);

  // Helper to compile all photos for an experience
  const getExperienceImages = (item: ExperienceItem): string[] => {
    return item.images && item.images.length > 0
      ? item.images
      : (item.image ? [item.image] : []);
  };

  const handleOpenModal = (item: ExperienceItem, initialIdx: number = 0) => {
    setSelectedExperience(item);
    setSelectedPhotoIndex(initialIdx);
  };

  return (
    <section id="experience" className="py-12 sm:py-20 relative bg-transparent transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3E4CC] border border-[#D5B18C] text-[#850000] font-metadata text-[11px] uppercase tracking-wider mb-2">
            <span>✦</span>
            <span>04 / Leadership &amp; Track Record</span>
          </div>
          <h2 className="mt-1 sm:mt-2 text-2xl sm:text-4xl font-heading font-bold text-[#850000] tracking-tight">
            Organizational Experience
          </h2>
          <p className="mt-1.5 sm:mt-3 text-xs sm:text-sm font-body text-[#63352C]">
            Organizational leadership, administrative coordination, and team collaboration roles
          </p>
          <div className="mt-2.5 sm:mt-3 w-12 sm:w-16 h-1 bg-[#850000] mx-auto rounded-full" />
        </div>

        {/* Full-width Stacked Horizontal Cards */}
        <div className="space-y-4 sm:space-y-6">
          {EXPERIENCE_DATA.map((item, idx) => {
            const allItemImages = getExperienceImages(item);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="w-full rounded-2xl sm:rounded-3xl bg-[#F3E4CC] border border-[#D5B18C] p-4 sm:p-7 shadow-xs hover:border-[#850000]/50 hover:-translate-y-0.5 transition-all group"
                id={`experience-card-${item.id}`}
              >
                {/* Top Row: Title + Org on Left, Period + Photo on Right */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 sm:gap-3 pb-2.5 sm:pb-4 border-b border-[#D5B18C]">
                  <div className="space-y-0.5 sm:space-y-1">
                    <h3 className="text-sm sm:text-xl font-heading font-bold text-[#850000] leading-snug">
                      {item.role}
                    </h3>
                    <p className="text-[11px] sm:text-sm font-body font-semibold text-[#850000] flex items-center gap-1 sm:gap-1.5">
                      <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#850000] shrink-0" />
                      <span>{item.organization}</span>
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-1 sm:gap-2 self-start shrink-0 mt-0.5 sm:mt-0">
                    <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 rounded-lg sm:rounded-xl bg-[#ebd7bc] border border-[#D5B18C] text-[#850000] text-[10px] sm:text-xs font-metadata font-bold">
                      <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#850000]" />
                      <span>{item.period}</span>
                    </span>

                    {allItemImages.length > 0 && (
                      <button
                        type="button"
                        onClick={() => handleOpenModal(item, 0)}
                        className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 rounded-lg sm:rounded-xl bg-[#ebd7bc] border border-[#D5B18C] text-[10px] sm:text-xs font-heading font-bold text-[#850000] hover:bg-[#850000] hover:text-[#F3E4CC] transition-colors cursor-pointer"
                        id={`view-photo-link-${item.id}`}
                      >
                        <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        <span>Foto ({allItemImages.length})</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Photo Carousel (if available) */}
                {allItemImages.length > 0 && (
                  <div className="mt-2.5 sm:mt-4 max-w-xl">
                    <ExperienceCardCarousel
                      images={allItemImages}
                      caption={item.imageCaption}
                      role={item.role}
                      onOpenModal={(clickedIdx) => handleOpenModal(item, clickedIdx)}
                      experienceId={item.id}
                    />
                  </div>
                )}

                {/* Description Paragraph (if available) */}
                {item.description && (
                  <p className="mt-2 sm:mt-3 text-[11px] sm:text-sm font-body text-[#63352C] leading-relaxed">
                    {item.description}
                  </p>
                )}

                {/* Responsibilities list with CheckCircle2 */}
                {item.responsibilities && item.responsibilities.length > 0 && (
                  <ul className="mt-2.5 sm:mt-3.5 space-y-1.5 sm:space-y-2">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-1.5 sm:gap-2 text-[10px] sm:text-sm font-body text-[#63352C] leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#850000] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Skills/Tags Badges */}
                {item.skillsUsed && item.skillsUsed.length > 0 && (
                  <div className="mt-3 sm:mt-5 pt-2.5 sm:pt-3.5 border-t border-[#D5B18C] flex flex-wrap gap-1 sm:gap-1.5">
                    {item.skillsUsed.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg bg-[#ebd7bc] text-[#850000] text-[9px] sm:text-xs font-metadata font-medium border border-[#D5B18C]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Experience Photo Lightbox Modal */}
      <ExperiencePhotoModal
        isOpen={Boolean(selectedExperience)}
        onClose={() => setSelectedExperience(null)}
        experience={selectedExperience}
        images={selectedExperience ? getExperienceImages(selectedExperience) : []}
        initialIndex={selectedPhotoIndex}
      />
    </section>
  );
};
