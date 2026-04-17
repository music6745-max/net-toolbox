import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】一人暮らしにおすすめのWiFi5選｜工事不要・契約期間なし",
  description:
    "一人暮らし向けWiFi5選を徹底比較。工事不要・契約期間なし・月額料金で選ぶ。",
  alternates: { canonical: `${siteConfig.url}/guide/wifi-for-one-person` },
};

const faqItems = [
  { question: "一人暮らしは光回線と置くだけWiFiどっちがいい？", answer: "引越しが多い人・工事不可の物件・短期滞在なら置くだけWiFi（ホームルーター/ポケット）が圧倒的に便利です。一方、オンラインゲーム・高画質動画配信を本格的にするなら光回線が安定度で有利。判断基準は「工事可否 × 滞在期間 × 用途の重さ」の3軸で決めましょう。" },
  { question: "契約期間なしのWiFiはどれ？", answer: "WiMAX・Rakuten Turbo・ahamoポイ活は契約期間の縛りがなく、いつ解約しても違約金0円。短期留学・単身赴任・1〜2年の一人暮らしには最適です。ドコモhome 5GやSoftBank Airは端末代の分割支払いが残ると実質的な縛りになる点に注意。" },
  { question: "ポケットWiFiとホームルーターの違いは？", answer: "ポケットは外出時も使える携帯型、ホームルーターは自宅用据え置き型で通信速度・安定性に優れます。在宅勤務やテレワーク中心ならホームルーター、外でも使うならポケットWiFiを選びましょう。" },
  { question: "無制限プランは本当に無制限？", answer: "多くのサービスは「使い放題」と謳っていても、一定期間内に大容量（例：3日で15GB等）を使うと速度制限がかかる場合があります。Rakuten Turboは比較的制限が緩く、動画視聴中心のユーザーにも向いています。" },
];

const services = [
  { name: "WiMAX+5G", type: "高速・モバイル型", rate: "月額3,800〜4,800円／契約期間なしプラン有", points: ["ホームルーター・ポケット両対応", "5G対応で下り最大2.7Gbps", "プロバイダ選びで月額が大きく変わる"], bestFor: "在宅も外出先も高速通信を使いたい人。" },
  { name: "ドコモhome 5G", type: "ホームルーター", rate: "月額4,950円（端末代別・実質無料キャンペーン有）", points: ["無制限で速度制限が緩い", "コンセント挿すだけで工事不要", "ドコモ回線の安定感"], bestFor: "自宅中心・安定重視のテレワーカー。" },
  { name: "SoftBank Air", type: "ホームルーター", rate: "月額5,368円（端末代別）", points: ["SoftBankスマホとのセット割対応", "開通までの代替WiFi貸出あり", "最短3日で到着"], bestFor: "SoftBank・Y!mobileユーザー。" },
  { name: "Rakuten Turbo", type: "楽天モバイル系", rate: "月額4,840円（楽天会員割引あり）", points: ["楽天回線で無制限プラン", "契約期間・違約金なし", "楽天ポイント払い可能"], bestFor: "楽天経済圏ユーザー・縛りを避けたい人。" },
  { name: "ahamoポイ活", type: "大容量モバイル", rate: "月額3,300円〜（100GB+ポイント還元）", points: ["SIM1枚で自宅・外でも使える", "契約期間なし・事務手数料無料", "dポイント還元で実質値引き"], bestFor: "月100GB程度で十分なライトユーザー。" },
];

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[
        { name: "ホーム", url: siteConfig.url },
        { name: "ガイド", url: `${siteConfig.url}/guide` },
        { name: "一人暮らしにおすすめのWiFi5選", url: `${siteConfig.url}/guide/wifi-for-one-person` },
      ]} />
      <ArticleJsonLd headline="【2026年最新】一人暮らしにおすすめのWiFi5選" description="一人暮らし向けWiFi5選を徹底比較。工事不要・契約期間なし・月額料金で選ぶ。" url={`${siteConfig.url}/guide/wifi-for-one-person`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>一人暮らしにおすすめのWiFi</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">10分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】一人暮らしにおすすめのWiFi5選｜工事不要・契約期間なし</h1>
        <p className="text-muted leading-relaxed">引越しが多い一人暮らしには、工事不要・契約期間なし・即日使える置くだけWiFiが最適。料金・通信速度・縛りの有無で5サービスを徹底比較します。</p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm">
          <p><span className="font-bold">外でも使いたい → WiMAX+5G</span></p>
          <p><span className="font-bold">在宅勤務・安定重視 → ドコモhome 5G</span></p>
          <p><span className="font-bold">SoftBankユーザー → SoftBank Air</span></p>
          <p><span className="font-bold">楽天ユーザー・縛り嫌い → Rakuten Turbo</span></p>
          <p><span className="font-bold">ライトユーザー → ahamoポイ活</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">サービス比較</h2>
        <div className="space-y-4">
          {services.map((s) => (
            <div key={s.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold">{s.name}</h3>
                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{s.type}</span>
              </div>
              <p className="text-sm text-muted mb-3">{s.rate}</p>
              <ul className="space-y-1 mb-3">
                {s.points.map((p) => (<li key={p} className="text-sm flex items-start gap-2"><span className="text-primary mt-0.5">✓</span>{p}</li>))}
              </ul>
              <p className="text-xs bg-background rounded-lg px-3 py-2"><span className="font-bold">おすすめ：</span>{s.bestFor}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
        <div className="space-y-3">
          {faqItems.map((f) => (
            <div key={f.question} className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold text-sm mb-2">Q. {f.question}</h3>
              <p className="text-sm text-muted">A. {f.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <ComparisonTableCTA services={[
        { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "Web・AI", price: "月額制", badge: "おすすめ" },
        { name: "Aidemy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "AI特化", price: "月額制" },
        { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証", price: "月額制" },
      ]} />

      <section className="mt-10">
        <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/wifi-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
            <div className="text-xs text-muted mb-1">比較</div>
            <div className="font-bold text-sm">WiFi徹底比較</div>
          </Link>
          <Link href="/guide/wifi-ranking-2026" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
            <div className="text-xs text-muted mb-1">ランキング</div>
            <div className="font-bold text-sm">WiFiランキング2026</div>
          </Link>
        </div>
      </section>
    </div>
  );
}
