import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】24時間ジム比較おすすめ5選｜エニタイム・JOYFIT・FIT24徹底解説",
  description:
    "エニタイムフィットネス・JOYFIT24・FIT24・chocoZAP・ザ・ゴールドジムストレッチを月額・店舗数・設備で徹底比較。深夜利用や仕事帰りに最適な24時間営業ジムが見つかります。",
  alternates: { canonical: `${siteConfig.url}/guide/seven-day-fitness-comparison` },
};

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】24時間ジム比較おすすめ5選",
    description: "エニタイムフィットネス・JOYFIT24・FIT24・chocoZAPなど24時間営業ジムを徹底比較。",
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    datePublished: "2026-04-08",
    dateModified: "2026-04-08",
    mainEntityOfPage: `${siteConfig.url}/guide/seven-day-fitness-comparison`,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

const services = [
  {
    name: "エニタイムフィットネス",
    type: "業界最大手・世界共通利用",
    price: "月額7,480円〜（店舗により変動）",
    features: "国内1,100店舗以上・海外含め5,000店舗以上で相互利用可能。仕事帰りや出張先でも気軽に立ち寄れる業界最大手の24時間ジム",
    pros: ["全国1,100店舗以上で利用可能", "海外5,000店舗とも相互利用", "セキュリティキーで安心入館", "マシンが豊富で本格トレ可能"],
    cons: ["人気店舗は混雑する", "プールやスタジオはなし", "月額は中堅クラス"],
    bestFor: "出張や引っ越しが多い方、本格的な筋トレマシンを使いたい方におすすめ。",
    badge: "店舗数No.1",
  },
  {
    name: "JOYFIT24",
    type: "全国展開・コスパ良",
    price: "月額7,678円〜",
    features: "全国200店舗以上を展開する24時間ジム。マシンの種類が豊富で、店舗によってはスタジオやプール併設の総合フィットネスタイプもある",
    pros: ["全国相互利用プランあり", "総合フィットネス併設店も", "シャワー・更衣室完備", "女性向けエリア充実店舗も"],
    cons: ["店舗ごとに設備差が大きい", "相互利用は上位プラン", "店舗数はエニタイムに劣る"],
    bestFor: "プールやスタジオも使いたい方、女性向けエリアがある店舗を探したい方に。",
    badge: "総合型あり",
  },
  {
    name: "FIT24",
    type: "ローカル密着・低価格",
    price: "月額6,578円〜",
    features: "コスパ重視の24時間ジム。シンプルな筋トレ環境と必要十分な設備で、無駄な料金を払わず継続したい方に向いている",
    pros: ["業界トップクラスの低価格", "シンプルで使いやすい", "セキュリティ充実", "短期休会も可能"],
    cons: ["店舗数は限定的", "プール・スタジオなし", "知名度はやや低め"],
    bestFor: "自宅近くにあれば最もコスパよく続けられるジム。シンプルに筋トレだけしたい方に。",
    badge: "低価格",
  },
  {
    name: "chocoZAP",
    type: "コンビニジム・初心者向け",
    price: "月額3,278円",
    features: "RIZAPが運営する超低価格24時間ジム。マシン数は少ないが、エステ・脱毛・ホワイトニングなど美容サービスも使い放題で女性人気が高い",
    pros: ["業界最安級の月額3,278円", "服装自由でコンビニ感覚", "エステ・脱毛も使い放題", "全国1,500店舗以上"],
    cons: ["本格的な筋トレには物足りない", "無人運営でスタッフ不在", "混雑する時間帯あり"],
    bestFor: "運動初心者、美容サービスもまとめて使いたい方、とにかく安く始めたい方に。",
    badge: "業界最安級",
  },
  {
    name: "ゴールドジム",
    type: "本格派・上級者向け",
    price: "月額11,000円〜",
    features: "世界的に有名なボディビルダー御用達ジム。マシンの種類・重量ともに国内トップクラスで、プロアスリートも利用する本格派",
    pros: ["業界最高水準のマシン", "プロトレーナー在籍", "サウナ・プール併設店多数", "本気のトレーニーが集まる"],
    cons: ["月額料金が高め", "店舗数は少なめ", "初心者は気後れすることも"],
    bestFor: "本気で体を鍛えたい方、最高品質のマシンを使いたい上級者向け。",
    badge: "本格派",
  },
];

