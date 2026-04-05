"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

function renderMarkdown(text: string): string {
  let html = text;
  html = html.replace(/^### (.+)$/gm, "<h3 class=\"text-lg font-bold mt-4 mb-2\">$1</h3>");
  html = html.replace(/^## (.+)$/gm, "<h2 class=\"text-xl font-bold mt-4 mb-2\">$1</h2>");
  html = html.replace(/^# (.+)$/gm, "<h1 class=\"text-2xl font-bold mt-4 mb-2\">$1</h1>");
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");
  html = html.replace(/`(.+?)`/g, "<code class=\"bg-gray-200 dark:bg-gray-700 px-1 rounded text-sm\">$1</code>");
  html = html.replace(/^\- (.+)$/gm, "<li class=\"ml-4 list-disc\">$1</li>");
  html = html.replace(/^\d+\. (.+)$/gm, "<li class=\"ml-4 list-decimal\">$1</li>");
  html = html.replace(/^> (.+)$/gm, "<blockquote class=\"border-l-4 border-primary pl-4 italic text-muted\">$1</blockquote>");
  html = html.replace(/\[(.+?)\]\((.+?)\)/g, "<a href=\"$2\" class=\"text-primary underline\">$1</a>");
  html = html.replace(/^---$/gm, "<hr class=\"my-4 border-card-border\" />");
  const lines = html.split("\n");
  const result: string[] = [];
  for (const line of lines) {
    if (line.startsWith("<h") || line.startsWith("<li") || line.startsWith("<blockquote") || line.startsWith("<hr")) {
      result.push(line);
    } else if (line.trim() === "") {
      result.push("<br />");
    } else {
      result.push("<p>" + line + "</p>");
    }
  }
  return result.join("\n");
}

export default function MarkdownPreviewPage() {
  const [input, setInput] = useState("# Hello World\n\n## \u898B\u51FA\u3057\n\n\u3053\u308C\u306F**\u592A\u5B57**\u3067\u3001\u3053\u308C\u306F*\u659C\u4F53*\u3067\u3059\u3002\n\n- \u30EA\u30B9\u30C8\u9805\u76EE1\n- \u30EA\u30B9\u30C8\u9805\u76EE2\n\n> \u5F15\u7528\u30C6\u30AD\u30B9\u30C8\n\n`\u30B3\u30FC\u30C9`\u3082\u8868\u793A\u3067\u304D\u307E\u3059\u3002");

  const preview = useMemo(() => renderMarkdown(input), [input]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">{"\u30C8\u30C3\u30D7"}</Link><span className="mx-2">/</span><span>{"Markdown\u30D7\u30EC\u30D3\u30E5\u30FC"}</span></nav>
      <h1 className="text-2xl font-bold mb-2">{"Markdown\u30D7\u30EC\u30D3\u30E5\u30FC"}</h1>
      <p className="text-muted mb-8">{"Markdown\u3092\u5165\u529B\u3059\u308B\u3068\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u3067\u30D7\u30EC\u30D3\u30E5\u30FC\u3092\u8868\u793A\u3057\u307E\u3059\u3002"}</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">{"Markdown\u5165\u529B"}</label>
            <textarea value={input} onChange={(e) => setInput(e.target.value)} rows={16} className="w-full p-3 border border-card-border rounded-lg bg-base text-sm font-mono" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{"\u30D7\u30EC\u30D3\u30E5\u30FC"}</label>
            <div className="w-full p-3 border border-card-border rounded-lg bg-base text-sm min-h-[384px] overflow-auto prose prose-sm" dangerouslySetInnerHTML={{ __html: preview }} />
          </div>
        </div>
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">{"\u4F7F\u3044\u65B9"}</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>{"\u5DE6\u5074\u306BMarkdown\u3092\u5165\u529B\u3059\u308B\u3068\u3001\u53F3\u5074\u306B\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u3067\u30D7\u30EC\u30D3\u30E5\u30FC\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002\u898B\u51FA\u3057\u3001\u592A\u5B57\u3001\u659C\u4F53\u3001\u30EA\u30B9\u30C8\u3001\u5F15\u7528\u3001\u30B3\u30FC\u30C9\u3001\u30EA\u30F3\u30AF\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u3059\u3002"}</p></div></section>
      <AffiliateSection slug="markdown-preview" category="\u958B\u767A\u30C4\u30FC\u30EB" />
      <RelatedTools currentSlug="markdown-preview" category="\u958B\u767A\u30C4\u30FC\u30EB" />
    </div>
  );
}
