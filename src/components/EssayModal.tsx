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
import beaquaImg from '../assets/images/beaqua_system_preview_1788883584017.jpg';

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
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#f4ebdb] rounded-2xl sm:rounded-3xl shadow-2xl border border-[#7A0000]/25 overflow-hidden z-10 text-[#7A0000]"
          id="essay-viewer-modal"
        >
          {/* Modal Header */}
          <div className="px-5 sm:px-8 py-5 border-b border-[#7A0000]/20 bg-[#ebd7bc] flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#7A0000] text-white flex items-center justify-center shrink-0">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#7A0000] text-white text-[10px] font-bold uppercase tracking-wider">
                    TOP 15 Finalist
                  </span>
                  <span className="text-xs text-[#7A0000]/80 flex items-center gap-1 font-bold">
                    <Building2 className="w-3.5 h-3.5" />
                    IPB University
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#7A0000] mt-0.5">
                  TOP 15 Finalist ESSAY APROTECH.FAIR IPB Competition
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#7A0000] hover:bg-[#ebd7bc] transition-colors border border-[#7A0000]/20 cursor-pointer"
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
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7A0000]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Scientific & Innovation Essay Concept</span>
                </div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-[#7A0000] leading-tight">
                  BEAQUA SYSTEM: INTEGRASI BIOTEKNOLOGI DAN PLATFORM DISTRIBUSI DALAM VALORISASI AQUATIC BY-PRODUCTS UNTUK PENGEMBANGAN BAHAN AKTIF KOSMETIK BERKELANJUTAN
                </h2>
                <p className="text-xs sm:text-sm text-[#7A0000]/80 leading-relaxed">
                  As part of the BeAqua System team, I contributed to developing the UI/UX prototype, conducting national and international benchmarking of similar projects, and identifying BeAqua’s competitive advantages through research and analysis.
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-2.5 py-1 rounded-lg bg-[#ebd7bc] text-[#7A0000] text-xs font-semibold border border-[#7A0000]/20">
                    UI/UX Conceptualization
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#ebd7bc] text-[#7A0000] text-xs font-semibold border border-[#7A0000]/20">
                    Fishbone Analysis
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#ebd7bc] text-[#7A0000] text-xs font-semibold border border-[#7A0000]/20">
                    Circular Economy
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#ebd7bc] text-[#7A0000] text-xs font-semibold border border-[#7A0000]/20">
                    Biotechnology
                  </span>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-[#7A0000]/20 shadow-md relative group aspect-video">
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
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#7A0000] flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#7A0000]" />
                Key Contributions by Joanna
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Contribution 1 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#ebd7bc] border border-[#7A0000]/20 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-[#7A0000] font-bold text-xs sm:text-sm">
                    <div className="w-7 h-7 rounded-lg bg-[#7A0000]/15 flex items-center justify-center shrink-0">
                      <Layers className="w-4 h-4" />
                    </div>
                    <span>UI/UX Prototype & Platform User Flow</span>
                  </div>
                  <p className="text-xs text-[#7A0000]/80 leading-relaxed">
                    Contributed to developing the UI/UX prototype and platform user flow architecture, structuring components across raw-material data, traceability, bioconversion, quality assurance, distribution, and commercialization.
                  </p>
                  <div className="pt-2 border-t border-[#7A0000]/15 flex flex-wrap gap-1.5">
                    {['UI/UX Prototype', 'User Flow Architecture', 'Bioconversion QA', 'Traceability'].map((pill, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-[#f4ebdb] text-[#7A0000] border border-[#7A0000]/20 font-medium">
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contribution 2 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#ebd7bc] border border-[#7A0000]/20 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-[#7A0000] font-bold text-xs sm:text-sm">
                    <div className="w-7 h-7 rounded-lg bg-[#7A0000]/15 flex items-center justify-center shrink-0">
                      <GitMerge className="w-4 h-4" />
                    </div>
                    <span>Benchmarking & Competitive Analysis</span>
                  </div>
                  <p className="text-xs text-[#7A0000]/80 leading-relaxed">
                    Conducted national and international benchmarking of similar sustainable biotechnology projects, identifying BeAqua’s competitive advantages through comprehensive research and analysis.
                  </p>
                  <div className="pt-2 border-t border-[#7A0000]/15 flex flex-wrap gap-1.5">
                    {['National Benchmarking', 'Global Benchmarking', 'Competitive Advantage', 'Market Research'].map((pill, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-[#f4ebdb] text-[#7A0000] border border-[#7A0000]/20 font-medium">
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Structured User Flow Stages Visualizer */}
            <div className="p-5 rounded-2xl bg-[#ebd7bc] border border-[#7A0000]/20 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs sm:text-sm font-bold text-[#7A0000] flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#7A0000]" />
                  BeAqua System 6-Stage User Flow Pipeline
                </h4>
                <span className="text-[10px] font-semibold text-[#7A0000]/80">
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
                    className="p-3 rounded-xl bg-[#f4ebdb] border border-[#7A0000]/20 space-y-1 text-center sm:text-left shadow-2xs"
                  >
                    <span className="text-[10px] font-black text-[#7A0000] block">
                      {item.step}
                    </span>
                    <h5 className="text-[11px] font-bold text-[#7A0000] leading-tight">
                      {item.title}
                    </h5>
                    <p className="text-[10px] text-[#7A0000]/70 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Competition Details Banner */}
            <div className="p-4 rounded-2xl bg-[#ebd7bc] border border-[#7A0000]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#7A0000] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-[#7A0000]">
                    TOP 15 Finalist ESSAY APROTECH.FAIR IPB Competition
                  </h5>
                  <p className="text-[11px] text-[#7A0000]/80">
                    Organized by IPB University • Circular Economy & Biotechnology Active Cosmetics
                  </p>
                </div>
              </div>

              <a
                href={essayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-[#7A0000] hover:bg-[#60050E] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-colors"
                id="btn-open-essay-doc"
              >
                <FileText className="w-4 h-4" />
                <span>Open Document / Essay Link</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-5 sm:px-8 py-4 bg-[#ebd7bc] border-t border-[#7A0000]/20 flex items-center justify-between gap-3">
            <div className="text-xs text-[#7A0000]/80">
              <span className="font-semibold text-[#7A0000]">BeAqua System</span> • Aprotech Fair 2026
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-[#f4ebdb] text-[#7A0000] hover:bg-[#ebd7bc] text-xs font-semibold border border-[#7A0000]/20 transition-colors cursor-pointer"
                id="btn-close-essay-footer"
              >
                Close
              </button>
              <a
                href={essayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#7A0000] hover:bg-[#60050E] text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer active:scale-[0.98]"
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
