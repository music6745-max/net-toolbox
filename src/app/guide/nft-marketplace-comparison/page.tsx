import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】NFTマーケットプレイス比較おすすめ5選｜手数料・対応チェーンを徹底解説",
  description:
    "OpenSea・Magic Eden・Blur・Rarible・Coincheck NFTの手数料・対応チェーン・取扱ジャンルを徹底比較。初心者のNFT売買と税金の考え方まで解説。",
  alternates: { canonical: `${siteConfig.url}/guide/nft-marketplace-comparison` },
};

const faqItems = [
  {
    question: "NFTを買うのに何が必要ですか？",
    answer:
      "暗号資産ウォレット（MetaMaskなど）と、購入チェーンに対応した暗号資産（ETH・SOL・MATICなど）が必要です。国内取引所で暗号資産を入手し、ウォレットへ送金して接続する流れです。",
  },
  {
    question: "マーケットプレイスの手数料はどれくらいですか？",
    answer:
      "販売者から2.5%前後（OpenSea）が相場で、加えてネットワーク手数料（ガス代）が都度発生します。Blurのように手数料0%を売りにするサービスも増えていますが、クリエイターロイヤリティの扱いに注意が必要です。",
  },
  {
    question: "NFTの売買益は課税対象ですか？",
    answer:
      "個人の場合は雑所得として総合課税の対象になります。売買が継続・営利性ありと認定されれば事業所得扱いの可能性もありますが、多くの個人投資家は雑所得となります。",
  },
  {
    question: "偽物・詐欺NFTを避けるには？",
    answer:
      "公式のコントラクトアドレスを必ず確認し、マーケットプレイス上の認証マーク（青いチェック等）を確認しましょう。ディスコードやTwitterのDMで送られてきたリンクは絶対に踏まないのが鉄則です。",
  },
];

const tools = [
  {
    name: "OpenSea",
    type: "最大手",
    price: "販売手数料2.5%",
    points: [
      "世界最大のNFTマーケットプレイス",
      "Ethereum・Polygon・Solana対応",
      "ジャンル・取扱数ともに最多",
    ],
    bestFor: "NFTを始めて買う初心者。取扱数で選びたい方。",
  },
  {
    name: "Magic Eden",
    type: "Solana特化→マルチ",
    price: "販売手数料2%",
    points: [
      "Solana系NFTで圧倒的シェア",
      "Ethereum・Bitcoin Ordinalsも対応",
      "手数料が業界最安水準",
    ],
    bestFor: "Solanaチェーンで取引したい方。",
  },
  {
    name: "Blur",
    type: "プロトレーダー向け",
    price: "販売手数料0%",
    points: [
      "手数料0%・ロイヤリティ任意",
      "高速UI・一括入札機能",
      "エアドロップで注目",
    ],
    bestFor: "短期トレードを繰り返す上級者。",
  },
  {
    name: "Rarible",
    type: "DAO型",
    price: "販売手数料1%〜",
    points: [
      "クリエイターフレンドリー",
      "独自トークンRARI保有でガバナンス参加",
      "ロイヤリティ強制徴収",
    ],
    bestFor: "クリエイターとしてNFTを発行したい方。",
  },
  {
    name: "Coincheck NFT",
    type: "国内取引所",
    price: "出品・購入手数料無料",
    points: [
      "日本円で直接決済可能",
      "コインチェック口座と連携",
      "ガス代不要のオフチェーン取引",
    ],
    bestFor: "暗号資産・ウォレット初心者、日本円で買いたい方。",
  },
];

