import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { Certification } from '../types';
import { Award, CheckCircle2, ShieldCheck, X, ExternalLink } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-20 bg-slate-50/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#7A0000] dark:text-red-400">
            Validated Competencies
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Professional Certifications
          </h2>
          <p className="mt-3 text-sm text-gray-600 dark:text-slate-300">
            Industry-recognized credentials validating core engineering and analytical expertise
          </p>
          <div className="mt-3 w-16 h-1 bg-[#7A0000] mx-auto rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className={`mt-12 grid gap-8 mx-auto ${CERTIFICATIONS_DATA.length === 1 ? 'grid-cols-1 max-w-2xl' : 'grid-cols-1 md:grid-cols-2 max-w-5xl'}`}>
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="p-8 rounded-3xl bg-white dark:bg-slate-800/90 border border-gray-100 dark:border-slate-700/80 shadow-xl hover:border-[#7A0000]/50 dark:hover:border-red-500/50 transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#7A0000]/5 dark:bg-red-500/10 rounded-bl-full pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-950/60 text-[#7A0000] dark:text-red-400 flex items-center justify-center group-hover:bg-[#7A0000] group-hover:text-white transition-colors">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center gap-1 border border-emerald-200 dark:border-emerald-800">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified ({cert.date})</span>
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-gray-900 dark:text-white group-hover:text-[#7A0000] dark:group-hover:text-red-400 transition-colors whitespace-pre-line">
                  {cert.title}
                </h3>

                <p className="mt-1 text-xs font-semibold text-gray-500 dark:text-slate-400">
                  {cert.issuer}
                </p>

                {/* Topics Covered */}
                <div className="mt-5">
                  <p className="text-xs font-bold text-gray-700 dark:text-slate-300 mb-2">
                    Key Topics Covered:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cert.topics.map((topic) => (
                      <span
                        key={topic}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-gray-100 dark:bg-slate-700/80 text-gray-800 dark:text-slate-200 text-xs font-medium border border-gray-200/80 dark:border-slate-600/80"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#7A0000] dark:text-red-400" />
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 dark:border-slate-700/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-gray-400 dark:text-slate-500">
                  ID: {cert.credentialId}
                </span>

                <button
                  onClick={() => setSelectedCert(cert)}
                  className="px-4 py-2 rounded-xl bg-[#7A0000] hover:bg-[#990000] text-white text-xs font-semibold shadow-xs transition-colors flex items-center gap-1.5"
                  id={`btn-view-cert-${cert.id}`}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>View Certificate</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certification View Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-slate-800 rounded-3xl p-8 max-w-lg w-full border border-gray-200 dark:border-slate-700 shadow-2xl relative"
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Certificate Layout Preview Mockup */}
            <div className="p-6 rounded-2xl bg-linear-to-br from-red-50 via-white to-gray-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-2 border-dashed border-[#7A0000]/40 text-center relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-[#7A0000] text-white flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Award className="w-7 h-7" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#7A0000] dark:text-red-400">
                Official Certificate of Accomplishment
              </p>
              <h3 className="mt-2 text-2xl font-black text-gray-900 dark:text-white whitespace-pre-line">
                {selectedCert.title}
              </h3>
              <p className="mt-1 text-xs text-gray-600 dark:text-slate-300">
                Awarded to <span className="font-bold text-[#7A0000] dark:text-red-400">Joanna</span>
              </p>
              <p className="mt-3 text-[11px] text-gray-500 dark:text-slate-400">
                Issued by {selectedCert.issuer} • {selectedCert.date}
              </p>
              <div className="mt-4 pt-3 border-t border-gray-200 dark:border-slate-700 flex justify-between items-center text-[10px] text-gray-400">
                <span>Credential ID: {selectedCert.credentialId}</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">Verified ✅</span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-3">
              {selectedCert.credentialUrl ? (
                <a
                  href={selectedCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-red-50 dark:bg-red-950/50 text-[#7A0000] dark:text-red-300 hover:bg-[#7A0000] hover:text-white transition-colors text-xs font-semibold flex items-center gap-1.5 border border-red-200 dark:border-red-800"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Verify on Coursera</span>
                </a>
              ) : (
                <div />
              )}
              <button
                onClick={() => setSelectedCert(null)}
                className="px-5 py-2.5 rounded-xl bg-[#7A0000] text-white text-xs font-semibold hover:bg-[#990000]"
              >
                Close View
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};
