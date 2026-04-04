"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

const EMOTICON_TO_EMOJI: [string, string][] = [
  [":)", "😊"], [":-)", "😊"], [":D", "😄"], [":-D", "😄"],
  [":P", "😛"], [":-P", "😛"], [";)", "😉"], [";-)", "😉"],
  [":(", "😢"], [":-(", "😢"], [":o", "😮"], [":-o", "😮"],
  [":O", "😮"], [":-O", "😮"], [">:(", "😠"], [">:-(", "😠"],
  [":*", "😘"], [":-*", "😘"], [":|", "😐"], [":-|", "😐"],
  [":/", "😕"], [":-/", "😕"], [":'(", "😭"], ["B)", "😎"],
  ["B-)", "😎"], ["<3", "❤️"], ["</3", "💔"], [":+1:", "👍"],
  [":-1:", "👎"], [":100:", "💯"], [":fire:", "🔥"], [":ok:", "👌"],
  [":pray:", "🙏"], [":clap:", "👏"], [":star:", "⭐"], [":heart:", "❤️"],
  [":smile:", "😊"], [":laugh:", "😂"], [":cry:", "😢"], [":wink:", "😉"],
  [":cool:", "😎"], [":angry:", "😠"], [":kiss:", "😘"], [":shock:", "😲"],
];

const EMOJI_TO_EMOTICON: [string, string][] = EMOTICON_TO_EMOJI
  .filter(([, emoji], i, arr) => arr.findIndex(([, e]) => e === emoji) === i)
  .map(([emoticon, emoji]) => [emoji, emoticon]);

function convertToEmoji(text: string) {
  let result = text;
  for (const [em, emoji] of EMOTICON_TO_EMOJI) {
    result = result.split(em).join(emoji);
  }
  return result;
}

function convertToEmoticon(text: string) {
  let result = text;
  for (const [emoji, em] of EMOJI_TO_EMOTICON) {
    result = result.split(emoji).join(em);
  }
  return result;
}

export default function EmojiConverterPage() {
  const [input, setInput] = useState(":) 今日もよい一日を！ :D <3");
  const [mode, setMode] = useState<"toEmoji" | "toEmoticon">("toEmoji");
  const [copied, setCopied] = useState(false);

  const output = mode === "toEmoji" ? convertToEmoji(input) : convertToEmoticon(input);

  const copy = () => {
    navigator.clipboard.writeText(output).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>顔文字⇔絵文字変換</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">顔文字⇔絵文字変換ツール</h1>
      <p className="text-muted mb-8">テキスト顔文字と絵文字を相互変換します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="flex gap-2">
          <button
            onClick={() => setMode("toEmoji")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${mode === "toEmoji" ? "bg-primary text-white" : "border border-card-border hover:bg-background"}`}
          >
            顔文字 → 絵文字
          </button>
          <button
            onClick={() => setMode("toEmoticon")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${mode === "toEmoticon" ? "bg-primary text-white" : "border border-card-border hover:bg-background"}`}
          >
            絵文字 → 顔文字
          </button>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">入力テキスト</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={4}
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">変換結果</label>
          <div className="bg-background rounded-lg px-4 py-3 text-sm min-h-[4rem] whitespace-pre-wrap break-words">{output}</div>
        </div>
        <button
          onClick={copy}
          className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          {copied ? "コピーしました！" : "結果をコピー"}
        </button>
      </div>
      <section className="mt-8">
        <h2 className="text-lg font-bold mb-3">対応している顔文字・絵文字の一覧</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {EMOTICON_TO_EMOJI.map(([em, emoji]) => (
              <div key={em} className="flex items-center gap-2 text-sm bg-background rounded px-3 py-1.5">
                <span className="font-mono text-muted">{em}</span>
                <span className="text-muted">→</span>
                <span className="text-lg">{emoji}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-8">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>変換モードを選択してテキストを入力すると、リアルタイムで変換結果が表示されます。</p>
          <p>「顔文字 → 絵文字」モードでは :) や ;) などのテキスト顔文字を絵文字に変換します。</p>
          <p>「絵文字 → 顔文字」モードでは絵文字をテキスト顔文字に変換します。</p>
        </div>
      </section>


      <AffiliateSection slug="emoji-converter" category="テキスト" />
      <RelatedTools currentSlug="emoji-converter" category="テキスト" />
    </div>
  );
}
