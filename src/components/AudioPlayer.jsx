import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  // Chopin Nocturne Op. 9 No. 2 (Classical Romantic Piano)
  const audioUrl = "https://upload.wikimedia.org/wikipedia/commons/e/e8/Chopin_Nocturne_op._9_no._2_performed_by_Donald_Betts.mp3";

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 5000);
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
        console.error("Playback prevented by browser policy:", err);
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 md:right-8 z-40 flex items-center gap-3">
      {/* Audio Element */}
      <audio ref={audioRef} src={audioUrl} loop preload="auto" />

      {/* Subtle Hint Tooltip */}
      {showTooltip && (
        <div className="bg-cream border border-rose/25 text-textDark text-[10px] font-sans tracking-[0.2em] uppercase py-1.5 px-3 shadow-sm rounded-none">
          Ambient Piano
        </div>
      )}

      {/* Toggle button */}
      <button
        type="button"
        onClick={togglePlay}
        className="w-10 h-10 bg-cream/95 hover:bg-cream border border-rose/30 text-textDark hover:text-rose rounded-none shadow-[0_4px_12px_rgba(41,36,38,0.06)] transition-all duration-300 flex items-center justify-center group"
        aria-label="Toggle ambient soundtrack"
      >
        {isPlaying ? (
          <div className="flex items-end gap-[2px] h-3.5 w-3.5 justify-center">
            <span className="w-[1.5px] bg-rose rounded-none animate-pulse" style={{ height: '80%' }} />
            <span className="w-[1.5px] bg-rose rounded-none animate-pulse" style={{ height: '100%', animationDelay: '150ms' }} />
            <span className="w-[1.5px] bg-rose rounded-none animate-pulse" style={{ height: '60%', animationDelay: '300ms' }} />
          </div>
        ) : (
          <VolumeX className="h-4 w-4 text-textDark/70 group-hover:text-rose transition-colors duration-300" />
        )}
      </button>
    </div>
  );
}
