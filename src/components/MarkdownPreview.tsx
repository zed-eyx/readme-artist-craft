
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

interface MarkdownPreviewProps {
  content: string;
  className?: string;
}

export const MarkdownPreview = ({ content, className }: MarkdownPreviewProps) => {
  // Simple markdown to HTML converter (basic implementation)
  const convertMarkdownToHTML = (markdown: string): string => {
    let html = markdown;

    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3 class="text-base sm:text-lg font-semibold mt-4 sm:mt-6 mb-2 sm:mb-3 text-gray-800 border-l-4 border-blue-400 pl-2 sm:pl-3">$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2 class="text-lg sm:text-xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4 text-gray-900 border-l-4 border-green-400 pl-2 sm:pl-3">$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1 class="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-4 sm:mb-6 text-gray-900 border-b-2 border-gray-200 pb-2 sm:pb-3">$1</h1>');

    // Code blocks
    html = html.replace(/```([\s\S]*?)```/gim, '<pre class="bg-gray-50 border border-gray-200 rounded-lg p-3 sm:p-4 my-3 sm:my-4 overflow-x-auto shadow-sm"><code class="text-xs sm:text-sm font-mono text-gray-800 whitespace-pre">$1</code></pre>');
    
    // Inline code
    html = html.replace(/`([^`]+)`/gim, '<code class="bg-gray-100 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm font-mono text-gray-800 border">$1</code>');

    // Bold
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong class="font-semibold text-gray-900">$1</strong>');
    
    // Italic
    html = html.replace(/\*(.*?)\*/gim, '<em class="italic text-gray-700">$1</em>');

    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" class="text-blue-600 hover:text-blue-800 underline transition-colors duration-200" target="_blank" rel="noopener noreferrer">$1</a>');

    // Lists
    html = html.replace(/^\* (.+$)/gim, '<li class="ml-3 sm:ml-4 mb-1.5 sm:mb-2 flex items-start"><span class="text-blue-500 mr-1.5 sm:mr-2 mt-1">•</span><span class="text-sm sm:text-base">$1</span></li>');
    html = html.replace(/^(\d+)\. (.+$)/gim, '<li class="ml-3 sm:ml-4 mb-1.5 sm:mb-2 flex items-start"><span class="text-blue-500 mr-1.5 sm:mr-2 font-medium text-sm sm:text-base">$1.</span><span class="text-sm sm:text-base">$2</span></li>');

    // Paragraphs
    html = html.replace(/\n\n/gim, '</p><p class="mb-3 sm:mb-4 text-gray-700 leading-relaxed text-sm sm:text-base">');
    html = '<p class="mb-3 sm:mb-4 text-gray-700 leading-relaxed text-sm sm:text-base">' + html + '</p>';

    // Clean up empty paragraphs
    html = html.replace(/<p class="mb-3 sm:mb-4 text-gray-700 leading-relaxed text-sm sm:text-base"><\/p>/gim, '');

    return html;
  };

  return (
    <motion.div 
      className={cn("bg-white h-full", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <ScrollArea className="h-full w-full">
        <div className="prose prose-sm max-w-none p-3 sm:p-4 lg:p-6 min-h-full">
          <motion.div
            className="markdown-content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            dangerouslySetInnerHTML={{
              __html: convertMarkdownToHTML(content)
            }}
          />
        </div>
      </ScrollArea>
    </motion.div>
  );
};
