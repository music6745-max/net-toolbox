"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { KaigoToolCta } from "@/components/KaigoToolCta";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";
import { ToolJsonLd } from "@/components/ToolJsonLd";

const TOOL_SLUG = "kaigo-distance-care-family-meeting-agenda";
const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=distance_care_family_meeting_agenda";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/long-distance-care-family-meeting-agenda?utm_source=net-toolbox&utm_medium=referral&utm_campaign=distance_care_family_meeting_agenda";

type AgendaRow = {
  title: string;
  owner: string;
  minutes: number;
  goal: string;
};

export default function KaigoDistanceCareFamilyMeetingAgendaPage() {
  const [familyCount, setFamilyCount] = useState(3);
  const [meetingMinutes, setMeetingMinutes] = useState(45);
  const [nearFamilyExists, setNearFamilyExists] = useState(true);
  const [remoteFamilyCanRecord, setRemoteFamilyCanRecord] = useState(true);
  const [moneyTopic, setMoneyTopic] = useState(true);
  const [hospitalTopic, setHospitalTopic] = useState(true);
  const [facilityTopic, setFacilityTopic] = useState(false);
  const [emergencyTopic, setEmergencyTopic] = useState(true);
  const [nextMeeting, setNextMeeting] = useState("2週間後");

  const result = useMemo(() => {
    const rows: AgendaRow[] = [
      {
        title: "親の現在状況",
        owner: "最近連絡した家族",
        minutes: 8,
        goal: "体調、通院、服薬、買い物、支払いで困っていることを事実だけ共有する",
      },
      {
        title: "連絡体制",
        owner: "主連絡係",
        minutes: 7,
        goal: "親への連絡頻度、返事がない時の順番、家族間の共有方法を決める",
      },
    ];

    if (hospitalTopic) {
      rows.push({
        title: "病院・ケアマネ連携",
        owner: "連絡窓口の担当",
        minutes: 7,
        goal: "病院、ケアマネ、地域包括支援センターへ聞くことをリスト化する",
      });
    }
    if (moneyTopic) {
      rows.push({
        title: "費用と立替記録",
        owner: remoteFamilyCanRecord ? "遠方家族の記録担当" : "支払った家族",
        minutes: 8,
        goal: "交通費、立替、領収書、親本人の支払い範囲を分けて残す",
      });
    }
    if (facilityTopic) {
      rows.push({
        title: "施設・住まいの検討",
        owner: "情報収集担当",
        minutes: 7,
        goal: "候補施設、費用、見学予定、本人の希望を次回までに確認する",
      });
    }
    if (emergencyTopic) {
      rows.push({
        title: "緊急時対応",
        owner: nearFamilyExists ? "近くの家族または協力者" : "家族全員で仮決め",
        minutes: 7,
        goal: "連絡不能時、急な受診、鍵、保険証、お薬手帳の確認順を決める",
      });
    }

    rows.push({
      title: "次回までの宿題",
      owner: "会議メモ担当",
      minutes: 5,
      goal: `未決事項、確認する窓口、次回共有日（${nextMeeting}）を残す`,
    });

    const totalMinutes = rows.reduce((sum, row) => sum + row.minutes, 0);
    const adjustedRows =
      totalMinutes > meetingMinutes
        ? rows.map((row) => ({ ...row, minutes: Math.max(4, Math.round((row.minutes / totalMinutes) * meetingMinutes)) }))
        : rows;

    const roles = [
      {
        role: "会議メモ",
        owner: remoteFamilyCanRecord ? "遠方家族" : "主連絡係",
        note: "決まったこと、未決事項、次回確認を同じ形式で残す",
      },
      {
        role: "親への定期連絡",
        owner: `家族${Math.max(1, familyCount)}人で曜日分担`,
        note: "体調、服薬、困りごと、支払いで詰まっていないか確認する",
      },
      {
        role: "現地対応",
        owner: nearFamilyExists ? "近くの家族または協力者" : "訪問できる家族を都度確認",
        note: "通院付き添い、役所、急な訪問を一人に固定しすぎない",
      },
      {
        role: "費用記録",
        owner: moneyTopic ? "記録担当" : "必要時に追加",
        note: "交通費、立替、親本人の支払い、領収書を分ける",
      },
    ];

    const memoText = [
      "遠距離介護 家族会議アジェンダ",
      `参加家族: ${Math.max(1, familyCount)}人`,
      `会議時間: ${Math.max(15, meetingMinutes)}分`,
      `次回共有: ${nextMeeting}`,
      "",
      "議題",
      ...adjustedRows.map((row, index) => `${index + 1}. ${row.title}（${row.minutes}分 / 担当: ${row.owner}）\n   目的: ${row.goal}`),
      "",
      "役割案",
      ...roles.map((role) => `- ${role.role}: ${role.owner}（${role.note}）`),
      "",
      "会議後に残すこと",
      "- 決まったこと、まだ決めないこと、次回までに確認すること",
      "- 親本人へ誰が何を確認するか",
      "- 病院、ケアマネ、施設、地域包括支援センターへ聞くこと",
      "- 立替費用、交通費、領収書、親本人の支払い範囲",
    ].join("\n");

    return { memoText, roles, rows: adjustedRows };
  }, [emergencyTopic, facilityTopic, familyCount, hospitalTopic, meetingMinutes, moneyTopic, nearFamilyExists, nextMeeting, remoteFamilyCanRecord]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <ToolJsonLd slug={TOOL_SLUG} />
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-primary">ツール</Link>
        <span className="mx-2">/</span>
        <span>遠距離介護 家族会議アジェンダメーカー</span>
      </nav>

      <header className="mb-6">
        <p className="text-xs font-bold text-primary">遠距離介護と家族共有</p>
        <h1 className="mt-2 text-2xl font-bold sm:text-3xl">遠距離介護 家族会議アジェンダメーカー</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          親の状況、連絡体制、現地対応、費用記録、緊急時対応を議題に分け、家族会議で使うアジェンダと役割案を作ります。
          個人情報は保存せず、ブラウザ上で共有メモだけを生成します。
        </p>
      </header>

      <section className="rounded-xl border border-card-border bg-card-bg p-5 sm:p-6">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1 block text-sm font-medium">参加する家族人数</span>
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={familyCount}
                  onChange={(e) => setFamilyCount(Math.max(1, Number(e.target.value)))}
                  className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium">会議時間</span>
                <input
                  type="number"
                  min={15}
                  max={120}
                  step={5}
                  value={meetingMinutes}
                  onChange={(e) => setMeetingMinutes(Math.max(15, Number(e.target.value)))}
                  className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-1 block text-sm font-medium">次回共有の目安</span>
              <input
                value={nextMeeting}
                onChange={(e) => setNextMeeting(e.target.value)}
                className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
              />
            </label>

            <div className="rounded-lg bg-background p-4">
              <p className="text-sm font-bold">会議で扱うテーマ</p>
              <label className="mt-3 flex items-center gap-2 text-sm">
                <input type="checkbox" checked={hospitalTopic} onChange={(e) => setHospitalTopic(e.target.checked)} />
                病院・ケアマネ連携を話す
              </label>
              <label className="mt-2 flex items-center gap-2 text-sm">
                <input type="checkbox" checked={moneyTopic} onChange={(e) => setMoneyTopic(e.target.checked)} />
                費用・立替・交通費を話す
              </label>
              <label className="mt-2 flex items-center gap-2 text-sm">
                <input type="checkbox" checked={facilityTopic} onChange={(e) => setFacilityTopic(e.target.checked)} />
                施設・住まいの検討を話す
              </label>
              <label className="mt-2 flex items-center gap-2 text-sm">
                <input type="checkbox" checked={emergencyTopic} onChange={(e) => setEmergencyTopic(e.target.checked)} />
                緊急時対応を話す
              </label>
            </div>

            <div className="rounded-lg bg-background p-4">
              <p className="text-sm font-bold">分担の前提</p>
              <label className="mt-3 flex items-center gap-2 text-sm">
                <input type="checkbox" checked={nearFamilyExists} onChange={(e) => setNearFamilyExists(e.target.checked)} />
                近くに住む家族・協力者がいる
              </label>
              <label className="mt-2 flex items-center gap-2 text-sm">
                <input type="checkbox" checked={remoteFamilyCanRecord} onChange={(e) => setRemoteFamilyCanRecord(e.target.checked)} />
                遠方の家族が会議メモ・費用記録を担当できる
              </label>
            </div>
          </div>

          <div>
            <div className="overflow-x-auto rounded-lg border border-card-border">
              <table className="min-w-full text-sm">
                <thead className="bg-background">
                  <tr>
                    <th className="px-4 py-3 text-left">議題</th>
                    <th className="px-4 py-3 text-left">担当案</th>
                    <th className="px-4 py-3 text-left">時間</th>
                  </tr>
                </thead>
                <tbody>
                  {result.rows.map((row) => (
                    <tr key={row.title} className="border-t border-card-border">
                      <td className="px-4 py-3">
                        <div className="font-bold">{row.title}</div>
                        <div className="mt-1 text-xs leading-relaxed text-muted">{row.goal}</div>
                      </td>
                      <td className="px-4 py-3 font-bold text-primary">{row.owner}</td>
                      <td className="px-4 py-3">{row.minutes}分</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 rounded-lg border border-card-border bg-background p-4">
              <h2 className="text-base font-bold">役割案</h2>
              <ul className="mt-3 space-y-3 text-sm leading-relaxed text-muted">
                {result.roles.map((role) => (
                  <li key={role.role}>
                    <span className="font-bold text-foreground">{role.role}</span>: {role.owner}
                    <span className="block text-xs">{role.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <label className="mt-6 block">
          <span className="mb-2 block text-sm font-bold">家族共有用メモ</span>
          <textarea
            readOnly
            value={result.memoText}
            rows={18}
            className="min-h-[360px] w-full rounded-lg border border-card-border bg-background px-4 py-3 text-sm leading-relaxed"
          />
        </label>
        <p className="mt-3 text-xs leading-relaxed text-muted">
          住所、病歴、口座情報、暗証番号、保険証番号などは入力しないでください。会議結果は家族内の整理用で、契約、税務、相続、医療判断は専門窓口へ確認してください。
        </p>
      </section>

      <KaigoToolCta
        toolSlug={TOOL_SLUG}
        title="家族会議の結果を介護連携シートへ残す"
        description="一度の話し合いで終わらせず、決定事項、未決事項、病院やケアマネへ聞くことを継続して残すと、遠距離介護の情報共有が崩れにくくなります。"
        links={[
          { label: "親のこと整理ナビで診断する", href: KAIGO_NAVI_URL, eventName: "kaigo_navi_click", position: "distance_family_meeting_tool", variant: "primary" },
          { label: "家族会議の記事を読む", href: GUIDE_URL, eventName: "guide_click", position: "distance_family_meeting_guide" },
          { label: "介護連携シート集を見る", href: "https://kaigo-okane.booth.pm/items/8382202", eventName: "booth_click", position: "coordination_sheet" },
          { label: "費用分担テンプレートを見る", href: "https://kaigo-okane.booth.pm/items/8340354", eventName: "booth_click", position: "cost_template" },
        ]}
      />

      <ToolFAQSection
        toolName="遠距離介護 家族会議アジェンダメーカー"
        howTo={[
          "参加人数、会議時間、次回共有の目安を入力します",
          "病院連携、費用、施設、緊急時対応など会議で扱うテーマを選びます",
          "生成された議題、担当案、家族共有用メモを会議のたたき台にします",
        ]}
        faqs={[
          {
            question: "初回の家族会議で全部決める必要がありますか？",
            answer: "ありません。初回は親の状況、連絡体制、現地対応、費用記録、未決事項を分けるだけでも十分です。決まらないことは次回までの確認事項にします。",
          },
          {
            question: "遠方の家族ができる役割は何ですか？",
            answer: "会議メモ、費用記録、親への定期連絡、病院や施設に聞く質問の整理、書類の控え管理、次回議題の作成などは遠方でも担当できます。",
          },
          {
            question: "費用分担もこのツールで決められますか？",
            answer: "このツールは議題整理用です。具体的な金額は交通費や立替の記録を集め、本人の意思と家族内合意、必要に応じた専門窓口の確認を前提に話し合ってください。",
          },
          {
            question: "会議メモに個人情報を入れてよいですか？",
            answer: "入れないでください。住所、病歴、口座情報、暗証番号、保険証番号などは専用の安全な保管場所で管理し、このツールには議題と役割だけを入力してください。",
          },
        ]}
      />

      <AffiliateSection slug={TOOL_SLUG} category="日常ツール" />
      <RelatedTools currentSlug={TOOL_SLUG} category="日常ツール" />
    </div>
  );
}
