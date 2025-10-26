'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const ScrollReveal = ({ 
  children, 
  direction = 'up', 
  delay = 0,
  duration = 0.5,
  className = '',
  distance = 50, // pixels to move
  threshold = 0.1 // when to trigger
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold });

  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  const initial = {
    opacity: 0,
    ...directions[direction],
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ZoomReveal = ({ 
  children, 
  delay = 0,
  className = '',
  threshold = 0.1
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerChildren = ({ 
  children, 
  staggerDelay = 0.1,
  className = ''
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay
      }
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = '' }) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <motion.div
      variants={item}
      className={className}
    >
      {children}
    </motion.div>
  );
};