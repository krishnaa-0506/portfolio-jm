'use client';
import { motion } from 'framer-motion';

export const HoverCard = ({ 
  children, 
  className = '',
  glowColor = 'rgba(59, 130, 246, 0.5)', // blue-500 with opacity
  scale = 1.02
}) => {
  return (
    <motion.div
      className={`relative group ${className}`}
      whileHover={{ scale }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div
        className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle, ${glowColor}, transparent 70%)`,
          filter: 'blur(8px)',
        }}
      />
      <div className="relative">
        {children}
      </div>
    </motion.div>
  );
};

export const ParallaxItem = ({ 
  children, 
  offset = 20, // pixels to move
  className = '' 
}) => {
  return (
    <motion.div
      className={className}
      initial={{ y: 0 }}
      whileInView={{
        y: [-offset, offset],
        transition: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 3,
          ease: "easeInOut"
        }
      }}
    >
      {children}
    </motion.div>
  );
};