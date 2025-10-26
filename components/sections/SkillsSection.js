'use client';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Globe, 
  Cloud, 
  Brain, 
  Database, 
  Wrench,
  Terminal
} from 'lucide-react';
import AnimatedText from '@/components/animations/AnimatedText';
import FadeIn from '@/components/animations/FadeIn';

const SkillCard = ({ icon: Icon, title, skills }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 rounded-xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-500/50 dark:hover:border-purple-400/50 transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 dark:from-purple-400/20 dark:to-blue-400/20">
          <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400" strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 text-transparent bg-clip-text">{title}</h3>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-400 dark:to-blue-400" />
            <span className="text-gray-600 dark:text-gray-300">{skill}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Languages",
      skills: ["Python", "C", "Java", "JavaScript", "SQL", "HTML/CSS"]
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["ReactJS", "Node.js", "NextJS", "Tailwind CSS", "Express", "REST API"]
    },
    {
      icon: Cloud,
      title: "Cloud Platforms",
      skills: ["AWS", "Azure", "GCP", "Vercel", "Heroku", "Docker"]
    },
    {
      icon: Brain,
      title: "AI Tools",
      skills: ["LangChain", "TensorFlow", "NLP", "PyTorch", "OpenAI", "Hugging Face"]
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "Firebase", "Supabase"]
    },
    {
      icon: Terminal,
      title: "Developer Tools",
      skills: ["VS Code", "Git", "GitHub", "Postman", "Figma", "Terminal"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-900/50 dark:via-gray-900 dark:to-purple-900/50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <AnimatedText
            text="Tech Stack That Powers My Creations"
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
            A carefully curated collection of technologies I use to bring ideas to life. From front-end magic to back-end infrastructure, these are the tools that make it all possible.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <FadeIn key={index} delay={0.1 * index}>
              <SkillCard {...category} />
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-gradient-to-l from-purple-500/10 to-transparent rounded-l-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-1/3 h-1/3 bg-gradient-to-r from-blue-500/10 to-transparent rounded-r-full blur-3xl" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
    </section>
  );
};

export default SkillsSection;