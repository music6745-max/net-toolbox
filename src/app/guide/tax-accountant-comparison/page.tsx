import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】税理士マッチングサービス比較おすすめ5選｜料金・対応業種・選び方を徹底解説",
  description:
    "freee税理士検索・税理士ドットコム・ミツモア・弥生税理士紹介・税理士紹介エージェントを料金・対応業種・相談体制で徹底比較。法人・個人事業主・フリーランスに最適な税理士の選び方も解説。",
  alternates: { canonical: `${siteConfig.url}/guide/tax-accountant-comparison` },
};

const faqItems = [
  {
    question: "税理士マッチングサービスは無料で使えますか？",
    answer:
      "ほぼすべてのマッチングサービスは利用自体が無料です。相談や紹介、相性確認までは費用がかからず、契約した税理士への顧問料のみ発生します。複数社から提案を受けて比較検討できるため、個人で探すより圧倒的に効率的です。",
  },
  {
    question: "顧問税理士の相場はいくらですか？",
    answer:
      "個人事業主で月1〜3万円＋決算料10〜15万円、法人で月3〜5万円＋決算料15〜30万円が一般的な相場です。売上規模・訪問頻度・記帳代行の有無で変動します。マッチングサービス経由だと相場より2〜3割安く契約できるケースもあります。",
  },
  {
    question: "税理士との契約前に確認すべきことは？",
    answer:
      "対応業種の実績、クラウド会計ソフトの対応可否、相談頻度、決算料の別途請求、担当者の変更リスク、税務調査対応の範囲の6点は必ず確認しましょう。相性も重要なので、契約前の面談は複数の候補と行うべきです。",
  },
  {
    question: "税理士とクラウド会計ソフトはどちらが先ですか？",
    answer:
      "同時進行が理想です。クラウド会計（freee・マネーフォワード・弥生）を先に導入し、そのソフトに対応した税理士をマッチングサービスで探すと、記帳の二度手間や顧問料の上乗せを避けられます。",
  },
];

const services = [
  { name: "freee税理士検索", type: "クラウド会計連携", rate: "利用無料", points: ["freee認定アドバイザーが多数在籍", "クラウド会計前提で話が早い", "地域・業種で絞り込み可能"], bestFor: "freeeを導入中または導入予定の個人・法人。" },
  { name: "税理士ドットコム", type: "総合マッチング", rate: "利用無料", points: ["登録税理士6,800名以上で全国対応", "コーディネーターが要望をヒアリング", "顧問料の値下げ交渉もサポート"], bestFor: "複数の候補から比較したい中小企業・個人事業主。" },
  { name: "ミツモア", type: "見積比較型", rate: "利用無料", points: ["最大5社から見積り取得", "口コミ・評価が可視化されている", "チャットでやり取り完結"], bestFor: "料金重視で短時間で決めたい人。" },
  { name: "弥生税理士紹介", type: "会計ソフト連動", rate: "利用無料", points: ["弥生製品ユーザー向け専用紹介", "認定インストラクターが対応", "地域密着型の事務所が多い"], bestFor: "弥生会計・弥生の青色申告ユーザー。" },
  { name: "税理士紹介エージェント", type: "専任コンサル型", rate: "利用無料", points: ["専任コンサルタントが要件整理", "業種特化の税理士を紹介", "契約後のアフターフォロー充実"], bestFor: "医療・不動産・IT等の特殊業種。" },
];

export default function TaxAccountantComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "税理士マッチング比較", url: `${siteConfig.url}/guide/tax-accountant-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】税理士マッチングサービス比較おすすめ5選" description="freee税理士検索・税理士ドットコム・ミツモア・弥生税理士紹介・税理士紹介エージェントを料金・対応業種・相談体制で徹底比較。" url={`${siteConfig.url}/guide/tax-accountant-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>税理士マッチング比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】税理士マッチングサービス比較おすすめ5選｜料金・対応業種・選び方を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          税理士選びは事業の成長を大きく左右する重要な意思決定です。飛び込み営業で契約すると年60万円以上の顧問料を払い続けることも珍しくありません。2026年現在の主要5つのマッチングサービスを料金・対応業種・相談体制で徹底比較し、失敗しない選び方を解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">freeeユーザー → freee税理士検索</span></p>
          <p><span className="font-bold">候補数重視 → 税理士ドットコム</span></p>
          <p><span className="font-bold">見積比較型 → ミツモア</span></p>
          <p><span className="font-bold">弥生ユーザー → 弥生税理士紹介</span></p>
          <p><span className="font-bold">特殊業種 → 税理士紹介エージェント</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">税理士選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          税理士は「顧問料」「対応範囲」「相性」の3点で選びます。顧問料は個人事業主で月1〜3万円、法人で月3〜5万円が相場ですが、記帳代行・年末調整・税務調査立会いの有無で大きく変動します。また税理士によって得意業種やITリテラシーが異なるため、クラウド会計ソフト（freee・マネーフォワード・弥生）に対応できるかは必ず確認しましょう。マッチングサービスを活用すれば、無料で複数の税理士から提案を受けられ、相性の合う人を効率的に見つけられます。電子帳簿保存法・インボイス制度対応の経験も必須チェック項目です。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ税理士マッチングサービス5社の詳細</h2>
        <div className="space-y-6">
          {services.map((b, idx) => (
            <div key={b.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{b.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{b.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">料金：{b.rate}</p>
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
        <p className="text-xs text-muted mt-3">※ 情報は2026年4月時点のものです。最新の料金・対応業種は各サービスの公式サイトでご確認ください。</p>
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
            税理士マッチングサービスは完全無料で複数の候補から提案を受けられる、失敗しない税理士探しの王道です。まずはクラウド会計ソフトを導入し、そのソフトに対応した税理士をマッチングサービスで探すのが2026年のスタンダード。記帳の自動化と税務の専門性を両立することで、経理コストを大幅に圧縮できます。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">併せて導入したい会計ソフト</h2>
        <ComparisonTableCTA
          services={[
            {
              name: "弥生シリーズ",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU",
              highlight: "確定申告・経理の定番ソフト",
              price: "年額制",
              badge: "定番",
            },
            {
              name: "freee会計",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y",
              highlight: "クラウド会計の代表格",
              price: "月額制",
            },
            {
              name: "マネーフォワード クラウド会計",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6",
              highlight: "金融機関連携で自動仕訳",
              price: "月額制",
            },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/accounting-software-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">クラウド会計ソフト比較</span>
            <p className="text-xs text-muted mt-1">税理士と連携しやすいソフト選び</p>
          </Link>
          <Link href="/guide/tax-software-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">確定申告ソフト比較</span>
            <p className="text-xs text-muted mt-1">個人事業主の申告に</p>
          </Link>
          <Link href="/guide/business-loan-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">事業者向け融資比較</span>
            <p className="text-xs text-muted mt-1">資金調達の選択肢</p>
          </Link>
          <Link href="/guide/legal-consultation-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">弁護士相談オンライン比較</span>
            <p className="text-xs text-muted mt-1">法務の専門家相談</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
