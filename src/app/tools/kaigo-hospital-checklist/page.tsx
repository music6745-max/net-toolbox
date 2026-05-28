"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { KaigoToolCta } from "@/components/KaigoToolCta";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";
import { ToolJsonLd } from "@/components/ToolJsonLd";

const TOOL_SLUG = "kaigo-hospital-checklist";
const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=kaigo_hospital_checklist";

export default function KaigoHospitalChecklistPage() {
  const [phase, setPhase] = useState<"admission" | "discharge" | "certification">("admission");
  const [medicine, setMedicine] = useState(true);
  const [livingAlone, setLivingAlone] = useState(true);
  const [siblings, setSiblings] = useState(true);

  const checklist = useMemo(() => {
    const base = [
      "本人確認書類、保険証、介護保険証の所在を確認する",
      "かかりつけ医、服薬、既往歴、アレルギーの確認欄を作る",
      "家族の緊急連絡先と、病院からの連絡窓口を1人に決める",
    ];
    const phaseItems =
      phase === "admission"
        ? ["入院日、病棟、担当窓口、面会ルールを記録する", "入院中の支払い方法と概算費用を確認する"]
        : phase === "discharge"
          ? ["退院予定日、退院後の通院予定、必要な介護サービスを確認する", "自宅で必要な物品、手すり、ベッド、食事対応を洗い出す"]
          : ["介護認定の申請状況、認定調査日、主治医意見書の確認先を記録する", "ケアマネ候補、地域包括支援センター、相談窓口を整理する"];
    return [
      ...base,
      ...phaseItems,
      ...(medicine ? ["服薬リストは薬名ではなく、薬局でもらう説明書をまとめて保管する"] : []),
      ...(livingAlone ? ["一人暮らしの場合は、鍵、近隣連絡先、宅配、公共料金の確認欄を作る"] : []),
      ...(siblings ? ["きょうだいへ共有する未決事項と、次回確認日を決める"] : []),
    ];
  }, [phase, medicine, livingAlone, siblings]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <ToolJsonLd slug={TOOL_SLUG} />
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-primary">ツール</Link>
        <span className="mx-2">/</span>
        <span>入院・退院準備チェックリスト</span>
      </nav>

      <header className="mb-6">
        <p className="text-xs font-bold text-primary">親の入退院と介護認定の準備</p>
        <h1 className="mt-2 text-2xl font-bold sm:text-3xl">入院・退院準備チェックリスト生成</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          親の入院、退院、介護認定で家族が確認する項目を、状況別に整理します。個人情報は入力せず、確認項目だけを生成します。
        </p>
      </header>

      <section className="rounded-xl border border-card-border bg-card-bg p-5 sm:p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <label className="block">
            <span className="mb-1 block text-sm font-medium">いまの段階</span>
            <select
              value={phase}
              onChange={(e) => setPhase(e.target.value as "admission" | "discharge" | "certification")}
              className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
            >
              <option value="admission">入院直後・入院準備</option>
              <option value="discharge">退院前後</option>
              <option value="certification">介護認定・ケアマネ相談</option>
            </select>
          </label>
          <div className="rounded-lg bg-background p-4">
            <p className="text-sm font-bold">追加条件</p>
            <label className="mt-3 flex items-center gap-2 text-sm">
              <input type="checkbox" checked={medicine} onChange={(e) => setMedicine(e.target.checked)} />
              服薬や通院がある
            </label>
            <label className="mt-2 flex items-center gap-2 text-sm">
              <input type="checkbox" checked={livingAlone} onChange={(e) => setLivingAlone(e.target.checked)} />
              親が一人暮らし
            </label>
            <label className="mt-2 flex items-center gap-2 text-sm">
              <input type="checkbox" checked={siblings} onChange={(e) => setSiblings(e.target.checked)} />
              きょうだいに共有する
            </label>
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-card-border bg-background p-4">
          <h2 className="text-lg font-bold">確認リスト</h2>
          <ol className="mt-3 space-y-2">
            {checklist.map((item, index) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  {index + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <KaigoToolCta
        toolSlug={TOOL_SLUG}
        title="チェック結果を記録用テンプレートに移す"
        description="入退院時は確認事項が散らばりやすいため、連絡先、服薬、病院とのやり取りをテンプレートへ残すと家族共有が楽になります。"
        links={[
          { label: "親のこと整理ナビで診断する", href: KAIGO_NAVI_URL, eventName: "kaigo_navi_click", position: "hospital_tool", variant: "primary" },
          { label: "入院・退院・ケアマネ相談パックを見る", href: "https://kaigo-okane.booth.pm/items/8424970", eventName: "booth_click", position: "hospital_care_manager_pack" },
          { label: "親のもしも準備ノートを見る", href: "https://kaigo-okane.booth.pm/items/8382816", eventName: "booth_click", position: "emergency_note" },
          { label: "介護連携シート集を見る", href: "https://kaigo-okane.booth.pm/items/8382202", eventName: "booth_click", position: "coordination_sheet" },
        ]}
      />

      <ToolFAQSection
        toolName="入院・退院準備チェックリスト"
        howTo={[
          "入院、退院、介護認定のどの段階かを選ぶ",
          "服薬、一人暮らし、きょうだい共有の条件を選ぶ",
          "表示された確認リストを家族会議や病院連絡メモに転記する",
        ]}
        faqs={[
          { question: "病名や薬名を入力してよいですか？", answer: "このツールには入力しないでください。個人情報や病歴は、手元の紙や専用テンプレートに保管してください。" },
          { question: "退院前に一番確認すべきことは何ですか？", answer: "退院日、通院予定、服薬、介護サービス、家の環境、支払い方法を分けて確認すると抜け漏れが減ります。" },
          { question: "介護認定前でも使えますか？", answer: "使えます。申請状況、認定調査日、相談窓口、主治医意見書の確認先を整理する用途に向きます。" },
          { question: "医療判断に使えますか？", answer: "使えません。医療判断は医師や病院に確認してください。このツールは家族内の確認事項を整理するためのものです。" },
        ]}
      />

      <AffiliateSection slug={TOOL_SLUG} category="日常ツール" />
      <RelatedTools currentSlug={TOOL_SLUG} category="日常ツール" />
    </div>
  );
}
