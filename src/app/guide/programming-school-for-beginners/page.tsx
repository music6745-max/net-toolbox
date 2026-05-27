import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】未経験から学べるプログラミングスクールおすすめ5選｜挫折しない選び方",
  description:
    "完全未経験から学べるプログラミングスクール5選を徹底比較。挫折しない選び方・学習期間・転職成功率を解説。",
  alternates: { canonical: `${siteConfig.url}/guide/programming-school-for-beginners` },
};

const faqItems = [
  { question: "完全未経験でも本当に習得できますか？", answer: "はい。多くの受講生は非IT職からスタートしています。ポイントは週15〜20時間の学習時間を確保し、分からないまま進めず必ずメンターに質問することです。挫折率はメンターサポートが手厚いスクールほど低く、10〜20%に抑えられています。" },
  { question: "学習期間はどれくらい必要？", answer: "転職目的なら3〜6ヶ月、副業目的なら2〜4ヶ月が目安です。短期集中型は週30時間以上、働きながらなら週15時間×6ヶ月が現実的。延長保証のあるスクールを選ぶと安心です。" },
  { question: "無料スクールと有料スクールの違いは？", answer: "無料スクールは提携企業への就職が前提で、言語やキャリア選択肢が限定されます。有料スクールは自由度が高く、独立・フリーランス志向にも対応。20代なら無料、30代以上や副業志向なら有料が向いています。" },
  { question: "給付金対象のスクールはどれ？", answer: "DMM WEBCAMP・TechAcademy・RaiseTechなどが経済産業省リスキリング補助金または厚生労働省の専門実践教育訓練給付金の対象です。最大70%（上限56万円）が還付されるため、対象コースを選ぶと実質負担を大幅に減らせます。" },
];

const services = [
  { name: "DMM WEBCAMP", type: "転職保証", rate: "受講料 約69万円〜（給付金で最大56万円還付）", points: ["転職成功率98%・転職保証付きコース有", "未経験者専用カリキュラム設計", "20代なら受講料実質20万円前後に"], bestFor: "20代で本気で転職したい完全未経験者。" },
  { name: "TechAcademy", type: "オンライン完結", rate: "4週間17.4万円〜/12週間28.4万円〜", points: ["現役エンジニアがマンツーマンメンタリング", "30以上のコースから選べる", "給付金対象コース多数"], bestFor: "自分のペースで学びたい社会人・主婦。" },
  { name: "Aidemy Premium", type: "AI・データ分析特化", rate: "3ヶ月 52.8万円〜（給付金で最大70%還付）", points: ["Python・機械学習・生成AIに特化", "8日間全額返金保証", "先端AIエンジニアを目指せる"], bestFor: "AI・データサイエンス分野で差別化したい人。" },
  { name: "RaiseTech", type: "現場主義", rate: "4ヶ月 34.8万円〜（給付金対象）", points: ["月額課金制で中途解約しやすい", "AWS・Java・WordPressなど実務寄り", "受講期間後も質問し放題"], bestFor: "現場で使える技術をピンポイントで学びたい人。" },
  { name: "GEEK JOB", type: "完全無料（就職型）", rate: "受講料0円（提携企業への就職が条件）", points: ["20代未経験者向けの無料スクール", "最短1ヶ月でエンジニア転職可能", "違約金なしコースも選択可"], bestFor: "費用を抑えて最速で就職したい20代。" },
];

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[
        { name: "ホーム", url: siteConfig.url },
        { name: "ガイド", url: `${siteConfig.url}/guide` },
        { name: "未経験プログラミングスクールおすすめ5選", url: `${siteConfig.url}/guide/programming-school-for-beginners` },
      ]} />
      <ArticleJsonLd headline="【2026年最新】未経験から学べるプログラミングスクールおすすめ5選" description="完全未経験から学べるプログラミングスクール5選を徹底比較。挫折しない選び方・学習期間・転職成功率を解説。" url={`${siteConfig.url}/guide/programming-school-for-beginners`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>未経験プログラミングスクール</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">10分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】未経験から学べるプログラミングスクールおすすめ5選｜挫折しない選び方</h1>
        <p className="text-muted leading-relaxed">完全未経験からエンジニアを目指せるプログラミングスクール5校を、料金・学習期間・転職サポート・挫折しにくさの観点で徹底比較。自分のゴールに合わせた選び方を解説します。</p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm">
          <p><span className="font-bold">20代・本気転職 → DMM WEBCAMP</span></p>
          <p><span className="font-bold">働きながら学習 → TechAcademy</span></p>
          <p><span className="font-bold">AI・データ分析志望 → Aidemy Premium</span></p>
          <p><span className="font-bold">実務スキル重視 → RaiseTech</span></p>
          <p><span className="font-bold">費用0で最速就職 → GEEK JOB</span></p>
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
          <Link href="/guide/programming-school-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
            <div className="text-xs text-muted mb-1">比較</div>
            <div className="font-bold text-sm">プログラミングスクール徹底比較</div>
          </Link>
          <Link href="/guide/free-programming-school" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
            <div className="text-xs text-muted mb-1">無料相談</div>
            <div className="font-bold text-sm">無料プログラミングスクール</div>
          </Link>
        </div>
      </section>
    </div>
  );
}
