import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】ウォーターサーバー比較おすすめ5選｜料金・水質・サイズを徹底解説",
    description:
      "2026年最新のウォーターサーバーを徹底比較。プレミアムウォーター・コスモウォーター・フレシャス・アクアクララ・クリクラの料金・水質・サイズを詳しく解説。",
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    datePublished: "2026-04-07",
    dateModified: "2026-04-07",
    mainEntityOfPage: `${siteConfig.url}/guide/water-server-comparison`,
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

const services = [
  {
    name: "プレミアムウォーター",
    type: "天然水・契約者数No.1",
    price: "月額3,974円〜（24L）",
    plan: "ベーシックプラン3,974円・PREMIUM3年プラン3,283円",
    features: "天然水・デザイン豊富・モンドセレクション金賞",
    featureDetail: "全国6カ所の採水地から選べる天然水。amadanaコラボのおしゃれなサーバーも展開。3年契約のPREMIUMプランで実質割安",
    waterType: "天然水（非加熱処理）",
    bottle: "12L使い切りボトル（軽量・衛生的）",
    pros: [
      "天然水で水質が高い（モンドセレクション金賞）",
      "デザインがおしゃれ（amadana・cado等）",
      "ボトルが使い切りで衛生的",
      "全国6カ所の採水地から選べる",
      "妊婦・赤ちゃんプランあり（割引）",
      "契約者数No.1の安心感",
    ],
    cons: [
      "3年契約で解約金が高め（早期解約時20,000円）",
      "ベーシックプランは料金がやや高い",
      "ボトルの保管スペースが必要",
    ],
    bestFor:
      "天然水の品質を重視する方、デザイン性を求める方、長期利用を前提とする方に最適。妊娠中・乳幼児がいる家庭にも特別プランがあります。",
    url: "https://premium-water.net/",
    badge: "契約者数No.1",
    color: "blue",
  },
  {
    name: "コスモウォーター",
    type: "天然水・足元ボトル交換",
    price: "月額4,104円〜（24L）",
    plan: "ボトル代月額4,104円（2本・24L）",
    features: "足元ボトル交換・天然水3種・スタイリッシュデザイン",
    featureDetail: "ボトル交換が足元（下置き式）でラクラク。重い12Lボトルを持ち上げる必要がない。3つの採水地から選べる天然水",
    waterType: "天然水（非加熱処理）",
    bottle: "12L使い切りボトル（足元交換式）",
    pros: [
      "足元ボトル交換で力に自信がない方も安心",
      "天然水3種類から選択可能",
      "サーバーレンタル料無料",
      "デザインが洗練されている",
      "クリーン機能で衛生的",
      "解約金が他社より安め",
    ],
    cons: [
      "月額料金は他社と同等で安くはない",
      "サーバー本体がやや大きい",
      "毎月の最低注文ノルマあり",
    ],
    bestFor:
      "ボトル交換の負担を減らしたい方、特に女性や高齢者の家庭に最適。足元交換のラクさは一度使うと手放せません。",
    url: "https://www.cosmowater.com/",
    badge: "足元交換ラク",
    color: "green",
  },
  {
    name: "フレシャス",
    type: "デザイン重視・小型サーバー",
    price: "月額3,254円〜（18.6L）",
    plan: "デュオ月額3,254円〜（7.2L×3パック）",
    features: "コンパクトデザイン・グッドデザイン賞・天然水",
    featureDetail: "業界トップクラスの小型サーバー。グッドデザイン賞受賞のおしゃれな見た目。7.2Lの軽量パックで女性でもラクに交換可能",
    waterType: "天然水（富士・木曽・朝霧高原）",
    bottle: "7.2L軽量パック（軽い・コンパクト）",
    pros: [
      "業界最小クラスのコンパクトサイズ",
      "グッドデザイン賞受賞のおしゃれな外観",
      "7.2Lの軽量パックで交換が楽",
      "天然水3種類から選べる",
      "省エネモード搭載で電気代が安い",
      "デュオミニは卓上型もあり",
    ],
    cons: [
      "ボトル価格が他社より高め",
      "毎月の注文ノルマあり",
      "サポート対応は他社平均レベル",
    ],
    bestFor:
      "ワンルームや狭いキッチンにも置きたい方、デザイン性を重視する方に最適。一人暮らしや女性のお部屋にも違和感なくフィットします。",
    url: "https://www.frecious.jp/",
    badge: "デザイン賞",
    color: "purple",
  },
  {
    name: "アクアクララ",
    type: "RO水・カスタマーサポート充実",
    price: "月額3,908円〜（24L）",
    plan: "あんしんサポート料1,100円+水代",
    features: "RO水（純水）・カスタマー満足度高い・全国対応",
    featureDetail: "RO膜でろ過した安全な水（RO水）にミネラルを添加。サポート品質が高く、全国に営業所があり対面対応も可能",
    waterType: "RO水（ミネラル添加）",
    bottle: "12Lリターナブルボトル（リサイクル）",
    pros: [
      "RO水で不純物を徹底除去（安全性高い）",
      "カスタマーサポートが充実（電話・対面）",
      "ノルマなしで好きな時に注文可能",
      "全国に営業所がありメンテナンス対応",
      "ボトルがリターナブル（環境に優しい）",
      "ボトル交換頻度を自由に調整できる",
    ],
    cons: [
      "あんしんサポート料が別途必要",
      "天然水ではない（人工的にミネラル添加）",
      "リターナブルボトルの保管・回収が必要",
    ],
    bestFor:
      "サポートを重視する方、ノルマなしで自由に注文したい方に最適。赤ちゃんのミルク用としても安心して使えるRO水です。",
    url: "https://www.aquaclara.co.jp/",
    badge: "サポート充実",
    color: "orange",
  },
  {
    name: "クリクラ",
    type: "RO水・宅配水シェアNo.1",
    price: "ボトル代1,460円〜＋サーバーレンタル無料",
    plan: "サーバー代0円・ボトル代のみ・ノルマなし",
    features: "RO水・サーバー無料・ノルマなし・安心品質",
    featureDetail: "サーバーレンタル料0円・解約金なし・ノルマなしの三拍子。全国でシェアNo.1の宅配水。RO水で安全性も高い",
    waterType: "RO水（4種ミネラル添加）",
    bottle: "12Lリターナブルボトル",
    pros: [
      "サーバーレンタル料が完全無料",
      "解約金がかからず気軽に始められる",
      "ノルマなしで好きな時に注文",
      "RO水で4種ミネラル添加の安全な水",
      "全国宅配シェアNo.1の安心感",
      "メンテナンスも無料で対応",
    ],
    cons: [
      "天然水ではない",
      "リターナブルボトル方式",
      "おしゃれなデザインのサーバーは少ない",
    ],
    bestFor:
      "コストパフォーマンスを最重視する方、解約金や縛りがないサービスを求める方に最適。サーバー代無料・解約金ゼロは業界でも珍しい好条件です。",
    url: "https://www.crecla.jp/",
    badge: "サーバー無料",
    color: "red",
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  green: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  purple: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  orange: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  red: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
};

const faqItems = [
  {
    question: "天然水とRO水ではどちらがおすすめですか？",
    answer: "味や品質を重視するなら天然水（プレミアムウォーター・コスモウォーター・フレシャス）、安全性と価格を重視するならRO水（アクアクララ・クリクラ）がおすすめです。RO水は不純物を徹底除去した上でミネラルを添加するため、赤ちゃんのミルク用としても安心です。",
  },
  {
    question: "ウォーターサーバーの月額費用の目安は？",
    answer: "本体レンタル料・水代・電気代を合計すると、月額3,500〜5,500円程度が一般的です。サーバー無料のクリクラは安く済み、天然水のプレミアムウォーターは少し高めです。電気代は省エネモード搭載機種で月500〜800円程度です。",
  },
  {
    question: "解約金がかからないサーバーはどれですか？",
    answer: "クリクラは解約金が完全に0円です。アクアクララもプランによっては解約金がかかりません。一方プレミアムウォーター・コスモウォーター・フレシャスは1〜3年契約で、早期解約すると10,000〜20,000円程度の解約金が発生します。",
  },
  {
    question: "ボトル交換が楽なサーバーはどれですか？",
    answer: "コスモウォーターの「足元ボトル交換」が最も楽です。重い12Lボトルを持ち上げる必要がなく、足元から差し込むだけ。フレシャスも7.2Lの軽量パックで女性でも交換しやすい設計です。",
  },
  {
    question: "赤ちゃんのミルク作りにも使えますか？",
    answer: "はい、すべて使えます。特にRO水（アクアクララ・クリクラ）は不純物を徹底除去しているため、赤ちゃんのミルク作りに最適です。プレミアムウォーターは「プレミアムベビークラブ」という妊娠中・小学校入学前まで料金割引のサービスもあります。",
  },
  {
    question: "サーバーのサイズはどのくらいですか？",
    answer: "床置き型は幅30cm前後、奥行き35cm前後、高さ100〜130cm程度が一般的です。フレシャスは業界最小クラスでコンパクト。狭いキッチンや一人暮らしのお部屋にはフレシャスや卓上型がおすすめです。",
  },
];

export default function WaterServerComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "ウォーターサーバー比較おすすめ5選", url: `${siteConfig.url}/guide/water-server-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((item) => ({ question: item.question, answer: item.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>ウォーターサーバー比較おすすめ5選</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">生活</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】ウォーターサーバー比較おすすめ5選｜料金・水質・サイズを徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「ウォーターサーバーって本当に必要？どこを選べばいい？」そんな疑問にお答えします。この記事では、2026年現在おすすめのウォーターサーバー5選（プレミアムウォーター・コスモウォーター・フレシャス・アクアクララ・クリクラ）を料金・水質・サイズ・サポートで徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：タイプ別おすすめはこれ！</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold text-blue-700 dark:text-blue-300">天然水・デザイン → プレミアムウォーター</span>（契約者数No.1）</p>
          <p><span className="font-bold text-green-700 dark:text-green-300">交換のラクさ → コスモウォーター</span>（足元ボトル交換）</p>
          <p><span className="font-bold text-purple-700 dark:text-purple-300">小型・コンパクト → フレシャス</span>（グッドデザイン賞）</p>
          <p><span className="font-bold text-red-700 dark:text-red-300">コスト最重視 → クリクラ</span>（サーバー無料・解約金0円）</p>
        </div>
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="#why-water" className="text-primary hover:underline">1. ウォーターサーバーのメリット</a></li>
          <li><a href="#comparison-table" className="text-primary hover:underline">2. ウォーターサーバー5社比較表</a></li>
          <li><a href="#detail" className="text-primary hover:underline">3. 各サーバーの詳細レビュー</a></li>
          <li><a href="#use-cases" className="text-primary hover:underline">4. タイプ別おすすめサーバー</a></li>
          <li><a href="#how-to-choose" className="text-primary hover:underline">5. ウォーターサーバーの選び方</a></li>
          <li><a href="#faq" className="text-primary hover:underline">6. よくある質問（FAQ）</a></li>
          <li><a href="#summary" className="text-primary hover:underline">7. まとめ</a></li>
        </ul>
      </div>

      <section id="why-water" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. ウォーターサーバーのメリット</h2>
        <p className="text-muted leading-relaxed mb-4">ウォーターサーバーがあると、水まわりの生活が一変します。</p>
        <div className="space-y-3">
          {[
            { icon: "&#128166;", title: "美味しい水がいつでも飲める", desc: "天然水・RO水のおいしい水が、冷水・温水ともにすぐに使えます。ペットボトルを買い続ける手間もなくなります。" },
            { icon: "&#9749;", title: "お湯を沸かす手間が不要", desc: "コーヒー・お茶・カップ麺・赤ちゃんのミルクなど、温水が必要な時にすぐ使えます。電気ケトルやヤカンの出番が大幅に減ります。" },
            { icon: "&#127867;", title: "ペットボトルのゴミ削減", desc: "週末にペットボトルゴミを大量に出す必要がなくなり、ゴミ捨ての手間も削減。リターナブルボトルなら環境にも優しいです。" },
            { icon: "&#128104;&#8205;&#128107;", title: "防災・備蓄にもなる", desc: "未開封の天然水ボトルは長期保存可能。災害時の備蓄水としても役立ちます。" },
          ].map((item) => (
            <div key={item.title} className="bg-card-bg border border-card-border rounded-xl p-4">
              <h3 className="font-bold text-sm mb-1"><span dangerouslySetInnerHTML={{ __html: item.icon }} /> {item.title}</h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="comparison-table" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. ウォーターサーバー5社比較表</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">項目</th>
                <th className="border border-card-border p-3 text-left"><span className="text-blue-600 dark:text-blue-400">プレミアム</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-green-600 dark:text-green-400">コスモ</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-purple-600 dark:text-purple-400">フレシャス</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-orange-600 dark:text-orange-400">アクア</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-red-600 dark:text-red-400">クリクラ</span></th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "月額目安", p: "3,974円〜", c: "4,104円〜", f: "3,254円〜", a: "3,908円〜", k: "1,460円〜" },
                { label: "水の種類", p: "天然水", c: "天然水", f: "天然水", a: "RO水", k: "RO水" },
                { label: "サーバー代", p: "無料", c: "無料", f: "550円〜", a: "1,100円", k: "無料" },
                { label: "ボトル", p: "12L使い切り", c: "12L足元", f: "7.2L軽量", a: "12Lリターナブル", k: "12Lリターナブル" },
                { label: "ノルマ", p: "あり", c: "あり", f: "あり", a: "なし", k: "なし" },
                { label: "解約金", p: "20,000円", c: "9,900円", f: "9,900円〜", a: "プラン次第", k: "0円" },
              ].map((row) => (
                <tr key={row.label}>
                  <td className="border border-card-border p-3 font-medium bg-card-bg">{row.label}</td>
                  <td className="border border-card-border p-3">{row.p}</td>
                  <td className="border border-card-border p-3">{row.c}</td>
                  <td className="border border-card-border p-3">{row.f}</td>
                  <td className="border border-card-border p-3">{row.a}</td>
                  <td className="border border-card-border p-3">{row.k}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mt-2">※ 2026年4月時点の情報です。最新情報は各社公式サイトをご確認ください。</p>
      </section>

      <section id="detail" className="mb-10">
        <h2 className="text-2xl font-bold mb-6">3. 各サーバーの詳細レビュー</h2>
        <div className="space-y-10">
          {services.map((s, index) => (
            <div key={s.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{index + 1}</span>
                <h3 className="text-xl font-bold">{s.name}</h3>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colorMap[s.color]}`}>{s.badge}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 text-sm">
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">月額</span><span className="font-bold">{s.price}</span></div>
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">水の種類</span><span className="font-bold">{s.waterType}</span></div>
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">ボトル</span><span className="font-bold">{s.bottle}</span></div>
              </div>
              <div className="mb-5">
                <h4 className="text-sm font-bold mb-2">サービス詳細</h4>
                <div className="bg-background rounded-lg p-3 text-sm">
                  <p className="text-muted"><span className="font-medium">特徴：</span>{s.featureDetail}</p>
                </div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-5">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{s.bestFor}</p>
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-bold mb-2 text-green-600 dark:text-green-400">メリット</h4>
                <ul className="space-y-1">{s.pros.map((p) => (<li key={p} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{p}</li>))}</ul>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-2 text-red-600 dark:text-red-400">デメリット</h4>
                <ul className="space-y-1">{s.cons.map((c) => (<li key={c} className="text-sm text-muted flex items-start gap-2"><span className="text-red-500 mt-0.5">&#9651;</span>{c}</li>))}</ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="use-cases" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">4. タイプ別おすすめサーバー</h2>
        <div className="space-y-4">
          {[
            { scene: "天然水の品質と高級感を求める", app: "プレミアムウォーター", reason: "全国6カ所の採水地から選べる天然水。amadanaコラボのおしゃれなデザインで、インテリアにも馴染みます。" },
            { scene: "重いボトル交換を楽にしたい", app: "コスモウォーター", reason: "足元ボトル交換式で、重い12Lを持ち上げる必要なし。女性や高齢者にも安心です。" },
            { scene: "ワンルーム・狭いキッチンに置きたい", app: "フレシャス", reason: "業界最小クラスのコンパクトサイズ。グッドデザイン賞受賞のおしゃれな見た目で、空間を選びません。" },
            { scene: "サポートを重視・対面メンテ希望", app: "アクアクララ", reason: "全国に営業所があり、電話対応や対面メンテナンスも可能。ノルマなしで自由に注文できます。" },
            { scene: "コスト最優先・縛りなしで使いたい", app: "クリクラ", reason: "サーバー代0円・解約金0円・ノルマなしの三拍子。とにかく安く気軽に始めたい方に最適です。" },
          ].map((item) => (
            <div key={item.scene} className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-1">{item.scene}</h3>
              <p className="text-sm text-primary font-medium mb-2">{item.app}</p>
              <p className="text-sm text-muted leading-relaxed">{item.reason}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how-to-choose" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">5. ウォーターサーバーの選び方5つのポイント</h2>
        <div className="space-y-3">
          {[
            { num: "1", title: "天然水かRO水か", desc: "味や産地にこだわるなら天然水、安全性とコストならRO水。それぞれの特徴を理解して選びましょう。" },
            { num: "2", title: "月額の総コストを計算する", desc: "ボトル代だけでなく、サーバーレンタル料・電気代・配送料・サポート料を合計した総コストで比較しましょう。" },
            { num: "3", title: "サーバーのサイズと設置場所", desc: "床置き型・卓上型・コンパクト型など多様なサイズがあります。設置場所のスペースに合うか事前に確認しましょう。" },
            { num: "4", title: "ボトル交換のしやすさ", desc: "12Lボトルは約12kgと重め。力に自信がない方は足元交換のコスモウォーターや軽量パックのフレシャスがおすすめです。" },
            { num: "5", title: "解約金とノルマの有無", desc: "解約金が高いサーバーは長期契約前提です。気軽に試したいならクリクラなど解約金0円・ノルマなしのサーバーを選びましょう。" },
          ].map((item) => (
            <div key={item.num} className="bg-card-bg border border-card-border rounded-xl p-4">
              <div className="flex items-start gap-3">
                <span className="bg-primary text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{item.num}</span>
                <div><h3 className="font-bold text-sm mb-1">{item.title}</h3><p className="text-sm text-muted">{item.desc}</p></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">6. よくある質問（FAQ）</h2>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.question} className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold text-sm mb-2">Q. {item.question}</h3>
              <p className="text-sm text-muted leading-relaxed">A. {item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="summary" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">7. まとめ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <p className="text-muted leading-relaxed mb-4">
            ウォーターサーバーはライフスタイルや家族構成に合わせて選ぶことが大切です。天然水ならプレミアムウォーター、交換のラクさならコスモウォーター、コンパクトならフレシャス、サポート重視ならアクアクララ、コスト重視ならクリクラがおすすめです。
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm font-bold mb-2">この記事のポイント</p>
            <ul className="text-sm text-muted space-y-1">
              <li>・天然水デザイン派は「プレミアムウォーター」</li>
              <li>・交換ラクさは「コスモウォーター」（足元交換）</li>
              <li>・小型派は「フレシャス」（グッドデザイン賞）</li>
              <li>・サポート重視は「アクアクララ」</li>
              <li>・コスト最重視は「クリクラ」（サーバー無料）</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/wifi-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ポケットWiFi・ホームルーター比較</span>
            <p className="text-xs text-muted mt-1">在宅生活を快適にするインターネット回線</p>
          </Link>
          <Link href="/guide/insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ネット保険比較おすすめ5選</span>
            <p className="text-xs text-muted mt-1">家計の見直しに役立つ保険サービス</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
