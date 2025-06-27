import { useState, useEffect, useRef } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { gsap } from "gsap";

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const MarkdownEditor = ({ value, onChange, className }: MarkdownEditorProps) => {
  const [lineCount, setLineCount] = useState(1);
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorRef.current) {
      gsap.fromTo(
        editorRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
      );
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    
    // Update line count based on actual content
    const lines = newValue.split('\n').length;
    setLineCount(lines);
  };

  // Generate line numbers only for actual content, with a minimum of visible lines
  const actualLines = value.split('\n').length;
  const visibleLines = Math.max(actualLines, 10); // Show at least 10 lines for better UX
  const lineNumbers = Array.from({ length: visibleLines }, (_, i) => i + 1);

  return (
    <motion.div 
      ref={editorRef}
      className={cn("relative flex bg-gray-50", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Line Numbers */}
      <motion.div 
        className="flex-shrink-0 bg-gray-100 border-r border-gray-200 p-4 text-right min-w-[60px] max-w-[60px] overflow-hidden"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="font-mono text-sm text-gray-500 leading-6">
          {lineNumbers.map((num) => (
            <div key={num} className="h-6 truncate">
              {num}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Editor */}
      <motion.div 
        className="flex-1 relative"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Textarea
          value={value}
          onChange={handleChange}
          placeholder="Start writing your README markdown here..."
          className={cn(
            "w-full h-full resize-none border-0 bg-transparent p-4 font-mono text-sm leading-6",
            "focus:ring-0 focus:outline-none",
            "placeholder:text-gray-400"
          )}
          style={{ minHeight: '100%' }}
        />
      </motion.div>
    </motion.div>
  );
};
