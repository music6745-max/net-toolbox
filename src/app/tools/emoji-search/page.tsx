"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

const emojiData = [
  { emoji: "😀", tags: "笑顔 スマイル 嬉しい smile happy" },
  { emoji: "😂", tags: "爆笑 笑い tears joy" },
  { emoji: "🥰", tags: "愛 ハート 幸せ love hearts" },
  { emoji: "😎", tags: "サングラス クール cool sunglasses" },
  { emoji: "😢", tags: "泣く 悲しい sad cry" },
  { emoji: "😡", tags: "怒り 怒る angry mad" },
  { emoji: "🤔", tags: "考える 思考 thinking" },
  { emoji: "👍", tags: "いいね グッド thumbs up good" },
  { emoji: "👏", tags: "拍手 素晴らしい clap" },
  { emoji: "🙏", tags: "お願い 祈る ありがとう pray thanks" },
  { emoji: "❤️", tags: "ハート 愛 赤 heart love red" },
  { emoji: "🔥", tags: "炎 火 熱い fire hot" },
  { emoji: "⭐", tags: "星 お気に入り star favorite" },
  { emoji: "🎉", tags: "パーティー お祝い 祝い party celebration" },
  { emoji: "💪", tags: "筋肉 力 頑張る muscle strong" },
  { emoji: "🚀", tags: "ロケット 打ち上げ 速い rocket launch" },
  { emoji: "💡", tags: "電球 アイデア ひらめき idea light bulb" },
  { emoji: "📱", tags: "スマホ 携帯 phone mobile" },
  { emoji: "💻", tags: "パソコン PC ノート laptop computer" },
  { emoji: "📧", tags: "メール Eメール email" },
  { emoji: "🎵", tags: "音楽 音符 music note" },
  { emoji: "📸", tags: "カメラ 写真 camera photo" },
  { emoji: "🌸", tags: "桜 花 春 cherry blossom spring" },
  { emoji: "🌈", tags: "虹 レインボー rainbow" },
  { emoji: "☀️", tags: "太陽 晴れ sun sunny" },
  { emoji: "🌙", tags: "月 夜 moon night" },
  { emoji: "⏰", tags: "時計 アラーム 時間 clock alarm time" },
  { emoji: "✅", tags: "チェック 完了 済み check done" },
  { emoji: "❌", tags: "バツ ダメ 禁止 cross no" },
  { emoji: "⚠️", tags: "警告 注意 warning caution" },
  { emoji: "🎁", tags: "プレゼント ギフト 贈り物 gift present" },
  { emoji: "🍕", tags: "ピザ 食べ物 pizza food" },
  { emoji: "🍺", tags: "ビール 乾杯 お酒 beer cheers" },
  { emoji: "☕", tags: "コーヒー カフェ coffee cafe" },
  { emoji: "🐱", tags: "猫 ネコ にゃん cat" },
  { emoji: "🐶", tags: "犬 イヌ わんわん dog" },
  { emoji: "🏠", tags: "家 ホーム 住宅 home house" },
  { emoji: "✈️", tags: "飛行機 旅行 海外 airplane travel" },
  { emoji: "🚗", tags: "車 自動車 ドライブ car drive" },
  { emoji: "💰", tags: "お金 お札 金 money cash" },
];

export default function EmojiSearchPage() {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState("");

  const filtered = query
    ? emojiData.filter((e) => e.tags.toLowerCase().includes(query.toLowerCase()))
    : emojiData;

  const copy = (emoji: string) => {
    navigator.clipboard.writeText(emoji);
    setCopied(emoji);
    setTimeout(() => setCopied(""), 1500);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>絵文字検索</span></nav>
      <h1 className="text-2xl font-bold mb-2">絵文字検索ツール</h1>
      <p className="text-muted mb-8">キーワードで絵文字を検索。クリックでコピー。SNS投稿やチャットに。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="キーワードで検索（例: 笑顔、ハート、火）" className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 mb-4" />
        <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2">
          {filtered.map((e) => (
            <button key={e.emoji} onClick={() => copy(e.emoji)} className={`text-2xl p-2 rounded-lg hover:bg-primary/10 transition ${copied === e.emoji ? "bg-primary/20 ring-2 ring-primary" : "bg-background"}`} title={e.tags}>
              {e.emoji}
            </button>
          ))}
        </div>
        {filtered.length === 0 && <p className="text-center text-muted py-8">該当する絵文字が見つかりません</p>}
        {copied && <p className="text-center text-sm text-primary mt-4">{copied} をコピーしました</p>}
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">絵文字検索の使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>検索ボックスにキーワード（日本語・英語）を入力すると、関連する絵文字が表示されます。</p><p>絵文字をクリックするとクリップボードにコピーされます。</p></div></section>
      <AffiliateSection slug="emoji-search" category="テキスト" />
      <RelatedTools currentSlug="emoji-search" category="テキスト" />
    </div>
  );
}
