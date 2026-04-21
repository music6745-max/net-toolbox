"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [names, setNames] = useState("田中\n佐藤\n鈴木\n高橋\n渡辺\n山田\n中村\n小林");
  const [picked, setPicked] = useState("");
  const [spinning, setSpinning] = useState(false);

  const pick = () => {
    const list = names.split("\n").map(n => n.trim()).filter(n => n);
    if (list.length === 0) return;
    setSpinning(true);
    let count = 0;
    const interval = setInterval(() => {
      setPicked(list[Math.floor(Math.random() * list.length)]);
      count++;
      if (count > 15) {
        clearInterval(interval);
        setPicked(list[Math.floor(Math.random() * list.length)]);
        setSpinning(false);
      }
    }, 100);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>ランダム名前選び</span></nav>
      <h1 className="text-2xl font-bold mb-2">ランダム名前ピッカー（あみだくじ代わり）</h1>
      <p className="text-muted mb-8">名前リストからランダムに1人を選出。順番決め・当番決め・プレゼント抽選に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">名前リスト（1行1名）</label>
          <textarea value={names} onChange={e => setNames(e.target.value)} rows={6} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm resize-y" />
        </div>
        <button onClick={pick} disabled={spinning} className="w-full py-3 bg-primary text-white rounded-lg font-bold text-sm disabled:opacity-50">{spinning ? '選出中...' : 'ランダムに選ぶ！'}</button>
        {picked && (
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg p-8 text-center">
            <div className="text-xs text-muted mb-2">選ばれたのは...</div>
            <div className="text-4xl font-bold text-orange-500">{picked}</div>
          </div>
        )}
      </div>
      <ToolFAQSection
        toolName="ランダム名前ピッカー"
        howTo={[
          "名前リストを1行1名で入力",
          "「ランダムに選ぶ」ボタンをクリック",
          "10回連続でランダム表示→最終決定される演出付き",
          "あみだくじ・くじ引きの代替、順番決め・役割分担に活用",
        ]}
        faqs={[
          {
            question: "どんな場面で使う？",
            answer: "①職場の当番決め（掃除・資料作成・プレゼン）②会議の司会者選出③プレゼント交換の順番④飲み会の席順⑤子供の習い事順番⑥スポーツチーム分け⑦旅行のドライバー選出。公平性と楽しさを兼ね備えた選出方法、全員が納得できる仕組みです。",
          },
          {
            question: "あみだくじ・くじ引きとの違いは？",
            answer: "あみだくじ：全員の最終位置が決まる（全員が関与）。くじ引き：1人ずつ引く（ランダム選択）。本ツール：1人だけ選出（当番決め等）。用途で使い分け、複数人の順番決めはあみだくじ、1人選ぶのはこのツール、景品配分はくじ引きが便利です。",
          },
          {
            question: "結果に納得してもらうコツは？",
            answer: "①事前に全員に「公平にランダムで決める」ことを合意②画面共有で決定過程を皆で見る③結果を記録しておく（後で再選出の根拠）④敗者（当番に当たった人）への感謝・配慮。公開性と透明性が納得感を生む、ビジネス・プライベートどちらでも重要なポイントです。",
          },
          {
            question: "他のランダム選出ツールは？",
            answer: "スマホアプリ：「iスロット」「デジタルサイコロ」「ルーレット」。オンラインサービス：「Wheel Decide」「Spin the Wheel」「RANDOM.ORG」。本格的な抽選なら「キャンペーン抽選くん」等の専用ツール。無料サービス多数、シーンに合わせて選択可能です。",
          },
        ]}
      />
      <AffiliateSection slug="random-name-picker" category="日常ツール" />
      <RelatedTools currentSlug="random-name-picker" category="日常ツール" />
    </div>
  );
}
