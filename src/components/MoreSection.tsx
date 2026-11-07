import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Music,
  ExternalLink,
  Paperclip,
  Check,
  Feather,
} from 'lucide-react';

export const MoreSection: React.FC = () => {
  const spotifyPlaylistUrl =
    'https://open.spotify.com/playlist/30WSpzKASlT69XakEIBCo9';
  const spotifyEmbedUrl =
    'https://open.spotify.com/embed/playlist/30WSpzKASlT69XakEIBCo9?utm_source=generator&theme=0';

  const funFacts = [
    {
      id: 'keyboard-cover',
      noteNumber: '01',
      title: 'i do cover song with keyboard',
      category: 'Creative Pursuit',
      rotation: 'md:-rotate-1',
      tapeAngle: 'rotate-[-2deg]',
      quote:
        'Playing melodies and arranging acoustic covers on keyboard is my creative sanctuary. It is how I unwind, find musical rhythm, and express ideas beyond code.',
      stamp: 'hobby & music',
    },
    {
      id: 'tech-trends',
      noteNumber: '02',
      title: 'i love to explore any new trend technologies and new things',
      category: 'Curiosity & Drive',
      rotation: 'md:rotate-1',
      tapeAngle: 'rotate-[1.5deg]',
      quote:
        'Genuinely curious about emerging developer tools, modern web architectures, and cutting-edge software paradigms. Always excited to explore what is coming next.',
      stamp: 'curiosity log',
    },
    {
      id: 'introvert-mindset',
      noteNumber: '03',
      title: 'im an introvert person',
      category: 'Work & Focus Style',
      rotation: 'md:-rotate-1',
      tapeAngle: 'rotate-[-1deg]',
      quote:
        'I thrive in calm, quiet spaces. Being an introvert fuels my deep focus, deliberate observation, and attention to detail when building quality software.',
      stamp: 'personality trait',
    },
  ];

  return (
    <section id="more" className="py-14 sm:py-20 relative transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ebd7bc] text-[#7A0000] text-[11px] font-bold uppercase tracking-wider mb-2 border border-[#7A0000]/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Beyond The Code</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#7A0000] tracking-tight">
            More About Me
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#7A0000]/80">
            Personal memo notes, creative pursuits, and my daily coding soundtrack
          </p>
          <div className="mt-2.5 w-12 h-1 bg-[#7A0000] mx-auto rounded-full" />
        </div>

        {/* 1. Fun Facts - 3 Paper Sheets List */}
        <div className="mt-10 sm:mt-12">
          <div className="flex items-center justify-between mb-6 sm:mb-8 max-w-5xl mx-auto">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7A0000]" />
              <h3 className="text-base sm:text-lg font-bold text-[#7A0000]">
                Fun Facts
              </h3>
            </div>
            <span className="text-[11px] text-[#7A0000]/80 font-bold uppercase tracking-wider">
              3 Desk Notes
            </span>
          </div>

          {/* 3 Paper Sheets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 max-w-5xl mx-auto items-stretch">
            {funFacts.map((fact, idx) => (
              <motion.div
                key={fact.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.1 }}
                className={`relative p-5 sm:p-6 rounded-lg sm:rounded-xl bg-[#FAF6EE] text-[#7A0000] border border-[#7A0000]/25 shadow-[0_10px_25px_-5px_rgba(61,35,20,0.14),0_3px_8px_-2px_rgba(61,35,20,0.08)] flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_16px_30px_-5px_rgba(61,35,20,0.2)] ${fact.rotation} hover:rotate-0 group`}
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(to bottom, transparent, transparent 26px, rgba(122, 0, 0, 0.05) 27px, rgba(122, 0, 0, 0.05) 28px)',
                }}
              >
                {/* Washi Tape Strip at top */}
                <div
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-5 bg-[#8C5E3C]/25 border-y border-[#8C5E3C]/35 backdrop-blur-[1px] shadow-2xs pointer-events-none ${fact.tapeAngle}`}
                />

                {/* Top Row: Paperclip & Memo Index */}
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#7A0000]/20">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#7A0000]">
                      <Paperclip className="w-4 h-4 text-[#7A0000]/80" />
                      <span className="tracking-widest uppercase">
                        MEMO #{fact.noteNumber}
                      </span>
                    </div>

                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#ebd7bc] border border-[#7A0000]/20 text-[#7A0000]">
                      {fact.category}
                    </span>
                  </div>

                  {/* Red Notebook Left Margin Line & Content */}
                  <div className="pl-3.5 sm:pl-4 border-l-2 border-[#7A0000]/30 space-y-2.5">
                    {/* Main User Statement */}
                    <h4 className="text-sm sm:text-base font-extrabold text-[#7A0000] leading-snug">
                      &ldquo;{fact.title}&rdquo;
                    </h4>

                    {/* Elaboration */}
                    <p className="text-xs text-[#7A0000]/85 leading-relaxed font-normal">
                      {fact.quote}
                    </p>
                  </div>
                </div>

                {/* Bottom Paper Footer */}
                <div className="mt-5 pt-3 border-t border-[#7A0000]/15 flex items-center justify-between text-[10px]">
                  <span className="text-[#7A0000]/70 flex items-center gap-1 font-semibold">
                    <Feather className="w-3 h-3 text-[#7A0000]" />
                    <span>— Joanna Michelle</span>
                  </span>

                  <span className="px-2 py-0.5 rounded-sm bg-[#ebd7bc]/80 text-[#7A0000] font-bold uppercase tracking-wider flex items-center gap-1">
                    <Check className="w-3 h-3 text-[#7A0000]" />
                    <span>{fact.stamp}</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Spotify Jam Section */}
        <div className="mt-14 sm:mt-18">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="p-3 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#f4ebdb] border border-[#7A0000]/25 shadow-md max-w-5xl mx-auto"
          >
            {/* Top Bar with Playlist info & Open in Spotify button */}
            <div className="flex items-center justify-between px-2 sm:px-3 pb-3 mb-2 border-b border-[#7A0000]/20">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#1DB954]/15 text-[#1DB954] flex items-center justify-center">
                  <Music className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#7A0000] leading-tight">
                    my jam • joanna
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-[#7A0000]/80">
                    Study & Coding Soundtrack
                  </p>
                </div>
              </div>

              <a
                href={spotifyPlaylistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#ebd7bc] text-[#7A0000] hover:bg-[#1DB954] hover:text-white text-xs font-semibold transition-colors border border-[#7A0000]/20 cursor-pointer"
                title="Open playlist in Spotify app"
                id="btn-open-spotify-playlist"
              >
                <span>Open in Spotify</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Spotify Iframe */}
            <div className="w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-inner bg-black">
              <iframe
                data-testid="embed-iframe"
                style={{
                  borderRadius: '12px',
                  border: 'none',
                  minHeight: '280px',
                  width: '100%',
                }}
                src={spotifyEmbedUrl}
                width="100%"
                height="320"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Joanna's Spotify Playlist"
                className="w-full h-[280px] sm:h-[360px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