export default function NFTMarketplaceComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "NFTマーケットプレイス比較", url: `${siteConfig.url}/guide/nft-marketplace-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】NFTマーケットプレイス比較おすすめ5選" description="OpenSea・Magic Eden・Blur・Rarible・Coincheck NFTの手数料・対応チェーン・取扱ジャンルを徹底比較。" url={`${siteConfig.url}/guide/nft-marketplace-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>NFTマーケットプレイス比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】NFTマーケットプレイス比較おすすめ5選｜手数料・対応チェーンを徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          NFT市場は2022年ピークから一度冷え込んだものの、2026年現在はユーティリティ型NFTやRWA（実物資産）トークン化の流れで再び活発化しています。主要5サービスの手数料・対応チェーン・特徴を比較し、初心者でも安全に始められる選び方を解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">初心者・日本円決済 → Coincheck NFT</span></p>
          <p><span className="font-bold">取扱数最多 → OpenSea</span></p>
          <p><span className="font-bold">Solana特化 → Magic Eden</span></p>
          <p><span className="font-bold">短期トレード → Blur</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">NFTマーケットプレイスとは</h2>
        <p className="text-muted leading-relaxed mb-4">
          NFT（Non-Fungible Token）は、ブロックチェーン上で唯一性が保証されるデジタル資産です。マーケットプレイスは、これを売買するための専用プラットフォームで、クレジットカード決済に対応する国内型と、暗号資産決済のグローバル型に大別されます。初心者は国内型のCoincheck NFTから入り、慣れてからOpenSeaやMagic Edenに進むのが安全なルートです。
        </p>
        <h3 className="text-xl font-bold mb-3 mt-6">選定で重視すべき4項目</h3>
        <ul className="list-disc pl-6 text-muted space-y-2">
          <li>対応チェーン（Ethereum・Solana・Polygon・Bitcoinなど）</li>
          <li>手数料（販売手数料・ガス代・ロイヤリティ）</li>
          <li>取扱ジャンル（PFP・アート・ゲーム・音楽など）</li>
          <li>セキュリティ（認証システム・コミュニティ対応）</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめNFTマーケットプレイス5選の詳細</h2>
        <div className="space-y-6">
          {tools.map((t, idx) => (
            <div key={t.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{t.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{t.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">参考手数料：{t.price}</p>
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
        <h2 className="text-2xl font-bold mb-4">NFT購入から確定申告までの流れ</h2>
        <p className="text-muted leading-relaxed mb-4">
          初めてNFTを買う場合は「国内取引所で暗号資産購入 → MetaMaskにインポート → マーケットプレイスに接続 → 購入」の順に進めます。転売して利益が出たら翌年の確定申告が必要で、損益計算はCryptactなどのツールで自動化できます。NFTは売買のたびに損益確定するため、取引記録の保存は必須です。
        </p>
        <h3 className="text-xl font-bold mb-3 mt-6">詐欺・セキュリティ対策</h3>
        <ul className="list-disc pl-6 text-muted space-y-2">
          <li>ウォレットのシードフレーズは絶対にオンライン保存しない</li>
          <li>コントラクト署名時は内容を必ず確認する</li>
          <li>ハードウェアウォレットを併用する</li>
          <li>怪しいミント・フリーNFTのリンクは踏まない</li>
        </ul>
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
            NFTマーケットプレイスは、目的とリテラシーに応じて選ぶのが正解。初心者はCoincheck NFT、取扱数重視ならOpenSea、トレード特化ならBlurが最適です。売買時は必ず税金計算ソフトで損益を記録し、翌年の申告に備えましょう。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">NFT売買益の申告に役立つソフト</h2>
        <ComparisonTableCTA
          services={[
            { name: "freee会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "雑所得の申告もワンストップ", price: "月980円〜" },
            { name: "マネーフォワード クラウド会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "複数所得の合算に強い", price: "月980円〜" },
            { name: "弥生シリーズ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "初年度無料で試せる", price: "初年度無料〜", badge: "定番" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/crypto-exchange-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">仮想通貨取引所比較</span>
            <p className="text-xs text-muted mt-1">NFT購入前の暗号資産入手に</p>
          </Link>
          <Link href="/guide/dapps-wallet-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">暗号資産ウォレット比較</span>
            <p className="text-xs text-muted mt-1">MetaMaskなどの選び方</p>
          </Link>
          <Link href="/guide/crypto-tax-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">仮想通貨の税金計算ソフト</span>
            <p className="text-xs text-muted mt-1">NFT売買益の計算に</p>
          </Link>
          <Link href="/guide/side-business-fee-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">副業の確定申告比較</span>
            <p className="text-xs text-muted mt-1">副収入の申告サービス</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
