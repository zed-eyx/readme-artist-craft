
import { motion } from "framer-motion";
import { Heart, Code } from "lucide-react";

export const Footer = () => {
  // Simple base64 encoded signature
  const encryptedSignature = "bWFkZSBieSB6ZWRleXg="; // "made by zedeyx" in base64
  
  const decodeSignature = () => {
    try {
      return atob(encryptedSignature);
    } catch {
      return "made by zedeyx";
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-8 mt-16"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-2 mb-4 md:mb-0"
          >
            <Code className="h-5 w-5 text-blue-400" />
            <span className="text-gray-300">README Generator</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center space-x-2"
          >
            <span className="text-gray-300">
              {decodeSignature()}
            </span>
            <Heart className="h-4 w-4 text-red-400 animate-pulse" />
            <span className="text-blue-400 font-semibold">zedeyx</span>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 pt-4 border-t border-gray-700 text-center text-sm text-gray-400"
        >
          <p>© 2024 README Generator. Crafted with passion for developers.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};
