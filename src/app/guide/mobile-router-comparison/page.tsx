import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】モバイルWi-Fi・ポケットWi-Fi比較おすすめ5選｜料金・速度・データ容量を徹底解説",
  description:
    "WiMAX・楽天モバイル・どこよりもWiFi・MUGEN WiFi・ZEUS WiFiなど主要モバイルWi-Fi5社を料金・速度・データ容量・縛りで徹底比較。在宅・外出・出張で失敗しない選び方を解説。",
  alternates: { canonical: `${siteConfig.url}/guide/mobile-router-comparison` },
};

const faqItems = [
  {
    question: "WiMAXとクラウドSIM型はどう違いますか？",
    answer:
      "WiMAXは自社回線で速度が安定、クラウドSIM型はソフトバンク・ドコモ・au回線を自動切替するため広いエリアで使えるのが特徴。速度重視ならWiMAX、エリア重視・海外利用ありならクラウドSIM型が適しています。",
  },
  {
    question: "無制限プランは本当に無制限ですか？",
    answer:
      "「実質無制限」と書かれていても、3日10GB・月100GBなどのソフトキャップが設けられている場合があります。動画視聴やテレワークでデータ消費が大きい方は、上限超過時の制限速度（128kbps〜1Mbps）も必ず確認しましょう。",
  },
  {
    question: "縛りなしと縛りありどちらがいいですか？",
    answer:
      "短期利用や引越し予定がある人は縛りなし、長期で同じ場所で使うなら縛りありの方が月額が安くなる傾向があります。違約金は2025年以降1,100円程度に抑えられているサービスも増えています。",
  },
  {
    question: "光回線の代わりになりますか？",
    answer:
      "テレワークや動画視聴中心なら多くの場面で代替可能ですが、オンラインゲームや4K動画ストリーミング、家族複数人で大量通信する場合は光回線の方が安定します。Ping値やアップロード速度を重視する用途では光回線が有利です。",
  },
  {
    question: "海外でも使えますか？",
    answer:
      "クラウドSIM型の一部サービス（MUGEN WiFi等）は世界100ヶ国以上で1日料金を支払えばそのまま利用可能。WiMAXは国内専用です。海外出張・旅行が多い方はクラウドSIM型を選びましょう。",
  },
];

const services = [
  { name: "WiMAX +5G (Broad WiMAX等)", type: "WiMAX", rate: "月額3,773円〜", points: ["速度・安定性が高い", "5G対応で下り最大2.7Gbps", "auスマホとセット割"], bestFor: "速度重視・自宅でも使いたい人。" },
  { name: "楽天モバイル Rakuten最強プラン", type: "キャリア", rate: "月額3,278円無制限", points: ["完全無制限で使い放題", "楽天ポイント還元", "ルーター本体も安価"], bestFor: "コスパ最強・楽天経済圏ユーザー。" },
  { name: "どこよりもWiFi", type: "クラウドSIM", rate: "月額2,508円〜", points: ["100GBプランが格安", "縛りなしプランあり", "口座振替対応"], bestFor: "月100GBで足りる節約派。" },
  { name: "MUGEN WiFi", type: "クラウドSIM", rate: "月額3,438円〜", points: ["100GBプランが安定", "30日間お試しモニター", "海外138カ国対応"], bestFor: "海外出張・お試し利用したい人。" },
  { name: "ZEUS WiFi", type: "クラウドSIM", rate: "月額2,361円〜", points: ["20/50/100GBから選べる", "縛りなしプランあり", "シンプル料金体系"], bestFor: "ライトユーザー・データ量に合わせたい人。" },
];

const mobileRouterAffiliateServices = [
  {
    name: "リチャージWiFi",
    url: "https://px.a8.net/svt/ejp?a8mat=4B1DXL+8J7OXE+57FS+5YZ77",
    highlight: "買い切り・チャージ式で短期利用やサブ回線に使いやすい",
    price: "従量課金",
    badge: "工事なし",
  },
  {
    name: "TCOMヒカリ",
    url: "https://px.a8.net/svt/ejp?a8mat=4B1DXL+8GTYIA+3HKU+1ZG8B6",
    highlight: "在宅勤務や家族利用で通信量が多い場合の固定回線候補",
    price: "月額制",
    badge: "光回線",
  },
  {
    name: "ITSUKI光",
    url: "https://px.a8.net/svt/ejp?a8mat=4B1DXL+8NDQ5U+4VXM+5YRHE",
    highlight: "シンプル料金の光回線。モバイルWi-Fiで足りない場合に比較",
    price: "月額制",
  },
];

