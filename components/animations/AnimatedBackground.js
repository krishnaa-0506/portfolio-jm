'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedBackground = () => {
  const [raindrops, setRaindrops] = useState([]);
  const [floatingElements, setFloatingElements] = useState([]);

  // Generate random raindrops
  useEffect(() => {
    const generateRaindrops = () => {
      const drops = [];
      for (let i = 0; i < 50; i++) {
        drops.push({
          id: `raindrop-${i}`,
          left: `${Math.random() * 100}%`,
          delay: Math.random() * 2,
          duration: 1 + Math.random() * 2,
          size: 1 + Math.random() * 2,
          opacity: 0.3 + Math.random() * 0.3
        });
      }
      setRaindrops(drops);
    };

    generateRaindrops();
  }, []);

  // Generate floating elements
  useEffect(() => {
    const shapes = ['circle', 'square', 'triangle'];
    const elements = [];
    for (let i = 0; i < 20; i++) {
      elements.push({
        id: `element-${i}`,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: 4 + Math.random() * 8,
        duration: 15 + Math.random() * 20,
        delay: Math.random() * 5,
        opacity: 0.1 + Math.random() * 0.15
      });
    }
    setFloatingElements(elements);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Raindrops */}
      <div className="absolute inset-0">
        {raindrops.map((drop) => (
          <motion.div
            key={drop.id}
            className="absolute w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent dark:via-blue-400/20"
            style={{
              left: drop.left,
              height: `${drop.size * 20}px`,
              opacity: drop.opacity
            }}
            initial={{ y: -20 }}
            animate={{
              y: '120vh',
              opacity: [drop.opacity, drop.opacity, 0]
            }}
            transition={{
              duration: drop.duration,
              delay: drop.delay,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className={`absolute ${
              element.shape === 'circle' 
                ? 'rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10' 
                : element.shape === 'square'
                ? 'bg-gradient-to-br from-purple-500/10 to-blue-500/10'
                : 'triangle bg-gradient-to-br from-cyan-500/10 to-blue-500/10'
            }`}
            style={{
              left: element.left,
              top: element.top,
              width: `${element.size}px`,
              height: `${element.size}px`,
              opacity: element.opacity
            }}
            animate={{
              y: ['0%', '-20%', '0%'],
              x: ['0%', '20%', '0%'],
              rotate: element.shape === 'triangle' ? [0, 360] : 0
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-cyan-900/10" />
    </div>
  );
};

export default AnimatedBackground;