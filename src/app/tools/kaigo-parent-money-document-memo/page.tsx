"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { KaigoToolCta } from "@/components/KaigoToolCta";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";
import { ToolJsonLd } from "@/components/ToolJsonLd";

const TOOL_SLUG = "kaigo-parent-money-document-memo";
const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=kaigo_parent_money_document_memo";

const purposeLabels: Record<string, string> = {
  hospital: "急な入院に備える",
  careStart: "介護が始まる前に整理する",
  facility: "施設検討前に支払いを確認する",
  siblings: "きょうだいで共有する",
};

const talkModeLabels: Record<string, string> = {
  easy: "本人と落ち着いて話せる",
  careful: "お金の話を嫌がりやすい",
  urgent: "近いうちに入院・手続きがある",
};

type CheckGroup = {
  title: string;
  items: string[];
};

const baseGroups: CheckGroup[] = [
  {
    title: "最初に聞くこと",
    items: [
      "健康保険証、介護保険証、お薬手帳、診察券の保管場所",
      "緊急時に最初に連絡してよい家族、親族、近所の人",
      "かかりつけ医、薬局、保険会社、金融機関の問い合わせ先",
    ],
  },
  {
    title: "聞かない・集めないこと",
    items: [
      "暗証番号、ネットバンキングのパスワード、カードのセキュリティコード",
      "本人が話したくない資産額の詳細",
      "家族内で共有する必要がない個別の取引内容",
    ],
  },
];

