import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILL_GROUPS_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';
import { Certification } from '../types';
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
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  ZoomIn,
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
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="skills" className="py-16 sm:py-20 relative bg-transparent transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3E4CC] border border-[#D5B18C] text-[#850000] font-metadata text-[11px] uppercase tracking-wider mb-2">
            <Boxes className="w-3.5 h-3.5" />
            <span>02 / Structured Stack</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-[#850000] tracking-tight">
            Skills &amp; Expertise
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm font-body text-[#63352C]">
            Categorized technical stack, development tools, programming languages, and soft skills
          </p>
          <div className="mt-2.5 w-12 h-1 bg-[#850000] mx-auto rounded-full" />
        </div>

        {/* Grouped Skills Cards Grid */}
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
                className="rounded-xl sm:rounded-2xl bg-[#F3E4CC] border border-[#D5B18C] shadow-xs hover:border-[#850000]/50 hover:-translate-y-0.5 transition-all flex flex-col overflow-hidden group"
                id={`skill-group-${group.id}`}
              >
                {/* Card Header Strip */}
                <div className="p-3.5 sm:p-4 border-b border-[#D5B18C] bg-[#ebd7bc]/70 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#850000]/10 text-[#850000] border border-[#D5B18C] flex items-center justify-center shrink-0 group-hover:bg-[#850000] group-hover:text-[#F3E4CC] transition-colors shadow-2xs">
                      <GroupIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-heading font-bold text-[#850000] tracking-tight leading-snug">
                        {group.title}
                      </h3>
                      <p className="text-[10px] sm:text-[11px] font-body text-[#63352C] line-clamp-1 mt-0.5">
                        {group.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-0.5 shrink-0">
                    <span className="px-2 py-0.5 rounded-full bg-[#F3E4CC] text-[#850000] font-metadata text-[10px] font-bold border border-[#D5B18C]">
                      {group.badge}
                    </span>
                    <span className="text-[9px] font-metadata text-[#63352C]">
                      {totalSkillsInGroup} skills
                    </span>
                  </div>
                </div>

                {/* Card Body: Structured Sub-groups */}
                <div className="p-3.5 sm:p-4 space-y-3">
                  {group.subGroups.map((subGroup, subIdx) => (
                    <div key={subIdx} className="space-y-1.5">
                      {/* Sub-group Label */}
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] sm:text-[11px] font-metadata font-bold text-[#850000] uppercase tracking-wider flex items-center gap-1">
                          <ChevronRight className="w-3 h-3 text-[#850000]" />
                          <span>{subGroup.label}</span>
                        </span>
                        <div className="h-px bg-[#D5B18C] flex-1" />
                      </div>

                      {/* Clean Compact Skill Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {subGroup.skills.map((skill) => (
                          <span
                            key={skill.name}
                            className="px-2.5 py-1 rounded-lg border border-[#D5B18C] bg-[#ebd7bc] text-[#850000] text-[11px] font-mono-code font-semibold hover:border-[#850000] hover:bg-[#ebd7bc]/80 transition-all select-none shadow-2xs"
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

        {/* Proof of Skills Sub-section Header */}
        <div id="proof-of-skills" className="mt-16 sm:mt-20 pt-10 sm:pt-14 border-t border-[#D5B18C]">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[11px] sm:text-xs font-metadata font-bold uppercase tracking-widest text-[#63352C]">
              ✦ Verified Credentials ✦
            </span>
            <h3 className="mt-1 sm:mt-1.5 text-2xl sm:text-3xl font-heading font-bold text-[#850000] tracking-tight">
              Proof of Skills
            </h3>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-body text-[#63352C]">
              Industry-recognized certifications and professional credentials validating technical competencies
            </p>
            <div className="mt-2.5 w-12 h-1 bg-[#850000] mx-auto rounded-full" />
          </div>

          {/* Square-style Certificates Grid on PC (Compact & Balanced for 3 items) */}
          <div className="mt-6 sm:mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto items-stretch">
            {CERTIFICATIONS_DATA.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: idx * 0.06 }}
                className="p-3 sm:p-4 rounded-xl bg-[#F3E4CC] border border-[#D5B18C] shadow-xs hover:border-[#850000]/50 hover:-translate-y-0.5 transition-all flex flex-col justify-between group relative"
                id={`proof-cert-${cert.id}`}
              >
                {/* Upper Area: Compact Certificate Image Preview */}
                <div>
                  <div
                    className="w-full relative group/img cursor-pointer mb-2.5"
                    onClick={() => setSelectedCert(cert)}
                    title="Klik untuk melihat pratinjau sertifikat penuh"
                  >
                    <div className="rounded-lg overflow-hidden border border-[#D5B18C] shadow-2xs bg-[#ebd7bc] aspect-[16/10] max-h-36 sm:max-h-40 relative flex items-center justify-center">
                      {cert.image ? (
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-contain p-1.5 group-hover/img:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[#850000]">
                          <Award className="w-8 h-8" />
                        </div>
                      )}

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/45 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white text-[11px] font-semibold">
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>Preview</span>
                      </div>
                    </div>

                    <span className="absolute bottom-1.5 left-1.5 px-1.5 py-0.5 rounded bg-black/80 text-white text-[8px] sm:text-[9px] font-medium flex items-center gap-1 shadow-sm max-w-[85%] truncate">
                      <Sparkles className="w-2 h-2 text-amber-400 shrink-0" />
                      <span className="truncate">{cert.issuer}</span>
                    </span>
                  </div>

                  {/* Verification Badge & ID */}
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-1.5">
                    <span className="px-2 py-0.5 rounded-full bg-[#ebd7bc] text-[#850000] text-[9px] font-metadata font-bold flex items-center gap-1 border border-[#D5B18C]">
                      <ShieldCheck className="w-2.5 h-2.5" />
                      <span>Verified ({cert.date})</span>
                    </span>
                    <span className="text-[9px] font-metadata text-[#63352C]">
                      ID: {cert.credentialId}
                    </span>
                  </div>

                  {/* Certificate Title */}
                  <h4
                    onClick={() => setSelectedCert(cert)}
                    className="text-xs sm:text-sm font-heading font-bold text-[#850000] leading-snug cursor-pointer transition-colors"
                  >
                    {cert.title}
                  </h4>

                  <p className="text-[10px] sm:text-[11px] font-body text-[#63352C] mt-0.5">
                    {cert.issuer} {cert.recipient ? `• ${cert.recipient}` : ''}
                  </p>

                  {/* Optional certificate description */}
                  {cert.description && (
                    <p className="mt-1.5 text-[10px] sm:text-[11px] font-body text-[#63352C] line-clamp-3 leading-relaxed">
                      {cert.description}
                    </p>
                  )}

                  {/* Key Topics Badges */}
                  {cert.topics && cert.topics.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {cert.topics.slice(0, 4).map((topic) => (
                        <span
                          key={topic}
                          className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#ebd7bc] text-[#850000] text-[9px] font-metadata font-medium border border-[#D5B18C]"
                        >
                          <CheckCircle2 className="w-2 h-2 text-[#850000] shrink-0" />
                          <span>{topic}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Actions Row */}
                <div className="mt-3 pt-2.5 border-t border-[#D5B18C] flex items-center gap-1.5">
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 justify-center px-2 py-1.5 rounded-lg bg-[#ebd7bc] hover:bg-[#ebd7bc]/80 text-[#850000] text-[10px] sm:text-[11px] font-heading font-bold flex items-center gap-1 border border-[#D5B18C] transition-colors cursor-pointer"
                      id={`btn-verify-cert-${cert.id}`}
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>{cert.credentialUrl.endsWith('.pdf') ? 'Open PDF' : 'Verify'}</span>
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setSelectedCert(cert)}
                    className="flex-1 justify-center px-2 py-1.5 rounded-lg bg-[#850000] hover:bg-[#6b0000] text-[#F3E4CC] text-[10px] sm:text-[11px] font-heading font-bold shadow-2xs transition-colors flex items-center gap-1 cursor-pointer active:scale-[0.98]"
                    id={`btn-view-cert-${cert.id}`}
                  >
                    <Award className="w-3 h-3" />
                    <span>View Certificate</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Certification Preview Modal with Full Certificate Visual */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="bg-[#F3E4CC] rounded-2xl max-w-2xl w-full border border-[#D5B18C] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-[#850000]"
            >
              {/* Modal Header */}
              <div className="px-5 py-3.5 border-b border-[#D5B18C] flex items-center justify-between bg-[#ebd7bc]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#850000] text-[#F3E4CC] flex items-center justify-center">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-heading font-bold text-[#850000] leading-snug">
                      {selectedCert.title}
                    </h3>
                    <p className="text-[11px] font-body text-[#63352C]">
                      {selectedCert.issuer} • {selectedCert.date}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 rounded-lg bg-[#F3E4CC] text-[#850000] hover:bg-[#ebd7bc] border border-[#D5B18C] cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body - Image Preview */}
              <div className="p-4 sm:p-5 overflow-y-auto flex-1 flex flex-col items-center">
                {selectedCert.image ? (
                  <div className="w-full rounded-xl overflow-hidden border border-[#D5B18C] shadow-md bg-white">
                    <img
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      className="w-full h-auto object-contain max-h-[50vh]"
                    />
                  </div>
                ) : null}

                {/* Certificate Description */}
                {selectedCert.description && (
                  <div className="w-full mt-3 p-3 rounded-xl bg-[#F3E4CC] border border-[#D5B18C] text-xs font-body text-[#63352C] leading-relaxed">
                    {selectedCert.description}
                  </div>
                )}

                {/* Courses / Modules List */}
                {selectedCert.courses && (
                  <div className="w-full mt-3 p-3.5 rounded-xl bg-[#ebd7bc] border border-[#D5B18C]">
                    <p className="text-xs font-heading font-bold text-[#850000] mb-2 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#850000]" />
                      <span>{selectedCert.courses.length} Specialization Topics / Modules:</span>
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] font-body text-[#63352C]">
                      {selectedCert.courses.map((course, idx) => (
                        <div key={course} className="flex items-center gap-1.5">
                          <span className="w-4 h-4 rounded-full bg-[#850000] text-[#F3E4CC] text-[10px] font-bold flex items-center justify-center shrink-0">
                            {idx + 1}
                          </span>
                          <span>{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="px-5 py-3 border-t border-[#D5B18C] bg-[#ebd7bc] flex items-center justify-between gap-3">
                <span className="text-[11px] font-metadata text-[#63352C] hidden sm:inline">
                  Verify ID: {selectedCert.credentialId}
                </span>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  {selectedCert.credentialUrl && (
                    <a
                      href={selectedCert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-[#850000] hover:bg-[#6b0000] text-[#F3E4CC] text-xs font-heading font-bold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>
                        {selectedCert.credentialUrl.endsWith('.pdf')
                          ? 'Open Original PDF Certificate'
                          : 'Verify Official Credential'}
                      </span>
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setSelectedCert(null)}
                    className="px-4 py-2 rounded-xl bg-[#F3E4CC] text-[#850000] text-xs font-heading font-bold hover:bg-[#ebd7bc] transition-colors cursor-pointer border border-[#D5B18C]"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
