import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";

const TITLE = "iPhone vs Android徹底比較【2026年最新】どっちを選ぶべき？";
const DESC = "iPhoneとAndroidを価格・カメラ・バッテリー・セキュリティ・アプリ・リセールバリューで徹底比較。初心者から上級者まで自分に合った機種選びの決定版ガイドです。";
const URL = `${siteConfig.url}/guide/iphone-vs-android`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
};

const faqItems = [
  { question: "iPhoneとAndroidどちらが長持ちしますか？", answer: "OSアップデート期間で見るとiPhoneは6〜7年、Androidはメーカー差がありSamsungやGoogle Pixelで5〜7年、その他は2〜3年が多いです。ハードウェアの耐久性は大差ありません。" },
  { question: "カメラ性能はどちらが上？", answer: "iPhoneは動画撮影で圧倒的、写真は自然な色合いが強みです。Android（Pixel・Galaxy・Xiaomi）はAI処理やズーム性能で優れた機種が多く、静止画表現力はむしろ上回ることもあります。" },
  { question: "乗り換え時のデータ移行は難しい？", answer: "Apple公式『Move to iOS』やGoogle『切り替えアシスタント』で、連絡先・写真・一部アプリデータを自動移行できます。LINEトーク履歴は個別にバックアップが必要です。" },
  { question: "価格面ではどちらがお得？", answer: "エントリー〜ミドルクラスはAndroidが圧倒的に安く、3万円台でも使える機種があります。ハイエンド同士（iPhone Pro vs Galaxy S Ultra）ではほぼ同価格帯です。" },
];

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[
        { name: "ホーム", url: siteConfig.url },
        { name: "ガイド", url: `${siteConfig.url}/guide` },
        { name: "iPhone vs Android", url: URL },
      ]} />
      <ArticleJsonLd headline={TITLE} description={DESC} url={URL} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>iPhone vs Android</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{TITLE}</h1>
      <p className="text-muted leading-relaxed mb-8">
        スマホを買い替えるとき、誰もが一度は悩むのが「iPhoneにすべきかAndroidにすべきか」という問題です。2026年現在、どちらのOSも非常に完成度が高く、「どちらが優れているか」ではなく「どちらが自分の使い方に合っているか」で選ぶ時代になりました。本記事では価格・カメラ・バッテリー・セキュリティ・アプリ・リセールバリューなど重要項目を一つずつ徹底比較し、初心者から上級者まで後悔しない選び方を解説します。
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. 比較サマリー表</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">項目</th>
                <th className="border border-card-border p-3 text-left">iPhone</th>
                <th className="border border-card-border p-3 text-left">Android</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["価格帯", "10万〜25万円（ハイエンド中心）", "2万〜30万円（幅広い）"],
                ["OSアップデート", "6〜7年", "機種次第（2〜7年）"],
                ["カメラ", "動画が強い・自然な発色", "AI処理・ズームが強い機種多数"],
                ["カスタマイズ性", "制限多め", "自由度が非常に高い"],
                ["アプリ品質", "先行リリース・品質高", "種類豊富・一部は質にばらつき"],
                ["セキュリティ", "閉じたエコシステムで強固", "機種・メーカーによる差あり"],
                ["リセールバリュー", "高い（中古相場が安定）", "中〜低（一部Pixel/Galaxyは高め）"],
                ["決済・生活連携", "Apple Pay/Suica/Face ID", "Google Pay/多彩な生体認証"],
              ].map(row => (
                <tr key={row[0]}>
                  <td className="border border-card-border p-3 font-medium bg-card-bg">{row[0]}</td>
                  <td className="border border-card-border p-3">{row[1]}</td>
                  <td className="border border-card-border p-3">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. iPhoneの強みと弱み</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-5 space-y-3 text-sm text-muted leading-relaxed">
          <p>iPhoneの最大の強みは「長期サポート」と「リセールバリュー」です。購入から6年経っても最新iOSが動き、売却時には購入価格の30〜50%で売れることも珍しくありません。長期的に見れば、実質負担額はAndroidハイエンドより安くなるケースすらあります。</p>
          <p>動画撮影ではProRes/LOG対応のカメラ性能が圧倒的で、映像クリエイターの間ではiPhone一択という評価も多いです。AirDrop、iMessage、Apple Watch、AirPods、MacBookとのシームレスな連携は、一度体験すると抜け出せないほど便利です。</p>
          <p>一方で、弱点は「価格の高さ」と「カスタマイズ性の低さ」です。ホーム画面のアイコン配置やデフォルトアプリ変更など、Androidでは当たり前にできることが制限されている場面もあります。ファイル管理やUSB転送の自由度も、Android（特にUSB-C世代）には及びません。</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">3. Androidの強みと弱み</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-5 space-y-3 text-sm text-muted leading-relaxed">
          <p>Androidの魅力は「価格帯の広さ」と「自由度」です。3万円台の格安スマホから、Galaxy S Ultra・Pixel Pro・Xperia 1・AQUOS Rなどの20万円超ハイエンドまで、用途と予算に応じて選択肢が豊富。カメラは特にGoogle Pixelの計算写真やGalaxyの100倍ズームなど、iPhoneでは実現できない撮影体験が得られます。</p>
          <p>ホーム画面の自由なカスタマイズ、ウィジェットの柔軟な配置、ファイルマネージャーの自由度、外部ストレージ対応機種など、上級者向けの機能も充実しています。Google Pixelは5〜7年のOSアップデートが保証され、長期利用でも安心です。</p>
          <p>弱点は「機種ごとの品質ばらつき」と「リセールバリューの低さ」。同じAndroidでもメーカーごとにUIやサポート期間が異なり、エントリー機は2〜3年でアップデートが止まることもあります。購入時はサポート期間を必ず確認しましょう。</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">4. タイプ別おすすめ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-card-bg border border-card-border rounded-xl p-5">
            <h3 className="font-bold mb-3">iPhoneを選ぶべき人</h3>
            <ul className="text-sm text-muted space-y-2">
              <li>→ Apple製品（Mac/iPad/Apple Watch）を持っている</li>
              <li>→ 長く使ってリセールバリューも重視したい</li>
              <li>→ 動画撮影の品質にこだわる</li>
              <li>→ セキュリティ・プライバシーを最優先する</li>
            </ul>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5">
            <h3 className="font-bold mb-3">Androidを選ぶべき人</h3>
            <ul className="text-sm text-muted space-y-2">
              <li>→ 予算を抑えたい（3万〜8万円台で探したい）</li>
              <li>→ カメラのズーム・AI処理を重視する</li>
              <li>→ ホーム画面やアプリを自由にカスタマイズしたい</li>
              <li>→ ファイル操作や外部ストレージを使いたい</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">5. よくある質問（FAQ）</h2>
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
        <h2 className="text-lg font-bold mb-2">スマホ代を節約したい方へ</h2>
        <p className="text-sm text-muted mb-3">端末を選んだら通信料金の見直しも重要です。格安SIMで月額費用が大きく下がります。</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/guide/sim-comparison" className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors">格安SIM比較を見る</Link>
          <Link href="/guide/smartphone-comparison" className="inline-block border border-card-border px-6 py-2 rounded-full text-sm font-medium hover:bg-card-bg transition-colors">スマホ機種比較</Link>
        </div>
      </section>

      <GuideRelatedLinks currentSlug="iphone-vs-android" />
    </div>
  );
}
