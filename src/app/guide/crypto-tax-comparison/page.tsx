import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】仮想通貨の税金計算ソフト比較｜Cryptact・Gtaxなど5選を徹底解説",
  description:
    "暗号資産の損益計算を自動化する税金計算ソフトを徹底比較。Cryptact・Gtax・CryptoLinC・koinly・CoinToolの料金・対応取引所・DeFi対応を網羅。",
  alternates: { canonical: `${siteConfig.url}/guide/crypto-tax-comparison` },
};

const faqItems = [
  {
    question: "暗号資産の損益計算は自分でできますか？",
    answer:
      "取引所1〜2社のみ・スポット取引のみなら表計算でも可能ですが、DeFi・NFT・エアドロップが絡むと移動平均法の計算が複雑になり、税金計算ソフトの利用が実質必須になります。",
  },
  {
    question: "総平均法と移動平均法、どちらを選ぶべきですか？",
    answer:
      "国税庁は個人は総平均法を原則としていますが、届出により移動平均法も選択可能です。一度選んだ方法は3年間継続が必要なので、多くのソフトが対応する総平均法を選ぶのが無難です。",
  },
  {
    question: "DeFi・NFT・ステーキング報酬は計算対象ですか？",
    answer:
      "すべて雑所得として計上対象です。ステーキング報酬は受領時の時価で収入計上、NFT売却益も同様に損益計算の対象となります。Cryptact・CryptoLinCなどDeFi対応ソフトが必要です。",
  },
  {
    question: "前年度の損失は繰り越せますか？",
    answer:
      "暗号資産の損失は事業所得と認められない限り、他の所得との損益通算・翌年以降への繰越ができません。これは株式・FXと大きく異なる点なので注意が必要です。",
  },
];

const tools = [
  {
    name: "Cryptact（クリプタクト）",
    type: "国内シェアNo.1",
    price: "無料〜年55,000円",
    points: [
      "国内外150以上の取引所に対応",
      "DeFi・NFT・Defi取引の自動認識",
      "税理士監修レポート出力",
    ],
    bestFor: "複数取引所・DeFiを利用する上級者。",
  },
  {
    name: "Gtax",
    type: "国内取引所特化",
    price: "無料〜年49,800円",
    points: [
      "国内主要取引所に完全対応",
      "シンプルなUIで初心者向け",
      "税理士連携機能あり",
    ],
    bestFor: "国内取引所のみ使う初心者〜中級者。",
  },
  {
    name: "CryptoLinC（クリプトリンク）",
    type: "税理士法人提供",
    price: "年33,000円〜",
    points: [
      "税理士法人が開発・運営",
      "確定申告書類の直接出力",
      "DeFi・海外取引所にも対応",
    ],
    bestFor: "税理士に申告代行まで依頼したい方。",
  },
  {
    name: "koinly",
    type: "海外ツール",
    price: "無料〜年$179",
    points: [
      "海外取引所・DeFiの対応範囲が広い",
      "日本の税制にも対応",
      "多通貨レポート生成",
    ],
    bestFor: "海外取引所メインで取引する方。",
  },
  {
    name: "CoinTool",
    type: "無料ツール",
    price: "完全無料",
    points: [
      "取引件数300件まで無料",
      "CSV取込で簡単計算",
      "軽量で小規模投資家向き",
    ],
    bestFor: "年間取引数が少ないライトユーザー。",
  },
];

