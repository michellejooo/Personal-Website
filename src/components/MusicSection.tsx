import React from 'react';
import { Music } from 'lucide-react';

export const MusicSection: React.FC = () => {
  return (
    <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center">
      <div className="w-full max-w-[440px]">
        <div className="flex items-center justify-between mb-2 px-1">
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-600 dark:text-slate-300">
            <Music className="w-3.5 h-3.5 text-[#7A0000] dark:text-red-400" />
            <span>Study Playlist</span>
          </div>
          <span className="text-[11px] font-medium text-gray-400 dark:text-slate-500">
            Spotify
          </span>
        </div>

        <div className="rounded-xl overflow-hidden shadow-xs border border-gray-200 dark:border-slate-800 bg-[#121212]">
          <iframe
            data-testid="embed-iframe"
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/playlist/30WSpzKASlT69XakEIBCo9?utm_source=generator&theme=0"
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Joanna's Study Playlist"
            className="w-full block"
          />
        </div>
      </div>
    </div>
  );
};
