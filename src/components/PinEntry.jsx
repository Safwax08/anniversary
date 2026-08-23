import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Delete } from 'lucide-react';

const CORRECT_PIN = "0824";

const PinEntry = ({ onNext }) => {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);

  const handlePress = (digit) => {
    if (pin.length < 4) {
      const newPin = pin + digit;
      setPin(newPin);
      setError(false);
      
      if (newPin.length === 4) {
        if (newPin === CORRECT_PIN) {
          setTimeout(onNext, 500);
        } else {
          setError(true);
          setTimeout(() => setPin(""), 800);
        }
      }
    }
  };

  const handleBackspace = () => {
    setPin(pin.slice(0, -1));
    setError(false);
  };

  const handleClear = () => {
    setPin("");
    setError(false);
  };

  return (
    <section className="w-full flex flex-col items-center justify-center relative z-10 px-6 py-10 md:py-20 min-h-screen">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
        
        {/* Left Side: Polaroid */}
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="mb-6 text-center">
            <h2 className="font-sans text-2xl md:text-3xl font-semibold text-textDark mb-1">For My Love</h2>
            <p className="font-sans text-sm text-textLight">Enter our special date to unlock</p>
          </div>
          
          <div className="bg-white p-4 shadow-xl rounded-sm transform -rotate-2" style={{ boxShadow: '0 20px 40px -10px rgba(155, 92, 101, 0.15)' }}>
            <div className="w-[200px] h-[240px] md:w-[240px] md:h-[280px] overflow-hidden mb-4 bg-gray-100">
              <img src="/images/memory_1.jpg" alt="Us" className="w-full h-full object-cover filter contrast-[0.95] sepia-[0.1]" />
            </div>
            <p className="font-script text-2xl text-center text-textDark">You & Me ❤️</p>
          </div>
        </motion.div>

        {/* Right Side: Pin Pad */}
        <motion.div 
          className="bg-creamDark/40 p-8 rounded-3xl backdrop-blur-sm flex flex-col items-center w-full max-w-[320px] shadow-sm border border-white/40"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        >
          <h3 className="font-sans text-xl font-medium text-textDark mb-2">Enter PIN</h3>
          <p className="font-sans text-xs text-textLight mb-8">Hint: Our Anniversary (DDMM)</p>
          
          {/* Dots */}
          <div className="flex gap-4 mb-10">
            {[0, 1, 2, 3].map((i) => (
              <motion.div 
                key={i}
                className={`w-3 h-3 rounded-full border ${pin.length > i ? 'bg-rose border-rose' : 'bg-transparent border-textLight/40'}`}
                animate={error ? { x: [-5, 5, -5, 5, 0], transition: { duration: 0.4 } } : {}}
              />
            ))}
          </div>

          {/* Keypad */}
          <div className="grid grid-cols-3 gap-6 w-full">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button 
                key={num}
                onClick={() => handlePress(num.toString())}
                className="w-14 h-14 rounded-full flex items-center justify-center font-sans text-xl text-textDark hover:bg-white/50 transition-colors mx-auto"
              >
                {num}
              </button>
            ))}
            <button 
              onClick={handleClear}
              className="w-14 h-14 rounded-full flex items-center justify-center font-sans text-sm text-textLight hover:bg-white/50 transition-colors mx-auto"
            >
              C
            </button>
            <button 
              onClick={() => handlePress("0")}
              className="w-14 h-14 rounded-full flex items-center justify-center font-sans text-xl text-textDark hover:bg-white/50 transition-colors mx-auto"
            >
              0
            </button>
            <button 
              onClick={handleBackspace}
              className="w-14 h-14 rounded-full flex items-center justify-center text-textLight hover:bg-white/50 transition-colors mx-auto"
            >
              <Delete size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PinEntry;
