import React, { useState } from 'react';
import { Heart, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

const LoveLetter = ({ onNext }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleEnvelope = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative min-h-screen pt-24 pb-16 flex flex-col items-center justify-center px-6 w-full">
      
      {/* Page Header */}
      <div className="text-center mb-10 z-10">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-textDark font-bold mb-3">
          A Letter From My Heart
        </h2>
        <div className="w-24 h-1 bg-primaryPink/60 mx-auto rounded-full" />
      </div>

      {/* Interactive Envelope Container */}
      <div className="relative w-full max-w-[550px] min-h-[500px] flex items-center justify-center z-10">
        
        {/* Envelope wrapper with perspective */}
        <div 
          className="relative w-full aspect-[4/3] cursor-pointer group"
          onClick={!isOpen ? toggleEnvelope : undefined}
          style={{ perspective: '1000px' }}
        >
          {/* Back of Envelope */}
          <div className="absolute inset-0 bg-[#FFD1DF] border-2 border-[#FFC1D3] rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
            {/* Lined paper shadow */}
            <div className="w-[90%] h-[90%] bg-neutral-200/50 rounded-2xl" />
          </div>

          {/* Letter Card (Rises up and expands) */}
          <motion.div
            animate={
              isOpen
                ? {
                    y: ["0%", "-110%", "-20%"],
                    zIndex: [10, 10, 30],
                    scale: [0.95, 0.95, 1.02],
                    height: ["80%", "80%", "150%"],
                    top: ["10%", "10%", "-25%"],
                  }
                : {
                    y: ["-20%", "-110%", "0%"],
                    zIndex: [30, 10, 10],
                    scale: [1.02, 0.95, 0.95],
                    height: ["150%", "80%", "80%"],
                    top: ["-25%", "10%", "10%"],
                  }
            }
            transition={{ duration: 1.5, times: [0, 0.5, 1], ease: "easeInOut" }}
            className={`absolute left-[5%] right-[5%] rounded-2xl lined-paper shadow-2xl p-6 md:p-8 flex flex-col border border-[#FFE1EB] ${
              isOpen ? 'cursor-text' : 'pointer-events-none'
            }`}
          >
            {/* Stamp/Heart detail on letter top */}
            <div className="flex justify-between items-start mb-4">
              <span className="text-[#FF6FA7] font-serif text-sm italic">My Love,</span>
              <Heart className="h-5 w-5 fill-[#FF6FA7] text-[#FF6FA7]" />
            </div>

            {/* Letter Text */}
            <div className="font-serif text-xs md:text-sm text-textDark/85 italic leading-relaxed flex-grow select-text">
              <p className="mb-2">
                I wanted to create something special, something that could hold a little bit of the feeling you give me every day.
              </p>
              <p className="mb-2">
                Looking back at our memories, I'm constantly reminded of how lucky I am. It's in the quiet mornings with our coffee, the walks where we lose track of time, and the simple comfort of just being near you.
              </p>
              <p className="mb-2">
                You have this beautiful way of making the world feel a little softer, a little brighter. I cherish every laugh we've shared and every challenge we've faced together, knowing we always come out stronger.
              </p>
              <p className="mb-2">
                Thank you for being my favorite person, my confidant, and my home. I can't wait to see what the next chapter holds for us.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-2 text-right">
              <p className="text-xs text-textDark/65">Always yours,</p>
              <p className="text-[#FF6FA7] font-script text-2xl md:text-3xl font-bold mt-1">
                — Ayisha
              </p>
            </div>
          </motion.div>

          {/* Front Flaps (Envelope Face) */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-[#FFC9DA] to-[#FFD1DF] rounded-l-3xl shadow-md pointer-events-none z-20"
            style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
          />

          <div 
            className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-[#FFC9DA] to-[#FFD1DF] rounded-r-3xl shadow-md pointer-events-none z-20"
            style={{ clipPath: 'polygon(100% 0, 0 50%, 100% 100%)' }}
          />

          <div 
            className="absolute left-0 right-0 bottom-0 h-2/3 bg-gradient-to-t from-[#FFAEC6] to-[#FFC5D7] rounded-b-3xl shadow-lg pointer-events-none z-20"
            style={{ clipPath: 'polygon(0 100%, 50% 0, 100% 100%)' }}
          />

          {/* Top Triangle Flap (Rotates up/down) */}
          <div
            style={{ 
              transform: isOpen ? 'rotateX(180deg)' : 'rotateX(0deg)',
              transition: 'transform 0.5s ease-in-out',
              clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
              backfaceVisibility: 'hidden',
            }}
            className="absolute left-0 right-0 top-0 h-1/2 bg-gradient-to-b from-[#FFA5C0] to-[#FFB9CF] rounded-t-3xl shadow-sm origin-top pointer-events-none z-[25]"
          />

          {/* Wax Heart Seal (Click to open trigger) */}
          {!isOpen && (
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[35] flex items-center justify-center">
              <div className="bg-primaryPink hover:bg-primaryPink/95 text-white p-4 rounded-full shadow-lg border-4 border-white transform hover:scale-115 active:scale-95 transition-all duration-300">
                <Heart className="h-7 w-7 fill-white text-white" />
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Controllers */}
      {isOpen && (
        <div className="mt-64 z-10 flex flex-col md:flex-row gap-4 items-center">
          <button
            onClick={toggleEnvelope}
            className="bg-primaryPink hover:bg-primaryPink/90 text-white font-medium px-8 py-3.5 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-md flex items-center gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            <span>Read Again</span>
          </button>
          
          {onNext && (
            <motion.button
              onClick={onNext}
              className="px-8 py-3.5 rounded-full border border-rose/30 text-textDark bg-white/50 hover:bg-rose/10 transition-colors duration-300 font-sans tracking-widest uppercase text-xs cursor-pointer shadow-sm flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Memories <span>→</span>
            </motion.button>
          )}
        </div>
      )}
      
    </div>
  );
};

export default LoveLetter;
