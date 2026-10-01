import React from 'react';
import { motion } from 'motion/react';
import { SKILL_GROUPS_DATA } from '../data/portfolioData';
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
  UserCheck,
  Workflow,
  Activity,
  Share2,
  Sparkles,
  Bot,
  Zap,
  Brain,
  MessageSquare,
  Award,
  ChevronRight,
  Boxes,
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
  UserCheck,
  Workflow,
  Activity,
  Share2,
  Sparkles,
  Bot,
  Zap,
  Brain,
  MessageSquare,
  Award,
  Boxes,
};

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 relative bg-gray-50/80 dark:bg-[#0D121F] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/50 border border-red-200/60 dark:border-red-900/40 text-[#7A0000] dark:text-red-400 text-[11px] font-bold uppercase tracking-wider mb-2">
            <Boxes className="w-3.5 h-3.5" />
            <span>Structured Competencies & Stack</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Skills & Expertise
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-gray-600 dark:text-slate-300">
            Categorized technical stack, development tools, programming languages, and soft skills
          </p>
          <div className="mt-2.5 w-12 h-1 bg-[#7A0000] mx-auto rounded-full" />
        </div>

        {/* Grouped Skills Cards Grid - Compact and cleanly aligned without empty voids */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 items-start">
          {SKILL_GROUPS_DATA.map((group, groupIdx) => {
            const GroupIcon = ICON_MAP[group.iconName] || Boxes;
            const totalSkillsInGroup = group.subGroups.reduce(
              (acc, sub) => acc + sub.skills.length,
              0
            );

            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: groupIdx * 0.04 }}
                className="rounded-xl sm:rounded-2xl bg-white dark:bg-slate-800/95 border border-gray-200/90 dark:border-slate-700 shadow-sm hover:border-[#7A0000]/50 dark:hover:border-red-500/50 transition-all flex flex-col overflow-hidden group"
                id={`skill-group-${group.id}`}
              >
                {/* Card Header Strip - Compact */}
                <div className="p-3.5 sm:p-4 border-b border-gray-100 dark:border-slate-700/80 bg-slate-50/50 dark:bg-slate-800/50 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-red-50 dark:bg-red-950/60 text-[#7A0000] dark:text-red-400 flex items-center justify-center shrink-0 group-hover:bg-[#7A0000] group-hover:text-white transition-colors shadow-2xs">
                      <GroupIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white tracking-tight leading-snug group-hover:text-[#7A0000] dark:group-hover:text-red-400 transition-colors">
                        {group.title}
                      </h3>
                      <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                        {group.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-0.5 shrink-0">
                    <span className="px-2 py-0.5 rounded-full bg-red-50 dark:bg-red-950/60 text-[#7A0000] dark:text-red-300 text-[10px] font-bold border border-red-200/60 dark:border-red-900/40">
                      {group.badge}
                    </span>
                    <span className="text-[9px] text-gray-400 dark:text-slate-500 font-medium">
                      {totalSkillsInGroup} skills
                    </span>
                  </div>
                </div>

                {/* Card Body: Structured Sub-groups - Compact */}
                <div className="p-3.5 sm:p-4 space-y-3">
                  {group.subGroups.map((subGroup, subIdx) => (
                    <div key={subIdx} className="space-y-1.5">
                      {/* Sub-group Label */}
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] sm:text-[11px] font-bold text-[#7A0000] dark:text-red-400 uppercase tracking-wider flex items-center gap-1">
                          <ChevronRight className="w-3 h-3" />
                          <span>{subGroup.label}</span>
                        </span>
                        <div className="h-px bg-gray-100 dark:bg-slate-700/60 flex-1" />
                      </div>

                      {/* Clean Compact Skill Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {subGroup.skills.map((skill) => (
                          <span
                            key={skill.name}
                            className="px-2.5 py-1 rounded-lg border border-gray-200/90 dark:border-slate-700/80 bg-gray-50/90 dark:bg-slate-900/60 text-gray-800 dark:text-slate-200 text-[11px] font-semibold hover:border-[#7A0000]/60 dark:hover:border-red-500/60 hover:text-[#7A0000] dark:hover:text-red-400 hover:bg-white dark:hover:bg-slate-800 transition-all select-none shadow-2xs"
                          >
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
