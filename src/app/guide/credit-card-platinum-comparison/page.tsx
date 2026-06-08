import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";

const TITLE = "プラチナ・ゴールドカード徹底比較【2026年最新】年会費・特典・ステータスで厳選5枚";
const DESC = "アメックス・JCB・三井住友・楽天のプラチナ/ゴールドカードを年会費・ポイント還元・空港ラウンジ・コンシェルジュ・旅行保険で徹底比較。ステータスと実利のバランスから最適な1枚を解説します。";
const URL = `${siteConfig.url}/guide/credit-card-platinum-comparison`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
};

const cards = [
  { name: "アメックス・ゴールド・プリファード", fee: "39,600円", rate: "1.0%〜", perks: "コンシェルジュ・プライオリティパス・ホテル特典", who: "旅行や出張が多い人の本命" },
  { name: "JCBゴールド ザ・プレミア", fee: "11,000円→招待制プレミアで16,500円", rate: "0.5〜10%", perks: "ラウンジ・京都ラウンジ・グルメ優待", who: "国内利用でステータスを求める人" },
  { name: "三井住友カード プラチナプリファード", fee: "33,000円", rate: "1.0〜15%", perks: "プリファードストア最大15%還元", who: "特定店舗利用が多く還元率重視派" },
  { name: "楽天プレミアムカード", fee: "11,000円", rate: "1.0〜5.0%", perks: "プライオリティパス・楽天SPU", who: "年会費を抑えつつプライオリティパスが欲しい人" },
  { name: "ダイナースクラブ プレミアム", fee: "143,000円", rate: "1.0%〜", perks: "プライオリティパス/ダイナースラウンジ・コンパニオン特典", who: "最上位のステータスを重視する層" },
];

const faqItems = [
  { question: "ゴールドとプラチナの違いは？", answer: "ゴールドは年会費1〜3万円程度でラウンジや保険などの基本特典が揃うカード、プラチナはコンシェルジュサービスや高級ホテル/レストラン優待など、時間を買うようなホスピタリティが付帯する上位カードです。" },
  { question: "年会費を元が取れるかの目安は？", answer: "プライオリティパスを年5〜6回使う、コンシェルジュを月1で使う、無料宿泊特典を1回使う、のいずれかで十分ペイする設計のカードが多いです。" },
  { question: "審査が不安です。初めての上位カードは何がいい？", answer: "楽天プレミアムカードや三井住友ゴールド(NL)年間100万円修行が比較的通りやすいと言われます。インビテーション制カードはまず下位カードで実績を作るのが王道です。" },
  { question: "家族カードは発行すべき？", answer: "プライオリティパスの同伴無料や家族特典がある場合は発行するとお得。アメックスやJCBでは家族カードの年会費が割安または無料です。" },
];

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[
        { name: "ホーム", url: siteConfig.url },
        { name: "ガイド", url: `${siteConfig.url}/guide` },
        { name: "プラチナ・ゴールドカード比較", url: URL },
      ]} />
      <ArticleJsonLd headline={TITLE} description={DESC} url={URL} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>プラチナ・ゴールドカード比較</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{TITLE}</h1>
      <p className="text-muted leading-relaxed mb-8">
        プラチナカードやゴールドカードは「ステータスの象徴」というイメージが強いですが、実は年会費以上のリターンを得られる実益カードでもあります。本記事ではアメックス・JCB・三井住友・楽天・ダイナースの主要5枚を対象に、年会費・ポイント還元率・空港ラウンジ・コンシェルジュサービス・旅行保険・招待制特典まで徹底比較し、あなたに最適な1枚を解説します。年会費を「払って損する」カードではなく、「賢く元を取る」ための選び方を具体例付きで紹介します。
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. 主要5枚の比較表</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">カード</th>
                <th className="border border-card-border p-3 text-left">年会費</th>
                <th className="border border-card-border p-3 text-left">還元率</th>
                <th className="border border-card-border p-3 text-left">主な特典</th>
              </tr>
            </thead>
            <tbody>
              {cards.map(c => (
                <tr key={c.name}>
                  <td className="border border-card-border p-3 font-medium bg-card-bg">{c.name}</td>
                  <td className="border border-card-border p-3">{c.fee}</td>
                  <td className="border border-card-border p-3">{c.rate}</td>
                  <td className="border border-card-border p-3">{c.perks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mt-2">※2026年4月時点の公表情報。キャンペーンにより変動します。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. 各カードの詳細レビュー</h2>
        <div className="space-y-5">
          {cards.map((c, i) => (
            <div key={c.name} className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold text-lg mb-2">{i+1}. {c.name}</h3>
              <p className="text-sm text-muted leading-relaxed mb-2"><span className="font-medium text-foreground">年会費：</span>{c.fee}　<span className="font-medium text-foreground">還元率：</span>{c.rate}</p>
              <p className="text-sm text-muted leading-relaxed mb-2"><span className="font-medium text-foreground">主な特典：</span>{c.perks}</p>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-3 text-sm">
                <span className="font-bold">こんな人におすすめ：</span>{c.who}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">3. 年会費の元を取るシミュレーション</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-5 space-y-3 text-sm text-muted leading-relaxed">
          <p>例えば楽天プレミアムカード（年会費11,000円）は、プライオリティパスで海外空港ラウンジを年2〜3回利用するだけで元が取れます（通常1回35ドル程度）。さらに楽天市場でのSPU+1倍効果が加わるため、年間50万円の楽天利用で+5,000ポイント相当となり、実質無料以上になります。</p>
          <p>アメックス・ゴールド・プリファードは年会費39,600円と高めですが、「メンバーシップ・リワード・プラス」と組み合わせると旅行代金の実質還元率が3%前後に到達します。年200万円以上を決済するヘビーユーザーなら、ポイントと無料宿泊特典で年会費の2倍以上のリターンを得ることも珍しくありません。</p>
          <p>三井住友プラチナプリファードは「プリファードストア」で最大15%還元を狙えるため、Expedia・ETC・コンビニ・Apple Payを多用する方なら、年利用200万円程度で年会費33,000円を上回るポイントを獲得できます。</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">4. 選び方の4ステップ</h2>
        <ol className="space-y-3 text-sm text-muted leading-relaxed list-decimal list-inside">
          <li><strong>年間決済額を把握する：</strong>年200万円未満ならゴールド、200万円以上ならプラチナが元を取りやすい。</li>
          <li><strong>使う特典を絞る：</strong>空港ラウンジ・コンシェルジュ・ホテル特典・還元率の中で、自分が必ず使うものはどれか？</li>
          <li><strong>経済圏とのシナジーを考える：</strong>楽天・Amazon・PayPay・dなど、よく使う経済圏と相性の良いカードを選ぶ。</li>
          <li><strong>招待制を狙うなら下位カードから：</strong>JCBやアメックスはまず下位カードで実績を積むのが定石です。</li>
        </ol>
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
        <h2 className="text-lg font-bold mb-2">年会費無料カードと比較したい方へ</h2>
        <p className="text-sm text-muted mb-3">まずは年会費無料カードから選びたい方には、還元率重視の5枚を徹底比較した記事もあります。</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/guide/credit-card-comparison" className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors">クレジットカード徹底比較</Link>
          <a href="/guide/credit-card-comparison" target="_blank" rel="nofollow sponsored noopener noreferrer" className="inline-block border border-card-border px-6 py-2 rounded-full text-sm font-medium hover:bg-card-bg transition-colors">楽天カード公式</a>
        </div>
      </section>

      <GuideRelatedLinks currentSlug="credit-card-platinum-comparison" />
    </div>
  );
}
