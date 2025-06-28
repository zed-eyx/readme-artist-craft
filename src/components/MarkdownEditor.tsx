
import { useState, useEffect, useRef } from "react";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { gsap } from "gsap";

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const MarkdownEditor = ({ value, onChange, className }: MarkdownEditorProps) => {
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
  };

  return (
    <motion.div 
      ref={editorRef}
      className={cn("relative bg-white h-full", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="w-full h-full"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <ScrollArea className="h-full w-full">
          <Textarea
            value={value}
            onChange={handleChange}
            placeholder="Start writing your README markdown here..."
            className={cn(
              "w-full resize-none border-0 bg-transparent p-6 text-sm leading-relaxed",
              "focus:ring-0 focus:outline-none",
              "placeholder:text-gray-400 text-gray-700",
              "font-normal tracking-wide"
            )}
            style={{ 
              minHeight: '580px', 
              fontFamily: 'system-ui, -apple-system, sans-serif' 
            }}
          />
        </ScrollArea>
      </motion.div>
    </motion.div>
  );
};
