"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

type Direction = "tab-to-space" | "space-to-tab";

export default function IndentConverterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [direction, setDirection] = useState<Direction>("tab-to-space");
  const [spaceCount, setSpaceCount] = useState(2);
  const [copied, setCopied] = useState(false);

  const convert = () => {
    if (!input) {
      setOutput("");
      return;
    }
    const spaces = " ".repeat(spaceCount);
    let result: string;
    if (direction === "tab-to-space") {
      result = input.replace(/\t/g, spaces);
    } else {
      result = input.replace(new RegExp(spaces, "g"), "\t");
    }
    setOutput(result);
  };

  const copy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>インデント変換ツール</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">インデント変換ツール</h1>
      <p className="text-muted mb-8">
        テキストやコードのインデントをタブとスペースの間で変換します。スペース数も自由に設定できます。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="flex flex-wrap gap-6 mb-4">
          <div>
            <label className="block text-sm font-medium mb-2">変換方向</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="direction"
                  value="tab-to-space"
                  checked={direction === "tab-to-space"}
                  onChange={() => setDirection("tab-to-space")}
                  className="accent-primary"
                />
                <span className="text-sm">タブ → スペース</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="direction"
                  value="space-to-tab"
                  checked={direction === "space-to-tab"}
                  onChange={() => setDirection("space-to-tab")}
                  className="accent-primary"
                />
                <span className="text-sm">スペース → タブ</span>
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">スペース数</label>
            <input
              type="number"
              value={spaceCount}
              onChange={(e) => setSpaceCount(Math.max(1, Number(e.target.value)))}
              min={1}
              max={8}
              className="border border-card-border rounded-lg px-3 py-2 text-sm w-20 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
        </div>

        <label className="block text-sm font-medium mb-2">入力テキスト</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="変換したいコードやテキストを入力..."
          className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
          rows={8}
        />

        <button
          onClick={convert}
          className="mt-4 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          変換する
        </button>

        {output && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">変換後テキスト</span>
              <button onClick={copy} className="text-sm text-primary hover:text-primary-hover font-medium">
                {copied ? "コピー済み" : "コピー"}
              </button>
            </div>
            <pre className="bg-background rounded-lg p-4 text-sm font-mono overflow-x-auto max-h-72 overflow-y-auto whitespace-pre">
              {output}
            </pre>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">インデント変換ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>コードやテキストを入力し、変換方向とスペース数を設定して「変換する」ボタンを押します。</p>
          <p>「タブ → スペース」では1つのタブを指定したスペース数に置き換えます。</p>
          <p>「スペース → タブ」では指定スペース数のまとまりを1つのタブに置き換えます。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <AffiliateSection slug="indent-converter" category="テキスト" />
      <RelatedTools currentSlug="indent-converter" category="テキスト" />
    </div>
  );
}
