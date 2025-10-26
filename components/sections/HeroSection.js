'use client';
import { motion, useAnimate, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { FiDownload, FiMail, FiArrowRight, FiFeather } from 'react-icons/fi';
import { BsBrush } from 'react-icons/bs';
import AnimatedText from '@/components/animations/AnimatedText';
import FadeIn from '@/components/animations/FadeIn';
import ParticlesBackground from '@/components/animations/ParticlesBackground';
import { BrushStroke, ArtisticText } from '@/components/animations/ArtisticElements';
import Tilt from 'react-parallax-tilt';

const roles = [
  "Web Developer",
  "AI Enthusiast", 
  "Cloud Learner",
  "Full Stack Developer",
  "React Developer",
  "Next.js Developer",
  "Problem Solver"
];

const TypewriterText = ({ text }) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  useEffect(() => {
    if (isInView) {
      const letters = Array.from(text);
      const animation = letters.map((_, index) => [
        `span:nth-child(${index + 1})`,
        { opacity: 1, y: 0 },
        { duration: 0.1, delay: index * 0.05 }
      ]);

      animate([
        [scope.current, { opacity: 1 }, { duration: 0 }],
        ...animation
      ]);
    }
  }, [isInView, animate, text]);

  return (
    <motion.div ref={scope} initial={{ opacity: 0 }}>
      {Array.from(text).map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen relative flex items-center justify-center py-8 overflow-hidden">
      {/* Animated Particles Background */}
      <ParticlesBackground variant="default" />
      
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 dark:opacity-20" />
          <motion.div 
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,85,255,0.1),transparent_50%)] animate-pulse" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,224,255,0.1),transparent_50%)] animate-pulse" />
          </motion.div>
        </div>
      </div>
      
      {/* Animated Blobs */}
      <motion.div
        className="absolute -z-10 w-[800px] h-[800px] blur-[120px] opacity-20"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          background: "linear-gradient(45deg, #3B82F6, #06B6D4, #3B82F6)",
        }}
      />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1             className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
              Hi, I'm{" "}
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 whitespace-nowrap">
                Joshiyaa M G
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </span>
            </h1>
            <div className="flex justify-center gap-4 mb-6">
              <motion.div
                className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <BsBrush className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </motion.div>
              <motion.div
                className="w-12 h-12 flex items-center justify-center rounded-lg bg-cyan-100 dark:bg-cyan-900/30"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <FiFeather className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Animated roles */}
          <motion.div 
            className="h-12 mb-12 relative"
            animate={{
              scale: [1, 1.02, 1],
              y: [0, -2, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <AnimatedText
              text={roles[currentRole]}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300"
            />
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-500/10 rounded-lg"
              animate={{
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Bio with animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-xl mx-auto leading-relaxed"
          >
            Passionate developer crafting innovative solutions at the intersection of web development, artificial intelligence, and cloud computing. Committed to building seamless, user-centric experiences with modern technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <a
              href="https://ik.imagekit.io/n31diav73/Document%20from%20J%C5%93%20may.pdf?updatedAt=1761494493782"
              download="Joshiyaa_Mayilsamy_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600/10 transition-colors flex items-center gap-2"
            >
              <FiDownload />
              Download Resume
            </a>
            
            <a
              href="#contact"
              className="group px-8 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
            >
              <FiMail />
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;