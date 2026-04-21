"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";
import { ToolFAQSection } from "@/components/ToolFAQSection";

const toHalf = (s: string) => s.replace(/[Ａ-Ｚａ-ｚ０-９]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xfee0)).replace(/　/g, " ");
const toFull = (s: string) => s.replace(/[A-Za-z0-9]/g, (c) => String.fromCharCode(c.charCodeAt(0) + 0xfee0)).replace(/ /g, "　");
const kataToHira = (s: string) => s.replace(/[\u30A1-\u30F6]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60));
const hiraToKata = (s: string) => s.replace(/[\u3041-\u3096]/g, (c) => String.fromCharCode(c.charCodeAt(0) + 0x60));

export default function FullwidthHalfwidthPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const ops = [
    { label: "全角→半角（英数字）", fn: toHalf },
    { label: "半角→全角（英数字）", fn: toFull },
    { label: "カタカナ→ひらがな", fn: kataToHira },
    { label: "ひらがな→カタカナ", fn: hiraToKata },
  ];

  const copy = async () => { await navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>全角半角変換</span></nav>
      <h1 className="text-2xl font-bold mb-2">全角半角変換ツール</h1>
      <p className="text-muted mb-8">全角⇔半角の英数字変換、ひらがな⇔カタカナ変換ができます。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <label className="block text-sm font-medium mb-2">入力テキスト</label>
        <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="変換したいテキストを入力..." className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" rows={5} />
        <div className="flex flex-wrap gap-2 mt-4">
          {ops.map((op) => (
            <button key={op.label} onClick={() => setOutput(op.fn(input))} className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors">{op.label}</button>
          ))}
        </div>
        {output && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">出力結果</span>
              <button onClick={copy} className="text-sm text-primary font-medium">{copied ? "コピー済み" : "コピー"}</button>
            </div>
            <pre className="bg-background rounded-lg p-4 text-sm overflow-x-auto max-h-60 overflow-y-auto whitespace-pre-wrap">{output}</pre>
          </div>
        )}
      </div>
      <ToolFAQSection
        toolName="全角半角変換"
        howTo={[
          "変換したいテキストを入力",
          "「全角→半角」「半角→全角」「カナ→ひらがな」「ひら→カナ」から選択",
          "変換結果をコピーして各書類・フォームに活用",
          "データ入力・フォーマット統一・書類整備に便利",
        ]}
        faqs={[
          {
            question: "全角と半角の違いは？",
            answer: "全角：日本語文字と同じ幅（2バイト）、半角：英数字の幅（1バイト）。履歴書・公式書類は「カタカナは全角」「英数字は半角」が基本、混在は読みづらい。データ入力時の統一（Excel・CSV）、プログラミング（ファイル名・変数名）は半角推奨、用途で使い分けが鉄則です。",
          },
          {
            question: "どんな場面で変換が必要？",
            answer: "①住所入力（半角英数字推奨）②履歴書・エントリーシート（フォーマット統一）③データベース移行（全角→半角統一）④日本語入力の誤字修正⑤プログラム処理の前処理（文字コード統一）。本ツールで一括変換→貼り付けが時短になります。",
          },
          {
            question: "ひらがな・カタカナ変換のコツは？",
            answer: "ひらがな・カタカナ変換は固有名詞（外来語・企業名）・外国人名・擬音語等で頻出。「キャンパス」↔「きゃんぱす」、「スターバックス」↔「すたーばっくす」等。両方のパターンで検索したい時、本ツールで一度に両形式取得→両方で検索が便利です。",
          },
          {
            question: "Excel での一括変換方法は？",
            answer: "Excel関数：ASC（全角→半角）、JIS（半角→全角）、HIRAGANA（カタカナ→ひらがな）、KATAKANA（ひらがな→カタカナ）。大量データの処理に便利。本ツールは単発処理向け、Excel の関数を併用すればデータ処理の自動化が可能です。",
          },
        ]}
      />


      <AffiliateSection slug="fullwidth-halfwidth" category="テキスト" />
      <RelatedTools currentSlug="fullwidth-halfwidth" category="テキスト" />
    </div>
  );
}
