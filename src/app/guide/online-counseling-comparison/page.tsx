import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】オンラインカウンセリング比較おすすめ5選｜料金・特徴を徹底解説",
  description:
    "オンラインカウンセリングサービス5社を料金・カウンセラー数・対応形式で徹底比較。在宅で相談できる安心サービスの選び方を解説します。",
  alternates: { canonical: `${siteConfig.url}/guide/online-counseling-comparison` },
};

const faqItems = [
  {
    question: "オンラインカウンセリングは効果がありますか？",
    answer:
      "対面と同等の効果があると国内外の研究で報告されています。通院時間や交通費が不要、自宅から気軽に相談できる点が継続のしやすさにつながります。",
  },
  {
    question: "保険は適用されますか？",
    answer:
      "民間のオンラインカウンセリングは原則自費です。医療行為としての精神科診療を希望する場合は、オンライン診療に対応した医療機関を選びましょう。",
  },
  {
    question: "料金の相場はどれくらいですか？",
    answer:
      "テキストチャット型なら月額3,000〜8,000円、ビデオ通話型なら1回50分5,000〜10,000円が相場です。サブスク型なら長期利用ほどお得になります。",
  },
  {
    question: "プライバシーは守られますか？",
    answer:
      "信頼できるサービスは通信を暗号化し、カウンセラーには守秘義務があります。利用前にプライバシーポリシーと運営会社情報を必ず確認しましょう。安全な通信環境としてVPNの併用もおすすめです。",
  },
];

const services = [
  { name: "cotree（コトリー）", type: "ビデオ通話型", price: "1回5,500円〜", features: ["臨床心理士・公認心理師が在籍", "事前マッチング診断あり", "土日夜間も対応"], bestFor: "実績のあるカウンセラーにじっくり話を聞いてほしい人。" },
  { name: "Unlace（アンレース）", type: "テキストチャット型", price: "月額6,600円〜", features: ["24時間メッセージ送信可", "返信は1日2回まで", "継続しやすいサブスク制"], bestFor: "対面で話すのが苦手、文字でゆっくり整理したい人。" },
  { name: "メザニン", type: "ビデオ・電話型", price: "1回6,600円〜", features: ["国家資格保有者が中心", "ビジネスパーソン向け", "メンタル不調の予防にも"], bestFor: "仕事のストレスや人間関係を整理したい社会人。" },
  { name: "うららか相談室", type: "総合型", price: "1回4,400円〜", features: ["メール・電話・ビデオ・対面から選択", "300名以上のカウンセラー", "24時間予約可能"], bestFor: "自分に合う相談形式を選びたい人、複数のカウンセラーから選びたい人。" },
  { name: "Awarefy（アウェアファイ）", type: "アプリ型AIカウンセリング", price: "月額1,600円〜", features: ["AIによる感情記録・認知行動療法", "自分のペースで継続可能", "プロカウンセラー追加オプション"], bestFor: "まずは安価にセルフケアから始めたい人。" },
];

export default function OnlineCounselingComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "オンラインカウンセリング比較", url: `${siteConfig.url}/guide/online-counseling-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>オンラインカウンセリング比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】オンラインカウンセリング比較おすすめ5選｜料金・特徴を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          仕事のストレス・人間関係・将来の不安など、誰にも話せない悩みをプロに相談できるオンラインカウンセリング。自宅から気軽に利用できる人気5サービスを料金・形式・カウンセラーの質で徹底比較しました。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">じっくりビデオで話す → cotree</span></p>
          <p><span className="font-bold">文字でゆっくり相談 → Unlace</span></p>
          <p><span className="font-bold">形式を自由に選ぶ → うららか相談室</span></p>
          <p><span className="font-bold">セルフケアから → Awarefy</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">オンラインカウンセリングのメリット</h2>
        <p className="text-muted leading-relaxed mb-4">
          自宅から相談できるため、通院のハードルや人目を気にせず利用できます。土日や深夜も対応するサービスが多く、忙しい社会人にも続けやすいのが大きな利点です。料金も対面より安く抑えられる傾向があり、テキストチャット型なら月額数千円から始められます。プライバシー面でも、自宅のWi-Fi環境を整え、必要に応じてVPNを併用すれば通信内容の盗聴リスクも回避できます。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ5サービスの詳細</h2>
        <div className="space-y-6">
          {services.map((s, idx) => (
            <div key={s.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{s.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">{s.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">料金：{s.price}</p>
              <ul className="space-y-1 mb-4">
                {s.features.map((f) => (
                  <li key={f} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{f}</li>
                ))}
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{s.bestFor}</p>
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
            オンラインカウンセリングは「形式」「料金」「カウンセラーの資格」で選ぶのがポイント。プロに相談するハードルが下がり、心の健康を保つセルフケアの選択肢が広がります。通信のプライバシーを守るために、自宅のネット環境とセキュリティ対策（VPN利用など）も併せて整えておくと安心です。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">安心の通信環境を整えるVPN</h2>
        <ComparisonTableCTA
          services={[
            {
              name: "MillenVPN",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+41V7ZM+3JTE+HV7V6",
              highlight: "国産で日本語サポート充実",
              price: "月額制",
              badge: "国産",
            },
            {
              name: "NordVPN",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+3U4L4I+3YFI+60OXD",
              highlight: "世界最大手・高セキュリティ",
              price: "月額制",
            },
            {
              name: "ExpressVPN",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+3WIBJM+5JSS+5YRHE",
              highlight: "業界最速クラスの通信速度",
              price: "月額制",
            },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/vpn-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">VPN比較</span>
            <p className="text-xs text-muted mt-1">通信のプライバシーを守る</p>
          </Link>
          <Link href="/guide/insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ネット保険比較</span>
            <p className="text-xs text-muted mt-1">医療費の備えを見直す</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
