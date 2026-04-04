"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

interface Heading {
  level: number;
  text: string;
}

function extractHeadings(html: string): Heading[] {
  const headings: Heading[] = [];
  const re = /<h([1-6])[^>]*>([\s\S]*?)<\/h[1-6]>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const text = m[2].replace(/<[^>]+>/g, "").trim();
    headings.push({ level: parseInt(m[1]), text });
  }
  return headings;
}

function checkIssues(headings: Heading[]) {
  const issues: string[] = [];
  const h1s = headings.filter((h) => h.level === 1);
  if (h1s.length === 0) issues.push("H1タグが見つかりません。ページに1つのH1を含めることを推奨します。");
  if (h1s.length > 1) issues.push(`H1タグが${h1s.length}個あります。H1は1ページに1つが推奨です。`);
  for (let i = 1; i < headings.length; i++) {
    if (headings[i].level > headings[i - 1].level + 1) {
      issues.push(`見出しレベルが飛んでいます: H${headings[i - 1].level} → H${headings[i].level}`);
    }
  }
  return issues;
}

const LEVEL_COLORS: Record<number, string> = {
  1: "border-primary bg-primary/10 text-primary",
  2: "border-blue-400 bg-blue-50 text-blue-700",
  3: "border-green-400 bg-green-50 text-green-700",
  4: "border-yellow-400 bg-yellow-50 text-yellow-700",
  5: "border-orange-400 bg-orange-50 text-orange-700",
  6: "border-red-400 bg-red-50 text-red-700",
};

const SAMPLE_HTML = `<h1>メインタイトル</h1>
<h2>セクション1</h2>
<h3>サブセクション1-1</h3>
<h3>サブセクション1-2</h3>
<h2>セクション2</h2>
<h3>サブセクション2-1</h3>
<h4>詳細項目</h4>`;

export default function HeadingCheckerPage() {
  const [html, setHtml] = useState(SAMPLE_HTML);

  const headings = useMemo(() => extractHeadings(html), [html]);
  const issues = useMemo(() => checkIssues(headings), [headings]);

  const counts: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  headings.forEach((h) => counts[h.level]++);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>見出し構造チェッカー</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">見出し構造チェッカー</h1>
      <p className="text-muted mb-8">HTMLの見出しタグ（H1〜H6）を抽出し、階層構造を確認します。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">HTML（見出しタグを含む）</label>
          <textarea
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            rows={8}
            placeholder="HTMLをここに貼り付けてください..."
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
          />
        </div>

        <div className="flex gap-3 flex-wrap">
          {[1, 2, 3, 4, 5, 6].map((l) => (
            <div key={l} className="bg-background rounded-lg px-3 py-2 text-center min-w-[52px]">
              <div className="text-lg font-bold text-primary">{counts[l]}</div>
              <div className="text-xs text-muted">H{l}</div>
            </div>
          ))}
        </div>

        {issues.length > 0 && (
          <div className="space-y-2">
            {issues.map((issue, i) => (
              <div key={i} className="flex gap-2 items-start bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
                <span className="shrink-0 font-bold">!</span>
                <span>{issue}</span>
              </div>
            ))}
          </div>
        )}
        {issues.length === 0 && headings.length > 0 && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-sm text-green-700">見出し構造に問題は見つかりませんでした。</div>
        )}

        {headings.length > 0 ? (
          <div className="space-y-1.5">
            <div className="text-sm font-medium mb-2">見出し構造ツリー</div>
            {headings.map((h, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 rounded-lg border-l-4 px-3 py-2 text-sm ${LEVEL_COLORS[h.level]}`}
                style={{ marginLeft: `${(h.level - 1) * 16}px` }}
              >
                <span className="font-bold text-xs shrink-0">H{h.level}</span>
                <span className="truncate">{h.text || "（テキストなし）"}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-muted text-center py-4">見出しタグが見つかりませんでした。</div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>HTMLをテキストエリアに貼り付けると、見出しタグ（H1〜H6）が自動で抽出されます。</p>
          <p>階層構造がツリー表示され、H1の欠如や見出しレベルの飛びなどの問題を確認できます。</p>
          <p>SEOの観点から、H1は1ページに1つ、見出しレベルは順番に使うことが推奨されます。</p>
        </div>
      </section>


      <RelatedTools currentSlug="heading-checker" category="開発ツール" />
    </div>
  );
}
