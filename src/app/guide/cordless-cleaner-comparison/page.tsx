import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "コードレス掃除機おすすめ5選【2026年最新】徹底比較｜選び方も解説",
  description:
    "重い掃除機にうんざりな方へ。ダイソン・マキタ・シャーク・パナソニックなど人気5モデルの吸引力・バッテリー・重量を徹底比較し、生活スタイル別の最適解を解説します。",
  alternates: { canonical: `${siteConfig.url}/guide/cordless-cleaner-comparison` },
};

const faqItems = [
  {
    question: "コードレスとキャニスターどちらがいい？",
    answer:
      "短時間でサッと掃除する習慣ならコードレスが圧倒的に便利。広い家を一度に掃除するならキャニスターがパワー・連続稼働で有利です。最近はコードレスでもキャニスター並みの吸引力を持つモデルが増えています。",
  },
  {
    question: "ダイソンは本当に高性能？",
    answer:
      "吸引力・ゴミ可視化・付属ツールの豊富さで業界トップクラスです。一方で本体重量2kg前後とやや重め、価格も高め。軽さを最優先するならマキタやシャーク、コスパならアイリスオーヤマも候補です。",
  },
  {
    question: "マキタの掃除機はなぜ人気？",
    answer:
      "本体1.0〜1.5kgと圧倒的な軽量性、シンプル設計、業務用バッテリー流用可などで掃除が苦にならないと評判。吸引力は専用機種にやや劣るものの、毎日の手軽な掃除には最適です。",
  },
  {
    question: "ペットがいる家庭ではどれが向いていますか？",
    answer:
      "毛の絡みにくいモーターヘッドと高い吸引力を持つダイソン V12/V15、シャーク EVOPOWER、パナソニックのパワーコードレスがおすすめです。",
  },
];

const cleaners = [
  { name: "ダイソン V15 Detect", type: "ハイエンド", rate: "9万円台〜", points: ["業界最強クラスの吸引力", "レーザーで微細なゴミを可視化", "最大60分の連続稼働"], bestFor: "吸引力最優先・ペットがいる家庭。" },
  { name: "マキタ CL286FD", type: "業務用ベース", rate: "2万円台〜", points: ["本体1.5kgの軽量設計", "業務用18Vバッテリー流用可", "シンプルで壊れにくい"], bestFor: "毎日の手軽な掃除・コスパ重視。" },
  { name: "シャーク EVOPOWER SYSTEM", type: "2-in-1", rate: "5万円台〜", points: ["スティック・ハンディ2WAY", "毛が絡まないブラシロール", "替えバッテリーで長時間稼働"], bestFor: "ペットの毛・髪の毛が気になる家庭。" },
  { name: "パナソニック パワーコードレス", type: "国内ブランド", rate: "6万円台〜", points: ["軽量×強力吸引のバランス", "クルッとパワーノズルで隅まで届く", "国内サポートで安心"], bestFor: "国内メーカー安心派・幅広い世代。" },
  { name: "アイリスオーヤマ SCD-181P", type: "コスパ", rate: "1万円台〜", points: ["1万円台の高コスパ", "本体約1.4kgで軽量", "サイクロン式でゴミ捨て簡単"], bestFor: "予算を抑えたい・サブ機にも。" },
];

export default function CordlessCleanerComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "コードレス掃除機比較", url: `${siteConfig.url}/guide/cordless-cleaner-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>コードレス掃除機比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          コードレス掃除機おすすめ5選【2026年最新】徹底比較｜選び方も解説
        </h1>
        <p className="text-muted leading-relaxed">
          コードレス掃除機は「軽さ・吸引力・バッテリー・価格」のバランスで選ぶ家電です。本記事ではダイソン・マキタ・シャーク・パナソニック・アイリスオーヤマの主要5モデルを比較し、生活スタイル別の最適解を解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">吸引力最優先 → ダイソン V15 Detect</span></p>
          <p><span className="font-bold">軽量・毎日使い → マキタ CL286FD</span></p>
          <p><span className="font-bold">ペット家庭 → シャーク EVOPOWER</span></p>
          <p><span className="font-bold">コスパ → アイリスオーヤマ SCD-181P</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">コードレス掃除機選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          コードレス掃除機の選び方で見るべきポイントは「重量・吸引力・バッテリー稼働時間・ゴミ捨て方式」の4つです。軽さは毎日掃除を続けられるかどうかを大きく左右し、1.5kg前後が女性や高齢者にも扱いやすいラインです。吸引力は数値だけでなくモーターヘッド性能や床面検知などの工夫も重要で、ダイソンはレーザーや圧力センサーで微細なゴミも逃しません。
        </p>
        <p className="text-muted leading-relaxed">
          バッテリーは20〜60分が一般的。広い家ならスペアバッテリー対応モデルが便利です。ゴミ捨て方式はサイクロン式（手入れ簡単）と紙パック式（衛生的）から選択。ペットや小さな子供がいる家庭はフィルター性能とゴミ容量も要チェックです。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめコードレス掃除機5モデルの詳細</h2>
        <div className="space-y-6">
          {cleaners.map((b, idx) => (
            <div key={b.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{b.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{b.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">参考価格：{b.rate}</p>
              <ul className="space-y-1 mb-4">
                {b.points.map((pt) => (
                  <li key={pt} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{pt}</li>
                ))}
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{b.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted mt-3">※ 価格は2026年4月時点の参考値です。最新価格は各メーカー・販売店でご確認ください。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">よくある質問（FAQ）</h2>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.question} className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold text-sm mb-2">Q. {item.question}</h3>
              <p className="text-sm text-muted leading-relaxed">A. {item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">まとめ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <p className="text-muted leading-relaxed">
            コードレス掃除機は「軽さ×吸引力×コスパ」で決まります。妥協なしのハイエンドはダイソン、毎日使う軽さ重視ならマキタ、ペット家庭はシャーク、コスパ重視はアイリスオーヤマが鉄板です。掃除が苦にならない1台を選べば、住環境の質が大きく変わります。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">家計管理に役立つツール</h2>
        <ComparisonTableCTA
          services={[
            { name: "弥生シリーズ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "家計・経費管理の定番", price: "年額制", badge: "定番" },
            { name: "freee会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "クラウド会計の代表格", price: "月額制" },
            { name: "マネーフォワード クラウド会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "金融機関連携で自動仕訳", price: "月額制" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/air-purifier-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">空気清浄機比較</span>
            <p className="text-xs text-muted mt-1">ハウスダスト対策とセットで</p>
          </Link>
          <Link href="/guide/electric-company-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">電力会社比較</span>
            <p className="text-xs text-muted mt-1">家電の電気代見直し</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
