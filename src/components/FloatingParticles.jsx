import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random floating flowers
    const newParticles = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 120 + 80, // Size between 80px and 200px
      duration: Math.random() * 25 + 25, // Very slow, peaceful floating (25s to 50s)
      delay: Math.random() * 15,
      rotationStart: Math.random() * 360,
      rotationEnd: Math.random() * 360 + 180, // Rotate slowly while floating
      driftX: Math.random() * 200 - 100,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-cream">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            bottom: `-20%`, // Start below the screen
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -window.innerHeight * 1.5], // Float all the way up and past the screen
            x: [0, particle.driftX, -particle.driftX, 0], // Gentle swaying
            rotate: [particle.rotationStart, particle.rotationEnd],
            opacity: [0, 0.4, 0.4, 0], // Subtle fade in and out
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        >
          <img 
            src="/images/flower_nobg.png" 
            alt="Floating Flower" 
            className="w-full h-full object-contain drop-shadow-sm filter opacity-80"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingParticles;
