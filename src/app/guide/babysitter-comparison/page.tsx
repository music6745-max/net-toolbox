import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】ベビーシッターサービス比較おすすめ5選｜キッズライン・ポピンズ・スマートシッター徹底解説",
  description:
    "キッズライン・ポピンズシッター・スマートシッター・ル・アンジェ・ノーベルのベビーシッターサービスを料金・登録シッター数・サポート体制で徹底比較。安心して子どもを預けられるサービスが見つかります。",
  alternates: { canonical: `${siteConfig.url}/guide/babysitter-comparison` },
};

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】ベビーシッターサービス比較おすすめ5選",
    description: "キッズライン・ポピンズ・スマートシッターなどを徹底比較。",
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    datePublished: "2026-04-08",
    dateModified: "2026-04-08",
    mainEntityOfPage: `${siteConfig.url}/guide/babysitter-comparison`,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

const services = [
  {
    name: "キッズライン",
    type: "マッチング型・最大手",
    price: "1時間1,000円〜",
    features: "国内最大級の登録シッター数を誇るマッチング型サービス。プロフィール・口コミ・料金を比較してシッターを直接選べる仕組みで、リーズナブルな料金で利用しやすい点が魅力です。",
    pros: ["業界最大級のシッター数", "アプリで簡単予約", "1時間1,000円から", "口コミで選びやすい"],
    cons: ["シッターの質にばらつき", "人気シッターは予約困難", "初対面の不安"],
    bestFor: "コスパ重視で気軽に利用したい方、口コミで選びたい方に。",
    badge: "最大級",
  },
  {
    name: "ポピンズシッター",
    type: "教育サービス系・高品質",
    price: "1時間2,200円〜",
    features: "教育・保育大手のポピンズが運営する高品質ベビーシッターサービス。研修を受けたプロのシッターが多く、教育的サポートも期待できます。法人福利厚生として導入する企業も多数。",
    pros: ["保育のプロが多数登録", "教育サポートも充実", "法人利用にも強い", "厳格な研修制度"],
    cons: ["料金は高め", "都市部中心", "予約が混みやすい"],
    bestFor: "質と安心を最優先したい方、教育的サポートも求める方に。",
    badge: "高品質",
  },
  {
    name: "スマートシッター",
    type: "事前面談型・安心重視",
    price: "1時間2,500円〜",
    features: "シッターと事前にオンライン面談ができる点が特徴のサービス。初めて預ける不安を解消できる仕組みがあり、保育士・看護師資格保有者の比率が高いのも安心ポイント。",
    pros: ["事前にオンライン面談OK", "資格保有率が高い", "病児対応も相談可能", "万全のサポート体制"],
    cons: ["料金は中〜高", "面談に時間がかかる", "対応エリア限定"],
    bestFor: "初めて預ける方、お子さんの様子を見て慎重に選びたい方に。",
    badge: "安心重視",
  },
  {
    name: "ル・アンジェ",
    type: "高級・コンシェルジュ型",
    price: "1時間3,300円〜",
    features: "高級ベビーシッター・家事代行サービス。富裕層・芸能人にも利用される手厚いコンシェルジュ型対応で、全シッターが正社員として雇用されているのが特徴です。",
    pros: ["全シッターが正社員", "コンシェルジュ対応", "高級志向で安心", "急な依頼にも対応"],
    cons: ["料金は最高水準", "都市部中心", "年会費・登録料あり"],
    bestFor: "最高品質のサービスを求める方、企業役員・忙しい経営者層に。",
    badge: "高級志向",
  },
  {
    name: "ノーベル（病児保育）",
    type: "NPO・病児保育特化",
    price: "月額会員制・1時間2,000円相当",
    features: "認定NPO法人が運営する病児保育専門サービス。子どもが急な発熱・体調不良で保育園に行けない時に駆けつけて自宅保育を行います。働く親の強い味方。",
    pros: ["病児保育に特化", "100%対応保証", "看護師連携あり", "NPOの安心感"],
    cons: ["対応エリア限定", "月会費制", "通常保育には不向き"],
    bestFor: "共働きで子どもの病気に困った時の備えとして契約したい方に。",
    badge: "病児特化",
  },
];

const faqItems = [
  { question: "ベビーシッターは安全ですか？", answer: "信頼できるサービスを選び、シッターの資格・口コミ・面談などを必ず確認しましょう。本記事で紹介する5社はいずれも身元確認・研修制度を備えています。" },
  { question: "料金相場はいくらですか？", answer: "1時間1,000〜3,000円が相場です。マッチング型のキッズラインは1,000円台から、教育系・高級系は2,000〜3,300円程度になります。交通費・キャンセル料は別途。" },
  { question: "病児保育もしてくれますか？", answer: "ノーベルは病児保育専門。スマートシッター・ポピンズシッターの一部シッターも病児対応可能です。対応エリアと料金は事前確認を。" },
  { question: "急な依頼はできますか？", answer: "キッズラインやスマートシッターは当日依頼に対応するシッターもいますが、人気シッターほど早く埋まります。前日までの予約が安心です。" },
  { question: "国の補助はありますか？", answer: "東京都など自治体によっては「ベビーシッター利用支援事業」があり、1時間あたり数百円〜1,500円の助成を受けられる場合があります。お住まいの自治体に確認を。" },
  { question: "シッターの当たり外れはありますか？", answer: "あります。マッチング型は口コミと面談でしっかり選定、教育系・高級系はそもそもの研修水準が高い分はずれが少ない傾向です。" },
];

