import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】格安SIM比較おすすめ6選｜料金・速度・通話プランを徹底解説",
    description:
      "2026年最新の格安SIM・キャリアプランを徹底比較。楽天モバイル・ahamo・LINEMO・povo・UQモバイル・ワイモバイルの月額料金・データ容量・通信速度を詳しく解説。",
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    datePublished: "2026-04-05",
    dateModified: "2026-04-05",
    mainEntityOfPage: `${siteConfig.url}/guide/sim-comparison`,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const simServices = [
  {
    name: "楽天モバイル",
    carrier: "楽天回線（自社回線）",
    price: "月額1,078円〜3,278円",
    plan: "Rakuten最強プラン",
    data: "3GB / 20GB / 無制限（段階制）",
    dataDetail: "3GBまで1,078円・20GBまで2,178円・無制限3,278円",
    speed: "高速（5G対応エリア拡大中）",
    call: "Rakuten Link利用で国内通話無料",
    callDetail: "Rakuten Linkアプリ経由で国内通話かけ放題（無料）。標準アプリは22円/30秒",
    contract: "契約期間の縛りなし・解約金なし",
    pros: [
      "データ無制限で月額3,278円は業界最安クラス",
      "Rakuten Linkで国内通話が完全無料",
      "楽天ポイントが貯まる・使える",
      "契約期間の縛りなし・解約金なし",
      "海外でも2GBまでデータ通信無料（70カ国以上）",
      "テザリング無制限で使い放題",
    ],
    cons: [
      "地下や建物内など一部エリアで電波が弱い場合がある",
      "Rakuten Link経由の通話品質がやや不安定",
      "楽天回線エリア外ではパートナー回線（au）に切り替わる",
    ],
    bestFor:
      "データを大量に使う方、通話料を節約したい方に最適。無制限3,278円と通話無料の組み合わせは他社にない圧倒的なコスパです。",
    url: "https://network.mobile.rakuten.co.jp/",
    badge: "データ無制限最安",
    color: "pink",
  },
  {
    name: "ahamo",
    carrier: "ドコモ回線",
    price: "月額2,970円",
    plan: "ahamo（30GB）/ ahamo大盛り（110GB）",
    data: "30GB（大盛りオプション+80GBで110GB）",
    dataDetail: "30GBプラン2,970円。大盛りオプション+1,980円で110GB",
    speed: "非常に高速（ドコモ品質・5G対応）",
    call: "5分以内の国内通話無料",
    callDetail: "5分以内かけ放題が標準付帯。かけ放題オプション+1,100円/月",
    contract: "契約期間の縛りなし・解約金なし",
    pros: [
      "ドコモの高品質回線で通信速度が安定",
      "5分以内の国内通話無料が標準付帯",
      "海外82カ国でそのまま20GB使える",
      "大盛りオプションで110GBまで対応",
      "dカード払いでボーナスパケット+5GB",
      "契約期間の縛りなし",
    ],
    cons: [
      "30GBプランのみで小容量プランがない",
      "キャリアメールは有料オプション（月額330円）",
      "店頭サポートなし（オンライン専用）",
    ],
    bestFor:
      "ドコモの安定した通信品質を求める方、海外利用が多い方におすすめ。30GBあれば大半の方は十分で、5分かけ放題も標準付帯です。",
    url: "https://ahamo.com/",
    badge: "ドコモ品質",
    color: "blue",
  },
  {
    name: "LINEMO",
    carrier: "ソフトバンク回線",
    price: "月額990円〜2,970円",
    plan: "ミニプラン（3GB）/ スマホプラン（20GB）/ ベストプランV（30GB）",
    data: "3GB / 20GB / 30GB",
    dataDetail: "ミニプラン3GB 990円・スマホプラン20GB 2,728円・ベストプランV30GB 2,970円",
    speed: "高速（ソフトバンク品質・5G対応）",
    call: "22円/30秒（5分かけ放題550円/月、かけ放題1,650円/月）",
    callDetail: "通話定額オプション：5分以内550円/月、無制限1,650円/月",
    contract: "契約期間の縛りなし・解約金なし",
    pros: [
      "ソフトバンクの高品質回線で安定した通信",
      "ミニプラン3GB 990円は業界最安レベル",
      "LINEのデータ消費がゼロ（ギガフリー）",
      "契約期間の縛りなし・解約金なし",
      "eSIM対応で即日開通可能",
      "PayPayポイントが貯まるキャンペーンが豊富",
    ],
    cons: [
      "店頭サポートなし（オンライン専用）",
      "通話定額が別料金オプション",
      "家族割引がない",
    ],
    bestFor:
      "LINEのヘビーユーザーや月3GB程度で十分な方に最適。ミニプラン990円は業界最安クラスで、LINEギガフリーも大きなメリットです。",
    url: "https://www.linemo.jp/",
    badge: "LINEギガフリー",
    color: "green",
  },
  {
    name: "povo",
    carrier: "au回線",
    price: "基本料0円（トッピング制）",
    plan: "povo2.0（基本料0円+トッピング）",
    data: "トッピング選択制（1GB〜150GB）",
    dataDetail: "基本料0円。データ使い放題24時間330円・3GB30日間990円・20GB30日間2,700円・150GB180日間12,980円",
    speed: "高速（au品質・5G対応）",
    call: "22円/30秒（5分かけ放題550円/月、かけ放題1,650円/月）",
    callDetail: "通話トッピング：5分以内550円/月、無制限1,650円/月",
    contract: "契約期間の縛りなし・解約金なし",
    pros: [
      "基本料0円でサブ回線として最適",
      "必要な時だけトッピングで柔軟にデータ追加",
      "データ使い放題24時間330円が便利",
      "au品質の高速回線",
      "eSIM対応で即日開通",
      "180日間有効の長期トッピングもあり",
    ],
    cons: [
      "180日間以上トッピング未購入で利用停止の可能性",
      "店頭サポートなし（オンライン専用）",
      "トッピング管理が面倒に感じる人も",
    ],
    bestFor:
      "サブ回線として持ちたい方、データ使用量が月ごとに変動する方におすすめ。基本料0円なので維持費がかからず、必要な時だけトッピングで対応できます。",
    url: "https://povo.jp/",
    badge: "基本料0円",
    color: "blue",
  },
  {
    name: "UQモバイル",
    carrier: "au回線",
    price: "月額1,078円〜3,278円",
    plan: "ミニミニプラン（4GB）/ トクトクプラン（15GB）/ コミコミプラン（20GB）",
    data: "4GB / 15GB / 20GB",
    dataDetail: "ミニミニ4GB 1,078円・トクトク15GB 2,178円・コミコミ20GB 3,278円（10分かけ放題込み）",
    speed: "高速（au品質・5G対応）",
    call: "コミコミプランは10分かけ放題込み。他プランは別途オプション",
    callDetail: "コミコミプラン：10分かけ放題込み。通話放題1,100円/月（他プラン：60分/月550円、かけ放題1,980円/月）",
    contract: "契約期間の縛りなし・解約金なし",
    pros: [
      "au品質の安定した通信速度",
      "全国のauショップ・UQスポットで店頭サポート対応",
      "コミコミプランは10分かけ放題が含まれてお得",
      "自宅セット割・au PAYカード割で最大1,287円割引",
      "余ったデータの翌月繰り越しに対応",
      "節約モードでデータ消費ゼロ（ミニミニプラン）",
    ],
    cons: [
      "割引適用前の料金はやや高め",
      "大容量プランがない（最大20GB）",
      "オンライン専用プランと比べると割高感がある",
    ],
    bestFor:
      "店頭サポートが必要な方、auからの乗り換えを検討している方におすすめ。通信品質はauそのもので、実店舗での相談もできるので安心です。",
    url: "https://www.uqwimax.jp/",
    badge: "店頭サポート充実",
    color: "purple",
  },
  {
    name: "ワイモバイル",
    carrier: "ソフトバンク回線",
    price: "月額1,078円〜3,278円",
    plan: "シンプル2 S（4GB）/ M（20GB）/ L（30GB）",
    data: "4GB / 20GB / 30GB",
    dataDetail: "シンプル2 S 4GB 1,078円・M 20GB 2,178円・L 30GB 3,278円（家族割・おうち割適用時）",
    speed: "高速（ソフトバンク品質・5G対応）",
    call: "22円/30秒（だれとでも定額+880円/月、スーパーだれとでも定額+1,980円/月）",
    callDetail: "だれとでも定額（10分以内）880円/月、スーパーだれとでも定額（無制限）1,980円/月",
    contract: "契約期間の縛りなし・解約金なし",
    pros: [
      "ソフトバンク品質の安定した通信速度",
      "全国のワイモバイルショップ・ソフトバンクショップで店頭サポート",
      "家族割引で2回線目以降1,100円割引",
      "PayPay経済圏との親和性が高い",
      "Yahoo!プレミアム会員特典が無料",
      "余ったデータの翌月繰り越しに対応",
    ],
    cons: [
      "割引なしの定価はやや高め",
      "データ無制限プランがない",
      "オンライン専用プランと比べると割高",
    ],
    bestFor:
      "家族で乗り換えたい方、店頭サポートが必要な方に最適。家族割で2回線目以降は大幅割引され、PayPayポイントも貯まりやすいです。",
    url: "https://www.ymobile.jp/",
    badge: "家族割がお得",
    color: "red",
  },
];

