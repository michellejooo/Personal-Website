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
  GitMerge,
  BookOpen,
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
  Award,
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
  GitMerge,
  BookOpen,
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
  Award,
};

export const SkillsSection: React.FC = () => {
  const categories = [
    'Technical & Data',
    'Communication & Leadership',
    'Languages & Fluency',
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
    <section id="skills" className="py-16 sm:py-20 relative bg-gray-50/80 dark:bg-[#0D121F] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/50 border border-red-200/60 dark:border-red-900/40 text-[#7A0000] dark:text-red-400 text-[11px] font-bold uppercase tracking-wider mb-2">
            <Code className="w-3.5 h-3.5" />
            <span>Competencies & Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Skills & Expertise
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-gray-600 dark:text-slate-300">
            Technical analytics, scientific writing, engineering, and leadership proficiencies
          </p>
          <div className="mt-2.5 w-12 h-1 bg-[#7A0000] mx-auto rounded-full" />
        </div>

        {/* Category Controls & Search Bar (Optimized for Mobile) */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-2.5 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-2 sm:p-3 rounded-2xl border border-gray-200/80 dark:border-slate-700/80 shadow-xs">
          {/* Category Tabs: Smooth scrollable row on mobile */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const count = SKILLS_DATA.filter((s) => s.category === cat).length;
              const isSelected = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                    isSelected
                      ? 'bg-[#7A0000] text-white shadow-xs'
                      : 'text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700/60'
                  }`}
                  id={`skill-cat-tab-${cat.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
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

          {/* Compact Search Box */}
          <div className="relative w-full md:w-56 shrink-0">
            <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-7 py-1.5 rounded-xl bg-gray-50/90 dark:bg-slate-900/90 border border-gray-200 dark:border-slate-700 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-[#7A0000]"
              id="skill-search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-white"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* Responsive Compact Skills Grid (2-column on mobile, up to 4-column on desktop) */}
        <motion.div
          layout
          className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-2.5"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const IconComponent = ICON_MAP[skill.iconName] || Code;
              const isHighlightSkill = skill.name === 'Scientific Paper' || skill.name === 'Proposal Writing';

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className={`p-2 sm:p-2.5 rounded-xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-xs border transition-all select-none group flex items-center gap-2 sm:gap-2.5 shadow-2xs ${
                    isHighlightSkill
                      ? 'border-red-200/90 dark:border-red-950/90 hover:border-[#7A0000]'
                      : 'border-gray-200/80 dark:border-slate-700/80 hover:border-[#7A0000]/40'
                  }`}
                  id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  title={skill.description}
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-red-50 dark:bg-red-950/60 text-[#7A0000] dark:text-red-400 flex items-center justify-center shrink-0 group-hover:bg-[#7A0000] group-hover:text-white transition-colors">
                    <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-[11px] sm:text-xs text-gray-900 dark:text-white truncate group-hover:text-[#7A0000] dark:group-hover:text-red-400 transition-colors">
                      {skill.name}
                    </h4>
                    <p className="text-[10px] text-gray-500 dark:text-slate-400 truncate">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-8 text-gray-500 dark:text-slate-400 text-xs">
            No skills found matching &ldquo;{searchQuery}&rdquo;.
          </div>
        )}
      </div>
    </section>
  );
};
