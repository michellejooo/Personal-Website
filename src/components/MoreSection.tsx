import React from 'react';
import { motion } from 'motion/react';
import { Music, ExternalLink, Sparkles, Feather } from 'lucide-react';

export const MoreSection: React.FC = () => {
  const spotifyPlaylistUrl =
    'https://open.spotify.com/playlist/30WSpzKASlT69XakEIBCo9';
  const spotifyEmbedUrl =
    'https://open.spotify.com/embed/playlist/30WSpzKASlT69XakEIBCo9?utm_source=generator&theme=0';

  const items = [
    'i do cover songs with keyboard (will drop songs cover here soon!!)',
    "i'm obsessed with building things",
    "i'm an introvert person [intj]",
    'americano girl confirmed with zero sugar',
    'want to focus on my future career [data science, ai, & web dev]',
  ];

  return (
    <section id="more" className="py-12 sm:py-16 relative transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Lowercase & Cozy Journal Style */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3E4CC] text-[#850000] text-[11px] font-bold lowercase tracking-wider mb-2 border border-[#D5B18C] font-metadata">
            <Sparkles className="w-3 h-3 text-[#850000]" />
            <span>✦ things abt me</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#850000] tracking-tight lowercase">
            things abt me that dont have in resume
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-[#63352C] lowercase font-special-elite">
            a personal typewriter journal note &amp; my favorite study soundtrack
          </p>
          <div className="mt-2.5 w-12 h-1 bg-[#850000] mx-auto rounded-full" />
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
              className="relative p-5 sm:p-7 md:p-8 rounded-xl bg-[#FAF5EB] text-[#850000] border border-[#D5B18C] shadow-[0_12px_32px_-6px_rgba(99,53,44,0.18),0_4px_12px_rgba(99,53,44,0.08)] transition-all"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(to bottom, transparent, transparent 27px, rgba(133, 0, 0, 0.07) 28px)',
              }}
            >
              {/* Paper-Tape Detail at the top center */}
              <div
                className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-6 bg-[#D5B18C]/50 border-y border-[#D5B18C] backdrop-blur-[1px] rotate-[-1.5deg] shadow-2xs pointer-events-none z-10"
                aria-hidden="true"
              />

              {/* Journal Paper Header Row (entry // personal journal removed) */}
              <div className="flex items-center justify-end pb-2.5 mb-3 border-b border-[#D5B18C] font-special-elite text-[11px] sm:text-xs text-[#63352C] lowercase">
                <span className="px-2 py-0.5 rounded bg-[#F3E4CC] border border-[#D5B18C] text-[10px] font-metadata text-[#850000]">
                  no. 05 · notes
                </span>
              </div>

              {/* Paper Title (without a little glimpse subtitle) */}
              <div className="mb-4">
                <h3 className="text-lg sm:text-xl font-heading font-bold text-[#850000] tracking-tight lowercase">
                  things abt me
                </h3>
              </div>

              {/* Red Notebook Left Margin Line & Exactly 5 Items */}
              <div className="pl-4 sm:pl-5 border-l-2 border-[#850000]/30 my-2">
                <ol className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-[#850000] leading-snug">
                  {items.map((fact, index) => (
                    <li key={index} className="flex items-baseline gap-2.5">
                      <span className="font-bold text-[#850000] font-special-elite text-sm shrink-0">
                        {index + 1}.
                      </span>
                      <span className="font-bold lowercase tracking-normal">
                        {fact}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Journal Paper Bottom Sign-off with joannamt */}
              <div className="mt-5 pt-3 border-t border-[#D5B18C] flex items-center justify-between text-[11px] font-special-elite text-[#63352C] lowercase">
                <span className="flex items-center gap-1">
                  <Feather className="w-3.5 h-3.5 text-[#850000]" />
                  <span>— joannamt</span>
                </span>
                <span className="font-metadata text-[10px] text-[#63352C]">
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
              {/* Header Bar matching user's reference strip */}
              <div className="flex items-center justify-between px-3 py-2 bg-[#F3E4CC] border border-[#D5B18C] rounded-xl mb-2.5 shadow-2xs">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#1DB954]/20 text-[#1DB954] flex items-center justify-center shrink-0">
                    <Music className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-heading font-bold text-[#850000] leading-none lowercase">
                      my jam • joanna
                    </h4>
                    <p className="text-[10px] text-[#63352C] lowercase font-special-elite mt-0.5">
                      study &amp; coding soundtrack
                    </p>
                  </div>
                </div>

                <a
                  href={spotifyPlaylistUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-[#ebd7bc] hover:bg-[#1DB954] hover:text-white text-[#850000] text-[10px] font-metadata font-bold border border-[#D5B18C] flex items-center gap-1 transition-colors shrink-0 lowercase"
                  title="Open playlist in Spotify app"
                  id="btn-open-spotify-playlist"
                >
                  <span>open in spotify</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>

              {/* Square Spotify Embed Player Frame */}
              <div className="w-full aspect-square rounded-2xl overflow-hidden bg-black shadow-lg border border-[#D5B18C] relative flex items-center justify-center">
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
