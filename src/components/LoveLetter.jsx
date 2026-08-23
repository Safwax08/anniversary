import React, { useState } from 'react';
import { Heart, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

const LoveLetter = ({ onNext }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isZIndexHigh, setIsZIndexHigh] = useState(false);
  const timerRef = React.useRef(null);

  const toggleEnvelope = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (!isOpen) {
      setIsOpen(true);
      timerRef.current = setTimeout(() => setIsZIndexHigh(true), 750);
    } else {
      setIsZIndexHigh(false);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative min-h-screen pt-12 pb-12 flex flex-col items-center justify-center px-6 w-full overflow-hidden">
      
      {/* Background Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-rose/30"
            style={{
              left: `${(i * 8.3) + Math.random() * 5}%`,
              bottom: '-10%',
              fontSize: `${Math.random() * 16 + 12}px`,
            }}
            animate={{
              y: [0, -window.innerHeight * 1.2],
              x: [0, (i % 2 === 0 ? 30 : -30), 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 12 + (i % 5) * 2,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "linear",
            }}
          >
            ♥
          </motion.div>
        ))}
      </div>

      {/* Interactive Envelope Container */}
      <div className="relative w-full max-w-[500px] min-h-[420px] flex flex-col items-center justify-center z-10">
        
        {/* Envelope wrapper with perspective */}
        <div 
          className="relative w-full aspect-[4/3] cursor-pointer group"
          onClick={!isOpen ? toggleEnvelope : undefined}
          style={{ perspective: '1000px' }}
        >
          {/* Back of Envelope */}
          <div className="absolute inset-0 bg-[#A81C37] border-2 border-[#8B152B] rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
            {/* Lined paper shadow */}
            <div className="w-[92%] h-[92%] bg-[#F5E6E8]/40 rounded-xl" />
          </div>

          {/* Letter Card (Rises up and expands) */}
          <motion.div
            style={{ zIndex: isZIndexHigh ? 30 : 10 }}
            animate={
              isOpen
                ? {
                    y: ["0%", "-110%", "-10%"],
                    scale: [0.95, 0.95, 1.02],
                    height: ["80%", "80%", "135%"],
                    top: ["10%", "10%", "-10%"],
                    left: ["5%", "5%", "2%"],
                    right: ["5%", "5%", "2%"],
                  }
                : {
                    y: ["-10%", "-110%", "0%"],
                    scale: [1.02, 0.95, 0.95],
                    height: ["135%", "80%", "80%"],
                    top: ["-10%", "10%", "10%"],
                    left: ["2%", "5%", "5%"],
                    right: ["2%", "5%", "5%"],
                  }
            }
            transition={{ duration: 1.5, times: [0, 0.5, 1], ease: "easeInOut" }}
            className={`absolute rounded-2xl bg-[#FFFDF9] shadow-2xl p-6 md:p-8 flex flex-col border border-[#F0D5DA] overflow-hidden ${
              isOpen ? 'cursor-text' : 'pointer-events-none'
            }`}
          >
            {/* Stamp/Greeting detail on letter top */}
            <div className="flex justify-between items-start mb-4">
              <span className="text-[#A81C37] font-script text-3xl md:text-4xl font-semibold">
                My Love,
              </span>
              <Heart className="h-5 w-5 fill-[#A81C37] text-[#A81C37]" />
            </div>

            {/* Letter Text */}
            <div className="font-serif text-sm md:text-base text-textDark/85 italic leading-relaxed flex-grow select-text">
              <p className="mb-3">
                I wanted to create something special, something that could hold a little bit of the feeling you give me every day.
              </p>
              <p className="mb-3">
                Looking back at our memories, I'm constantly reminded of how lucky I am. It's in the quiet mornings with our coffee, the walks where we lose track of time, and the simple comfort of just being near you.
              </p>
              <p className="mb-3">
                You have this beautiful way of making the world feel a little softer, a little brighter. I cherish every laugh we've shared and every challenge we've faced together, knowing we always come out stronger.
              </p>
              <p className="mb-3">
                Thank you for being my favorite person, my confidant, and my home. I can't wait to see what the next chapter holds for us.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-3 text-right">
              <p className="text-xs text-textDark/65 font-sans uppercase tracking-widest">Always yours,</p>
              <p className="text-[#A81C37] font-script text-3xl md:text-4xl font-bold mt-1">
                — Ayisha
              </p>
            </div>
          </motion.div>

          {/* Front Flaps (Envelope Face - Deep Crimson Red) */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-[#B92F3E] to-[#A81C37] rounded-l-2xl shadow-md pointer-events-none z-20"
            style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
          />

          <div 
            className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-[#B92F3E] to-[#A81C37] rounded-r-2xl shadow-md pointer-events-none z-20"
            style={{ clipPath: 'polygon(100% 0, 0 50%, 100% 100%)' }}
          />

          <div 
            className="absolute left-0 right-0 bottom-0 h-2/3 bg-gradient-to-t from-[#8B152B] to-[#991B1B] rounded-b-2xl shadow-lg pointer-events-none z-20"
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
            className="absolute left-0 right-0 top-0 h-1/2 bg-gradient-to-b from-[#B92F3E] to-[#A81C37] rounded-t-2xl shadow-sm origin-top pointer-events-none z-[25]"
          />

          {/* Wax Heart Seal (Click to open trigger) */}
          {!isOpen && (
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[35] flex items-center justify-center">
              <div className="bg-[#B92F3E] hover:bg-[#8B152B] text-white p-3.5 rounded-full shadow-xl border-2 border-white transform hover:scale-110 active:scale-95 transition-all duration-300">
                <Heart className="h-6 w-6 fill-white text-white" />
              </div>
            </div>
          )}
        </div>

        {/* Closed Envelope Caption */}
        {!isOpen && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-[#A81C37] font-serif italic text-sm md:text-base tracking-wide"
          >
            Click to open your letter
          </motion.p>
        )}

      </div>

      {/* Controllers */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-10 z-10 flex flex-col md:flex-row gap-4 items-center"
        >
          <button
            onClick={toggleEnvelope}
            className="bg-[#B92F3E] hover:bg-[#8B152B] text-white font-medium px-7 py-3 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-md flex items-center gap-2 text-xs uppercase tracking-widest"
          >
            <RefreshCw className="h-4 w-4" />
            <span>Read Again</span>
          </button>
          
          {onNext && (
            <motion.button
              onClick={onNext}
              className="bg-[#B92F3E] hover:bg-[#8B152B] text-white font-medium px-8 py-3 rounded-full transition-all duration-300 font-sans tracking-widest uppercase text-xs cursor-pointer shadow-md flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Memories <span>→</span>
            </motion.button>
          )}
        </motion.div>
      )}
      
    </div>
  );
};

export default LoveLetter;
