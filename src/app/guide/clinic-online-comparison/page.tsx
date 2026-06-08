import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】オンライン診療サービス比較おすすめ5選｜料金・診療科・処方薬を徹底解説",
  description:
    "オンライン診療サービス5社を料金・診療科・処方薬・配送スピードで徹底比較。AGA・ED・ピル・花粉症まで自宅で完結する診療サービスの選び方を詳しく解説。",
  alternates: { canonical: `${siteConfig.url}/guide/clinic-online-comparison` },
};

const faqItems = [
  {
    question: "オンライン診療は保険適用されますか？",
    answer:
      "再診であれば保険適用、初診でも対応可能な医療機関が増えています。ただし自由診療（AGA・ED・美容など）は保険対象外です。",
  },
  {
    question: "処方薬はどのくらいで届きますか？",
    answer:
      "多くのサービスで翌日〜3日以内に配送されます。バイク便や当日配送に対応するサービスも登場しています。",
  },
  {
    question: "診察料はいくらかかりますか？",
    answer:
      "サービスによりますが、診察料は無料〜3,000円程度。その他に薬代と配送料がかかります。薬代は保険適用の場合3割負担、自由診療では全額自己負担となります。",
  },
  {
    question: "対面診療と比べて品質は大丈夫ですか？",
    answer:
      "厚労省ガイドラインに準拠した医療機関であれば、対面診療と同等の品質で提供されます。慢性疾患の定期診察や風邪・花粉症など軽症の受診には十分な品質です。",
  },
];

const services = [
  { name: "クリニックフォア", type: "総合オンライン診療", price: "診察料1,650円〜", points: ["内科・皮膚科・AGA・ピルまで網羅", "最短翌日配送", "保険診療対応"], bestFor: "総合的な診療を受けたい人。" },
  { name: "DMM オンラインクリニック", type: "総合・自由診療", price: "診察料無料〜", points: ["AGA・ED・ダイエット薬に強い", "DMMポイント利用可", "LINE完結"], bestFor: "自由診療を手軽に受けたい人。" },
  { name: "スマルナ", type: "ピル処方特化", price: "診察料1,500円", points: ["最短翌日配送", "24時間チャット相談", "産婦人科医監修"], bestFor: "低用量ピルを継続したい女性。" },
  { name: "メデリピル", type: "ピル処方特化", price: "診察料無料", points: ["初月無料キャンペーンあり", "産婦人科医による診察", "LINEで完結"], bestFor: "初めてピルを試す女性。" },
  { name: "AGAヘアクリニック", type: "AGA特化", price: "月4,620円〜", points: ["AGA専門医が診察", "オンライン完結", "定期配送割引"], bestFor: "AGA治療を始めたい男性。" },
];

export default function ClinicOnlineComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "オンライン診療比較", url: `${siteConfig.url}/guide/clinic-online-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】オンライン診療サービス比較おすすめ5選" description="オンライン診療サービス5社を料金・診療科・処方薬・配送スピードで徹底比較。" url={`${siteConfig.url}/guide/clinic-online-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>オンライン診療比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】オンライン診療サービス比較おすすめ5選｜料金・診療科・処方薬を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          スマホ1台で診察から薬の配送まで完結する「オンライン診療」は、コロナ禍を機に一気に普及しました。忙しい人・通院が難しい人にとって心強いサービスを、料金・診療科・配送スピードで徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">目的別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">総合診療 → クリニックフォア</span></p>
          <p><span className="font-bold">AGA・ED → DMM オンラインクリニック</span></p>
          <p><span className="font-bold">ピル処方 → スマルナ / メデリピル</span></p>
          <p><span className="font-bold">AGA特化 → AGAヘアクリニック</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">オンライン診療の基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          オンライン診療は、スマホやPCから医師にビデオ通話で診察してもらい、処方薬を自宅に届けてもらえるサービスです。2022年の規制緩和で初診からのオンライン診療が恒久化され、今では風邪・花粉症・ピル・AGA・ED・ダイエット薬まで幅広い領域で利用できるようになりました。予約から診察・決済・配送まですべてLINEやアプリで完結するため、仕事で通院時間が取れない人や、人に知られたくない悩みを抱える人に特に支持されています。処方薬はバイク便や宅配便で最短翌日に届くケースが多く、継続治療の定期配送プランを用意しているサービスもあります。
        </p>
        <p className="text-muted leading-relaxed mb-4">
          料金面は、保険診療と自由診療で大きく異なります。保険診療であれば対面と同じ3割負担（診察料＋薬代）で済みますが、AGA・ED・ダイエット薬などは自由診療となり全額自己負担。月1万〜3万円程度が相場です。サービス選びでは「診察料・薬代・配送料の総額」「取り扱い診療科」「配送スピード」「医師の経歴・在籍人数」を確認しましょう。継続治療の場合は定期配送割引があるかどうかも要チェックです。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめオンライン診療サービス5選の詳細</h2>
        <div className="space-y-6">
          {services.map((s, idx) => (
            <div key={s.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{s.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{s.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">参考料金：{s.price}</p>
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
        <p className="text-xs text-muted mt-3">※ 料金は2026年4月時点の参考値です。最新の適用料金は各サービスの公式サイトでご確認ください。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">オンライン診療の注意点</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <ul className="space-y-3 text-sm text-muted leading-relaxed">
            <li>&#9675; <span className="font-bold text-foreground">緊急時は対面受診：</span>発熱・息切れ・激しい痛みなど重篤な症状は対面診療が必須。</li>
            <li>&#9675; <span className="font-bold text-foreground">処方薬の管理：</span>お薬手帳アプリで履歴を一元管理するのがおすすめ。</li>
            <li>&#9675; <span className="font-bold text-foreground">副作用対応：</span>副作用が出た場合の相談窓口・フォロー体制を事前に確認。</li>
            <li>&#9675; <span className="font-bold text-foreground">個人情報の取り扱い：</span>プライバシーポリシーと診療情報の暗号化対応を確認。</li>
          </ul>
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
            オンライン診療は通院時間を節約でき、継続治療の手間を大幅に減らせるサービスです。総合診療ならクリニックフォア、AGAなら専門クリニックと使い分けるのが賢い選択。自由診療の費用は医療費控除の対象外もありますが、保険診療分は対象になるため、領収書は保管しておきましょう。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">オンライン診療とあわせて確認したい医療ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/online-doctor-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">医師相談・オンライン診療比較</span>
            <p className="text-xs text-muted mt-1">症状相談や受診先選びを整理</p>
          </Link>
          <Link href="/guide/online-pill-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">オンラインピル処方比較</span>
            <p className="text-xs text-muted mt-1">婦人科系のオンライン処方を比較</p>
          </Link>
          <Link href="/guide/aga-clinic-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">AGAクリニック比較</span>
            <p className="text-xs text-muted mt-1">薄毛治療の通院・オンライン診療</p>
          </Link>
          <Link href="/guide/dental-clinic-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">歯科クリニック比較</span>
            <p className="text-xs text-muted mt-1">歯科治療の費用とクリニック選び</p>
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/online-counseling-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">オンラインカウンセリング比較</span>
            <p className="text-xs text-muted mt-1">メンタルケアのオンライン相談</p>
          </Link>
          <Link href="/guide/dental-clinic-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">歯科クリニック比較</span>
            <p className="text-xs text-muted mt-1">インプラント・矯正歯科</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