export default function BabysitterComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "ベビーシッター比較", url: `${siteConfig.url}/guide/babysitter-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>ベビーシッター比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300">育児</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】ベビーシッターサービス比較おすすめ5選
        </h1>
        <p className="text-muted leading-relaxed">
          共働き家庭の増加とともに、ベビーシッターサービスの需要が急増しています。本記事ではキッズライン・ポピンズシッター・スマートシッター・ル・アンジェ・ノーベルの5社を、料金・サポート体制・シッターの質で徹底比較。コスパ重視から高級志向、病児保育まで、目的別に最適なサービスを選べます。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">コスパ重視 → キッズライン</span></p>
          <p><span className="font-bold">高品質 → ポピンズシッター</span></p>
          <p><span className="font-bold">安心重視 → スマートシッター</span></p>
          <p><span className="font-bold">最高級 → ル・アンジェ</span></p>
          <p><span className="font-bold">病児対応 → ノーベル</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. ベビーシッター活用が増えている背景</h2>
        <p className="text-muted leading-relaxed mb-4">
          共働き世帯の増加、保育園待機児童問題、リモートワーク中の集中時間確保——こうした多様な背景から、ベビーシッターサービスの利用が一般化しつつあります。さらに東京都の利用支援事業など、自治体の助成制度も拡充され、料金面のハードルも下がっています。
        </p>
        <p className="text-muted leading-relaxed">
          サービスは大きく「マッチング型（自分で選ぶ）」と「派遣型（運営側がアサイン）」に分かれ、それぞれメリットがあります。料金・質・安心感のバランスから自分に合ったタイプを選びましょう。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. 5社比較表</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">項目</th>
                <th className="border border-card-border p-3 text-left">キッズライン</th>
                <th className="border border-card-border p-3 text-left">ポピンズ</th>
                <th className="border border-card-border p-3 text-left">スマート</th>
                <th className="border border-card-border p-3 text-left">ル・アンジェ</th>
                <th className="border border-card-border p-3 text-left">ノーベル</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "形式", a: "マッチング", b: "派遣", c: "派遣・面談", d: "派遣", e: "病児派遣" },
                { label: "料金/h", a: "1,000円〜", b: "2,200円〜", c: "2,500円〜", d: "3,300円〜", e: "2,000円相当" },
                { label: "対応エリア", a: "全国", b: "都市部", c: "都市部", d: "都市部", e: "限定" },
                { label: "病児", a: "△", b: "△", c: "○", d: "○", e: "◎" },
                { label: "資格率", a: "中", b: "高", c: "高", d: "高", e: "高" },
                { label: "おすすめ", a: "コスパ", b: "教育", c: "安心", d: "高級", e: "病児" },
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
            { num: "1", title: "シッターの資格・経験", desc: "保育士・看護師・幼稚園教諭などの資格保有者を選ぶと安心です。実務経験も確認しましょう。" },
            { num: "2", title: "事前面談の有無", desc: "オンライン面談で相性やお子さんの反応を確認できると、初回の不安が大幅に減ります。" },
            { num: "3", title: "口コミ・評価", desc: "マッチング型は他の利用者の評価を必ず確認。星評価だけでなく具体的なコメントも参考に。" },
            { num: "4", title: "保険・補償", desc: "万が一の事故に備え、サービスが損害保険に加入しているか確認しましょう。" },
            { num: "5", title: "助成金の活用", desc: "自治体の助成制度や企業の福利厚生で利用料が割安になる場合があります。" },
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
            ベビーシッター選びでは「安全性・料金・対応エリア・病児対応の有無」を軸に検討しましょう。コスパ重視はキッズライン、安心と質ならポピンズかスマートシッター、病児ならノーベル。複数サービスの併用や自治体助成も活用して、無理のない子育て環境を整えましょう。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <Link href="/tools/child-allowance-simulator" className="block bg-primary/10 border-2 border-primary rounded-xl p-5 text-center hover:bg-primary/20 transition-colors mb-6">
          <div className="text-sm font-bold text-primary mb-1">児童手当受給額シミュレーターを使う</div>
          <p className="text-xs text-muted">月額・年額・18歳までの累計受給額を試算</p>
        </Link>
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/cleaning-service-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">家事代行比較</span>
            <p className="text-xs text-muted mt-1">家事もアウトソース</p>
          </Link>
          <Link href="/guide/baby-goods-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ベビー用品比較</span>
            <p className="text-xs text-muted mt-1">育児グッズ選びの参考に</p>
          </Link>
          <Link href="/guide/online-counseling-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">オンラインカウンセリング</span>
            <p className="text-xs text-muted mt-1">育児疲れの相談にも</p>
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
