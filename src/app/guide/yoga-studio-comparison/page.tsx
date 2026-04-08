import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】ヨガスタジオ・オンラインヨガ比較おすすめ5選｜LAVA・ホットヨガCALDO・SOELU徹底解説",
  description:
    "LAVA・ホットヨガCALDO・zen place・SOELU・LEAN BODYのオンラインヨガとスタジオヨガを料金・レッスン数・特徴で徹底比較。初心者から上級者まで自分に合うヨガが見つかります。",
  alternates: { canonical: `${siteConfig.url}/guide/yoga-studio-comparison` },
};

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】ヨガスタジオ・オンラインヨガ比較おすすめ5選",
    description: "LAVA・CALDO・zen place・SOELU・LEAN BODYを比較。",
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    datePublished: "2026-04-08",
    dateModified: "2026-04-08",
    mainEntityOfPage: `${siteConfig.url}/guide/yoga-studio-comparison`,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

const services = [
  {
    name: "LAVA",
    type: "業界最大手・全国展開",
    price: "月額9,800円〜（マンスリーフリー）",
    features: "全国440店舗以上を展開する業界最大手のホットヨガスタジオ。豊富なプログラム数と相互利用可能な店舗数で、初心者から上級者まで幅広く支持されています。",
    pros: ["全国440店舗以上で利用可能", "プログラム数が業界最多級", "初心者向けレッスン充実", "手ぶら体験実施中"],
    cons: ["人気店舗・人気時間は予約困難", "ホットヨガが中心", "オプション料金が増えがち"],
    bestFor: "初心者で店舗を選びたい方、転居・出張が多い方におすすめ。",
    badge: "店舗数No.1",
  },
  {
    name: "ホットヨガCALDO",
    type: "銀イオン水・床暖房式",
    price: "月額9,790円〜",
    features: "床暖房式で室温が均一になりやすく、銀イオンスチームで衛生面にも配慮した本格ホットヨガスタジオ。岩盤浴ヨガなど独自プログラムも人気です。",
    pros: ["床暖房で温度ムラが少ない", "銀イオンで衛生的", "岩盤浴ヨガが人気", "全国80店舗以上"],
    cons: ["店舗数はLAVAに劣る", "都市部中心の展開", "月額はやや高め"],
    bestFor: "本格的なホットヨガ環境と岩盤浴を体験したい方に。",
    badge: "本格ホット",
  },
  {
    name: "zen place（ピラティス含む）",
    type: "ピラティス併設・上質志向",
    price: "月額11,550円〜",
    features: "ヨガ・ピラティス両方を学べる上質スタジオ。少人数制レッスンも豊富で、本格的に体幹を鍛えたい方や姿勢改善を目指す方に支持されています。",
    pros: ["ヨガとピラティス両対応", "少人数レッスンが充実", "インストラクターの質が高い", "都内中心に人気"],
    cons: ["料金は高め", "店舗は都市部中心", "予約必須"],
    bestFor: "ピラティスもやりたい方、本格的に学びたい方、姿勢改善目的の方に。",
    badge: "上質志向",
  },
  {
    name: "SOELU（オンライン）",
    type: "ライブ配信オンラインヨガ",
    price: "月額1,078円〜",
    features: "国内最大級のオンラインヨガサービス。ライブレッスンとビデオレッスンを組み合わせ、自宅で本格ヨガが楽しめます。インストラクターからフィードバックを受けられるのが特徴。",
    pros: ["朝5時から深夜まで開講", "ライブで直接指導が受けられる", "月額1,078円から", "0歳児見守り保育付プランも"],
    cons: ["スタジオの臨場感はない", "自分で道具を用意", "通信環境が必要"],
    bestFor: "自宅で気軽にヨガを始めたい方、子育て中で外出が難しい方に。",
    badge: "オンライン人気No.1",
  },
  {
    name: "LEAN BODY（オンライン）",
    type: "動画見放題・サブスク",
    price: "月額1,480円（年契約）",
    features: "ヨガ・ピラティス・筋トレ・ダンスなど800以上の動画レッスンが見放題のフィットネス動画サブスク。自分のペースで好きな時間にトレーニングできます。",
    pros: ["800本以上の動画が見放題", "ヨガ以外のジャンルも豊富", "2週間無料体験あり", "1回5分から取り組める"],
    cons: ["ライブ指導はない", "モチベ維持が個人次第", "進捗管理は自己責任"],
    bestFor: "気が向いた時に短時間で運動したい方、ヨガ以外も試したい方に。",
    badge: "コスパ最強",
  },
];

const faqItems = [
  { question: "ヨガとピラティスの違いは何ですか？", answer: "ヨガは呼吸と精神の調和を重視するインド発祥の健康法で、柔軟性とリラクゼーション効果が高いです。ピラティスはドイツ発祥のリハビリ由来で、体幹強化や姿勢改善に特化しています。zen placeのように両方学べるスタジオも増えています。" },
  { question: "ホットヨガと常温ヨガどちらが良い？", answer: "ホットヨガは発汗デトックスや柔軟性向上に向いており、常温ヨガは精神統一やゆったりしたい方に向いています。冷え性や代謝アップが目的ならホットヨガがおすすめです。" },
  { question: "オンラインとスタジオどちらが続きますか？", answer: "通いやすさ重視ならオンライン（SOELU・LEAN BODY）、強制力や臨場感が欲しいならスタジオが続きやすい傾向です。両方併用する方も増えています。" },
  { question: "初心者でも大丈夫ですか？", answer: "はい。各社とも初心者向けの基本ポーズレッスンを必ず用意しています。LAVAやSOELUは特に初心者向けクラスが充実しています。" },
  { question: "料金は他に何がかかりますか？", answer: "入会金・登録料・水素水サーバー利用料などオプション料金がかかる店舗があります。総額を必ず確認しましょう。オンラインは月額のみのケースが多くシンプルです。" },
  { question: "妊娠中でも参加できますか？", answer: "マタニティヨガ専用クラスを設けているスタジオが多くあります。LAVAやCALDOではマタニティ向けプログラムを実施。必ず医師に相談してから参加しましょう。" },
];

