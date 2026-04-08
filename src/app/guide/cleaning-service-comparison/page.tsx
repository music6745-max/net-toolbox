import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】家事代行・ハウスクリーニング比較おすすめ5選｜CaSy・ベアーズ・ダスキン徹底解説",
  description:
    "CaSy・ベアーズ・ダスキン・タスカジ・カジタクの家事代行・ハウスクリーニングサービスを料金・対応エリア・サービス内容で徹底比較。掃除・料理・洗濯から年末大掃除まで自分に合うサービスが見つかります。",
  alternates: { canonical: `${siteConfig.url}/guide/cleaning-service-comparison` },
};

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】家事代行・ハウスクリーニング比較おすすめ5選",
    description: "CaSy・ベアーズ・ダスキンなどを徹底比較。",
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    datePublished: "2026-04-08",
    dateModified: "2026-04-08",
    mainEntityOfPage: `${siteConfig.url}/guide/cleaning-service-comparison`,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

const services = [
  {
    name: "CaSy（カジー）",
    type: "マッチング型・低価格",
    price: "1時間2,560円〜",
    features: "業界最安級の料金で利用できるマッチング型家事代行サービス。アプリで簡単に予約でき、自分でスタッフを選べる仕組みも人気です。週次定期プランならさらにお得に。",
    pros: ["業界最安級の料金", "アプリで簡単予約", "スタッフ指名制度あり", "1時間からOK"],
    cons: ["スタッフの質にばらつき", "対応エリア限定", "人気スタッフは予約困難"],
    bestFor: "コスパ重視で家事代行を始めたい方、定期利用したい方に。",
    badge: "業界最安",
  },
  {
    name: "ベアーズ",
    type: "派遣型・老舗大手",
    price: "1時間3,300円〜",
    features: "1999年創業の家事代行業界最大手。独自研修を受けたスタッフが派遣される派遣型で、品質と安定感に定評があります。料理代行・掃除・整理収納と幅広く対応。",
    pros: ["業界最大手の安心感", "研修を受けたプロが対応", "料理代行も人気", "全国展開"],
    cons: ["料金は中〜高", "予約が混みやすい", "スポット料金は割高"],
    bestFor: "品質重視で安心して任せたい方、料理代行も依頼したい方に。",
    badge: "老舗大手",
  },
  {
    name: "ダスキン",
    type: "ハウスクリーニング特化",
    price: "1箇所15,000円〜",
    features: "業界最大手のハウスクリーニング会社。エアコン・換気扇・浴室・キッチンなど、プロの機材と技術で徹底洗浄してくれる本格派。年末大掃除や引越し時の利用が多いです。",
    pros: ["プロの機材で徹底洗浄", "全国対応", "経験豊富なスタッフ", "アフターサポートも充実"],
    cons: ["料金は高め", "1回完結型で日常向きではない", "予約が混雑する時期あり"],
    bestFor: "エアコン・換気扇など特殊清掃を依頼したい方、年末大掃除を任せたい方に。",
    badge: "本格派",
  },
  {
    name: "タスカジ",
    type: "個人依頼型・自由設計",
    price: "1時間1,500円〜",
    features: "登録家政婦と直接やりとりするマッチング型サービス。料金が業界トップクラスに安く、料理作り置き・掃除・洗濯など柔軟に対応してもらえる自由度の高さが魅力です。",
    pros: ["1時間1,500円〜の業界最安級", "料理作り置きが大人気", "外国人スタッフ多数で英語対応も", "自由度が高い"],
    cons: ["スタッフの質にばらつき", "個人契約に近い形式", "保険・補償は要確認"],
    bestFor: "コスパ最強で利用したい方、料理作り置きをお願いしたい方に。",
    badge: "コスパ最強",
  },
  {
    name: "カジタク（イオングループ）",
    type: "宅配クリーニング併設",
    price: "1回13,200円〜",
    features: "イオングループが運営する家事代行・ハウスクリーニングサービス。掃除・整理収納・洗濯宅配サービスがあり、宅配で布団や衣類のクリーニングもセットで頼める利便性が魅力。",
    pros: ["イオングループの安心感", "宅配クリーニング併設", "整理収納コンサルも人気", "料金パック制で分かりやすい"],
    cons: ["対応エリア限定", "1回完結型のパック中心", "予約が混雑しやすい"],
    bestFor: "イオンの安心感で頼みたい方、布団や衣類クリーニングもまとめたい方に。",
    badge: "イオン系",
  },
];

