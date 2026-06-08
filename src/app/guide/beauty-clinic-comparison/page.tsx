import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】美容皮膚科・医療ダイエット比較おすすめ5選｜料金・施術メニューを徹底解説",
  description:
    "湘南美容クリニック・TCB東京中央美容外科・品川美容外科・東京美容外科・DIOクリニックの料金・人気施術・医療ダイエットを徹底比較。クリニック選びのポイントも解説。",
  alternates: { canonical: `${siteConfig.url}/guide/beauty-clinic-comparison` },
};

const faqItems = [
  { question: "美容皮膚科と美容外科の違いは？", answer: "美容皮膚科はシミ・しわ・ニキビなど肌悩みをレーザーや注射で治療、美容外科は二重整形や脂肪吸引など外科手術を伴う施術を行います。多くの大手クリニックは両方を扱っています。" },
  { question: "医療ダイエットは効果がありますか？", answer: "GLP-1注射・脂肪溶解注射・冷却痩身などのメニューが主流で、運動・食事制限と組み合わせることで一般的なダイエットより高い効果が期待できます。ただし副作用や費用面の検討も必要です。" },
  { question: "カウンセリングは無料ですか？", answer: "本記事で紹介する5院はすべて無料カウンセリングを実施しています。複数院を比較検討してから契約するのがおすすめです。" },
  { question: "支払い方法は？", answer: "現金・各種クレジットカード・医療ローンに対応しており、月額数千円からの分割払いも可能です。ローンを組む場合は総支払額を必ず確認しましょう。" },
];

const services = [
  { name: "湘南美容クリニック", type: "国内最大手", rate: "脂肪溶解注射 1部位 ¥2,750〜", points: ["全国200院以上の圧倒的な院数", "症例件数業界No.1クラス", "メンズ専門院も併設"], bestFor: "実績と安心感を重視する人。" },
  { name: "TCB東京中央美容外科", type: "コスパ重視", rate: "二重埋没法 ¥29,800〜", points: ["業界トップクラスの低価格", "全国100院以上展開", "学割・モニター割が豊富"], bestFor: "費用を抑えたい学生・若年層。" },
  { name: "品川美容外科", type: "老舗", rate: "BNLS脂肪溶解 ¥2,700〜", points: ["創業30年以上の実績", "BMC会員で施術料20〜30%OFF", "アフターケアが手厚い"], bestFor: "アフターケア重視の人。" },
  { name: "東京美容外科", type: "高品質", rate: "ヒアルロン酸 ¥27,500〜", points: ["医師の経験年数を重視", "施術後の安心保証制度", "完全予約制で待ち時間なし"], bestFor: "高品質な施術を希望する人。" },
  { name: "DIOクリニック", type: "医療ダイエット特化", rate: "月額 ¥9,900〜", points: ["医療ダイエット専門", "GLP-1・脂肪冷却・EMS統合プログラム", "全国主要都市に展開"], bestFor: "短期で痩せたい人。" },
];

export default function BeautyClinicComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "美容クリニック比較", url: `${siteConfig.url}/guide/beauty-clinic-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】美容皮膚科・医療ダイエット比較おすすめ5選" description="湘南美容クリニック・TCB・品川美容外科・東京美容外科・DIOクリニックの料金・人気施術・医療ダイエットを徹底比較。" url={`${siteConfig.url}/guide/beauty-clinic-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link><span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link><span className="mx-2">/</span>
        <span>美容クリニック比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】美容皮膚科・医療ダイエット比較おすすめ5選｜料金・施術メニューを徹底解説</h1>
        <p className="text-muted leading-relaxed">
          コロナ禍以降、自分への投資として美容医療を選ぶ人が急増しています。ただし価格・施術メニュー・アフターケアの差は院ごとに大きく、選び方を間違えると後悔するケースも。2026年最新版で人気の5クリニックを徹底比較し、賢いクリニック選びのポイントを解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">実績重視 → 湘南美容クリニック</span></p>
          <p><span className="font-bold">価格重視 → TCB東京中央美容外科</span></p>
          <p><span className="font-bold">アフターケア重視 → 品川美容外科</span></p>
          <p><span className="font-bold">医療ダイエット → DIOクリニック</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">美容クリニック選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          美容医療は「料金・症例数・医師の経験・アフターケア」の4軸で選ぶのが鉄則です。同じ施術でも院によって2〜3倍の価格差があり、安さだけで選ぶと施術後のトラブル対応が手薄なケースもあります。必ず複数院の無料カウンセリングを受け、料金見積もりとリスク説明を比較しましょう。SNSの広告だけでなく、第三者口コミサイト・症例写真・医師の経歴を必ずチェックすることが失敗回避の最重要ポイントです。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ美容クリニック5院の詳細</h2>
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
        <p className="text-xs text-muted mt-3">※ 料金は2026年4月時点の税込参考値です。最新情報は各院公式サイトでご確認ください。施術にはリスクや副作用があります。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">クリニック選びで失敗しない5つのチェック</h2>
        <div className="space-y-3 text-sm text-muted leading-relaxed">
          <p>1. 無料カウンセリングを必ず2〜3院で受ける。</p>
          <p>2. 医師から直接、リスク説明を受けてから契約。</p>
          <p>3. オプション追加で見積もりが膨らむケースに注意。</p>
          <p>4. アフターケア・保証制度の有無と内容を確認。</p>
          <p>5. 医療ローンを組む場合は総支払額・金利を要チェック。</p>
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
            美容クリニックは「金額」「実績」「相性」のバランスで選ぶことが大切。必ず複数院を比較し、医師のリスク説明に納得してから判断しましょう。施術費・通院費は決して安くないため、積立額や毎月の余裕資金を先に確認しておくと安心です。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">美容医療の費用を整理する</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/tools/savings-goal" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
            <div className="font-bold text-sm mb-1">施術費用の積立目安を計算する</div>
            <p className="text-xs text-muted">予算と期間を決めて、月々いくら準備するか確認できます。</p>
          </Link>
          <Link href="/guide/online-fitness-comparison" className="block bg-card-bg border border-card-border rounded-xl p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <div className="font-bold text-sm mb-1">運動習慣も整える</div>
            <p className="text-xs text-muted">施術だけでなく、継続しやすい体づくりの選択肢も比較します。</p>
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/online-fitness-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">オンラインフィットネス比較</span>
            <p className="text-xs text-muted mt-1">運動と組み合わせて</p>
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
