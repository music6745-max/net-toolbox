"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

interface EmojiEntry {
  emoji: string;
  name: string;
  category: string;
}

const EMOJIS: EmojiEntry[] = [
  // Faces
  { emoji: "😀", name: "grinning face", category: "顔・感情" },
  { emoji: "😁", name: "beaming face with smiling eyes", category: "顔・感情" },
  { emoji: "😂", name: "face with tears of joy", category: "顔・感情" },
  { emoji: "🤣", name: "rolling on the floor laughing", category: "顔・感情" },
  { emoji: "😃", name: "grinning face with big eyes", category: "顔・感情" },
  { emoji: "😄", name: "grinning face with smiling eyes", category: "顔・感情" },
  { emoji: "😅", name: "grinning face with sweat", category: "顔・感情" },
  { emoji: "😆", name: "grinning squinting face", category: "顔・感情" },
  { emoji: "😊", name: "smiling face with smiling eyes", category: "顔・感情" },
  { emoji: "🙂", name: "slightly smiling face", category: "顔・感情" },
  { emoji: "😎", name: "smiling face with sunglasses", category: "顔・感情" },
  { emoji: "🥳", name: "partying face", category: "顔・感情" },
  { emoji: "😍", name: "smiling face with heart-eyes", category: "顔・感情" },
  { emoji: "🥰", name: "smiling face with hearts", category: "顔・感情" },
  { emoji: "😘", name: "face blowing a kiss", category: "顔・感情" },
  { emoji: "😢", name: "crying face", category: "顔・感情" },
  { emoji: "😭", name: "loudly crying face", category: "顔・感情" },
  { emoji: "😤", name: "face with steam from nose", category: "顔・感情" },
  { emoji: "😡", name: "pouting face", category: "顔・感情" },
  { emoji: "🤔", name: "thinking face", category: "顔・感情" },
  { emoji: "😴", name: "sleeping face", category: "顔・感情" },
  { emoji: "🤯", name: "exploding head", category: "顔・感情" },
  { emoji: "🥺", name: "pleading face", category: "顔・感情" },
  { emoji: "😱", name: "face screaming in fear", category: "顔・感情" },
  { emoji: "🤗", name: "smiling face with open hands", category: "顔・感情" },
  { emoji: "😏", name: "smirking face", category: "顔・感情" },
  { emoji: "🙄", name: "face with rolling eyes", category: "顔・感情" },
  { emoji: "😑", name: "expressionless face", category: "顔・感情" },
  { emoji: "🤐", name: "zipper-mouth face", category: "顔・感情" },
  { emoji: "😷", name: "face with medical mask", category: "顔・感情" },
  // Gestures / People
  { emoji: "👋", name: "waving hand", category: "ジェスチャー" },
  { emoji: "👍", name: "thumbs up", category: "ジェスチャー" },
  { emoji: "👎", name: "thumbs down", category: "ジェスチャー" },
  { emoji: "👌", name: "ok hand", category: "ジェスチャー" },
  { emoji: "✌️", name: "victory hand", category: "ジェスチャー" },
  { emoji: "🤞", name: "crossed fingers", category: "ジェスチャー" },
  { emoji: "🤘", name: "sign of the horns", category: "ジェスチャー" },
  { emoji: "👏", name: "clapping hands", category: "ジェスチャー" },
  { emoji: "🙌", name: "raising hands", category: "ジェスチャー" },
  { emoji: "🤝", name: "handshake", category: "ジェスチャー" },
  { emoji: "🙏", name: "folded hands", category: "ジェスチャー" },
  { emoji: "💪", name: "flexed biceps", category: "ジェスチャー" },
  { emoji: "🫶", name: "heart hands", category: "ジェスチャー" },
  { emoji: "☝️", name: "index pointing up", category: "ジェスチャー" },
  { emoji: "👆", name: "backhand index pointing up", category: "ジェスチャー" },
  { emoji: "👇", name: "backhand index pointing down", category: "ジェスチャー" },
  { emoji: "👉", name: "backhand index pointing right", category: "ジェスチャー" },
  { emoji: "👈", name: "backhand index pointing left", category: "ジェスチャー" },
  // Animals
  { emoji: "🐶", name: "dog face", category: "動物" },
  { emoji: "🐱", name: "cat face", category: "動物" },
  { emoji: "🐭", name: "mouse face", category: "動物" },
  { emoji: "🐹", name: "hamster", category: "動物" },
  { emoji: "🐰", name: "rabbit face", category: "動物" },
  { emoji: "🦊", name: "fox", category: "動物" },
  { emoji: "🐻", name: "bear", category: "動物" },
  { emoji: "🐼", name: "panda", category: "動物" },
  { emoji: "🐨", name: "koala", category: "動物" },
  { emoji: "🐯", name: "tiger face", category: "動物" },
  { emoji: "🦁", name: "lion", category: "動物" },
  { emoji: "🐮", name: "cow face", category: "動物" },
  { emoji: "🐷", name: "pig face", category: "動物" },
  { emoji: "🐸", name: "frog", category: "動物" },
  { emoji: "🐙", name: "octopus", category: "動物" },
  { emoji: "🐧", name: "penguin", category: "動物" },
  { emoji: "🦋", name: "butterfly", category: "動物" },
  { emoji: "🐝", name: "honeybee", category: "動物" },
  { emoji: "🦄", name: "unicorn", category: "動物" },
  { emoji: "🐉", name: "dragon", category: "動物" },
  // Food
  { emoji: "🍎", name: "red apple", category: "食べ物" },
  { emoji: "🍊", name: "tangerine", category: "食べ物" },
  { emoji: "🍋", name: "lemon", category: "食べ物" },
  { emoji: "🍇", name: "grapes", category: "食べ物" },
  { emoji: "🍓", name: "strawberry", category: "食べ物" },
  { emoji: "🍕", name: "pizza", category: "食べ物" },
  { emoji: "🍔", name: "hamburger", category: "食べ物" },
  { emoji: "🍟", name: "french fries", category: "食べ物" },
  { emoji: "🌮", name: "taco", category: "食べ物" },
  { emoji: "🍜", name: "steaming bowl", category: "食べ物" },
  { emoji: "🍣", name: "sushi", category: "食べ物" },
  { emoji: "🍩", name: "doughnut", category: "食べ物" },
  { emoji: "🎂", name: "birthday cake", category: "食べ物" },
  { emoji: "☕", name: "hot beverage", category: "食べ物" },
  { emoji: "🍺", name: "beer mug", category: "食べ物" },
  { emoji: "🥂", name: "clinking glasses", category: "食べ物" },
  // Travel / Places
  { emoji: "🚀", name: "rocket", category: "旅行・場所" },
  { emoji: "✈️", name: "airplane", category: "旅行・場所" },
  { emoji: "🚗", name: "automobile", category: "旅行・場所" },
  { emoji: "🚕", name: "taxi", category: "旅行・場所" },
  { emoji: "🚢", name: "ship", category: "旅行・場所" },
  { emoji: "🏠", name: "house", category: "旅行・場所" },
  { emoji: "🏢", name: "office building", category: "旅行・場所" },
  { emoji: "🗼", name: "Tokyo tower", category: "旅行・場所" },
  { emoji: "🗽", name: "Statue of Liberty", category: "旅行・場所" },
  { emoji: "⛩️", name: "shinto shrine", category: "旅行・場所" },
  { emoji: "🗺️", name: "world map", category: "旅行・場所" },
  { emoji: "🌍", name: "globe showing Europe-Africa", category: "旅行・場所" },
  // Objects
  { emoji: "💡", name: "light bulb", category: "物・道具" },
  { emoji: "🔑", name: "key", category: "物・道具" },
  { emoji: "🔒", name: "locked", category: "物・道具" },
  { emoji: "📱", name: "mobile phone", category: "物・道具" },
  { emoji: "💻", name: "laptop", category: "物・道具" },
  { emoji: "🖥️", name: "desktop computer", category: "物・道具" },
  { emoji: "📷", name: "camera", category: "物・道具" },
  { emoji: "🎵", name: "musical note", category: "物・道具" },
  { emoji: "🎮", name: "video game", category: "物・道具" },
  { emoji: "📚", name: "books", category: "物・道具" },
  { emoji: "✏️", name: "pencil", category: "物・道具" },
  { emoji: "📌", name: "pushpin", category: "物・道具" },
  { emoji: "🔧", name: "wrench", category: "物・道具" },
  { emoji: "⚙️", name: "gear", category: "物・道具" },
  { emoji: "💰", name: "money bag", category: "物・道具" },
  // Symbols
  { emoji: "❤️", name: "red heart", category: "記号" },
  { emoji: "🧡", name: "orange heart", category: "記号" },
  { emoji: "💛", name: "yellow heart", category: "記号" },
  { emoji: "💚", name: "green heart", category: "記号" },
  { emoji: "💙", name: "blue heart", category: "記号" },
  { emoji: "💜", name: "purple heart", category: "記号" },
  { emoji: "🖤", name: "black heart", category: "記号" },
  { emoji: "🤍", name: "white heart", category: "記号" },
  { emoji: "💯", name: "hundred points", category: "記号" },
  { emoji: "✅", name: "check mark button", category: "記号" },
  { emoji: "❌", name: "cross mark", category: "記号" },
  { emoji: "⚠️", name: "warning", category: "記号" },
  { emoji: "🔥", name: "fire", category: "記号" },
  { emoji: "⭐", name: "star", category: "記号" },
  { emoji: "🌟", name: "glowing star", category: "記号" },
  { emoji: "💫", name: "dizzy", category: "記号" },
  { emoji: "🎉", name: "party popper", category: "記号" },
  { emoji: "🎊", name: "confetti ball", category: "記号" },
  { emoji: "🏆", name: "trophy", category: "記号" },
  { emoji: "🥇", name: "1st place medal", category: "記号" },
];

