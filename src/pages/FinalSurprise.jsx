import React, { useState } from 'react';
import { Heart, Gift, Sparkles, Smile } from 'lucide-react';

export default function FinalSurprise() {
  const [hasAccepted, setHasAccepted] = useState(false);
  const [noBtnPos, setNoBtnPos] = useState({ x: 0, y: 0 });

  const polaroid1 = "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=400";
  const polaroid2 = "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=400";
  const bouquetImg = "https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=400";

  const triggerConfetti = () => {
    // Confetti animation removed
  };

  const handleYes = () => {
    setHasAccepted(true);
    triggerConfetti();
  };

  // Dodge action for the No button
  const handleNoHover = () => {
    const randomX = (Math.random() - 0.5) * 260; // range limit
    const randomY = (Math.random() - 0.5) * 160;
    setNoBtnPos({ x: randomX, y: randomY });
  };

  return (
    <div className="relative min-h-screen pt-24 pb-16 flex items-center justify-center px-6">
      
      {/* Background Hearts */}
      <div className="absolute top-20 left-10 text-7xl opacity-10 select-none">
        🌹
      </div>
      <div className="absolute bottom-20 right-10 text-7xl opacity-10 select-none">
        💝
      </div>

      <div className="max-w-4xl w-full z-10">
        <div>
          
          {/* Phase 1: Interactive Proposal Quiz */}
          {!hasAccepted ? (
            <div
              className="glass-card rounded-3xl p-8 md:p-12 text-center max-w-xl mx-auto shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primaryPink to-rosePink" />
              
              <div className="h-16 w-16 bg-rosePink/15 rounded-full flex items-center justify-center text-primaryPink mx-auto mb-6">
                <Gift className="h-8 w-8" />
              </div>

              <h2 className="font-serif text-2xl md:text-3xl font-bold text-textDark mb-4">
                I have a very important question for you...
              </h2>
              
              <p className="text-textDark/75 text-sm md:text-base font-light mb-8 leading-relaxed">
                We have written so many beautiful pages in our love story. Will you continue writing this forever with me?
              </p>

              {/* Control Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative min-h-[80px]">
                
                {/* YES Button */}
                <button
                  onClick={handleYes}
                  className="bg-primaryPink hover:bg-primaryPink/90 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-primaryPink/30 hover:scale-105 active:scale-95 transition-all duration-300 z-10"
                >
                  Yes, always! ❤️
                </button>

                {/* NO Button (Dodging) */}
                <button
                  style={{
                    transform: `translate(${noBtnPos.x}px, ${noBtnPos.y}px)`,
                    transition: 'transform 0.15s ease-out'
                  }}
                  onMouseEnter={handleNoHover}
                  onClick={handleNoHover}
                  className="bg-white hover:bg-neutral-50 text-neutral-500 font-semibold px-8 py-4 rounded-full shadow-md border border-neutral-200 z-10 cursor-default select-none"
                >
                  No 😢
                </button>

              </div>
            </div>
          ) : (
            
            // Phase 2: Success Reveal!
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              
              {/* Left Column: Sweet Blessing Letter */}
              <div className="glass-card rounded-3xl p-8 md:p-10 shadow-2xl relative border border-rosePink/20 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-5 w-5 text-primaryPink" />
                  <span className="text-primaryPink text-sm font-bold uppercase tracking-wider">
                    Our Forever Blessing
                  </span>
                </div>
                
                <h2 className="font-serif text-3xl md:text-4xl text-textDark font-bold mb-4">
                  You Are My Greatest Blessing
                </h2>
                
                <div className="w-20 h-1 bg-primaryPink/60 rounded-full mb-6" />

                <p className="text-sm md:text-base text-textDark/85 font-light leading-relaxed mb-6">
                  Thank you for being the most supportive, beautiful, and loving part of my life. Every day with you is a gift, and every year is a new adventure. 
                </p>

                <p className="font-serif text-lg text-primaryPink font-bold italic mb-6">
                  Happy Anniversary, My Love! 💕
                </p>

                <button
                  onClick={triggerConfetti}
                  className="bg-primaryPink hover:bg-primaryPink/90 text-white font-medium px-6 py-3 rounded-full shadow-md hover:scale-105 active:scale-95 transition-all duration-300 self-start flex items-center gap-2"
                >
                  <Smile className="h-4 w-4" />
                  <span>Shower More Confetti!</span>
                </button>
              </div>

              {/* Right Column: Polaroid couple frames and bouquet collage */}
              <div className="relative flex flex-col sm:flex-row items-center justify-center gap-6">
                
                {/* Polaroid Frame 1 */}
                <div
                  className="bg-white p-4 pb-10 shadow-xl border border-neutral-100 rounded-lg transform max-w-[200px] hover:rotate-0 -rotate-6 transition-transform duration-300"
                >
                  <div className="aspect-square w-full rounded-md overflow-hidden bg-neutral-100 mb-4">
                    <img
                      src={polaroid1}
                      alt="Us 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-serif text-xs text-textDark/75 text-center italic">
                    Best moments...
                  </p>
                </div>

                {/* Polaroid Frame 2 & Bouquet stack */}
                <div className="flex flex-col gap-6 items-center">
                  
                  {/* Polaroid Frame 2 */}
                  <div
                    className="bg-white p-4 pb-10 shadow-xl border border-neutral-100 rounded-lg transform max-w-[200px] hover:rotate-0 rotate-6 transition-transform duration-300"
                  >
                    <div className="aspect-square w-full rounded-md overflow-hidden bg-neutral-100 mb-4">
                      <img
                        src={polaroid2}
                        alt="Us 2"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="font-serif text-xs text-textDark/75 text-center italic">
                      My happy place.
                    </p>
                  </div>

                  {/* Bouquet Icon/Image */}
                  <div
                    className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg"
                  >
                    <img
                      src={bouquetImg}
                      alt="Bouquet of Roses"
                      className="w-full h-full object-cover"
                    />
                  </div>

                </div>

              </div>

            </div>
          )}

        </div>
      </div>

    </div>
  );
}
