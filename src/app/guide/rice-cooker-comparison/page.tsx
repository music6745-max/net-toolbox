import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "炊飯器おすすめ5選【2026年最新】徹底比較｜選び方も解説",
  description:
    "ご飯のおいしさを引き上げたい方へ。象印・タイガー・パナソニック・三菱など人気5モデルを加熱方式・容量・価格で徹底比較し、家族構成別の最適解を解説します。",
  alternates: { canonical: `${siteConfig.url}/guide/rice-cooker-comparison` },
};

const faqItems = [
  {
    question: "IH・圧力IH・マイコンの違いは？",
    answer:
      "マイコン式は安価ですがムラが出やすい。IH式はムラが少なく中位機種、圧力IHは高温・対流効果でふっくら炊き上げる最上位方式です。3万円以上の機種はほぼ圧力IHです。",
  },
  {
    question: "5.5合と1升どちらを選ぶ？",
    answer:
      "1〜4人家族なら5.5合、5人以上やお弁当・冷凍ご飯ストック派は1升がおすすめ。1升は本体も大きく価格も上がるため、用途に合わせて選びましょう。",
  },
  {
    question: "炊飯器でおいしいご飯を炊くコツは？",
    answer:
      "新米を選ぶ・水加減を正確に・炊飯前の浸水・炊きあがり後の蒸らしと素早いほぐしの4点。炊飯器の銘柄炊き分けモードを活用するとさらに精度が上がります。",
  },
  {
    question: "高級炊飯器は本当に価値がありますか？",
    answer:
      "毎日3食ご飯を食べる家庭ほど価値が大きいです。圧力IHや本炭釜は粒立ち・甘みが明らかに違います。1日70円程度の差で5年使えると考えれば十分元が取れる買い物です。",
  },
];

const cookers = [
  { name: "象印 炎舞炊き NW-FC10", type: "圧力IH最上位", rate: "10万円台〜", points: ["7つのIHヒーターで激しい対流", "豪炎かまど釜で粒立ち抜群", "121通りの炊き分け"], bestFor: "ご飯のおいしさ最優先・贈答にも。" },
  { name: "タイガー 土鍋ご泡火炊き JRX", type: "圧力IH×土鍋", rate: "9万円台〜", points: ["本物の土鍋を使用", "微細泡で甘み引き出し", "玄米・雑穀も得意"], bestFor: "もっちり甘いご飯が好きな人。" },
  { name: "パナソニック ビストロ SR-V10BA", type: "圧力IH×ビストロ", rate: "8万円台〜", points: ["銘柄炊き分け63銘柄", "可変圧力でハリのある食感", "おどり炊き効果でムラなし"], bestFor: "銘柄米を楽しみたい人。" },
  { name: "三菱 本炭釜 紬", type: "本炭釜", rate: "10万円台〜", points: ["100%炭素材の本炭釜", "大火力IHで一粒一粒立つ", "蒸気レスで安全"], bestFor: "粒立ち重視・本格派。" },
  { name: "アイリスオーヤマ RC-IL50", type: "コスパIH", rate: "1万円台〜", points: ["1万円台のIH機", "40銘柄炊き分け搭載", "お手入れ簡単"], bestFor: "コスパ最優先・サブ機にも。" },
];

export default function RiceCookerComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "炊飯器比較", url: `${siteConfig.url}/guide/rice-cooker-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>炊飯器比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          炊飯器おすすめ5選【2026年最新】徹底比較｜選び方も解説
        </h1>
        <p className="text-muted leading-relaxed">
          炊飯器は同じお米でも炊き方で味が大きく変わります。本記事では象印・タイガー・パナソニック・三菱・アイリスオーヤマの主要5モデルを「加熱方式・釜素材・炊き分け・価格」で徹底比較し、家族構成と予算別の最適解を解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">最高峰の味 → 象印 炎舞炊き</span></p>
          <p><span className="font-bold">もっちり甘め → タイガー 土鍋ご泡火炊き</span></p>
          <p><span className="font-bold">銘柄炊き分け → パナソニック ビストロ</span></p>
          <p><span className="font-bold">コスパ重視 → アイリスオーヤマ RC-IL50</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">炊飯器選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          炊飯器選びで最重要なのは「加熱方式」と「内釜素材」です。加熱方式はマイコン＜IH＜圧力IHの順に高性能になり、3万円以上の機種はほとんどが圧力IH。ふっくらと甘みのあるご飯を炊くなら圧力IHが必須です。内釜は炭・土鍋・鉄・銅・ダイヤモンドコートなど各社が独自開発しており、熱伝導性と蓄熱性で味が決まります。
        </p>
        <p className="text-muted leading-relaxed">
          容量は1〜4人家族なら5.5合、5人以上または冷凍ストック派は1升がおすすめ。さらに最近のハイエンド機は40〜120銘柄の炊き分け機能を搭載しており、銘柄米それぞれの特徴を最大限引き出せます。年間で見ると電気代の差はわずか数百円程度なので、長期使用を前提に少し背伸びしても損はありません。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ炊飯器5モデルの詳細</h2>
        <div className="space-y-6">
          {cookers.map((b, idx) => (
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
            炊飯器は「加熱方式×内釜×容量」で選ぶのが正解。最高峰の味を追うなら象印炎舞炊き、もっちり甘めならタイガー土鍋、銘柄米を楽しむならパナソニックビストロ、コスパならアイリスオーヤマがベストです。毎日のご飯がおいしくなれば食卓の満足度は劇的に上がります。
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
          <Link href="/guide/meal-kit-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ミールキット比較</span>
            <p className="text-xs text-muted mt-1">食卓まわりの効率化</p>
          </Link>
          <Link href="/guide/furusato-tax-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ふるさと納税比較</span>
            <p className="text-xs text-muted mt-1">お米の返礼品でお得に</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
