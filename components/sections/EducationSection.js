'use client';
import { motion } from 'framer-motion';
import AnimatedText from '@/components/animations/AnimatedText';
import FadeIn from '@/components/animations/FadeIn';
import { 
  GraduationCap, MapPin, Calendar, 
  BookOpen, Award, Code
} from 'lucide-react';

const badges = [
  { label: "AI Projects", icon: BookOpen },
  { label: "Hackathon Finalist", icon: Award },
  { label: "Web Development", icon: Code }
];

const educationData = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Department of Computer Science and Applications",
    location: "Tamil Nadu",
    period: "2024 – Present",
    description: [
      "Focused on Web Development, AI, and Cloud Technologies.",
      "Worked on projects involving ReactJS, AI Chatbots, and Blockchain Research."
    ],
    gpa: "6.8 / 10",
    badges: badges
  },
  {
    degree: "Higher Secondary Education",
    institution: "Government Girls Model Higher Secondary School",
    location: "Tamil Nadu",
    period: "2021 – 2024",
    description: [
      "Specialized in Computer Science stream during higher secondary.",
      "Actively participated in technical and creative competitions."
    ]
  }
];

const EducationCard = ({ education, index }) => {
  const { degree, institution, location, period, description, gpa, badges } = education;
  
  return (
    <FadeIn direction="up" delay={index * 0.2}>
      <motion.div 
        className="relative pl-8 pb-12"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Timeline dot */}
        <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg z-10 flex items-center justify-center">
          <GraduationCap className="w-3 h-3 text-white" />
        </div>

        {/* Card */}
        <div className="p-6 rounded-xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/20 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
          {/* Header */}
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
            {degree}
          </h3>
          <div className="space-y-2 mb-4">
            <p className="text-lg text-gray-700 dark:text-gray-200">
              {institution}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{period}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2 mb-4">
            {description.map((item, idx) => (
              <p key={idx} className="text-gray-600 dark:text-gray-300">
                {item}
              </p>
            ))}
            {gpa && (
              <p className="text-blue-600 dark:text-blue-400 font-semibold">
                Current CGPA: {gpa}
              </p>
            )}
          </div>

          {/* Badges */}
          {badges && (
            <div className="flex flex-wrap gap-2 mt-4">
              {badges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * idx }}
                  >
                    <Icon className="w-3 h-3" />
                    <span>{badge.label}</span>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </motion.div>
    </FadeIn>
  );
};

const EducationSection = () => {
  return (
    <section id="education" className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-50/80 via-purple-50/80 to-cyan-50/80 dark:from-gray-900/80 dark:via-blue-900/20 dark:to-cyan-900/20">
      <div className="container mx-auto px-4">
        <FadeIn>
          <AnimatedText
            text="🎓 Education Journey"
            className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
          />
          <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            My academic path and learning experiences that shaped my technical foundation
          </p>
        </FadeIn>

        {/* Timeline container */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/20 via-cyan-500/20 to-transparent" />
          
          {/* Education cards */}
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <EducationCard 
                key={index} 
                education={edu}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 -left-64 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-40 -right-64 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
    </section>
  );
};

export default EducationSection;