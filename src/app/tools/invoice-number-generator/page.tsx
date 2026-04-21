"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [prefix, setPrefix] = useState("INV");
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [month, setMonth] = useState((new Date().getMonth() + 1).toString().padStart(2, '0'));
  const [seq, setSeq] = useState("001");

  const invoiceNumber = `${prefix}-${year}${month}-${seq}`;
  const today = new Date();
  const dueDate = new Date(today);
  dueDate.setDate(dueDate.getDate() + 30);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>請求書番号生成</span></nav>
      <h1 className="text-2xl font-bold mb-2">請求書番号ジェネレーター</h1>
      <p className="text-muted mb-8">プレフィックス・年月・連番から請求書番号を自動生成。フリーランスの請求書作成に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-4 gap-3">
          <div><label className="block text-sm font-medium mb-2">接頭辞</label><input type="text" value={prefix} onChange={e => setPrefix(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">年</label><input type="text" value={year} onChange={e => setYear(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">月</label><input type="text" value={month} onChange={e => setMonth(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">連番</label><input type="text" value={seq} onChange={e => setSeq(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 text-sm" /></div>
        </div>
        <div className="bg-primary/10 rounded-lg p-6 text-center">
          <div className="text-xs text-muted mb-1">請求書番号</div>
          <div className="text-2xl font-bold text-primary font-mono">{invoiceNumber}</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-background rounded-lg p-3 text-center text-sm"><div className="text-xs text-muted mb-1">発行日</div><div className="font-bold">{today.toLocaleDateString('ja-JP')}</div></div>
          <div className="bg-background rounded-lg p-3 text-center text-sm"><div className="text-xs text-muted mb-1">支払期限(30日後)</div><div className="font-bold">{dueDate.toLocaleDateString('ja-JP')}</div></div>
        </div>
        <button onClick={() => {navigator.clipboard.writeText(invoiceNumber)}} className="w-full py-2 bg-card-bg border border-card-border rounded-lg text-sm">番号をコピー</button>
      </div>
      <ToolFAQSection
        toolName="請求書番号ジェネレーター"
        howTo={[
          "接頭辞（INV・請求番号等）を入力",
          "年・月・連番を入力",
          "規則的な請求書番号が自動生成される",
          "コピーボタンで請求書ソフトに貼り付けて活用",
        ]}
        faqs={[
          {
            question: "適格請求書の要件は？",
            answer: "インボイス制度（2023年10月〜）対応の適格請求書には、①発行事業者の氏名＋登録番号（T+13桁）②取引年月日③取引内容（軽減税率対象は明記）④税率ごとの対価・消費税額⑤受領者名称が必須。請求書番号は必須ではないが、管理上付与が推奨、一意性確保で経理が効率化できます。",
          },
          {
            question: "請求書番号の命名規則は？",
            answer: "推奨形式「INV-202604-001」：①接頭辞3文字（業務識別）②年月6桁（YYYYMM）③連番3桁。月初めに連番リセットで年間4桁（001〜999）維持、年間1000件超のBtoBなら4桁でも可。Excel・freee・マネフォ等の会計ソフトで自動連番化も推奨です。",
          },
          {
            question: "請求書の法定保存期間は？",
            answer: "法人：7年間（法人税法）、個人事業主：5年間（所得税法）、青色申告事業者：7年間（欠損金繰越対応）。電子帳簿保存法2024年1月施行で電子取引の電子保存必須、紙プリントアウト保存NG。freee・マネフォのクラウド保存活用で、手間なく法令遵守が可能です。",
          },
          {
            question: "請求書発行・管理のおすすめツールは？",
            answer: "freee会計（月2,000円〜・請求書＋会計＋確定申告が統合）、マネーフォワードクラウド請求書（月800円〜・個人事業主向け）、MakeLeaps（月0円〜1,000円・フリーランス特化）、Misoca（弥生系列・無料プランあり）。機能・価格・規模で選択、小規模ならMisoca・MakeLeapsから開始推奨です。",
          },
        ]}
      />
      <AffiliateSection slug="invoice-number-generator" category="日常ツール" />
      <RelatedTools currentSlug="invoice-number-generator" category="日常ツール" />
    </div>
  );
}
