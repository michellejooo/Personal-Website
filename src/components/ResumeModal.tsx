import React from 'react';
import { motion } from 'motion/react';
import { PROFILE_DATA, EXPERIENCE_DATA, CERTIFICATIONS_DATA, LANGUAGES_DATA } from '../data/portfolioData';
import { X, Download, Printer, Mail, MapPin, Globe, CheckCircle, GraduationCap, Briefcase, Award } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white dark:bg-slate-900 rounded-3xl max-w-4xl w-full border border-gray-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8 flex flex-col max-h-[90vh]"
      >
        {/* Modal Top Control Bar */}
        <div className="p-4 sm:px-6 bg-gray-50 dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="ml-2 text-xs font-bold text-gray-700 dark:text-slate-200">
              CV Joanna Michelle Tambunan.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-xl bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-slate-200 text-xs font-semibold hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors flex items-center gap-1.5"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-gray-200 dark:bg-slate-700 text-gray-600 dark:text-slate-300 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-950 dark:hover:text-red-400 transition-colors"
              id="resume-modal-close-btn"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content Container */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-white dark:bg-slate-900 text-gray-900 dark:text-slate-100" id="resume-printable-area">
          {/* Header */}
          <div className="pb-6 border-b-2 border-[#7A0000] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                {PROFILE_DATA.name}
              </h1>
              <p className="text-base font-bold text-[#7A0000] dark:text-red-400 mt-0.5">
                {PROFILE_DATA.title}
              </p>
              <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">
                Web Development • AI Engineer • Data Analyst
              </p>
            </div>

            <div className="text-xs space-y-1 text-gray-600 dark:text-slate-300">
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#7A0000]" />
                <span>{PROFILE_DATA.contact.email}</span>
              </p>
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#7A0000]" />
                <span>{PROFILE_DATA.contact.location}</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#7A0000]" />
                <span>https://github.com/michellejooo</span>
              </p>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#7A0000] dark:text-red-400 mb-2 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Professional Summary</span>
            </h2>
            <p className="text-xs text-gray-700 dark:text-slate-300 leading-relaxed bg-gray-50 dark:bg-slate-800/60 p-4 rounded-xl border border-gray-100 dark:border-slate-800">
              {PROFILE_DATA.introduction}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#7A0000] dark:text-red-400 mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h2>
            <div className="flex justify-between items-start text-xs">
              <div>
                <p className="font-bold text-gray-900 dark:text-white">Bachelor of Information Technology</p>
                <p className="text-gray-600 dark:text-slate-400">Telkom University • GPA: 3.16 / 4.00</p>
              </div>
              <span className="font-semibold text-gray-500 dark:text-slate-400">Undergraduate Student</span>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#7A0000] dark:text-red-400 mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Leadership & Organizational Experience</span>
            </h2>
            <div className="space-y-4">
              {EXPERIENCE_DATA.map((exp) => (
                <div key={exp.id} className="text-xs">
                  <div className="flex justify-between items-start font-bold">
                    <span className="text-gray-900 dark:text-white">{exp.role} — {exp.organization}</span>
                    <span className="text-[#7A0000] dark:text-red-400">{exp.period}</span>
                  </div>
                  {exp.description && (
                    <p className="mt-1 text-xs text-gray-600 dark:text-slate-300 italic">
                      {exp.description}
                    </p>
                  )}
                  <ul className="mt-1.5 space-y-1 pl-4 list-disc text-gray-600 dark:text-slate-300">
                    {exp.responsibilities.map((r, idx) => (
                      <li key={idx}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#7A0000] dark:text-red-400 mb-3 flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Certifications</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div key={cert.id} className="p-3 rounded-xl bg-gray-50 dark:bg-slate-800/60 border border-gray-100 dark:border-slate-800">
                  <p className="font-bold text-gray-900 dark:text-white">{cert.title}</p>
                  <p className="text-[11px] text-gray-500 dark:text-slate-400">{cert.issuer} ({cert.date})</p>
                  <p className="text-[10px] text-emerald-600 font-mono mt-1">ID: {cert.credentialId}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#7A0000] dark:text-red-400 mb-3 flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>Languages</span>
            </h2>
            <div className="flex flex-wrap gap-4 text-xs font-semibold text-gray-700 dark:text-slate-200">
              {LANGUAGES_DATA.map((lang) => (
                <span key={lang.name} className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#7A0000]" />
                  <span>{lang.name} ({lang.proficiency})</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Action Footer */}
        <div className="p-4 bg-gray-50 dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700 flex justify-end gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-slate-300 text-xs font-semibold"
          >
            Close
          </button>
          <button
            onClick={handlePrint}
            className="px-5 py-2 rounded-xl bg-[#7A0000] text-white text-xs font-semibold hover:bg-[#990000] flex items-center gap-1.5 shadow-md"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
