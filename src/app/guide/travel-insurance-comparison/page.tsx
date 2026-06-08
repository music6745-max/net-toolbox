import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】海外旅行保険比較おすすめ5選｜AIG・損保ジャパン・たびほ徹底解説",
  description:
    "AIG損保・損保ジャパン・東京海上・たびほ・エポスカード付帯保険の補償内容・保険料・キャッシュレス対応を徹底比較。海外旅行で安心できる保険の選び方を解説します。",
  alternates: { canonical: `${siteConfig.url}/guide/travel-insurance-comparison` },
};

const faqItems = [
  {
    question: "クレジットカード付帯の保険だけで十分ですか？",
    answer:
      "短期旅行(3〜5日)の通常観光であれば、エポスカード等の自動付帯クレジットカード保険で最低限カバーできます。ただし疾病治療費の上限が200〜300万円と低めなので、長期旅行や持病がある方は別途の海外旅行保険加入が必須。アメリカでの盲腸手術は500万円超かかるケースもあります。",
  },
  {
    question: "ネット型と対面型どちらがお得ですか？",
    answer:
      "ネット型(たびほ・新海外旅行保険off!等)は対面型より20〜30%安く、補償内容も充実しています。スマホで5分で加入できる手軽さも魅力。一方、複雑な質問がある方や高額補償を希望する方は対面型がおすすめです。",
  },
  {
    question: "キャッシュレス対応とは？",
    answer:
      "現地で病院の治療費を立替えずに、保険会社が直接病院に支払う仕組みです。海外で数十万〜数百万円を立替えるのは現実的でないため、キャッシュレス対応の有無は必須チェック項目。AIG・東京海上・損保ジャパンは世界中の提携病院でキャッシュレス対応可能です。",
  },
  {
    question: "持ち物の盗難・破損は補償されますか？",
    answer:
      "「携行品損害」特約に加入していれば、カメラ・スマホ・ノートPCの盗難・破損が補償されます。1品あたりの上限(通常10万円)があるので、高額機材を持参する方は補償額を上げておきましょう。スリ被害が多い欧州・南米旅行では必須の特約です。",
  },
];

const services = [
  { name: "AIG損保 海外旅行保険", type: "対面型", rate: "1週間3,000円〜", points: ["世界中の病院でキャッシュレス対応", "疾病治療費無制限プランあり", "24時間日本語サポート"], bestFor: "長期旅行や万全の補償を求める人。" },
  { name: "損保ジャパン 新・海外旅行保険off!", type: "ネット型", rate: "1週間2,500円〜", points: ["ネット申込で20%割引", "必要な補償だけ選べる", "弁護士費用補償特約あり"], bestFor: "コスパ重視・短期旅行者。" },
  { name: "東京海上日動 海外旅行保険", type: "対面型", rate: "1週間3,200円〜", points: ["全世界キャッシュレス対応", "事故対応の安心感", "家族プランあり"], bestFor: "家族旅行・高額補償希望者。" },
  { name: "たびほ(ジェイアイ傷害火災保険)", type: "ネット型", rate: "1週間2,000円〜", points: ["業界最安水準・ネット完結", "出発当日でも申込可能", "持病でも申込可能なプランあり"], bestFor: "安さ重視・直前予約派。" },
  { name: "エポスカード付帯保険", type: "クレカ付帯", rate: "年会費無料", points: ["カード保有で自動付帯", "傷害治療費200万円", "携行品損害20万円"], bestFor: "短期旅行の補助保険として。" },
];

