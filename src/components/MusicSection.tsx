import React from 'react';
import { motion } from 'motion/react';
import { Music, ExternalLink, Headphones } from 'lucide-react';

export const MusicSection: React.FC = () => {
  const spotifyPlaylistUrl =
    'https://open.spotify.com/playlist/30WSpzKASlT69XakEIBCo9';
  const spotifyEmbedUrl =
    'https://open.spotify.com/embed/playlist/30WSpzKASlT69XakEIBCo9?utm_source=generator&theme=0';

  return (
    <div className="mt-12 sm:mt-16 relative">
      {/* Background Decorative Ambient Circles */}
      <div className="absolute top-1/2 left-10 w-64 h-64 bg-[#7A0000]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900/60 text-[#7A0000] dark:text-red-300 text-xs font-bold mb-2">
            <Headphones className="w-3.5 h-3.5" />
            <span>Study Soundtrack</span>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Here&apos;s My Jam If You&apos;re Interested
          </h3>
          <p className="mt-1.5 text-xs sm:text-sm text-gray-600 dark:text-slate-400">
            Curated playlist for coding, analyzing data, and focused learning
          </p>
          <div className="mt-2.5 w-16 h-1 bg-[#7A0000] mx-auto rounded-full" />
        </div>

        {/* Clean Responsive Container - Minimal padding on mobile so iframe renders in full normal mode */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto p-2.5 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/80 dark:bg-slate-800/80 border border-gray-200/80 dark:border-slate-700/80 shadow-xl backdrop-blur-xl"
        >
          {/* Top Bar with Playlist info & Open in Spotify button */}
          <div className="flex items-center justify-between px-2 sm:px-3 pb-3 mb-2 border-b border-gray-100 dark:border-slate-700/60">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#1DB954]/15 text-[#1DB954] flex items-center justify-center">
                <Music className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white leading-tight">
                  my jam • joanna
                </h4>
                <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-slate-400">
                  Spotify Playlist
                </p>
              </div>
            </div>

            <a
              href={spotifyPlaylistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-100 dark:bg-slate-700/80 text-gray-700 dark:text-slate-200 hover:bg-[#1DB954] hover:text-white dark:hover:bg-[#1DB954] text-xs font-semibold transition-colors"
              title="Open playlist in Spotify app"
              id="btn-open-spotify-playlist"
            >
              <span>Open in Spotify</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Embedded Spotify Iframe - Normal full playlist view */}
          <div className="w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-inner bg-black">
            <iframe
              data-testid="embed-iframe"
              style={{
                borderRadius: '12px',
                border: 'none',
                minHeight: '380px',
                width: '100%',
              }}
              src={spotifyEmbedUrl}
              width="100%"
              height="380"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Joanna's Spotify Playlist"
              className="w-full h-[380px] sm:h-[400px]"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
