import React from 'react';
import { motion } from 'framer-motion';

const LoveLetter = ({ onNext }) => {
  return (
    <div className="w-full max-w-3xl mx-auto py-12 md:py-24 px-6 relative flex flex-col items-center">
      <motion.div
        className="bg-creamDark/30 p-8 md:p-16 rounded-sm shadow-sm relative overflow-hidden w-full"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Subtle decorative lines for paper feel */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_95%,rgba(217,166,166,0.1)_100%)] bg-[length:100%_2rem] pointer-events-none"></div>
        
        <div className="relative z-10 font-serif text-lg md:text-xl text-textDark leading-loose space-y-8">
          <motion.p 
            className="font-script text-3xl md:text-4xl text-rose mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Dear Love,
          </motion.p>
          
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}>
            I wanted to create something special, something that could hold a little bit of the feeling you give me every day. 
          </motion.p>
          
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3, duration: 1 }}>
            Looking back at our memories, I'm constantly reminded of how lucky I am. It's in the quiet mornings with our coffee, the walks where we lose track of time, and the simple comfort of just being near you.
          </motion.p>
          
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4, duration: 1 }}>
            You have this beautiful way of making the world feel a little softer, a little brighter. I cherish every laugh we've shared and every challenge we've faced together, knowing we always come out stronger.
          </motion.p>
          
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5, duration: 1 }}>
            Thank you for being my favorite person, my confidant, and my home. I can't wait to see what the next chapter holds for us.
          </motion.p>
          
          <motion.div 
            className="pt-12 text-right"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 6, duration: 1 }}
          >
            <p className="italic text-textLight mb-4">Always yours,</p>
            <p className="font-script text-4xl md:text-5xl text-rose">— Ayisha</p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 7.5, duration: 1 }}
        className="mt-12"
      >
        <motion.button
          onClick={onNext}
          className="px-8 py-3 rounded-full border border-rose/30 text-textDark bg-transparent hover:bg-rose/10 transition-colors duration-300 font-sans tracking-widest uppercase text-xs cursor-pointer shadow-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Our Memories <span>→</span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default LoveLetter;
