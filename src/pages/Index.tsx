
import { useState } from "react";
import { Github, Download, Copy, Eye, Edit3, FileText, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MarkdownEditor } from "@/components/MarkdownEditor";
import { MarkdownPreview } from "@/components/MarkdownPreview";
import { TemplateSelector } from "@/components/TemplateSelector";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [markdown, setMarkdown] = useState(`# Project Title

A brief description of what this project does and who it's for

## Description

An in-depth paragraph about your project and overview of use.

## Getting Started

### Dependencies

* Describe any prerequisites, libraries, OS version, etc., needed before installing program.
* ex. Windows 10

### Installing

* How/where to download your program
* Any modifications needed to be made to files/folders

\`\`\`
code blocks for commands
\`\`\`

### Executing program

* How to run the program
* Step-by-step bullets
\`\`\`
code blocks for commands
\`\`\`

## Help

Any advise for common problems or issues.
\`\`\`
command to run if program contains helper info
\`\`\`

## Authors

Contributors names and contact info

ex. Dominique Pizzie  
ex. [@DomPizzie](https://twitter.com/dompizzie)

## Version History

* 0.2
    * Various bug fixes and optimizations
    * See [commit change]() or See [release history]()
* 0.1
    * Initial Release

## License

This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details

## Acknowledgments

Inspiration, code snippets, etc.
* [awesome-readme](https://github.com/matiassingers/awesome-readme)
* [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
* [dbader](https://github.com/dbader/readme-template)
* [zenorocha](https://github.com/zenorocha/readme-template)
* [fvcproductions](https://github.com/fvcproductions/README)`);

  const [activeTab, setActiveTab] = useState("editor");
  const { toast } = useToast();

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(markdown);
    toast({
      title: "Copied to clipboard!",
      description: "Your README markdown has been copied to the clipboard.",
    });
  };

  const handleDownloadMarkdown = () => {
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "README.md";
    a.click();
    URL.revokeObjectURL(url);
    
    toast({
      title: "Download started!",
      description: "Your README.md file is being downloaded.",
    });
  };

  const handleTemplateSelect = (template: string) => {
    setMarkdown(template);
    toast({
      title: "Template applied!",
      description: "The selected template has been loaded into the editor.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg">
                <Github className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  README Generator
                </h1>
                <p className="text-gray-600 mt-1">Create beautiful README files with live preview</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Badge variant="secondary" className="px-3 py-1">
                <Sparkles className="h-3 w-3 mr-1" />
                Free Tool
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center space-x-3">
            <TemplateSelector onSelectTemplate={handleTemplateSelect} />
          </div>
          <div className="flex items-center space-x-2">
            <Button
              onClick={handleCopyMarkdown}
              variant="outline"
              size="sm"
              className="flex items-center space-x-2"
            >
              <Copy className="h-4 w-4" />
              <span>Copy</span>
            </Button>
            <Button
              onClick={handleDownloadMarkdown}
              variant="outline"
              size="sm"
              className="flex items-center space-x-2"
            >
              <Download className="h-4 w-4" />
              <span>Download</span>
            </Button>
          </div>
        </div>

        {/* Editor and Preview */}
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

        {/* Features Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
              <Edit3 className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Live Editing</h3>
            <p className="text-gray-600">Edit your markdown in real-time with instant preview updates</p>
          </div>
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
              <FileText className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Templates</h3>
            <p className="text-gray-600">Start with professional templates for different project types</p>
          </div>
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
              <Download className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Export Ready</h3>
            <p className="text-gray-600">Download your README.md file ready for your GitHub repository</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
