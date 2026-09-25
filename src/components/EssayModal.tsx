import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Trophy,
  ExternalLink,
  BookOpen,
  Layers,
  GitMerge,
  Sparkles,
  CheckCircle2,
  Share2,
  Calendar,
  Building2,
  Compass,
  FileText,
} from 'lucide-react';
import beaquaImg from '../assets/images/beaqua_system_preview.png';

interface EssayModalProps {
  isOpen: boolean;
  onClose: () => void;
  essayUrl?: string;
}

export const EssayModal: React.FC<EssayModalProps> = ({
  isOpen,
  onClose,
  essayUrl = 'https://drive.google.com/drive/folders/1example?usp=sharing',
}) => {
  // ESC key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 dark:border-slate-800 overflow-hidden z-10"
          id="essay-viewer-modal"
        >
          {/* Modal Header */}
          <div className="px-5 sm:px-8 py-5 border-b border-gray-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/80 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#7A0000]/10 dark:bg-red-500/20 text-[#7A0000] dark:text-red-400 flex items-center justify-center shrink-0">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#7A0000] text-white text-[10px] font-bold uppercase tracking-wider">
                    Ranked 6th – Top 15 Finalist
                  </span>
                  <span className="text-xs text-gray-500 dark:text-slate-400 flex items-center gap-1 font-medium">
                    <Building2 className="w-3.5 h-3.5" />
                    IPB University
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mt-0.5">
                  Aprotech Fair 2026 Essay Competition
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
              title="Close modal (Esc)"
              id="btn-close-essay-modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Modal Content */}
          <div className="overflow-y-auto px-5 sm:px-8 py-6 space-y-8 flex-1">
            {/* Title & Banner Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 space-y-3">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7A0000] dark:text-red-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Scientific & Innovation Essay Concept</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white leading-tight">
                  BeAqua System: Transforming Aquatic By-Products into Sustainable Cosmetic Active Ingredients
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
                  A biotechnology-driven solution addressing industrial aquatic by-product waste through circular bioconversion, robust data traceability, and an integrated digital platform.
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-2.5 py-1 rounded-lg bg-red-50 dark:bg-red-950/40 text-[#7A0000] dark:text-red-300 text-xs font-semibold border border-red-200 dark:border-red-900/40">
                    UI/UX Conceptualization
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-xs font-semibold border border-blue-200 dark:border-blue-900/40">
                    Fishbone Analysis
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-semibold border border-emerald-200 dark:border-emerald-900/40">
                    Circular Economy
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 text-xs font-semibold border border-purple-200 dark:border-purple-900/40">
                    Biotechnology
                  </span>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-700 shadow-md relative group aspect-video">
                  <img
                    src={beaquaImg}
                    alt="BeAqua System Concept Graphic"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-3.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      BeAqua System Concept Visual
                    </span>
                    <p className="text-white text-xs font-semibold mt-0.5">
                      Bioactive Extraction & Digital Traceability
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Contribution Breakdown */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#7A0000] dark:text-red-400" />
                Key Contributions by Joanna
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Contribution 1 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gray-50/80 dark:bg-slate-800/60 border border-gray-200/80 dark:border-slate-700/80 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-[#7A0000] dark:text-red-400 font-bold text-xs sm:text-sm">
                    <div className="w-7 h-7 rounded-lg bg-[#7A0000]/10 dark:bg-red-500/20 flex items-center justify-center shrink-0">
                      <Layers className="w-4 h-4" />
                    </div>
                    <span>UI/UX & Platform User Flow Architecture</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-slate-300 leading-relaxed">
                    Contributed to the UI/UX and visual conceptualization of BeAqua System by structuring the platform’s user flow and visualizing key components, including raw-material data, traceability, bioconversion, quality assurance, distribution, and commercialization.
                  </p>
                  <div className="pt-2 border-t border-gray-200/60 dark:border-slate-700/60 flex flex-wrap gap-1.5">
                    {['Raw-Material Ingestion', 'Batch Traceability', 'Bioconversion QA', 'Commercialization Flow'].map((pill, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-white dark:bg-slate-900 text-gray-700 dark:text-slate-300 border border-gray-200 dark:border-slate-700 font-medium">
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contribution 2 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gray-50/80 dark:bg-slate-800/60 border border-gray-200/80 dark:border-slate-700/80 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-[#7A0000] dark:text-red-400 font-bold text-xs sm:text-sm">
                    <div className="w-7 h-7 rounded-lg bg-[#7A0000]/10 dark:bg-red-500/20 flex items-center justify-center shrink-0">
                      <GitMerge className="w-4 h-4" />
                    </div>
                    <span>Fishbone Analysis & Solution Framework</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-slate-300 leading-relaxed">
                    Contributed to the fishbone analysis and solution framework, mapping challenges in aquatic by-product management into an integrated development roadmap focused on biotechnology, digital traceability, circular economy, and sustainable commercialization.
                  </p>
                  <div className="pt-2 border-t border-gray-200/60 dark:border-slate-700/60 flex flex-wrap gap-1.5">
                    {['Root-Cause Mapping', 'Cold-Chain Logistics', 'Extraction Yields', 'Integrated Roadmap'].map((pill, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-white dark:bg-slate-900 text-gray-700 dark:text-slate-300 border border-gray-200 dark:border-slate-700 font-medium">
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Structured User Flow Stages Visualizer */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-gray-200 dark:border-slate-700 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#7A0000] dark:text-red-400" />
                  BeAqua System 6-Stage User Flow Pipeline
                </h4>
                <span className="text-[10px] font-semibold text-gray-500 dark:text-slate-400">
                  Concept Architecture
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pt-1">
                {[
                  { step: '01', title: 'Raw Material Data', desc: 'Sourcing & aquatic by-product intake' },
                  { step: '02', title: 'Traceability', desc: 'Digital batch logging & provenance' },
                  { step: '03', title: 'Bioconversion', desc: 'Enzymatic extraction & active isolates' },
                  { step: '04', title: 'Quality Assurance', desc: 'Purity testing & safety benchmarks' },
                  { step: '05', title: 'Distribution', desc: 'Sustainable cold-chain logistics' },
                  { step: '06', title: 'Commercialization', desc: 'Cosmetic industry adoption & sales' },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 space-y-1 text-center sm:text-left shadow-2xs"
                  >
                    <span className="text-[10px] font-black text-[#7A0000] dark:text-red-400 block">
                      {item.step}
                    </span>
                    <h5 className="text-[11px] font-bold text-gray-900 dark:text-white leading-tight">
                      {item.title}
                    </h5>
                    <p className="text-[10px] text-gray-500 dark:text-slate-400 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Competition Details Banner */}
            <div className="p-4 rounded-2xl bg-[#7A0000]/5 dark:bg-red-950/20 border border-[#7A0000]/20 dark:border-red-900/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#7A0000] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                    National Finalist Distinction: Ranked 6th (Top 15)
                  </h5>
                  <p className="text-[11px] text-gray-600 dark:text-slate-300">
                    Aprotech Fair 2026 Essay Competition • Organized by IPB University
                  </p>
                </div>
              </div>

              <a
                href={essayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-[#7A0000] hover:bg-[#990000] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-colors"
                id="btn-open-essay-doc"
              >
                <FileText className="w-4 h-4" />
                <span>Open Document / Essay Link</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-5 sm:px-8 py-4 bg-gray-50 dark:bg-slate-800/80 border-t border-gray-200 dark:border-slate-800 flex items-center justify-between gap-3">
            <div className="text-xs text-gray-500 dark:text-slate-400">
              <span className="font-semibold text-gray-700 dark:text-slate-200">BeAqua System</span> • Aprotech Fair 2026
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-white dark:bg-slate-700 text-gray-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-600 text-xs font-semibold border border-gray-200 dark:border-slate-600 transition-colors"
                id="btn-close-essay-footer"
              >
                Close
              </button>
              <a
                href={essayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#7A0000] hover:bg-[#990000] text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-colors"
                id="btn-view-essay-external"
              >
                <span>View Full Essay</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
