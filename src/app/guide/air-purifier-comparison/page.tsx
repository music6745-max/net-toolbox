import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "空気清浄機おすすめ5選【2026年最新】徹底比較｜選び方も解説",
  description:
    "花粉・PM2.5・ハウスダストに悩む方へ。シャープ・ダイキン・パナソニック・ダイソンなど人気5モデルの集塵性能・加湿機能・電気代を徹底比較し、部屋に合う1台を解説します。",
  alternates: { canonical: `${siteConfig.url}/guide/air-purifier-comparison` },
};

const faqItems = [
  {
    question: "空気清浄機の効果はどれくらいで実感できますか？",
    answer:
      "稼働開始から数十分〜1時間で空気中の浮遊物質が大幅に減少します。花粉症やハウスダスト由来のくしゃみ・鼻水は、寝室で連続稼働させることで翌朝の症状軽減を実感する人が多いです。",
  },
  {
    question: "適用畳数より大きいモデルを選ぶべき？",
    answer:
      "はい。ワンサイズ大きい適用畳数のモデルを選ぶと弱運転で静かに使えて電気代も抑えられます。寝室で使うなら2倍以上の畳数モデルがおすすめです。",
  },
  {
    question: "加湿機能付きと単機能どちらがいい？",
    answer:
      "冬の乾燥が気になるなら加湿一体型が便利。ただし加湿機能は手入れが必要なので、メンテが面倒な人や夏場メインなら単機能タイプの方がトータルコスト・手間が少なくなります。",
  },
  {
    question: "電気代はどれくらいかかりますか？",
    answer:
      "弱〜中運転で1日8時間使用しても月100〜300円程度。最新モデルは省エネ性能が高く、24時間稼働でも家計負担はわずかです。",
  },
];

const purifiers = [
  { name: "シャープ KI-RX75", type: "加湿空気清浄機", rate: "5万円台〜", points: ["プラズマクラスター25000で消臭・除菌", "加湿機能付きで冬も快適", "適用床面積〜34畳"], bestFor: "リビング向けオールラウンダー。" },
  { name: "ダイキン MCK70Z", type: "加湿空気清浄機", rate: "5万円台〜", points: ["ストリーマ技術でカビ・花粉・ウイルスを分解", "TAFUフィルター10年交換不要", "加湿性能も業界トップクラス"], bestFor: "花粉症・ペット臭が気になる家庭。" },
  { name: "パナソニック F-VC70XV", type: "加湿空気清浄機", rate: "4万円台〜", points: ["ナノイーXで脱臭・抗菌", "前面下部吸込みでホコリを効率回収", "10年交換不要フィルター"], bestFor: "リビング・寝室の幅広い用途に。" },
  { name: "ダイソン Purifier Cool", type: "扇風機一体型", rate: "7万円台〜", points: ["夏は扇風機・通年で空気清浄", "PM0.1まで99.95%除去", "アプリで空気質を可視化"], bestFor: "デザイン重視・1台で2役を狙う人。" },
  { name: "Levoit Core 400S", type: "海外コスパモデル", rate: "2万円台〜", points: ["高コスパで適用面積〜45畳", "Wi-Fi対応・スマホ操作可能", "静音モードで寝室にも最適"], bestFor: "コスパ・スマート家電好き。" },
];

export default function AirPurifierComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "空気清浄機比較", url: `${siteConfig.url}/guide/air-purifier-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>空気清浄機比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          空気清浄機おすすめ5選【2026年最新】徹底比較｜選び方も解説
        </h1>
        <p className="text-muted leading-relaxed">
          花粉・PM2.5・ハウスダスト・ペット臭・ウイルス対策まで、空気清浄機は現代の住環境に欠かせない家電です。本記事ではシャープ・ダイキン・パナソニック・ダイソン・Levoitなど主要5モデルを徹底比較し、部屋の広さや用途に合った最適な1台の選び方を解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">花粉・脱臭最強 → ダイキン MCK70Z</span></p>
          <p><span className="font-bold">リビング万能 → シャープ KI-RX75</span></p>
          <p><span className="font-bold">デザイン1台2役 → ダイソン Purifier Cool</span></p>
          <p><span className="font-bold">コスパ → Levoit Core 400S</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">空気清浄機選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          空気清浄機選びで最重要なのは「適用床面積」と「集塵方式」です。基本ルールとして、設置する部屋の畳数の2〜3倍に対応するモデルを選ぶこと。これにより常時弱運転で静かに、かつ効率よく空気を循環できます。さらにHEPAフィルター搭載モデルなら0.3μmの粒子を99.97%以上捕集でき、花粉・PM2.5・ハウスダストにも対応可能です。
        </p>
        <p className="text-muted leading-relaxed">
          国内メーカーは独自の脱臭・除菌技術を強みにしており、シャープのプラズマクラスター、ダイキンのストリーマ、パナソニックのナノイーXなどが代表例。海外勢ではLevoitやDysonが高コスパ・デザイン性で人気です。加湿機能の有無は乾燥対策とメンテ手間のトレードオフで判断しましょう。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ空気清浄機5モデルの詳細</h2>
        <div className="space-y-6">
          {purifiers.map((b, idx) => (
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
        <p className="text-xs text-muted mt-3">※ 価格は2026年4月時点の参考値です。最新価格は各メーカー・販売店でご確認ください。</p>
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
            空気清浄機は「適用畳数×集塵方式×メンテ性」で選ぶのが正解。リビング万能ならシャープ、花粉・脱臭最強ならダイキン、デザイン重視ならダイソン、コスパならLevoitが鉄板です。健康を守る投資として年間電気代も数千円程度。長く使える1台を選びましょう。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">家計管理に役立つツール</h2>
        <ComparisonTableCTA
          services={[
            { name: "弥生シリーズ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "家計・経費管理の定番", price: "年額制", badge: "定番" },
            { name: "freee会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "クラウド会計の代表格", price: "月額制" },
            { name: "マネーフォワード クラウド会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "金融機関連携で自動仕訳", price: "月額制" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/cordless-cleaner-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">コードレス掃除機比較</span>
            <p className="text-xs text-muted mt-1">ハウスダスト対策に</p>
          </Link>
          <Link href="/guide/electric-company-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">電力会社比較</span>
            <p className="text-xs text-muted mt-1">電気代の見直しに</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
