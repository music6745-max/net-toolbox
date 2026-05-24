"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { KaigoToolCta } from "@/components/KaigoToolCta";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";
import { ToolJsonLd } from "@/components/ToolJsonLd";

const TOOL_SLUG = "kaigo-care-certification-memo";
const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=kaigo_care_certification_memo";

const concernLabels = {
  fall: "転倒・ふらつき",
  medicine: "服薬の不安",
  bathing: "入浴・着替え",
  shopping: "買い物・通院",
  money: "金銭管理・郵便物",
  memory: "もの忘れ・認知面",
} as const;

type ConcernKey = keyof typeof concernLabels;

const initialConcerns: Record<ConcernKey, boolean> = {
  fall: true,
  medicine: true,
  bathing: false,
  shopping: true,
  money: false,
  memory: true,
};

export default function KaigoCareCertificationMemoPage() {
  const [concerns, setConcerns] = useState(initialConcerns);
  const [livingAlone, setLivingAlone] = useState(true);
  const [familyMeeting, setFamilyMeeting] = useState(true);
  const [doctorVisit, setDoctorVisit] = useState(false);

  const memo = useMemo(() => {
    const selected = Object.entries(concerns)
      .filter(([, checked]) => checked)
      .map(([key]) => concernLabels[key as ConcernKey]);

    const situationItems = [
      "介護保険証、健康保険証、お薬手帳、かかりつけ医の情報を確認する",
      "地域包括支援センターまたは自治体の介護保険窓口へ相談する担当者を決める",
      "本人ができる日とできない日の差を、責める表現ではなく事実として残す",
      ...(livingAlone ? ["一人暮らしの場合は、安否確認の頻度、近隣連絡先、鍵の保管方法を確認する"] : []),
      ...(doctorVisit ? ["直近の受診日、次回受診予定、主治医へ相談したい内容をまとめる"] : []),
    ];

    const surveyItems = selected.map((label) => `${label}: 日付、場面、困ったこと、家族が対応したことを1行で残す`);

    const familyItems = [
      "申請・相談の連絡係",
      "認定調査に同席できる人",
      "通院や買い物の付き添い担当",
      "費用や交通費の立替記録を残す人",
      ...(familyMeeting ? ["きょうだいへ共有する未決事項と次回確認日"] : []),
    ];

    return { selected, situationItems, surveyItems, familyItems };
  }, [concerns, doctorVisit, familyMeeting, livingAlone]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <ToolJsonLd slug={TOOL_SLUG} />
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-primary">ツール</Link>
        <span className="mx-2">/</span>
        <span>介護認定申請メモメーカー</span>
      </nav>

      <header className="mb-6">
        <p className="text-xs font-bold text-primary">親の介護認定を相談する前の整理</p>
        <h1 className="mt-2 text-2xl font-bold sm:text-3xl">介護認定申請メモメーカー</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          親の介護認定を申請する前に、家族が確認したい生活状況、相談前の持ち物、認定調査前のメモを整理します。
          個人情報は保存せず、ブラウザ上で確認項目だけを生成します。
        </p>
      </header>

      <section className="rounded-xl border border-card-border bg-card-bg p-5 sm:p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold">気になっていること</p>
            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {(Object.keys(concernLabels) as ConcernKey[]).map((key) => (
                <label key={key} className="flex items-center gap-2 rounded-lg border border-card-border px-3 py-2 text-sm">
                  <input
                    type="checkbox"
                    checked={concerns[key]}
                    onChange={(event) => setConcerns((current) => ({ ...current, [key]: event.target.checked }))}
                  />
                  {concernLabels[key]}
                </label>
              ))}
            </div>
          </div>

          <div className="rounded-lg bg-background p-4">
            <p className="text-sm font-bold">追加条件</p>
            <label className="mt-3 flex items-center gap-2 text-sm">
              <input type="checkbox" checked={livingAlone} onChange={(e) => setLivingAlone(e.target.checked)} />
              親が一人暮らし
            </label>
            <label className="mt-2 flex items-center gap-2 text-sm">
              <input type="checkbox" checked={doctorVisit} onChange={(e) => setDoctorVisit(e.target.checked)} />
              近く受診予定がある
            </label>
            <label className="mt-2 flex items-center gap-2 text-sm">
              <input type="checkbox" checked={familyMeeting} onChange={(e) => setFamilyMeeting(e.target.checked)} />
              きょうだい・親族へ共有する
            </label>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-card-border bg-background p-4">
            <h2 className="text-base font-bold">相談前に確認</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
              {memo.situationItems.map((item) => <li key={item}>・{item}</li>)}
            </ul>
          </div>
          <div className="rounded-lg border border-card-border bg-background p-4">
            <h2 className="text-base font-bold">調査前メモ</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
              {memo.surveyItems.length > 0 ? memo.surveyItems.map((item) => <li key={item}>・{item}</li>) : <li>・気になる場面を1つ以上選ぶ</li>}
            </ul>
          </div>
          <div className="rounded-lg border border-card-border bg-background p-4">
            <h2 className="text-base font-bold">家族で分ける役割</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
              {memo.familyItems.map((item) => <li key={item}>・{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <KaigoToolCta
        toolSlug={TOOL_SLUG}
        title="申請前のメモをPDF・Excelで残す"
        description="このツールで確認した項目は、家族会議や地域包括支援センターへの相談前メモに転記できます。更新前の整理や記録用テンプレートもあわせて使えます。"
        links={[
          { label: "親のこと整理ナビで診断する", href: KAIGO_NAVI_URL, eventName: "kaigo_navi_click", position: "certification_tool", variant: "primary" },
          { label: "介護認定申請前テンプレートを見る", href: "https://kaigo-okane.booth.pm/items/8407555", eventName: "booth_click", position: "certification_prep" },
          { label: "介護はじめの全部まとめを見る", href: "https://kaigo-okane.booth.pm/items/8383441", eventName: "booth_click", position: "full_pack" },
        ]}
      />

      <ToolFAQSection
        toolName="介護認定申請メモメーカー"
        howTo={[
          "親の生活で気になっていることを選びます",
          "一人暮らし、受診予定、家族共有の条件を選びます",
          "表示された相談前メモ、調査前メモ、家族の役割分担を控えます",
        ]}
        faqs={[
          { question: "介護認定の結果を有利にするツールですか？", answer: "いいえ。認定結果を保証したり、回答を誘導したりするものではありません。家族が日常の困りごとを整理し、相談時の伝え漏れを減らすためのツールです。" },
          { question: "個人情報を入力してもよいですか？", answer: "入力しないでください。このツールは個人名、住所、保険証番号、病名、薬名などを保存する用途ではありません。具体情報は手元の紙や専用テンプレートに管理してください。" },
          { question: "まだ申請するか迷っていても使えますか？", answer: "使えます。地域包括支援センターや自治体窓口へ相談する前に、家族が見ている困りごとを整理する用途に向いています。" },
          { question: "医療や介護制度の判断に使えますか？", answer: "使えません。医療判断や制度判断は、自治体、地域包括支援センター、医師、ケアマネジャーなどの担当窓口へ確認してください。" },
        ]}
      />

      <AffiliateSection slug={TOOL_SLUG} category="日常ツール" />
      <RelatedTools currentSlug={TOOL_SLUG} category="日常ツール" />
    </div>
  );
}
