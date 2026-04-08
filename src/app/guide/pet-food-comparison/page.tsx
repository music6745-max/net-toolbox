import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】プレミアムペットフード比較おすすめ5選｜原材料・価格・安全性を徹底解説",
  description:
    "モグワン・カナガン・ピッコロ・ファインペッツ・ヤラーのプレミアムドッグフード／キャットフードを原材料・価格・安全性で徹底比較。愛犬・愛猫の健康を守る選び方も解説。",
  alternates: { canonical: `${siteConfig.url}/guide/pet-food-comparison` },
};

const faqItems = [
  {
    question: "プレミアムフードと市販フードの違いは？",
    answer:
      "プレミアムフードは肉・魚を主原料にし、穀物・人工添加物・着色料を使わないものが主流です。市販品より価格は2〜3倍ですが、消化吸収率が高く、便の量・体臭・毛艶などの改善効果が期待できます。",
  },
  {
    question: "グレインフリーは本当に良いのですか？",
    answer:
      "穀物アレルギーのある犬猫には有効ですが、すべてのペットに必要というわけではありません。穀物が原因で消化不良を起こす個体には推奨されますが、健康な犬猫であれば穀物入りでも問題ありません。",
  },
  {
    question: "定期便は途中解約できますか？",
    answer:
      "ほとんどのプレミアムフードブランドが定期便の解約・お休みに対応しており、回数縛りがないものも増えています。申込前に解約条件を必ず確認しましょう。",
  },
  {
    question: "子犬・シニア犬で同じフードを与えてもいいですか？",
    answer:
      "メーカーによっては全年齢対応(オールステージ)のフードもありますが、消化能力や必要カロリーが異なるため、ライフステージ別のフードを選ぶ方が理想的です。",
  },
];

const services = [
  {
    name: "モグワン",
    type: "オールステージ・チキン＆サーモン",
    price: "1袋(1.8kg) 5,038円〜",
    points: [
      "動物性タンパク質56%以上のグレインフリー",
      "ヒューマングレード原材料使用",
      "定期便最大20%オフ・回数縛りなし",
    ],
    bestFor: "食いつきと品質のバランスを重視する方。",
  },
  {
    name: "カナガン ドッグフード",
    type: "イギリス産・グレインフリー",
    price: "1袋(2kg) 5,533円〜",
    points: [
      "放し飼いチキン60%以上の高タンパク",
      "穀物・人工添加物不使用",
      "全犬種・全年齢対応",
    ],
    bestFor: "イギリス産の高品質フードを試したい方。",
  },
  {
    name: "ピッコロ ドッグフード",
    type: "シニア犬向け・低カロリー",
    price: "1袋(1.5kg) 4,708円〜",
    points: [
      "チキン＆サーモン70%の高タンパク低脂質",
      "グルコサミン・コンドロイチン配合",
      "シニア犬の健康維持をサポート",
    ],
    bestFor: "7歳以上のシニア犬を飼っている方。",
  },
  {
    name: "ファインペッツ",
    type: "消化吸収率87%・国内製造",
    price: "1袋(1.5kg) 3,394円〜",
    points: [
      "アヒル肉ベースの単一動物性タンパク",
      "消化吸収率87%で便の量が減る",
      "初回お試し1.5kg 1,100円",
    ],
    bestFor: "コストパフォーマンスを重視したい方。",
  },
  {
    name: "ヤラー オーガニックフード",
    type: "EU認証オーガニック",
    price: "1袋(2kg) 4,950円〜",
    points: [
      "EUオーガニック認証取得",
      "化学農薬・GMO・成長ホルモン不使用",
      "サステナブルな製造工程",
    ],
    bestFor: "オーガニック・サステナビリティ重視の方。",
  },
];

export default function PetFoodComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "プレミアムペットフード比較", url: `${siteConfig.url}/guide/pet-food-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】プレミアムペットフード比較おすすめ5選｜原材料・価格・安全性を徹底解説" description="モグワン・カナガン・ピッコロ・ファインペッツ・ヤラーのプレミアムドッグフード／キャットフードを原材料・価格・安全性で徹底比較。愛犬・愛猫の健康を守る選び方も解説。" url={`${siteConfig.url}/guide/pet-food-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>プレミアムペットフード比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】プレミアムペットフード比較おすすめ5選｜原材料・価格・安全性を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          愛犬・愛猫の健康寿命はフード選びで大きく変わります。市販フードと比較して2〜3倍の価格になるプレミアムフードですが、原材料の質・消化吸収率・添加物の有無を比較すると、その差は明らか。2026年現在、日本で人気の主要5ブランドを徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">食いつき重視 → モグワン</span></p>
          <p><span className="font-bold">高品質を求める → カナガン</span></p>
          <p><span className="font-bold">シニア犬向け → ピッコロ</span></p>
          <p><span className="font-bold">コスパ重視 → ファインペッツ</span></p>
          <p><span className="font-bold">オーガニック志向 → ヤラー</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">プレミアムペットフードの選び方</h2>
        <p className="text-muted leading-relaxed mb-4">
          プレミアムペットフードを選ぶときに最も重要なのは「主原料」です。1番目に肉・魚（チキン・ラム・サーモンなど）が記載されているものを選びましょう。トウモロコシ・小麦・大豆などの穀物が主原料のものは消化に負担をかけ、アレルギーの原因にもなります。動物性タンパク質の割合は最低でも50%以上を目安にしてください。
        </p>
        <p className="text-muted leading-relaxed mb-4">
          次に「添加物」のチェックです。BHA・BHTなどの合成酸化防止剤、人工着色料、香料は避けたいポイント。代わりにミックストコフェロール（天然ビタミンE）やローズマリー抽出物で酸化防止しているフードが理想です。最後に「価格と継続性」。プレミアムフードは高価ですが、消化吸収率が高い分、与える量は少なく済みます。定期便を活用すれば10〜20%オフで購入でき、長期的にはコストダウンが可能です。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめプレミアムフード5選の詳細</h2>
        <div className="space-y-6">
          {services.map((s, idx) => (
            <div key={s.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{s.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{s.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">参考価格：{s.price}</p>
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
        <p className="text-xs text-muted mt-3">※ 価格は2026年4月時点の参考値です。最新の価格・キャンペーンは各ブランド公式サイトでご確認ください。</p>
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
            プレミアムペットフードは初期コストこそ高いものの、愛犬・愛猫の健康寿命を伸ばす投資と考えれば決して高くありません。動物病院での治療費はフード代の何倍にもなりうるため、毎日の食事から健康をサポートする方が結果的に経済的です。定期便の活用、ライフステージに合わせた切替え、家計簿アプリでの月次コスト管理を組み合わせれば、ペットライフと家計のバランスを賢く保てます。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">家計管理に役立つツール</h2>
        <ComparisonTableCTA
          services={[
            {
              name: "弥生シリーズ",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU",
              highlight: "確定申告・経理の定番ソフト",
              price: "年額制",
              badge: "定番",
            },
            {
              name: "freee会計",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y",
              highlight: "クラウド会計の代表格",
              price: "月額制",
            },
            {
              name: "マネーフォワード クラウド会計",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6",
              highlight: "金融機関連携で自動仕訳",
              price: "月額制",
            },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/pet-insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ペット保険比較</span>
            <p className="text-xs text-muted mt-1">食事と一緒に保険も見直し</p>
          </Link>
          <Link href="/guide/food-delivery-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">食材宅配比較</span>
            <p className="text-xs text-muted mt-1">家族の食卓も品質重視で</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
