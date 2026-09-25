import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Calendar,
  Building2,
  Upload,
  RotateCcw,
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { ExperienceItem } from '../types';

interface ExperiencePhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  experience: ExperienceItem | null;
  images: string[];
  initialIndex?: number;
  onUploadPhoto?: (experienceId: string, photoUrl: string) => void;
  onResetPhoto?: (experienceId: string) => void;
  isCustomPhoto?: boolean;
}

export const ExperiencePhotoModal: React.FC<ExperiencePhotoModalProps> = ({
  isOpen,
  onClose,
  experience,
  images = [],
  initialIndex = 0,
  onUploadPhoto,
  onResetPhoto,
  isCustomPhoto = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync initialIndex when modal opens or experience changes
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setIsAutoPlaying(true);
    }
  }, [isOpen, initialIndex, experience?.id]);

  // Clamp currentIndex if images change
  useEffect(() => {
    if (images.length > 0 && currentIndex >= images.length) {
      setCurrentIndex(0);
    }
  }, [images.length, currentIndex]);

  // Auto-advance photo every 5 seconds (5000ms)
  useEffect(() => {
    if (!isOpen || !isAutoPlaying || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isOpen, isAutoPlaying, images.length, currentIndex]);

  // Keyboard navigation (Escape to close, ArrowLeft / ArrowRight to slide)
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
  }, [isOpen, images.length, currentIndex]);

  if (!experience) return null;

  const handleNext = () => {
    if (images.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    if (images.length <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onUploadPhoto) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          onUploadPhoto(experience.id, reader.result);
          setCurrentIndex(0);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const currentPhoto = images[currentIndex] || '';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Window Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 dark:border-slate-800 overflow-hidden z-10 my-auto"
            id={`experience-photo-modal-${experience.id}`}
          >
            {/* Window Title Bar - dots on left, close button on right */}
            <div className="px-4 sm:px-6 py-3.5 bg-gray-50/90 dark:bg-slate-800/80 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between">
              {/* Window Dots */}
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-400 inline-block" />
                <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-amber-400 inline-block" />
                <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-emerald-400 inline-block" />
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 dark:bg-slate-700/60 text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors flex items-center justify-center cursor-pointer"
                title="Tutup (Esc)"
                id="close-experience-photo-modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 space-y-4">
              {/* Photo Display Frame with Next / Prev buttons and 5s auto slide */}
              <div
                className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950 border border-gray-200 dark:border-slate-800 flex items-center justify-center min-h-[220px] max-h-[52vh] sm:max-h-[58vh] group select-none"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                {/* 5-second animated progress indicator bar */}
                {images.length > 1 && isAutoPlaying && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 z-30 overflow-hidden">
                    <motion.div
                      key={`progress-${currentIndex}`}
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 5, ease: 'linear' }}
                      className="h-full bg-gradient-to-r from-red-500 to-[#7A0000]"
                    />
                  </div>
                )}

                {/* Main Photo with animation */}
                <AnimatePresence mode="wait">
                  {currentPhoto ? (
                    <motion.img
                      key={currentPhoto}
                      src={currentPhoto}
                      alt={experience.role}
                      referrerPolicy="no-referrer"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-auto max-h-[50vh] sm:max-h-[56vh] object-contain rounded-xl"
                    />
                  ) : (
                    <div className="py-16 text-center text-gray-400">
                      <ImageIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p className="text-xs">Belum ada foto dokumentasi</p>
                    </div>
                  )}
                </AnimatePresence>

                {/* Left (Prev) Arrow Button */}
                {images.length > 1 && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className="absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-90 border border-white/20 z-20"
                    title="Foto Sebelumnya (<)"
                    id="modal-prev-photo-btn"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                )}

                {/* Right (Next) Arrow Button */}
                {images.length > 1 && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-90 border border-white/20 z-20"
                    title="Foto Berikutnya (>)"
                    id="modal-next-photo-btn"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                )}

                {/* Status Badges & Photo Counter */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-20">
                  {images.length > 1 ? (
                    <div className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{currentIndex + 1} / {images.length} Foto</span>
                    </div>
                  ) : <div />}
                </div>

                {/* Slide Indicator Dots */}
                {images.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 z-20">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setCurrentIndex(i)}
                        className={`h-2 rounded-full transition-all cursor-pointer ${
                          i === currentIndex
                            ? 'w-6 bg-[#7A0000] dark:bg-red-400'
                            : 'w-2 bg-white/50 hover:bg-white/80'
                        }`}
                        title={`Buka Foto ${i + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Experience Details */}
              <div className="pt-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-50 dark:bg-red-950/50 text-[#7A0000] dark:text-red-300 text-[10px] sm:text-xs font-bold">
                    <Calendar className="w-3 h-3 text-[#7A0000] dark:text-red-400" />
                    <span>{experience.period}</span>
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-gray-900 dark:text-white">
                  {experience.role}
                </h3>

                <p className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-slate-300 flex items-center gap-1.5 mt-0.5">
                  <Building2 className="w-3.5 h-3.5 text-[#7A0000] dark:text-red-400 shrink-0" />
                  <span>{experience.organization}</span>
                </p>
              </div>

              {/* Action Buttons: Next Button, Upload photo, reset, and close */}
              <div className="pt-2 border-t border-gray-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-3 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-700 dark:text-slate-200 text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
                    id={`upload-photo-btn-${experience.id}`}
                  >
                    <Upload className="w-3.5 h-3.5 text-[#7A0000] dark:text-red-400" />
                    <span>Unggah / Tambah Foto</span>
                  </button>

                  {isCustomPhoto && onResetPhoto && (
                    <button
                      type="button"
                      onClick={() => onResetPhoto(experience.id)}
                      className="px-3 py-2 rounded-xl bg-red-50 hover:bg-red-100 dark:bg-red-950/50 dark:hover:bg-red-900/50 text-[#7A0000] dark:text-red-300 text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
                      title="Kembalikan ke foto dokumentasi awal"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Reset</span>
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2 ml-auto">
                  {images.length > 1 && (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-3.5 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-800 dark:text-slate-100 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1"
                      id="modal-next-btn-footer"
                    >
                      <span>Next Foto</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2 rounded-xl bg-[#7A0000] hover:bg-[#990000] text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
                    id="close-modal-btn"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
