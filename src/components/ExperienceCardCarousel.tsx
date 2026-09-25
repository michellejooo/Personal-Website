import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Eye, Image as ImageIcon } from 'lucide-react';

interface ExperienceCardCarouselProps {
  images: string[];
  caption?: string;
  role: string;
  isCustomPhoto?: boolean;
  onOpenModal: (index: number) => void;
  experienceId: string;
}

export const ExperienceCardCarousel: React.FC<ExperienceCardCarouselProps> = ({
  images,
  caption,
  role,
  isCustomPhoto = false,
  onOpenModal,
  experienceId,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-advance photo every 5 seconds (5000ms), pauses when hovered
  useEffect(() => {
    if (images.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, isHovered, currentIndex]);

  if (images.length === 0) return null;

  const currentPhoto = images[currentIndex] || images[0];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className="relative mt-3 mb-3 rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer group/photo border border-gray-100 dark:border-slate-700/60 bg-gray-100 dark:bg-slate-900 shadow-xs select-none"
      id={`experience-photo-card-${experienceId}`}
      onClick={() => onOpenModal(currentIndex)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title="Klik untuk melihat foto dokumentasi lengkap"
    >
      {/* 5-second animated progress bar */}
      {images.length > 1 && !isHovered && (
        <div className="absolute top-0 left-0 right-0 h-0.5 sm:h-1 bg-white/20 z-20 overflow-hidden pointer-events-none">
          <motion.div
            key={`bar-${currentIndex}`}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 5, ease: 'linear' }}
            className="h-full bg-gradient-to-r from-red-500 to-[#7A0000]"
          />
        </div>
      )}

      {/* Aspect Ratio Container (16:9) */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentPhoto}
            src={currentPhoto}
            alt={role}
            referrerPolicy="no-referrer"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.6 }}
            transition={{ duration: 0.35 }}
            className="w-full h-full object-cover transition-transform duration-500 group-hover/photo:scale-105"
          />
        </AnimatePresence>

        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10 opacity-85 group-hover/photo:opacity-95 transition-opacity flex flex-col justify-between p-2.5 sm:p-3 pointer-events-none">
          {/* Top header row inside photo */}
          <div className="flex items-center justify-between">
            {images.length > 1 ? (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-bold border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{currentIndex + 1} / {images.length}</span>
              </span>
            ) : <span />}
          </div>

          {/* Bottom caption and View badge */}
          <div className="flex items-end justify-between gap-2">
            <span className="text-[10px] sm:text-[11px] font-semibold text-white/95 truncate pr-1">
              {role}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/25 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-bold shrink-0">
              <Eye className="w-3 h-3" />
              <span>View</span>
            </span>
          </div>
        </div>

        {/* Prev / Next Buttons on Card (visible on mobile and PC) */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-1.5 sm:left-2 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md flex items-center justify-center transition-opacity opacity-90 sm:opacity-0 group-hover/photo:opacity-100 cursor-pointer z-10 active:scale-90"
              title="Foto Sebelumnya"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md flex items-center justify-center transition-opacity opacity-90 sm:opacity-0 group-hover/photo:opacity-100 cursor-pointer z-10 active:scale-90"
              title="Foto Berikutnya (Next)"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Slide Indicator Dots at bottom center */}
        {images.length > 1 && (
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-md z-10 pointer-events-auto">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(i);
                }}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  i === currentIndex ? 'w-4 bg-[#7A0000] dark:bg-red-400' : 'w-1.5 bg-white/50 hover:bg-white/80'
                }`}
                title={`Foto ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