const colorMap: Record<string, string> = {
  pink: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  green:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  purple:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  red: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
};

const faqItems = [
  {
    question: "格安SIMに乗り換えるとどれくらい安くなりますか？",
    answer:
      "大手キャリア（ドコモ・au・ソフトバンク）の一般的なプランは月額7,000〜8,000円程度ですが、格安SIMに乗り換えると月額1,000〜3,000円程度になります。年間で約5〜8万円の節約が可能です。通信品質は大手キャリアの回線を使用しているため、大きな差はありません。",
  },
  {
    question: "格安SIMに乗り換える際、電話番号は引き継げますか？",
    answer:
      "はい、MNP（携帯電話番号ポータビリティ）を利用すれば、現在の電話番号をそのまま引き継げます。2023年5月からはMNPワンストップ方式が導入され、乗り換え先での手続きだけで完了します。転出元への連絡は不要です。",
  },
  {
    question: "格安SIMでも5Gは使えますか？",
    answer:
      "はい、この記事で紹介した6社すべてが5Gに対応しています。ただし、5G対応エリアはまだ拡大中のため、お住まいの地域が5Gエリア内かどうかは各社の公式サイトで確認することをおすすめします。5G対応スマートフォンが必要な点もご注意ください。",
  },
  {
    question: "通信速度は大手キャリアと比べて遅くなりますか？",
    answer:
      "ahamo・LINEMO・povoはそれぞれドコモ・ソフトバンク・auの回線をそのまま使用しているため、通信速度は大手キャリアとほぼ同等です。UQモバイル・ワイモバイルも同様にau・ソフトバンク品質です。楽天モバイルは自社回線のため一部エリアで差がありますが、都市部では十分な速度が出ます。",
  },
  {
    question: "店頭でサポートを受けられる格安SIMはどれですか？",
    answer:
      "UQモバイルは全国のauショップ・UQスポット、ワイモバイルは全国のワイモバイルショップ・ソフトバンクショップ、楽天モバイルは楽天モバイルショップで店頭サポートを受けられます。ahamo・LINEMO・povoはオンライン専用プランのため、店頭サポートはありません。",
  },
  {
    question: "格安SIMでもLINEは使えますか？",
    answer:
      "はい、すべての格安SIMでLINEは問題なく使えます。特にLINEMOはLINEのデータ消費がゼロになる「LINEギガフリー」が特長で、LINEのトーク・音声通話・ビデオ通話がデータ容量を消費しません。LINEをよく使う方にはLINEMOがおすすめです。",
  },
  {
    question: "データ使い放題で一番安いのはどこですか？",
    answer:
      "データ無制限プランで最も安いのは楽天モバイルの月額3,278円です。他社ではahamoの大盛りオプション（110GB）が月額4,950円となります。完全な無制限プランを提供しているのは楽天モバイルのみで、テザリングも無制限で利用できます。",
  },
];

