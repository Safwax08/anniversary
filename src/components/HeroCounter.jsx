import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const HeroCounter = ({ onNext }) => {
  const [count, setCount] = useState(0);
  const targetDays = 365;

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / targetDays));
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= targetDays) {
        clearInterval(timer);
        setCount(targetDays);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [targetDays]);

  return (
    <section className="w-full flex flex-col items-center justify-center relative z-10 px-6 py-20 min-h-screen text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="font-serif text-4xl md:text-5xl text-textDark font-light tracking-wide mb-2">
          Happy Anniversary
        </h1>
        <h2 className="font-script text-5xl md:text-7xl text-rose mb-16">
          My Love!
        </h2>
      </motion.div>

      <motion.div
        className="flex flex-col items-center mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="font-serif text-6xl md:text-8xl text-rose mb-2 font-medium tracking-wider" style={{ fontVariantNumeric: 'tabular-nums' }}>
          {count}
        </div>
        <div className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-textDark font-medium">
          Days of Togetherness
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.button
          onClick={onNext}
          className="px-8 py-3 rounded-full bg-rose text-white hover:bg-rose/90 transition-colors duration-300 font-sans font-medium text-sm shadow-lg shadow-rose/20 flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Read My Letter <span>→</span>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroCounter;
