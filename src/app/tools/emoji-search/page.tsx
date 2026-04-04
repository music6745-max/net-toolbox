"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

interface EmojiItem {
  emoji: string;
  name: string;
  keywords: string;
}

interface EmojiCategory {
  name: string;
  emojis: EmojiItem[];
}

const emojiData: EmojiCategory[] = [
  {
    name: "顔・スマイリー",
    emojis: [
      { emoji: "\u{1F600}", name: "にっこり", keywords: "笑顔 smile grin" },
      { emoji: "\u{1F602}", name: "嬉し泣き", keywords: "笑い tears joy" },
      { emoji: "\u{1F60D}", name: "目がハート", keywords: "好き love heart eyes" },
      { emoji: "\u{1F914}", name: "考え中", keywords: "思考 thinking" },
      { emoji: "\u{1F60E}", name: "サングラス", keywords: "かっこいい cool sunglasses" },
      { emoji: "\u{1F622}", name: "泣き顔", keywords: "悲しい cry sad" },
      { emoji: "\u{1F621}", name: "怒り", keywords: "angry mad" },
      { emoji: "\u{1F631}", name: "恐怖", keywords: "怖い scream fear" },
      { emoji: "\u{1F44D}", name: "いいね", keywords: "サムズアップ thumbs up good" },
      { emoji: "\u{1F44E}", name: "ダメ", keywords: "サムズダウン thumbs down bad" },
      { emoji: "\u{1F44B}", name: "手を振る", keywords: "バイバイ wave hello" },
      { emoji: "\u{1F64F}", name: "お願い", keywords: "祈り pray please" },
      { emoji: "\u{1F389}", name: "パーティー", keywords: "お祝い party celebration" },
      { emoji: "\u{1F525}", name: "炎", keywords: "火 fire hot" },
      { emoji: "\u{2764}\u{FE0F}", name: "赤いハート", keywords: "愛 love red heart" },
      { emoji: "\u{1F4AF}", name: "100点", keywords: "満点 perfect hundred" },
    ],
  },
  {
    name: "動物・自然",
    emojis: [
      { emoji: "\u{1F436}", name: "犬", keywords: "いぬ dog puppy" },
      { emoji: "\u{1F431}", name: "猫", keywords: "ねこ cat kitten" },
      { emoji: "\u{1F42D}", name: "ねずみ", keywords: "マウス mouse" },
      { emoji: "\u{1F430}", name: "うさぎ", keywords: "ウサギ rabbit bunny" },
      { emoji: "\u{1F981}", name: "ライオン", keywords: "獅子 lion" },
      { emoji: "\u{1F427}", name: "ペンギン", keywords: "penguin" },
      { emoji: "\u{1F338}", name: "桜", keywords: "さくら cherry blossom" },
      { emoji: "\u{1F337}", name: "チューリップ", keywords: "花 tulip flower" },
      { emoji: "\u{1F333}", name: "木", keywords: "tree 森" },
      { emoji: "\u{1F31E}", name: "太陽", keywords: "晴れ sun" },
      { emoji: "\u{1F319}", name: "月", keywords: "三日月 moon crescent" },
      { emoji: "\u{2B50}", name: "星", keywords: "star" },
    ],
  },
  {
    name: "食べ物・飲み物",
    emojis: [
      { emoji: "\u{1F354}", name: "ハンバーガー", keywords: "バーガー hamburger burger" },
      { emoji: "\u{1F355}", name: "ピザ", keywords: "pizza" },
      { emoji: "\u{1F363}", name: "寿司", keywords: "すし sushi" },
      { emoji: "\u{1F359}", name: "おにぎり", keywords: "おむすび rice ball" },
      { emoji: "\u{1F35C}", name: "ラーメン", keywords: "麺 ramen noodle" },
      { emoji: "\u{1F370}", name: "ケーキ", keywords: "cake dessert" },
      { emoji: "\u{2615}", name: "コーヒー", keywords: "coffee tea カフェ" },
      { emoji: "\u{1F37A}", name: "ビール", keywords: "beer" },
      { emoji: "\u{1F34E}", name: "りんご", keywords: "apple 果物" },
      { emoji: "\u{1F347}", name: "ぶどう", keywords: "grape" },
    ],
  },
  {
    name: "旅行・場所",
    emojis: [
      { emoji: "\u{2708}\u{FE0F}", name: "飛行機", keywords: "airplane 旅行" },
      { emoji: "\u{1F697}", name: "車", keywords: "car automobile" },
      { emoji: "\u{1F682}", name: "電車", keywords: "train 鉄道" },
      { emoji: "\u{1F3E0}", name: "家", keywords: "house home" },
      { emoji: "\u{1F3EB}", name: "学校", keywords: "school" },
      { emoji: "\u{1F3E2}", name: "ビル", keywords: "building office" },
      { emoji: "\u{26F0}\u{FE0F}", name: "山", keywords: "mountain 登山" },
      { emoji: "\u{1F3D6}\u{FE0F}", name: "ビーチ", keywords: "beach 海" },
    ],
  },
  {
    name: "物・シンボル",
    emojis: [
      { emoji: "\u{1F4BB}", name: "パソコン", keywords: "PC laptop computer" },
      { emoji: "\u{1F4F1}", name: "スマホ", keywords: "携帯 phone mobile" },
      { emoji: "\u{1F4E7}", name: "メール", keywords: "email" },
      { emoji: "\u{1F4DA}", name: "本", keywords: "books 読書" },
      { emoji: "\u{1F3B5}", name: "音符", keywords: "music 音楽" },
      { emoji: "\u{1F3AE}", name: "ゲーム", keywords: "game controller" },
      { emoji: "\u{26A0}\u{FE0F}", name: "注意", keywords: "warning 危険" },
      { emoji: "\u{2705}", name: "チェック", keywords: "check 完了 ok" },
      { emoji: "\u{274C}", name: "バツ", keywords: "cross 不正解 no" },
      { emoji: "\u{2753}", name: "はてな", keywords: "question 質問" },
      { emoji: "\u{1F4A1}", name: "電球", keywords: "idea ひらめき light bulb" },
      { emoji: "\u{1F512}", name: "鍵", keywords: "lock セキュリティ" },
      { emoji: "\u{1F4CC}", name: "ピン", keywords: "pin 固定" },
      { emoji: "\u{1F4CB}", name: "クリップボード", keywords: "clipboard メモ" },
    ],
  },
];

