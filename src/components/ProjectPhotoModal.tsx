import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  FolderGit2,
  Image as ImageIcon,
} from 'lucide-react';
import { Project } from '../types';

export interface ProofPhotoItem {
  url: string;
  caption?: string;
}

interface ProjectPhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
  initialIndex?: number;
}

export const ProjectPhotoModal: React.FC<ProjectPhotoModalProps> = ({
  isOpen,
  onClose,
  project,
  initialIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [allPhotos, setAllPhotos] = useState<ProofPhotoItem[]>([]);

  // Compile official proof photos when project changes or modal opens
  useEffect(() => {
    if (!project) {
      setAllPhotos([]);
      return;
    }

    const defaultList: ProofPhotoItem[] = [];

    // Add proofPhotos if defined
    if (project.proofPhotos && project.proofPhotos.length > 0) {
      project.proofPhotos.forEach((item) => {
        defaultList.push({
          url: item.url,
          caption: item.caption,
        });
      });
    } else {
      // Fallback to posterImage & image
      if (project.posterImage) {
        defaultList.push({
          url: project.posterImage,
          caption: `Official Poster — ${project.title}`,
        });
      }
      if (project.image && project.image !== project.posterImage) {
        defaultList.push({
          url: project.image,
          caption: `Main Interface Preview — ${project.title}`,
        });
      }
    }

    setAllPhotos(defaultList);
    setCurrentIndex(Math.min(initialIndex, Math.max(0, defaultList.length - 1)));
  }, [project, isOpen, initialIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, allPhotos.length]);

  if (!isOpen || !project) return null;

  const currentItem = allPhotos[currentIndex] || allPhotos[0];

  const handleNext = () => {
    if (allPhotos.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % allPhotos.length);
  };

  const handlePrev = () => {
    if (allPhotos.length <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + allPhotos.length) % allPhotos.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md overflow-y-auto">
        {/* Backdrop click to close */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0"
          onClick={onClose}
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', duration: 0.35, bounce: 0.1 }}
          className="relative z-10 w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#F3E4CC] rounded-2xl sm:rounded-3xl shadow-2xl border border-[#D5B18C] text-[#850000] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-[#D5B18C] bg-[#ebd7bc] shrink-0">
            <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 pr-2">
              <div className="w-8 h-8 rounded-xl bg-[#850000] text-[#F3E4CC] flex items-center justify-center shrink-0 shadow-2xs">
                <FolderGit2 className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="px-2 py-0.5 rounded-full bg-[#850000] text-[#F3E4CC] text-[9px] sm:text-[10px] font-metadata font-bold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#ebd7bc] text-[#850000] text-[9px] sm:text-[10px] font-metadata font-semibold border border-[#D5B18C]">
                    {allPhotos.length} Bukti Foto
                  </span>
                </div>
                <h3 className="text-xs sm:text-base font-heading font-bold text-[#850000] truncate mt-0.5 max-w-[260px] sm:max-w-md md:max-w-lg">
                  {project.title}
                </h3>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-[#850000] hover:bg-[#F3E4CC] transition-colors border border-[#D5B18C] cursor-pointer shrink-0"
              title="Tutup (Esc)"
              id="btn-close-project-photo-modal"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Main Photo Viewing Area */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-5 flex flex-col gap-3">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-black/95 border border-[#D5B18C] flex items-center justify-center min-h-[240px] max-h-[50vh] sm:max-h-[56vh] group select-none">
              {/* Photo Display */}
              <AnimatePresence mode="wait">
                {currentItem ? (
                  <motion.img
                    key={currentItem.url}
                    src={currentItem.url}
                    alt={currentItem.caption || project.title}
                    referrerPolicy="no-referrer"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-auto max-h-[48vh] sm:max-h-[54vh] object-contain rounded-xl p-1"
                  />
                ) : (
                  <div className="py-16 text-center text-white/60">
                    <ImageIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-xs">Belum ada foto bukti</p>
                  </div>
                )}
              </AnimatePresence>

              {/* Prev Button */}
              {allPhotos.length > 1 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-90 border border-white/20 z-20"
                  title="Foto Sebelumnya"
                  id="btn-prev-project-photo"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              )}

              {/* Next Button */}
              {allPhotos.length > 1 && (
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-90 border border-white/20 z-20"
                  title="Foto Berikutnya"
                  id="btn-next-project-photo"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              )}

              {/* Photo Counter Pill (Top Left) */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-metadata font-bold flex items-center gap-1.5 shadow-sm pointer-events-none z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{currentIndex + 1} / {allPhotos.length} Bukti Foto</span>
              </div>
            </div>

            {/* Photo Caption Strip */}
            {currentItem && (
              <div className="p-3 rounded-xl bg-[#ebd7bc] border border-[#D5B18C] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#850000] shrink-0" />
                  <p className="text-xs sm:text-sm font-heading font-bold text-[#850000] leading-snug">
                    {currentItem.caption || `Bukti Dokumentasi Proyek — Foto ${currentIndex + 1}`}
                  </p>
                </div>
              </div>
            )}

            {/* Thumbnail Strip */}
            {allPhotos.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-0.5">
                {allPhotos.map((photo, i) => (
                  <button
                    key={`${photo.url}-${i}`}
                    type="button"
                    onClick={() => setCurrentIndex(i)}
                    className={`relative w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                      i === currentIndex
                        ? 'border-[#850000] shadow-md scale-105'
                        : 'border-[#D5B18C] opacity-65 hover:opacity-100 hover:border-[#850000]/60'
                    }`}
                    title={photo.caption || `Pilih Foto ${i + 1}`}
                  >
                    <img
                      src={photo.url}
                      alt={`Thumbnail ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Modal Footer (Clean, no upload button) */}
          <div className="px-4 sm:px-6 py-3 border-t border-[#D5B18C] bg-[#ebd7bc] flex items-center justify-between gap-2 shrink-0">
            <div className="text-[11px] sm:text-xs font-metadata text-[#63352C]">
              {allPhotos.length} Foto Dokumentasi Resmi
            </div>

            {/* Right: Open full resolution & Close */}
            <div className="flex items-center gap-2">
              {currentItem?.url && (
                <a
                  href={currentItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 sm:py-2 rounded-xl bg-[#ebd7bc] hover:bg-[#ebd7bc]/80 text-[#850000] text-xs font-heading font-bold flex items-center gap-1.5 border border-[#D5B18C] transition-colors cursor-pointer"
                  title="Buka foto resolusi penuh di tab baru"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Ukuran Penuh</span>
                </a>
              )}
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-1.5 sm:py-2 rounded-xl bg-[#850000] hover:bg-[#6b0000] text-[#F3E4CC] text-xs font-heading font-bold shadow-xs transition-colors cursor-pointer active:scale-[0.98]"
              >
                Tutup
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
