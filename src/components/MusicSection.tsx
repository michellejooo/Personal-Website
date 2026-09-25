import React from 'react';
import { Music } from 'lucide-react';

export const MusicSection: React.FC = () => {
  return (
    <div className="mt-14 max-w-3xl mx-auto">
      <div className="flex items-center gap-2 mb-3 text-xs font-semibold text-gray-500 dark:text-slate-400">
        <Music className="w-3.5 h-3.5 text-[#7A0000] dark:text-red-400" />
        <span>Study Playlist</span>
      </div>

      <div className="rounded-2xl overflow-hidden border border-gray-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-xs">
        <iframe
          data-testid="embed-iframe"
          src="https://open.spotify.com/embed/playlist/30WSpzKASlT69XakEIBCo9?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Joanna's Study Playlist"
          className="w-full"
        />
      </div>
    </div>
  );
};
