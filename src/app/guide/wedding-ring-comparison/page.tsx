import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】結婚指輪・婚約指輪ブランド比較おすすめ5選｜価格・デザイン・品質を徹底解説",
  description:
    "カルティエ・ティファニー・4℃・アイプリモ・ケイウノの結婚指輪・婚約指輪を価格・デザイン・素材・サービスで徹底比較。予算別の選び方を解説。",
  alternates: { canonical: `${siteConfig.url}/guide/wedding-ring-comparison` },
};

const faqItems = [
  { question: "婚約指輪と結婚指輪の予算相場は？", answer: "婚約指輪は給料の1〜3ヶ月分（30〜50万円）、結婚指輪はペアで20〜30万円が現在の平均的相場です。ブランド・素材・ダイヤのサイズにより大きく変動します。" },
  { question: "ハイブランドと国内ブランドの違いは？", answer: "カルティエ・ティファニーなどハイブランドは資産価値・ステータス性が高く、国内ブランドはオーダーメイドの自由度と価格のバランスに強みがあります。" },
  { question: "オーダーメイドはどれくらいかかる？", answer: "ケイウノ・4℃などのオーダーメイドは受注から納品まで1〜3ヶ月が一般的。挙式日が決まっている場合は早めの相談が必須です。" },
  { question: "アフターサービスは？", answer: "多くのブランドがサイズ直し・磨き直し・クリーニングを無料または安価で提供しています。購入時にアフターサービスの内容を必ず確認しましょう。" },
];

const services = [
  { name: "カルティエ", type: "ハイブランド", rate: "結婚指輪 ペア ¥380,000〜", points: ["世界トップクラスのステータスブランド", "バレリーナ・1895・ラブシリーズが人気", "資産価値が高い"], bestFor: "ステータスとブランド力を重視する人。" },
  { name: "ティファニー", type: "ハイブランド", rate: "結婚指輪 ペア ¥320,000〜", points: ["ティファニーブルーの象徴的ブランド", "上質なプラチナ素材", "永久保証制度"], bestFor: "王道ハイブランド派。" },
  { name: "4℃（ヨンドシー）", type: "国内老舗", rate: "結婚指輪 ペア ¥130,000〜", points: ["国内ジュエリーブランドの代表格", "全国どこでも購入・メンテ可能", "リーズナブルな価格帯"], bestFor: "コスパ重視の国内派。" },
  { name: "I-PRIMO（アイプリモ）", type: "ブライダル専門", rate: "婚約指輪 ¥150,000〜", points: ["ブライダル専門ジュエラー", "指の形別にデザインを提案", "永久保証・サイズ直し無料"], bestFor: "専門店で安心して選びたい人。" },
  { name: "ケイウノ", type: "オーダーメイド", rate: "フルオーダー ¥200,000〜", points: ["完全オーダーメイドに強い", "自由なデザインを低価格で実現", "職人と直接相談可能"], bestFor: "世界に一つのリングが欲しい人。" },
];

export default function WeddingRingComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "結婚指輪比較", url: `${siteConfig.url}/guide/wedding-ring-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】結婚指輪・婚約指輪ブランド比較おすすめ5選" description="カルティエ・ティファニー・4℃・アイプリモ・ケイウノの結婚指輪・婚約指輪を価格・デザイン・素材・サービスで徹底比較。" url={`${siteConfig.url}/guide/wedding-ring-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link><span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link><span className="mx-2">/</span>
        <span>結婚指輪比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】結婚指輪・婚約指輪ブランド比較おすすめ5選｜価格・デザイン・品質を徹底解説</h1>
        <p className="text-muted leading-relaxed">
          一生を共にする結婚指輪・婚約指輪選びは、人生でもっとも重要な買い物のひとつ。ブランドごとに価格・デザイン・保証制度が大きく異なり、後悔しないためには事前のリサーチが不可欠です。2026年人気の5ブランドを価格・デザイン・サービスで徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">ハイブランド王道 → カルティエ</span></p>
          <p><span className="font-bold">可愛さ重視 → ティファニー</span></p>
          <p><span className="font-bold">コスパ → 4℃</span></p>
          <p><span className="font-bold">オーダーメイド → ケイウノ</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">結婚指輪選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          結婚指輪は「予算・デザイン・素材・アフターサービス」の4軸で選びます。ハイブランドは所有する喜びとステータスを重視する人向け、国内ブランドは価格とメンテナンスの利便性で優位。毎日身につけるものなので、着け心地・日常の邪魔にならないデザイン・長期メンテナンスの充実度も重要です。来店前にSNSや公式サイトでデザインをチェックし、複数店舗を巡って比較することが後悔しないコツです。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめブランド5社の詳細</h2>
        <div className="space-y-6">
          {services.map((b, idx) => (
            <div key={b.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{b.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{b.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">参考価格：{b.rate}</p>
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
        <p className="text-xs text-muted mt-3">※ 価格は2026年4月時点の参考値です。最新情報は各ブランド公式サイトでご確認ください。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">賢く選ぶ5つのコツ</h2>
        <div className="space-y-3 text-sm text-muted leading-relaxed">
          <p>1. 予算の上限を二人で事前に決めておく。</p>
          <p>2. 来店予約特典・キャンペーンは必ずチェック。</p>
          <p>3. 彫刻・刻印サービスの追加料金を確認。</p>
          <p>4. アフターメンテ（サイズ直し・磨き）の条件を確認。</p>
          <p>5. 結婚式・挙式までの納期を逆算して早めに購入。</p>
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
        <h2 className="text-2xl font-bold mb-4">まとめ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <p className="text-muted leading-relaxed">
            結婚指輪選びは二人の価値観が表れる大切なイベント。ブランドの知名度だけで決めず、着け心地・デザイン・アフターサービスまで含めて総合判断しましょう。結婚準備では家計管理が特に重要になります。家計簿アプリや会計ソフトで新生活の支出を可視化し、無理のない予算計画を立てましょう。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">結婚準備に役立つ費用・指輪ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/tools/wedding-cost-detail-simulator" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">結婚式費用シミュレーター</span>
            <p className="text-xs text-muted mt-1">指輪以外の総額も確認</p>
          </Link>
          <Link href="/guide/wedding-venue-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">結婚式場比較</span>
            <p className="text-xs text-muted mt-1">式場費用と特典を比較</p>
          </Link>
          <Link href="/guide/bridal-jewelry-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ブライダルジュエリー比較</span>
            <p className="text-xs text-muted mt-1">指輪選びの候補整理に</p>
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <Link href="/tools/wedding-cost-detail-simulator" className="block bg-primary/10 border-2 border-primary rounded-xl p-5 text-center hover:bg-primary/20 transition-colors mb-6">
          <div className="text-sm font-bold text-primary mb-1">結婚式費用詳細シミュレーターを使う</div>
          <p className="text-xs text-muted">総費用・ご祝儀見込み・自己負担額を試算</p>
        </Link>
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/marriage-agency-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">結婚相談所比較</span>
            <p className="text-xs text-muted mt-1">結婚までのステップ</p>
          </Link>
          <Link href="/guide/housing-loan-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">住宅ローン比較</span>
            <p className="text-xs text-muted mt-1">新生活のマイホーム</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
