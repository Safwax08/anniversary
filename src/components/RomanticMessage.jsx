import React from 'react';
import { motion } from 'framer-motion';

const RomanticMessage = ({ onNext }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1.5
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="max-w-2xl mx-auto text-center w-full px-6 py-20">
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="w-12 h-[1px] bg-rose/40 mx-auto"></div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-10 md:gap-14"
      >
        <motion.p variants={item} className="font-serif text-3xl md:text-5xl text-textDark leading-tight">
          To the person who makes<br />ordinary days feel
        </motion.p>
        
        <motion.p variants={item} className="font-script text-4xl md:text-6xl text-rose -rotate-2">
          a little more special...
        </motion.p>
        
        <motion.p variants={item} className="font-serif text-xl md:text-2xl text-textLight italic mt-4">
          Every moment with you is a gift I never want to stop opening.
        </motion.p>

        <motion.div 
          className="mt-8"
          variants={item}
        >
          <motion.button
            onClick={onNext}
            className="px-8 py-3 rounded-full border border-rose/30 text-textDark bg-white/50 hover:bg-rose/10 transition-colors duration-300 font-sans tracking-widest uppercase text-xs cursor-pointer shadow-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Continue
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RomanticMessage;
