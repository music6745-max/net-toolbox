"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { KaigoToolCta } from "@/components/KaigoToolCta";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";
import { ToolJsonLd } from "@/components/ToolJsonLd";

const TOOL_SLUG = "kaigo-family-role-share";
const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=kaigo_family_role_share";

export default function KaigoFamilyRoleSharePage() {
  const [familyCount, setFamilyCount] = useState(3);
  const [mainNearby, setMainNearby] = useState(true);
  const [moneySeparate, setMoneySeparate] = useState(true);
  const [weeklyContact, setWeeklyContact] = useState(true);

  const roles = useMemo(() => {
    const people = Array.from({ length: Math.max(1, familyCount) }, (_, i) => `家族${String.fromCharCode(65 + i)}`);
    return [
      { role: "病院・ケアマネ連絡", owner: mainNearby ? people[0] : "当番制", note: "問い合わせ窓口を1つにまとめる" },
      { role: "費用記録・立替精算", owner: moneySeparate ? people[1] ?? people[0] : people[0], note: "月1回、領収書と立替額を確認する" },
      { role: "親本人への定期連絡", owner: weeklyContact ? "全員で曜日分担" : people[0], note: "体調、困りごと、予定を短く確認する" },
      { role: "実家・書類整理", owner: people[2] ?? people[0], note: "保険、年金、公共料金、鍵の所在を整理する" },
      { role: "未決事項の管理", owner: people[0], note: "次に誰が何を確認するかを残す" },
    ];
  }, [familyCount, mainNearby, moneySeparate, weeklyContact]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <ToolJsonLd slug={TOOL_SLUG} />
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-primary">ツール</Link>
        <span className="mx-2">/</span>
        <span>きょうだい役割分担メモ生成</span>
      </nav>

      <header className="mb-6">
        <p className="text-xs font-bold text-primary">家族共有と役割整理</p>
        <h1 className="mt-2 text-2xl font-bold sm:text-3xl">きょうだい役割分担メモ生成</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          介護対応、費用記録、定期連絡、実家整理の担当を仮置きし、家族で話し合うための役割分担メモを作ります。
        </p>
      </header>

      <section className="rounded-xl border border-card-border bg-card-bg p-5 sm:p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <label className="block">
            <span className="mb-1 block text-sm font-medium">話し合う家族人数</span>
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
            <p className="text-sm font-bold">分担方針</p>
            <label className="mt-3 flex items-center gap-2 text-sm">
              <input type="checkbox" checked={mainNearby} onChange={(e) => setMainNearby(e.target.checked)} />
              近くに住む人を主連絡係にする
            </label>
            <label className="mt-2 flex items-center gap-2 text-sm">
              <input type="checkbox" checked={moneySeparate} onChange={(e) => setMoneySeparate(e.target.checked)} />
              お金の記録係は主連絡係と分ける
            </label>
            <label className="mt-2 flex items-center gap-2 text-sm">
              <input type="checkbox" checked={weeklyContact} onChange={(e) => setWeeklyContact(e.target.checked)} />
              親本人への連絡を曜日分担にする
            </label>
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
              {roles.map((role) => (
                <tr key={role.role} className="border-t border-card-border">
                  <td className="px-4 py-3 font-bold">{role.role}</td>
                  <td className="px-4 py-3 text-primary font-bold">{role.owner}</td>
                  <td className="px-4 py-3 text-muted">{role.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 rounded-lg bg-primary/10 p-4 text-sm leading-relaxed">
          この分担は仮案です。現地対応の負担が大きい人は金銭負担を軽くするなど、作業負担と費用負担を分けて話し合うと揉めにくくなります。
        </p>
      </section>

      <KaigoToolCta
        toolSlug={TOOL_SLUG}
        title="決まった役割をテンプレートに残す"
        description="役割分担は一度決めても変わります。未決事項、次の確認日、費用精算とセットで記録しておくと、あとで見返しやすくなります。"
        links={[
          { label: "親のこと整理ナビで診断する", href: KAIGO_NAVI_URL, eventName: "kaigo_navi_click", position: "family_role_tool", variant: "primary" },
          { label: "介護連携シート集を見る", href: "https://kaigo-okane.booth.pm/items/8382202", eventName: "booth_click", position: "coordination_sheet" },
          { label: "費用分担テンプレートを見る", href: "https://kaigo-okane.booth.pm/items/8340354", eventName: "booth_click", position: "cost_template" },
        ]}
      />

      <ToolFAQSection
        toolName="きょうだい役割分担メモ"
        howTo={[
          "話し合う家族人数を入力する",
          "主連絡係、費用記録係、定期連絡の分担方針を選ぶ",
          "表示された役割案を家族会議のたたき台にする",
        ]}
        faqs={[
          { question: "担当者名を入力してよいですか？", answer: "このツールには個人名を入れず、家族A、家族Bのような仮名で整理してください。" },
          { question: "近くに住む人だけが担当すべきですか？", answer: "現地対応は近い人に偏りやすいですが、費用記録、電話連絡、書類整理などは遠方でも分担できます。" },
          { question: "費用負担も同じ割合にすべきですか？", answer: "必ずしも同じ割合である必要はありません。作業負担と金銭負担を分けて整理するのが現実的です。" },
          { question: "揉めている場合の解決策になりますか？", answer: "解決策ではなく、事実と未決事項を見える化する補助です。必要に応じて公的窓口や専門家に相談してください。" },
        ]}
      />

      <AffiliateSection slug={TOOL_SLUG} category="日常ツール" />
      <RelatedTools currentSlug={TOOL_SLUG} category="日常ツール" />
    </div>
  );
}
