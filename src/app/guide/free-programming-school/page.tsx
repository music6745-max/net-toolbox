import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】無料プログラミングスクール5選｜就職・転職で受講料0円",
  description:
    "受講料無料のプログラミングスクール5選。就職・転職を条件に無料で学べる仕組みと選び方を解説。GEEK JOB、プログラマカレッジ、ITCEキャリア、エンジニアカレッジ、0円スクールを比較。",
  alternates: { canonical: `${siteConfig.url}/guide/free-programming-school` },
};

const faqItems = [
  { question: "なぜ無料でプログラミングが学べるのですか？", answer: "スクール運営会社が提携するIT企業からの紹介料で運営費を賄う仕組みだからです。受講生が提携先に就職することでスクールが成立するビジネスモデルで、受講生は受講料0円、企業は採用コスト削減、スクールは紹介料というwin-win-winの関係になっています。" },
  { question: "誰でも無料で受講できますか？", answer: "多くの無料スクールは年齢制限（20〜30代前半）や首都圏在住などの条件があります。また就職活動に協力する意思が必須で、カリキュラム途中での離脱や提携企業への就職拒否には違約金が発生するケースも。申込前に利用規約を必ず確認しましょう。" },
  { question: "有料スクールと何が違いますか？", answer: "最大の違いは就職先の選択の自由度です。無料スクールは提携企業への就職が前提のため、自社開発企業より受託・SES企業が多い傾向があります。自由にキャリアを選びたい場合は有料スクール、とにかくコストを抑えて業界入りしたい場合は無料スクールが向いています。" },
  { question: "無料スクール卒業後のキャリアパスは？", answer: "多くは最初の就職先で1〜3年実務経験を積み、その後自社開発企業や高年収ポジションに転職する王道パターンがあります。最初の就職で年収350〜400万円からスタートし、3年後には500万円台が平均的。ポートフォリオと実務経験があれば、次のキャリアは大きく開けます。" },
];

const services = [
  { name: "GEEK JOB", type: "最短22日で転職", rate: "受講料無料", points: ["最短22日という圧倒的スピード", "20代限定で正社員エンジニア転職", "転職成功率97.8%の実績"], bestFor: "20代でとにかく早くエンジニアになりたい人。" },
  { name: "プログラマカレッジ", type: "老舗無料スクール", rate: "受講料無料", points: ["Java・PHPの基礎から応用まで", "模擬案件でチーム開発を経験", "個別指導型でサポート手厚い"], bestFor: "基礎をしっかり学んで就職したい人。" },
  { name: "ITCEキャリア", type: "完全オンライン対応", rate: "受講料無料", points: ["インフラエンジニア特化の無料スクール", "CCNA・LPIC資格取得サポート", "全国からオンライン受講可"], bestFor: "インフラエンジニア志望で地方在住の人。" },
  { name: "エンジニアカレッジ", type: "インターノウス運営", rate: "受講料無料", points: ["Web系言語中心のカリキュラム", "東京校での通学型で集中学習", "提携企業3,500社以上"], bestFor: "首都圏在住で通学でガッツリ学びたい人。" },
  { name: "0円スクール", type: "Java特化", rate: "受講料無料", points: ["札幌・東京・名古屋・福岡に校舎", "Java特化で実務直結のスキル", "年齢制限が他社より緩やか"], bestFor: "地方都市でJavaエンジニアを目指す人。" },
];

export default function FreeProgrammingSchoolPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "無料プログラミングスクール", url: `${siteConfig.url}/guide/free-programming-school` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】無料プログラミングスクール5選" description="就職・転職を条件に受講料0円のプログラミングスクールを徹底比較。" url={`${siteConfig.url}/guide/free-programming-school`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>無料プログラミングスクール</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】無料プログラミングスクール5選｜就職・転職で受講料0円
        </h1>
        <p className="text-muted leading-relaxed">
          プログラミングスクールは有料が当たり前と思われがちですが、就職・転職を条件に受講料0円で学べるスクールが増えています。提携企業からの紹介料で運営するビジネスモデルのため、受講生の金銭負担はゼロ。ただし年齢制限や就職条件など有料スクールにはない制約もあります。2026年現在の主要5校を徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">最短で転職 → GEEK JOB</span></p>
          <p><span className="font-bold">基礎重視で学ぶ → プログラマカレッジ</span></p>
          <p><span className="font-bold">インフラ志望 → ITCEキャリア</span></p>
          <p><span className="font-bold">首都圏で通学 → エンジニアカレッジ</span></p>
          <p><span className="font-bold">地方都市在住 → 0円スクール</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">無料スクールの仕組みと注意点</h2>
        <p className="text-muted leading-relaxed mb-4">
          無料スクールは提携IT企業への就職を条件に運営されています。受講生が就職すると提携企業がスクールに紹介料を支払う仕組みで、受講生は完全無料で学べます。ただし「20代限定」「首都圏在住」「紹介企業への就職必須」など条件があるケースが多く、途中離脱や紹介企業への就職拒否で違約金が発生する場合も。申込前に利用規約を熟読し、提携企業の業態（自社開発・受託・SES）を確認することが重要です。最初の1〜3年で実務経験を積み、その後自社開発企業にステップアップする王道パターンも覚えておきましょう。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ無料スクール5校の詳細</h2>
        <div className="space-y-6">
          {services.map((b, idx) => (
            <div key={b.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{b.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{b.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">料金：{b.rate}</p>
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
        <p className="text-xs text-muted mt-3">※ 情報は2026年4月時点のものです。最新の料金・条件は各スクール公式サイトでご確認ください。</p>
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
            無料スクールは条件を満たせば圧倒的にお得ですが、就職先の選択肢が限られる点は理解しておく必要があります。自由度を重視するなら有料スクール、コストを最優先するなら無料スクールと、自分の優先順位で選びましょう。どちらを選んでも、学んだスキルと実務経験が最大の資産になります。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">有料スクールも検討するなら</h2>
        <ComparisonTableCTA
          services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "Web・AI", price: "月額制", badge: "おすすめ" },
            { name: "Aidemy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "AI特化", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証", price: "月額制" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/programming-school-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">プログラミングスクール比較</span>
            <p className="text-xs text-muted mt-1">有料・無料を含む徹底比較</p>
          </Link>
          <Link href="/guide/job-site-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">転職エージェントランキング2026</span>
            <p className="text-xs text-muted mt-1">就職・転職成功の近道</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
