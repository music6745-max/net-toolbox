"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [birth, setBirth] = useState("1990-05-15");
  const d = new Date(birth);
  const m = d.getMonth() + 1;
  const day = d.getDate();
  const zodiac = (() => {
    if ((m===1&&day>=20)||(m===2&&day<=18)) return "水瓶座(♒)";
    if ((m===2&&day>=19)||(m===3&&day<=20)) return "魚座(♓)";
    if ((m===3&&day>=21)||(m===4&&day<=19)) return "牡羊座(♈)";
    if ((m===4&&day>=20)||(m===5&&day<=20)) return "牡牛座(♉)";
    if ((m===5&&day>=21)||(m===6&&day<=21)) return "双子座(♊)";
    if ((m===6&&day>=22)||(m===7&&day<=22)) return "蟹座(♋)";
    if ((m===7&&day>=23)||(m===8&&day<=22)) return "獅子座(♌)";
    if ((m===8&&day>=23)||(m===9&&day<=22)) return "乙女座(♍)";
    if ((m===9&&day>=23)||(m===10&&day<=23)) return "天秤座(♎)";
    if ((m===10&&day>=24)||(m===11&&day<=22)) return "蠍座(♏)";
    if ((m===11&&day>=23)||(m===12&&day<=21)) return "射手座(♐)";
    return "山羊座(♑)";
  })();
  const eto = ["申","酉","戌","亥","子","丑","寅","卯","辰","巳","午","未"][d.getFullYear() % 12];
  const today = new Date();
  const ageDiff = today.getFullYear() - d.getFullYear();
  const age = today.getMonth() > d.getMonth() || (today.getMonth() === d.getMonth() && today.getDate() >= d.getDate()) ? ageDiff : ageDiff - 1;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>誕生日情報</span></nav>
      <h1 className="text-2xl font-bold mb-2">誕生日から星座・干支・年齢を調べる</h1>
      <p className="text-muted mb-8">生年月日を入力すると星座・干支・現在の年齢を表示。プロフィールや占いの参考に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">生年月日</label><input type="date" value={birth} onChange={e => setBirth(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        {!isNaN(d.getTime()) && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">星座</div><div className="text-xl font-bold text-primary">{zodiac}</div></div>
            <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">干支</div><div className="text-xl font-bold">{eto}年</div></div>
            <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">現在の年齢</div><div className="text-xl font-bold">{age}歳</div></div>
          </div>
        )}
      </div>
      <ToolFAQSection
        toolName="誕生日から星座・干支"
        howTo={[
          "生年月日を選択",
          "星座（12星座）・干支（12支）・現在年齢が表示",
          "プロフィール作成・履歴書記入に活用",
          "占い・相性診断の参考情報に",
        ]}
        faqs={[
          {
            question: "12星座の期間は？",
            answer: "牡羊座3/21〜4/19、牡牛座4/20〜5/20、双子座5/21〜6/21、蟹座6/22〜7/22、獅子座7/23〜8/22、乙女座8/23〜9/22、天秤座9/23〜10/23、蠍座10/24〜11/22、射手座11/23〜12/21、山羊座12/22〜1/19、水瓶座1/20〜2/18、魚座2/19〜3/20。境界日は年により1〜2日変わります。",
          },
          {
            question: "干支の計算方法は？",
            answer: "西暦÷12の余りで決定。余り0＝申（2000年・2012年・2024年）、1＝酉、2＝戌、3＝亥、4＝子、5＝丑、6＝寅、7＝卯、8＝辰、9＝巳、10＝午、11＝未。2026年は午年。年末年始生まれは前年扱いなど若干の例外あり、正確には節分（2月3〜4日）以降が年の始まりとされる流派もあります。",
          },
          {
            question: "西暦と元号の換算は？",
            answer: "令和：西暦-2018（令和7年＝2025年）、平成：西暦-1988（平成30年＝2018年）、昭和：西暦-1925（昭和64年＝1989年）、大正：西暦-1911（大正15年＝1926年）、明治：西暦-1867（明治45年＝1912年）。履歴書は元号・西暦どちらでも可、統一感を持たせましょう。",
          },
          {
            question: "満年齢と数え年の違いは？",
            answer: "満年齢：生まれた日を0歳、誕生日ごとに+1歳（現代の日本の標準）。数え年：生まれた時点で1歳、正月ごとに+1歳（伝統的・厄年計算で使用）。同じ日でも満30歳・数え31歳になる人もいる、七五三・還暦・厄年等の伝統行事は数え年で行うことが多い慣習です。",
          },
        ]}
      />
      <AffiliateSection slug="birthday-zodiac" category="日常ツール" />
      <RelatedTools currentSlug="birthday-zodiac" category="日常ツール" />
    </div>
  );
}