export default function KaigoParentMoneyDocumentMemoPage() {
  const [purpose, setPurpose] = useState("careStart");
  const [talkMode, setTalkMode] = useState("careful");
  const [bankbook, setBankbook] = useState(true);
  const [insurance, setInsurance] = useState(true);
  const [pension, setPension] = useState(true);
  const [regularPayments, setRegularPayments] = useState(true);
  const [cards, setCards] = useState(false);
  const [siblingsShare, setSiblingsShare] = useState(true);

  const talkScript = useMemo(() => {
    if (talkMode === "urgent") {
      return "入院や手続きで急に必要になるかもしれないから、金額ではなく書類の場所と問い合わせ先だけ一緒に確認したい。";
    }
    if (talkMode === "easy") {
      return "今すぐ使うわけではないけれど、家族が困らないように、保険や支払いの書類がどこにあるかだけメモしておきたい。";
    }
    return "管理したいわけではなく、もしもの時に保険証や支払い先が分からないと困るから、場所だけ教えてほしい。金額や暗証番号は聞かない。";
  }, [talkMode]);

  const selectedGroups = useMemo(() => {
    const groups: CheckGroup[] = [...baseGroups];
    if (bankbook) {
      groups.push({
        title: "通帳・銀行",
        items: [
          "主に使っている銀行名、支店名、通帳の保管場所",
          "年金や公共料金の引き落としに使っている口座の有無",
          "金融機関へ相談する必要が出た時の問い合わせ先",
        ],
      });
    }
    if (insurance) {
      groups.push({
        title: "保険証券",
        items: [
          "医療保険、生命保険、火災保険、自動車保険の証券の保管場所",
          "保険会社名、担当者、問い合わせ先",
          "入院や手術時に請求が必要になりそうな保険の有無",
        ],
      });
    }
    if (pension) {
      groups.push({
        title: "年金・通知書",
        items: [
          "年金通知書、年金手帳、基礎年金番号が分かる書類の保管場所",
          "年金の受取口座がどの銀行か",
          "年金事務所や自治体へ相談する時に必要な書類",
        ],
      });
    }
    if (regularPayments) {
      groups.push({
        title: "毎月の支払い",
        items: [
          "家賃、管理費、電気、ガス、水道、電話、携帯の支払い方法",
          "引き落とし、振込、払込票、クレジットカード払いの区分",
          "支払いが止まると生活に影響するもの",
        ],
      });
    }
    if (cards) {
      groups.push({
        title: "カード・契約",
        items: [
          "クレジットカード、銀行カード、電子マネーの保管場所",
          "年会費やサブスクなど、定期的に引き落とされる契約",
          "解約や停止が必要になった時の問い合わせ先",
        ],
      });
    }
    if (siblingsShare) {
      groups.push({
        title: "家族共有",
        items: [
          "確認した日、確認した人、本人が共有してよいと言った範囲",
          "きょうだいに共有する項目と共有しない項目",
          "次回確認すること、専門窓口へ相談すること",
        ],
      });
    }
    return groups;
  }, [bankbook, cards, insurance, pension, regularPayments, siblingsShare]);

  const memoText = useMemo(
    () =>
      [
        "親の通帳・保険・支払い確認メモ",
        `目的: ${purposeLabels[purpose]}`,
        `話し方: ${talkModeLabels[talkMode]}`,
        `最初の一言: ${talkScript}`,
        "",
        ...selectedGroups.flatMap((group) => [
          `【${group.title}】`,
          ...group.items.map((item) => `- ${item}`),
          "",
        ]),
        "注意: 暗証番号、パスワード、カード番号などはこのメモに入れない。代理手続きが必要な場合は金融機関や専門窓口に確認する。",
      ].join("\n"),
    [purpose, selectedGroups, talkMode, talkScript],
  );

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <ToolJsonLd slug={TOOL_SLUG} />
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-primary">ツール</Link>
        <span className="mx-2">/</span>
        <span>親の通帳・保険・支払い確認メモメーカー</span>
      </nav>

      <header className="mb-6">
        <p className="text-xs font-bold text-primary">親のお金と書類の聞き方整理</p>
        <h1 className="mt-2 text-2xl font-bold sm:text-3xl">親の通帳・保険・支払い確認メモメーカー</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          親に通帳、保険証券、年金、公共料金のことを聞く前に、聞き方、確認範囲、家族共有メモを整理します。個人情報は保存しません。
        </p>
      </header>

      <section className="rounded-xl border border-card-border bg-card-bg p-5 sm:p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <label className="block">
            <span className="mb-1 block text-sm font-medium">確認する目的</span>
            <select
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
            >
              <option value="hospital">急な入院に備える</option>
              <option value="careStart">介護が始まる前に整理する</option>
              <option value="facility">施設検討前に支払いを確認する</option>
              <option value="siblings">きょうだいで共有する</option>
            </select>
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium">親との話しやすさ</span>
            <select
              value={talkMode}
              onChange={(e) => setTalkMode(e.target.value)}
              className="w-full rounded-lg border border-card-border px-4 py-3 text-sm"
            >
              <option value="careful">お金の話を嫌がりやすい</option>
              <option value="easy">本人と落ち着いて話せる</option>
              <option value="urgent">近いうちに入院・手続きがある</option>
            </select>
          </label>
        </div>

        <div className="mt-5 rounded-lg bg-background p-4">
          <p className="text-sm font-bold">確認したい範囲</p>
          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={bankbook} onChange={(e) => setBankbook(e.target.checked)} />
              通帳・銀行口座
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={insurance} onChange={(e) => setInsurance(e.target.checked)} />
              保険証券
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={pension} onChange={(e) => setPension(e.target.checked)} />
              年金・通知書
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={regularPayments}
                onChange={(e) => setRegularPayments(e.target.checked)}
              />
              公共料金・毎月の支払い
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={cards} onChange={(e) => setCards(e.target.checked)} />
              カード・サブスク
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={siblingsShare} onChange={(e) => setSiblingsShare(e.target.checked)} />
              きょうだい共有
            </label>
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
          <h2 className="text-base font-bold">最初の一言</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">{talkScript}</p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {selectedGroups.map((group) => (
            <article key={group.title} className="rounded-lg border border-card-border bg-background p-4">
              <h2 className="text-base font-bold">{group.title}</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <label className="mt-6 block">
          <span className="mb-2 block text-sm font-bold">家族共有用メモ</span>
          <textarea
            readOnly
            value={memoText}
            rows={13}
            className="min-h-[260px] w-full rounded-lg border border-card-border bg-background px-4 py-3 text-sm leading-relaxed"
          />
        </label>
        <p className="mt-3 text-xs leading-relaxed text-muted">
          このツールはブラウザ内で確認項目を整理するだけです。暗証番号、パスワード、カード番号、口座番号などの機密情報は入力しないでください。
        </p>
      </section>

      <KaigoToolCta
        toolSlug={TOOL_SLUG}
        title="確認した内容を初期整理テンプレートへつなげる"
        description="書類の場所、問い合わせ先、支払い方法を確認できたら、家族で見返せる形にまとめておくと入院や介護開始時に慌てにくくなります。"
        links={[
          { label: "親のこと整理ナビで診断する", href: KAIGO_NAVI_URL, eventName: "kaigo_navi_click", position: "parent_money_document_tool", variant: "primary" },
          { label: "初期整理テンプレートを見る", href: "https://kaigo-okane.booth.pm/items/8340072", eventName: "booth_click", position: "initial_template" },
          { label: "はじめの3点セットを見る", href: "https://kaigo-okane.booth.pm/items/8340473", eventName: "booth_click", position: "starter_set" },
        ]}
      />

      <ToolFAQSection
        toolName="親の通帳・保険・支払い確認メモメーカー"
        howTo={[
          "確認する目的と親との話しやすさを選ぶ",
          "通帳、保険、年金、公共料金など確認したい範囲を選ぶ",
          "生成された聞き方と確認項目を、家族内の相談メモとして使う",
        ]}
        faqs={[
          {
            question: "このツールに親の口座番号を入力してよいですか？",
            answer:
              "入力しないでください。口座番号、暗証番号、パスワード、カード番号などの機密情報は扱わず、書類の種類や保管場所、問い合わせ先の確認項目だけを整理してください。",
          },
          {
            question: "親が通帳を見せてくれない場合はどうすればよいですか？",
            answer:
              "無理に見せてもらうのではなく、入院時や支払い確認で困らないように、保険証や問い合わせ先、保管場所だけ確認するところから始めます。",
          },
          {
            question: "家族が親のお金を管理するためのツールですか？",
            answer:
              "管理ツールではありません。本人の意思を前提に、緊急時の書類確認や相談前準備をするためのメモ作成ツールです。",
          },
          {
            question: "代理手続きや相続対策にも使えますか？",
            answer:
              "代理手続き、相続、贈与、税務判断には使えません。必要な場合は金融機関、自治体、専門家に確認してください。",
          },
        ]}
      />

      <AffiliateSection slug={TOOL_SLUG} category="日常ツール" />
      <RelatedTools currentSlug={TOOL_SLUG} category="日常ツール" />
    </div>
  );
}
