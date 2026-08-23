import React from 'react';
import { motion } from 'framer-motion';

const YaySuccess = ({ onNext, onRestart }) => {
  return (
    <section className="w-full flex flex-col items-center justify-center relative z-10 px-6 py-12 min-h-screen">
      <motion.div
        className="bg-[#E4EFEA] p-8 md:p-12 rounded-[28px] shadow-xl border border-white/80 text-center max-w-md md:max-w-lg w-full relative z-20"
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Kissing Bears GIF */}
        <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 relative">
          <img 
            src="/images/kiss.gif" 
            alt="Kissing Bears" 
            className="w-full h-full object-contain mix-blend-multiply rounded-xl"
          />
        </div>

        {/* Red Script Title */}
        <h2 className="font-script text-4xl md:text-5xl text-[#A81C37] mb-4 font-normal">
          Yay! He said YES!
        </h2>

        {/* Sweet Romantic Message */}
        <p className="font-serif text-sm md:text-base text-textDark/80 leading-relaxed mb-8 max-w-sm mx-auto">
          You are mine and mine only! I love you more than anything in the world. Happiest of anniversaries to us! 😘
        </p>

        {/* Action Buttons Row */}
        <div className="flex flex-row items-center justify-center gap-4">
          {/* Close with Love Button (Advances to Final Message) */}
          <motion.button
            onClick={onNext}
            className="px-6 py-2.5 rounded-full bg-[#8C4A54] hover:bg-[#783D46] text-white font-sans text-xs md:text-sm font-medium shadow-md transition-all cursor-pointer flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Close with Love <span>→</span>
          </motion.button>

          {/* Restart Button */}
          <motion.button
            onClick={onRestart}
            className="px-6 py-2.5 rounded-full border border-[#8C4A54]/40 text-[#8C4A54] hover:bg-[#8C4A54]/10 font-sans text-xs md:text-sm font-medium transition-all cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Restart ↺
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default YaySuccess;
