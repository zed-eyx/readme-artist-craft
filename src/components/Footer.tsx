
import { motion } from "framer-motion";
import { Heart, Code } from "lucide-react";

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-6 sm:py-8 mt-12 sm:mt-16"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-2 mb-4 md:mb-0"
          >
            <Code className="h-4 sm:h-5 w-4 sm:w-5 text-blue-400" />
            <span className="text-gray-300 text-sm sm:text-base">README Generator</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center space-x-2"
          >
            <span className="text-gray-300 text-sm sm:text-base">
              made by{" "}
              <a 
                href="https://github.com/zed-eyx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-200 underline decoration-transparent hover:decoration-blue-300"
              >
                zedeyx
              </a>
            </span>
            <Heart className="h-3 sm:h-4 w-3 sm:w-4 text-red-400 animate-pulse" />
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-700 text-center text-xs sm:text-sm text-gray-400"
        >
          <p>© 2024 README Generator. Crafted with passion for developers.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};
