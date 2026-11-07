import React from 'react';
import { motion } from 'motion/react';
import { Home, ArrowLeft, AlertCircle } from 'lucide-react';

interface NotFoundViewProps {
  onReturnHome: () => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({ onReturnHome }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e2c28e] text-[#7A0000] px-4 py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-[#f4ebdb] p-8 rounded-3xl border border-[#7A0000]/25 shadow-2xl text-center"
      >
        <div className="w-16 h-16 rounded-2xl bg-[#ebd7bc] text-[#7A0000] flex items-center justify-center mx-auto mb-4 border border-[#7A0000]/20">
          <AlertCircle className="w-8 h-8" />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-[#7A0000]">
          Error 404
        </span>

        <h1 className="mt-2 text-3xl font-black text-[#7A0000]">
          Page Not Found
        </h1>

        <p className="mt-3 text-xs text-[#7A0000]/80 leading-relaxed">
          The page or route you are looking for does not exist in Joanna&apos;s IT Portfolio.
        </p>

        <div className="mt-8">
          <button
            onClick={onReturnHome}
            className="w-full py-3 rounded-xl bg-[#7A0000] hover:bg-[#60050E] text-white text-xs font-bold shadow-md shadow-[#7A0000]/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio Home</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
