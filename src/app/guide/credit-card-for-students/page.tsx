import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】学生向けクレジットカードおすすめ5選｜18歳から作れる1枚目",
  description:
    "18歳から発行可能な学生向けクレカ5選を徹底比較。年会費無料・ポイント還元・海外旅行保険で選ぶ。",
  alternates: { canonical: `${siteConfig.url}/guide/credit-card-for-students` },
};

const faqItems = [
  { question: "学生でも本当にクレジットカードを作れる？", answer: "はい。高校生を除く18歳以上であれば、アルバイト収入がなくても学生専用カードなら審査通過可能です。親権者の同意が必要なケースはありますが、保護者の信用情報が参照されるため審査は比較的通りやすいのが特徴です。" },
  { question: "1枚目はどう選べばいい？", answer: "年会費無料・還元率1%以上・基本的な付帯保険の3条件を満たすカードが鉄板。三井住友カード(NL)やJCB CARD Wのような若年層向けの還元率アップ特典があるカードが特におすすめです。" },
  { question: "海外旅行に行く予定があるなら？", answer: "海外旅行傷害保険が自動付帯または利用付帯のカードを選びましょう。エポスカードは年会費無料で海外旅行傷害保険が自動付帯。留学・卒業旅行を考えているなら必須レベルのカードです。" },
  { question: "リボ払いの初期設定には要注意？", answer: "一部カードは申込時に「自動リボ」や「ショッピング1回払い以外」が初期設定になっていることがあります。申込後に必ずマイページで支払方法を「1回払い」に変更し、リボ手数料（年15%前後）を回避しましょう。" },
];

const services = [
  { name: "三井住友カード(NL)学生", type: "王道スタンダード", rate: "年会費永年無料／還元率0.5〜7%", points: ["対象コンビニ・飲食店で最大7%還元", "ナンバーレスで安全性が高い", "Apple Pay・Google Pay対応"], bestFor: "コンビニ・マクドをよく使う学生。" },
  { name: "JCB CARD W", type: "高還元率", rate: "年会費永年無料／還元率1.0〜10.5%", points: ["18〜39歳限定・基本還元率1%", "Amazon・スタバで高還元", "家族カードも無料"], bestFor: "ネットショッピング・カフェ利用が多い学生。" },
  { name: "エポスカード", type: "海外旅行に強い", rate: "年会費永年無料／還元率0.5%", points: ["海外旅行傷害保険が自動付帯", "マルイで年4回10%OFF", "即日発行可能（店舗受取）"], bestFor: "留学・卒業旅行を控えた学生。" },
  { name: "楽天カード アカデミー", type: "楽天経済圏", rate: "年会費永年無料／還元率1.0〜3.0%", points: ["楽天市場で常時3%以上還元", "学生限定の在学中特典あり", "楽天モバイル・楽天銀行と併用でさらに得"], bestFor: "楽天経済圏を活用したい学生。" },
  { name: "ライフカード学生", type: "初年度還元アップ", rate: "年会費永年無料／還元率0.5〜1.5%", points: ["誕生日月は還元率3倍", "海外利用は5%キャッシュバック", "学生専用の問い合わせ窓口あり"], bestFor: "海外留学・誕生日月の大型買物がある学生。" },
];

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[
        { name: "ホーム", url: siteConfig.url },
        { name: "ガイド", url: `${siteConfig.url}/guide` },
        { name: "学生向けクレジットカードおすすめ5選", url: `${siteConfig.url}/guide/credit-card-for-students` },
      ]} />
      <ArticleJsonLd headline="【2026年最新】学生向けクレジットカードおすすめ5選" description="18歳から発行可能な学生向けクレカ5選を徹底比較。年会費無料・ポイント還元・海外旅行保険で選ぶ。" url={`${siteConfig.url}/guide/credit-card-for-students`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>学生向けクレジットカード</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">10分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】学生向けクレジットカードおすすめ5選｜18歳から作れる1枚目</h1>
        <p className="text-muted leading-relaxed">18歳の誕生日から申し込める学生向けクレジットカード5枚を、年会費・還元率・付帯保険・使い勝手で徹底比較。ライフスタイル別に「1枚目にベスト」な選択肢を解説します。</p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm">
          <p><span className="font-bold">王道・バランス型 → 三井住友カード(NL)学生</span></p>
          <p><span className="font-bold">高還元率 → JCB CARD W</span></p>
          <p><span className="font-bold">留学・海外旅行 → エポスカード</span></p>
          <p><span className="font-bold">楽天ユーザー → 楽天カード アカデミー</span></p>
          <p><span className="font-bold">誕生日月の大型買物 → ライフカード学生</span></p>
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
          <Link href="/guide/credit-card-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
            <div className="text-xs text-muted mb-1">比較</div>
            <div className="font-bold text-sm">クレジットカード徹底比較</div>
          </Link>
          <Link href="/guide/credit-card-for-gold-beginner" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
            <div className="text-xs text-muted mb-1">次の一枚</div>
            <div className="font-bold text-sm">初めてのゴールドカード</div>
          </Link>
        </div>
      </section>
    </div>
  );
}
