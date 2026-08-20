import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Music, Headphones, Volume2, Sparkles, Disc, Heart } from 'lucide-react';

export const MusicSection: React.FC = () => {
  const [isPlayingVisualizer, setIsPlayingVisualizer] = useState(true);

  return (
    <div className="mt-14 relative overflow-hidden">
      {/* Background Decorative Ambient Circles */}
      <div className="absolute top-1/2 left-10 w-64 h-64 bg-[#7A0000]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900/60 text-[#7A0000] dark:text-red-300 text-xs font-bold mb-2">
            <Music className="w-3.5 h-3.5" />
            <span>Study Soundtrack</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Here's My Jam If You're Interested
          </h3>
          <div className="mt-2.5 w-16 h-1 bg-[#7A0000] mx-auto rounded-full" />
        </div>

        {/* Modern Glassmorphism Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-slate-800/70 border border-white/60 dark:border-slate-700/80 shadow-2xl backdrop-blur-xl relative overflow-hidden group"
        >
          {/* Top Player Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-200/60 dark:border-slate-700/60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#7A0000] text-white flex items-center justify-center shadow-md">
                <Disc className="w-5 h-5 animate-spin" style={{ animationDuration: '8s' }} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-900 dark:text-white flex items-center gap-2">
                  <span>Study Session</span>
                  <Heart className="w-3.5 h-3.5 text-[#7A0000] fill-[#7A0000]" />
                </h4>
              </div>
            </div>

            {/* Animated Equalizer Bar Preview */}
            <div className="flex items-end gap-1 h-6 px-3 py-1 rounded-lg bg-gray-100 dark:bg-slate-900/60 border border-gray-200 dark:border-slate-700">
              <Volume2 className="w-3.5 h-3.5 text-[#7A0000] dark:text-red-400 mr-1 self-center" />
              {[40, 80, 50, 100, 60, 90, 30, 70].map((height, idx) => (
                <span
                  key={idx}
                  className="w-1 bg-[#7A0000] dark:bg-red-500 rounded-full animate-bounce"
                  style={{
                    height: `${height}%`,
                    animationDuration: `${0.6 + idx * 0.15}s`,
                    animationPlayState: isPlayingVisualizer ? 'running' : 'paused',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Embedded Spotify Iframe */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200/80 dark:border-slate-700/80 bg-black">
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/playlist/30WSpzKASlT69XakEIBCo9?utm_source=generator&si=db09c08e926543dc"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Joanna's Spotify Playlist"
            />
          </div>

          {/* Bottom Card Footer */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
