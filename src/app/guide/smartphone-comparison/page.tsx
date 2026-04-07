import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】スマホ機種比較おすすめ5選｜iPhone・Androidを徹底解説",
  description:
    "iPhone・Galaxy・Pixel・Xperia・AQUOSの最新スマホ機種を価格・カメラ・バッテリーで徹底比較。ライフスタイル別おすすめも紹介。",
  alternates: { canonical: `${siteConfig.url}/guide/smartphone-comparison` },
};

const faqItems = [
  {
    question: "iPhoneとAndroidはどちらが良いですか？",
    answer:
      "操作のシンプルさやサポート期間の長さを重視するならiPhone、価格の幅やカスタマイズ性を求めるならAndroidがおすすめです。家族や周囲の利用機種、修理体制なども選定材料になります。",
  },
  {
    question: "ハイエンド機種を選ぶメリットは？",
    answer:
      "カメラ性能・バッテリー持ち・ゲーム性能・OSアップデート期間の長さで明確に差が出ます。長期間使う前提ならハイエンドが結果的にコスパが高くなるケースが多いです。",
  },
  {
    question: "格安SIMでも最新スマホは使えますか？",
    answer:
      "ほとんどの格安SIMで動作します。SIMロック解除済みかつ対応バンドが合えば問題ありません。購入前に各MVNOの動作確認端末リストをチェックしましょう。",
  },
  {
    question: "中古スマホは安全ですか？",
    answer:
      "信頼できる中古販売店（イオシス・じゃんぱら・ゲオなど）の整備済品を選び、IMEIで赤ロム保証があるか必ず確認してください。バッテリー劣化状態も要チェックです。",
  },
];

const phones = [
  {
    name: "iPhone 16",
    type: "オールラウンド",
    price: "12万円台〜",
    points: [
      "Apple独自チップで長期サポート",
      "カメラ・動画性能が業界トップクラス",
      "iCloud・AirDropなどApple連携が便利",
      "リセールバリューが高い",
    ],
    bestFor: "シンプルに長く使いたい人、Apple製品を併用する人に最適。",
  },
  {
    name: "Galaxy S24",
    type: "Android最上位",
    price: "13万円台〜",
    points: [
      "Snapdragon搭載で処理性能が高い",
      "ディスプレイが鮮やかで動画視聴に最適",
      "AI画像編集機能が充実",
      "防水・防塵対応",
    ],
    bestFor: "動画や写真を高品質で楽しみたい人、最新のAI機能を試したい人。",
  },
  {
    name: "Google Pixel 8",
    type: "Google純正",
    price: "9万円台〜",
    points: [
      "Google AIによる写真補正が秀逸",
      "Pixel独自機能で文字起こし・通訳が便利",
      "OSアップデート7年保証",
      "シンプルで素のAndroid体験",
    ],
    bestFor: "AI機能を活用したい人、Google系サービスを多用する人。",
  },
  {
    name: "Xperia 10 VI",
    type: "ミドルレンジ国産",
    price: "6万円台〜",
    points: [
      "縦長21:9ディスプレイで動画・ゲームに強い",
      "イヤホンジャック搭載で音質重視",
      "軽量で持ちやすい",
      "国内メーカーの安心感",
    ],
    bestFor: "音楽・動画を楽しみたい人、軽さを重視する人。",
  },
  {
    name: "AQUOS sense9",
    type: "コスパ重視",
    price: "5万円台〜",
    points: [
      "省エネIGZOディスプレイでバッテリー持ち抜群",
      "おサイフケータイ対応",
      "防水・防塵・耐衝撃",
      "シニアにも使いやすいシンプル設計",
    ],
    bestFor: "バッテリー持ちを重視する人、初めてのスマホにも最適。",
  },
];

export default function SmartphoneComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "スマホ機種比較", url: `${siteConfig.url}/guide/smartphone-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>スマホ機種比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】スマホ機種比較おすすめ5選｜iPhone・Androidを徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          スマホ選びで失敗したくない方に向けて、2026年現在の人気機種5モデルを価格・カメラ性能・バッテリー・サポート期間など多角的に比較しました。あなたの使い方にぴったりの1台が必ず見つかります。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">長く安心して使う → iPhone 16</span></p>
          <p><span className="font-bold">AI機能で写真を楽しむ → Pixel 8</span></p>
          <p><span className="font-bold">動画・ゲーム重視 → Galaxy S24</span></p>
          <p><span className="font-bold">コスパ・電池持ち → AQUOS sense9</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">スマホ選びの5つのポイント</h2>
        <p className="text-muted leading-relaxed mb-4">
          機種選びで重視すべきは「価格・カメラ・バッテリー・サポート期間・サイズ感」の5つです。とくに長く使う前提ならOSアップデート保証期間を必ず確認しましょう。iPhoneは平均6年、Pixel 8は7年、その他Androidは3〜5年が一般的です。バッテリー容量は4000mAh以上を目安に、外出が多いなら急速充電・ワイヤレス充電対応も要チェックです。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめスマホ5機種の詳細</h2>
        <div className="space-y-6">
          {phones.map((p, idx) => (
            <div key={p.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{p.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">{p.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">参考価格：{p.price}</p>
              <ul className="space-y-1 mb-4">
                {p.points.map((pt) => (
                  <li key={pt} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{pt}</li>
                ))}
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{p.bestFor}</p>
              </div>
            </div>
          ))}
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
            スマホ選びは「自分が何を最も重視するか」で決めるのがコツ。iPhoneは長期サポートとリセール、PixelはAI写真、Galaxyは総合性能、Xperiaは音と軽さ、AQUOSはバッテリーが強みです。新機種購入と同時に、月額料金を抑えるために格安SIMへの乗り換えも検討すると通信費を大幅に節約できます。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">スマホとセットで節約できる格安SIM</h2>
        <ComparisonTableCTA
          services={[
            {
              name: "ごえんモバイル",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXL+8LLFCI+424K+TS3OI",
              highlight: "シンプル・低価格の格安SIM",
              price: "月額制",
              badge: "コスパ",
            },
            {
              name: "BB.exciteモバイル Fit",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXL+8M6UYA+7JY+2BCWEQ",
              highlight: "段階制プランでムダなく使える",
              price: "月額制",
            },
            {
              name: "DTI SIM",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXL+8P60Z6+1QFI+2Z68LU",
              highlight: "ドコモ回線の格安SIM",
              price: "月額制",
            },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/sim-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">格安SIM比較</span>
            <p className="text-xs text-muted mt-1">スマホ料金を見直すならこちら</p>
          </Link>
          <Link href="/guide/wifi-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ポケットWiFi比較</span>
            <p className="text-xs text-muted mt-1">外でも使える持ち運びWi-Fi</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