const faqItems = [
  { question: "家事代行とハウスクリーニングの違いは？", answer: "家事代行は掃除・洗濯・料理・買物など日常的な家事を行います。ハウスクリーニングはエアコン・換気扇・浴室など特殊な箇所をプロの機材で清掃する1回完結型サービスです。" },
  { question: "料金相場はいくらですか？", answer: "家事代行は1時間2,500〜3,500円が相場です。ハウスクリーニングはエアコン1台10,000〜15,000円、換気扇15,000〜20,000円程度。定期契約だと割引があるサービスも多いです。" },
  { question: "鍵預けが不安ですが大丈夫？", answer: "立ち合い利用も選択可能ですし、鍵預けの場合も保険・厳格なスタッフ管理で安心です。初回は立ち合いで様子を見るのがおすすめです。" },
  { question: "料理代行もできますか？", answer: "はい、ベアーズ・タスカジ・CaSyで対応可能です。タスカジの料理作り置きは特に人気で、3時間で1週間分の常備菜を作ってくれます。" },
  { question: "定期契約は割安ですか？", answer: "ほとんどのサービスで定期契約割引があります。週1〜月1のペースで使うなら定期契約が10〜20%割安になり、スタッフ固定で関係性も築けます。" },
  { question: "キャンセル料はかかりますか？", answer: "前日までは無料、当日は半額〜全額のサービスが多いです。各社のキャンセルポリシーを契約前に必ず確認しましょう。" },
];

export default function CleaningServiceComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "家事代行比較", url: `${siteConfig.url}/guide/cleaning-service-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>家事代行比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300">生活</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】家事代行・ハウスクリーニング比較おすすめ5選
        </h1>
        <p className="text-muted leading-relaxed">
          共働き・育児・介護で家事の時間が取れない方に支持される家事代行サービス。本記事ではCaSy・ベアーズ・ダスキン・タスカジ・カジタクの5社を徹底比較。料金・対応エリア・サービス内容を整理し、あなたに最適なサービス選びをサポートします。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">業界最安 → CaSy</span></p>
          <p><span className="font-bold">老舗大手 → ベアーズ</span></p>
          <p><span className="font-bold">本格清掃 → ダスキン</span></p>
          <p><span className="font-bold">コスパ最強 → タスカジ</span></p>
          <p><span className="font-bold">イオン系 → カジタク</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. 家事代行が選ばれる理由</h2>
        <p className="text-muted leading-relaxed mb-4">
          共働き世帯の増加・育児や介護との両立・在宅ワークの定着——現代人が抱える「時間の余裕がない」課題に対し、家事代行は最も即効性のあるソリューションです。1回数千円で2〜3時間の家事を委託できれば、その時間を仕事・休息・家族との時間に充てられます。
        </p>
        <p className="text-muted leading-relaxed">
          サービスは「日常家事代行（掃除・洗濯・料理）」と「ハウスクリーニング（エアコン・換気扇など特殊清掃）」に大別されます。目的に応じて使い分けるのが賢い活用法です。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. 5社比較表</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">項目</th>
                <th className="border border-card-border p-3 text-left">CaSy</th>
                <th className="border border-card-border p-3 text-left">ベアーズ</th>
                <th className="border border-card-border p-3 text-left">ダスキン</th>
                <th className="border border-card-border p-3 text-left">タスカジ</th>
                <th className="border border-card-border p-3 text-left">カジタク</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "形式", a: "マッチング", b: "派遣", c: "ハウス清掃", d: "マッチング", e: "派遣・パック" },
                { label: "料金", a: "2,560円〜/h", b: "3,300円〜/h", c: "15,000円〜/箇所", d: "1,500円〜/h", e: "13,200円〜/回" },
                { label: "料理代行", a: "○", b: "○", c: "×", d: "◎", e: "△" },
                { label: "全国対応", a: "都市部", b: "全国", c: "全国", d: "都市部", e: "都市部" },
                { label: "定期割引", a: "○", b: "○", c: "○", d: "○", e: "△" },
                { label: "おすすめ", a: "コスパ", b: "安心", c: "本格清掃", d: "節約", e: "イオン" },
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
        <h2 className="text-2xl font-bold mb-4">4. 失敗しない選び方</h2>
        <div className="space-y-3">
          {[
            { num: "1", title: "目的を明確化", desc: "日常家事か、特殊清掃か、料理代行か。目的次第で最適サービスが変わります。" },
            { num: "2", title: "料金体系を確認", desc: "時間制かパック制か、入会金・年会費の有無を必ずチェック。" },
            { num: "3", title: "対応エリア", desc: "都市部限定のサービスもあります。事前にエリア検索を。" },
            { num: "4", title: "保険・補償", desc: "破損・盗難時の保険・補償制度を確認。法人運営の方が安心感は高めです。" },
            { num: "5", title: "口コミ", desc: "実際の利用者の体験談を必ず確認しましょう。" },
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
            家事代行は時間と心の余裕を生む現代の必須インフラになりつつあります。コスパ重視ならCaSyかタスカジ、品質重視ならベアーズ、特殊清掃はダスキン、イオン会員はカジタク。まずはお試しプランで相性を確かめてから本契約しましょう。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/babysitter-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ベビーシッター比較</span>
            <p className="text-xs text-muted mt-1">育児もアウトソース</p>
          </Link>
          <Link href="/guide/junk-removal-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">不用品回収比較</span>
            <p className="text-xs text-muted mt-1">大掃除と一緒に</p>
          </Link>
          <Link href="/guide/moving-company-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">引越し業者比較</span>
            <p className="text-xs text-muted mt-1">引越し時にも</p>
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
