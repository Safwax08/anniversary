import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveQuestion = ({ onNext }) => {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const handleHoverNo = () => {
    // Random position within a constrained radius
    const randomX = (Math.random() - 0.5) * 300;
    const randomY = (Math.random() - 0.5) * 200;
    setNoPosition({ x: randomX, y: randomY });
  };

  return (
    <section className="w-full flex flex-col items-center justify-center relative z-10 px-6 py-20 min-h-screen">
      <motion.div
        className="bg-creamDark/20 p-12 md:p-20 rounded-3xl shadow-sm text-center max-w-2xl w-full relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="font-script text-4xl md:text-5xl text-rose mb-3">
          Will you stay mine...
        </h2>
        <p className="font-script text-3xl md:text-4xl text-rose mb-12">
          for all the years to come?
        </p>

        <div className="flex flex-row items-center justify-center gap-8 mt-12 relative h-16">

          {/* Moving No Button */}
          <motion.div
            className="absolute left-1/2"
            animate={{ x: -120 + noPosition.x, y: noPosition.y }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            onHoverStart={handleHoverNo}
          >
            <button className="px-6 py-3 rounded-full bg-textLight/60 text-white font-sans text-sm font-medium shadow-md cursor-not-allowed whitespace-nowrap">
              No way! 😡
            </button>
          </motion.div>

          {/* Yes Button */}
          <motion.div
            className="absolute left-1/2"
            animate={{ x: 20 }} // Initial offset to make space for the no button
          >
            <motion.button
              onClick={onNext}
              className="px-8 py-3 rounded-full bg-rose text-white font-sans text-sm font-medium shadow-lg shadow-rose/30 whitespace-nowrap"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Yes, Forever! ❤️
            </motion.button>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default InteractiveQuestion;
