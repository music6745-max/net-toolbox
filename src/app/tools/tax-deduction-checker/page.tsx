"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [items, setItems] = useState([
    { name: "医療費", amount: "", checked: false },
    { name: "ふるさと納税", amount: "", checked: false },
    { name: "住宅ローン控除", amount: "", checked: false },
    { name: "生命保険料控除", amount: "", checked: false },
    { name: "地震保険料控除", amount: "", checked: false },
    { name: "iDeCo(小規模企業共済等)", amount: "", checked: false },
    { name: "寄附金控除", amount: "", checked: false },
    { name: "雑損控除(災害等)", amount: "", checked: false },
    { name: "配偶者控除/特別控除", amount: "", checked: false },
    { name: "扶養控除", amount: "", checked: false },
    { name: "障害者控除", amount: "", checked: false },
    { name: "ひとり親控除", amount: "", checked: false },
  ]);

  const checkedCount = items.filter(i => i.checked).length;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>確定申告控除チェック</span></nav>
      <h1 className="text-2xl font-bold mb-2">確定申告 控除チェックリスト</h1>
      <p className="text-muted mb-8">適用できる控除を一覧でチェック。見落としがちな控除を確認して節税しましょう。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="mb-4 text-sm"><span className="font-bold">{checkedCount}</span>/{items.length} の控除をチェック済み</div>
        <div className="space-y-2">
          {items.map((item, i) => (
            <label key={item.name} className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 cursor-pointer">
              <input type="checkbox" checked={item.checked} onChange={() => {
                const next = [...items];
                next[i] = { ...next[i], checked: !next[i].checked };
                setItems(next);
              }} className="rounded" />
              <span className={`text-sm flex-1 ${item.checked ? 'line-through text-muted' : ''}`}>{item.name}</span>
            </label>
          ))}
        </div>
        {checkedCount > 0 && (
          <div className="mt-4 bg-green-50 dark:bg-green-900/20 rounded-lg p-4 text-sm text-green-700 dark:text-green-300">
            {checkedCount}件の控除が適用できる可能性があります。確定申告ソフトで正確に計算しましょう。
          </div>
        )}
      </div>
      <ToolFAQSection
        toolName="確定申告控除チェック"
        howTo={[
          "12項目の控除を一覧表示",
          "自分が該当する控除にチェック",
          "見落としがちな控除を確認",
          "e-Tax・freee・マネフォ等の確定申告ソフトで正確計算",
        ]}
        faqs={[
          {
            question: "見落としがちな控除は？",
            answer: "①医療費控除：年10万円超で適用、通院交通費・家族合算可②セルフメディケーション税制：市販薬年1.2万円超③ふるさと納税：ワンストップor確定申告④iDeCo：全額所得控除⑤雑損控除：災害・盗難の損失。年収500万円なら5〜20万円の税金還付が現実的、見逃しは数万円の機会損失です。",
          },
          {
            question: "確定申告のメリットは？",
            answer: "①各種控除で税金還付（年5〜30万円）②住民税も連動で軽減③ふるさと納税ワンストップ超えでも対応④副業収入の正確な申告⑤損益通算・繰越控除（株式投資）。会社員も医療費控除・ふるさと納税等あれば確定申告で数万円の還付獲得、e-Taxなら1〜2時間で完了可能です。",
          },
          {
            question: "確定申告ソフトのおすすめは？",
            answer: "freee会計（月2,178円・初心者向け・確定申告特化）、マネーフォワードクラウド確定申告（月880円・AI仕訳）、弥生会計オンライン（月2,500円・老舗）、やよいの青色申告オンライン（年10,286円・個人事業主向け）。無料体験期間活用で比較が賢明、年3万円の投資で月5〜20時間の時短実現可能です。",
          },
          {
            question: "税理士相談は必要？",
            answer: "副業収入20万円超・事業所得・株式運用・不動産投資等の場合、税理士相談で数十万円の節税実現可能。税理士ドットコムで無料マッチング、初回相談無料、年30万円〜の顧問料で事業者は経費化可能。複雑な税務は迷わず専門家相談、自己流で失敗するリスク回避が重要です。",
          },
        ]}
      />
      <AffiliateSection slug="tax-deduction-checker" category="日常ツール" />
      <RelatedTools currentSlug="tax-deduction-checker" category="日常ツール" />
    </div>
  );
}
