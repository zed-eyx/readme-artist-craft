
import { cn } from "@/lib/utils";

interface MarkdownPreviewProps {
  content: string;
  className?: string;
}

export const MarkdownPreview = ({ content, className }: MarkdownPreviewProps) => {
  // Simple markdown to HTML converter (basic implementation)
  const convertMarkdownToHTML = (markdown: string): string => {
    let html = markdown;

    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3 class="text-lg font-semibold mt-6 mb-3 text-gray-800">$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2 class="text-xl font-bold mt-8 mb-4 text-gray-900">$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold mt-8 mb-6 text-gray-900 border-b border-gray-200 pb-2">$1</h1>');

    // Code blocks
    html = html.replace(/```([\s\S]*?)```/gim, '<pre class="bg-gray-100 border border-gray-200 rounded-md p-4 my-4 overflow-x-auto"><code class="text-sm font-mono text-gray-800">$1</code></pre>');
    
    // Inline code
    html = html.replace(/`([^`]+)`/gim, '<code class="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">$1</code>');

    // Bold
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong class="font-semibold">$1</strong>');
    
    // Italic
    html = html.replace(/\*(.*?)\*/gim, '<em class="italic">$1</em>');

    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" class="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">$1</a>');

    // Lists
    html = html.replace(/^\* (.+$)/gim, '<li class="ml-4 mb-1">• $1</li>');
    html = html.replace(/^(\d+)\. (.+$)/gim, '<li class="ml-4 mb-1">$1. $2</li>');

    // Paragraphs
    html = html.replace(/\n\n/gim, '</p><p class="mb-4 text-gray-700 leading-relaxed">');
    html = '<p class="mb-4 text-gray-700 leading-relaxed">' + html + '</p>';

    // Clean up empty paragraphs
    html = html.replace(/<p class="mb-4 text-gray-700 leading-relaxed"><\/p>/gim, '');

    return html;
  };

  return (
    <div className={cn("bg-white p-6", className)}>
      <div className="prose prose-sm max-w-none">
        <div
          className="markdown-content"
          dangerouslySetInnerHTML={{
            __html: convertMarkdownToHTML(content)
          }}
        />
      </div>
    </div>
  );
};
