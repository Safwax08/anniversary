import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Music } from 'lucide-react';
import FloatingParticles from './components/FloatingParticles';
import PinEntry from './components/PinEntry';
import SpecialDayIntro from './components/SpecialDayIntro';
import HeroCounter from './components/HeroCounter';
import MemoryGallery from './components/MemoryGallery';
import InteractiveQuestion from './components/InteractiveQuestion';
import LoveLetter from './components/LoveLetter';
import YaySuccess from './components/YaySuccess';
import FinalMessage from './components/FinalMessage';
import Footer from './components/Footer';
import './App.css';

// Transition variant for room entry/exit
const roomVariants = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, scale: 1.02, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

function App() {
  const [currentRoom, setCurrentRoom] = useState(0);

  useEffect(() => {
    document.body.classList.add('bg-cream');
    return () => {
      document.body.classList.remove('bg-cream');
    };
  }, []);

  const handleNext = () => {
    setCurrentRoom((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestart = () => {
    setCurrentRoom(1); // Restart to special day intro
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden overflow-y-auto text-textDark flex flex-col">
      <FloatingParticles />
      
      {/* Music Icon matching screenshot */}
      <div className="absolute top-8 right-8 z-50 text-textLight hover:text-rose transition-colors cursor-pointer">
        <Music size={20} />
      </div>
      
      <div className="relative z-10 w-full flex-grow flex flex-col justify-center items-center min-h-screen">
        <AnimatePresence mode="wait">
          
          {currentRoom === 0 && (
            <motion.div key="pin-entry" variants={roomVariants} initial="initial" animate="animate" exit="exit" className="w-full flex-1 flex justify-center items-center">
              <PinEntry onNext={handleNext} />
            </motion.div>
          )}

          {currentRoom === 1 && (
            <motion.div key="special-day" variants={roomVariants} initial="initial" animate="animate" exit="exit" className="w-full flex-1 flex justify-center items-center">
              <SpecialDayIntro onNext={handleNext} />
            </motion.div>
          )}

          {currentRoom === 2 && (
            <motion.div key="hero-counter" variants={roomVariants} initial="initial" animate="animate" exit="exit" className="w-full flex-1 flex justify-center items-center">
              <HeroCounter onNext={handleNext} />
            </motion.div>
          )}

          {currentRoom === 3 && (
            <motion.div key="love-letter" variants={roomVariants} initial="initial" animate="animate" exit="exit" className="w-full flex-1 flex justify-center items-center">
              <LoveLetter onNext={handleNext} />
            </motion.div>
          )}

          {currentRoom === 4 && (
            <motion.div key="memory-gallery" variants={roomVariants} initial="initial" animate="animate" exit="exit" className="w-full flex-1 flex justify-center items-center">
              <MemoryGallery onNext={handleNext} />
            </motion.div>
          )}

          {currentRoom === 5 && (
            <motion.div key="interactive-question" variants={roomVariants} initial="initial" animate="animate" exit="exit" className="w-full flex-1 flex justify-center items-center">
              <InteractiveQuestion onNext={handleNext} />
            </motion.div>
          )}

          {currentRoom === 6 && (
            <motion.div key="yay-success" variants={roomVariants} initial="initial" animate="animate" exit="exit" className="w-full flex-1 flex justify-center items-center">
              <YaySuccess onNext={handleNext} onRestart={handleRestart} />
            </motion.div>
          )}

          {currentRoom === 7 && (
            <motion.div key="final-message" variants={roomVariants} initial="initial" animate="animate" exit="exit" className="w-full flex-1 flex justify-center items-center">
              <FinalMessage onRestart={handleRestart} />
            </motion.div>
          )}

        </AnimatePresence>
      </div>
      
      <Footer />
    </main>
  );
}

export default App;
