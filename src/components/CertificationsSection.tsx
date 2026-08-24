import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { Certification } from '../types';
import { Award, CheckCircle2, ShieldCheck, X, ExternalLink, ZoomIn, Sparkles } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-16 bg-slate-50/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#7A0000] dark:text-red-400">
            Validated Competencies
          </span>
          <h2 className="mt-1.5 text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Professional Certifications
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-slate-300">
            Industry-recognized credentials validating data analytics and technical expertise
          </p>
          <div className="mt-2.5 w-12 h-1 bg-[#7A0000] mx-auto rounded-full" />
        </div>

        {/* Certifications Grid - Compact & with Live Certificate Preview */}
        <div className="mt-8 max-w-3xl mx-auto">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.1 }}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-800/95 border border-gray-200 dark:border-slate-700/80 shadow-md hover:border-[#7A0000]/40 dark:hover:border-red-500/40 transition-all flex flex-col md:flex-row gap-5 items-center group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#7A0000]/5 dark:bg-red-500/10 rounded-bl-full pointer-events-none" />

              {/* Certificate Image Thumbnail Preview */}
              <div className="w-full md:w-56 shrink-0 relative group/img cursor-pointer" onClick={() => setSelectedCert(cert)}>
                <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-slate-600 shadow-xs bg-gray-100 dark:bg-slate-900 aspect-4/3 relative">
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <Award className="w-10 h-10" />
                    </div>
                  )}
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white text-xs font-semibold">
                    <ZoomIn className="w-4 h-4" />
                    <span>Preview</span>
                  </div>
                </div>
                <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-black/75 text-white text-[10px] font-medium backdrop-blur-xs flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                  Coursera • Google
                </span>
              </div>

              {/* Certificate Info Details */}
              <div className="flex-1 w-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold flex items-center gap-1 border border-emerald-200 dark:border-emerald-800">
                      <ShieldCheck className="w-3 h-3" />
                      <span>Verified Specialization ({cert.date})</span>
                    </span>
                    <span className="text-[11px] font-mono text-gray-400 dark:text-slate-500">
                      ID: {cert.credentialId}
                    </span>
                  </div>

                  <h3
                    onClick={() => setSelectedCert(cert)}
                    className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#7A0000] dark:group-hover:text-red-400 transition-colors cursor-pointer"
                  >
                    {cert.title}
                  </h3>

                  <p className="text-xs font-medium text-gray-500 dark:text-slate-400 mt-0.5">
                    {cert.issuer} {cert.recipient ? `• Awarded to ${cert.recipient}` : ''}
                  </p>

                  {/* Topics Covered */}
                  <div className="mt-3">
                    <div className="flex flex-wrap gap-1.5">
                      {cert.topics.slice(0, 6).map((topic) => (
                        <span
                          key={topic}
                          className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-gray-100 dark:bg-slate-700/70 text-gray-700 dark:text-slate-200 text-[11px] font-medium border border-gray-200/70 dark:border-slate-600/70"
                        >
                          <CheckCircle2 className="w-2.5 h-2.5 text-[#7A0000] dark:text-red-400" />
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-4 pt-3 border-t border-gray-100 dark:border-slate-700/70 flex items-center justify-end gap-2">
                  <div className="flex items-center gap-2">
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-xl bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 text-gray-800 dark:text-slate-200 text-xs font-semibold flex items-center gap-1 border border-gray-200 dark:border-slate-600 transition-colors"
                        id={`btn-verify-cert-${cert.id}`}
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Verify Coursera</span>
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="px-3.5 py-1.5 rounded-xl bg-[#7A0000] hover:bg-[#990000] text-white text-xs font-semibold shadow-xs transition-colors flex items-center gap-1"
                      id={`btn-view-cert-${cert.id}`}
                    >
                      <Award className="w-3 h-3" />
                      <span>View Certificate</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certification Preview Modal with Full Certificate Visual */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full border border-gray-200 dark:border-slate-700 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="px-5 py-3.5 border-b border-gray-200 dark:border-slate-700 flex items-center justify-between bg-gray-50/80 dark:bg-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#7A0000] text-white flex items-center justify-center">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-snug">
                      {selectedCert.title}
                    </h3>
                    <p className="text-[11px] text-gray-500 dark:text-slate-400">
                      {selectedCert.issuer} • {selectedCert.date}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body - Image Preview */}
              <div className="p-4 sm:p-5 overflow-y-auto flex-1 flex flex-col items-center">
                {selectedCert.image ? (
                  <div className="w-full rounded-xl overflow-hidden border border-gray-200 dark:border-slate-700 shadow-md bg-white">
                    <img
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      className="w-full h-auto object-contain max-h-[50vh]"
                    />
                  </div>
                ) : null}

                {/* 6 Courses List */}
                {selectedCert.courses && (
                  <div className="w-full mt-4 p-3.5 rounded-xl bg-gray-50 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700">
                    <p className="text-xs font-bold text-gray-800 dark:text-slate-200 mb-2 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#7A0000] dark:text-red-400" />
                      <span>6 Specialization Courses Completed:</span>
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] text-gray-600 dark:text-slate-300">
                      {selectedCert.courses.map((course, idx) => (
                        <div key={course} className="flex items-center gap-1.5">
                          <span className="w-4 h-4 rounded-full bg-[#7A0000]/10 dark:bg-red-500/20 text-[#7A0000] dark:text-red-400 text-[10px] font-bold flex items-center justify-center shrink-0">
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
              <div className="px-5 py-3 border-t border-gray-200 dark:border-slate-700 bg-gray-50/80 dark:bg-slate-800/80 flex items-center justify-between gap-3">
                <span className="text-[11px] font-mono text-gray-500 dark:text-slate-400 hidden sm:inline">
                  Verify ID: {selectedCert.credentialId}
                </span>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  {selectedCert.credentialUrl && (
                    <a
                      href={selectedCert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-[#7A0000] hover:bg-[#990000] text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Verify on Coursera Official</span>
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-4 py-2 rounded-xl bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-slate-200 text-xs font-semibold hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors"
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

