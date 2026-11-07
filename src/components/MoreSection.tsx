import React from 'react';
import { motion } from 'motion/react';
import { Music, ExternalLink, Sparkles, Feather } from 'lucide-react';

export const MoreSection: React.FC = () => {
  const spotifyPlaylistUrl =
    'https://open.spotify.com/playlist/30WSpzKASlT69XakEIBCo9';
  const spotifyEmbedUrl =
    'https://open.spotify.com/embed/playlist/30WSpzKASlT69XakEIBCo9?utm_source=generator&theme=0';

  const funFacts = [
    'i do cover songs with keyboard',
    "i'm excited to try new things, especially about tech",
    "i'm an introvert person (intj)",
    'americano girl confirmed with zero sugar',
  ];

  return (
    <section id="more" className="py-12 sm:py-16 relative transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Lowercase & Cozy Journal Style */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ebd7bc] text-[#7A0000] text-[11px] font-bold lowercase tracking-wider mb-2 border border-[#7A0000]/20 font-ibm-mono">
            <Sparkles className="w-3 h-3 text-[#7A0000]" />
            <span>more about me</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#7A0000] tracking-tight lowercase">
            fun facts & soundtrack
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-[#7A0000]/80 lowercase font-special-elite">
            a personal typewriter journal note & my favorite study soundtrack
          </p>
          <div className="mt-2.5 w-12 h-1 bg-[#7A0000] mx-auto rounded-full" />
        </div>

        {/* 2-Column Balanced Layout: Vintage Paper Sheet (Left) + Square Spotify Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center max-w-5xl mx-auto">
          {/* Left Column (col-span-7): One Large Vintage Paper Sheet Container */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-7 relative"
          >
            {/* The Vintage Paper Sheet */}
            <div
              className="relative p-5 sm:p-7 md:p-8 rounded-xl bg-[#FAF5EB] text-[#7A0000] border border-[#7A0000]/25 shadow-[0_12px_32px_-6px_rgba(61,35,20,0.18),0_4px_12px_rgba(61,35,20,0.08)] transition-all"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(to bottom, transparent, transparent 27px, rgba(122, 0, 0, 0.07) 28px)',
              }}
            >
              {/* Paper-Tape Detail at the top center */}
              <div
                className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-6 bg-[#8C5E3C]/25 border-y border-[#8C5E3C]/35 backdrop-blur-[1px] rotate-[-1.5deg] shadow-2xs pointer-events-none z-10"
                aria-hidden="true"
              />

              {/* Journal Paper Header Row */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#7A0000]/20 font-special-elite text-[11px] sm:text-xs text-[#7A0000]/85 lowercase">
                <span className="flex items-center gap-1.5 font-bold">
                  <span>entry // personal journal</span>
                </span>
                <span className="px-2 py-0.5 rounded bg-[#ebd7bc] border border-[#7A0000]/20 text-[10px] font-ibm-mono">
                  no. 04 · notes
                </span>
              </div>

              {/* Paper Title */}
              <div className="mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-[#7A0000] tracking-tight lowercase">
                  fun facts about me
                </h3>
                <p className="text-[11px] font-special-elite text-[#7A0000]/70 lowercase mt-0.5">
                  a little glimpse into my daily personality & quirks
                </p>
              </div>

              {/* Red Notebook Left Margin Line & Exactly 4 Fun Facts */}
              <div className="pl-4 sm:pl-5 border-l-2 border-[#7A0000]/30 my-2">
                <ol className="space-y-3 sm:space-y-3.5 text-xs sm:text-sm text-[#7A0000] leading-snug">
                  {funFacts.map((fact, index) => (
                    <li key={index} className="flex items-baseline gap-2.5">
                      <span className="font-bold text-[#7A0000] font-special-elite text-sm shrink-0">
                        {index + 1}.
                      </span>
                      <span className="font-bold lowercase tracking-normal">
                        {fact}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Journal Paper Bottom Sign-off */}
              <div className="mt-5 pt-3 border-t border-[#7A0000]/20 flex items-center justify-between text-[11px] font-special-elite text-[#7A0000]/75 lowercase">
                <span className="flex items-center gap-1">
                  <Feather className="w-3.5 h-3.5 text-[#7A0000]" />
                  <span>— joanna m.</span>
                </span>
                <span className="font-ibm-mono text-[10px] text-[#7A0000]/70">
                  typed on typewriter
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column (col-span-5): Square Spotify Music Player Card */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            {/* Spotify Card Wrapper */}
            <div className="w-full max-w-[360px] mx-auto flex flex-col">
              {/* Header Bar matching image 2 */}
              <div className="flex items-center justify-between px-3 py-2 bg-[#ebd7bc] border border-[#7A0000]/20 rounded-xl mb-2.5 shadow-2xs">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#1DB954]/20 text-[#1DB954] flex items-center justify-center shrink-0">
                    <Music className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#7A0000] leading-none lowercase">
                      my jam • joanna
                    </h4>
                    <p className="text-[10px] text-[#7A0000]/70 lowercase font-special-elite mt-0.5">
                      study &amp; coding soundtrack
                    </p>
                  </div>
                </div>

                <a
                  href={spotifyPlaylistUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-[#f4ebdb] hover:bg-[#1DB954] hover:text-white text-[#7A0000] text-[10px] font-bold border border-[#7A0000]/20 flex items-center gap-1 transition-colors shrink-0 lowercase font-ibm-mono"
                  title="Open playlist in Spotify app"
                  id="btn-open-spotify-playlist"
                >
                  <span>open in spotify</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>

              {/* Square Spotify Embed Player Frame (bikin kayak gambar 2 tapi bentuk persegi) */}
              <div className="w-full aspect-square rounded-2xl overflow-hidden bg-black shadow-lg border border-[#7A0000]/30 relative flex items-center justify-center">
                <iframe
                  data-testid="embed-iframe"
                  style={{
                    borderRadius: '16px',
                    border: 'none',
                    width: '100%',
                    height: '100%',
                  }}
                  src={spotifyEmbedUrl}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="joanna's spotify playlist"
                  className="w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
