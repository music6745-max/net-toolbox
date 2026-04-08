import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】暗号資産ウォレット・DeFi比較おすすめ5選｜MetaMask・Ledgerを徹底解説",
  description:
    "MetaMask・Phantom・Ledger・Trust Wallet・Rabbyの使い勝手・対応チェーン・セキュリティを徹底比較。DeFi・NFT・ステーキングの始め方も解説。",
  alternates: { canonical: `${siteConfig.url}/guide/dapps-wallet-comparison` },
};

const faqItems = [
  {
    question: "取引所のまま保管ではダメですか？",
    answer:
      "長期保管なら取引所でも問題ありませんが、DeFiやNFT取引にはウォレットが必須です。また過去の事例を踏まえると、まとまった額は自己管理ウォレット（特にハードウェア型）に移すのがセキュリティ的に安心です。",
  },
  {
    question: "ホットウォレットとコールドウォレットの違いは？",
    answer:
      "ホットウォレット（MetaMaskなど）はオンラインに常時接続されており、利便性が高いですがハッキングリスクがあります。コールドウォレット（Ledgerなど）はオフライン保管で安全性が高く、大金保管に向いています。",
  },
  {
    question: "シードフレーズを忘れるとどうなりますか？",
    answer:
      "ウォレット内の資産には二度とアクセスできません。シードフレーズは紙に書いて金庫保管、または金属プレートに刻印して分散保管するのが標準的な対策です。",
  },
  {
    question: "DeFiは初心者でも利用できますか？",
    answer:
      "操作自体は可能ですが、スマートコントラクトの脆弱性・IL（インパーマネントロス）・詐欺プロジェクトのリスクがあります。まずはBlue-chip DeFi（Uniswap・Aaveなど）で少額から始めるのが鉄則です。",
  },
];

const tools = [
  {
    name: "MetaMask",
    type: "ホット・ブラウザ拡張",
    price: "無料",
    points: [
      "最大シェアのEVM対応ウォレット",
      "ほぼすべてのDApps・NFTマーケットに接続可能",
      "スマホアプリ・ブラウザ拡張を提供",
    ],
    bestFor: "EVMチェーン中心のDeFi・NFT利用者。",
  },
  {
    name: "Phantom",
    type: "ホット・マルチチェーン",
    price: "無料",
    points: [
      "Solana系で最も使いやすい",
      "Ethereum・Polygon・Bitcoinにも対応",
      "スワップ機能が内蔵",
    ],
    bestFor: "Solana系NFT・DeFi利用者。",
  },
  {
    name: "Ledger Nano X",
    type: "ハードウェア",
    price: "約17,000円",
    points: [
      "オフライン保管で最高水準のセキュリティ",
      "5000種以上の暗号資産に対応",
      "Ledger Liveアプリで一括管理",
    ],
    bestFor: "まとまった額を長期保管する中級者以上。",
  },
  {
    name: "Trust Wallet",
    type: "ホット・モバイル",
    price: "無料",
    points: [
      "70以上のブロックチェーンに対応",
      "Binance系列の公式ウォレット",
      "モバイル特化でシンプル",
    ],
    bestFor: "スマホ中心で幅広いチェーンを使う方。",
  },
  {
    name: "Rabby Wallet",
    type: "ホット・DeFi特化",
    price: "無料",
    points: [
      "トランザクション前に損益シミュレート",
      "チェーン自動切替",
      "セキュリティ警告機能が強力",
    ],
    bestFor: "DeFiを頻繁に使う上級者。",
  },
];

export default function DappsWalletComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "暗号資産ウォレット・DeFi比較", url: `${siteConfig.url}/guide/dapps-wallet-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】暗号資産ウォレット・DeFi比較おすすめ5選" description="MetaMask・Phantom・Ledger・Trust Wallet・Rabbyの使い勝手・対応チェーン・セキュリティを徹底比較。" url={`${siteConfig.url}/guide/dapps-wallet-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>暗号資産ウォレット・DeFi比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】暗号資産ウォレット・DeFi比較おすすめ5選｜MetaMask・Ledgerを徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          DeFi・NFT・ステーキングを活用するには、自分で秘密鍵を管理する暗号資産ウォレットが必須です。ホットウォレットからハードウェアウォレットまで、目的別の選び方と安全な使い方を解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">初心者・EVM系 → MetaMask</span></p>
          <p><span className="font-bold">Solana・マルチ → Phantom</span></p>
          <p><span className="font-bold">大口保管 → Ledger Nano X</span></p>
          <p><span className="font-bold">DeFi上級者 → Rabby Wallet</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">暗号資産ウォレットの種類</h2>
        <p className="text-muted leading-relaxed mb-4">
          ウォレットはホット（常時オンライン）とコールド（オフライン）の2種類に大別されます。さらにブラウザ拡張・モバイルアプリ・ハードウェアの3形態があり、利便性と安全性はトレードオフの関係にあります。日常取引用のホットウォレットと、長期保管用のコールドウォレットを併用するのがベストプラクティスです。
        </p>
        <h3 className="text-xl font-bold mb-3 mt-6">DeFiとは</h3>
        <p className="text-muted leading-relaxed">
          DeFi（Decentralized Finance、分散型金融）は、銀行や取引所を介さずにスマートコントラクトで金融サービスを提供する仕組みです。代表的な用途はスワップ（DEX）、レンディング、ステーキング、流動性提供（LP）など。利回りが高い分、スマートコントラクトリスクや価格変動リスクも大きいため、少額から始めることが重要です。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめウォレット5選の詳細</h2>
        <div className="space-y-6">
          {tools.map((t, idx) => (
            <div key={t.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{t.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{t.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">参考価格：{t.price}</p>
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
        <h2 className="text-2xl font-bold mb-4">ウォレット運用の黄金ルール</h2>
        <ul className="list-disc pl-6 text-muted space-y-2">
          <li>シードフレーズは絶対にデジタル化しない（写真・クラウドNG）</li>
          <li>日常取引用と長期保管用でウォレットを分離する</li>
          <li>不明なトークンが届いても触らない（ダスト攻撃）</li>
          <li>承認済みスマートコントラクトを定期的に解除する</li>
          <li>ハードウェアウォレット購入は公式サイト直販のみ</li>
        </ul>
        <h3 className="text-xl font-bold mb-3 mt-6">DeFiの税金</h3>
        <p className="text-muted leading-relaxed">
          DeFiでのスワップ・ステーキング報酬・流動性提供報酬はすべて雑所得として課税対象です。取引数が多いため、Cryptactなどの税金計算ソフトとウォレットをAPI連携しておくのが鉄則です。
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
            ウォレットは暗号資産ライフの入り口です。MetaMask＋Ledgerの組み合わせが万人向けの最適解。DeFiに踏み込む前にセキュリティ対策と税金ソフトの準備を整え、少額から徐々に利用範囲を広げていきましょう。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">暗号資産運用の申告に使えるソフト</h2>
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
            <p className="text-xs text-muted mt-1">ウォレット入金前の購入に</p>
          </Link>
          <Link href="/guide/nft-marketplace-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">NFTマーケットプレイス比較</span>
            <p className="text-xs text-muted mt-1">ウォレット接続先として</p>
          </Link>
          <Link href="/guide/crypto-tax-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">仮想通貨の税金計算ソフト</span>
            <p className="text-xs text-muted mt-1">DeFi損益の計算に</p>
          </Link>
          <Link href="/guide/password-security" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">パスワード・セキュリティ</span>
            <p className="text-xs text-muted mt-1">シードフレーズ管理の基礎</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
