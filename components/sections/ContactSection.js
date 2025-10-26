'use client';
import { motion } from 'framer-motion';
import AnimatedText from '@/components/animations/AnimatedText';
import FadeIn from '@/components/animations/FadeIn';
import { 
  Mail, Phone, Linkedin, Github, 
  Instagram, ExternalLink, Heart 
} from 'lucide-react';

const ContactCard = ({ icon: Icon, title, content, link, ctaText, tagline }) => (
  <motion.div
    className="p-6 rounded-xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/20 transition-all duration-300 relative group"
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <div className="flex items-start gap-4 mb-4">
      <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {tagline}
        </p>
      </div>
    </div>
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 px-4 py-2 w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 group"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {ctaText}
      <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
    </motion.a>
  </motion.div>
);

const ContactSection = () => {
  const contacts = [
    {
      icon: Mail,
      title: "Email",
      tagline: "Let's discuss your project ideas",
      ctaText: "Send an Email",
      link: "mailto:joshiyaamg@gmail.com"
    },
    {
      icon: Phone,
      title: "WhatsApp",
      tagline: "Quick chat about your requirements",
      ctaText: "Message on WhatsApp",
      link: "https://wa.me/916379758057"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      tagline: "Let's connect professionally",
      ctaText: "Connect with Me",
      link: "https://linkedin.com/in/joshiyaamayilsamy"
    },
    {
      icon: Github,
      title: "GitHub",
      tagline: "Check out my code and projects",
      ctaText: "View Projects",
      link: "https://github.com/joshiyaa-dev"
    },
    {
      icon: Instagram,
      title: "Instagram",
      tagline: "Follow my creative journey",
      ctaText: "Follow Me",
      link: "https://instagram.com/joshiyaa_mayilswamy"
    }
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-purple-50/80 via-blue-50/80 to-cyan-50/80 dark:from-gray-900/80 dark:via-blue-900/20 dark:to-cyan-900/20">
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <AnimatedText
              text="📞 Contact Me"
              className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white"
            />
            <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
              Let's Create Something Amazing Together 💡
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contacts.map((contact, index) => (
              <FadeIn 
                key={index} 
                delay={index * 0.1}
                className="flex"
              >
                <ContactCard {...contact} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      

      {/* Decorative elements */}
      <div className="absolute top-40 -right-64 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-40 -left-64 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
    </footer>
  );
};

export default ContactSection;