const CATEGORIES = ["すべて", ...Array.from(new Set(EMOJIS.map((e) => e.category)))];

export default function EmojiListPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("すべて");
  const [copiedEmoji, setCopiedEmoji] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return EMOJIS.filter(
      (e) =>
        (category === "すべて" || e.category === category) &&
        (q === "" || e.name.includes(q) || e.emoji === q || e.category.includes(q))
    );
  }, [query, category]);

  const copy = async (emoji: string) => {
    await navigator.clipboard.writeText(emoji);
    setCopiedEmoji(emoji);
    setTimeout(() => setCopiedEmoji(null), 1500);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>絵文字一覧ツール</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">絵文字一覧ツール</h1>
      <p className="text-muted mb-8">
        絵文字をカテゴリ別に一覧表示。クリックするとクリップボードにコピーされます。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="flex flex-wrap gap-3 mb-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="絵文字を検索（例: heart, cat）"
            className="flex-1 min-w-40 border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-card-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <p className="text-xs text-muted mb-3">{filtered.length} 件</p>

        {copiedEmoji && (
          <div className="mb-3 inline-flex items-center gap-2 bg-primary/10 text-primary text-sm px-3 py-1.5 rounded-lg">
            <span className="text-lg">{copiedEmoji}</span>
            <span>コピーしました！</span>
          </div>
        )}

        <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-1.5 max-h-96 overflow-y-auto">
          {filtered.map((item, i) => (
            <button
              key={i}
              onClick={() => copy(item.emoji)}
              title={item.name}
              className="flex items-center justify-center bg-background hover:bg-primary/10 border border-card-border rounded-lg p-2 text-2xl transition-colors aspect-square"
            >
              {item.emoji}
            </button>
          ))}
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">絵文字一覧ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>絵文字をクリックするとクリップボードにコピーされます。</p>
          <p>検索欄に英語でキーワードを入力するか、カテゴリを選択して絵文字を絞り込めます。</p>
          <p>コピーした絵文字はメール・SNS・ドキュメントなどにそのまま貼り付けて使えます。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <AffiliateSection slug="emoji-list" category="テキスト" />
      <RelatedTools currentSlug="emoji-list" category="テキスト" />
    </div>
  );
}
