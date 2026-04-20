"use client";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>用紙サイズ一覧</span></nav>
      <h1 className="text-2xl font-bold mb-2">用紙サイズ一覧ツール</h1>
      <p className="text-muted mb-8">A判・B判・はがき等の用紙サイズをmm/inch/pxで一覧表示。印刷に便利。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-card-border"><th className="py-2 px-3 text-left">規格</th><th className="py-2 px-3 text-left">mm</th><th className="py-2 px-3 text-left">inch</th></tr></thead>
            <tbody>
              {[["A0","841×1189"],["A1","594×841"],["A2","420×594"],["A3","297×420"],["A4","210×297"],["A5","148×210"],["A6","105×148"],["B0","1030×1456"],["B1","728×1030"],["B2","515×728"],["B3","364×515"],["B4","257×364"],["B5","182×257"],["B6","128×182"],["はがき","100×148"],["名刺","55×91"]].map(([n,s],i) => {
                const [w,h] = s.split("×").map(Number);
                return <tr key={i} className="border-b border-card-border hover:bg-background"><td className="py-2 px-3 font-medium">{n}</td><td className="py-2 px-3">{s} mm</td><td className="py-2 px-3">{(w/25.4).toFixed(1)}×{(h/25.4).toFixed(1)}</td></tr>;
              })}
            </tbody>
          </table>
        </div>
      </div>
      <ToolFAQSection
        toolName="用紙サイズ一覧"
        howTo={[
          "一覧表から使用したい用紙規格（A4・B5・はがき等）を選ぶ",
          "mm単位の寸法で印刷機のプロパティや用紙設定に入力する",
          "インチ表記が必要な海外向け印刷物は右列のinch値を参考にする",
          "名刺・はがき等の既定サイズも含むため、テンプレート作成時の参照に活用できる",
        ]}
        faqs={[
          {
            question: "A判とB判の違いは何ですか？",
            answer: "A判はISO国際規格（ドイツ発祥）、B判は日本独自のJIS規格（美濃紙サイズ由来）です。A4（210×297mm）は世界標準のオフィス用紙、B5（182×257mm）は日本のノートや学校配布物でよく使われます。A0とB0の面積比はおよそ1:1.5で、B判のほうが若干大きい構成になっています。",
          },
          {
            question: "A4用紙の正確な寸法は？",
            answer: "A4は210×297mm（縦長）、面積は62,370平方mmです。ピクセル換算は印刷時DPIによって異なり、一般的な300DPIなら2480×3508px、72DPI（Web向け）なら595×842pxとなります。Microsoft Word・Excel・PDFはデフォルトでA4対応です。",
          },
          {
            question: "はがき・名刺の標準サイズは？",
            answer: "日本の郵便はがきは100×148mm（A6とほぼ同サイズ）、名刺は55×91mm（4号サイズ）が標準です。海外名刺は国によって異なり、アメリカは2×3.5インチ（約51×89mm）、ヨーロッパは85×55mm（クレジットカードサイズ）が一般的です。",
          },
          {
            question: "印刷時の余白はどれくらい必要ですか？",
            answer: "一般的な家庭用プリンターは上下左右3〜5mmの余白が必要です。業務用プリンター・印刷会社に依頼する場合は「フチなし印刷」も可能ですが、その場合は用紙サイズより3mm程度大きくデザインし「トンボ」を付ける必要があります。冊子製本時は綴じ代として15〜20mm余分に確保してください。",
          },
        ]}
      />

      <AffiliateSection slug="paper-size" category="日常ツール" />

      <RelatedTools currentSlug="paper-size" category="日常ツール" />
    </div>
  );
}