const faqItems = [
  { question: "24時間ジムは深夜でも安全ですか？", answer: "セキュリティキー入館・防犯カメラ・緊急ボタンを完備しているジムが多く、深夜でも比較的安全です。ただし無人運営のため、トラブル時はスタッフ対応が翌日以降になる点は注意しましょう。" },
  { question: "シャワーは使えますか？", answer: "ほとんどの24時間ジムでシャワー・更衣室を完備しています。chocoZAPはシャワーがない店舗もあるため、事前に店舗詳細を確認しましょう。" },
  { question: "未経験でも通えますか？", answer: "はい。chocoZAPは服装自由・マシンも簡単操作で初心者向けです。本格派ならエニタイムフィットネスやJOYFIT24で無料体験を活用しましょう。" },
  { question: "他店舗も利用できますか？", answer: "エニタイムフィットネスは入会店舗以外も全国・海外で相互利用可能です。JOYFIT24も上位プランで相互利用ができます。FIT24やchocoZAPは店舗ごとの利用が基本です。" },
  { question: "退会・休会は簡単ですか？", answer: "ほとんどのジムで月単位の退会・休会が可能ですが、月の途中での申請は翌月扱いになることが多いです。手続き締切日を必ず確認しましょう。" },
  { question: "プールやスタジオも使いたい場合は？", answer: "JOYFIT24の総合フィットネス併設店、ゴールドジムの大型店舗ならプールやスタジオも利用可能です。エニタイムフィットネスとchocoZAPは基本的にマシンジムです。" },
];

