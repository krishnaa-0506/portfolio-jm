'use client';
import { Heart } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-2">
          <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> by HK — © {year}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;