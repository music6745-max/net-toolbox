import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】写真編集ソフト比較おすすめ5選｜機能・料金・初心者向けを徹底解説",
    description:
      "2026年最新の写真編集ソフトを徹底比較。Adobe Lightroom・Canva・GIMP・Pixlr・Fotorの機能・料金・使いやすさを詳しく解説。",
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
    datePublished: "2026-04-06",
    dateModified: "2026-04-06",
    mainEntityOfPage: `${siteConfig.url}/guide/photo-editing-comparison`,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const photoTools = [
  {
    name: "Adobe Lightroom",
    type: "プロ向け写真現像・管理",
    price: "月額1,180円（フォトプラン）",
    plan: "フォトプラン（月額1,180円）/ 単体プラン（月額2,728円）",
    features: "RAW現像・色調補正・AI自動補正・プリセット・クラウド同期",
    featureDetail: "プロ品質のRAW現像、AIによる自動補正・被写体マスク、豊富なプリセット、1TBクラウドストレージ",
    aiFeatures: "AI自動補正・AI被写体選択・AIノイズ除去・AI空置換",
    platforms: "Windows / Mac / iOS / Android / Web",
    pros: [
      "プロカメラマンも使用する業界標準ソフト",
      "RAW現像の品質と柔軟性が最高レベル",
      "AIによる自動補正・被写体選択が非常に優秀",
      "豊富なプリセットで一括編集が効率的",
      "マルチデバイスで同期して編集可能",
      "フォトプランならPhotoshopも付属",
    ],
    cons: [
      "月額制で長期的なコストがかかる",
      "高機能ゆえに初心者には学習コストが高い",
      "オフラインでの使用に一部制限あり",
    ],
    bestFor:
      "本格的な写真編集を行いたい方、RAW撮影をする方に最適。プロ品質の仕上がりを求めるならLightroomが業界標準です。",
    url: "https://www.adobe.com/jp/products/photoshop-lightroom.html",
    badge: "プロ向け定番",
    color: "blue",
  },
  {
    name: "Canva",
    type: "デザイン・写真編集統合型",
    price: "無料 / Pro月額1,000円",
    plan: "無料プラン / Canva Pro（月額1,000円・年額12,000円）",
    features: "写真編集・デザイン作成・テンプレート・AI画像生成",
    featureDetail: "写真フィルター・テキスト追加・コラージュ・SNS用テンプレート・AI背景除去・AI画像生成",
    aiFeatures: "AI背景除去・AIマジック消しゴム・AI画像生成・AI拡張",
    platforms: "Web / iOS / Android / Windows / Mac",
    pros: [
      "直感的なUIで初心者でもすぐに使える",
      "61万種類以上のテンプレートが利用可能",
      "SNS投稿・ブログ画像・プレゼン資料も作成可能",
      "AI背景除去やマジック消しゴムが便利",
      "チーム共有・共同編集機能が充実",
      "無料プランでも基本機能は十分使える",
    ],
    cons: [
      "RAW現像には非対応",
      "細かい色調補正はLightroomに及ばない",
      "プロ向けの高度な編集機能は少ない",
    ],
    bestFor:
      "SNS用の画像作成やブログのアイキャッチ画像など、デザインと写真編集の両方をしたい方に最適。テンプレートから簡単にプロ品質のデザインが作れます。",
    url: "https://www.canva.com/",
    badge: "初心者最適",
    color: "purple",
  },
  {
    name: "GIMP",
    type: "無料高機能画像編集",
    price: "完全無料（オープンソース）",
    plan: "無料（寄付歓迎）",
    features: "レイヤー編集・フィルター・プラグイン拡張・スクリプト",
    featureDetail: "Photoshopに匹敵するレイヤー編集、豊富なフィルター・エフェクト、プラグインで機能拡張可能",
    aiFeatures: "プラグインによるAI機能追加が可能",
    platforms: "Windows / Mac / Linux",
    pros: [
      "完全無料で高機能な画像編集が可能",
      "Photoshopに匹敵するレイヤー編集機能",
      "豊富なフィルター・エフェクト・ブラシ",
      "プラグインで機能を自由に拡張",
      "オープンソースで継続的に開発・改善",
      "PSD（Photoshop）ファイルの読み込みに対応",
    ],
    cons: [
      "UIが独特で初心者には取っつきにくい",
      "公式のAI機能は限定的",
      "モバイルアプリがない",
    ],
    bestFor:
      "無料で高機能な画像編集ソフトを使いたい方に最適。Photoshopのような高度な編集が無料でできる唯一の選択肢です。",
    url: "https://www.gimp.org/",
    badge: "完全無料",
    color: "green",
  },
  {
    name: "Pixlr",
    type: "ブラウザベース画像編集",
    price: "無料 / Plus月額750円 / Premium月額1,280円",
    plan: "無料プラン / Plus（月額750円）/ Premium（月額1,280円）",
    features: "レイヤー編集・AI自動補正・テンプレート・バッチ処理",
    featureDetail: "ブラウザ上でレイヤー編集、AIワンタップ補正、豊富なフィルター・オーバーレイ、テンプレート",
    aiFeatures: "AI自動補正・AI背景除去・AIオブジェクト除去・AI画像生成",
    platforms: "Web / iOS / Android",
    pros: [
      "インストール不要でブラウザから即利用可能",
      "Photoshopに似たUIで移行しやすい",
      "AI機能が充実（背景除去・自動補正・生成）",
      "レイヤー編集・マスク機能にも対応",
      "スマホアプリでも本格的な編集が可能",
      "無料プランでも多くの機能が使える",
    ],
    cons: [
      "オフラインでは使用できない",
      "大容量ファイルの処理がやや重い",
      "無料プランでは広告が表示される",
    ],
    bestFor:
      "ソフトをインストールせずにブラウザで手軽に編集したい方に最適。Photoshopに似たUIなので、Photoshop経験者も違和感なく使えます。",
    url: "https://pixlr.com/jp/",
    badge: "ブラウザで即編集",
    color: "pink",
  },
  {
    name: "Fotor",
    type: "簡単写真編集・コラージュ",
    price: "無料 / Pro月額1,099円",
    plan: "無料プラン / Fotor Pro（月額1,099円・年額4,399円）",
    features: "ワンタップ補正・コラージュ・HDR合成・バッチ処理",
    featureDetail: "ワンタップ補正、コラージュ作成、HDR合成、ビューティー加工、テンプレート、バッチ処理",
    aiFeatures: "AI自動補正・AI背景除去・AI画像拡大・AIポートレート加工",
    platforms: "Web / iOS / Android / Windows / Mac",
    pros: [
      "ワンタップで高品質な写真補正が可能",
      "コラージュ作成機能が豊富で使いやすい",
      "HDR合成でプロ品質の写真に仕上がる",
      "ビューティー加工・ポートレート修正が簡単",
      "バッチ処理で複数写真を一括編集",
      "テンプレートからSNS画像を素早く作成",
    ],
    cons: [
      "高度なレイヤー編集は非対応",
      "RAW現像機能は限定的",
      "無料プランでは出力画像に透かしが入る場合あり",
    ],
    bestFor:
      "手軽に写真を綺麗にしたい方、コラージュやSNS用画像を作りたい方に最適。難しい操作なしでワンタップで美しい写真に仕上がります。",
    url: "https://www.fotor.com/jp/",
    badge: "ワンタップ補正",
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
    question: "完全無料で使える写真編集ソフトはどれですか？",
    answer:
      "GIMPは完全無料（オープンソース）で、Photoshopに匹敵する高機能な画像編集が可能です。また、Canva・Pixlr・Fotorも無料プランがあり、基本的な写真編集は無料で行えます。Nike Training Clubのような無料プランでも十分に活用できます。",
  },
  {
    question: "初心者におすすめの写真編集ソフトはどれですか？",
    answer:
      "初心者にはCanvaが最もおすすめです。直感的なUIとテンプレートで、デザイン知識がなくてもプロ品質の画像が作れます。手軽に写真を補正したいだけならFotorもワンタップ補正で簡単です。",
  },
  {
    question: "SNS用の画像作成に向いているソフトはどれですか？",
    answer:
      "SNS用画像の作成にはCanvaが最適です。Instagram・Twitter・Facebook・YouTubeなど各SNSに最適化されたテンプレートが豊富に用意されており、サイズ調整も自動で行ってくれます。Fotorもコラージュやバナー作成に便利です。",
  },
  {
    question: "RAW現像をするならどのソフトが良いですか？",
    answer:
      "RAW現像ならAdobe Lightroomが業界標準です。RAWファイルの色調補正・ホワイトバランス調整・ノイズ除去など、プロ品質の現像が可能です。フォトプラン（月額1,180円）にはPhotoshopも付属するため、コストパフォーマンスも優れています。",
  },
  {
    question: "スマホで写真編集するならどのアプリがおすすめですか？",
    answer:
      "スマホでの写真編集にはCanva（デザイン+編集）、Adobe Lightroom Mobile（本格的な色補正）、Pixlr（高機能編集）がおすすめです。いずれも無料で基本機能が使え、スマホの画面でも直感的に操作できます。",
  },
  {
    question: "Photoshopの代替として使えるソフトはどれですか？",
    answer:
      "無料でPhotoshopの代替を探すならGIMPが最も近い機能を持っています。レイヤー編集・マスク・フィルター・プラグインなど高度な機能に対応。ブラウザベースならPixlrがPhotoshopに似たUIで使いやすいです。",
  },
];

