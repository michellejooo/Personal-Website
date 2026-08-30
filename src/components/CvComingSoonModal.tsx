import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, X } from 'lucide-react';

interface CvComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvComingSoonModal: React.FC<CvComingSoonModalProps> = ({
  isOpen,
  onClose,
}) => {
  // Close on Escape key press
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
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          />

          {/* Modal / Window Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-slate-800 overflow-hidden z-10"
            id="cv-coming-soon-window"
          >
            {/* Window Title Bar */}
            <div className="px-5 py-3.5 bg-gray-50/90 dark:bg-slate-800/80 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between">
              {/* Window Dots */}
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400/90 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-400/90 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-400/90 inline-block" />
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-700 dark:hover:text-slate-200 hover:bg-gray-200/60 dark:hover:bg-slate-700/60 transition-colors ml-auto"
                aria-label="Close window"
                id="cv-modal-close-btn"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Window Content */}
            <div className="p-6 sm:p-7 text-center flex flex-col items-center">
              {/* Icon Container */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-red-50 dark:bg-red-950/50 text-[#7A0000] dark:text-red-400 flex items-center justify-center shadow-inner border border-red-100 dark:border-red-900/40 mb-4">
                <Clock className="w-7 h-7 sm:w-8 sm:h-8 animate-pulse" />
              </div>

              {/* Heading */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                Coming Soon!
              </h3>

              {/* Brief text */}
              <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
                Joanna&apos;s CV / Resume is currently being updated.
              </p>

              {/* Action Button */}
              <div className="mt-6 w-full">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2.5 px-6 rounded-xl bg-[#7A0000] hover:bg-[#990000] text-white font-bold text-xs shadow-md shadow-[#7A0000]/25 transition-all"
                  id="cv-modal-ok-btn"
                >
                  Got It
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
