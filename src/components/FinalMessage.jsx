import React from 'react';
import { motion } from 'framer-motion';

const FinalMessage = ({ onRestart }) => {
  return (
    <section className="w-full flex flex-col items-center justify-center relative z-10 px-6 py-20 min-h-screen text-center">
      <motion.div
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      >
        <h2 className="font-bebas text-5xl md:text-7xl tracking-widest text-textDark mb-6">
          HAPPY ANNIVERSARY <span className="font-sans text-rose font-normal">❤️</span>
        </h2>
        
        <p className="font-script text-3xl md:text-4xl text-rose/90 leading-relaxed mb-12">
          Here's to every memory we've made,<br />
          and every beautiful moment still waiting for us.
        </p>

        <motion.div
          animate={{ 
            y: [0, -10, 0],
            scale: [1, 1.08, 1] 
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="text-rose text-4xl mb-12"
        >
          ✧
        </motion.div>

        {onRestart && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.button
              onClick={onRestart}
              className="px-8 py-3 rounded-full bg-[#8C4A54] hover:bg-[#783D46] text-white font-sans text-xs uppercase tracking-widest shadow-md transition-all cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Replay Our Story ↺
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default FinalMessage;
