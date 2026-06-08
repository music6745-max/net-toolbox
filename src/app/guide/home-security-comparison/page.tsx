import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】ホームセキュリティ比較おすすめ5社｜月額3,000円〜・SECOMとALSOKどっちがお得？",
  description:
    "SECOM・ALSOK・関電SOS・CSPなど主要ホームセキュリティ5社を月額料金・駆けつけ時間・補償内容で徹底比較。戸建て/マンション/一人暮らし別の最適プランと、初期費用0円で始めるレンタル型の裏技も解説。",
  alternates: { canonical: `${siteConfig.url}/guide/home-security-comparison` },
};

const faqItems = [
  {
    question: "ホームセキュリティの月額料金はいくらですか？",
    answer:
      "戸建て向けで月額4,500〜7,500円、マンション向けで月額3,000〜5,000円が相場です。初期費用は工事買取型で20〜30万円、レンタル型は0円〜数万円程度。長く住む予定なら買取、短期なら月額重視のレンタルがお得です。",
  },
  {
    question: "SECOMとALSOKどちらがおすすめですか？",
    answer:
      "SECOMは創業1962年で警備業界最大手、ALSOKは料金が比較的リーズナブルで全国カバー率も高めです。サービス内容は近年似てきており、最終的には自宅エリアでの駆けつけ拠点の近さや見積もり比較で決めると良いでしょう。",
  },
  {
    question: "賃貸でも導入できますか？",
    answer:
      "可能です。多くの会社で工事不要のレンタルプランや、両面テープで設置できるセンサータイプを用意しています。退去時の原状回復も簡単な機種が増えており、一人暮らし女性の防犯対策として人気が高まっています。",
  },
  {
    question: "駆けつけにどのくらい時間がかかりますか？",
    answer:
      "都市部では平均10〜15分以内、地方部では15〜25分以内が目安です。各社ともGPSで最も近い隊員を派遣するシステムを導入しています。契約前にお住まいエリアの平均到着時間を確認しましょう。",
  },
  {
    question: "火災や急病時にも対応できますか？",
    answer:
      "ほとんどのプランで火災センサー・非常通報ボタン・救急通報が標準搭載されています。シニア世帯向けには、ボタン1つで救急隊につながる「みまもりプラン」もあり、安否確認サービスとセットになっています。",
  },
];

const services = [
  { name: "SECOM ホームセキュリティ", type: "業界最大手", rate: "月額6,800円〜", points: ["業界最大手の安心感", "全国2,800拠点で駆けつけ", "火災・救急にも対応"], bestFor: "実績重視・初めて導入する人。" },
  { name: "ALSOK HOME ALSOKみまもりサポート", type: "業界2位", rate: "月額1,870円〜", points: ["低価格プランが豊富", "シニア向けみまもりも充実", "全国カバー率高め"], bestFor: "コスパ・シニア世帯。" },
  { name: "関電SOS", type: "関電グループ", rate: "月額4,180円〜", points: ["関西エリアで強い", "電気契約とセット割", "工事不要プランあり"], bestFor: "関西圏在住の方。" },
  { name: "セントラル警備保障(CSP)", type: "業界3位", rate: "月額4,400円〜", points: ["JR系の警備会社", "鉄道・商業施設の警備実績", "オフィス兼自宅にも対応"], bestFor: "首都圏在住・SOHO利用。" },
  { name: "Panasonic ホームネットワーク", type: "DIY型", rate: "月額0円〜", points: ["買い切り型で月額不要", "スマホで遠隔監視", "自分で設置可能"], bestFor: "ランニングコストを抑えたい人。" },
];

export default function HomeSecurityComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "ホームセキュリティ比較", url: `${siteConfig.url}/guide/home-security-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>ホームセキュリティ比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】ホームセキュリティ比較おすすめ5選｜SECOM・ALSOK・料金・補償を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          空き巣被害や高齢者の見守り需要から、ホームセキュリティの導入は年々増えています。SECOM、ALSOKなど主要5社の月額料金・初期費用・駆けつけ時間・補償内容を徹底比較し、戸建て・マンション・一人暮らしそれぞれに最適な選び方を解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">実績・安心感 → SECOM</span></p>
          <p><span className="font-bold">コスパ・シニア → ALSOK</span></p>
          <p><span className="font-bold">関西圏 → 関電SOS</span></p>
          <p><span className="font-bold">月額0円DIY → Panasonic</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">ホームセキュリティ選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          ホームセキュリティは「初期費用＋月額＋駆けつけ体制＋補償内容」の4点で総合判断します。買取型は初期費用20〜30万円ですが10年使えば月割では割安、レンタル型は初期費用ゼロで気軽に始められる代わりに長期では割高になります。窓・扉のセンサー数、屋外カメラの有無、火災検知の精度、非常ボタンの数など、家の構造に合わせた組み合わせが大切です。
        </p>
        <p className="text-muted leading-relaxed">
          シニア世帯であれば「みまもりプラン」を選ぶことで、長時間動きがない場合に自動通報する機能や、救急ボタン1つで駆けつけてもらえるサービスを追加できます。さらに各社、契約者向けに損害保険（盗難被害補償）を上限50〜100万円付帯しており、万一の被害も金銭面でカバーされます。複数社から無料見積もりを取り、自宅の構造に応じた最適な提案を受けるのが鉄則です。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめホームセキュリティ5社の詳細</h2>
        <div className="space-y-6">
          {services.map((b, idx) => (
            <div key={b.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{b.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{b.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">参考料金：{b.rate}</p>
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
        <p className="text-xs text-muted mt-3">※ 料金は2026年4月時点の参考値です。プラン詳細は各社公式サイトでご確認ください。</p>
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
            ホームセキュリティは「住まいの構造・家族構成・予算」を踏まえて最適なプランを選ぶのが正解。導入後は月額固定費として家計に組み込まれるため、機器レンタル料・補償内容・駆けつけ範囲を契約更新時に見直すのが賢い使い方です。安心と暮らしのコストバランスを取りながら、自分に合うサービスを選びましょう。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">住まいの防犯と補償見直しに役立つ内部ガイド</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Link href="/guide/security-camera-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">防犯カメラ比較</span>
            <p className="text-xs text-muted mt-1">DIY型カメラとの併用を検討</p>
          </Link>
          <Link href="/guide/fire-insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">火災保険比較</span>
            <p className="text-xs text-muted mt-1">盗難・建物補償も確認</p>
          </Link>
          <Link href="/guide/renovation-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">リフォーム比較</span>
            <p className="text-xs text-muted mt-1">窓・玄関まわりの防犯強化に</p>
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ネット保険比較</span>
            <p className="text-xs text-muted mt-1">住まいの保障を見直し</p>
          </Link>
          <Link href="/guide/housing-loan-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">住宅ローン比較</span>
            <p className="text-xs text-muted mt-1">マイホームのコスト最適化</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
