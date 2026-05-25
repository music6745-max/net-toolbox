"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { KaigoToolCta } from "@/components/KaigoToolCta";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";
import { ToolJsonLd } from "@/components/ToolJsonLd";

const TOOL_SLUG = "kaigo-distance-care-travel-memo";
const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=kaigo_distance_care_travel_memo";

function yen(value: number) {
  return `¥${Math.round(value).toLocaleString()}`;
}

export default function KaigoDistanceCareTravelMemoPage() {
  const [oneWayFare, setOneWayFare] = useState(18000);
  const [monthlyVisits, setMonthlyVisits] = useState(2);
  const [localMoveCost, setLocalMoveCost] = useState(3000);
  const [lodgingPerNight, setLodgingPerNight] = useState(8000);
  const [nightsPerVisit, setNightsPerVisit] = useState(1);
  const [otherCost, setOtherCost] = useState(2500);
  const [familyCount, setFamilyCount] = useState(3);
  const [shareByFamily, setShareByFamily] = useState(true);
  const [remoteKeepsRecords, setRemoteKeepsRecords] = useState(true);
  const [remoteCallsWeekly, setRemoteCallsWeekly] = useState(true);
  const [nearFamilyEmergency, setNearFamilyEmergency] = useState(true);

  const result = useMemo(() => {
    const perVisit =
      Math.max(0, oneWayFare) * 2 +
      Math.max(0, localMoveCost) +
      Math.max(0, lodgingPerNight) * Math.max(0, nightsPerVisit) +
      Math.max(0, otherCost);
    const monthlyTotal = perVisit * Math.max(0, monthlyVisits);
    const annualTotal = monthlyTotal * 12;
    const people = Math.max(1, familyCount);
    const perPerson = shareByFamily ? monthlyTotal / people : monthlyTotal;
    return { perVisit, monthlyTotal, annualTotal, perPerson };
  }, [familyCount, localMoveCost, lodgingPerNight, monthlyVisits, nightsPerVisit, oneWayFare, otherCost, shareByFamily]);

  const roleRows = useMemo(
    () => [
      {
        role: "現地訪問",
        owner: "訪問できる家族",
        note: "通院付き添い、施設見学、役所手続きなど目的を残す",
      },
      {
        role: "費用記録",
        owner: remoteKeepsRecords ? "遠方家族" : "訪問した家族",
        note: "交通費、宿泊費、領収書、精算状況を月1回まとめる",
      },
      {
        role: "親本人への定期連絡",
        owner: remoteCallsWeekly ? "遠方家族も曜日分担" : "主連絡係",
        note: "体調、困りごと、次の予定を短く確認する",
      },
      {
        role: "緊急時の現地対応",
        owner: nearFamilyEmergency ? "近くの家族または近隣協力者" : "都度相談",
        note: "鍵、病院、ケアマネ、施設への連絡先を共有する",
      },
    ],
    [nearFamilyEmergency, remoteCallsWeekly, remoteKeepsRecords],
  );

  const memoText = useMemo(() => {
    const shareLabel = shareByFamily
      ? `家族${Math.max(1, familyCount)}人で分担する場合、1人あたり月${yen(result.perPerson)}`
      : `訪問した人が負担する場合、月${yen(result.perPerson)}`;
    return [
      "遠距離介護 交通費メモ",
      `訪問1回あたり: ${yen(result.perVisit)}`,
      `月あたり: ${yen(result.monthlyTotal)} / 年額目安: ${yen(result.annualTotal)}`,
      `分担案: ${shareLabel}`,
      "役割案:",
      ...roleRows.map((row) => `- ${row.role}: ${row.owner}（${row.note}）`),
      "次回確認: 訪問目的、領収書、親本人の支払い範囲、家族で分担する範囲を確認する",
    ].join("\n");
  }, [familyCount, result.annualTotal, result.monthlyTotal, result.perPerson, result.perVisit, roleRows, shareByFamily]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <ToolJsonLd slug={TOOL_SLUG} />
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-primary">ツール</Link>
        <span className="mx-2">/</span>
        <span>遠距離介護交通費メモメーカー</span>
      </nav>

      <header className="mb-6">
        <p className="text-xs font-bold text-primary">遠距離介護と家族共有</p>
        <h1 className="mt-2 text-2xl font-bold sm:text-3xl">遠距離介護交通費メモメーカー</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          親の通院付き添い、施設見学、役所手続きで発生する交通費と宿泊費を月額で整理し、遠方でも担える役割分担メモを作ります。
        </p>
      </header>

      <section className="rounded-xl border border-card-border bg-card-bg p-5 sm:p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <label className="block">
            <span className="mb-1 block text-sm font-medium">片道交通費</span>
            <input
              type="number"
              min={0}
              step={1000}
              value={oneWayFare}
              onChange={(e) => setOneWayFare(Number(e.target.value))}
              className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium">月の訪問回数</span>
            <input
              type="number"
              min={0}
              max={30}
              value={monthlyVisits}
              onChange={(e) => setMonthlyVisits(Math.max(0, Number(e.target.value)))}
              className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium">現地移動・駐車場代/回</span>
            <input
              type="number"
              min={0}
              step={500}
              value={localMoveCost}
              onChange={(e) => setLocalMoveCost(Number(e.target.value))}
              className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium">宿泊費/泊</span>
            <input
              type="number"
              min={0}
              step={1000}
              value={lodgingPerNight}
              onChange={(e) => setLodgingPerNight(Number(e.target.value))}
              className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium">1回あたり宿泊数</span>
            <input
              type="number"
              min={0}
              max={14}
              value={nightsPerVisit}
              onChange={(e) => setNightsPerVisit(Math.max(0, Number(e.target.value)))}
              className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium">その他実費/回</span>
            <input
              type="number"
              min={0}
              step={500}
              value={otherCost}
              onChange={(e) => setOtherCost(Number(e.target.value))}
              className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium">分担する家族人数</span>
            <input
              type="number"
              min={1}
              max={8}
              value={familyCount}
              onChange={(e) => setFamilyCount(Math.max(1, Number(e.target.value)))}
              className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
            />
          </label>
          <div className="rounded-lg bg-background p-4">
            <p className="text-sm font-bold">分担メモの方針</p>
            <label className="mt-3 flex items-center gap-2 text-sm">
              <input type="checkbox" checked={shareByFamily} onChange={(e) => setShareByFamily(e.target.checked)} />
              交通費を家族で分担する案にする
            </label>
            <label className="mt-2 flex items-center gap-2 text-sm">
              <input type="checkbox" checked={remoteKeepsRecords} onChange={(e) => setRemoteKeepsRecords(e.target.checked)} />
              遠方家族が費用記録を担当する
            </label>
            <label className="mt-2 flex items-center gap-2 text-sm">
              <input type="checkbox" checked={remoteCallsWeekly} onChange={(e) => setRemoteCallsWeekly(e.target.checked)} />
              遠方家族も定期連絡を分担する
            </label>
            <label className="mt-2 flex items-center gap-2 text-sm">
              <input type="checkbox" checked={nearFamilyEmergency} onChange={(e) => setNearFamilyEmergency(e.target.checked)} />
              近くの家族・協力者を緊急連絡先にする
            </label>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-4">
          <div className="rounded-lg bg-background p-4 text-center">
            <div className="text-xs text-muted">訪問1回</div>
            <div className="mt-1 text-lg font-bold">{yen(result.perVisit)}</div>
          </div>
          <div className="rounded-lg bg-primary/10 p-4 text-center">
            <div className="text-xs text-muted">月あたり</div>
            <div className="mt-1 text-lg font-bold text-primary">{yen(result.monthlyTotal)}</div>
          </div>
          <div className="rounded-lg bg-background p-4 text-center">
            <div className="text-xs text-muted">年額目安</div>
            <div className="mt-1 text-lg font-bold">{yen(result.annualTotal)}</div>
          </div>
          <div className="rounded-lg bg-background p-4 text-center">
            <div className="text-xs text-muted">{shareByFamily ? "1人あたり/月" : "訪問者負担/月"}</div>
            <div className="mt-1 text-lg font-bold">{yen(result.perPerson)}</div>
          </div>
        </div>

        <div className="mt-6 overflow-x-auto rounded-lg border border-card-border">
          <table className="min-w-full text-sm">
            <thead className="bg-background">
              <tr>
                <th className="px-4 py-3 text-left">役割</th>
                <th className="px-4 py-3 text-left">担当案</th>
                <th className="px-4 py-3 text-left">メモ</th>
              </tr>
            </thead>
            <tbody>
              {roleRows.map((row) => (
                <tr key={row.role} className="border-t border-card-border">
                  <td className="px-4 py-3 font-bold">{row.role}</td>
                  <td className="px-4 py-3 font-bold text-primary">{row.owner}</td>
                  <td className="px-4 py-3 text-muted">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <label className="mt-6 block">
          <span className="mb-2 block text-sm font-bold">家族共有用メモ</span>
          <textarea
            readOnly
            value={memoText}
            rows={9}
            className="min-h-[180px] w-full rounded-lg border border-card-border bg-background px-4 py-3 text-sm leading-relaxed"
          />
        </label>
        <p className="mt-3 text-xs leading-relaxed text-muted">
          個人名、住所、病歴、口座情報は入力しないでください。分担案は家族内の話し合い用で、税務・相続・契約の判断は専門窓口に確認してください。
        </p>
      </section>

      <KaigoToolCta
        toolSlug={TOOL_SLUG}
        title="交通費メモを介護整理の導線につなげる"
        description="遠距離介護では、移動費だけでなく連絡係、費用記録、緊急時対応も一緒に整理すると家族共有が進めやすくなります。"
        links={[
          { label: "親のこと整理ナビで診断する", href: KAIGO_NAVI_URL, eventName: "kaigo_navi_click", position: "distance_travel_tool", variant: "primary" },
          { label: "介護連携シート集を見る", href: "https://kaigo-okane.booth.pm/items/8382202", eventName: "booth_click", position: "coordination_sheet" },
          { label: "費用分担テンプレートを見る", href: "https://kaigo-okane.booth.pm/items/8340354", eventName: "booth_click", position: "cost_template" },
        ]}
      />

      <ToolFAQSection
        toolName="遠距離介護交通費メモメーカー"
        howTo={[
          "片道交通費、月の訪問回数、現地移動費、宿泊費を入力する",
          "交通費を家族で分担するか、訪問者負担にするかを仮置きする",
          "遠方でも担える役割を選び、共有用メモを家族会議のたたき台にする",
        ]}
        faqs={[
          {
            question: "交通費を親本人のお金から払う前提で使えますか？",
            answer:
              "このツールでは金額の見える化だけを行います。親本人のお金から払うか、家族で分担するか、各自負担にするかは、本人の意思、家族内の合意、必要に応じた専門窓口への確認を前提にしてください。",
          },
          {
            question: "遠方の家族ができる役割はありますか？",
            answer:
              "費用記録、電話連絡、病院や施設に聞く質問の整理、家族会議メモ、次回確認リスト作成などは遠方でも担当できます。",
          },
          {
            question: "領収書がない交通費も記録すべきですか？",
            answer:
              "記録しておくと家族内で説明しやすくなります。領収書や明細があるもの、ないものを分けて残すと、後から確認しやすくなります。",
          },
          {
            question: "この結果を精算ルールとして使えますか？",
            answer:
              "あくまで話し合い用の概算です。実際の精算ルールは家族内で合意し、税務、相続、契約に関わる場合は専門家や公的窓口に確認してください。",
          },
        ]}
      />

      <AffiliateSection slug={TOOL_SLUG} category="日常ツール" />
      <RelatedTools currentSlug={TOOL_SLUG} category="日常ツール" />
    </div>
  );
}
