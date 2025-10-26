'use client';
import { motion } from 'framer-motion';
import AnimatedText from '@/components/animations/AnimatedText';
import FadeIn from '@/components/animations/FadeIn';
import { 
  Building2, Calendar, ArrowRight, Trophy, 
  GraduationCap, BookIcon, Briefcase, Award, 
  Brain, Table, FileCode
} from 'lucide-react';

const Card = ({ children, className = "" }) => (
  <motion.div 
    className={`relative p-6 rounded-xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/20 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 ${className}`}
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    {children}
  </motion.div>
);

const ExperienceCard = ({ title, company, duration, description, skills, icon: Icon, index }) => (
  <FadeIn direction="right">
    <Card className="pl-8">
      <div className="flex flex-col gap-2 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
            <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            {title}
          </h3>
        </div>
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
          <Building2 className="w-4 h-4" />
          <span className="text-lg">{company}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
          <Calendar className="w-4 h-4" />
          <span>{duration}</span>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-start gap-2">
          <ArrowRight className="w-5 h-5 mt-1 text-blue-500" />
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills?.map((skill, idx) => (
          <motion.span
            key={idx}
            className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * idx }}
          >
            {skill}
          </motion.span>
        ))}
      </div>

      <div className="absolute -left-3 top-8 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg hidden lg:block" />
    </Card>
  </FadeIn>
);

const AchievementCard = ({ title, description, icon: Icon, index }) => (
  <FadeIn direction="left" delay={index * 0.1}>
    <Card className="flex items-start gap-4">
      <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
        <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
      </div>
      <div>
        <h4 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          {title}
        </h4>
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
          {description}
        </p>
      </div>
    </Card>
  </FadeIn>
);

const CertificationCard = ({ title, organization, date, icon: Icon, index }) => (
  <FadeIn direction="left" delay={index * 0.1}>
    <Card className="flex items-start gap-4">
      <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
        <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
      </div>
      <div className="flex-1">
        <h4 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          {title}
        </h4>
        <div className="flex justify-between items-center mt-1">
          <span className="text-gray-600 dark:text-gray-300 text-sm">
            {organization}
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            {date}
          </span>
        </div>
      </div>
    </Card>
  </FadeIn>
);

const experiences = [
  {
    title: "Full Stack Development Intern",
    company: "Hynex technologies - A Service Based Startup",
    duration: "15 Days",
    description: "Worked on a real-time e-commerce platform project using React and Node.js. Gained experience in full-stack web development, deployment, and team collaboration.",
    skills: ["React", "Node.js", "MongoDB", "Git", "REST APIs"],
    icon: Briefcase
  }
];

const achievements = [
  {
    title: "Smart India Hackathon (SIH) Finalist",
    description: "Recognized for innovative solution in national-level competition",
    icon: Trophy
  },
  {
    title: "IIT Bombay Eureka Finalist",
    description: "Selected among top projects for final presentation",
    icon: Award
  },
  {
    title: "International Conference Papers",
    description: "Presented technical research at multiple conferences",
    icon: GraduationCap
  }
];

const certifications = [
  {
    title: "AI Fundamentals",
    organization: "Microsoft",
    date: "2025",
    icon: Brain
  },
  {
    title: "Microsoft Excel Fundamentals",
    organization: "Microsoft",
    date: "2025",
    icon: Table
  },
  {
    title: "Python Fundamentals",
    organization: "Microsoft",
    date: "2025",
    icon: FileCode
  },
  {
    title: "Full Stack Development",
    organization: "Hynex Company",
    date: "2025",
    icon: BookIcon
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-gradient-to-br from-purple-50/80 via-blue-50/80 to-cyan-50/80 dark:from-gray-900/80 dark:via-blue-900/20 dark:to-cyan-900/20">
      <div className="container mx-auto px-4">
        <FadeIn>
          <AnimatedText
            text="💼 Journey & Achievements"
            className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white"
          />
          <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            A timeline of my professional growth, achievements, and continuous learning journey
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Column - Experience */}
          <div className="relative">
            <h2 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-white flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-blue-500" />
              Where I've Worked
            </h2>
            
            {/* Vertical line */}
            <div className="absolute left-0 top-20 bottom-0 w-px bg-gradient-to-b from-blue-500/20 via-cyan-500/20 to-transparent hidden lg:block" />
            
            {/* Experience cards */}
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} {...exp} index={index} />
              ))}
            </div>
          </div>

          {/* Right Column - Achievements & Certifications */}
          <div className="space-y-12">
            {/* Achievements */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                <Trophy className="w-6 h-6 text-blue-500" />
                Key Achievements
              </h2>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <AchievementCard key={index} {...achievement} index={index} />
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                <BookIcon className="w-6 h-6 text-blue-500" />
                Certifications
              </h2>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <CertificationCard key={index} {...cert} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 -right-64 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-40 -left-64 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
    </section>
  );
};

export default ExperienceSection;