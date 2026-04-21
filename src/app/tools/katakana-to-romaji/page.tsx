"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [input, setInput] = useState("");

  const map: Record<string, string> = {
    "ア":"a","イ":"i","ウ":"u","エ":"e","オ":"o",
    "カ":"ka","キ":"ki","ク":"ku","ケ":"ke","コ":"ko",
    "サ":"sa","シ":"shi","ス":"su","セ":"se","ソ":"so",
    "タ":"ta","チ":"chi","ツ":"tsu","テ":"te","ト":"to",
    "ナ":"na","ニ":"ni","ヌ":"nu","ネ":"ne","ノ":"no",
    "ハ":"ha","ヒ":"hi","フ":"fu","ヘ":"he","ホ":"ho",
    "マ":"ma","ミ":"mi","ム":"mu","メ":"me","モ":"mo",
    "ヤ":"ya","ユ":"yu","ヨ":"yo",
    "ラ":"ra","リ":"ri","ル":"ru","レ":"re","ロ":"ro",
    "ワ":"wa","ヲ":"wo","ン":"n",
    "ガ":"ga","ギ":"gi","グ":"gu","ゲ":"ge","ゴ":"go",
    "ザ":"za","ジ":"ji","ズ":"zu","ゼ":"ze","ゾ":"zo",
    "ダ":"da","ヂ":"di","ヅ":"du","デ":"de","ド":"do",
    "バ":"ba","ビ":"bi","ブ":"bu","ベ":"be","ボ":"bo",
    "パ":"pa","ピ":"pi","プ":"pu","ペ":"pe","ポ":"po",
    "ー":"-","・":"·"," ":" ",
    "ャ":"ya","ュ":"yu","ョ":"yo","ッ":"t",
  };
  const convert = (text: string) => {
    let result = "";
    for (const ch of text) result += map[ch] || ch;
    return result;
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>カタカナ→ローマ字</span></nav>
      <h1 className="text-2xl font-bold mb-2">カタカナ→ローマ字変換ツール</h1>
      <p className="text-muted mb-8">カタカナをヘボン式ローマ字に変換。パスポート・クレジットカードの名前入力に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">カタカナを入力</label>
          <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="ヤマダ タロウ" className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" />
        </div>
        <div className="bg-primary/10 rounded-lg p-4">
          <div className="text-xs text-muted mb-1">ローマ字</div>
          <div className="text-xl font-bold text-primary tracking-wider">{convert(input).toUpperCase()}</div>
        </div>
      </div>
      <ToolFAQSection
        toolName="カタカナ→ローマ字変換"
        howTo={[
          "カタカナで名前や地名を入力",
          "ヘボン式ローマ字への変換結果を自動表示",
          "パスポート・クレジットカード・海外送金の名前入力に活用",
          "コピーで各種書類に貼り付け可能",
        ]}
        faqs={[
          {
            question: "ヘボン式ローマ字とは？",
            answer: "英語話者にとって最も自然に読めるローマ字表記方式。1867年ヘボンが考案、パスポート・空港・国際規格で採用。訓令式（例：「し」＝si）と違い、ヘボン式（shi）は実際の発音に近い表記。パスポート申請・クレジットカード・海外送金はヘボン式統一が必須、本ツール利用で失敗なし。",
          },
          {
            question: "「ん」の扱い方は？",
            answer: "基本的に「n」に変換。ただし「b/m/p」の前では「m」に変化（例：「しんばし」→「SHIMBASHI」）。外務省パスポートはヘボン式準拠だが、「n」で統一も許容。不明な場合は外務省の公式変換ルール確認、本ツールは標準ヘボン式で変換、一般用途に問題ありません。",
          },
          {
            question: "パスポートの名前表記は？",
            answer: "ヘボン式ローマ字が原則。姓・名の間はスペース、全て大文字。例：「山田 太郎」→「YAMADA TARO」。「とおる」「ゆうこ」等の長音は「TORU」「YUKO」（O・Uで延長表記可、省略も可）。申請時は一度決めた表記が基本固定、慎重に決めるのが重要です。",
          },
          {
            question: "クレジットカードの名前入力ミスは？",
            answer: "ECサイト・海外通販でのクレカ名前入力ミスは取引エラーの原因。カード表面の英字表記と完全一致が必要、スペース・大文字小文字・ミドルネームも同じに。海外ホテル予約（Booking.com等）も同様、本ツールで正確な名前表記を取得し、各サービスで統一入力を推奨します。",
          },
        ]}
      />
      <AffiliateSection slug="katakana-to-romaji" category="テキストツール" />
      <RelatedTools currentSlug="katakana-to-romaji" category="テキストツール" />
    </div>
  );
}
