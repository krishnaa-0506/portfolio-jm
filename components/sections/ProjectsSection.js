'use client';
import AnimatedText from '@/components/animations/AnimatedText';
import { ScrollReveal, StaggerChildren, StaggerItem } from '@/components/animations/ScrollReveal';
import { HoverCard } from '@/components/animations/HoverEffects';
import { motion } from 'framer-motion';
import { MapPin, Users, Building2, Brain, Cloud, FileCheck } from 'lucide-react';

const ProjectCard = ({ title, description, tech, icon: Icon, direction = "right" }) => {
  return (
    <ScrollReveal 
      direction={direction === "right" ? "left" : "right"} 
      delay={0.2}
    >
      <HoverCard className="p-8 rounded-xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/20 h-full">
        <div className="flex flex-col h-full">
          <motion.div 
            initial={{ rotate: -5, scale: 0.9 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-4"
          >
          <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
            <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            {title}
          </h3>
        </motion.div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
          {description}
        </p>

        <motion.div className="flex flex-wrap gap-2">
          {tech.map((item, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </HoverCard>
  </ScrollReveal>
  );
};

const projects = [
  {
    title: "Real-Time Location Tracker Website",
    description: "Built a location-tracking web app with live map integration and backend APIs.",
    tech: ["React Native", "Node.js", "Maps API"],
    icon: MapPin
  },
  {
    title: "Job Portal for Disabled Persons",
    description: "Developed a job platform aimed at empowering differently-abled individuals.",
    tech: ["Next.js", "React.js", "MongoDB"],
    icon: Users
  },
  {
    title: "Hospital Management System",
    description: "Created an ER model for efficient hospital data management and automation.",
    tech: ["SQL", "Python", "Data Analysis"],
    icon: Building2
  },
  {
    title: "AI Chatbot — Companion",
    description: "Designed a chatbot to offer emotional support and mental health conversations.",
    tech: ["LangChain", "Flutter", "TensorFlow", "NLP"],
    icon: Brain
  },
  {
    title: "Cloud Migration Strategies",
    description: "Researched migration strategies and security optimization in multi-cloud setups.",
    tech: ["AWS", "Azure", "GCP"],
    icon: Cloud
  },
  {
    title: "Document Tampering Detection",
    description: "Using AI and blockchain for detecting and preventing document manipulation.",
    tech: ["Python", "Machine Learning", "Blockchain"],
    icon: FileCheck
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-50/80 via-purple-50/80 to-cyan-50/80 dark:from-gray-900/80 dark:via-blue-900/20 dark:to-cyan-900/20">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="down">
          <AnimatedText
            text="Featured Projects"
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto"
          >
            Showcasing my journey through code — from web applications to AI solutions
          </motion.p>
        </ScrollReveal>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 mt-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <StaggerItem key={index}>
              <ProjectCard
                {...project}
                direction={index % 2 === 0 ? "right" : "left"}
              />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
      
      {/* Decorative elements with parallax effect */}
      <motion.div
        animate={{
          y: [-20, 20],
          transition: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 5
          }
        }}
        className="absolute top-40 -left-64 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [20, -20],
          transition: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 5
          }
        }}
        className="absolute bottom-40 -right-64 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
      />
    </section>
  );
};

export default ProjectsSection;