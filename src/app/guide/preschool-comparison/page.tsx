import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】幼児教材・通信教育比較5選｜こどもちゃれんじ・ポピー・Z会・スマイルゼミ・ワンダーボックス",
  description:
    "0〜6歳向け幼児通信教育5社を徹底比較。こどもちゃれんじ・幼児ポピー・Z会幼児・スマイルゼミ幼児・ワンダーボックスの料金・特徴を解説。",
  alternates: { canonical: `${siteConfig.url}/guide/preschool-comparison` },
};

const faqItems = [
  { question: "幼児教材は何歳から始めるべき？", answer: "1歳前後から始める家庭が増えています。脳の発達が著しい時期に適切な刺激を与えることが重要です。" },
  { question: "費用相場は？", answer: "月1,500〜4,500円が相場です。教材の充実度やデジタル/紙の違いで変わります。" },
  { question: "兄弟割引はある？", answer: "ほぼ全社で兄弟割引やポイント還元があります。" },
  { question: "途中退会できる？", answer: "可能です。最低継続期間がないサービスが多いですが、解約タイミングは事前確認しましょう。" },
];

const services = [
  { name: "こどもちゃれんじ", type: "総合", feature: "業界最大手のベネッセ", points: ["しまじろうで人気", "0〜6歳まで対応", "知育玩具豊富"], bestFor: "総合的な学びを与えたい家庭。" },
  { name: "幼児ポピー", type: "コスパ", feature: "業界最安級", points: ["月額1,500円台〜", "シンプルで続けやすい", "全国組合運営"], bestFor: "コスパ重視。" },
  { name: "Z会幼児", type: "ハイレベル", feature: "ハイレベル思考力", points: ["難関校で評価される", "親子で取り組む形式", "添削指導あり"], bestFor: "じっくり考える力を育てたい家庭。" },
  { name: "スマイルゼミ幼児", type: "タブレット", feature: "タブレット学習特化", points: ["紙不要でかさばらない", "自動採点・進捗管理", "小学生まで継続可"], bestFor: "デジタル学習を取り入れたい家庭。" },
  { name: "ワンダーボックス", type: "STEAM", feature: "創造力を育てるSTEAM教材", points: ["プログラミング・アート", "アプリ＋紙のキット", "海外でも人気"], bestFor: "STEAM教育に興味がある家庭。" },
];

export default function PreschoolComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "幼児教材比較", url: `${siteConfig.url}/guide/preschool-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】幼児教材・通信教育比較5選" description="こどもちゃれんじ・ポピー・Z会・スマイルゼミ・ワンダーボックス徹底比較。" url={`${siteConfig.url}/guide/preschool-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>幼児教材比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">10分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】幼児教材・通信教育比較5選</h1>
        <p className="text-muted leading-relaxed">幼児期の学習習慣作りに人気の通信教育5社を徹底比較。家庭学習の第一歩に最適なものを選びましょう。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ幼児教材5選</h2>
        <div className="space-y-6">
          {services.map((s, idx) => (
            <div key={s.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{s.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{s.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">{s.feature}</p>
              <ul className="space-y-1 mb-4">
                {s.points.map((pt) => (
                  <li key={pt} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{pt}</li>
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
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/kids-lesson-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">子供向け習い事比較</span>
            <p className="text-xs text-muted mt-1">英会話・プログラミング</p>
          </Link>
          <Link href="/guide/tutoring-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">学習塾比較</span>
            <p className="text-xs text-muted mt-1">小学生以降</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
