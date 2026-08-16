import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function AudioPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  // Chopin Nocturne Op. 9 No. 2 (Classical Romantic Piano, Public Domain)
  const audioUrl = "https://upload.wikimedia.org/wikipedia/commons/e/e8/Chopin_Nocturne_op._9_no._2_performed_by_Donald_Betts.mp3";

  useEffect(() => {
    // Hide tooltip after 6 seconds
    const timer = setTimeout(() => setShowTooltip(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setShowTooltip(false);
      }).catch((err) => {
        console.error("Playback block by browser autoplay policy:", err);
      });
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-[9990] flex items-center gap-2">
      {/* Audio Element */}
      <audio ref={audioRef} src={audioUrl} loop preload="auto" />

      {/* Tooltip */}
      {showTooltip && (
        <div className="glass px-3 py-1.5 rounded-full text-xs text-primaryPink font-medium shadow-md animate-bounce-slow max-w-[200px] text-center border border-rosePink/40">
          Play romantic music 💖
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={togglePlay}
        className="glass-card hover:bg-rosePink/20 text-primaryPink p-3.5 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center border border-rosePink/50 group relative"
        aria-label="Toggle romantic music"
      >
        {isPlaying ? (
          <div className="flex items-end gap-[3px] h-5 w-5 justify-center">
            {/* Visualizer bars */}
            <span className="w-[3px] bg-primaryPink rounded-full animate-visualizer-bar-1" />
            <span className="w-[3px] bg-primaryPink rounded-full animate-visualizer-bar-2" />
            <span className="w-[3px] bg-primaryPink rounded-full animate-visualizer-bar-3" />
            <span className="w-[3px] bg-primaryPink rounded-full animate-visualizer-bar-4" />
          </div>
        ) : (
          <VolumeX className="h-5 w-5 text-primaryPink group-hover:rotate-12 transition-transform duration-300" />
        )}
      </button>

      <style>{`
        .animate-visualizer-bar-1 { height: 100%; animation: bounceBar 1.2s ease-in-out infinite alternate; }
        .animate-visualizer-bar-2 { height: 100%; animation: bounceBar 0.8s ease-in-out infinite alternate 0.2s; }
        .animate-visualizer-bar-3 { height: 100%; animation: bounceBar 1.4s ease-in-out infinite alternate 0.1s; }
        .animate-visualizer-bar-4 { height: 100%; animation: bounceBar 1.0s ease-in-out infinite alternate 0.3s; }

        @keyframes bounceBar {
          0% { height: 25%; }
          100% { height: 100%; }
        }
      `}</style>
    </div>
  );
}
