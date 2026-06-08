import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";

const TITLE = "QRコード決済徹底比較【2026年】PayPay・楽天ペイ・d払い・au PAYどれが得？";
const DESC = "PayPay・楽天ペイ・d払い・au PAYの4大QRコード決済を、還元率・加盟店・チャージ方法・連携カード・キャンペーンで徹底比較。あなたに最適な決済アプリが分かります。";
const URL = `${siteConfig.url}/guide/paypay-vs-rakutenpay`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
};

const apps = [
  { name: "PayPay", fee: "無料", rate: "0.5〜1.5%（PayPayカード連携で1.5%）", stores: "約410万カ所", strong: "加盟店数日本最大、キャンペーンが頻繁" },
  { name: "楽天ペイ", fee: "無料", rate: "1.0〜1.5%（楽天カード連携で1.5%）", stores: "約600万カ所（対応加盟店）", strong: "楽天ポイント二重取り、楽天経済圏と相性◎" },
  { name: "d払い", fee: "無料", rate: "0.5〜1.0%（dカード連携でプラス）", stores: "約450万カ所", strong: "dポイント連携、ドコモユーザーにお得" },
  { name: "au PAY", fee: "無料", rate: "0.5%〜", stores: "約300万カ所", strong: "Pontaポイントと連携、au利用で特典" },
];

const faqItems = [
  { question: "どれを選べばいいか迷います。1つだけ選ぶなら？", answer: "加盟店数の多さではPayPay、還元率の安定性と経済圏の広さでは楽天ペイが有力です。日常使いでもっとも失敗しにくいのはPayPayとなります。" },
  { question: "複数のQR決済を併用するのはアリ？", answer: "大アリです。メインはPayPay、楽天市場や楽天グループでは楽天ペイ、ローソン等のPontaではau PAY、と使い分ければ還元率を最大化できます。" },
  { question: "チャージしたお金は引き出せる？", answer: "PayPay・楽天ペイ・d払いは本人確認済みであれば銀行口座への出金が可能です。手数料が発生する場合があるので要確認です。" },
  { question: "海外でも使えますか？", answer: "基本的に国内専用です。海外では各国のQR決済（AliPay、WeChat Pay等）と連携できる場合がありますが、対応は限定的です。" },
];

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[
        { name: "ホーム", url: siteConfig.url },
        { name: "ガイド", url: `${siteConfig.url}/guide` },
        { name: "QRコード決済比較", url: URL },
      ]} />
      <ArticleJsonLd headline={TITLE} description={DESC} url={URL} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>QRコード決済比較</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{TITLE}</h1>
      <p className="text-muted leading-relaxed mb-8">
        キャッシュレス決済比率が40%を超えた2026年、QRコード決済は今や日常生活に欠かせないインフラとなりました。しかし「PayPayと楽天ペイってどっちがお得？」「d払いとau PAYは何が違う？」と迷う方も多いはず。本記事では2026年4月時点の最新情報をもとに、PayPay・楽天ペイ・d払い・au PAYの4大サービスを還元率・加盟店数・使いやすさ・キャンペーンで徹底比較します。
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. 4大QR決済 比較表</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">サービス</th>
                <th className="border border-card-border p-3 text-left">還元率</th>
                <th className="border border-card-border p-3 text-left">加盟店数</th>
                <th className="border border-card-border p-3 text-left">強み</th>
              </tr>
            </thead>
            <tbody>
              {apps.map(a => (
                <tr key={a.name}>
                  <td className="border border-card-border p-3 font-medium bg-card-bg">{a.name}</td>
                  <td className="border border-card-border p-3">{a.rate}</td>
                  <td className="border border-card-border p-3">{a.stores}</td>
                  <td className="border border-card-border p-3">{a.strong}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. 各サービスの詳しい評価</h2>
        <div className="space-y-5">
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm text-muted leading-relaxed">
            <h3 className="font-bold text-foreground text-lg mb-2">PayPay</h3>
            <p>「とりあえず入れておけば間違いない」第一候補。加盟店数は410万超と圧倒的で、コンビニから個人商店まで使えない場所はほぼありません。PayPayカードと連携すれば基本1.5%還元、さらにYahoo!ショッピング・LOHACOでは最大5%以上の高還元が得られます。自治体キャンペーンやソフトバンクユーザー向けの特典も豊富です。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm text-muted leading-relaxed">
            <h3 className="font-bold text-foreground text-lg mb-2">楽天ペイ</h3>
            <p>楽天経済圏ユーザーなら必須のサービス。楽天カードからのチャージと楽天ポイントでの支払いを組み合わせれば最大1.5%還元、楽天市場の買い物もそのまま「1度の買い物で複数倍」のSPU対象になります。楽天ポイントカード提示+楽天ペイ決済で「3重取り」も狙えるため、還元率重視ならPayPay以上にお得になるケースもあります。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm text-muted leading-relaxed">
            <h3 className="font-bold text-foreground text-lg mb-2">d払い</h3>
            <p>ドコモユーザー向けの決済アプリ。dポイントと連動し、dカードからのチャージで還元率を底上げできます。ローソン・マクドナルド・マツキヨなどdポイント加盟店との相性が抜群で、ドコモの電話料金合算払いができる点も他社にない強みです。ドコモ回線利用者は迷わずインストールすべきアプリです。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm text-muted leading-relaxed">
            <h3 className="font-bold text-foreground text-lg mb-2">au PAY</h3>
            <p>auユーザーとPontaポイントを貯めたい方向け。ローソン・ケンタッキーなどPonta加盟店でポイント二重取りが可能です。au PAYカードと連携するとチャージで1%ポイント還元があり、実質還元率は1.5%前後。キャンペーン時のお得さは侮れません。</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">3. シチュエーション別おすすめ</h2>
        <div className="space-y-3">
          {[
            { scene: "コンビニでの少額決済が多い", rec: "PayPay ― どこでも使え、Yahoo!との連携キャンペーンが強力" },
            { scene: "楽天市場・楽天モバイルを使っている", rec: "楽天ペイ ― SPUとの連携で還元率が爆発的に上昇" },
            { scene: "ドコモ回線ユーザー", rec: "d払い ― dポイントとの二重取り、電話料金合算支払いも可能" },
            { scene: "ローソン・ケンタッキー利用が多い", rec: "au PAY ― Pontaポイントと連携し、特定店舗での還元率アップ" },
          ].map(s => (
            <div key={s.scene} className="bg-card-bg border border-card-border rounded-xl p-4">
              <h3 className="font-bold text-sm mb-1">{s.scene}</h3>
              <p className="text-sm text-muted">{s.rec}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">4. よくある質問（FAQ）</h2>
        <div className="space-y-4">
          {faqItems.map(item => (
            <div key={item.question} className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. {item.question}</h3>
              <p className="text-sm text-muted leading-relaxed">A. {item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-2">連携カードでさらにお得に</h2>
        <p className="text-sm text-muted mb-3">QR決済の還元率は連携するクレジットカードで大きく変わります。最適な1枚を選びましょう。</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/guide/credit-card-comparison" className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors">クレジットカード比較</Link>
          <a href="/guide/credit-card-comparison" target="_blank" rel="nofollow sponsored noopener noreferrer" className="inline-block border border-card-border px-6 py-2 rounded-full text-sm font-medium hover:bg-card-bg transition-colors">楽天カード公式</a>
        </div>
      </section>

      <GuideRelatedLinks currentSlug="paypay-vs-rakutenpay" />
    </div>
  );
}
