"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

const jaTexts = [
  "吾輩は猫である。名前はまだない。どこで生まれたかとんと見当がつかぬ。",
  "何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。",
  "吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。",
  "この書生というのは時々我々を捕えて煮て食うという話である。",
  "しかしその当時は何という考もなかったから別段恐しいとも思わなかった。",
  "ただ彼の掌に載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。",
  "掌の上で少し落ち着いて書生の顔を見たのがいわゆる人間というものの見始であろう。",
  "この時妙なものだと思った感じが今でも残っている。",
];

export default function DummyTextPage() {
  const [paragraphs, setParagraphs] = useState(3);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => {
    const result = Array.from({ length: paragraphs }, (_, i) => {
      const count = 2 + Math.floor(Math.random() * 3);
      return Array.from({ length: count }, () => jaTexts[Math.floor(Math.random() * jaTexts.length)]).join("");
    }).join("\n\n");
    setOutput(result);
  };

  const copy = async () => { await navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>ダミーテキスト生成</span></nav>
      <h1 className="text-2xl font-bold mb-2">ダミーテキスト生成ツール</h1>
      <p className="text-muted mb-8">Webデザインやモックアップ用の日本語ダミーテキストを生成します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="flex items-end gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">段落数</label>
            <input type="number" min={1} max={20} value={paragraphs} onChange={(e) => setParagraphs(Number(e.target.value))}
              className="w-24 border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <button onClick={generate} className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover">生成</button>
        </div>
        {output && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2"><span className="text-sm font-medium">生成結果</span><button onClick={copy} className="text-sm text-primary font-medium">{copied ? "コピー済み" : "コピー"}</button></div>
            <pre className="bg-background rounded-lg p-4 text-sm overflow-x-auto max-h-80 overflow-y-auto whitespace-pre-wrap">{output}</pre>
          </div>
        )}
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">ダミーテキスト生成ツールの使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>段落数を指定して「生成」をクリックすると、日本語のダミーテキストが生成されます。</p><p>Webサイトのデザインモックアップやレイアウト確認にご活用ください。</p></div></section>


      <AffiliateSection slug="dummy-text" category="テキスト" />
      <RelatedTools currentSlug="dummy-text" category="テキスト" />
    </div>
  );
}
