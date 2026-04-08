import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】電動アシスト自転車・E-bike比較おすすめ5選｜価格・航続距離・用途別を徹底解説",
  description:
    "パナソニック・ブリヂストン・ヤマハ・トレック・BESVなど電動アシスト自転車とE-bikeを価格・バッテリー・航続距離で徹底比較。通勤・子育て・スポーツ用途別の選び方を解説します。",
  alternates: { canonical: `${siteConfig.url}/guide/e-bike-comparison` },
};

const faqItems = [
  { question: "電動アシスト自転車とE-bikeの違いは？", answer: "電動アシスト自転車は日常用（買い物・通勤・子乗せ）で10〜15万円中心、E-bikeはスポーツ用でロードバイクやクロスバイク形状・高性能ユニット搭載で25〜60万円が相場です。後者はツーリングや林道走行にも対応します。" },
  { question: "航続距離はどれくらい？", answer: "標準的な日常用モデルでエコモード70〜100km、パワーモード30〜50km、E-bikeは最新モデルでエコ120km・パワー60km前後が一般的です。" },
  { question: "補助金はありますか？", answer: "自治体によっては子乗せ電動自転車購入に1〜5万円の補助金があります。東京都世田谷区・板橋区・江戸川区などが有名です。購入前に自治体サイトで要確認。" },
  { question: "保険は必要ですか？", answer: "多くの自治体で自転車損害賠償保険の加入が義務化されています。年間1,500〜3,500円で加入できる個人賠償責任保険や自転車保険の加入をおすすめします。" },
];

const bikes = [
  { name: "パナソニック ギュット・クルーム", type: "子乗せ", rate: "16〜18万円", points: ["前後チャイルドシート標準", "航続距離最大107km", "ディスクブレーキ搭載"], bestFor: "2人の子育て世帯、送迎メインユース。" },
  { name: "ブリヂストン アシスタU DX", type: "通勤・買い物", rate: "11〜13万円", points: ["回生充電機能付き", "走行中にも充電可能", "ベルトドライブでチェーン掃除不要"], bestFor: "通勤・通学・日常の買い物に。" },
  { name: "ヤマハ PAS Kiss mini un", type: "子乗せ", rate: "15〜17万円", points: ["低重心で安定走行", "スマートパワーモード", "専用チャイルドシート付"], bestFor: "乳幼児2人送迎、ママ・パパ兼用。" },
  { name: "トレック Verve+ 2", type: "E-bike", rate: "26〜30万円", points: ["Boschドライブユニット", "最大航続距離120km", "USB充電ポート付き"], bestFor: "週末サイクリング・E-bike入門。" },
  { name: "BESV JF1", type: "E-bike", rate: "28〜35万円", points: ["スタイリッシュな都市型", "折りたたみも可能", "スマホ連携アプリ対応"], bestFor: "都市通勤・デザイン重視ユーザー。" },
];

export default function EBikeComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "電動アシスト自転車・E-bike比較", url: `${siteConfig.url}/guide/e-bike-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】電動アシスト自転車・E-bike比較おすすめ5選｜価格・航続距離・用途別を徹底解説" description="パナソニック・ブリヂストン・ヤマハ・トレック・BESVなど電動自転車を徹底比較。" url={`${siteConfig.url}/guide/e-bike-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>電動アシスト自転車比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】電動アシスト自転車・E-bike比較おすすめ5選｜価格・航続距離・用途別を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          電動自転車は「子乗せ」「通勤」「スポーツ」で選ぶべきモデルが全く違います。航続距離・バッテリー交換費用・補助金制度まで含めて、後悔しない1台を選びましょう。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">子乗せ送迎 → パナソニック ギュット・クルーム</span></p>
          <p><span className="font-bold">通勤・省メンテ → ブリヂストン アシスタU DX</span></p>
          <p><span className="font-bold">週末サイクリング → トレック Verve+ 2</span></p>
          <p><span className="font-bold">デザイン重視 → BESV JF1</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">電動自転車選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          日常使い電動アシスト自転車は「バッテリー容量（Wh）」「航続距離」「車体重量」「タイヤ径」「チャイルドシート対応」で選びます。バッテリー交換費用は3〜5万円かかるので、購入後5〜7年で買い替え前提のコスト計算を。E-bikeはさらに「ドライブユニット（Bosch・Shimano STEPS・Yamaha PWなど）」「トルク値」「フレーム素材」もチェックポイントになります。坂道が多い地域なら高トルクモデル、平坦地なら軽量モデルが快適です。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ電動自転車5選の詳細</h2>
        <div className="space-y-6">
          {bikes.map((b, idx) => (
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
        <p className="text-xs text-muted mt-3">※ 価格・仕様は2026年4月時点の参考値です。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">購入前のチェックポイント</h2>
        <p className="text-muted leading-relaxed mb-4">
          まず自治体の補助金制度を確認しましょう。子乗せ電動自転車には最大5万円の補助金を出す区市町村があります。また、購入時には防犯登録（600円）、TSマーク付帯保険、バッテリー盗難保険の検討も必要。通勤手当対象になる会社もあるので、領収書と通勤経路図を会社に提出しましょう。自営業・副業の方は事業按分でクラウド会計に登録すると経費計上できます。
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
            電動自転車は「用途×航続距離×予算」で選びましょう。子乗せなら安全性重視、通勤なら省メンテモデル、週末サイクリングならE-bikeが最適解です。補助金・保険・バッテリー交換費用まで含めた総コストで判断するのが賢い選び方です。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">購入費・経費管理に役立つツール</h2>
        <ComparisonTableCTA
          services={[
            { name: "弥生シリーズ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "減価償却にも対応", price: "年額制", badge: "定番" },
            { name: "freee会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "スマホで仕訳", price: "月額制" },
            { name: "マネーフォワード クラウド会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "家計と事業を統合管理", price: "月額制" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/bicycle-insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">自転車保険比較</span>
            <p className="text-xs text-muted mt-1">義務化対応の賠償保険</p>
          </Link>
          <Link href="/guide/car-purchase-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">車購入比較</span>
            <p className="text-xs text-muted mt-1">車から自転車への乗り換えも</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
