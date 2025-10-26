'use client';
import { motion, useAnimate } from 'framer-motion';
import { useEffect } from 'react';

const BrushStroke = ({ className = "", delay = 0 }) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(scope.current, {
      pathLength: [0, 1],
      opacity: [0, 1],
    }, {
      duration: 1.5,
      delay: delay,
      ease: "easeInOut"
    });
  }, [animate, delay]);

  return (
    <motion.svg
      ref={scope}
      viewBox="0 0 100 100"
      className={`absolute pointer-events-none ${className}`}
    >
      <motion.path
        d="M10,50 Q25,25 50,50 T90,50"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        className="text-blue-500/30"
      />
    </motion.svg>
  );
};

const ArtisticText = ({ children, delay = 0 }) => {
  return (
    <motion.span
      className="relative inline-block"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.span>
  );
};

export { BrushStroke, ArtisticText };