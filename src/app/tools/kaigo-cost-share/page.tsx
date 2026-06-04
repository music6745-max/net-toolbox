"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";
import { ToolJsonLd } from "@/components/ToolJsonLd";
import { getKaigoKindleLink } from "@/components/KaigoToolCta";
import { trackEvent } from "@/lib/tracking";

const TOOL_SLUG = "kaigo-cost-share";
const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=kaigo_cost_share";
const BOOTH_COST_TEMPLATE_URL = "https://kaigo-okane.booth.pm/items/8340354";
const BOOTH_FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";
const KINDLE_LINK = getKaigoKindleLink(TOOL_SLUG);

function yen(value: number) {
  return `¥${Math.round(value).toLocaleString()}`;
}

function trackOutbound(eventName: string, position: string, href: string) {
  return () => {
    trackEvent(eventName, {
      page: TOOL_SLUG,
      position,
      url: href.slice(0, 200),
    });
  };
}

export default function KaigoCostSharePage() {
  const [monthlyCare, setMonthlyCare] = useState(65000);
  const [transport, setTransport] = useState(12000);
  const [medical, setMedical] = useState(8000);
  const [other, setOther] = useState(5000);
  const [parentPay, setParentPay] = useState(30000);
  const [siblings, setSiblings] = useState(2);
  const [mainCareRate, setMainCareRate] = useState(50);

  const result = useMemo(() => {
    const gross = Math.max(0, monthlyCare) + Math.max(0, transport) + Math.max(0, medical) + Math.max(0, other);
    const familyShare = Math.max(0, gross - Math.max(0, parentPay));
    const people = Math.max(1, siblings);
    const mainCareRatio = Math.min(100, Math.max(0, mainCareRate)) / 100;
    const mainCareAmount = familyShare * mainCareRatio;
    const remaining = Math.max(0, familyShare - mainCareAmount);
    const otherCount = Math.max(0, people - 1);
    const otherAmount = otherCount === 0 ? 0 : remaining / otherCount;
    return {
      gross,
      familyShare,
      mainCareAmount,
      otherAmount,
      annualFamilyShare: familyShare * 12,
    };
  }, [monthlyCare, transport, medical, other, parentPay, siblings, mainCareRate]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <ToolJsonLd slug={TOOL_SLUG} />

      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:text-primary">
          トップ
        </Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-primary">
          ツール
        </Link>
        <span className="mx-2">/</span>
        <span>介護費用分担シミュレーター</span>
      </nav>

      <header className="mb-6">
        <p className="text-xs font-bold text-primary">親の介護とお金の整理</p>
        <h1 className="mt-2 text-2xl font-bold sm:text-3xl">介護費用分担シミュレーター</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          毎月の介護サービス費、通院交通費、医療費、親本人の負担額を入力し、家族が分担する月額と年額の目安を計算します。
        </p>
      </header>

      <section className="rounded-xl border border-card-border bg-card-bg p-5 sm:p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <label className="block">
            <span className="mb-1 block text-sm font-medium">介護サービス費/月</span>
            <input
              type="number"
              min={0}
              step={1000}
              value={monthlyCare}
              onChange={(e) => setMonthlyCare(Number(e.target.value))}
              className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium">通院・面会交通費/月</span>
            <input
              type="number"
              min={0}
              step={1000}
              value={transport}
              onChange={(e) => setTransport(Number(e.target.value))}
              className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium">医療費・薬代/月</span>
            <input
              type="number"
              min={0}
              step={1000}
              value={medical}
              onChange={(e) => setMedical(Number(e.target.value))}
              className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium">その他の実費/月</span>
            <input
              type="number"
              min={0}
              step={1000}
              value={other}
              onChange={(e) => setOther(Number(e.target.value))}
              className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium">親本人の負担額/月</span>
            <input
              type="number"
              min={0}
              step={1000}
              value={parentPay}
              onChange={(e) => setParentPay(Number(e.target.value))}
              className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium">分担する家族人数</span>
            <input
              type="number"
              min={1}
              max={8}
              value={siblings}
              onChange={(e) => setSiblings(Math.max(1, Number(e.target.value)))}
              className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
            />
          </label>
        </div>

        <label className="mt-5 block">
          <span className="mb-2 block text-sm font-medium">主に介護対応する人の負担割合: {mainCareRate}%</span>
          <input
            type="range"
            min={0}
            max={100}
            step={5}
            value={mainCareRate}
            onChange={(e) => setMainCareRate(Number(e.target.value))}
            className="w-full"
          />
        </label>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-4">
          <div className="rounded-lg bg-background p-4 text-center">
            <div className="text-xs text-muted">月額総費用</div>
            <div className="mt-1 text-lg font-bold">{yen(result.gross)}</div>
          </div>
          <div className="rounded-lg bg-primary/10 p-4 text-center">
            <div className="text-xs text-muted">家族分担/月</div>
            <div className="mt-1 text-lg font-bold text-primary">{yen(result.familyShare)}</div>
          </div>
          <div className="rounded-lg bg-background p-4 text-center">
            <div className="text-xs text-muted">主担当の月額</div>
            <div className="mt-1 text-lg font-bold">{yen(result.mainCareAmount)}</div>
          </div>
          <div className="rounded-lg bg-background p-4 text-center">
            <div className="text-xs text-muted">他の家族/人</div>
            <div className="mt-1 text-lg font-bold">{yen(result.otherAmount)}</div>
          </div>
        </div>

        <div className="mt-4 rounded-lg border border-card-border bg-background p-4">
          <p className="text-sm leading-relaxed">
            家族全体で負担する目安は、月額 <strong>{yen(result.familyShare)}</strong>、年額{" "}
            <strong>{yen(result.annualFamilyShare)}</strong> です。実際の分担は、現地対応、通院付き添い、交通費、親本人の資産状況を分けて話し合ってください。
          </p>
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="text-lg font-bold">計算結果を記録して家族で共有する</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          このツールは概算用です。誰が何を立て替えたか、いつ精算するかまで残す場合は、専用テンプレートに転記して管理してください。
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={KAIGO_NAVI_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackOutbound("kaigo_navi_click", "tool_cta", KAIGO_NAVI_URL)}
            className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white hover:bg-primary-hover"
          >
            親のこと整理ナビで診断する
          </a>
          <a
            href={BOOTH_COST_TEMPLATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackOutbound("booth_click", "cost_template", BOOTH_COST_TEMPLATE_URL)}
            className="inline-flex items-center justify-center rounded-lg border border-card-border bg-card-bg px-4 py-3 text-sm font-bold hover:border-primary/40"
          >
            費用分担テンプレートを見る
          </a>
          <a
            href={BOOTH_FULL_PACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackOutbound("booth_click", "full_pack", BOOTH_FULL_PACK_URL)}
            className="inline-flex items-center justify-center rounded-lg border border-card-border bg-card-bg px-4 py-3 text-sm font-bold hover:border-primary/40"
          >
            総合パックを見る
          </a>
          <a
            href={KINDLE_LINK.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackOutbound(KINDLE_LINK.eventName, KINDLE_LINK.position, KINDLE_LINK.href)}
            className="inline-flex items-center justify-center rounded-lg border border-card-border bg-card-bg px-4 py-3 text-sm font-bold hover:border-primary/40"
          >
            {KINDLE_LINK.label}
          </a>
        </div>
      </section>

      <ToolFAQSection
        toolName="介護費用分担シミュレーター"
        howTo={[
          "毎月の介護サービス費、交通費、医療費、その他実費を入力する",
          "親本人が負担できる月額を入力する",
          "家族で分担する人数と主担当者の負担割合を決める",
          "月額と年額の目安を、家族会議や記録テンプレートに転記する",
        ]}
        faqs={[
          {
            question: "この計算結果だけで家族の負担額を決めてよいですか？",
            answer:
              "このツールは話し合いのための概算です。実際の負担は、現地対応の時間、交通費、親本人の資産状況、きょうだい間の合意を分けて確認してください。",
          },
          {
            question: "親本人の負担額には何を入れますか？",
            answer:
              "親の年金や預貯金から毎月支払う予定の金額を入れます。家族が一時的に立て替える場合は、別途立替記録として残すと精算しやすくなります。",
          },
          {
            question: "主に介護対応する人の負担割合はどう考えますか？",
            answer:
              "現地対応や通院付き添いが多い人は、金銭負担を軽くする考え方もあります。逆に金銭負担を多めにして、作業負担とのバランスを取る家庭もあります。",
          },
          {
            question: "税務や相続の判断にも使えますか？",
            answer:
              "税務、贈与、相続、扶養、契約の判断には使えません。資料整理の補助として使い、最終判断は税理士や公的窓口に確認してください。",
          },
        ]}
      />

      <AffiliateSection slug={TOOL_SLUG} category="日常ツール" />
      <RelatedTools currentSlug={TOOL_SLUG} category="日常ツール" />
    </div>
  );
}
