"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

type Field = { key: string; label: string; required: boolean; hint?: string };

const FIELDS: Field[] = [
  { key: "name", label: "氏名（フリガナ含む）", required: true },
  { key: "birth", label: "生年月日・年齢", required: true },
  { key: "address", label: "現住所・連絡先", required: true, hint: "電話番号・メール" },
  { key: "photo", label: "証明写真", required: true, hint: "3ヶ月以内・サイズ規定" },
  { key: "education", label: "学歴（中学卒業以降）", required: true },
  { key: "work", label: "職歴（時系列・職務内容）", required: true },
  { key: "license", label: "免許・資格", required: true, hint: "正式名称で記載" },
  { key: "motivation", label: "志望動機", required: true, hint: "200〜400字目安" },
  { key: "pr", label: "自己PR", required: true, hint: "数値や具体例を含める" },
  { key: "commute", label: "通勤時間", required: false },
  { key: "family", label: "扶養家族・配偶者", required: false },
  { key: "request", label: "本人希望記入欄", required: false, hint: "特になければ空欄でOK" },
];

export default function Page() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const toggle = (k: string) => setChecked((s) => ({ ...s, [k]: !s[k] }));

  const requiredCount = FIELDS.filter((f) => f.required).length;
  const requiredDone = FIELDS.filter((f) => f.required && checked[f.key]).length;
  const progress = Math.round((requiredDone / requiredCount) * 100);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>履歴書フォーマットチェッカー</span></nav>
      <h1 className="text-2xl font-bold mb-2">履歴書フォーマットチェッカー</h1>
      <p className="text-muted mb-8">履歴書の必須項目をチェックリストで確認。抜け漏れなく転職活動に臨みましょう。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2"><span>必須項目の達成度</span><span className="font-bold">{requiredDone} / {requiredCount}</span></div>
          <div className="w-full bg-background h-2 rounded-full overflow-hidden">
            <div className="bg-primary h-full transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>
        <div className="space-y-2">
          {FIELDS.map((f) => (
            <label key={f.key} className="flex items-start gap-3 p-3 border border-card-border rounded-lg hover:bg-background cursor-pointer">
              <input type="checkbox" checked={!!checked[f.key]} onChange={() => toggle(f.key)} className="mt-1" />
              <div className="flex-1">
                <div className="text-sm font-medium flex items-center gap-2">
                  {f.label}
                  {f.required ? <span className="text-xs bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 px-2 py-0.5 rounded">必須</span> : <span className="text-xs bg-gray-100 dark:bg-gray-800 text-muted px-2 py-0.5 rounded">任意</span>}
                </div>
                {f.hint && <div className="text-xs text-muted mt-1">{f.hint}</div>}
              </div>
            </label>
          ))}
        </div>
      </div>

      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted space-y-2"><p>履歴書を作成する際、各項目を記入し終えたらチェックを入れましょう。必須項目を全て埋めることで採用担当者に良い印象を与えられます。</p></div></section>

      <section className="mt-10 mb-6">
        <Link href="/guide/it-job-comparison" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">IT・エンジニア転職サイト比較ガイドを読む</div>
          <p className="text-xs text-muted">履歴書を仕上げたら、自分に合った転職サービスを選びましょう →</p>
        </Link>
      </section>

      <AffiliateSection slug="resume-builder-helper" category="日常ツール" />
      <RelatedTools currentSlug="resume-builder-helper" category="日常ツール" />
    </div>
  );
}
