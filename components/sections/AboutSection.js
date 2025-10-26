'use client';
import { motion } from 'framer-motion';
import AnimatedText from '@/components/animations/AnimatedText';
import FadeIn from '@/components/animations/FadeIn';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeIn>
          <AnimatedText
            text="💫 About Me"
            className="text-3xl md:text-4xl font-bold text-center mb-8"
          />
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0.1}>
            <h2 className="text-xl md:text-2xl font-semibold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              ✨ "Transforming Ideas into Reality — Where Creativity Meets Code."
            </h2>
          </FadeIn>

          <div className="space-y-6">
            <FadeIn delay={0.2}>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Hi, I'm Joshiyaa Mayilsamy, a passionate BCA student and full-stack developer with a deep interest in Web Development, Artificial Intelligence, and Cloud Technologies.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I love building real-time applications that solve real-world problems and make technology more accessible. My work often blends innovation and empathy, whether it's creating an AI companion for mental wellness, developing a job platform for differently-abled individuals, or researching blockchain-based data security.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I'm constantly exploring how technology can make life simpler, smarter, and more connected. For me, every project is not just about writing code — it's about creating impact.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                When I'm not coding, you'll find me writing, experimenting with new ideas, or learning about emerging tools that can shape the future of tech. My goal is to grow as a developer who builds not just products, but purposeful experiences.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 -right-64 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
    </section>
  );
};

export default AboutSection;