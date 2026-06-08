import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】レーシック・ICL比較おすすめ5選｜料金・術式・保証を徹底解説",
  description:
    "品川近視クリニック・新宿近視クリニック・神戸神奈川アイクリニック・先進会眼科・錦糸眼科のレーシック・ICL料金・術式・保証制度を徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/lasik-ico-comparison` },
};

const faqItems = [
  { question: "レーシックとICLの違いは？", answer: "レーシックは角膜をレーザーで削る術式、ICLは眼内にコンタクトレンズ状のレンズを挿入する術式です。ICLは強度近視や角膜が薄い人にも対応可能で、可逆性があるのが大きな特徴です。" },
  { question: "費用の相場は？", answer: "レーシックは両眼で20〜40万円、ICLは両眼で50〜70万円が一般的な相場です。医療費控除の対象となります。" },
  { question: "手術後の視力は安定しますか？", answer: "レーシックは数日、ICLは1週間程度で視力が安定するケースが多いです。定期検診は最低1年間受けるのが望ましいです。" },
  { question: "副作用やリスクは？", answer: "ドライアイ・ハロー・グレアなどが一時的に発生する可能性があります。事前の適応検査で自分に合う術式を医師と相談することが重要です。" },
];

const services = [
  { name: "品川近視クリニック", type: "症例数No.1", rate: "レーシック ¥155,000〜", points: ["国内症例数トップクラス140万症例以上", "最新レーザー機器を導入", "紹介割引あり"], bestFor: "実績数を重視する人。" },
  { name: "新宿近視クリニック", type: "都心アクセス", rate: "レーシック ¥198,000〜", points: ["JR新宿駅から徒歩圏内", "術後の保証制度が手厚い", "ICL認定医在籍"], bestFor: "通勤帰りに通いたい人。" },
  { name: "神戸神奈川アイクリニック", type: "関西拠点", rate: "ICL ¥462,000〜", points: ["関西・関東・東海に展開", "フェムトセカンドレーザー使用", "遠方補助制度あり"], bestFor: "関西在住・ICL希望の人。" },
  { name: "先進会眼科", type: "先端医療", rate: "ICL ¥506,000〜", points: ["ICL手術に特化", "高難度症例の実績豊富", "医師が全員ICL認定医"], bestFor: "強度近視の人。" },
  { name: "錦糸眼科", type: "保証充実", rate: "レーシック ¥220,000〜", points: ["生涯保証制度あり", "年中無休で相談可能", "Pmax認定施設"], bestFor: "長期保証を重視する人。" },
];

export default function LasikIcoComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "レーシック・ICL比較", url: `${siteConfig.url}/guide/lasik-ico-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】レーシック・ICL比較おすすめ5選" description="品川近視クリニック・新宿近視クリニック・神戸神奈川アイクリニック・先進会眼科・錦糸眼科のレーシック・ICL料金・術式・保証制度を徹底比較。" url={`${siteConfig.url}/guide/lasik-ico-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link><span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link><span className="mx-2">/</span>
        <span>レーシック・ICL比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】レーシック・ICL比較おすすめ5選｜料金・術式・保証を徹底解説</h1>
        <p className="text-muted leading-relaxed">
          コンタクトレンズ代やメガネの煩わしさから解放される視力矯正手術。2026年現在、レーシックは安定期に入り、ICL（眼内コンタクトレンズ）の普及も加速。眼科選びの失敗は一生モノのリスクに直結します。主要5クリニックを料金・術式・保証で徹底比較し、後悔しない選び方を解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">症例数重視 → 品川近視クリニック</span></p>
          <p><span className="font-bold">強度近視 → 先進会眼科（ICL）</span></p>
          <p><span className="font-bold">関西在住 → 神戸神奈川アイクリニック</span></p>
          <p><span className="font-bold">長期保証 → 錦糸眼科</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">視力矯正手術選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          視力矯正手術は「料金・術式・医師の経験・保証制度」の4点で選びます。レーシックは手術時間10〜20分・費用20万円前後と手軽ですが、角膜の厚みが必要。ICLは費用50万円前後と高額ですが、角膜を削らないため強度近視や将来の老眼手術との両立に有利です。必ず適応検査を受け、自分の目に合う術式を医師と相談することが重要。安価な広告に惑わされず、症例数・保証・アフターケアまで含めて総合判断しましょう。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ眼科クリニック5院の詳細</h2>
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
        <p className="text-xs text-muted mt-3">※ 料金は2026年4月時点の税込参考値です。視力矯正手術にはリスクがあります。適応検査と医師のカウンセリングを必ず受けてください。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">失敗しない5つのチェックポイント</h2>
        <div className="space-y-3 text-sm text-muted leading-relaxed">
          <p>1. 必ず適応検査を受け、角膜の厚みや形状を確認する。</p>
          <p>2. 複数院のカウンセリングを受け、医師との相性も確認。</p>
          <p>3. 保証制度の内容（再手術・視力低下時の対応）を契約前に確認。</p>
          <p>4. 広告の最低価格ではなく、検査料・術後ケアを含めた総額で比較。</p>
          <p>5. 医療費控除の手続きで税金の一部が戻る可能性があります。</p>
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
            視力矯正手術は一生の視生活を左右する重要な決断。症例数・医師の経験・保証制度を重視して選び、安易な広告価格に飛びつかないことが最重要です。医療費控除の対象となるため、領収書と検査結果を保管し、確定申告で税金の還付を受けられるようにしておきましょう。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">視力矯正とあわせて確認したい医療ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/eye-clinic-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">眼科クリニック比較</span>
            <p className="text-xs text-muted mt-1">眼科選びと適応検査のポイント</p>
          </Link>
          <Link href="/guide/medical-checkup-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">人間ドック・健康診断比較</span>
            <p className="text-xs text-muted mt-1">全身の検査計画もあわせて整理</p>
          </Link>
          <Link href="/guide/clinic-online-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">オンライン診療比較</span>
            <p className="text-xs text-muted mt-1">受診後の相談先や処方薬を確認</p>
          </Link>
          <Link href="/guide/dental-clinic-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">歯科クリニック比較</span>
            <p className="text-xs text-muted mt-1">自由診療の費用感もあわせて確認</p>
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/beauty-clinic-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">美容クリニック比較</span>
            <p className="text-xs text-muted mt-1">自分磨きに投資する</p>
          </Link>
          <Link href="/guide/insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ネット保険比較</span>
            <p className="text-xs text-muted mt-1">医療保障の見直しに</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