export default function MobileRouterComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "モバイルWi-Fi比較", url: `${siteConfig.url}/guide/mobile-router-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>モバイルWi-Fi比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】モバイルWi-Fi・ポケットWi-Fi比較おすすめ5選｜料金・速度・データ容量を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          外出先でも自宅でもネットを使いたい人に欠かせないモバイルWi-Fi。WiMAX、楽天モバイル、クラウドSIMなど選択肢が増えた今、自分の使い方に合うサービスを選ぶことで月額を半額以下に抑えることも可能です。2026年最新の主要5サービスを徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">速度重視 → WiMAX +5G</span></p>
          <p><span className="font-bold">完全無制限 → 楽天モバイル</span></p>
          <p><span className="font-bold">節約志向 → どこよりもWiFi</span></p>
          <p><span className="font-bold">海外出張あり → MUGEN WiFi</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          工事なし・固定回線の候補を先に比較
        </h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          短期利用や外出先中心ならチャージ式WiFi、在宅勤務や家族利用が多いなら光回線も候補です。用途に合わせて通信費の見直し先を確認できます。
        </p>
        <ComparisonTableCTA
          page="mobile-router-comparison"
          positionPrefix="summary_mobile_router_cta"
          services={mobileRouterAffiliateServices}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">モバイルWi-Fi選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          モバイルWi-Fiの満足度は「料金」「速度」「データ容量」「縛り条件」の4つで決まります。月20GB以下のライトユーザーなら格安クラウドSIMで月額2,000円台が現実的。50〜100GB使うなら3,000円台、無制限を求めるならWiMAXか楽天モバイルを選ぶのが定番です。総務省の規制で違約金は近年大きく下がり、解約しやすくなったため「契約してから使い心地を判断する」スタイルも一般化しています。
        </p>
        <p className="text-muted leading-relaxed">
          地方や郊外でも使う予定の方はエリアマップを必ず確認し、可能であればお試し期間のあるサービスを選びましょう。また、テザリング併用で家族複数人が使う場合はWiMAXの据置型ホームルーター（HOME 5G等）の方が安定します。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめモバイルWi-Fi 5社の詳細</h2>
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
        <p className="text-xs text-muted mt-3">※ 料金は2026年4月時点の参考値です。キャンペーン適用後の月額は各社公式サイトでご確認ください。</p>
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
            モバイルWi-Fiは「自分のデータ使用量を正確に把握する」ことが最大のコスト削減ポイントです。スマホの設定画面から月間使用量を確認し、最適なプランを選びましょう。固定費の見直しは家計簿アプリや会計ソフトで継続管理することで、年間数万円の節約につながります。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">通信費を見直す候補</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          迷う場合は、まずモバイルWi-Fiで足りる通信量か、光回線が必要な使い方かを分けて比較しましょう。
        </p>
        <ComparisonTableCTA
          page="mobile-router-comparison"
          positionPrefix="footer_mobile_router_cta"
          services={mobileRouterAffiliateServices}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/wifi-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">WiFi比較</span>
            <p className="text-xs text-muted mt-1">自宅向け回線も検討</p>
          </Link>
          <Link href="/guide/sim-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">格安SIM比較</span>
            <p className="text-xs text-muted mt-1">スマホ通信費の削減</p>
          </Link>
          <Link href="/tools/mobile-rate-simulator" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">携帯料金シミュレーター</span>
            <p className="text-xs text-muted mt-1">スマホ料金もあわせて試算</p>
          </Link>
          <Link href="/tools/broadband-comparison-tool" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">光回線比較ツール</span>
            <p className="text-xs text-muted mt-1">固定回線が必要か確認</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
