import React from 'react';
import { motion } from 'motion/react';
import { LANGUAGES_DATA } from '../data/portfolioData';
import { Globe, Languages, CheckCircle } from 'lucide-react';

export const LanguagesSection: React.FC = () => {
  return (
    <section id="languages" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#7A0000] dark:text-red-400">
            Multilingual Fluency
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Languages
          </h2>
          <p className="mt-3 text-sm text-gray-600 dark:text-slate-300">
            Global communication proficiency enabling international collaboration and technical discourse
          </p>
          <div className="mt-3 w-16 h-1 bg-[#7A0000] mx-auto rounded-full" />
        </div>

        {/* Language Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {LANGUAGES_DATA.map((lang, idx) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-white dark:bg-slate-800/90 border border-gray-100 dark:border-slate-700/80 shadow-lg hover:border-[#7A0000]/40 transition-all group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#7A0000] dark:group-hover:text-red-400 transition-colors">
                    {lang.name}
                  </h3>
                  <span className="text-xs font-bold text-[#7A0000] dark:text-red-400 bg-red-50 dark:bg-red-950/40 px-2 py-0.5 rounded-md inline-block mt-1">
                    {lang.proficiency}
                  </span>
                </div>
                <span className="text-base font-extrabold text-gray-900 dark:text-white">
                  {lang.percentage}%
                </span>
              </div>

              <p className="mt-4 text-xs text-gray-600 dark:text-slate-300 leading-relaxed">
                {lang.details}
              </p>

              {/* Progress Indicator */}
              <div className="mt-5">
                <div className="w-full bg-gray-100 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-gradient-to-r from-[#7A0000] to-red-500 h-full rounded-full"
                  />
                </div>
              </div>

              <div className="mt-4 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Professional Spoken & Written Standard</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
