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
      skill.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-14 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#7A0000] dark:text-red-400">
            Capabilities & Competencies
          </span>
          <h2 className="mt-1.5 sm:mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Skills & Expertise
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-slate-300">
            Core skills across technical data analysis, languages, communication, and creative tools
          </p>
          <div className="mt-3 w-16 h-1 bg-[#7A0000] mx-auto rounded-full" />
        </div>

        {/* Category Controls & Search Bar */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-3 bg-white dark:bg-slate-800/90 p-2.5 sm:p-3 rounded-2xl border border-gray-100 dark:border-slate-700/80 shadow-xs">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const count = SKILLS_DATA.filter((s) => s.category === cat).length;
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 sm:py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
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
          <div className="relative w-full md:w-60 shrink-0">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-1.5 sm:py-2 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-[#7A0000]"
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

        {/* Compact Skills Grid - 3 columns across */}
        <motion.div
          layout
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-3.5"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const IconComponent = ICON_MAP[skill.iconName] || Code;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="p-3 sm:p-3.5 rounded-2xl bg-white dark:bg-slate-800/90 border border-gray-100 dark:border-slate-700/80 shadow-2xs hover:border-[#7A0000]/40 hover:shadow-xs transition-all select-none group flex items-center gap-3"
                  id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/60 text-[#7A0000] dark:text-red-400 flex items-center justify-center shrink-0 group-hover:bg-[#7A0000] group-hover:text-white transition-all shadow-2xs">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white truncate group-hover:text-[#7A0000] dark:group-hover:text-red-400 transition-colors">
                      {skill.name}
                    </h4>
                    <p className="text-[10px] sm:text-[11px] font-medium text-gray-400 dark:text-slate-400 truncate mt-0.5">
                      {skill.category}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-10 text-gray-500 dark:text-slate-400 text-xs sm:text-sm">
            No skills found matching &ldquo;{searchQuery}&rdquo;.
          </div>
        )}
      </div>
    </section>
  );
};
