"use client";

import { useState } from "react";
import Link from "next/link";

type Platform = {
  name: string;
  limits: { label: string; max: number }[];
  color: string;
};

const PLATFORMS: Platform[] = [
  {
    name: "Twitter / X",
    color: "bg-black",
    limits: [{ label: "ツイート", max: 280 }],
  },
  {
    name: "Instagram",
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
    limits: [
      { label: "キャプション", max: 2200 },
      { label: "プロフィール", max: 150 },
    ],
  },
  {
    name: "Facebook",
    color: "bg-blue-600",
    limits: [
      { label: "投稿", max: 63206 },
      { label: "コメント", max: 8000 },
    ],
  },
  {
    name: "LINE",
    color: "bg-green-500",
    limits: [{ label: "メッセージ", max: 1000 }],
  },
  {
    name: "YouTube",
    color: "bg-red-600",
    limits: [
      { label: "タイトル", max: 100 },
      { label: "説明文", max: 5000 },
      { label: "コメント", max: 10000 },
    ],
  },
  {
    name: "TikTok",
    color: "bg-gray-900",
    limits: [
      { label: "キャプション", max: 2200 },
      { label: "コメント", max: 150 },
    ],
  },
];

function getBarColor(pct: number) {
  if (pct >= 100) return "bg-red-500";
  if (pct >= 80) return "bg-yellow-400";
  return "bg-primary";
}

export default function SnsCharLimitPage() {
  const [text, setText] = useState("");
  const count = text.length;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>SNS文字数制限チェック</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">SNS文字数制限チェック</h1>
      <p className="text-muted mb-8">
        テキストを入力すると各SNSの文字数制限に対してリアルタイムでチェックします。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <label className="block text-sm font-medium mb-2">テキストを入力</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="投稿したいテキストを入力してください..."
          className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
          rows={6}
        />
        <div className="mt-2 flex justify-between text-xs text-muted">
          <span>入力文字数</span>
          <span className="font-mono font-bold text-base">{count.toLocaleString()} 文字</span>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {PLATFORMS.map((platform) => (
          <div key={platform.name} className="bg-card-bg border border-card-border rounded-xl p-5">
            <h2 className="text-sm font-bold mb-3 flex items-center gap-2">
              <span className={`inline-block w-3 h-3 rounded-full ${platform.color}`} />
              {platform.name}
            </h2>
            <div className="space-y-3">
              {platform.limits.map((limit) => {
                const pct = Math.min((count / limit.max) * 100, 100);
                const over = count > limit.max;
                const remaining = limit.max - count;
                return (
                  <div key={limit.label}>
                    <div className="flex items-center justify-between mb-1 text-xs">
                      <span className="text-muted">{limit.label}</span>
                      <span className={over ? "text-red-500 font-bold" : "text-muted"}>
                        {over
                          ? `${Math.abs(remaining).toLocaleString()} 文字オーバー`
                          : `残り ${remaining.toLocaleString()} 文字`}
                        {" "}
                        <span className="font-mono">({count.toLocaleString()} / {limit.max.toLocaleString()})</span>
                      </span>
                    </div>
                    <div className="w-full bg-background rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-2 rounded-full transition-all duration-200 ${getBarColor(pct)}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    {over && (
                      <p className="text-xs text-red-500 mt-1">制限を超えています。投稿できません。</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>テキストボックスに投稿したいテキストを入力すると、各SNSの文字数制限に対してリアルタイムでチェックします。</p>
          <p>バーが赤くなった場合は制限を超えています。投稿前に文字数を確認しましょう。</p>
          <p>絵文字は一般的に2文字としてカウントされる場合があります（SNSによって異なります）。</p>
        </div>
      </section>
    </div>
  );
}
