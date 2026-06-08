import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】初めて作るゴールドカードおすすめ5選｜年会費・特典で比較",
  description:
    "ゴールドカードデビューにおすすめの5枚を徹底比較。年会費・還元率・空港ラウンジ・旅行保険で選ぶ。三井住友カード ゴールド(NL)、JCB GOLD、エポスゴールドカード、楽天ゴールドカード、dカード GOLDを解説。",
  alternates: { canonical: `${siteConfig.url}/guide/credit-card-for-gold-beginner` },
};

const faqItems = [
  { question: "ゴールドカードを持つメリットは？", answer: "空港ラウンジ無料利用、海外・国内旅行傷害保険の自動付帯、ショッピング保険、高還元率、ステータス性など特典が豊富。年100万円以上の決済がある人なら、還元ポイントだけで年会費の元が取れるケースが多く、実質無料でプレミアムな特典が使えます。" },
  { question: "ゴールドカード初心者におすすめの1枚は？", answer: "三井住友カード ゴールド(NL)が鉄板です。年間100万円以上利用で翌年以降の年会費が永年無料になり、100万円利用時に1万ポイントのボーナスも付与。空港ラウンジ・旅行保険も付帯し、実質無料で持てる最強のエントリーゴールドカードです。" },
  { question: "ゴールドカードの審査は厳しい？", answer: "一般的に年収300万円以上、勤続2〜3年以上が目安ですが、最近のゴールドカードは20代向けのヤングゴールドや、審査が通りやすい楽天ゴールドカードなど選択肢が豊富。エポスゴールドカードはインビテーション経由なら年会費永年無料で持てます。" },
  { question: "年会費に見合うかどうかの判断基準は？", answer: "年間100万円以上カード決済する人なら確実に元が取れます。公共料金・スマホ代・サブスク・食費などをカード集約すれば月8万円は固定で使えるはず。加えて出張や旅行で空港ラウンジを年3回以上使うなら、それだけで年会費の元が取れる計算です。" },
];

const services = [
  { name: "三井住友カード ゴールド(NL)", type: "ナンバーレス最強カード", rate: "年会費5,500円(条件で永年無料)", points: ["年100万円利用で翌年以降年会費永年無料", "対象コンビニ・飲食店で最大7%還元", "空港ラウンジ・旅行保険付帯"], bestFor: "ゴールドデビュー全般・年100万円以上使う人。" },
  { name: "JCB GOLD", type: "プロパー国際ブランド", rate: "年会費11,000円", points: ["JCBプロパーでステータス性抜群", "海外旅行保険最高1億円", "JCB GOLDラウンジ(東京駅等)も利用可"], bestFor: "ステータスとサポート品質を重視する人。" },
  { name: "エポスゴールドカード", type: "インビテーションで永年無料", rate: "年会費5,000円(インビ時永年無料)", points: ["マルイ系列のエポス上位カード", "選べるポイントアップショップで還元率UP", "海外旅行保険自動付帯"], bestFor: "年会費を払わずゴールドを持ちたい人。" },
  { name: "楽天ゴールドカード", type: "楽天経済圏", rate: "年会費2,200円", points: ["年会費が業界最安クラス", "楽天市場でポイント+1倍", "国内空港ラウンジ年2回まで無料"], bestFor: "楽天経済圏ユーザーでゴールド入門したい人。" },
  { name: "dカード GOLD", type: "ドコモユーザー特化", rate: "年会費11,000円", points: ["ドコモ料金10%還元で年会費の元が取れる", "最高10万円のケータイ補償", "空港ラウンジ・国内外旅行保険付帯"], bestFor: "ドコモの料金が月1万円以上の人。" },
];

export default function CreditCardForGoldBeginnerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "初めてのゴールドカード", url: `${siteConfig.url}/guide/credit-card-for-gold-beginner` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】初めて作るゴールドカードおすすめ5選" description="ゴールドカードデビューにおすすめの5枚を年会費・特典・還元率で徹底比較。" url={`${siteConfig.url}/guide/credit-card-for-gold-beginner`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>初めてのゴールドカード</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】初めて作るゴールドカードおすすめ5選｜年会費・特典で比較
        </h1>
        <p className="text-muted leading-relaxed">
          ゴールドカードは「ステータスカード」というイメージが強いですが、最近は年会費実質無料で持てるカードや、年会費2,000円台の格安ゴールドなど選択肢が多様化。空港ラウンジ・旅行保険・高還元ポイントなど、一般カードにはない特典が豊富で、条件次第で一般カードよりお得に使えます。初めてのゴールドカードにおすすめの5枚を徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">実質無料で持ちたい → 三井住友カード ゴールド(NL)</span></p>
          <p><span className="font-bold">ステータス重視 → JCB GOLD</span></p>
          <p><span className="font-bold">インビで永年無料狙い → エポスゴールドカード</span></p>
          <p><span className="font-bold">楽天ユーザー → 楽天ゴールドカード</span></p>
          <p><span className="font-bold">ドコモユーザー → dカード GOLD</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">ゴールドカード選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          ゴールドカードは「年会費を特典で回収できるか」が選ぶ基準です。三井住友カード ゴールド(NL)は年100万円利用で翌年以降永年無料、dカード GOLDはドコモ料金10%還元で月1万円使えば年会費以上還元されます。楽天ゴールドカードは年会費2,200円と格安で、エポスゴールドカードはインビテーション経由で年会費永年無料。ステータス性重視ならJCB GOLDやアメックスゴールドも選択肢ですが、コスパ重視なら実質無料系がベストです。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめゴールドカード5枚の詳細</h2>
        <div className="space-y-6">
          {services.map((b, idx) => (
            <div key={b.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{b.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{b.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">年会費：{b.rate}</p>
              <ul className="space-y-1 mb-4">
                {b.points.map((pt) => (
                  <li key={pt} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{pt}</li>
                ))}
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{b.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted mt-3">※ 情報は2026年4月時点のものです。最新の年会費・特典は各カード公式サイトでご確認ください。</p>
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
            ゴールドカードは年会費以上の価値を得られるかが肝心。普段使いをカード1枚に集約して年100万円以上決済するなら、三井住友カード ゴールド(NL)で永年無料化するのが最強の戦略。携帯キャリアや利用経済圏に合わせて選ぶのもコスパ重視の正攻法です。カードを増やす前に家計簿で支出を可視化しておくと、自分に合った1枚が見えてきます。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/credit-card-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">クレジットカード比較</span>
            <p className="text-xs text-muted mt-1">一般カードからゴールドまで</p>
          </Link>
          <Link href="/guide/credit-card-platinum-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">プラチナカード比較</span>
            <p className="text-xs text-muted mt-1">次のステップに</p>
          </Link>
          <Link href="/guide/credit-card-ranking-2026" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">クレジットカードランキング</span>
            <p className="text-xs text-muted mt-1">人気カードをまとめて確認</p>
          </Link>
          <Link href="/guide/credit-card-for-students" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">学生向けカード比較</span>
            <p className="text-xs text-muted mt-1">家族や若年層の1枚目選び</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
