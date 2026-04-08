import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】低金利カードローン比較おすすめ5選｜銀行系・消費者金融を解説",
  description:
    "銀行系カードローンと消費者金融の金利・限度額・審査スピードを徹底比較。総返済額を最小化する低金利カードローンの選び方と注意点を解説します。",
  alternates: { canonical: `${siteConfig.url}/guide/card-loan-low-rate` },
};

const faqItems = [
  {
    question: "銀行系カードローンと消費者金融の違いは？",
    answer:
      "銀行系は金利1.5%〜14.6%と低めですが審査が厳しめで時間もかかります。消費者金融は金利3〜18%と高いものの最短即日融資が可能。借入目的と急ぎ度で使い分けます。",
  },
  {
    question: "総量規制とは？",
    answer:
      "貸金業法により、消費者金融からの借入は年収の3分の1までに制限されています。銀行系カードローンは総量規制の対象外ですが、自主規制で同様の運用がされています。",
  },
  {
    question: "無利息期間付きカードローンのメリットは？",
    answer:
      "プロミス・アコム・アイフルなど大手消費者金融では初回利用30日間無利息サービスがあり、短期間で完済できる人なら銀行系より総支払額を抑えられます。",
  },
  {
    question: "おまとめローンとカードローンの違いは？",
    answer:
      "おまとめローンは複数の借入を1本化する専用商品で、金利が低めに設定されています。カードローンは追加借入が可能な反面、おまとめ用途では金利が高くなりがちです。",
  },
];

const loans = [
  { name: "三菱UFJ銀行 バンクイック", type: "メガバンク系", rate: "年1.8%〜14.6%", points: ["メガバンクの安心感", "コンビニATM手数料無料", "Web完結申込対応"], bestFor: "金利を抑えたい・銀行系を希望する人。" },
  { name: "三井住友銀行カードローン", type: "メガバンク系", rate: "年1.5%〜14.5%", points: ["最大800万円までの融資", "SMBCダイレクトで管理", "繰上返済手数料無料"], bestFor: "高額借入を低金利で利用したい人。" },
  { name: "プロミス", type: "消費者金融", rate: "年4.5%〜17.8%", points: ["最短20分審査・即日融資", "初回30日間無利息", "Web完結で郵送物なし"], bestFor: "急ぎで借りたい・短期間で完済する人。" },
  { name: "アコム", type: "消費者金融", rate: "年3.0%〜18.0%", points: ["はじめての方30日間金利0円", "全国の店頭・ATMから利用可", "アプリで完結"], bestFor: "初心者・はじめてのキャッシング。" },
  { name: "auじぶん銀行 カードローン", type: "ネット銀行系", rate: "年1.48%〜17.5%", points: ["au IDで金利優遇", "Web完結・スピード審査", "返済シミュレーター充実"], bestFor: "auユーザー・ネットで完結させたい人。" },
];

export default function CardLoanLowRatePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "低金利カードローン", url: `${siteConfig.url}/guide/card-loan-low-rate` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】低金利カードローン比較おすすめ5選｜銀行系・消費者金融を解説" description="銀行系カードローンと消費者金融の金利・限度額・審査スピードを徹底比較。総返済額を最小化する低金利カードローンの選び方と注意点を解説します。" url={`${siteConfig.url}/guide/card-loan-low-rate`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>低金利カードローン</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】低金利カードローン比較おすすめ5選｜銀行系・消費者金融を解説
        </h1>
        <p className="text-muted leading-relaxed">
          急な出費に対応できるカードローンですが、金利は商品ごとに大きく異なります。100万円を1年で返済する場合、金利15%と1.8%では総利息差が約8万円。本記事では銀行系・消費者金融を含む主要5商品を徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">用途別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">最低金利重視 → 三井住友銀行カードローン</span></p>
          <p><span className="font-bold">即日融資 → プロミス</span></p>
          <p><span className="font-bold">初めての借入 → アコム（30日無利息）</span></p>
          <p><span className="font-bold">ネット完結 → auじぶん銀行</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">カードローン選びのポイント</h2>
        <p className="text-muted leading-relaxed mb-4">
          カードローンは「金利・審査スピード・限度額・無利息サービス」の4軸で比較します。一般に銀行系は金利1.5〜14.6%と低めで、消費者金融は3〜18%。一方審査スピードは消費者金融が圧倒的に早く、即日融資が必要な急ぎの場合は銀行系では間に合いません。また初回30日間無利息サービスを提供する消費者金融は、短期間で完済する自信がある人にとって実質的に銀行系より低コストになります。借入目的(医療費・教育費・生活費など)とスピード要件・返済期間から最適な商品を選びましょう。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめカードローン5社の詳細</h2>
        <div className="space-y-6">
          {loans.map((b, idx) => (
            <div key={b.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{b.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{b.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">参考金利：{b.rate}</p>
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
        <p className="text-xs text-muted mt-3">※ 金利は2026年4月時点の参考値です。最新条件は各金融機関の公式サイトでご確認ください。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">借りすぎを防ぐ5つのルール</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-3 text-sm text-muted">
          <p><span className="font-bold text-foreground">1. 借入は年収の10%以内に：</span>総量規制の3分の1は限度であり目安ではありません。</p>
          <p><span className="font-bold text-foreground">2. 返済計画を必ず書面化：</span>毎月の返済額・完済予定月を明確化。</p>
          <p><span className="font-bold text-foreground">3. ボーナス時の繰上返済：</span>利息圧縮効果が最大。</p>
          <p><span className="font-bold text-foreground">4. リボ払いとの併用は避ける：</span>金利水準が二重で発生。</p>
          <p><span className="font-bold text-foreground">5. 借入目的を明確化：</span>生活費の補填には絶対に使わない。</p>
        </div>
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
            カードローンは便利な反面、金利の差で総支払額が大きく変わります。長期返済になるなら銀行系の低金利、短期で確実に返せるなら無利息サービス付きの消費者金融が有利です。借入後は家計簿アプリで残高と返済を可視化し、計画的に完済を目指しましょう。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">家計管理に役立つツール</h2>
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
          <Link href="/guide/cashing-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">キャッシング比較</span>
            <p className="text-xs text-muted mt-1">急ぎの借入</p>
          </Link>
          <Link href="/guide/debt-consolidation-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">おまとめローン比較</span>
            <p className="text-xs text-muted mt-1">借入を一本化</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
