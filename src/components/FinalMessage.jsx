import React from 'react';
import { motion } from 'framer-motion';

const FinalMessage = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center relative z-10 px-6 py-20">
      <motion.div
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
      >
        <h2 className="font-serif text-5xl md:text-7xl text-textDark mb-8">
          Happy Anniversary <span className="font-sans text-rose">❤️</span>
        </h2>
        
        <p className="font-serif text-xl md:text-2xl text-textLight italic leading-relaxed mb-16">
          Here's to every memory we've made,<br />
          and every beautiful moment still waiting for us.
        </p>

        <motion.div
          animate={{ 
            y: [0, -10, 0],
            scale: [1, 1.05, 1] 
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="text-rose text-4xl"
        >
          ✧
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FinalMessage;
