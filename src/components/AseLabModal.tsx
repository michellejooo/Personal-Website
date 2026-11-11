import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, Building2, Users, Code2, ExternalLink } from 'lucide-react';

interface AseLabModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ASE_PHOTOS = [
  {
    url: '/assets/aistudio/Screenshot_20261101_134205_Instagram_fb503b86.jpg',
    title: 'Pitching Kelompok Grid',
    subtitle: 'Advanced Software Engineering Laboratory',
    caption:
      'Dokumentasi resmi sesi pitching proyek CARES bersama tim Kelompok Grid di Advanced Software Engineering Laboratory Telkom University.',
    tag: 'Official Pitching Session',
  },
  {
    url: '/src/assets/images/poster_cares.03.27.jpeg',
    title: 'Official Poster — CARES Platform',
    subtitle: 'Campus Facility Management Platform',
    caption:
      'Poster resmi platform CARES yang dikembangkan di Advanced Software Engineering Laboratory untuk pelaporan fasilitas kampus.',
    tag: 'Flagship Lab Project',
  },
  {
    url: '/src/assets/images/cares_platform_preview_1793747514529.jpg',
    title: 'Platform UI & Dashboard Monitoring',
    subtitle: 'RESTful API & Backend System',
    caption:
      'Antarmuka pelaporan kerusakan dan dashboard monitoring analitik fasilitas kampus Telkom University.',
    tag: 'Backend & System Architecture',
  },
];

export const AseLabModal: React.FC<AseLabModalProps> = ({ isOpen, onClose }) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setActivePhotoIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentPhoto = ASE_PHOTOS[activePhotoIndex];

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

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-3xl max-h-[92vh] flex flex-col bg-[#F3E4CC] rounded-2xl sm:rounded-3xl shadow-2xl border border-[#D5B18C] overflow-hidden text-[#850000]"
          onClick={(e) => e.stopPropagation()}
          id="ase-lab-modal-room"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#ebd7bc] border-b border-[#D5B18C] shrink-0">
            <div className="flex items-center gap-2.5 min-w-0 pr-2">
              <div className="w-8 h-8 rounded-xl bg-[#850000] text-[#F3E4CC] flex items-center justify-center shrink-0 shadow-2xs">
                <Building2 className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="px-2 py-0.5 rounded-full bg-[#850000] text-[#F3E4CC] text-[9px] sm:text-[10px] font-metadata font-bold uppercase tracking-wider">
                    ASE Lab Room
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#ebd7bc] text-[#850000] text-[9px] sm:text-[10px] font-metadata font-semibold border border-[#D5B18C]">
                    Kelompok Grid
                  </span>
                </div>
                <h3 className="text-xs sm:text-base font-heading font-bold text-[#850000] truncate mt-0.5">
                  Advanced Software Engineering Laboratory
                </h3>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-[#850000] hover:bg-[#F3E4CC] transition-colors border border-[#D5B18C] cursor-pointer shrink-0"
              title="Tutup (Esc)"
              id="close-ase-modal"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-5 flex flex-col gap-3">
            {/* Main Photo Display */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-black/95 border border-[#D5B18C] flex items-center justify-center min-h-[300px] max-h-[58vh] sm:max-h-[62vh] select-none shadow-inner">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentPhoto.url}
                  src={currentPhoto.url}
                  alt={currentPhoto.title}
                  referrerPolicy="no-referrer"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="w-full h-auto max-h-[56vh] sm:max-h-[60vh] object-contain rounded-xl p-1"
                />
              </AnimatePresence>

              {/* Tag Pill in photo */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-metadata font-bold flex items-center gap-1.5 shadow-sm pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{currentPhoto.tag}</span>
              </div>
            </div>

            {/* Photo Caption Strip */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#ebd7bc] border border-[#D5B18C] space-y-1">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <h4 className="text-sm sm:text-base font-heading font-bold text-[#850000]">
                  {currentPhoto.title}
                </h4>
                <span className="text-[10px] sm:text-[11px] font-metadata font-semibold text-[#850000] bg-[#F3E4CC] px-2.5 py-0.5 rounded-full border border-[#D5B18C]">
                  {currentPhoto.subtitle}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-body text-[#63352C] leading-relaxed">
                {currentPhoto.caption}
              </p>
            </div>

            {/* Thumbnail Selector Strip if multiple documentation photos available */}
            {ASE_PHOTOS.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-0.5">
                {ASE_PHOTOS.map((photo, i) => (
                  <button
                    key={photo.url}
                    type="button"
                    onClick={() => setActivePhotoIndex(i)}
                    className={`relative w-20 h-14 sm:w-24 sm:h-16 rounded-lg overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                      i === activePhotoIndex
                        ? 'border-[#850000] shadow-md scale-105'
                        : 'border-[#D5B18C] opacity-65 hover:opacity-100 hover:border-[#850000]/60'
                    }`}
                    title={photo.title}
                  >
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="px-4 sm:px-6 py-3 border-t border-[#D5B18C] bg-[#ebd7bc] flex items-center justify-between gap-2 shrink-0">
            <div className="flex items-center gap-2 text-xs font-metadata text-[#63352C]">
              <Users className="w-3.5 h-3.5 text-[#850000]" />
              <span className="hidden sm:inline">Kelompok Grid • Telkom University</span>
            </div>

            <div className="flex items-center gap-2 ml-auto">
              <a
                href={currentPhoto.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 sm:py-2 rounded-xl bg-[#F3E4CC] hover:bg-[#FAF5EB] text-[#850000] text-xs font-heading font-bold flex items-center gap-1.5 border border-[#D5B18C] transition-colors cursor-pointer"
                title="Buka foto resolusi penuh di tab baru"
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Ukuran Penuh</span>
                <ExternalLink className="w-3 h-3 opacity-75" />
              </a>

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
