import React from 'react';
import { motion } from 'framer-motion';

const memories = [
  {
    id: 1,
    src: '/images/memory_4.jpg',
    caption: 'Where it all started...',
    rotation: -2,
    yOffset: 0,
  },
  {
    id: 2,
    src: '/images/memory_2.jpg',
    caption: 'My favorite person ❤️',
    rotation: 2,
    yOffset: 10,
  },
  {
    id: 3,
    src: '/images/memory_3.jpg',
    caption: 'Happiest of anniversaries!',
    rotation: -1,
    yOffset: -5,
  }
];

const MemoryGallery = ({ onNext }) => {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 md:py-24 flex flex-col items-center min-h-screen justify-center">
      <motion.h2 
        className="font-script text-4xl md:text-5xl text-rose mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        A Few of Our Moments
      </motion.h2>

      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 mb-16 px-4">
        {memories.map((memory, index) => (
          <motion.div
            key={memory.id}
            className="p-4 bg-white shadow-xl flex flex-col items-center"
            style={{ 
              boxShadow: '0 15px 35px -10px rgba(155, 92, 101, 0.2), 0 0 15px rgba(0,0,0,0.03)'
            }}
            initial={{ 
              opacity: 0, 
              scale: 0.8, 
              rotate: memory.rotation - 5,
              y: memory.yOffset + 50
            }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotate: memory.rotation,
              y: memory.yOffset
            }}
            whileHover={{
              scale: 1.05,
              rotate: 0,
              zIndex: 50,
              boxShadow: '0 25px 50px -12px rgba(155, 92, 101, 0.3)'
            }}
            transition={{ 
              duration: 1.2, 
              delay: 0.5 + (index * 0.3), // staggered entry
              ease: [0.22, 1, 0.36, 1],
              hover: { duration: 0.4, ease: "easeOut" }
            }}
          >
            <div className="w-[200px] h-[240px] md:w-[240px] md:h-[280px] overflow-hidden mb-4 bg-gray-100">
              <img 
                src={memory.src} 
                alt={memory.caption} 
                className="w-full h-full object-cover filter contrast-[0.95]"
              />
            </div>
            <p className="font-script text-xl text-textDark text-center mb-1">{memory.caption}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <motion.button
          onClick={onNext}
          className="px-8 py-3 rounded-full bg-rose text-white hover:bg-rose/90 transition-colors duration-300 font-sans font-medium text-sm shadow-lg shadow-rose/20 flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          One More Thing <span>✧</span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default MemoryGallery;
