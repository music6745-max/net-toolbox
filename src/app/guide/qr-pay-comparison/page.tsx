import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】QRコード決済おすすめ5選｜還元率・加盟店・キャンペーンを徹底比較",
  description:
    "PayPay・楽天ペイ・d払い・au PAY・メルペイの5大QRコード決済を還元率・加盟店数・使いやすさで比較。",
  alternates: { canonical: `${siteConfig.url}/guide/qr-pay-comparison` },
};

const faqItems = [
  { question: "一番お得なQRコード決済は？", answer: "還元率だけなら楽天ペイ(楽天カード併用で1.5%)。加盟店の多さならPayPay。自分の経済圏に合わせて選ぶのが最もお得です。" },
  { question: "QRコード決済は安全ですか？", answer: "大手5社は本人確認・不正利用補償制度を整備しています。パスワード・生体認証設定を忘れずに行いましょう。" },
  { question: "複数のQRコード決済を使い分けるべき？", answer: "メインを1つ決めてポイント集中がおすすめ。サブとしてPayPayを持つと加盟店カバー率が上がります。" },
];

const services = [
  { name: "PayPay", type: "国内シェアNo.1", rate: "基本還元率0.5%〜1.5%", points: ["加盟店410万箇所以上で圧倒的利便性", "Yahoo!ショッピング連携で還元率アップ", "PayPayあと払いで還元率最大1.5%"], bestFor: "加盟店の多さ重視" },
  { name: "楽天ペイ", type: "楽天経済圏", rate: "基本還元率1.0%〜1.5%", points: ["楽天カード紐付けで常時1.5%還元", "楽天ポイント払い可", "期間限定ポイント消化に便利"], bestFor: "楽天ユーザー" },
  { name: "d払い", type: "ドコモ経済圏", rate: "基本還元率0.5%〜1.0%", points: ["dカード併用で還元率1.5%", "dポイントスーパー還元プログラム", "ドコモ料金から支払い可"], bestFor: "ドコモユーザー" },
  { name: "au PAY", type: "au経済圏", rate: "基本還元率0.5%", points: ["au PAYカード併用で1.5%還元", "Pontaポイント連携", "たぬきの吉日キャンペーン"], bestFor: "auユーザー" },
  { name: "メルペイ", type: "メルカリ連携", rate: "基本還元率なし(キャンペーン型)", points: ["メルカリ売上金で支払い可", "スマート払い(後払い)機能", "iD決済にも対応で加盟店多い"], bestFor: "メルカリユーザー" },
];

export default function QrPayComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "QRコード決済比較", url: `${siteConfig.url}/guide/qr-pay-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】QRコード決済おすすめ5選" description="PayPay・楽天ペイ・d払い・au PAY・メルペイの5大QRコード決済を還元率・加盟店数・使いやすさで比較。" url={`${siteConfig.url}/guide/qr-pay-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>QRコード決済比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">10分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】QRコード決済おすすめ5選｜還元率・加盟店・キャンペーンを徹底比較
        </h1>
        <p className="text-muted leading-relaxed">
          QRコード決済は日常の支払いでポイントが貯まるキャッシュレス手段。2026年現在、PayPayが加盟店数でリードしつつ、楽天ペイは還元率で優位に立っています。自分のスマホキャリアや普段使うサービスに合わせて選ぶのが最もお得なポイント活用法です。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">加盟店の多さ重視 → PayPay</span></p>
          <p><span className="font-bold">楽天ユーザー → 楽天ペイ</span></p>
          <p><span className="font-bold">ドコモユーザー → d払い</span></p>
          <p><span className="font-bold">auユーザー → au PAY</span></p>
          <p><span className="font-bold">メルカリユーザー → メルペイ</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">QRコード決済の選び方</h2>
        <p className="text-muted leading-relaxed mb-4">
          QRコード決済を選ぶポイントは「基本還元率」「加盟店の多さ」「自分の経済圏との相性」の3つです。還元率はクレジットカードとの併用で大きく変わるため、メインのクレカと相性の良いサービスを選ぶのが鉄則。また、各社定期的にキャンペーンを実施しているため、サブとしてもう1つ持っておくと取りこぼしを防げます。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">サービス比較</h2>
        <div className="space-y-6">
          {services.map((s, idx) => (
            <div key={s.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{s.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{s.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">還元率：{s.rate}</p>
              <ul className="space-y-1 mb-4">
                {s.points.map((p) => (
                  <li key={p} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{p}</li>
                ))}
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{s.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted mt-3">※ 情報は2026年4月時点のものです。最新の還元率・キャンペーンは各サービスの公式サイトでご確認ください。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">よくある質問（FAQ）</h2>
        <div className="space-y-4">
          {faqItems.map((f) => (
            <div key={f.question} className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold text-sm mb-2">Q. {f.question}</h3>
              <p className="text-sm text-muted leading-relaxed">A. {f.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">まとめ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <p className="text-muted leading-relaxed">
            QRコード決済は自分の経済圏に合わせて1つメインを決め、ポイントを集中させるのが最も効率的です。加盟店カバー率ではPayPayが圧倒的ですが、楽天ペイはカード併用で常時1.5%還元と還元率で優位。キャリア経済圏(ドコモ・au)のユーザーは対応する決済アプリを使うことで、通信費との合算やポイント二重取りが可能になります。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/credit-card-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">クレジットカード比較</span>
            <p className="text-xs text-muted mt-1">QR決済と相性の良いカード選び</p>
          </Link>
          <Link href="/guide/paypay-vs-rakutenpay" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">PayPay vs 楽天ペイ</span>
            <p className="text-xs text-muted mt-1">2大サービスを徹底比較</p>
          </Link>
          <Link href="/guide/bank-account-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ネット銀行口座比較</span>
            <p className="text-xs text-muted mt-1">チャージ用口座も整理</p>
          </Link>
          <Link href="/guide/credit-card-ranking-2026" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">クレジットカードランキング</span>
            <p className="text-xs text-muted mt-1">ポイント還元をまとめて確認</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
