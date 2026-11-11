import React, { useState } from 'react';
import { motion } from 'motion/react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { Calendar, Building2, CheckCircle2, Camera } from 'lucide-react';
import { AseLabModal } from './AseLabModal';

export const ExperienceSection: React.FC = () => {
  const [isAseLabModalOpen, setIsAseLabModalOpen] = useState(false);

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
            const isAseLab =
              item.id === 'exp-0' ||
              item.organization.toLowerCase().includes('advanced software engineer');

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                onClick={isAseLab ? () => setIsAseLabModalOpen(true) : undefined}
                className={`w-full rounded-2xl sm:rounded-3xl bg-[#F3E4CC] border border-[#D5B18C] p-4 sm:p-7 shadow-xs transition-all group relative ${
                  isAseLab
                    ? 'cursor-pointer hover:border-[#850000] hover:shadow-md hover:-translate-y-0.5'
                    : 'hover:border-[#850000]/50 hover:-translate-y-0.5'
                }`}
                id={`experience-card-${item.id}`}
                title={isAseLab ? 'Klik untuk melihat foto pitching Advanced Software Engineering Laboratory' : undefined}
              >
                {/* Top Row: Title + Org on Left, Period + Hover Prompt on Right */}
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

                  <div className="flex flex-wrap items-center gap-2 self-start shrink-0 mt-0.5 sm:mt-0">
                    <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 rounded-lg sm:rounded-xl bg-[#ebd7bc] border border-[#D5B18C] text-[#850000] text-[10px] sm:text-xs font-metadata font-bold">
                      <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#850000]" />
                      <span>{item.period}</span>
                    </span>

                    {/* On hover over Advanced Software Engineer Lab, show "click for more pictures" */}
                    {isAseLab && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsAseLabModalOpen(true);
                        }}
                        className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg sm:rounded-xl bg-[#850000] text-[#F3E4CC] text-[10px] sm:text-xs font-heading font-bold shadow-xs hover:bg-[#6b0000] transition-all duration-200 cursor-pointer group-hover:scale-105 active:scale-95 animate-pulse sm:animate-none"
                        id="btn-ase-lab-pictures"
                        title="click for more pictures"
                      >
                        <Camera className="w-3.5 h-3.5" />
                        <span>click for more pictures</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Description Paragraph (if available) */}
                {item.description && (
                  <p className="mt-2.5 sm:mt-3 text-[11px] sm:text-sm font-body text-[#63352C] leading-relaxed">
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
                  <div className="mt-3 sm:mt-5 pt-2.5 sm:pt-3.5 border-t border-[#D5B18C] flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1 sm:gap-1.5">
                      {item.skillsUsed.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg bg-[#ebd7bc] text-[#850000] text-[9px] sm:text-xs font-metadata font-medium border border-[#D5B18C]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {isAseLab && (
                      <span className="text-[10px] sm:text-[11px] font-heading font-bold text-[#850000] underline decoration-[#850000]/40 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        <span>📸 click for more pictures</span>
                      </span>
                    )}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Dedicated Space for Advanced Software Engineer Lab */}
      <AseLabModal
        isOpen={isAseLabModalOpen}
        onClose={() => setIsAseLabModalOpen(false)}
      />
    </section>
  );
};
