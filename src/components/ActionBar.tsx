
import { motion } from "framer-motion";
import { Copy, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TemplateSelector } from "@/components/TemplateSelector";

interface ActionBarProps {
  onCopyMarkdown: () => void;
  onDownloadMarkdown: () => void;
  onSelectTemplate: (template: string) => void;
}

export const ActionBar = ({ onCopyMarkdown, onDownloadMarkdown, onSelectTemplate }: ActionBarProps) => {
  return (
    <motion.div 
      className="flex flex-wrap items-center justify-between gap-4 mb-6"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="flex items-center space-x-3">
        <TemplateSelector onSelectTemplate={onSelectTemplate} />
      </div>
      <div className="flex items-center space-x-2">
        <Button
          onClick={onCopyMarkdown}
          variant="outline"
          size="sm"
          className="flex items-center space-x-2"
        >
          <Copy className="h-4 w-4" />
          <span>Copy</span>
        </Button>
        <Button
          onClick={onDownloadMarkdown}
          variant="outline"
          size="sm"
          className="flex items-center space-x-2"
        >
          <Download className="h-4 w-4" />
          <span>Download</span>
        </Button>
      </div>
    </motion.div>
  );
};