export default function SevenDayFitnessComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "24時間ジム比較", url: `${siteConfig.url}/guide/seven-day-fitness-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>24時間ジム比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">健康</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】24時間ジム比較おすすめ5選｜エニタイム・JOYFIT・FIT24・chocoZAP・ゴールドジム徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          仕事帰りや早朝に通いたい、深夜でもマイペースに筋トレしたい——そんなニーズに応える24時間営業ジムは、社会人を中心に人気を集めています。本記事ではエニタイムフィットネス・JOYFIT24・FIT24・chocoZAP・ゴールドジムの5社を、月額料金・店舗数・設備・利用可能エリアで徹底比較し、あなたに最適な1社を解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">店舗数重視 → エニタイムフィットネス</span>（全国1,100店舗）</p>
          <p><span className="font-bold">総合型を求める → JOYFIT24</span>（プール・スタジオ併設店あり）</p>
          <p><span className="font-bold">コスパ重視 → FIT24</span>（月額6,578円〜）</p>
          <p><span className="font-bold">最安・美容も → chocoZAP</span>（月額3,278円）</p>
          <p><span className="font-bold">本格派 → ゴールドジム</span>（業界最高水準マシン）</p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. 24時間ジムが選ばれる理由</h2>
        <p className="text-muted leading-relaxed mb-4">
          24時間営業ジムの最大の魅力は「自分の都合に合わせて通える」点です。早朝5時のトレーニング、深夜帰宅後の汗流し、休日の昼間どこでも自由。固定スケジュールが組みにくい現代人にとって、ライフスタイルに溶け込むフィットネス環境が手に入ります。さらに月額料金もスポーツクラブより安いケースが多く、シャワー・更衣室・Wi-Fi完備の店舗がほとんど。気軽に始めて長く続けられるのがポイントです。
        </p>
        <p className="text-muted leading-relaxed">
          一方で、無人運営のためスタッフサポートは限定的、トラブル対応は翌営業日になる点、店舗によって設備差が大きい点には注意が必要です。本記事では、各社の特徴と最新2026年4月時点の料金体系をまとめて比較します。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. 5社比較表</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">項目</th>
                <th className="border border-card-border p-3 text-left">エニタイム</th>
                <th className="border border-card-border p-3 text-left">JOYFIT24</th>
                <th className="border border-card-border p-3 text-left">FIT24</th>
                <th className="border border-card-border p-3 text-left">chocoZAP</th>
                <th className="border border-card-border p-3 text-left">ゴールド</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "月額", a: "7,480円〜", b: "7,678円〜", c: "6,578円〜", d: "3,278円", e: "11,000円〜" },
                { label: "店舗数", a: "1,100+", b: "200+", c: "50+", d: "1,500+", e: "70+" },
                { label: "相互利用", a: "全店舗", b: "上位プラン", c: "店舗単位", d: "全店舗", e: "上位会員" },
                { label: "シャワー", a: "○", b: "○", c: "○", d: "△", e: "○" },
                { label: "プール", a: "×", b: "一部○", c: "×", d: "×", e: "一部○" },
                { label: "おすすめ", a: "出張族", b: "総合派", c: "節約派", d: "初心者", e: "本格派" },
              ].map((row) => (
                <tr key={row.label}>
                  <td className="border border-card-border p-3 font-medium bg-card-bg">{row.label}</td>
                  <td className="border border-card-border p-3">{row.a}</td>
                  <td className="border border-card-border p-3">{row.b}</td>
                  <td className="border border-card-border p-3">{row.c}</td>
                  <td className="border border-card-border p-3">{row.d}</td>
                  <td className="border border-card-border p-3">{row.e}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mt-2">※ 2026年4月時点の情報です。料金は店舗・プランにより変動します。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">3. 各サービス詳細レビュー</h2>
        <div className="space-y-8">
          {services.map((s, i) => (
            <div key={s.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{i + 1}</span>
                <h3 className="text-xl font-bold">{s.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">{s.badge}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 text-sm">
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">料金</span><span className="font-bold">{s.price}</span></div>
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">タイプ</span><span className="font-bold">{s.type}</span></div>
              </div>
              <p className="text-sm text-muted mb-4 leading-relaxed">{s.features}</p>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{s.bestFor}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-bold mb-2 text-green-600 dark:text-green-400">メリット</h4>
                  <ul className="space-y-1">{s.pros.map((p) => (<li key={p} className="text-sm text-muted">○ {p}</li>))}</ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold mb-2 text-red-600 dark:text-red-400">デメリット</h4>
                  <ul className="space-y-1">{s.cons.map((c) => (<li key={c} className="text-sm text-muted">△ {c}</li>))}</ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">4. 24時間ジムの選び方5つのポイント</h2>
        <div className="space-y-3">
          {[
            { num: "1", title: "通いやすい立地", desc: "毎日・週数回通うため、自宅か職場から徒歩10分以内が理想。継続率を最も左右するポイントです。" },
            { num: "2", title: "月額料金と契約期間", desc: "単純な月額だけでなく、入会金・年会費・解約金もチェック。長期割引プランの有無も確認しましょう。" },
            { num: "3", title: "設備とマシンの種類", desc: "本格筋トレを目指すならフリーウェイトの充実度、有酸素中心ならランニングマシンの台数を確認。" },
            { num: "4", title: "シャワー・更衣室の清潔さ", desc: "見学時に必ず確認。混雑時間帯の状況も含めてリアルな利用感を把握しましょう。" },
            { num: "5", title: "相互利用の可否", desc: "出張や旅行が多い方は、全国・海外の他店舗を使えるエニタイムフィットネスがおすすめです。" },
          ].map((i) => (
            <div key={i.num} className="bg-card-bg border border-card-border rounded-xl p-4">
              <div className="flex items-start gap-3">
                <span className="bg-primary text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{i.num}</span>
                <div><h3 className="font-bold text-sm mb-1">{i.title}</h3><p className="text-sm text-muted">{i.desc}</p></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">5. よくある質問（FAQ）</h2>
        <div className="space-y-4">
          {faqItems.map((i) => (
            <div key={i.question} className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold text-sm mb-2">Q. {i.question}</h3>
              <p className="text-sm text-muted leading-relaxed">A. {i.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">6. まとめ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <p className="text-muted leading-relaxed mb-4">
            24時間営業ジムは、ライフスタイルに合わせて自由に通える点が最大の魅力です。出張族はエニタイム、総合型ならJOYFIT24、節約派はFIT24、初心者はchocoZAP、本格派はゴールドジムを選びましょう。気になる店舗の無料見学・体験を利用して、設備・雰囲気を必ず確認してから契約するのが失敗しないコツです。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/personal-gym-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">パーソナルジム比較</span>
            <p className="text-xs text-muted mt-1">本気のボディメイクなら</p>
          </Link>
          <Link href="/guide/yoga-studio-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ヨガスタジオ比較</span>
            <p className="text-xs text-muted mt-1">心と体を整える</p>
          </Link>
          <Link href="/guide/online-fitness-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">オンラインフィットネス</span>
            <p className="text-xs text-muted mt-1">自宅でも続けたい方へ</p>
          </Link>
          <Link href="/author" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">編集部について</span>
            <p className="text-xs text-muted mt-1">レビュー基準と編集方針</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
