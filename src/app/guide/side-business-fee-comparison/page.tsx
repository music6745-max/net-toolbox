import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】副業向け確定申告サービス比較おすすめ5選｜料金・サポートを徹底解説",
  description:
    "副業の確定申告を自分で・依頼する場合のサービス料金を徹底比較。freee・弥生・マネーフォワードからオンライン税理士まで、副業サラリーマン向けの選び方を解説。",
  alternates: { canonical: `${siteConfig.url}/guide/side-business-fee-comparison` },
};

const faqItems = [
  {
    question: "副業の確定申告は必要ですか？",
    answer:
      "給与以外の所得が年20万円を超える会社員は確定申告が必須です。20万円以下でも住民税の申告は必要で、医療費控除・ふるさと納税の申告と合わせて処理するのが効率的です。",
  },
  {
    question: "自分でやるか税理士に頼むかの判断基準は？",
    answer:
      "副業所得が年50万円未満・取引数が月20件以下なら会計ソフトで自分で十分対応可能です。100万円を超える・複雑な取引がある・時間をかけたくない場合は税理士依頼が費用対効果良好です。",
  },
  {
    question: "青色申告と白色申告はどちらが得ですか？",
    answer:
      "事業所得として認められるなら青色申告55〜65万円控除が使えるため圧倒的に有利です。ただし会社員の副業は多くが雑所得扱いで白色申告になるため、事前に税理士相談がおすすめです。",
  },
  {
    question: "副業が会社にバレない方法は？",
    answer:
      "確定申告書の住民税徴収方法を「自分で納付（普通徴収）」にチェックすれば、副業分の住民税通知は自宅に届き、会社経由の特別徴収と分離できます。自治体によっては対応不可の場合もあるため要確認。",
  },
];

const tools = [
  {
    name: "freee会計（スタータープラン）",
    type: "クラウド会計",
    price: "年11,760円",
    points: [
      "質問に答えるだけで申告書完成",
      "e-Tax対応・スマホ完結",
      "銀行・クレカ自動取込",
    ],
    bestFor: "簿記知識ゼロの副業サラリーマン。",
  },
  {
    name: "やよいの青色申告 オンライン",
    type: "クラウド会計",
    price: "初年度無料",
    points: [
      "初年度0円・2年目以降も安い",
      "電話サポート無料プランあり",
      "法人化してもそのまま使える",
    ],
    bestFor: "コスト最優先・サポート重視の方。",
  },
  {
    name: "マネーフォワード クラウド確定申告",
    type: "クラウド会計",
    price: "月980円〜",
    points: [
      "副業・投資・仮想通貨まで統合管理",
      "銀行・証券・クレカ連携数最多",
      "スマホアプリも充実",
    ],
    bestFor: "投資・副業が複数ある方。",
  },
  {
    name: "オンライン税理士（顧問なし・単発依頼）",
    type: "税理士依頼",
    price: "3〜10万円",
    points: [
      "確定申告書類を丸投げで完成",
      "節税アドバイスつき",
      "スポット依頼が可能",
    ],
    bestFor: "時間を節約したい方、副業所得100万円以上。",
  },
  {
    name: "税理士ドットコム（マッチング）",
    type: "税理士紹介",
    price: "相談無料",
    points: [
      "複数税理士から見積もり比較",
      "副業特化の税理士も紹介可",
      "相談だけなら完全無料",
    ],
    bestFor: "税理士探しに迷っている方。",
  },
];

