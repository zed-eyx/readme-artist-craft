
import { useState } from "react";
import { Header } from "@/components/Header";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { ActionBar } from "@/components/ActionBar";
import { EditorPreviewTabs } from "@/components/EditorPreviewTabs";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";
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

  // Encrypted functions using simple obfuscation
  const _0x1a2b = () => navigator.clipboard.writeText(markdown);
  const _0x3c4d = () => {
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "README.md";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleCopyMarkdown = () => {
    _0x1a2b();
    toast({
      title: "Copied to clipboard!",
      description: "Your README markdown has been copied to the clipboard.",
    });
  };

  const handleDownloadMarkdown = () => {
    _0x3c4d();
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
      <Header />
      
      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
        <AnimatedTitle />
        
        <ActionBar 
          onCopyMarkdown={handleCopyMarkdown}
          onDownloadMarkdown={handleDownloadMarkdown}
          onSelectTemplate={handleTemplateSelect}
        />

        <EditorPreviewTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          markdown={markdown}
          setMarkdown={setMarkdown}
        />

        <FeaturesSection />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
