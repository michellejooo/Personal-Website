import React from 'react';
import { motion } from 'motion/react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#7A0000] dark:text-red-400">
            Leadership & Organizational
          </span>
          <h2 className="mt-1.5 sm:mt-2 text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Organizational Experience
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600 dark:text-slate-300">
            Organizational leadership, administrative coordination, and team collaboration roles
          </p>
          <div className="mt-3 w-16 h-1 bg-[#7A0000] mx-auto rounded-full" />
        </div>

        {/* Vertical Timeline */}
        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto relative">
          {/* Central Vertical Connector Line */}
          <div className="absolute left-3.5 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#7A0000] via-red-300 dark:via-red-900 to-gray-200 dark:to-slate-800 transform sm:-translate-x-1/2" />

          <div className="space-y-6 sm:space-y-12">
            {EXPERIENCE_DATA.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Point Node */}
                  <div className="absolute left-3.5 sm:left-1/2 transform -translate-x-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#7A0000] text-white border-2 sm:border-4 border-white dark:border-[#0F172A] shadow-md flex items-center justify-center z-10 top-3 sm:top-4">
                    <Briefcase className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </div>

                  {/* Content Card Container */}
                  <div className="ml-8 sm:ml-0 sm:w-1/2 sm:px-6 w-[calc(100%-2rem)]">
                    <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800/90 border border-gray-100 dark:border-slate-700/80 shadow-md hover:border-[#7A0000]/40 transition-all group">
                      <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-red-50 dark:bg-red-950/50 text-[#7A0000] dark:text-red-300 text-[10px] sm:text-xs font-bold">
                          <Calendar className="w-3 h-3 text-[#7A0000] dark:text-red-400" />
                          <span>{item.period}</span>
                        </span>
                      </div>

                      <h3 className="text-base sm:text-xl font-extrabold text-gray-900 dark:text-white group-hover:text-[#7A0000] dark:group-hover:text-red-400 transition-colors leading-snug">
                        {item.role}
                      </h3>

                      <p className="text-[11px] sm:text-xs font-bold text-gray-500 dark:text-slate-400 flex items-center gap-1.5 mt-1">
                        <Building2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#7A0000] shrink-0" />
                        <span className="truncate">{item.organization}</span>
                      </p>

                      {item.description && (
                        <p className="mt-2.5 text-[11px] sm:text-xs text-gray-600 dark:text-slate-300 leading-relaxed">
                          {item.description}
                        </p>
                      )}

                      <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2">
                        {item.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2 text-[11px] sm:text-xs text-gray-600 dark:text-slate-300 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#7A0000] dark:text-red-400 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 pt-3 border-t border-gray-100 dark:border-slate-700/80 flex flex-wrap gap-1">
                        {item.skillsUsed.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-slate-700/70 text-[9px] sm:text-[10px] font-semibold text-gray-600 dark:text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