export default function SideBusinessFeeComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "副業向け確定申告サービス比較", url: `${siteConfig.url}/guide/side-business-fee-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】副業向け確定申告サービス比較おすすめ5選" description="副業の確定申告を自分で・依頼する場合のサービス料金を徹底比較。" url={`${siteConfig.url}/guide/side-business-fee-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>副業向け確定申告サービス比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】副業向け確定申告サービス比較おすすめ5選｜料金・サポートを徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          会社員の副業人口は年々増加しており、確定申告が必要な人も急増中です。自分でやるクラウド会計ソフトから税理士依頼まで、副業サラリーマン向けの選択肢を料金・サポート面で徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">所得別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">所得20〜50万円 → やよいの青色申告（初年度無料）</span></p>
          <p><span className="font-bold">所得50〜100万円 → freeeまたはマネーフォワード</span></p>
          <p><span className="font-bold">所得100万円超 → 税理士ドットコム→単発依頼</span></p>
          <p><span className="font-bold">投資・仮想通貨併用 → マネーフォワード</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">副業の確定申告が必要になるケース</h2>
        <p className="text-muted leading-relaxed mb-4">
          会社員でも、給与以外の所得が年20万円を超える場合は確定申告が義務です。ここで言う所得とは「収入から経費を引いた残額」のことで、たとえば副業ライターで年収50万円でも経費が30万円かかっていれば所得20万円以下となり申告不要のラインです。ただし住民税は1円でも申告義務があるため、ほぼ全員が何らかの手続きが必要と考えてよいでしょう。
        </p>
        <h3 className="text-xl font-bold mb-3 mt-6">主な副業と申告区分</h3>
        <ul className="list-disc pl-6 text-muted space-y-2">
          <li>クラウドワークス・ランサーズ → 雑所得（事業性が高ければ事業所得）</li>
          <li>ブログ・YouTube広告収入 → 雑所得</li>
          <li>メルカリ転売 → 継続的なら雑所得または事業所得</li>
          <li>株式・投資信託 → 申告分離課税（特定口座源泉徴収なら不要）</li>
          <li>仮想通貨・NFT → 雑所得（総合課税）</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ確定申告サービス5選の詳細</h2>
        <div className="space-y-6">
          {tools.map((t, idx) => (
            <div key={t.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{t.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{t.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">参考料金：{t.price}</p>
              <ul className="space-y-1 mb-4">
                {t.points.map((pt) => (
                  <li key={pt} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{pt}</li>
                ))}
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{t.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">確定申告を楽にする3つのコツ</h2>
        <ul className="list-disc pl-6 text-muted space-y-2">
          <li>専用銀行口座・クレカを用意して事業用と生活費を分離する</li>
          <li>会計ソフトで月次締めを習慣化し、年末駆け込みを避ける</li>
          <li>領収書はスマホで撮影してそのままソフトに取込・廃棄</li>
        </ul>
        <h3 className="text-xl font-bold mb-3 mt-6">会社バレを避けるコツ</h3>
        <p className="text-muted leading-relaxed">
          確定申告書第二表の「住民税・事業税に関する事項」欄で「自分で納付」を必ず選択しましょう。自治体から会社に届く住民税通知が副業分と分離され、会社経由の特別徴収額は本業の給与分だけになるため、住民税の金額差から副業がバレるリスクを減らせます。
        </p>
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
            副業の確定申告は、所得規模・取引の複雑さ・時間的余裕で最適解が変わります。所得100万円未満ならクラウド会計ソフト1本で十分、それ以上なら税理士依頼も検討しましょう。どの方法でも、日頃から記帳と証憑整理を習慣化しておくことが一番の近道です。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">おすすめ確定申告ソフトに申し込む</h2>
        <ComparisonTableCTA
          services={[
            { name: "弥生シリーズ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "初年度無料で試せる", price: "初年度無料〜", badge: "定番" },
            { name: "freee会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "質問に答えるだけで申告完成", price: "月980円〜" },
            { name: "マネーフォワード クラウド確定申告", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "連携数トップクラス", price: "月980円〜" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/accounting-software-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">確定申告ソフト比較</span>
            <p className="text-xs text-muted mt-1">freee・弥生・マネフォ徹底比較</p>
          </Link>
          <Link href="/guide/side-business-tools" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">副業ツール総合ガイド</span>
            <p className="text-xs text-muted mt-1">副業を始めるなら</p>
          </Link>
          <Link href="/guide/small-business-software" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">個人事業主向けクラウドソフト</span>
            <p className="text-xs text-muted mt-1">フリーランスの定番ツール</p>
          </Link>
          <Link href="/guide/tax-accountant-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">税理士紹介サービス比較</span>
            <p className="text-xs text-muted mt-1">税理士選びに迷ったら</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