export default function CryptoTaxComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "仮想通貨の税金計算ソフト比較", url: `${siteConfig.url}/guide/crypto-tax-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】仮想通貨の税金計算ソフト比較" description="暗号資産の損益計算を自動化する税金計算ソフトを徹底比較。" url={`${siteConfig.url}/guide/crypto-tax-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>仮想通貨の税金計算ソフト比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】仮想通貨の税金計算ソフト比較｜Cryptact・Gtaxなど5選を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          暗号資産の損益は雑所得として総合課税の対象になり、計算が非常に複雑です。DeFi・NFT・ステーキング報酬まで含む2026年の税金計算ソフト5選を比較し、選び方のポイントを解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">DeFi・NFT取引あり → Cryptact</span></p>
          <p><span className="font-bold">国内取引所のみ → Gtax</span></p>
          <p><span className="font-bold">税理士連携重視 → CryptoLinC</span></p>
          <p><span className="font-bold">海外取引所メイン → koinly</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">仮想通貨の税金計算が難しい理由</h2>
        <p className="text-muted leading-relaxed mb-4">
          暗号資産は保有中の含み益には課税されませんが、売却・交換・決済・スワップ・ステーキング受領などのタイミングで都度損益が確定します。複数の取引所・ウォレットを使っていると、取得価額の算定に総平均法または移動平均法を全取引に通しで適用する必要があり、手計算では実質不可能です。DeFi・NFT・エアドロップが加わると計算ミスのリスクが跳ね上がるため、専用ソフトの利用が必須と言えます。
        </p>
        <h3 className="text-xl font-bold mb-3 mt-6">課税されるタイミング</h3>
        <ul className="list-disc pl-6 text-muted space-y-2">
          <li>暗号資産を売却して日本円を受け取ったとき</li>
          <li>暗号資産同士を交換したとき（BTC→ETHなど）</li>
          <li>暗号資産で商品・サービスを購入したとき</li>
          <li>マイニング・ステーキング・レンディング報酬を受領したとき</li>
          <li>エアドロップ・ハードフォークで新トークンを受領したとき</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ税金計算ソフト5選の詳細</h2>
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
        <h2 className="text-2xl font-bold mb-4">損益計算から申告までの流れ</h2>
        <p className="text-muted leading-relaxed mb-4">
          実際の申告は「各取引所からCSV/API取得 → ソフトに取込 → 仕訳・損益確定 → 雑所得として確定申告」という4ステップで進みます。年始に前年データをまとめて処理する人が多いですが、月次で取込を習慣化しておくとエラー対応が楽です。計算結果はfreee・マネーフォワードなど会計ソフトに連動させて、他の副業所得と合算申告するのがスムーズです。
        </p>
        <h3 className="text-xl font-bold mb-3 mt-6">住民税の申告もれに注意</h3>
        <p className="text-muted leading-relaxed">
          会社員が年20万円以下の暗号資産利益で確定申告不要でも、住民税は1円から申告義務があります。副業バレ防止のために住民税を普通徴収に切り替える手続きも忘れず行いましょう。
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
            暗号資産の税金計算ソフトは「使っている取引所・DeFi範囲・申告のプロ依頼有無」で選ぶのが正解。Cryptactが最も包括的ですが、国内取引所のみならGtax、税理士依頼ならCryptoLinCが費用対効果に優れます。まずは無料プランで実際の取引データを読み込ませ、対応範囲と計算精度を確認してから有料プランに進みましょう。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">暗号資産の申告に使える会計ソフト</h2>
        <ComparisonTableCTA
          services={[
            { name: "freee会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "雑所得の申告もワンストップ", price: "月980円〜" },
            { name: "マネーフォワード クラウド会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "複数所得の合算申告に強い", price: "月980円〜" },
            { name: "弥生シリーズ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "初年度無料で試せる", price: "初年度無料〜", badge: "定番" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/crypto-exchange-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">仮想通貨取引所比較</span>
            <p className="text-xs text-muted mt-1">国内主要5社を徹底比較</p>
          </Link>
          <Link href="/guide/dapps-wallet-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">暗号資産ウォレット・DeFi比較</span>
            <p className="text-xs text-muted mt-1">DeFiの始め方ガイド</p>
          </Link>
          <Link href="/guide/nft-marketplace-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">NFTマーケットプレイス比較</span>
            <p className="text-xs text-muted mt-1">NFT売買の税金も解説</p>
          </Link>
          <Link href="/guide/accounting-software-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">確定申告ソフト比較</span>
            <p className="text-xs text-muted mt-1">副業申告の定番ソフト</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
