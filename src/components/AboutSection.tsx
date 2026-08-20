import React from 'react';
import { motion } from 'motion/react';
import { Code, LineChart, Cpu, Sparkles } from 'lucide-react';
import { MusicSection } from './MusicSection';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      title: 'Full-Stack Web Development',
      description: 'Designing and building responsive, performant web applications using React, Next.js, Node.js, and modern CSS frameworks.',
      icon: Code,
    },
    {
      title: 'Data Analytics',
      description: 'Analyzing datasets with Python, SQL, Pandas, and visualization tools to transform complex data into actionable insights.',
      icon: LineChart,
    },
    {
      title: 'System Analysis',
      description: 'Mapping organizational requirements into robust software architectures through UML, BPMN, and relational schema designs.',
      icon: Cpu,
    },
    {
      title: 'Artificial Intelligence',
      description: 'Exploring LLMs, prompt engineering, machine learning basics, and AI workflows to enhance human productivity.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="about" className="py-16 relative bg-slate-50/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Four Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-gray-100 dark:border-slate-700/80 shadow-md hover:border-[#7A0000]/50 dark:hover:border-red-500/50 transition-all hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#7A0000]/10 dark:bg-red-950/60 text-[#7A0000] dark:text-red-400 flex items-center justify-center mb-4 group-hover:bg-[#7A0000] group-hover:text-white transition-colors">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-xs text-gray-600 dark:text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Embedded Study Soundtrack */}
        <MusicSection />
      </div>
    </section>
  );
};
