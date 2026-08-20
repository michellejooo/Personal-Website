import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILLS_DATA } from '../data/portfolioData';
import { Skill } from '../types';
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
  SlidersHorizontal,
  X,
  Check,
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
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSkillModal, setActiveSkillModal] = useState<Skill | null>(null);

  const categories = [
    'All',
    'Technical & Data',
    'Languages & Fluency',
    'Communication & Leadership',
    'Professional & Creative',
  ];

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#7A0000] dark:text-red-400">
            Technical Foundations
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Skills & Learning Journey
          </h2>
          <p className="mt-3 text-sm text-gray-600 dark:text-slate-300">
            Core competencies across programming, data analytics, leadership, teamwork, public speaking, and music performance
          </p>
          <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-[11px] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Active Student Practitioner • Continuously Learning</span>
          </div>
          <div className="mt-3 w-16 h-1 bg-[#7A0000] mx-auto rounded-full" />
        </div>

        {/* Filter Controls & Search */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 bg-white dark:bg-slate-800/90 p-3 rounded-2xl border border-gray-100 dark:border-slate-700/80 shadow-md">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#7A0000] text-white shadow-sm shadow-[#7A0000]/30'
                    : 'text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                }`}
                id={`skill-cat-tab-${cat.replace(/\s+/g, '-').toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
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

        {/* Skills Grid */}
        <motion.div layout className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const IconComponent = ICON_MAP[skill.iconName] || Code;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setActiveSkillModal(skill)}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-gray-100 dark:border-slate-700/80 shadow-xs hover:shadow-md hover:border-[#7A0000]/40 dark:hover:border-red-500/40 transition-all cursor-pointer group"
                >
                  <div className="flex items-start justify-between">
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
                    <span className="text-xs font-bold text-[#7A0000] dark:text-red-400 bg-red-50 dark:bg-red-950/40 px-2 py-0.5 rounded-md">
                      {skill.level}%
                    </span>
                  </div>

                  <p className="mt-3 text-xs text-gray-500 dark:text-slate-400 line-clamp-1">
                    {skill.description}
                  </p>

                  {/* Proficiency Meter */}
                  <div className="mt-3 w-full bg-gray-100 dark:bg-slate-700 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-[#7A0000] dark:bg-red-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-gray-500 dark:text-slate-400 text-sm">
            No skills found matching "{searchQuery}". Try searching for another keyword.
          </div>
        )}
      </div>

      {/* Skill Detail Modal */}
      {activeSkillModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-slate-800 rounded-3xl p-6 max-w-md w-full border border-gray-200 dark:border-slate-700 shadow-2xl relative"
          >
            <button
              onClick={() => setActiveSkillModal(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#7A0000] text-white flex items-center justify-center">
                {React.createElement(ICON_MAP[activeSkillModal.iconName] || Code, {
                  className: 'w-6 h-6',
                })}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {activeSkillModal.name}
                </h3>
                <span className="text-xs font-semibold text-[#7A0000] dark:text-red-400">
                  {activeSkillModal.category}
                </span>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              <div>
                <div className="flex justify-between text-xs font-bold text-gray-700 dark:text-slate-300 mb-1">
                  <span>Proficiency Level</span>
                  <span>{activeSkillModal.level}%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-[#7A0000] dark:bg-red-500 h-full rounded-full"
                    style={{ width: `${activeSkillModal.level}%` }}
                  />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 dark:bg-slate-900/60 border border-gray-100 dark:border-slate-700">
                <p className="text-xs font-bold text-gray-900 dark:text-white mb-1">Practical Application</p>
                <p className="text-xs text-gray-600 dark:text-slate-300 leading-relaxed">
                  {activeSkillModal.description}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                <Check className="w-4 h-4" />
                <span>Utilized in Joanna's active portfolio & academic projects</span>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setActiveSkillModal(null)}
                className="px-5 py-2 rounded-xl bg-[#7A0000] text-white text-xs font-semibold hover:bg-[#990000]"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};
