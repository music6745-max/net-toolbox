import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】クラウドストレージ比較おすすめ5選｜容量・料金・セキュリティを徹底解説",
    description:
      "2026年最新のクラウドストレージを徹底比較。Google Drive/One・iCloud+・OneDrive・Dropbox・Amazon Driveの無料容量・有料プラン料金・共有機能・セキュリティを詳しく解説。",
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
    mainEntityOfPage: `${siteConfig.url}/guide/cloud-storage-comparison`,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const storageServices = [
  {
    name: "Google Drive / Google One",
    provider: "Google",
    price: "無料15GB / 有料250円〜1,300円/月",
    plan: "無料15GB / Google One（100GB〜2TB）",
    free: "15GB（Gmail・Googleフォトと共有）",
    freeDetail: "15GBの無料容量をGmail・Googleフォト・Google Driveで共有",
    paid: "100GB 250円/月、200GB 380円/月、2TB 1,300円/月",
    paidDetail: "Google Oneプラン：100GB 250円/月・200GB 380円/月・2TB 1,300円/月。家族最大5人で共有可能",
    sharing: "リンク共有・ユーザー指定共有・Google Workspace連携",
    security: "2段階認証、暗号化、Google One加入でVPN利用可能",
    os: "Windows / macOS / iOS / Android / Web",
    pros: [
      "無料で15GBの大容量が使える",
      "Googleドキュメント・スプレッドシートとの連携が強力",
      "Google Oneプランは家族最大5人で容量共有可能",
      "ほぼすべてのデバイス・OSに対応",
      "リアルタイム共同編集が可能",
      "Googleフォトとの連携で写真の自動バックアップ",
    ],
    cons: [
      "15GBはGmail・Googleフォトと共有なので実質的な容量は少なめ",
      "ファイルの自動同期がやや遅い場合がある",
      "ビジネス向け機能はGoogle Workspace（有料）が必要",
    ],
    bestFor:
      "Googleサービスを日常的に使っている方に最適。Gmail・Googleフォト・ドキュメントとの連携がシームレスで、Google Oneなら家族で容量をシェアできます。",
    url: "https://one.google.com/",
    badge: "無料容量最大",
    color: "blue",
  },
  {
    name: "iCloud+",
    provider: "Apple",
    price: "無料5GB / 有料130円〜1,300円/月",
    plan: "無料5GB / iCloud+（50GB〜2TB）",
    free: "5GB",
    freeDetail: "Apple IDで自動的に5GBの無料容量が付与",
    paid: "50GB 130円/月、200GB 400円/月、2TB 1,300円/月",
    paidDetail: "iCloud+：50GB 130円/月・200GB 400円/月・2TB 1,300円/月。ファミリー共有で最大5人",
    sharing: "iCloud Drive共有フォルダ、リンク共有、ファミリー共有",
    security: "エンドツーエンド暗号化（高度なデータ保護）、2ファクタ認証、iCloud Private Relay",
    os: "macOS / iOS / iPadOS / Windows / Web",
    pros: [
      "Apple製品との連携が最も優れている",
      "50GB 130円/月は最安レベルの有料プラン",
      "エンドツーエンド暗号化で高いセキュリティ",
      "iCloud Private Relay（VPN機能）が付帯",
      "iPhoneの自動バックアップに最適",
      "ファミリー共有で最大5人と容量シェア",
    ],
    cons: [
      "無料容量が5GBと少ない",
      "Android対応がなく、Apple製品以外では使いにくい",
      "ファイル共有機能がDropboxやGoogle Driveに比べやや弱い",
    ],
    bestFor:
      "iPhone・Mac・iPadを使っているAppleユーザーに最適。50GB 130円/月の安さと、iCloud Private Relayによるプライバシー保護が魅力です。",
    url: "https://www.apple.com/jp/icloud/",
    badge: "Apple最適",
    color: "purple",
  },
  {
    name: "OneDrive / Microsoft 365",
    provider: "Microsoft",
    price: "無料5GB / 有料260円〜1,490円/月",
    plan: "無料5GB / Microsoft 365 Personal（1TB）",
    free: "5GB",
    freeDetail: "Microsoftアカウントで5GBの無料容量が付与",
    paid: "100GB 260円/月、Microsoft 365 Personal 1TB 1,490円/月（Office付き）",
    paidDetail: "100GB単体260円/月。Microsoft 365 Personal 1,490円/月でWord・Excel・PowerPoint＋OneDrive 1TB",
    sharing: "リンク共有・ユーザー指定共有・SharePoint連携",
    security: "2段階認証、Personal Vault（追加認証付き保護領域）、暗号化",
    os: "Windows / macOS / iOS / Android / Web",
    pros: [
      "Microsoft 365加入でWord・Excel・PowerPointが使い放題＋1TB",
      "Windows PCとの連携が最も強力",
      "Personal Vault（追加セキュリティ保護領域）が便利",
      "Officeファイルのオンライン編集が可能",
      "ビジネス利用での実績と信頼性が高い",
      "リアルタイム共同編集に対応",
    ],
    cons: [
      "無料容量が5GBと少ない",
      "Microsoft 365なしだと容量あたりのコスパは普通",
      "同期エラーが発生する場合がある",
    ],
    bestFor:
      "Word・Excel・PowerPointを日常的に使う方に最適。Microsoft 365に加入すればOfficeアプリ＋1TBストレージがセットで使え、仕事にもプライベートにも活用できます。",
    url: "https://www.microsoft.com/ja-jp/microsoft-365/onedrive/online-cloud-storage",
    badge: "Office連携最強",
    color: "blue",
  },
  {
    name: "Dropbox",
    provider: "Dropbox, Inc.",
    price: "無料2GB / 有料1,500円〜2,400円/月",
    plan: "Basic（無料2GB）/ Plus（2TB）/ Professional（3TB）",
    free: "2GB",
    freeDetail: "無料のBasicプランで2GBの容量。友達紹介で最大16GBまで増量可能",
    paid: "Plus 2TB 1,500円/月、Professional 3TB 2,400円/月",
    paidDetail: "Plus：2TB 1,500円/月。Professional：3TB 2,400円/月＋電子署名・ウォーターマーク機能",
    sharing: "リンク共有・フォルダ共有・パスワード付き共有・有効期限設定",
    security: "256bit AES暗号化、2段階認証、遠隔デバイスワイプ、バージョン履歴180日",
    os: "Windows / macOS / Linux / iOS / Android / Web",
    pros: [
      "ファイル同期の速度と信頼性が業界トップクラス",
      "Linux対応で開発者にも人気",
      "バージョン履歴180日で誤削除も安心",
      "パスワード付きリンク共有や有効期限設定が便利",
      "Smart Syncでストレージ容量を節約",
      "外部サービスとの連携（Slack・Zoom等）が豊富",
    ],
    cons: [
      "無料容量が2GBと最も少ない",
      "有料プランの料金がやや高め",
      "無料プランはデバイス3台までの制限あり",
    ],
    bestFor:
      "ファイル共有や共同作業を頻繁に行う方に最適。同期速度の信頼性が高く、ビジネスでの利用実績も豊富。Linux対応でエンジニアにも人気です。",
    url: "https://www.dropbox.com/",
    badge: "同期速度No.1",
    color: "green",
  },
  {
    name: "Amazon Drive / Amazon Photos",
    provider: "Amazon",
    price: "Prime会員特典（写真無制限）/ 有料250円〜1,300円/月",
    plan: "Prime会員（写真無制限＋5GB）/ 追加ストレージ",
    free: "5GB（Prime会員は写真無制限）",
    freeDetail: "Amazonアカウントで5GB無料。Prime会員は写真ストレージが無制限",
    paid: "100GB 250円/月、1TB 1,300円/月",
    paidDetail: "追加ストレージ：100GB 250円/月・1TB 1,300円/月。Prime会員（600円/月）なら写真無制限＋5GB",
    sharing: "ファミリーフォルダ共有、リンク共有",
    security: "2段階認証、暗号化、AWS基盤の高い信頼性",
    os: "Windows / macOS / iOS / Android / Web / Fire TV",
    pros: [
      "Prime会員なら写真を容量無制限で保存可能",
      "写真の画質劣化なし（RAWファイルも対応）",
      "Prime会員の他の特典（送料無料・Prime Video等）も利用可能",
      "AWS基盤の高い信頼性とセキュリティ",
      "Fire TVで写真のスライドショー表示が可能",
      "ファミリーフォルダで最大5人と写真共有",
    ],
    cons: [
      "動画やドキュメントの無料容量は5GBのみ",
      "ファイル共有・共同編集機能はGoogle DriveやDropboxに劣る",
      "写真以外のストレージとしては割高",
    ],
    bestFor:
      "Amazon Prime会員で写真を大量に保存したい方に最適。RAWファイルも含め写真の容量が無制限なのは他社にないメリットです。Primeの他の特典も含めると非常にお得です。",
    url: "https://www.amazon.co.jp/photos/",
    badge: "写真無制限(Prime)",
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
    question: "クラウドストレージとは何ですか？",
    answer:
      "クラウドストレージとは、インターネット上にデータを保存できるサービスです。スマホやPCのストレージ容量を圧迫せず、どのデバイスからでもファイルにアクセスできます。データのバックアップ、ファイル共有、複数デバイス間の同期など、さまざまな用途で活用されています。",
  },
  {
    question: "無料で最も容量が多いクラウドストレージはどれですか？",
    answer:
      "無料容量が最も多いのはGoogle Drive / Google Oneの15GBです。ただしGmail・Googleフォトと共有です。次いでAmazon Drive / iCloud+の5GB、OneDrive 5GB、Dropbox 2GBの順です。Prime会員ならAmazon Photosで写真を無制限に保存できます。",
  },
  {
    question: "クラウドストレージのセキュリティは安全ですか？",
    answer:
      "今回紹介した5社はすべて暗号化と2段階認証に対応しており、高いセキュリティを提供しています。特にiCloud+はエンドツーエンド暗号化、OneDriveはPersonal Vault、Dropboxは256bit AES暗号化を採用。重要なファイルはパスワード付き共有を利用しましょう。",
  },
  {
    question: "スマホの写真バックアップに最適なサービスはどれですか？",
    answer:
      "iPhoneユーザーならiCloud+（自動バックアップとの相性が抜群）、Amazon Prime会員なら Amazon Photos（写真無制限・RAW対応）、Android ユーザーならGoogleフォト/Google Oneがおすすめです。",
  },
  {
    question: "仕事用途にはどのクラウドストレージがおすすめですか？",
    answer:
      "Office（Word・Excel・PowerPoint）をよく使うならOneDrive / Microsoft 365が最適です。チームでの共同作業が多いならGoogle DriveまたはDropboxが便利。DropboxはSlackやZoomとの連携も充実しています。",
  },
  {
    question: "有料プランに加入する目安はいつですか？",
    answer:
      "無料容量の80%以上を使用している場合は有料プランへの移行を検討しましょう。特にスマホの写真が増えている方、仕事のファイルが増えている方は早めのアップグレードがおすすめです。iCloud+ 50GB 130円/月なら月のコーヒー1杯以下の費用です。",
  },
  {
    question: "複数のクラウドストレージを併用しても大丈夫ですか？",
    answer:
      "はい、問題ありません。写真はGoogle フォト、仕事のファイルはOneDrive、共有ファイルはDropboxなど、用途ごとに使い分けるのが効率的です。無料プランを複数使えば、合計で27GB以上の容量を無料で確保できます。",
  },
];

