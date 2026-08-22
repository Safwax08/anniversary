import React from 'react';
import { motion } from 'framer-motion';

const Intro = ({ onNext }) => {
  return (
    <section className="w-full flex flex-col items-center justify-center relative z-10 px-6 py-20">
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
      >
        <p className="font-serif text-xl md:text-2xl text-textLight italic max-w-lg mx-auto leading-relaxed">
          Imagine receiving this website on your anniversary...
        </p>
        <motion.div
          className="mt-12 text-rose mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
        >
          <span className="text-3xl">❤️</span>
        </motion.div>

        <motion.button
          onClick={onNext}
          className="px-8 py-3 rounded-full border border-rose/30 text-textDark bg-transparent hover:bg-rose/5 transition-colors duration-300 font-sans tracking-widest uppercase text-xs cursor-pointer group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.5, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Begin Journey <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">✧</span>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Intro;