export default function TravelInsuranceComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "海外旅行保険比較", url: `${siteConfig.url}/guide/travel-insurance-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】海外旅行保険比較おすすめ5選" description="AIG損保・損保ジャパン・東京海上・たびほ・エポスカード付帯保険の補償内容・保険料・キャッシュレス対応を徹底比較。" url={`${siteConfig.url}/guide/travel-insurance-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>海外旅行保険比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】海外旅行保険比較おすすめ5選｜AIG・損保ジャパン・たびほ徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          海外旅行で最も恐ろしいのは、現地での病気・ケガ・盗難。アメリカで盲腸手術を受ければ500万円超、ヨーロッパでスリ被害に遭えばカメラ・スマホ・パスポートを一度に失うことも。本記事では大手損保3社・ネット型2社の海外旅行保険を補償内容・保険料・キャッシュレス対応で徹底比較し、安心できる選び方を解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">長期旅行・万全補償 → AIG損保</span></p>
          <p><span className="font-bold">コスパ重視 → 損保ジャパンoff!・たびほ</span></p>
          <p><span className="font-bold">家族旅行 → 東京海上日動</span></p>
          <p><span className="font-bold">短期出張・補助保険 → エポスカード付帯</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">海外旅行保険が必要な3つの理由</h2>
        <p className="text-muted leading-relaxed mb-4">
          1つ目は「医療費の高額化」です。日本の健康保険は海外で使えないため、現地病院での治療費は全額自己負担。アメリカの救急外来は1回30万円〜、入院すれば1日数十万円かかります。海外旅行保険があれば、これらが全額補償され安心して治療を受けられます。
        </p>
        <p className="text-muted leading-relaxed mb-4">
          2つ目は「盗難・紛失リスク」。観光地ではスリ・置き引き・引ったくりの被害が後を絶ちません。携行品損害特約に加入していれば、カメラ・スマホ・ノートPCの盗難・破損もカバーされます。3つ目は「賠償責任」。誤って他人にケガをさせたり物品を壊した場合、海外では訴訟リスクが日本より高く、賠償額も高額。賠償責任特約は必須です。
        </p>
        <p className="text-muted leading-relaxed">
          外務省海外安全ホームページでも、海外旅行時の保険加入を強く推奨しています。2024年の海外日本人援護統計によれば、援護を要した日本人のうち約40%が「病気・ケガ」と「盗難」に関する案件でした。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ海外旅行保険5社の詳細</h2>
        <div className="space-y-6">
          {services.map((s, idx) => (
            <div key={s.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{s.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{s.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">参考保険料：{s.rate}</p>
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
        <p className="text-xs text-muted mt-3">※ 保険料・補償内容は2026年4月時点の参考値です。最新条件は各公式サイトでご確認ください。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">補償内容の選び方ポイント</h2>
        <p className="text-muted leading-relaxed mb-4">
          海外旅行保険の補償項目で最も重要なのが「治療・救援費用」。最低でも1,000万円以上、できれば無制限プランを選びましょう。続いて重要なのが「賠償責任」(1億円以上)、「携行品損害」(30〜50万円)、「航空機遅延補償」(2〜3万円)。これらをカバーするフルパッケージプランが理想です。
        </p>
        <p className="text-muted leading-relaxed">
          保険料を抑えたい場合は、必要な補償だけ選べる「選べるオーダーメイドプラン」(損保ジャパンoff!・たびほ)がお得。例えば短期間のヨーロッパ旅行なら、治療費1,000万円・賠償責任1億円・携行品20万円程度で十分。保険料・航空券・宿泊費を旅行予算としてまとめておくと、頻繁に旅行する方は年間契約プランへの切替も検討しやすくなります。
        </p>
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
            海外旅行保険は「万が一」のためではなく「必ず起こる小さなトラブル」のために加入するもの。長期・高額補償ならAIG損保、コスパ重視ならネット型のたびほ・損保ジャパンoff!、短期旅行ならエポスカード等のクレカ付帯保険+αが最適解。旅行予算と補償額をセットで確認し、無理のない旅行プランを楽しみましょう。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">旅行保険と旅費の確認ツール</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/tools/travel-budget-simulator" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">旅行予算シミュレーター</span>
            <p className="text-xs text-muted mt-1">保険料を含めた総額確認に</p>
          </Link>
          <Link href="/guide/overseas-travel-guide" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">海外旅行準備ガイド</span>
            <p className="text-xs text-muted mt-1">保険以外の準備も確認</p>
          </Link>
          <Link href="/guide/credit-card-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">クレジットカード比較</span>
            <p className="text-xs text-muted mt-1">付帯保険つきカードも確認</p>
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/travel-booking-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">旅行予約サイト比較</span>
            <p className="text-xs text-muted mt-1">航空券・ホテルの探し方</p>
          </Link>
          <Link href="/guide/credit-card-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">クレジットカード比較</span>
            <p className="text-xs text-muted mt-1">付帯保険つきカードも</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
