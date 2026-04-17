import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】20代におすすめ転職エージェント5選｜未経験・第二新卒向け",
  description:
    "20代の転職に強いエージェント5社を徹底比較。第二新卒・未経験OK・若手ハイクラス別に解説。",
  alternates: { canonical: `${siteConfig.url}/guide/job-agent-for-20s` },
};

const faqItems = [
  { question: "転職エージェントは複数登録すべき？", answer: "はい。3社程度の併用が推奨されます。大手総合型1社＋若手特化型1〜2社が王道。求人の被りは各社で数百件程度あるものの、独占求人や担当者との相性で内定率が大きく変わるためです。" },
  { question: "第二新卒（入社3年未満）でも利用できる？", answer: "第二新卒特化型（マイナビジョブ20's・ハタラクティブ・Re就活）は入社1年未満でも歓迎。未経験OK求人が中心で、書類選考が免除になるケースも多く、内定までの期間が平均1〜2ヶ月と短いのが特徴です。" },
  { question: "未経験でもハイクラス求人に応募できる？", answer: "20代なら「ポテンシャル枠」として年収500〜700万円のハイクラス求人に応募可能。リクルートエージェント・dodaなど大手総合型は未経験歓迎の若手ハイクラス案件を多数保有しています。" },
  { question: "在職中に転職活動するコツは？", answer: "エージェントに希望時間帯・連絡手段をあらかじめ伝えるのが重要。LINE対応可のサービス（マイナビジョブ20's等）だとスムーズです。面接は平日夜・土日対応の企業も多く、有給消化前提で2〜3ヶ月で完了するのが一般的です。" },
];

const services = [
  { name: "リクルートエージェント", type: "業界最大手", rate: "完全無料（成果報酬は企業側負担）", points: ["公開求人40万件超で業界No.1", "20代向け若手ハイクラス求人が豊富", "職務経歴書の添削・面接対策が手厚い"], bestFor: "選択肢を最大化したい20代全般。" },
  { name: "doda", type: "総合型", rate: "完全無料", points: ["求人検索サイトとエージェント両方を利用可", "年収査定・スカウト機能あり", "20代転職の満足度が高い"], bestFor: "自分でも求人を探しつつ提案も受けたい人。" },
  { name: "マイナビジョブ20's", type: "20代特化", rate: "完全無料", points: ["20代・第二新卒のみが対象", "全求人が20代歓迎・未経験歓迎", "適性診断で自己分析サポート"], bestFor: "初めての転職で不安な第二新卒・既卒。" },
  { name: "ハタラクティブ", type: "未経験特化", rate: "完全無料", points: ["正社員経験がない既卒・フリーターOK", "書類選考なしの求人が8割以上", "内定率80%超・カウンセリング充実"], bestFor: "職歴に自信がない・フリーターから正社員を目指す人。" },
  { name: "Re就活エージェント", type: "20代専門", rate: "完全無料", points: ["20代専門サイト「Re就活」と連動", "第二新卒・既卒に強い求人多数", "キャリアアドバイザーが若手のキャリア設計に詳しい"], bestFor: "キャリアの方向性から相談したい20代。" },
];

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[
        { name: "ホーム", url: siteConfig.url },
        { name: "ガイド", url: `${siteConfig.url}/guide` },
        { name: "20代におすすめ転職エージェント5選", url: `${siteConfig.url}/guide/job-agent-for-20s` },
      ]} />
      <ArticleJsonLd headline="【2026年最新】20代におすすめ転職エージェント5選" description="20代の転職に強いエージェント5社を徹底比較。第二新卒・未経験OK・若手ハイクラス別に解説。" url={`${siteConfig.url}/guide/job-agent-for-20s`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>20代におすすめ転職エージェント</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">10分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】20代におすすめ転職エージェント5選｜未経験・第二新卒向け</h1>
        <p className="text-muted leading-relaxed">20代の転職は「ポテンシャル採用」が通用する最後のチャンス。第二新卒・未経験・若手ハイクラスの3タイプ別に、本当に使える転職エージェント5社を比較します。</p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm">
          <p><span className="font-bold">求人数重視 → リクルートエージェント</span></p>
          <p><span className="font-bold">自分でも探したい → doda</span></p>
          <p><span className="font-bold">第二新卒 → マイナビジョブ20&apos;s</span></p>
          <p><span className="font-bold">フリーター・既卒 → ハタラクティブ</span></p>
          <p><span className="font-bold">キャリア相談したい → Re就活エージェント</span></p>
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
          <Link href="/guide/job-agent-ranking-2026" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
            <div className="text-xs text-muted mb-1">ランキング</div>
            <div className="font-bold text-sm">転職エージェントランキング2026</div>
          </Link>
          <Link href="/guide/career-coaching-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
            <div className="text-xs text-muted mb-1">比較</div>
            <div className="font-bold text-sm">キャリアコーチング比較</div>
          </Link>
        </div>
      </section>
    </div>
  );
}
