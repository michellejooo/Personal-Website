import React from 'react';
import { motion } from 'motion/react';
import { Home, ArrowLeft, AlertCircle } from 'lucide-react';

interface NotFoundViewProps {
  onReturnHome: () => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({ onReturnHome }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] dark:bg-[#0F172A] px-4 py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white dark:bg-slate-800 p-8 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-2xl text-center"
      >
        <div className="w-16 h-16 rounded-2xl bg-red-50 dark:bg-red-950/60 text-[#7A0000] dark:text-red-400 flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="w-8 h-8" />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-[#7A0000] dark:text-red-400">
          Error 404
        </span>

        <h1 className="mt-2 text-3xl font-black text-gray-900 dark:text-white">
          Page Not Found
        </h1>

        <p className="mt-3 text-xs text-gray-600 dark:text-slate-300 leading-relaxed">
          The page or route you are looking for does not exist in Joanna's IT Portfolio.
        </p>

        <div className="mt-8">
          <button
            onClick={onReturnHome}
            className="w-full py-3 rounded-xl bg-[#7A0000] hover:bg-[#990000] text-white text-xs font-bold shadow-md shadow-[#7A0000]/30 transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio Home</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
