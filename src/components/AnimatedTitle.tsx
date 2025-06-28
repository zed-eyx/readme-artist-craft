
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FileText, Sparkles, Code2 } from "lucide-react";

export const AnimatedTitle = () => {
  const [currentIcon, setCurrentIcon] = useState(0);
  const icons = [FileText, Sparkles, Code2];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const titleWords = ["README", "Generator"];
  const subtitleWords = ["Create", "beautiful", "documentation", "effortlessly"];

  return (
    <div className="text-center mb-8 sm:mb-12">
      {/* Main Title with Icon Animation */}
      <motion.div 
        className="flex items-center justify-center space-x-3 sm:space-x-4 mb-4 sm:mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          key={currentIcon}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          className="relative"
        >
          {icons.map((Icon, index) => (
            <Icon
              key={index}
              className={`h-8 w-8 sm:h-10 sm:w-10 text-blue-500 transition-opacity duration-300 ${
                index === currentIcon ? 'opacity-100' : 'opacity-0 absolute inset-0'
              }`}
            />
          ))}
        </motion.div>
        
        <div className="flex space-x-2 sm:space-x-3">
          {titleWords.map((word, wordIndex) => (
            <motion.h1
              key={wordIndex}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: wordIndex % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2 + wordIndex * 0.2,
                type: "spring",
                stiffness: 100 
              }}
            >
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={letterIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.4 + wordIndex * 0.1 + letterIndex * 0.05 
                  }}
                  className="inline-block hover:scale-110 transition-transform duration-200 cursor-default"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
          ))}
        </div>
      </motion.div>

      {/* Animated Subtitle */}
      <motion.div 
        className="flex flex-wrap justify-center items-center space-x-1 sm:space-x-2 text-base sm:text-lg lg:text-xl text-gray-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {subtitleWords.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.7 + index * 0.15,
              type: "spring",
              stiffness: 120
            }}
            className="hover:text-blue-600 transition-colors duration-300 cursor-default font-medium"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>

      {/* Floating Sparkles Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              opacity: 0, 
              scale: 0,
              x: Math.random() * window.innerWidth,
              y: Math.random() * 200 + 100
            }}
            animate={{ 
              opacity: [0, 1, 0], 
              scale: [0, 1, 0],
              y: [100, -50]
            }}
            transition={{ 
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              repeatDelay: 2
            }}
          >
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400 opacity-60" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
