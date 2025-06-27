
import { motion } from "framer-motion";
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
      <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
        <CardContent className="p-0">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="border-b border-gray-200 px-6 py-3 bg-gray-50/50">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="editor" className="flex items-center space-x-2">
                  <Edit3 className="h-4 w-4" />
                  <span>Editor</span>
                </TabsTrigger>
                <TabsTrigger value="preview" className="flex items-center space-x-2">
                  <Eye className="h-4 w-4" />
                  <span>Preview</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="grid lg:grid-cols-2 min-h-[600px]">
              {/* Editor Side */}
              <div className={`${activeTab === "preview" ? "hidden lg:block" : ""}`}>
                <TabsContent value="editor" className="h-full mt-0">
                  <MarkdownEditor
                    value={markdown}
                    onChange={setMarkdown}
                    className="h-[600px]"
                  />
                </TabsContent>
                {activeTab === "preview" && (
                  <div className="hidden lg:block h-[600px]">
                    <MarkdownEditor
                      value={markdown}
                      onChange={setMarkdown}
                      className="h-full"
                    />
                  </div>
                )}
              </div>

              {/* Preview Side */}
              <div className={`border-l border-gray-200 ${activeTab === "editor" ? "hidden lg:block" : ""}`}>
                <TabsContent value="preview" className="h-full mt-0">
                  <MarkdownPreview
                    content={markdown}
                    className="h-[600px] overflow-auto"
                  />
                </TabsContent>
                {activeTab === "editor" && (
                  <div className="hidden lg:block h-[600px]">
                    <MarkdownPreview
                      content={markdown}
                      className="h-full overflow-auto"
                    />
                  </div>
                )}
              </div>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </motion.div>
  );
};