export default function YogaStudioComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "ヨガスタジオ比較", url: `${siteConfig.url}/guide/yoga-studio-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>ヨガスタジオ比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">健康</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】ヨガスタジオ・オンラインヨガ比較おすすめ5選
        </h1>
        <p className="text-muted leading-relaxed">
          柔軟性アップ・姿勢改善・ストレス軽減——ヨガの効果は科学的にも認められ、性別年齢を問わず人気が高まっています。本記事ではスタジオ通学型のLAVA・CALDO・zen placeと、オンライン型のSOELU・LEAN BODYを徹底比較。料金・レッスン数・特徴・続けやすさから、あなたにぴったりの1社を見つけましょう。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">店舗数重視 → LAVA</span>（全国440店舗）</p>
          <p><span className="font-bold">本格ホット → CALDO</span>（床暖房・銀イオン）</p>
          <p><span className="font-bold">本気で学ぶ → zen place</span>（ピラティス併設）</p>
          <p><span className="font-bold">自宅で本格 → SOELU</span>（ライブレッスン）</p>
          <p><span className="font-bold">コスパ最強 → LEAN BODY</span>（動画見放題）</p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. ヨガが選ばれる理由</h2>
        <p className="text-muted leading-relaxed mb-4">
          ヨガは単なるフィットネスではなく、体・呼吸・心の調和を目指す総合的な健康法です。日常的に続けることで柔軟性が向上し、姿勢が整い、自律神経のバランスも改善するという研究結果が多数報告されています。デスクワークによる肩こり・腰痛にも効果的で、女性だけでなく男性にも支持が広がっています。
        </p>
        <p className="text-muted leading-relaxed">
          スタジオレッスンは強制力と臨場感が強み、オンラインは通いやすさとコスパが強み。自分のライフスタイルに合った形式を選ぶことが、継続の鍵です。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. 5社比較表</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">項目</th>
                <th className="border border-card-border p-3 text-left">LAVA</th>
                <th className="border border-card-border p-3 text-left">CALDO</th>
                <th className="border border-card-border p-3 text-left">zen place</th>
                <th className="border border-card-border p-3 text-left">SOELU</th>
                <th className="border border-card-border p-3 text-left">LEAN BODY</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "形式", a: "スタジオ", b: "スタジオ", c: "スタジオ", d: "オンラインライブ", e: "動画" },
                { label: "月額", a: "9,800円〜", b: "9,790円〜", c: "11,550円〜", d: "1,078円〜", e: "1,480円" },
                { label: "店舗", a: "440+", b: "80+", c: "都市部", d: "全国対応", e: "全国対応" },
                { label: "ホット", a: "○", b: "○", c: "△", d: "×", e: "×" },
                { label: "初心者", a: "◎", b: "○", c: "○", d: "◎", e: "○" },
                { label: "おすすめ", a: "万人向け", b: "本格派", c: "上級者", d: "在宅派", e: "節約派" },
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
        <p className="text-xs text-muted mt-2">※ 2026年4月時点。料金は店舗・プランにより異なります。</p>
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
        <h2 className="text-2xl font-bold mb-4">4. ヨガサービスの選び方</h2>
        <div className="space-y-3">
          {[
            { num: "1", title: "目的を明確にする", desc: "ダイエット・柔軟性向上・ストレス解消・姿勢改善など、目的によって最適なヨガの種類が変わります。" },
            { num: "2", title: "通い方を選ぶ", desc: "スタジオ通学とオンラインで継続率が大きく変わります。生活リズムに合った形式を選びましょう。" },
            { num: "3", title: "体験レッスンを必ず利用", desc: "ほぼすべてのサービスで無料or低価格の体験が用意されています。雰囲気を確認してから契約を。" },
            { num: "4", title: "総額で料金比較", desc: "入会金・水素水・タオルレンタルなど追加料金があるか確認しましょう。" },
            { num: "5", title: "予約の取りやすさ", desc: "人気店舗は予約困難な時間帯があります。仕事帰りに通いたい時間帯の枠を必ず確認しましょう。" },
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
          <p className="text-muted leading-relaxed">
            ヨガを継続するコツは「無理なく続けられる形式」を選ぶことです。万人向けで店舗が多いLAVA、本格ホットならCALDO、本気で学ぶならzen place、自宅派ならSOELUかLEAN BODY。まずは無料体験で雰囲気と相性を確認してから契約しましょう。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/online-fitness-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">オンラインフィットネス比較</span>
            <p className="text-xs text-muted mt-1">在宅で運動を続けたい方</p>
          </Link>
          <Link href="/guide/seven-day-fitness-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">24時間ジム比較</span>
            <p className="text-xs text-muted mt-1">深夜や早朝にも通える</p>
          </Link>
          <Link href="/guide/personal-gym-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">パーソナルジム比較</span>
            <p className="text-xs text-muted mt-1">マンツーマンで本気のボディメイク</p>
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
