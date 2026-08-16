import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function StoryControls({ currentStep, totalSteps, onNext, onPrev }) {
  // Show progress bar
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <>
      {/* Invisible Click Zones for Mobile/Desktop (Optional but cool) */}
      <div 
        className="fixed inset-y-0 left-0 w-1/4 z-[9980] cursor-pointer" 
        onClick={onPrev}
        aria-label="Previous Chapter"
      />
      <div 
        className="fixed inset-y-0 right-0 w-1/4 z-[9980] cursor-pointer" 
        onClick={onNext}
        aria-label="Next Chapter"
      />

      {/* Visible Controls Overlay */}
      <div className="fixed bottom-8 left-0 right-0 flex flex-col items-center justify-center z-[9990] pointer-events-none px-6">
        
        <div className="flex items-center gap-6 pointer-events-auto">
          {currentStep > 0 && (
            <button
              onClick={onPrev}
              className="glass hover:bg-white/40 text-primaryPink p-4 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-x-1 active:scale-95 flex items-center justify-center backdrop-blur-md border border-white/50"
              aria-label="Previous Chapter"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {currentStep < totalSteps - 1 && (
            <button
              onClick={onNext}
              className="bg-primaryPink/90 hover:bg-primaryPink text-white px-8 py-4 rounded-full shadow-lg hover:shadow-primaryPink/40 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 backdrop-blur-md border border-white/20 animate-pulse-slow"
            >
              <span className="font-medium text-lg tracking-wide">Continue</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Progress indicator */}
        <div className="w-full max-w-md mt-6 h-1.5 bg-white/30 rounded-full overflow-hidden pointer-events-auto shadow-inner">
          <div 
            className="h-full bg-primaryPink transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </>
  );
}
