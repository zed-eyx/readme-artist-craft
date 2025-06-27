
import { motion } from "framer-motion";
import { Edit3, FileText, Download } from "lucide-react";
import { useEffect } from "react";
import { gsap } from "gsap";

export const FeaturesSection = () => {
  useEffect(() => {
    gsap.fromTo(
      ".feature-card",
      { opacity: 0, y: 30, scale: 0.9 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.8, 
        stagger: 0.2,
        delay: 0.5,
        ease: "power2.out" 
      }
    );
  }, []);

  return (
    <div className="mt-16 grid md:grid-cols-3 gap-8">
      <motion.div 
        className="feature-card text-center p-6"
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
          <Edit3 className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Live Editing</h3>
        <p className="text-gray-600">Edit your markdown in real-time with instant preview updates</p>
      </motion.div>
      
      <motion.div 
        className="feature-card text-center p-6"
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
          <FileText className="h-6 w-6 text-green-600" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Templates</h3>
        <p className="text-gray-600">Start with professional templates for different project types</p>
      </motion.div>
      
      <motion.div 
        className="feature-card text-center p-6"
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
          <Download className="h-6 w-6 text-purple-600" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Export Ready</h3>
        <p className="text-gray-600">Download your README.md file ready for your GitHub repository</p>
      </motion.div>
    </div>
  );
};