export default function Page() {
  const [search, setSearch] = useState("");
  const [copiedEmoji, setCopiedEmoji] = useState<string | null>(null);

  const copyEmoji = async (emoji: string) => {
    await navigator.clipboard.writeText(emoji);
    setCopiedEmoji(emoji);
    setTimeout(() => setCopiedEmoji(null), 1500);
  };

  const filteredData = search
    ? emojiData
        .map((cat) => ({
          ...cat,
          emojis: cat.emojis.filter(
            (e) =>
              e.name.includes(search) ||
              e.keywords.toLowerCase().includes(search.toLowerCase()) ||
              e.emoji === search
          ),
        }))
        .filter((cat) => cat.emojis.length > 0)
    : emojiData;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>絵文字検索</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">絵文字検索ツール</h1>
      <p className="text-muted mb-8">
        キーワードで絵文字を検索。カテゴリ別一覧。クリックでコピーできます。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="キーワードで検索（例: 笑顔、犬、コーヒー...）"
          className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
        />

        {filteredData.length === 0 && (
          <p className="text-sm text-muted text-center py-4">該当する絵文字が見つかりません。</p>
        )}

        {filteredData.map((cat) => (
          <div key={cat.name}>
            <h3 className="text-sm font-medium mb-2">{cat.name}</h3>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
              {cat.emojis.map((e, i) => (
                <button
                  key={i}
                  onClick={() => copyEmoji(e.emoji)}
                  className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-primary/5 transition-colors cursor-pointer"
                  title={`${e.name}\nU+${e.emoji.codePointAt(0)?.toString(16).toUpperCase()}`}
                >
                  <span className="text-2xl">{copiedEmoji === e.emoji ? "✓" : e.emoji}</span>
                  <span className="text-[10px] text-muted truncate w-full text-center">{e.name}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">絵文字検索ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>キーワードを入力して絵文字を検索できます。日本語・英語の両方で検索可能です。</p>
          <p>絵文字をクリックするとクリップボードにコピーされます。</p>
          <p>カテゴリ別に整理されているので、ブラウズして探すこともできます。</p>
        </div>
      </section>

      <RelatedTools currentSlug="emoji-search" category="テキスト" />
    </div>
  );
}
