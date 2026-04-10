"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

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
      <AffiliateSection slug="katakana-to-romaji" category="テキストツール" />
      <RelatedTools currentSlug="katakana-to-romaji" category="テキストツール" />
    </div>
  );
}
