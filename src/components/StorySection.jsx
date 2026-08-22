import React from 'react';
import { motion } from 'framer-motion';

const StorySection = ({ children, className = '' }) => {
  return (
    <motion.section
      className={`min-h-screen w-full flex flex-col items-center justify-center px-6 py-20 relative z-10 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
};

export default StorySection;
