"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

interface BreadcrumbItem {
  name: string;
  url: string;
}

export default function BreadcrumbGeneratorPage() {
  const [items, setItems] = useState<BreadcrumbItem[]>([
    { name: "トップ", url: "https://example.com" },
    { name: "カテゴリ", url: "https://example.com/category" },
    { name: "現在のページ", url: "https://example.com/category/page" },
  ]);
  const [separator, setSeparator] = useState("›");
  const [copiedHtml, setCopiedHtml] = useState(false);
  const [copiedJsonLd, setCopiedJsonLd] = useState(false);

  const updateItem = (index: number, field: keyof BreadcrumbItem, value: string) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const addItem = () => setItems([...items, { name: "", url: "" }]);
  const removeItem = (index: number) => {
    if (items.length > 1) setItems(items.filter((_, i) => i !== index));
  };

  const moveItem = (index: number, direction: "up" | "down") => {
    const newItems = [...items];
    const target = direction === "up" ? index - 1 : index + 1;
    if (target < 0 || target >= newItems.length) return;
    [newItems[index], newItems[target]] = [newItems[target], newItems[index]];
    setItems(newItems);
  };

  const generateHtml = (): string => {
    const validItems = items.filter((item) => item.name);
    if (validItems.length === 0) return "";
    const liItems = validItems
      .map((item, i) => {
        const isLast = i === validItems.length - 1;
        if (isLast) {
          return `  <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">\n    <span itemprop="name">${item.name}</span>\n    <meta itemprop="position" content="${i + 1}" />\n  </li>`;
        }
        return `  <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">\n    <a itemprop="item" href="${item.url}">\n      <span itemprop="name">${item.name}</span>\n    </a>\n    <meta itemprop="position" content="${i + 1}" />\n    <span aria-hidden="true"> ${separator} </span>\n  </li>`;
      })
      .join("\n");
    return `<nav aria-label="パンくずリスト">\n  <ol itemscope itemtype="https://schema.org/BreadcrumbList">\n${liItems}\n  </ol>\n</nav>`;
  };

  const generateJsonLd = (): string => {
    const validItems = items.filter((item) => item.name);
    const data = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: validItems.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: item.url || undefined,
      })),
    };
    return `<script type="application/ld+json">\n${JSON.stringify(data, null, 2)}\n</script>`;
  };

  const htmlOutput = generateHtml();
  const jsonLdOutput = generateJsonLd();

  const copyHtml = async () => {
    await navigator.clipboard.writeText(htmlOutput);
    setCopiedHtml(true);
    setTimeout(() => setCopiedHtml(false), 2000);
  };

  const copyJsonLd = async () => {
    await navigator.clipboard.writeText(jsonLdOutput);
    setCopiedJsonLd(true);
    setTimeout(() => setCopiedJsonLd(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>パンくずリスト生成</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">パンくずリスト生成ツール</h1>
      <p className="text-muted mb-8">
        パンくずリストのHTMLとJSON-LD構造化データを同時に生成します。SEOのリッチリザルトにも対応しています。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="flex items-center gap-4 mb-4">
          <label className="text-sm font-medium">区切り文字:</label>
          <div className="flex gap-2">
            {["›", ">", "/", "|", "»"].map((s) => (
              <button
                key={s}
                onClick={() => setSeparator(s)}
                className={`w-9 h-9 border rounded-lg text-sm font-medium transition-colors ${separator === s ? "bg-primary text-white border-primary" : "border-card-border hover:border-primary"}`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          {items.map((item, i) => (
            <div key={i} className="flex gap-2 items-center">
              <span className="text-xs text-muted w-5 flex-shrink-0 text-right">{i + 1}</span>
              <input
                type="text"
                value={item.name}
                onChange={(e) => updateItem(i, "name", e.target.value)}
                placeholder="ページ名"
                className="w-32 border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
              <input
                type="url"
                value={item.url}
                onChange={(e) => updateItem(i, "url", e.target.value)}
                placeholder="https://example.com/page"
                className="flex-1 border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
              <div className="flex gap-1 flex-shrink-0">
                <button onClick={() => moveItem(i, "up")} disabled={i === 0} className="text-xs text-muted hover:text-primary disabled:opacity-30 px-1">↑</button>
                <button onClick={() => moveItem(i, "down")} disabled={i === items.length - 1} className="text-xs text-muted hover:text-primary disabled:opacity-30 px-1">↓</button>
                <button onClick={() => removeItem(i)} disabled={items.length <= 1} className="text-xs text-red-400 hover:text-red-600 disabled:opacity-30 px-1">✕</button>
              </div>
            </div>
          ))}
        </div>
        <button onClick={addItem} className="mt-3 text-sm text-primary hover:text-primary-hover font-medium">
          + 項目を追加
        </button>

        {/* Preview */}
        <div className="mt-5 p-3 bg-background rounded-lg">
          <p className="text-xs text-muted mb-2">プレビュー</p>
          <div className="flex flex-wrap items-center gap-1 text-sm">
            {items.filter((i) => i.name).map((item, i, arr) => (
              <span key={i} className="flex items-center gap-1">
                {i < arr.length - 1 ? (
                  <span className="text-primary hover:underline cursor-pointer">{item.name}</span>
                ) : (
                  <span className="font-medium">{item.name}</span>
                )}
                {i < arr.length - 1 && <span className="text-muted">{separator}</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-base font-bold">HTML（Microdata付き）</h2>
            <button onClick={copyHtml} className="text-sm text-primary hover:text-primary-hover font-medium">
              {copiedHtml ? "コピー済み" : "コピー"}
            </button>
          </div>
          <pre className="bg-card-bg border border-card-border rounded-xl p-4 text-xs font-mono overflow-x-auto max-h-60 overflow-y-auto whitespace-pre">
            {htmlOutput}
          </pre>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-base font-bold">JSON-LD</h2>
            <button onClick={copyJsonLd} className="text-sm text-primary hover:text-primary-hover font-medium">
              {copiedJsonLd ? "コピー済み" : "コピー"}
            </button>
          </div>
          <pre className="bg-card-bg border border-card-border rounded-xl p-4 text-xs font-mono overflow-x-auto max-h-60 overflow-y-auto whitespace-pre">
            {jsonLdOutput}
          </pre>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 各パンくず項目のページ名とURLを入力します。</p>
          <p>2. 矢印ボタンで順序を変更、✕ボタンで削除できます。</p>
          <p>3. 区切り文字を選択し、プレビューで見た目を確認します。</p>
          <p>4. HTMLはページ本文内に、JSON-LDは&lt;head&gt;内に貼り付けてください。</p>
        </div>
      </section>


      <RelatedTools currentSlug="breadcrumb-generator" category="開発ツール" />
    </div>
  );
}