export default function SimComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          {
            name: "格安SIM比較おすすめ6選",
            url: `${siteConfig.url}/guide/sim-comparison`,
          },
        ]}
      />
      <FAQJsonLd
        items={faqItems.map((item) => ({
          question: item.question,
          answer: item.answer,
        }))}
      />

      {/* Breadcrumb */}
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">
          ホーム
        </Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">
          ガイド
        </Link>
        <span className="mx-2">/</span>
        <span>格安SIM比較おすすめ6選</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
            比較
          </span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            スマホ
          </span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】格安SIM比較おすすめ6選｜料金・速度・通話プランを徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「格安SIMに乗り換えたいけど、どこがいいの？」そんな疑問にお答えします。この記事では、2026年現在おすすめの格安SIM・キャリアプラン6社（楽天モバイル・ahamo・LINEMO・povo・UQモバイル・ワイモバイル）を月額料金・データ容量・通信速度・通話プラン・契約条件で徹底比較。あなたに最適な格安SIMの選び方を解説します。
        </p>
      </div>

      {/* Quick Recommendation */}
      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：タイプ別おすすめはこれ！</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p>
            <span className="font-bold text-pink-700 dark:text-pink-300">
              データ無制限で安く使いたい → 楽天モバイル
            </span>
            （無制限3,278円＋通話無料）
          </p>
          <p>
            <span className="font-bold text-blue-700 dark:text-blue-300">
              通信品質を重視するなら → ahamo
            </span>
            （ドコモ品質＋30GB＋5分かけ放題）
          </p>
          <p>
            <span className="font-bold text-green-700 dark:text-green-300">
              とにかく安く使いたい → LINEMO
            </span>
            （3GB 990円＋LINEギガフリー）
          </p>
          <p>
            <span className="font-bold text-blue-700 dark:text-blue-300">
              サブ回線として持ちたい → povo
            </span>
            （基本料0円＋必要な時だけトッピング）
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#why-switch" className="text-primary hover:underline">
              1. 格安SIMに乗り換えるメリット
            </a>
          </li>
          <li>
            <a href="#comparison-table" className="text-primary hover:underline">
              2. 格安SIM 6社の料金・スペック比較表
            </a>
          </li>
          <li>
            <a href="#detail" className="text-primary hover:underline">
              3. 各社の詳細レビュー（メリット・デメリット）
            </a>
          </li>
          <li>
            <a href="#use-cases" className="text-primary hover:underline">
              4. 利用タイプ別おすすめ格安SIM
            </a>
          </li>
          <li>
            <a href="#how-to-switch" className="text-primary hover:underline">
              5. 格安SIMへの乗り換え手順
            </a>
          </li>
          <li>
            <a href="#how-to-choose" className="text-primary hover:underline">
              6. 格安SIMの選び方5つのポイント
            </a>
          </li>
          <li>
            <a href="#faq" className="text-primary hover:underline">
              7. よくある質問（FAQ）
            </a>
          </li>
          <li>
            <a href="#summary" className="text-primary hover:underline">
              8. まとめ
            </a>
          </li>
        </ul>
      </div>

      {/* Section 1 - Why Switch */}
      <section id="why-switch" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          1. 格安SIMに乗り換えるメリット
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          大手キャリアから格安SIM・サブブランドに乗り換えることで、通信品質をほぼ維持しながら大幅な節約が可能です。
        </p>
        <div className="space-y-3">
          {[
            {
              icon: "&#128176;",
              title: "月額料金が大幅に安くなる",
              desc: "大手キャリアの月額7,000〜8,000円が、格安SIMなら1,000〜3,000円に。年間で5〜8万円の節約が期待できます。家族4人なら年間20万円以上の節約も可能です。",
            },
            {
              icon: "&#128246;",
              title: "通信品質は大手キャリアとほぼ同等",
              desc: "ahamo（ドコモ回線）、LINEMO（ソフトバンク回線）、povo（au回線）など、大手キャリアの回線をそのまま使用するため通信速度はほぼ同等です。",
            },
            {
              icon: "&#128275;",
              title: "契約期間の縛りなし",
              desc: "今回紹介する6社はすべて契約期間の縛りなし・解約金なし。合わなければいつでも無料で解約や乗り換えができます。",
            },
            {
              icon: "&#128241;",
              title: "MNPで電話番号そのまま",
              desc: "MNPワンストップ方式により、乗り換え先での手続きだけで現在の電話番号をそのまま引き継げます。転出元への連絡は不要です。",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-card-bg border border-card-border rounded-xl p-4"
            >
              <h3 className="font-bold text-sm mb-1">
                <span dangerouslySetInnerHTML={{ __html: item.icon }} />{" "}
                {item.title}
              </h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2 - Comparison Table */}
      <section id="comparison-table" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          2. 格安SIM 6社の料金・スペック比較表
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          まずは6社の主要スペックを一覧で比較してみましょう。
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">
                  項目
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-pink-600 dark:text-pink-400">楽天モバイル</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-blue-600 dark:text-blue-400">ahamo</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-green-600 dark:text-green-400">LINEMO</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-blue-600 dark:text-blue-400">povo</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-purple-600 dark:text-purple-400">UQモバイル</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-red-600 dark:text-red-400">ワイモバイル</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  label: "月額料金",
                  rakuten: "1,078〜3,278円",
                  ahamo: "2,970円",
                  linemo: "990〜2,970円",
                  povo: "基本料0円",
                  uq: "1,078〜3,278円",
                  ymobile: "1,078〜3,278円",
                },
                {
                  label: "データ容量",
                  rakuten: "無制限",
                  ahamo: "30GB / 110GB",
                  linemo: "3〜30GB",
                  povo: "トッピング制",
                  uq: "4〜20GB",
                  ymobile: "4〜30GB",
                },
                {
                  label: "使用回線",
                  rakuten: "楽天（自社）",
                  ahamo: "ドコモ",
                  linemo: "ソフトバンク",
                  povo: "au",
                  uq: "au",
                  ymobile: "ソフトバンク",
                },
                {
                  label: "通信速度",
                  rakuten: "高速",
                  ahamo: "非常に高速",
                  linemo: "高速",
                  povo: "高速",
                  uq: "高速",
                  ymobile: "高速",
                },
                {
                  label: "5G対応",
                  rakuten: "対応",
                  ahamo: "対応",
                  linemo: "対応",
                  povo: "対応",
                  uq: "対応",
                  ymobile: "対応",
                },
                {
                  label: "通話プラン",
                  rakuten: "無料（Link）",
                  ahamo: "5分無料（込）",
                  linemo: "別途オプション",
                  povo: "別途オプション",
                  uq: "プランにより込",
                  ymobile: "別途オプション",
                },
                {
                  label: "契約期間",
                  rakuten: "なし",
                  ahamo: "なし",
                  linemo: "なし",
                  povo: "なし",
                  uq: "なし",
                  ymobile: "なし",
                },
                {
                  label: "店頭サポート",
                  rakuten: "あり",
                  ahamo: "なし",
                  linemo: "なし",
                  povo: "なし",
                  uq: "あり",
                  ymobile: "あり",
                },
                {
                  label: "eSIM対応",
                  rakuten: "対応",
                  ahamo: "対応",
                  linemo: "対応",
                  povo: "対応",
                  uq: "対応",
                  ymobile: "対応",
                },
              ].map((row) => (
                <tr key={row.label}>
                  <td className="border border-card-border p-3 font-medium bg-card-bg">
                    {row.label}
                  </td>
                  <td className="border border-card-border p-3">{row.rakuten}</td>
                  <td className="border border-card-border p-3">{row.ahamo}</td>
                  <td className="border border-card-border p-3">{row.linemo}</td>
                  <td className="border border-card-border p-3">{row.povo}</td>
                  <td className="border border-card-border p-3">{row.uq}</td>
                  <td className="border border-card-border p-3">{row.ymobile}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mt-2">
          ※ 料金は2026年4月時点の情報です。割引適用前の基本料金を記載。キャンペーンにより変動する場合があります。
        </p>
      </section>

      {/* Section 3 - Detailed Reviews */}
      <section id="detail" className="mb-10">
        <h2 className="text-2xl font-bold mb-6">
          3. 各社の詳細レビュー（メリット・デメリット）
        </h2>

        <div className="space-y-10">
          {simServices.map((sim, index) => (
            <div
              key={sim.name}
              id={`sim-${sim.name.toLowerCase().replace(/\s/g, "")}`}
              className="bg-card-bg border border-card-border rounded-xl p-6"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {index + 1}
                </span>
                <h3 className="text-xl font-bold">{sim.name}</h3>
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${colorMap[sim.color]}`}
                >
                  {sim.badge}
                </span>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 text-sm">
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">月額料金</span>
                  <span className="font-bold">{sim.price}</span>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">データ容量</span>
                  <span className="font-bold">{sim.data}</span>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">使用回線</span>
                  <span className="font-bold">{sim.carrier}</span>
                </div>
              </div>

              {/* Plan Detail */}
              <div className="mb-5">
                <h4 className="text-sm font-bold mb-2">料金プラン詳細</h4>
                <div className="bg-background rounded-lg p-3 text-sm">
                  <p className="text-muted mb-1"><span className="font-medium">プラン：</span>{sim.plan}</p>
                  <p className="text-muted mb-1"><span className="font-medium">データ：</span>{sim.dataDetail}</p>
                  <p className="text-muted"><span className="font-medium">通話：</span>{sim.callDetail}</p>
                </div>
              </div>

              {/* Best For */}
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-5">
                <p className="text-sm text-slate-800 dark:text-slate-100">
                  <span className="font-bold">こんな人におすすめ：</span>
                  {sim.bestFor}
                </p>
              </div>

              {/* Pros */}
              <div className="mb-4">
                <h4 className="text-sm font-bold mb-2 text-green-600 dark:text-green-400">
                  メリット
                </h4>
                <ul className="space-y-1">
                  {sim.pros.map((p) => (
                    <li
                      key={p}
                      className="text-sm text-muted flex items-start gap-2"
                    >
                      <span className="text-green-500 mt-0.5">&#9675;</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="mb-5">
                <h4 className="text-sm font-bold mb-2 text-red-600 dark:text-red-400">
                  デメリット
                </h4>
                <ul className="space-y-1">
                  {sim.cons.map((c) => (
                    <li
                      key={c}
                      className="text-sm text-muted flex items-start gap-2"
                    >
                      <span className="text-red-500 mt-0.5">&#9651;</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="text-center">
                <a
                  href={sim.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
                >
                  {sim.name}の公式サイトを見る
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 - Use Case Recommendations */}
      <section id="use-cases" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          4. 利用タイプ別おすすめ格安SIM
        </h2>
        <div className="space-y-4">
          {[
            {
              scene: "データを気にせず使いたい（動画・テザリング）",
              sim: "楽天モバイル",
              reason:
                "データ無制限で月額3,278円は業界最安。テザリングも無制限で使えるため、外出先でPCをつなぐ方にも最適です。Rakuten Linkで通話も無料になります。",
              url: "https://network.mobile.rakuten.co.jp/",
            },
            {
              scene: "通信品質を絶対に落としたくない",
              sim: "ahamo",
              reason:
                "ドコモの回線品質そのままで月額2,970円。30GBの大容量に5分かけ放題も標準付帯。海外でもそのまま20GB使えるので出張が多い方にも便利です。",
              url: "https://ahamo.com/",
            },
            {
              scene: "とにかく月額料金を最小限に抑えたい",
              sim: "LINEMO",
              reason:
                "ミニプラン3GBで月額990円は業界最安レベル。LINEのデータ消費がゼロになるギガフリー付きで、LINEメインの方なら実質的にもっとお得です。",
              url: "https://www.linemo.jp/",
            },
            {
              scene: "サブ回線・予備回線として持ちたい",
              sim: "povo",
              reason:
                "基本料0円で回線を維持できるため、メイン回線の障害時の備えやデュアルSIM運用に最適。必要な時だけデータをトッピングする柔軟な使い方ができます。",
              url: "https://povo.jp/",
            },
            {
              scene: "初めての乗り換えで不安・店舗で相談したい",
              sim: "UQモバイル / ワイモバイル",
              reason:
                "全国に実店舗があり、対面でサポートを受けられます。UQモバイルはauショップ、ワイモバイルはソフトバンクショップでも対応。初めての格安SIMで不安な方も安心です。",
              url: "https://www.uqwimax.jp/",
            },
            {
              scene: "家族みんなで乗り換えたい",
              sim: "ワイモバイル",
              reason:
                "家族割引で2回線目以降が毎月1,100円割引。家族4人なら月額3,300円の割引に。PayPayポイントも貯まりやすく、家族全員でお得に使えます。",
              url: "https://www.ymobile.jp/",
            },
          ].map((item) => (
            <div
              key={item.scene}
              className="bg-card-bg border border-card-border rounded-xl p-5"
            >
              <h3 className="font-bold mb-1">{item.scene}</h3>
              <p className="text-sm text-primary font-medium mb-2">
                {item.sim}
              </p>
              <p className="text-sm text-muted leading-relaxed mb-3">
                {item.reason}
              </p>
              <a
                href={item.url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
              >
                {item.sim.split(" / ")[0]}を詳しく見る
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5 - How to Switch */}
      <section id="how-to-switch" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          5. 格安SIMへの乗り換え手順
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          格安SIMへの乗り換えは、以下の4ステップで完了します。MNPワンストップ方式なら転出元への連絡も不要です。
        </p>
        <div className="space-y-3">
          {[
            {
              num: "1",
              title: "乗り換え先を選ぶ",
              desc: "この記事の比較表やタイプ別おすすめを参考に、自分に合った格安SIMを選びましょう。迷ったら楽天モバイル（データ重視）またはahamo（品質重視）がおすすめです。",
            },
            {
              num: "2",
              title: "必要なものを準備する",
              desc: "本人確認書類（運転免許証・マイナンバーカード等）、クレジットカードまたは口座情報、MNP予約番号（ワンストップ対応なら不要）を準備します。",
            },
            {
              num: "3",
              title: "オンラインで申し込む",
              desc: "各社の公式サイトから申し込み。eSIM対応端末なら即日開通も可能です。SIMカードの場合は2〜3日で届きます。",
            },
            {
              num: "4",
              title: "SIMを入れ替えて初期設定",
              desc: "届いたSIMカードを端末に挿入し、APN設定を行えば完了。各社のアプリや公式サイトに設定ガイドが用意されています。",
            },
          ].map((item) => (
            <div
              key={item.num}
              className="bg-card-bg border border-card-border rounded-xl p-4"
            >
              <div className="flex items-start gap-3">
                <span className="bg-primary text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6 - How to Choose */}
      <section id="how-to-choose" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          6. 格安SIMの選び方5つのポイント
        </h2>
        <div className="space-y-3">
          {[
            {
              num: "1",
              title: "月間データ使用量を確認する",
              desc: "現在のスマホの設定画面で月間データ使用量を確認しましょう。3GB以下ならLINEMO、20GB前後ならahamo、無制限なら楽天モバイルが最適です。",
            },
            {
              num: "2",
              title: "通話頻度を考える",
              desc: "電話をよくかける方は通話プラン込みのサービスがお得。楽天モバイル（Rakuten Linkで無料）、ahamo（5分かけ放題込み）、UQコミコミ（10分かけ放題込み）がおすすめ。",
            },
            {
              num: "3",
              title: "通信エリアを確認する",
              desc: "各社の公式サイトでお住まいの地域のエリアマップを確認しましょう。特に楽天モバイルは自社回線のため、エリアの確認が重要です。",
            },
            {
              num: "4",
              title: "サポート体制を確認する",
              desc: "オンラインで完結できるならahamo・LINEMO・povoが安い。店頭サポートが必要ならUQモバイル・ワイモバイル・楽天モバイルが安心です。",
            },
            {
              num: "5",
              title: "家族割引やセット割引を活用する",
              desc: "ワイモバイルの家族割、UQモバイルの自宅セット割など、条件次第で大幅に安くなります。光回線やクレジットカードとの組み合わせも検討しましょう。",
            },
          ].map((item) => (
            <div
              key={item.num}
              className="bg-card-bg border border-card-border rounded-xl p-4"
            >
              <div className="flex items-start gap-3">
                <span className="bg-primary text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7 - FAQ */}
      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">7. よくある質問（FAQ）</h2>
        <div className="space-y-4">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className="bg-card-bg border border-card-border rounded-xl p-5"
            >
              <h3 className="font-bold mb-2">Q. {item.question}</h3>
              <p className="text-sm text-muted leading-relaxed">
                A. {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 8 - Summary */}
      <section id="summary" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">8. まとめ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <p className="text-muted leading-relaxed mb-4">
            格安SIMへの乗り換えは、月額料金を大幅に節約できる最も効果的な方法の一つです。この記事で比較した6社は、いずれも契約期間の縛りなし・解約金なしなので、気軽に試すことができます。
          </p>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 p-3 bg-pink-50 dark:bg-pink-900/40 rounded-lg">
              <span className="font-bold text-pink-700 dark:text-pink-300 flex-shrink-0">
                楽天モバイル
              </span>
              <span className="text-sm text-muted">
                → データ無制限3,278円＋通話無料。コスパ最強。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/40 rounded-lg">
              <span className="font-bold text-blue-700 dark:text-blue-300 flex-shrink-0">
                ahamo
              </span>
              <span className="text-sm text-muted">
                → ドコモ品質30GB＋5分かけ放題。品質重視ならこれ。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/40 rounded-lg">
              <span className="font-bold text-green-700 dark:text-green-300 flex-shrink-0">
                LINEMO
              </span>
              <span className="text-sm text-muted">
                → 3GB 990円の最安プラン。LINEギガフリーが便利。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/40 rounded-lg">
              <span className="font-bold text-blue-700 dark:text-blue-300 flex-shrink-0">
                povo
              </span>
              <span className="text-sm text-muted">
                → 基本料0円。サブ回線やデュアルSIM運用に最適。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-900/40 rounded-lg">
              <span className="font-bold text-purple-700 dark:text-purple-300 flex-shrink-0">
                UQモバイル
              </span>
              <span className="text-sm text-muted">
                → au品質＋店頭サポート。auからの乗り換えに最適。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/40 rounded-lg">
              <span className="font-bold text-red-700 dark:text-red-300 flex-shrink-0">
                ワイモバイル
              </span>
              <span className="text-sm text-muted">
                → 家族割がお得。店頭サポート＋PayPayとの相性抜群。
              </span>
            </div>
          </div>
          <p className="text-sm text-muted">
            すべて契約期間の縛りなし・解約金なしなので、まずは気になるサービスに申し込んでみましょう。
          </p>
        </div>
      </section>

      {/* Related Tool CTA */}
      <section className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-2">
          便利ツールもチェック
        </h2>
        <p className="text-sm text-muted mb-3">
          QRコード作成やパスワード生成など、スマホ活用に役立つ無料ツールも用意しています。
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/tools/qr-code-generator"
            className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            QRコード作成ツールを使う
          </Link>
          <Link
            href="/guide"
            className="inline-block border border-card-border px-6 py-2 rounded-full text-sm font-medium hover:bg-card-bg transition-colors"
          >
            他のガイド記事を見る
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-card-bg border border-card-border rounded-xl p-8 text-center">
        <h2 className="text-xl font-bold mb-3">
          あなたに最適な格安SIMを見つけよう
        </h2>
        <p className="text-sm text-muted mb-5">
          大手キャリアから乗り換えるだけで年間5〜8万円の節約が可能。すべて契約期間の縛りなし・解約金なしなので、合わなければいつでも変更できます。
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://network.mobile.rakuten.co.jp/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block bg-pink-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-pink-700 transition-colors"
          >
            楽天モバイル
          </a>
          <a
            href="https://ahamo.com/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            ahamo
          </a>
          <a
            href="https://www.linemo.jp/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-green-700 transition-colors"
          >
            LINEMO
          </a>
          <a
            href="https://povo.jp/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block border border-card-border px-5 py-2.5 rounded-full text-sm font-medium hover:bg-card-bg transition-colors"
          >
            povo
          </a>
          <a
            href="https://www.uqwimax.jp/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block border border-card-border px-5 py-2.5 rounded-full text-sm font-medium hover:bg-card-bg transition-colors"
          >
            UQモバイル
          </a>
          <a
            href="https://www.ymobile.jp/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block border border-card-border px-5 py-2.5 rounded-full text-sm font-medium hover:bg-card-bg transition-colors"
          >
            ワイモバイル
          </a>
        </div>
      </section>

      {/* Affiliate CTAs */}
      <div className="space-y-6 my-8">
        <h3 className="text-xl font-bold text-center">おすすめ格安SIM</h3>
        <AffiliateCTA serviceName="ワイモバイル" url="https://www.ymobile.jp/" badge="ソフトバンク系" description="通信品質◎・家族割でさらにお得" color="red" />
      </div>

      {/* Affiliate Comparison Table CTA */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">格安SIM・eSIMに申し込む</h2>
        <ComparisonTableCTA
          services={[
            {
              name: "ごえんモバイル",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXL+8LLFCI+424K+TS3OI",
              highlight: "シンプル・低価格の格安SIM",
              price: "月額制",
            },
            {
              name: "BB.exciteモバイル Flat",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXL+8NZ5RM+7JY+4ATK5D",
              highlight: "定額使い放題プラン",
              price: "月額制",
            },
            {
              name: "BB.exciteモバイル Fit",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXL+8M6UYA+7JY+2BCWEQ",
              highlight: "段階制プランでムダなく使える",
              price: "月額制",
            },
            {
              name: "DTI SIM",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXL+8P60Z6+1QFI+2Z68LU",
              highlight: "ドコモ回線の格安SIM",
              price: "月額制",
            },
            {
              name: "LIBMO",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXL+8KZZQQ+3UM0+62ENL",
              highlight: "TOKAIグループの格安SIM",
              price: "月額制",
            },
            {
              name: "レンシム",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXL+8MSAK2+57X0+HVV0H",
              highlight: "レンタルSIMサービス",
              price: "月額制",
            },
            {
              name: "Saily eSIM",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+3X3R5E+5L2C+5YJRM",
              highlight: "海外旅行向けeSIM",
              price: "従量課金",
              badge: "海外旅行",
            },
          ]}
        />
      </section>
    </div>
  );
}