export default function CloudStorageComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          {
            name: "クラウドストレージ比較おすすめ5選",
            url: `${siteConfig.url}/guide/cloud-storage-comparison`,
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
        <span>クラウドストレージ比較おすすめ5選</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
            比較
          </span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            クラウド
          </span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】クラウドストレージ比較おすすめ5選｜容量・料金・セキュリティを徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「スマホの容量がいっぱい」「大事なデータのバックアップ先が欲しい」そんな悩みを解決するのがクラウドストレージです。この記事では、2026年現在おすすめのクラウドストレージ5社（Google Drive・iCloud+・OneDrive・Dropbox・Amazon Drive）を無料容量・有料プラン料金・共有機能・セキュリティ・対応OSで徹底比較します。
        </p>
      </div>

      {/* Quick Recommendation */}
      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：タイプ別おすすめはこれ！</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p>
            <span className="font-bold text-blue-700 dark:text-blue-300">
              無料で大容量 → Google Drive
            </span>
            （無料15GB＋Google連携）
          </p>
          <p>
            <span className="font-bold text-purple-700 dark:text-purple-300">
              iPhoneユーザー → iCloud+
            </span>
            （50GB 130円/月＋Privacy Relay）
          </p>
          <p>
            <span className="font-bold text-blue-700 dark:text-blue-300">
              Office利用者 → OneDrive
            </span>
            （Microsoft 365で1TB＋Office付き）
          </p>
          <p>
            <span className="font-bold text-red-700 dark:text-red-300">
              写真を大量に保存 → Amazon Photos
            </span>
            （Prime会員で写真無制限）
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#why-cloud" className="text-primary hover:underline">
              1. クラウドストレージを使うメリット
            </a>
          </li>
          <li>
            <a href="#comparison-table" className="text-primary hover:underline">
              2. 5社の容量・料金比較表
            </a>
          </li>
          <li>
            <a href="#detail" className="text-primary hover:underline">
              3. 各社の詳細レビュー（メリット・デメリット）
            </a>
          </li>
          <li>
            <a href="#use-cases" className="text-primary hover:underline">
              4. 利用タイプ別おすすめクラウドストレージ
            </a>
          </li>
          <li>
            <a href="#how-to-choose" className="text-primary hover:underline">
              5. クラウドストレージの選び方5つのポイント
            </a>
          </li>
          <li>
            <a href="#faq" className="text-primary hover:underline">
              6. よくある質問（FAQ）
            </a>
          </li>
          <li>
            <a href="#summary" className="text-primary hover:underline">
              7. まとめ
            </a>
          </li>
        </ul>
      </div>

      {/* Section 1 - Why Cloud */}
      <section id="why-cloud" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          1. クラウドストレージを使うメリット
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          クラウドストレージを活用することで、データの管理・共有・バックアップが格段に便利になります。
        </p>
        <div className="space-y-3">
          {[
            {
              icon: "&#128190;",
              title: "デバイスの容量を節約できる",
              desc: "スマホやPCのストレージがいっぱいでも、クラウドにデータを移せば容量を確保できます。写真や動画の自動バックアップも可能です。",
            },
            {
              icon: "&#128257;",
              title: "どのデバイスからでもアクセス可能",
              desc: "スマホ・PC・タブレットなど、どのデバイスからでも同じファイルにアクセスできます。出先で急に資料が必要になっても安心です。",
            },
            {
              icon: "&#128274;",
              title: "データのバックアップで安心",
              desc: "端末の故障や紛失時も、クラウドにバックアップがあれば大切なデータを失いません。自動バックアップ設定で手間も不要です。",
            },
            {
              icon: "&#128101;",
              title: "ファイル共有・共同作業が簡単",
              desc: "リンク一つでファイルを共有でき、リアルタイムの共同編集にも対応。仕事でも家族間でも、データのやり取りがスムーズになります。",
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
          2. 5社の容量・料金比較表
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          まずは5社の主要スペックを一覧で比較してみましょう。
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">
                  項目
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-blue-600 dark:text-blue-400">Google</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-purple-600 dark:text-purple-400">iCloud+</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-blue-600 dark:text-blue-400">OneDrive</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-green-600 dark:text-green-400">Dropbox</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-red-600 dark:text-red-400">Amazon</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  label: "無料容量",
                  google: "15GB",
                  icloud: "5GB",
                  onedrive: "5GB",
                  dropbox: "2GB",
                  amazon: "5GB(写真無制限*)",
                },
                {
                  label: "最安有料",
                  google: "250円/月",
                  icloud: "130円/月",
                  onedrive: "260円/月",
                  dropbox: "1,500円/月",
                  amazon: "250円/月",
                },
                {
                  label: "最大容量",
                  google: "2TB",
                  icloud: "2TB",
                  onedrive: "1TB(365)",
                  dropbox: "3TB",
                  amazon: "1TB",
                },
                {
                  label: "共同編集",
                  google: "対応",
                  icloud: "一部対応",
                  onedrive: "対応",
                  dropbox: "対応",
                  amazon: "非対応",
                },
                {
                  label: "対応OS",
                  google: "全OS",
                  icloud: "Apple+Win",
                  onedrive: "全OS",
                  dropbox: "全OS+Linux",
                  amazon: "全OS",
                },
                {
                  label: "家族共有",
                  google: "最大5人",
                  icloud: "最大5人",
                  onedrive: "最大6人(365)",
                  dropbox: "Family(6人)",
                  amazon: "最大5人",
                },
                {
                  label: "2段階認証",
                  google: "対応",
                  icloud: "対応",
                  onedrive: "対応",
                  dropbox: "対応",
                  amazon: "対応",
                },
                {
                  label: "オフライン",
                  google: "対応",
                  icloud: "対応",
                  onedrive: "対応",
                  dropbox: "対応",
                  amazon: "対応",
                },
              ].map((row) => (
                <tr key={row.label}>
                  <td className="border border-card-border p-3 font-medium bg-card-bg">
                    {row.label}
                  </td>
                  <td className="border border-card-border p-3">{row.google}</td>
                  <td className="border border-card-border p-3">{row.icloud}</td>
                  <td className="border border-card-border p-3">{row.onedrive}</td>
                  <td className="border border-card-border p-3">{row.dropbox}</td>
                  <td className="border border-card-border p-3">{row.amazon}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mt-2">
          ※ 料金は2026年4月時点の情報です。* Amazon Prime会員特典。プランにより変動する場合があります。
        </p>
      </section>

      {/* Section 3 - Detailed Reviews */}
      <section id="detail" className="mb-10">
        <h2 className="text-2xl font-bold mb-6">
          3. 各社の詳細レビュー（メリット・デメリット）
        </h2>

        <div className="space-y-10">
          {storageServices.map((storage, index) => (
            <div
              key={storage.name}
              className="bg-card-bg border border-card-border rounded-xl p-6"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {index + 1}
                </span>
                <h3 className="text-xl font-bold">{storage.name}</h3>
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${colorMap[storage.color]}`}
                >
                  {storage.badge}
                </span>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 text-sm">
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">料金</span>
                  <span className="font-bold">{storage.price}</span>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">無料容量</span>
                  <span className="font-bold">{storage.free}</span>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">対応OS</span>
                  <span className="font-bold">{storage.os}</span>
                </div>
              </div>

              {/* Plan Detail */}
              <div className="mb-5">
                <h4 className="text-sm font-bold mb-2">プラン詳細</h4>
                <div className="bg-background rounded-lg p-3 text-sm">
                  <p className="text-muted mb-1"><span className="font-medium">無料：</span>{storage.freeDetail}</p>
                  <p className="text-muted mb-1"><span className="font-medium">有料：</span>{storage.paidDetail}</p>
                  <p className="text-muted"><span className="font-medium">セキュリティ：</span>{storage.security}</p>
                </div>
              </div>

              {/* Best For */}
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-5">
                <p className="text-sm">
                  <span className="font-bold">こんな人におすすめ：</span>
                  {storage.bestFor}
                </p>
              </div>

              {/* Pros */}
              <div className="mb-4">
                <h4 className="text-sm font-bold mb-2 text-green-600 dark:text-green-400">
                  メリット
                </h4>
                <ul className="space-y-1">
                  {storage.pros.map((p) => (
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
                  {storage.cons.map((c) => (
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
                  href={storage.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
                >
                  {storage.name.split(" / ")[0]}の公式サイトを見る
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 - Use Case Recommendations */}
      <section id="use-cases" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          4. 利用タイプ別おすすめクラウドストレージ
        </h2>
        <div className="space-y-4">
          {[
            {
              scene: "スマホの写真を自動バックアップしたい",
              storage: "Google Drive（Android）/ iCloud+（iPhone）",
              reason:
                "AndroidならGoogleフォトとの連携が最もスムーズ。iPhoneならiCloud+の自動バックアップが便利。Prime会員ならAmazon Photosで写真を無制限保存も選択肢です。",
              url: "https://one.google.com/",
            },
            {
              scene: "仕事のファイルを管理・共有したい",
              storage: "OneDrive / Microsoft 365",
              reason:
                "Word・Excel・PowerPointとの連携が最も強力。1,490円/月でOfficeアプリ＋1TBストレージがセットで使え、ビジネス利用に最適です。",
              url: "https://www.microsoft.com/ja-jp/microsoft-365/onedrive/online-cloud-storage",
            },
            {
              scene: "無料でできるだけ多くのデータを保存したい",
              storage: "Google Drive",
              reason:
                "無料15GBは主要クラウドストレージの中で最大。Googleアカウントだけで使い始められ、追加料金なしで基本的なファイル保存・共有ができます。",
              url: "https://one.google.com/",
            },
            {
              scene: "チームでの共同作業やファイル共有が多い",
              storage: "Dropbox",
              reason:
                "ファイル同期の速度と信頼性が業界トップクラス。パスワード付きリンク共有や有効期限設定など、ビジネスに必要な共有機能が充実しています。",
              url: "https://www.dropbox.com/",
            },
            {
              scene: "とにかく安く有料プランを使いたい",
              storage: "iCloud+",
              reason:
                "50GB 130円/月は業界最安レベル。iPhoneのバックアップ先としても最適で、iCloud Private Relayによるプライバシー保護もセットで付いてきます。",
              url: "https://www.apple.com/jp/icloud/",
            },
          ].map((item) => (
            <div
              key={item.scene}
              className="bg-card-bg border border-card-border rounded-xl p-5"
            >
              <h3 className="font-bold mb-1">{item.scene}</h3>
              <p className="text-sm text-primary font-medium mb-2">
                {item.storage}
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
                {item.storage.split("（")[0].split(" / ")[0]}を詳しく見る
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5 - How to Choose */}
      <section id="how-to-choose" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          5. クラウドストレージの選び方5つのポイント
        </h2>
        <div className="space-y-3">
          {[
            {
              num: "1",
              title: "使っているデバイス・OSで選ぶ",
              desc: "Apple製品中心ならiCloud+、Windows中心ならOneDrive、Android中心ならGoogle Driveがそれぞれ最も使いやすいです。Dropboxは全OS＋Linuxに対応。",
            },
            {
              num: "2",
              title: "必要な容量を見積もる",
              desc: "写真・動画中心なら大容量プランが必要。ドキュメント中心なら無料プランでも十分な場合があります。まずは無料プランで使い始めて、足りなくなったらアップグレードしましょう。",
            },
            {
              num: "3",
              title: "料金プランを比較する",
              desc: "iCloud+ 50GB 130円/月が最安。大容量なら Google One 2TB 1,300円/月やMicrosoft 365 1TB 1,490円/月（Office付き）がコスパ良好です。",
            },
            {
              num: "4",
              title: "共有・共同編集の必要性を考える",
              desc: "チームでの作業が多いならGoogle DriveかDropbox。個人利用中心ならiCloud+やAmazon Driveでも十分です。",
            },
            {
              num: "5",
              title: "セキュリティ機能を確認する",
              desc: "重要なファイルを保存するなら、2段階認証、暗号化、パスワード付き共有などのセキュリティ機能を確認しましょう。OneDriveのPersonal VaultやiCloud+のエンドツーエンド暗号化は特に優秀です。",
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

      {/* Section 6 - FAQ */}
      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">6. よくある質問（FAQ）</h2>
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

      {/* Section 7 - Summary */}
      <section id="summary" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">7. まとめ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <p className="text-muted leading-relaxed mb-4">
            クラウドストレージは、データのバックアップ・共有・管理を劇的に便利にするサービスです。すべてのサービスに無料プランがあるので、まずは試してみましょう。
          </p>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/40 rounded-lg">
              <span className="font-bold text-blue-700 dark:text-blue-300 flex-shrink-0">
                Google Drive
              </span>
              <span className="text-sm text-muted">
                → 無料15GBで最大容量。Google連携が便利。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <span className="font-bold text-purple-700 dark:text-purple-300 flex-shrink-0">
                iCloud+
              </span>
              <span className="text-sm text-muted">
                → 50GB 130円/月の最安プラン。Apple製品に最適。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/40 rounded-lg">
              <span className="font-bold text-blue-700 dark:text-blue-300 flex-shrink-0">
                OneDrive
              </span>
              <span className="text-sm text-muted">
                → Microsoft 365でOffice＋1TB。仕事に最適。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/40 rounded-lg">
              <span className="font-bold text-green-700 dark:text-green-300 flex-shrink-0">
                Dropbox
              </span>
              <span className="text-sm text-muted">
                → 同期速度と共有機能が最強。チーム利用に。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <span className="font-bold text-red-700 dark:text-red-300 flex-shrink-0">
                Amazon Drive
              </span>
              <span className="text-sm text-muted">
                → Prime会員なら写真無制限。写真バックアップに。
              </span>
            </div>
          </div>
          <p className="text-sm text-muted">
            すべて無料プランがあるので、まずは気になるサービスを使ってみましょう。用途に合わせて複数サービスを併用するのもおすすめです。
          </p>
        </div>
      </section>

      {/* Related Tool CTA */}
      <section className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-2">
          便利ツールもチェック
        </h2>
        <p className="text-sm text-muted mb-3">
          ファイル変換やパスワード生成など、データ管理に役立つ無料ツールも用意しています。
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/tools/password-generator"
            className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            パスワード生成ツールを使う
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
          あなたに最適なクラウドストレージを見つけよう
        </h2>
        <p className="text-sm text-muted mb-5">
          すべて無料プランあり。大切なデータのバックアップと管理に、クラウドストレージを活用しましょう。
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://one.google.com/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Google Drive
          </a>
          <a
            href="https://www.apple.com/jp/icloud/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block bg-purple-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors"
          >
            iCloud+
          </a>
          <a
            href="https://www.microsoft.com/ja-jp/microsoft-365/onedrive/online-cloud-storage"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            OneDrive
          </a>
          <a
            href="https://www.dropbox.com/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block border border-card-border px-5 py-2.5 rounded-full text-sm font-medium hover:bg-card-bg transition-colors"
          >
            Dropbox
          </a>
          <a
            href="https://www.amazon.co.jp/photos/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block border border-card-border px-5 py-2.5 rounded-full text-sm font-medium hover:bg-card-bg transition-colors"
          >
            Amazon Drive
          </a>
        </div>
      </section>
    </div>
  );
}
