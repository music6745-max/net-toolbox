import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】ITエンジニア向け転職エージェント5選｜年収UP実績で比較",
  description:
    "ITエンジニアに特化した転職エージェント5選を年収UP実績・求人数・サポート体制で徹底比較。レバテックキャリア、Geekly、マイナビIT AGENT、ワークポート、type転職エージェントITを解説。",
  alternates: { canonical: `${siteConfig.url}/guide/job-agent-for-engineers` },
};

const faqItems = [
  { question: "エンジニア向け専門エージェントと総合型の違いは？", answer: "専門エージェントはIT業界出身のキャリアアドバイザーが多く、技術スタックや開発現場の実情を理解した上で求人紹介してくれる点が最大の違いです。非公開求人も豊富で、同じ企業でも総合型より高年収ポジションを提案されるケースが多いです。まずは専門型1〜2社と総合型1社に登録するのが定石です。" },
  { question: "転職エージェントは何社登録すべき？", answer: "3〜4社が適切です。専門型のレバテックキャリアまたはGeeklyを軸に、マイナビIT AGENTや総合型1社を組み合わせると求人網羅性が高まります。多すぎると管理が煩雑になり、少なすぎると選択肢が狭まります。担当者との相性も重要なので、合わなければ別エージェントに切り替える判断も必要です。" },
  { question: "年収アップの平均はどのくらい？", answer: "エンジニア専門エージェント経由の転職は、同業種でも50〜100万円アップが平均的。レバテックキャリアは登録者の約60%が年収アップしているというデータもあります。特に自社開発企業への転職ではインセンティブ含め150万円以上アップするケースも珍しくありません。" },
  { question: "在職中でも転職活動できますか？", answer: "エンジニアの転職者の約8割は在職中に活動しています。専門エージェントは平日夜・土日の面談対応、オンライン面接調整、現職の退職交渉サポートまで一貫して行ってくれます。面接日程調整もエージェントが代行してくれるため、平均3〜6ヶ月で転職を決めるエンジニアが多いです。" },
];

const services = [
  { name: "レバテックキャリア", type: "エンジニア専門最大手", rate: "完全無料", points: ["IT・Web業界特化で求人数業界トップクラス", "年収アップ率60%超の実績", "元エンジニアのアドバイザー多数"], bestFor: "年収アップを本気で狙う経験者エンジニア。" },
  { name: "Geekly", type: "IT・Web・ゲーム特化", rate: "完全無料", points: ["年収600万以上の非公開求人が豊富", "ゲーム業界・Web業界に強い", "転職決定までの平均期間が短い"], bestFor: "Web・ゲーム業界で年収UPを狙う人。" },
  { name: "マイナビIT AGENT", type: "大手総合型のIT特化", rate: "完全無料", points: ["20代・第二新卒の求人が豊富", "大手マイナビならではの企業数", "丁寧な面接対策・書類添削"], bestFor: "20代で初めての転職を考える人。" },
  { name: "ワークポート", type: "IT転職の老舗", rate: "完全無料", points: ["未経験からIT業界へのサポートに強い", "未経験向け求人数が多い", "独自の学習支援プログラムあり"], bestFor: "異業種からITへキャリアチェンジしたい人。" },
  { name: "type転職エージェントIT", type: "首都圏特化", rate: "完全無料", points: ["首都圏のIT企業に特化", "年収交渉力に定評あり", "書類通過率と面接通過率が高い"], bestFor: "首都圏で年収交渉を重視する人。" },
];

export default function JobAgentForEngineersPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "ITエンジニア向け転職エージェント", url: `${siteConfig.url}/guide/job-agent-for-engineers` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】ITエンジニア向け転職エージェント5選" description="エンジニア特化の転職エージェントを年収UP実績・求人数・サポート体制で比較。" url={`${siteConfig.url}/guide/job-agent-for-engineers`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>ITエンジニア向け転職エージェント</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">13分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】ITエンジニア向け転職エージェント5選｜年収UP実績で比較
        </h1>
        <p className="text-muted leading-relaxed">
          ITエンジニアの転職市場は引き続き売り手市場で、専門エージェント経由の転職では年収50〜100万円アップが当たり前。ただし一般の転職サイトやエージェントでは技術要件の理解が浅く、ベストマッチの求人に出会えないケースも多いです。IT特化のエージェントを活用することで、技術スタックや開発環境まで踏み込んだ紹介が受けられます。主要5社を徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">年収UP重視 → レバテックキャリア</span></p>
          <p><span className="font-bold">Web・ゲーム業界 → Geekly</span></p>
          <p><span className="font-bold">20代・第二新卒 → マイナビIT AGENT</span></p>
          <p><span className="font-bold">未経験からIT → ワークポート</span></p>
          <p><span className="font-bold">首都圏で年収交渉 → type転職エージェントIT</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">エンジニア向けエージェントの選び方</h2>
        <p className="text-muted leading-relaxed mb-4">
          エンジニア向けエージェントは「求人数」「アドバイザーの専門性」「年収交渉力」の3点で選びます。レバテックキャリアとGeeklyは業界トップクラスの求人数と専門性で、経験者エンジニアに圧倒的人気。ただし未経験者には求人が少ないため、キャリアチェンジ組はワークポートのような未経験特化型がベスト。複数社に同時登録し、担当者との相性を見ながら本命1〜2社に絞るのが賢い進め方です。現職の年収を正直に伝え、希望年収のレンジを明確にすると質の高い求人が集まります。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめエージェント5社の詳細</h2>
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
        <p className="text-xs text-muted mt-3">※ 情報は2026年4月時点のものです。最新のサービス内容は各公式サイトでご確認ください。</p>
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
            ITエンジニアの転職は専門エージェント選びで結果が大きく変わります。経験者ならレバテックキャリア・Geeklyの2軸に総合型1社を足すのが鉄板。未経験ならワークポートで足場を固めつつプログラミングスクールでスキル補強を。転職活動と同時に、プログラミングスクールでスキルアップしておくと年収交渉がさらに有利になります。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">スキルアップにおすすめのスクール</h2>
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
          <Link href="/guide/job-site-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">転職エージェントランキング2026</span>
            <p className="text-xs text-muted mt-1">総合型も含むランキング</p>
          </Link>
          <Link href="/guide/programming-school-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">プログラミングスクール比較</span>
            <p className="text-xs text-muted mt-1">転職前のスキルアップに</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
