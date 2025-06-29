
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Edit3 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { MarkdownEditor } from "@/components/MarkdownEditor";
import { MarkdownPreview } from "@/components/MarkdownPreview";

interface EditorPreviewTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  markdown: string;
  setMarkdown: (markdown: string) => void;
}

export const EditorPreviewTabs = ({ 
  activeTab, 
  setActiveTab, 
  markdown, 
  setMarkdown 
}: EditorPreviewTabsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
        <CardContent className="p-0">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Tab Header */}
            <div className="border-b border-gray-200 px-6 py-4 bg-gray-50/80">
              <TabsList className="grid w-full max-w-md grid-cols-2 bg-white/80">
                <TabsTrigger 
                  value="editor" 
                  className="flex items-center space-x-2 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 transition-all duration-300"
                >
                  <Edit3 className="h-4 w-4" />
                  <span>Editor</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="preview" 
                  className="flex items-center space-x-2 data-[state=active]:bg-green-50 data-[state=active]:text-green-700 transition-all duration-300"
                >
                  <Eye className="h-4 w-4" />
                  <span>Preview</span>
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Content Area */}
            <div className="relative min-h-[600px] max-h-[600px]">
              {/* Desktop Layout - Side by Side */}
              <div className="hidden lg:grid lg:grid-cols-2 h-[600px]">
                {/* Editor Side */}
                <motion.div 
                  className="border-r border-gray-200 h-full overflow-hidden"
                  initial={{ opacity: 1 }}
                  animate={{ 
                    opacity: activeTab === "preview" ? 0.3 : 1,
                    scale: activeTab === "preview" ? 0.98 : 1
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <MarkdownEditor
                    value={markdown}
                    onChange={setMarkdown}
                    className="h-full"
                  />
                </motion.div>

                {/* Preview Side */}
                <motion.div
                  className="h-full overflow-hidden"
                  initial={{ opacity: 1 }}
                  animate={{ 
                    opacity: activeTab === "editor" ? 0.3 : 1,
                    scale: activeTab === "editor" ? 0.98 : 1
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <MarkdownPreview
                    content={markdown}
                    className="h-full"
                  />
                </motion.div>
              </div>

              {/* Mobile/Tablet Layout - Full Width with Animation */}
              <div className="lg:hidden">
                <AnimatePresence mode="wait">
                  {activeTab === "editor" && (
                    <motion.div
                      key="editor"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="h-[600px]"
                    >
                      <TabsContent value="editor" className="h-full mt-0">
                        <MarkdownEditor
                          value={markdown}
                          onChange={setMarkdown}
                          className="h-full"
                        />
                      </TabsContent>
                    </motion.div>
                  )}

                  {activeTab === "preview" && (
                    <motion.div
                      key="preview"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="h-[600px]"
                    >
                      <TabsContent value="preview" className="h-full mt-0">
                        <MarkdownPreview
                          content={markdown}
                          className="h-full"
                        />
                      </TabsContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </motion.div>
  );
};
