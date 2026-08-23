import React from 'react';
import { motion } from 'framer-motion';

const SpecialDayIntro = ({ onNext }) => {
  return (
    <section className="w-full flex flex-col items-center justify-center relative z-10 px-6 py-20 min-h-screen text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <p className="font-script text-2xl md:text-3xl text-rose/90 mb-3">
          It's our special day, my love.
        </p>
        
        <h2 className="font-bebas text-3xl md:text-5xl text-textDark tracking-widest mb-1 font-normal">
          I HAVE MADE SOMETHING
        </h2>
        <h2 className="font-script text-4xl md:text-6xl text-rose mb-10 -rotate-2">
          special for you
        </h2>
      </motion.div>

      <motion.div
        className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] mb-16 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        {/* Animated dancing bears GIF */}
        <img 
          src="/images/kiss.gif" 
          alt="Dancing Bears" 
          className="w-full h-full object-contain mix-blend-multiply rounded-xl" 
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <motion.button
          onClick={onNext}
          className="px-8 py-3 rounded-full bg-[#B92F3E] text-white hover:bg-rose transition-colors duration-300 font-sans font-medium text-sm shadow-lg shadow-rose/20 flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          See what's next <span>→</span>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default SpecialDayIntro;
