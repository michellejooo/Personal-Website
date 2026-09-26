import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AWARDS_DATA } from '../data/portfolioData';
import { AwardItem } from '../types';
import {
  Trophy,
  Building2,
  Calendar,
  ExternalLink,
  Layers,
  GitMerge,
  FileText,
  Sparkles,
  ArrowRight,
  ZoomIn,
} from 'lucide-react';
import { EssayModal } from './EssayModal';

interface AwardsSectionProps {
  onOpenEssay?: (essayUrl?: string) => void;
}

export const AwardsSection: React.FC<AwardsSectionProps> = ({ onOpenEssay }) => {
  const [selectedAward, setSelectedAward] = useState<AwardItem | null>(null);

  const handleOpenEssayModal = (award: AwardItem) => {
    if (onOpenEssay) {
      onOpenEssay(award.essayUrl);
    } else {
      setSelectedAward(award);
    }
  };

  return (
    <section id="awards" className="py-12 sm:py-16 bg-slate-50/50 dark:bg-slate-900/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#7A0000] dark:text-red-400">
            Honors & Achievements
          </span>
          <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Awards & Competitions
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-gray-600 dark:text-slate-300">
            National scientific essay finalist and innovation honors
          </p>
          <div className="mt-2.5 w-12 h-1 bg-[#7A0000] mx-auto rounded-full" />
        </div>

        {/* Compact Awards Card */}
        <div className="mt-8 max-w-4xl mx-auto">
          {AWARDS_DATA.map((award, idx) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-800/95 rounded-2xl border border-gray-200/90 dark:border-slate-700 shadow-sm hover:border-[#7A0000]/40 dark:hover:border-red-500/40 transition-all overflow-hidden relative"
              id={`award-card-${award.id}`}
            >
              <div className="p-4 sm:p-6">
                {/* Header Strip */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 border-b border-gray-100 dark:border-slate-700/70">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#7A0000]/10 dark:bg-red-500/20 text-[#7A0000] dark:text-red-400 flex items-center justify-center shrink-0">
                      <Trophy className="w-4 h-4" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#7A0000] text-white text-[11px] font-bold tracking-wide">
                      {award.rank}
                    </span>
                    <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 text-[10px] font-semibold border border-amber-200/60 dark:border-amber-900/40">
                      <Sparkles className="w-2.5 h-2.5" />
                      Finalist
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-slate-400">
                    <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-gray-100 dark:bg-slate-700/60 text-gray-700 dark:text-slate-300 text-[11px]">
                      <Building2 className="w-3 h-3 text-[#7A0000] dark:text-red-400" />
                      {award.organizer}
                    </span>
                    <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-gray-100 dark:bg-slate-700/60 text-gray-700 dark:text-slate-300 text-[11px]">
                      <Calendar className="w-3 h-3 text-[#7A0000] dark:text-red-400" />
                      {award.year}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="mt-4 flex flex-col md:flex-row gap-5 items-start">
                  {/* Left: Details */}
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white tracking-tight leading-snug">
                        {award.projectName}
                      </h3>
                      <p className="text-xs font-semibold text-[#7A0000] dark:text-red-400 mt-1">
                        {award.competition} — {award.organizer}
                      </p>
                      <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
                        {award.description}
                      </p>
                    </div>

                    {/* Contributions - Dynamic list */}
                    <div className="space-y-1.5 pt-1">
                      {award.contributions && award.contributions.length > 0 ? (
                        award.contributions.map((contrib, cIdx) => (
                          <div key={cIdx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-slate-300">
                            <Layers className="w-3.5 h-3.5 text-[#7A0000] dark:text-red-400 shrink-0 mt-0.5" />
                            <p>{contrib}</p>
                          </div>
                        ))
                      ) : (
                        <div className="flex items-start gap-2 text-xs text-gray-600 dark:text-slate-300">
                          <Layers className="w-3.5 h-3.5 text-[#7A0000] dark:text-red-400 shrink-0 mt-0.5" />
                          <p>UI/UX prototype development, benchmarking, and competitive analysis.</p>
                        </div>
                      )}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {award.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-slate-700/60 text-gray-600 dark:text-slate-300 text-[10px] font-medium border border-gray-200/60 dark:border-slate-600/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="pt-2 flex flex-wrap items-center gap-2.5">
                      <button
                        onClick={() => handleOpenEssayModal(award)}
                        className="px-4 py-2 rounded-xl bg-[#7A0000] hover:bg-[#990000] text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors"
                        id={`btn-view-essay-${award.id}`}
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>View Essay</span>
                        <ExternalLink className="w-3 h-3 opacity-80" />
                      </button>

                      <a
                        href="#projects"
                        className="px-3.5 py-2 rounded-xl bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-slate-600 text-xs font-semibold flex items-center gap-1 border border-gray-200 dark:border-slate-600 transition-colors"
                        id={`btn-view-project-${award.id}`}
                      >
                        <span>View in Projects</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  {/* Right: Compact Concept Image */}
                  <div
                    onClick={() => handleOpenEssayModal(award)}
                    className="w-full md:w-64 lg:w-72 shrink-0 rounded-xl overflow-hidden border border-gray-200 dark:border-slate-700 relative group/img cursor-pointer aspect-16/10 md:aspect-4/3"
                    title="Click to preview essay"
                  >
                    <img
                      src={award.image}
                      alt={`${award.projectName} Concept Preview`}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-3">
                      <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        BeAqua Concept Visual
                      </span>
                      <p className="text-white text-xs font-medium truncate mt-0.5">
                        Biotechnology & Traceability
                      </p>
                    </div>

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white text-xs font-semibold">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Preview Essay</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Internal Modal fallback */}
      {selectedAward && (
        <EssayModal
          isOpen={Boolean(selectedAward)}
          onClose={() => setSelectedAward(null)}
          essayUrl={selectedAward.essayUrl}
        />
      )}
    </section>
  );
};