export default function PhotoEditingComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          {
            name: "写真編集ソフト比較おすすめ5選",
            url: `${siteConfig.url}/guide/photo-editing-comparison`,
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
        <span>写真編集ソフト比較おすすめ5選</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
            比較
          </span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
            クリエイティブ
          </span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】写真編集ソフト比較おすすめ5選｜機能・料金・初心者向けを徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「写真をもっときれいに編集したいけど、どのソフトがいいの？」そんな疑問にお答えします。この記事では、2026年現在おすすめの写真編集ソフト5選（Adobe Lightroom・Canva・GIMP・Pixlr・Fotor）を機能・料金・使いやすさ・AI機能で徹底比較。初心者からプロまで、あなたに最適なソフトの選び方を解説します。
        </p>
      </div>

      {/* Quick Recommendation */}
      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：目的別おすすめはこれ！</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p>
            <span className="font-bold text-blue-700 dark:text-blue-300">
              プロ品質のRAW現像 → Adobe Lightroom
            </span>
            （業界標準・フォトプラン月額1,180円）
          </p>
          <p>
            <span className="font-bold text-purple-700 dark:text-purple-300">
              初心者・SNS画像作成 → Canva
            </span>
            （テンプレート豊富・無料で使える）
          </p>
          <p>
            <span className="font-bold text-green-700 dark:text-green-300">
              無料で高機能編集 → GIMP
            </span>
            （完全無料・Photoshop代替）
          </p>
          <p>
            <span className="font-bold text-pink-700 dark:text-pink-300">
              ブラウザで手軽に → Pixlr
            </span>
            （インストール不要・AI機能充実）
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#why-edit" className="text-primary hover:underline">
              1. 写真編集ソフトを使うメリット
            </a>
          </li>
          <li>
            <a href="#comparison-table" className="text-primary hover:underline">
              2. 写真編集ソフト5選の機能・料金比較表
            </a>
          </li>
          <li>
            <a href="#detail" className="text-primary hover:underline">
              3. 各ソフトの詳細レビュー（メリット・デメリット）
            </a>
          </li>
          <li>
            <a href="#use-cases" className="text-primary hover:underline">
              4. 目的別おすすめ写真編集ソフト
            </a>
          </li>
          <li>
            <a href="#how-to-choose" className="text-primary hover:underline">
              5. 写真編集ソフトの選び方5つのポイント
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

      {/* Section 1 */}
      <section id="why-edit" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          1. 写真編集ソフトを使うメリット
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          写真編集ソフトを活用することで、スマホやカメラで撮った写真をさらに美しく仕上げることができます。
        </p>
        <div className="space-y-3">
          {[
            {
              icon: "&#127912;",
              title: "写真のクオリティが格段に向上",
              desc: "明るさ・コントラスト・色彩の調整で、暗い写真を明るくしたり、色味を整えたり、プロのような仕上がりにできます。RAW現像なら撮影後でも大幅な補正が可能です。",
            },
            {
              icon: "&#129302;",
              title: "AIで簡単に高品質な編集",
              desc: "最新のAI機能により、ワンクリックで背景除去・自動補正・ノイズ除去などが可能。専門知識がなくてもプロ品質の編集ができる時代になりました。",
            },
            {
              icon: "&#128241;",
              title: "SNS・ブログの画像作成にも対応",
              desc: "写真編集だけでなく、テキスト追加・コラージュ・テンプレート活用で、SNS投稿やブログのアイキャッチ画像もすぐに作成できます。",
            },
            {
              icon: "&#128176;",
              title: "無料ソフトでも十分な機能",
              desc: "GIMPやCanvaの無料プランなど、無料でも十分に高品質な編集が可能。まずは無料ソフトから始めて、必要に応じて有料ソフトに移行するのがおすすめです。",
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
          2. 写真編集ソフト5選の機能・料金比較表
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          まずは5つのソフトの主要機能を一覧で比較してみましょう。
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">項目</th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-blue-600 dark:text-blue-400">Lightroom</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-purple-600 dark:text-purple-400">Canva</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-green-600 dark:text-green-400">GIMP</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-pink-600 dark:text-pink-400">Pixlr</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-red-600 dark:text-red-400">Fotor</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "月額料金", lr: "1,180円〜", canva: "無料/1,000円", gimp: "完全無料", pixlr: "無料/750円〜", fotor: "無料/1,099円" },
                { label: "タイプ", lr: "RAW現像", canva: "デザイン+編集", gimp: "高機能編集", pixlr: "ブラウザ編集", fotor: "簡単補正" },
                { label: "RAW対応", lr: "対応", canva: "非対応", gimp: "対応", pixlr: "一部対応", fotor: "一部対応" },
                { label: "レイヤー編集", lr: "限定的", canva: "基本的", gimp: "高機能", pixlr: "対応", fotor: "非対応" },
                { label: "AI機能", lr: "非常に充実", canva: "充実", gimp: "プラグイン", pixlr: "充実", fotor: "充実" },
                { label: "テンプレート", lr: "プリセット", canva: "61万種以上", gimp: "なし", pixlr: "豊富", fotor: "豊富" },
                { label: "初心者向け", lr: "中級〜", canva: "初心者最適", gimp: "中級〜", pixlr: "初〜中級", fotor: "初心者向け" },
                { label: "対応環境", lr: "全プラットフォーム", canva: "全プラットフォーム", gimp: "PC限定", pixlr: "Web/モバイル", fotor: "全プラットフォーム" },
              ].map((row) => (
                <tr key={row.label}>
                  <td className="border border-card-border p-3 font-medium bg-card-bg">{row.label}</td>
                  <td className="border border-card-border p-3">{row.lr}</td>
                  <td className="border border-card-border p-3">{row.canva}</td>
                  <td className="border border-card-border p-3">{row.gimp}</td>
                  <td className="border border-card-border p-3">{row.pixlr}</td>
                  <td className="border border-card-border p-3">{row.fotor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mt-2">
          ※ 料金は2026年4月時点の情報です。プランや機能は変更される場合があります。
        </p>
      </section>

      {/* Section 3 - Detailed Reviews */}
      <section id="detail" className="mb-10">
        <h2 className="text-2xl font-bold mb-6">
          3. 各ソフトの詳細レビュー（メリット・デメリット）
        </h2>
        <div className="space-y-10">
          {photoTools.map((tool, index) => (
            <div
              key={tool.name}
              className="bg-card-bg border border-card-border rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {index + 1}
                </span>
                <h3 className="text-xl font-bold">{tool.name}</h3>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colorMap[tool.color]}`}>
                  {tool.badge}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 text-sm">
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">月額料金</span>
                  <span className="font-bold">{tool.price}</span>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">タイプ</span>
                  <span className="font-bold">{tool.type}</span>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">対応環境</span>
                  <span className="font-bold">{tool.platforms}</span>
                </div>
              </div>
              <div className="mb-5">
                <h4 className="text-sm font-bold mb-2">機能詳細</h4>
                <div className="bg-background rounded-lg p-3 text-sm">
                  <p className="text-muted mb-1"><span className="font-medium">プラン：</span>{tool.plan}</p>
                  <p className="text-muted mb-1"><span className="font-medium">主な機能：</span>{tool.featureDetail}</p>
                  <p className="text-muted"><span className="font-medium">AI機能：</span>{tool.aiFeatures}</p>
                </div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-5">
                <p className="text-sm text-slate-800 dark:text-slate-100">
                  <span className="font-bold">こんな人におすすめ：</span>
                  {tool.bestFor}
                </p>
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-bold mb-2 text-green-600 dark:text-green-400">メリット</h4>
                <ul className="space-y-1">
                  {tool.pros.map((p) => (
                    <li key={p} className="text-sm text-muted flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">&#9675;</span>{p}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-2 text-red-600 dark:text-red-400">デメリット</h4>
                <ul className="space-y-1">
                  {tool.cons.map((c) => (
                    <li key={c} className="text-sm text-muted flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">&#9651;</span>{c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 - Use Cases */}
      <section id="use-cases" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">4. 目的別おすすめ写真編集ソフト</h2>
        <div className="space-y-4">
          {[
            { scene: "一眼カメラのRAW現像をしたい", app: "Adobe Lightroom", reason: "RAW現像ならLightroomが業界標準。色調補正・ホワイトバランス・ノイズ除去など、プロ品質の現像ワークフローが完成します。フォトプランならPhotoshopも使えます。" },
            { scene: "SNS投稿用のおしゃれな画像を作りたい", app: "Canva", reason: "Instagram・Twitter・YouTube用のテンプレートが豊富。写真にテキストやステッカーを追加して、プロ品質のSNS画像が数分で完成します。" },
            { scene: "無料でPhotoshopのような編集がしたい", app: "GIMP", reason: "完全無料でレイヤー編集・マスク・フィルターなどPhotoshopに匹敵する機能を搭載。コストをかけずに本格的な画像編集をしたい方に最適です。" },
            { scene: "ソフトをインストールせずに編集したい", app: "Pixlr", reason: "ブラウザから即座に利用可能。インストール不要でPhotoshopに似たUIの本格的な画像編集ができます。出先のPCでも使えて便利です。" },
            { scene: "とにかく簡単に写真を綺麗にしたい", app: "Fotor", reason: "ワンタップ補正で写真を自動的に最適化。難しい操作は一切不要で、AIが最適な明るさ・色味・コントラストに調整してくれます。" },
          ].map((item) => (
            <div key={item.scene} className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-1">{item.scene}</h3>
              <p className="text-sm text-primary font-medium mb-2">{item.app}</p>
              <p className="text-sm text-muted leading-relaxed">{item.reason}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5 - How to Choose */}
      <section id="how-to-choose" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">5. 写真編集ソフトの選び方5つのポイント</h2>
        <div className="space-y-3">
          {[
            { num: "1", title: "用途を明確にする", desc: "RAW現像ならLightroom、デザイン作成ならCanva、高度な画像編集ならGIMPなど、用途によって最適なソフトが異なります。まずは何をしたいかを明確にしましょう。" },
            { num: "2", title: "予算を決める", desc: "完全無料のGIMP、無料プランが使えるCanva・Pixlr・Fotor、有料のLightroomと価格帯は様々。まずは無料ソフトから試して必要に応じて有料に移行するのがおすすめです。" },
            { num: "3", title: "使いやすさを確認する", desc: "初心者にはCanva・Fotorの直感的なUIがおすすめ。GIMPやPixlrはPhotoshopに似たUIで中級者向け。Lightroomは学習コストがありますが使いこなせば最強です。" },
            { num: "4", title: "AI機能の充実度をチェック", desc: "2026年の写真編集はAI機能が重要。背景除去・自動補正・ノイズ除去などAIの力で作業時間を大幅に短縮できます。Lightroom・Canva・PixlrはAI機能が特に充実しています。" },
            { num: "5", title: "対応プラットフォームを確認", desc: "PCだけでなくスマホやタブレットでも編集したい場合は、マルチプラットフォーム対応のソフトを選びましょう。Canva・Lightroom・Fotorは全デバイス対応です。" },
          ].map((item) => (
            <div key={item.num} className="bg-card-bg border border-card-border rounded-xl p-4">
              <div className="flex items-start gap-3">
                <span className="bg-primary text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{item.num}</span>
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
          {faqItems.map((item) => (
            <div key={item.question} className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold text-sm mb-2">Q. {item.question}</h3>
              <p className="text-sm text-muted leading-relaxed">A. {item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7 - Summary */}
      <section id="summary" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">7. まとめ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <p className="text-muted leading-relaxed mb-4">
            写真編集ソフトは目的とスキルレベルに合ったものを選ぶことが大切です。プロ品質のRAW現像なら「Adobe Lightroom」、初心者やSNS画像作成なら「Canva」、無料で高機能な編集なら「GIMP」、ブラウザで手軽になら「Pixlr」、ワンタップで簡単補正なら「Fotor」がおすすめです。
          </p>
          <p className="text-muted leading-relaxed mb-4">
            多くのソフトには無料プランや無料体験が用意されているので、まずは試してみて自分に合うか確認しましょう。AI機能の進化により、専門知識がなくてもプロ品質の編集ができる時代です。
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm font-bold mb-2">この記事のポイント</p>
            <ul className="text-sm text-muted space-y-1">
              <li>・RAW現像のプロ品質なら「Adobe Lightroom」（月額1,180円〜）</li>
              <li>・初心者・SNS画像作成なら「Canva」（無料で使える）</li>
              <li>・完全無料の高機能編集なら「GIMP」</li>
              <li>・ブラウザで手軽に編集するなら「Pixlr」</li>
              <li>・AI機能の進化で初心者でもプロ品質の編集が可能に</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/video-editing-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">動画編集ソフト比較おすすめ5選</span>
            <p className="text-xs text-muted mt-1">Adobe Premiere Pro・DaVinci Resolveなどを徹底比較</p>
          </Link>
          <Link href="/guide/cloud-storage-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">クラウドストレージ比較おすすめ5選</span>
            <p className="text-xs text-muted mt-1">Google Drive・iCloud+・OneDriveなどを徹底比較</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
