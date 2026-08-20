import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';
import { X, ExternalLink, RefreshCw, Shield, Globe, Smartphone, Monitor, Code2, Music, Plane, Heart, Search, Calendar, Star, Play, Pause, Volume2, SkipForward, SkipBack, BarChart2, TrendingUp, PieChart, Database, Table } from 'lucide-react';

interface ProjectPreviewModalProps {
  project: Project | null;
  mode: 'live' | 'code';
  onClose: () => void;
}

export const ProjectPreviewModal: React.FC<ProjectPreviewModalProps> = ({
  project,
  mode,
  onClose,
}) => {
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [travelQuery, setTravelQuery] = useState('Bali, Indonesia');
  const [isPlayingEchoTrack, setIsPlayingEchoTrack] = useState(false);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-slate-900 rounded-3xl max-w-5xl w-full border border-slate-700 shadow-2xl overflow-hidden flex flex-col h-[85vh] text-white"
      >
        {/* Browser Frame Title Bar */}
        <div className="p-3.5 bg-slate-800/90 border-b border-slate-700 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onClick={onClose} />
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />

            {/* Address Bar */}
            <div className="ml-4 flex items-center gap-2 px-3 py-1 rounded-xl bg-slate-900/90 border border-slate-700 text-xs text-slate-300 w-64 sm:w-80">
              <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate font-mono text-[11px]">
                {mode === 'live'
                  ? `https://demo.${project.id}.joanna.dev`
                  : `https://github.com/joanna-dev/${project.id}`}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-700">
              <button
                onClick={() => setDevice('desktop')}
                className={`p-1.5 rounded-lg text-xs ${
                  device === 'desktop' ? 'bg-[#7A0000] text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Desktop View"
              >
                <Monitor className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setDevice('mobile')}
                className={`p-1.5 rounded-lg text-xs ${
                  device === 'mobile' ? 'bg-[#7A0000] text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Mobile View"
              >
                <Smartphone className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              id="preview-modal-close-btn"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Device Frame Wrapper */}
        <div className="flex-1 bg-slate-950 p-4 sm:p-6 overflow-y-auto flex justify-center items-center relative">
          <div
            className={`transition-all duration-300 h-full w-full bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden flex flex-col ${
              device === 'mobile' ? 'max-w-xs' : 'max-w-full'
            }`}
          >
            {mode === 'live' ? (
              // Interactive Demo Screen
              <div className="flex-1 flex flex-col overflow-y-auto">
                {project.id === 'travelyuk' && (
                  <div className="p-6 bg-slate-900 text-white space-y-6 flex-1">
                    {/* Travelyuk Demo App Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <Plane className="w-6 h-6 text-red-500" />
                        <span className="font-extrabold text-xl tracking-tight text-white">
                          Travelyuk<span className="text-red-500">.</span>
                        </span>
                      </div>
                      <span className="text-xs bg-red-950 text-red-300 border border-red-800 px-2.5 py-1 rounded-full font-semibold">
                        PostgreSQL Live Session
                      </span>
                    </div>

                    {/* Travel Search Box */}
                    <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3">
                      <p className="text-xs font-bold text-slate-300">Find Destinations & Flights</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs">
                          <Search className="w-4 h-4 text-red-400" />
                          <input
                            type="text"
                            value={travelQuery}
                            onChange={(e) => setTravelQuery(e.target.value)}
                            className="bg-transparent w-full focus:outline-none text-white text-xs"
                          />
                        </div>
                        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-400">
                          <Calendar className="w-4 h-4 text-red-400" />
                          <span>Aug 15 - Aug 22</span>
                        </div>
                        <button className="py-2 px-4 rounded-xl bg-[#7A0000] text-white font-bold text-xs hover:bg-red-700">
                          Search Flights
                        </button>
                      </div>
                    </div>

                    {/* Popular Destinations Cards */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Popular Bookings</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-between">
                          <div>
                            <p className="font-bold text-sm text-white">Ubud Resort & Spa, Bali</p>
                            <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                              <Star className="w-3 h-3 text-amber-400 fill-amber-400" /> 4.9 (1,240 reviews)
                            </p>
                          </div>
                          <span className="text-xs font-extrabold text-red-400">$180/nt</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-between">
                          <div>
                            <p className="font-bold text-sm text-white">Komodo Island Voyage</p>
                            <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                              <Star className="w-3 h-3 text-amber-400 fill-amber-400" /> 4.8 (890 reviews)
                            </p>
                          </div>
                          <span className="text-xs font-extrabold text-red-400">$320/tour</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {project.id === 'echo' && (
                  <div className="p-6 bg-slate-950 text-white space-y-6 flex-1">
                    {/* Echo Music Demo Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <Music className="w-6 h-6 text-red-500" />
                        <span className="font-extrabold text-xl tracking-tight text-white">
                          Echo Stream<span className="text-red-500">.</span>
                        </span>
                      </div>
                      <span className="text-xs bg-red-950 text-red-300 border border-red-800 px-2.5 py-1 rounded-full font-semibold">
                        Web Audio Player
                      </span>
                    </div>

                    {/* Active Track Player */}
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-red-950/60 via-slate-900 to-slate-900 border border-slate-700 text-center space-y-4">
                      <div className="w-24 h-24 rounded-2xl bg-red-900/60 border border-red-500/30 mx-auto flex items-center justify-center shadow-xl">
                        <Music className={`w-10 h-10 text-red-400 ${isPlayingEchoTrack ? 'animate-bounce' : ''}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-white">Acoustic Midnight Focus</h3>
                        <p className="text-xs text-slate-400">Joanna's Chill Lofi Playlist • Echo Master</p>
                      </div>

                      {/* Equalizer Visualizer */}
                      <div className="flex items-center justify-center gap-1 h-8">
                        {[50, 90, 30, 100, 70, 40, 80, 60, 90, 40].map((h, i) => (
                          <span
                            key={i}
                            className="w-1.5 bg-red-500 rounded-full transition-all duration-300"
                            style={{ height: isPlayingEchoTrack ? `${h}%` : '20%' }}
                          />
                        ))}
                      </div>

                      {/* Control Buttons */}
                      <div className="flex items-center justify-center gap-4 pt-2">
                        <SkipBack className="w-5 h-5 text-slate-400 cursor-pointer hover:text-white" />
                        <button
                          onClick={() => setIsPlayingEchoTrack(!isPlayingEchoTrack)}
                          className="p-3 rounded-full bg-[#7A0000] text-white shadow-lg hover:bg-red-700"
                        >
                          {isPlayingEchoTrack ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
                        </button>
                        <SkipForward className="w-5 h-5 text-slate-400 cursor-pointer hover:text-white" />
                      </div>
                    </div>
                  </div>
                )}

                {project.id === 'data-analysis' && (
                  <div className="p-6 bg-slate-950 text-white space-y-6 flex-1 overflow-y-auto">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <BarChart2 className="w-6 h-6 text-red-500" />
                        <span className="font-extrabold text-xl tracking-tight text-white">
                          Data Insights<span className="text-red-500">.</span>
                        </span>
                      </div>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs bg-[#7A0000] hover:bg-red-700 text-white border border-red-500/50 px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 shadow-md transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Open Live App</span>
                      </a>
                    </div>

                    {/* Analytics Summary Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
                        <div className="flex items-center justify-between text-slate-400 text-[11px] mb-1">
                          <span>Total Records</span>
                          <Database className="w-3.5 h-3.5 text-red-400" />
                        </div>
                        <p className="text-lg font-black text-white">128,450</p>
                        <span className="text-[10px] text-emerald-400 font-semibold">+12% cleaned</span>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
                        <div className="flex items-center justify-between text-slate-400 text-[11px] mb-1">
                          <span>Accuracy Rate</span>
                          <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                        </div>
                        <p className="text-lg font-black text-white">99.4%</p>
                        <span className="text-[10px] text-slate-400">Validated</span>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
                        <div className="flex items-center justify-between text-slate-400 text-[11px] mb-1">
                          <span>EDA Models</span>
                          <PieChart className="w-3.5 h-3.5 text-amber-400" />
                        </div>
                        <p className="text-lg font-black text-white">16 Reports</p>
                        <span className="text-[10px] text-amber-400 font-semibold">Python Pandas</span>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
                        <div className="flex items-center justify-between text-slate-400 text-[11px] mb-1">
                          <span>SQL Engine</span>
                          <Table className="w-3.5 h-3.5 text-cyan-400" />
                        </div>
                        <p className="text-lg font-black text-white">Active</p>
                        <span className="text-[10px] text-cyan-400 font-semibold">Fast Query</span>
                      </div>
                    </div>

                    {/* Chart Visualization Mock */}
                    <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-bold text-white">Exploratory Data Analysis Trends</p>
                          <p className="text-[11px] text-slate-400">Monthly metrics performance & data distribution</p>
                        </div>
                        <span className="text-[10px] bg-red-950/80 text-red-300 border border-red-800 px-2 py-0.5 rounded-md font-mono">
                          Python / Pandas
                        </span>
                      </div>

                      <div className="h-28 flex items-end justify-between gap-2 pt-4 px-2 border-b border-slate-800">
                        {[40, 65, 45, 80, 95, 70, 85, 100, 75, 90].map((val, idx) => (
                          <div key={idx} className="flex-1 flex flex-col items-center gap-1 group">
                            <div
                              className="w-full bg-gradient-to-t from-red-900 via-red-600 to-amber-400 rounded-t-sm group-hover:brightness-125 transition-all"
                              style={{ height: `${val}%` }}
                            />
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between text-[10px] text-slate-500 font-mono px-1">
                        <span>Jan</span>
                        <span>Mar</span>
                        <span>May</span>
                        <span>Jul</span>
                        <span>Sep</span>
                        <span>Nov</span>
                      </div>
                    </div>

                    {/* Link Banner */}
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-red-950/80 to-slate-900 border border-red-800/60 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-bold text-white">Explore Full Live App</p>
                        <p className="text-[11px] text-slate-300">
                          Visit Joanna's live Data Analysis application in Google AI Studio
                        </p>
                      </div>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-[#7A0000] hover:bg-red-700 text-white font-bold text-xs shrink-0 flex items-center gap-1.5 shadow-lg"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Launch App</span>
                      </a>
                    </div>
                  </div>
                )}

                {project.id === 'portfolio' && (
                  <div className="p-6 bg-slate-900 text-white space-y-4 flex-1">
                    <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 text-center">
                      <p className="text-xs font-bold text-red-400 uppercase tracking-widest">Active Application</p>
                      <h3 className="text-lg font-bold text-white mt-1">Joanna's Personal Portfolio Website</h3>
                      <p className="text-xs text-slate-400 mt-2">
                        You are currently exploring this exact portfolio application! Engineered with Next.js architecture, React, Tailwind CSS, and Framer Motion.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              // GitHub Code Preview
              <div className="p-6 bg-slate-950 font-mono text-xs text-slate-300 space-y-4 overflow-y-auto flex-1">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-red-400 font-bold">{project.id}/package.json</span>
                  <span className="text-[10px] text-slate-500">MIT License</span>
                </div>
                <pre className="text-emerald-400 bg-slate-900 p-4 rounded-xl border border-slate-800 text-[11px] overflow-x-auto">
{`{
  "name": "${project.id}",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    ${project.techStack.map((t) => `"${t.toLowerCase()}": "^latest"`).join(',\n    ')}
  }
}`}
                </pre>
                <div>
                  <p className="font-bold text-white mb-2">Key Highlights & Architecture:</p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-400">
                    {project.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Control Bar */}
        <div className="p-4 bg-slate-800 border-t border-slate-700 flex justify-between items-center text-xs shrink-0">
          <span className="text-slate-400 font-semibold">{project.title} • {project.category}</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#7A0000] text-white font-bold hover:bg-red-700"
          >
            Close Preview
          </button>
        </div>
      </motion.div>
    </div>
  );
};
