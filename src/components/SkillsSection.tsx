import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILLS_DATA } from '../data/portfolioData';
import {
  Code,
  Palette,
  FileCode,
  FileCheck,
  FileText,
  Component,
  Globe,
  Server,
  Cpu,
  Network,
  Layers,
  Terminal,
  Table,
  Binary,
  Database,
  BarChart2,
  PieChart,
  Sheet,
  GitBranch,
  UserCheck,
  Workflow,
  Activity,
  Share2,
  CheckSquare,
  Sparkles,
  Bot,
  Zap,
  Brain,
  MessageSquare,
  HardDrive,
  FolderKanban,
  GitCommit,
  Github,
  Monitor,
  Figma,
  Send,
  Search,
  X,
} from 'lucide-react';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Code,
  Palette,
  FileCode,
  FileCheck,
  FileText,
  Component,
  Globe,
  Server,
  Cpu,
  Network,
  Layers,
  Terminal,
  Table,
  Binary,
  Database,
  BarChart2,
  PieChart,
  Sheet,
  GitBranch,
  UserCheck,
  Workflow,
  Activity,
  Share2,
  CheckSquare,
  Sparkles,
  Bot,
  Zap,
  Brain,
  MessageSquare,
  HardDrive,
  FolderKanban,
  GitCommit,
  Github,
  Monitor,
  Figma,
  Send,
  Search,
};

export const SkillsSection: React.FC = () => {
  const categories = [
    'Technical & Data',
    'Languages & Fluency',
    'Communication & Leadership',
    'Professional & Creative',
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>('Technical & Data');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    const matchesCategory = skill.category === selectedCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#7A0000] dark:text-red-400">
            Technical & Soft Skills
          </span>
          <h2 className="mt-1.5 sm:mt-2 text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Skills & Competencies
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600 dark:text-slate-300">
            Core capabilities across data analytics, programming, languages, leadership, and creative execution
          </p>
          <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-[11px] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Active Student Practitioner • Continuously Learning</span>
          </div>
          <div className="mt-3 w-16 h-1 bg-[#7A0000] mx-auto rounded-full" />
        </div>

        {/* Category Controls & Search */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-3.5 bg-white dark:bg-slate-800/90 p-2.5 sm:p-3 rounded-2xl border border-gray-100 dark:border-slate-700/80 shadow-sm">
          {/* Category Tabs (Grouped without 'ALL') */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const count = SKILLS_DATA.filter((s) => s.category === cat).length;
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 sm:px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#7A0000] text-white shadow-sm shadow-[#7A0000]/30'
                      : 'text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                  }`}
                  id={`skill-cat-tab-${cat.replace(/\s+/g, '-').toLowerCase()}`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected
                        ? 'bg-white/20 text-white font-bold'
                        : 'bg-gray-200/70 dark:bg-slate-700 text-gray-500 dark:text-slate-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64 shrink-0">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-[#7A0000]"
              id="skill-search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Skills Grid - Clean display cards without pop-up windows */}
        <motion.div layout className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const IconComponent = ICON_MAP[skill.iconName] || Code;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-gray-100 dark:border-slate-700/80 shadow-xs hover:border-[#7A0000]/30 transition-all select-none group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/60 text-[#7A0000] dark:text-red-400 flex items-center justify-center group-hover:bg-[#7A0000] group-hover:text-white transition-colors shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-gray-900 dark:text-white group-hover:text-[#7A0000] dark:group-hover:text-red-400 transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-[10px] font-semibold text-gray-400 dark:text-slate-400 uppercase tracking-wider">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  <p className="mt-3 text-xs text-gray-500 dark:text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-gray-500 dark:text-slate-400 text-sm">
            No skills found matching "{searchQuery}".
          </div>
        )}
      </div>
    </section>
  );
};
