import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】メモ・ノートアプリ比較おすすめ5選｜機能・料金・同期・整理術を徹底解説",
    description:
      "2026年最新のメモ・ノートアプリを徹底比較。Notion・Obsidian・Evernote・Apple Notes・Google Keepの機能・料金を詳しく解説。",
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    datePublished: "2026-04-06",
    dateModified: "2026-04-06",
    mainEntityOfPage: `${siteConfig.url}/guide/note-taking-app-comparison`,
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

const noteApps = [
  {
    name: "Notion",
    type: "オールインワン ワークスペース",
    price: "無料（個人）/ Plus月額$10/人",
    plan: "フリー（個人無料）/ Plus（月額$10/人）/ Business（月額$18/人）",
    features: "ページ型ノート・データベース・Wiki・タスク管理・AI機能",
    featureDetail: "リッチテキスト編集、リレーショナルDB、テンプレート、埋め込み、API連携、AI要約・生成・翻訳",
    sync: "クラウド同期（リアルタイム）",
    storage: "無料：5MB/ファイル / Plus：無制限",
    platforms: "Web / Windows / Mac / iOS / Android",
    pros: [
      "ノート・Wiki・データベース・タスク管理を1つに統合",
      "テンプレートが数千種類あり導入が簡単",
      "AI機能で文章要約・生成・翻訳が可能",
      "データベース機能でノートの整理・検索が強力",
      "チームでのリアルタイム共同編集に対応",
      "APIが公開されており外部連携・自動化が可能",
    ],
    cons: [
      "オフライン対応が完全ではない",
      "自由度が高すぎて初期設計に迷うことがある",
      "動作がやや重い（特にページ数が多い場合）",
    ],
    bestFor:
      "メモだけでなくタスク管理・Wiki・データベースも一元管理したい方に最適。個人の知識管理からチームの情報共有まで幅広く対応します。",
    url: "https://www.notion.so/",
    badge: "オールインワン",
    color: "purple",
  },
  {
    name: "Obsidian",
    type: "ローカルファイル型ナレッジベース",
    price: "無料（個人）/ Sync月額$4 / Publish月額$8",
    plan: "無料（個人・商用利用可）/ Sync（月額$4）/ Publish（月額$8）",
    features: "Markdown編集・双方向リンク・グラフビュー・プラグイン拡張",
    featureDetail: "Markdownベースのノート、双方向リンクでノート間を接続、グラフビューで知識の関連を可視化、1,500以上のプラグインで拡張",
    sync: "ローカル保存（Syncオプションでクラウド同期可）",
    storage: "ローカルストレージ（無制限）",
    platforms: "Windows / Mac / Linux / iOS / Android",
    pros: [
      "ノートがローカルのMarkdownファイルで保存される（データ所有権が自分に）",
      "双方向リンクとグラフビューで知識の関連を可視化",
      "1,500以上のコミュニティプラグインで自由に拡張",
      "オフラインで完全に動作（ネット不要）",
      "動作が非常に軽快（ローカルファイルベース）",
      "基本機能は完全無料（個人・商用利用可）",
    ],
    cons: [
      "デバイス間同期は有料オプション（月額$4）",
      "初期設定やプラグイン選びに知識が必要",
      "共同編集機能がない（個人利用向き）",
    ],
    bestFor:
      "プライバシーを重視する方、知識をネットワーク的に整理したい方に最適。Markdownファイルなので将来的なツール移行も容易です。",
    url: "https://obsidian.md/",
    badge: "プライバシー重視",
    color: "blue",
  },
  {
    name: "Evernote",
    type: "クラウドノート管理の老舗",
    price: "無料 / Personal月額1,100円 / Professional月額1,550円",
    plan: "無料（60MB/月）/ Personal（月額1,100円）/ Professional（月額1,550円）/ Teams（月額2,100円/人）",
    features: "リッチノート・Webクリッパー・OCR検索・タグ整理",
    featureDetail: "リッチテキスト・画像・音声・手書きノート、Webクリッパーでページ保存、画像内テキストOCR検索、タグ・ノートブック整理",
    sync: "クラウド同期（デバイス数制限あり）",
    storage: "無料：60MB/月 / Personal：10GB/月 / Professional：20GB/月",
    platforms: "Web / Windows / Mac / iOS / Android",
    pros: [
      "Webクリッパーでウェブページを丸ごと保存",
      "画像内のテキストもOCRで検索可能",
      "長年の実績と安定したサービス運営",
      "タグ機能でノートを柔軟に分類",
      "音声メモ・手書きメモにも対応",
      "メール転送でメモを自動保存",
    ],
    cons: [
      "無料プランの制限が厳しい（60MB/月・2デバイスまで）",
      "有料プランの価格が他サービスに比べて高め",
      "UIの進化が他のアプリに比べて遅い",
    ],
    bestFor:
      "Webクリッパーで情報収集をしたい方、画像内テキストの検索（OCR）を活用したい方に最適。ビジネスで資料や名刺をデジタル管理したい方にもおすすめです。",
    url: "https://evernote.com/",
    badge: "Webクリッパー最強",
    color: "green",
  },
  {
    name: "Apple Notes（メモ）",
    type: "Apple純正メモアプリ",
    price: "完全無料（Appleデバイス付属）",
    plan: "無料（iCloudストレージに依存：5GB無料 / 50GB 130円/月〜）",
    features: "リッチテキスト・手書き・スキャン・タグ・スマートフォルダ",
    featureDetail: "リッチテキスト編集、Apple Pencil手書き、書類スキャン、タグ・スマートフォルダ、リンクノート、共有・共同編集",
    sync: "iCloud同期（Appleデバイス間で自動同期）",
    storage: "iCloudストレージに依存（5GB無料）",
    platforms: "Mac / iOS / iPadOS / Web（iCloud.com）",
    pros: [
      "Appleデバイスに標準搭載で追加インストール不要",
      "iCloudで全Appleデバイス間が自動同期",
      "Apple Pencilの手書き入力に最適化",
      "書類スキャン機能が内蔵（OCR対応）",
      "起動が非常に速く、メモの即時記録に最適",
      "タグ・スマートフォルダで整理もしやすい",
    ],
    cons: [
      "Appleデバイス以外では使えない（Windows非対応）",
      "Markdownに非対応",
      "データベース機能やリレーション機能がない",
    ],
    bestFor:
      "Apple製品（iPhone・iPad・Mac）ユーザーに最適。追加コスト不要で、思いついたことをすぐにメモ。Apple Pencilとの組み合わせで手書きメモにも最適です。",
    url: "https://apps.apple.com/jp/app/notes/id1110145109",
    badge: "Apple最適",
    color: "pink",
  },
  {
    name: "Google Keep",
    type: "シンプルメモ・付箋型",
    price: "完全無料（Googleアカウントで利用）",
    plan: "無料（Googleアカウントがあれば利用可能）",
    features: "付箋型メモ・チェックリスト・音声メモ・リマインダー・ラベル",
    featureDetail: "カラフルな付箋型メモ、チェックリスト、音声メモ（自動テキスト化）、画像メモ、リマインダー、ラベル整理、共有",
    sync: "Googleアカウントで全デバイス自動同期",
    storage: "Googleアカウントのストレージ（15GB共有）",
    platforms: "Web / iOS / Android / Chrome拡張",
    pros: [
      "完全無料でGoogleアカウントがあればすぐ使える",
      "付箋感覚でサッとメモできるシンプルUI",
      "音声メモを自動でテキスト化",
      "リマインダーで「いつ」「どこで」通知設定可能",
      "Google Docsとの連携でメモを文書化",
      "iOS・Android両方に対応（マルチプラットフォーム）",
    ],
    cons: [
      "長文ノートや構造化されたメモには不向き",
      "フォルダ構造がなく、ラベルのみで整理",
      "Markdownやリッチテキスト機能が限定的",
    ],
    bestFor:
      "ちょっとしたメモ・買い物リスト・アイデアの記録など、シンプルなメモ用途に最適。Googleサービスをよく使う方なら連携もスムーズです。",
    url: "https://keep.google.com/",
    badge: "シンプル無料",
    color: "red",
  },
];

const colorMap: Record<string, string> = {
  pink: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  green: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  purple: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  red: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
};

const faqItems = [
  {
    question: "完全無料で使えるメモアプリはどれですか？",
    answer: "Apple Notes（Appleデバイス付属）、Google Keep（Googleアカウントで利用可能）、Obsidian（個人利用無料）は完全無料で使えます。Notionも個人利用なら無料で十分な機能が使えます。Evernoteにも無料プランがありますが、60MB/月・2デバイスまでの制限があります。",
  },
  {
    question: "Evernoteからの乗り換え先としておすすめはどれですか？",
    answer: "Evernoteからの乗り換え先としてはNotionが最もおすすめです。ノートのインポート機能があり、データベース・Wiki・タスク管理も統合できます。よりシンプルなメモが良いならApple Notes（Apple製品ユーザー）やGoogle Keepが移行しやすいです。プライバシー重視ならObsidianがおすすめです。",
  },
  {
    question: "ナレッジ管理・第二の脳に最適なアプリはどれですか？",
    answer: "ナレッジ管理（第二の脳）にはObsidianが最適です。双方向リンクでノート間の関連を作り、グラフビューで知識のネットワークを可視化できます。Zettelkasten方式やPARA方式などの知識管理メソッドとの相性も抜群です。Notionもデータベース機能で体系的な知識管理が可能です。",
  },
  {
    question: "仕事用のメモアプリとしておすすめはどれですか？",
    answer: "仕事用にはNotionがおすすめです。メモ・タスク管理・Wiki・データベースを1つのツールで管理でき、チームでの共同編集にも対応。Google Workspaceを使っているならGoogle Keepとの連携も便利です。Apple製品のみの環境ならApple Notesでも十分です。",
  },
  {
    question: "手書きメモに最適なアプリはどれですか？",
    answer: "iPadとApple Pencilをお持ちならApple Notesが最適です。手書きの快適さは純正アプリならではの品質です。手書きテキストの検索にも対応しています。Notionは手書き入力には対応していません。",
  },
  {
    question: "オフラインでも使えるメモアプリはどれですか？",
    answer: "Obsidianはローカルファイルベースなので完全にオフラインで動作します。Apple Notesもデバイスにデータが保存されるためオフライン利用可能です。Notionはオフライン対応が改善されていますが、完全ではありません。Google Keepはオフラインでも閲覧・編集が可能（次回オンライン時に同期）です。",
  },
];

export default function NoteTakingAppComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "メモ・ノートアプリ比較おすすめ5選", url: `${siteConfig.url}/guide/note-taking-app-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((item) => ({ question: item.question, answer: item.answer }))} />

      {/* Breadcrumb */}
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>メモ・ノートアプリ比較おすすめ5選</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">比較</span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">生産性</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】メモ・ノートアプリ比較おすすめ5選｜機能・料金・同期・整理術を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「メモアプリが多すぎて、どれを使えばいいか分からない」そんな疑問にお答えします。この記事では、2026年現在おすすめのメモ・ノートアプリ5選（Notion・Obsidian・Evernote・Apple Notes・Google Keep）を機能・料金・同期・整理機能で徹底比較。あなたの使い方に合った最適なアプリの選び方を解説します。
        </p>
      </div>

      {/* Quick Recommendation */}
      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：用途別おすすめはこれ！</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold text-purple-700 dark:text-purple-300">メモ+タスク+Wikiを一元管理 → Notion</span>（個人無料・オールインワン）</p>
          <p><span className="font-bold text-blue-700 dark:text-blue-300">知識をネットワーク的に整理 → Obsidian</span>（無料・ローカル保存・プライバシー重視）</p>
          <p><span className="font-bold text-green-700 dark:text-green-300">Web情報の収集・保存 → Evernote</span>（Webクリッパー最強・OCR検索）</p>
          <p><span className="font-bold text-red-700 dark:text-red-300">サッと簡単にメモしたい → Google Keep</span>（無料・シンプル・マルチプラットフォーム）</p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="#why-note" className="text-primary hover:underline">1. メモ・ノートアプリを使うメリット</a></li>
          <li><a href="#comparison-table" className="text-primary hover:underline">2. メモ・ノートアプリ5選の機能・料金比較表</a></li>
          <li><a href="#detail" className="text-primary hover:underline">3. 各アプリの詳細レビュー（メリット・デメリット）</a></li>
          <li><a href="#use-cases" className="text-primary hover:underline">4. 用途別おすすめメモ・ノートアプリ</a></li>
          <li><a href="#how-to-choose" className="text-primary hover:underline">5. メモ・ノートアプリの選び方5つのポイント</a></li>
          <li><a href="#faq" className="text-primary hover:underline">6. よくある質問（FAQ）</a></li>
          <li><a href="#summary" className="text-primary hover:underline">7. まとめ</a></li>
        </ul>
      </div>

      {/* Section 1 */}
      <section id="why-note" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. メモ・ノートアプリを使うメリット</h2>
        <p className="text-muted leading-relaxed mb-4">デジタルのメモ・ノートアプリを活用することで、情報管理の質が大幅に向上します。</p>
        <div className="space-y-3">
          {[
            { icon: "&#128269;", title: "すべてのメモを瞬時に検索", desc: "紙のノートでは見つけられない過去のメモも、キーワード検索で瞬時に見つかります。画像内のテキスト検索（OCR）に対応したアプリもあります。" },
            { icon: "&#128257;", title: "どのデバイスからでもアクセス", desc: "クラウド同期で、スマホで書いたメモをPCで編集、タブレットで閲覧と、デバイスを問わずシームレスにアクセスできます。" },
            { icon: "&#128279;", title: "情報をつなげて知識に変える", desc: "ノート間のリンクやタグ機能で、バラバラの情報をつなげて体系的な知識に変換。双方向リンクやグラフビューで知識の関連を可視化できるアプリもあります。" },
            { icon: "&#128274;", title: "データの安全性とバックアップ", desc: "クラウド保存で紛失のリスクがなく、バージョン履歴で過去の状態に戻すことも可能。暗号化対応のアプリならプライバシーも安心です。" },
          ].map((item) => (
            <div key={item.title} className="bg-card-bg border border-card-border rounded-xl p-4">
              <h3 className="font-bold text-sm mb-1"><span dangerouslySetInnerHTML={{ __html: item.icon }} /> {item.title}</h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2 - Comparison Table */}
      <section id="comparison-table" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. メモ・ノートアプリ5選の機能・料金比較表</h2>
        <p className="text-muted leading-relaxed mb-4">まずは5つのアプリの主要機能を一覧で比較してみましょう。</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">項目</th>
                <th className="border border-card-border p-3 text-left"><span className="text-purple-600 dark:text-purple-400">Notion</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-blue-600 dark:text-blue-400">Obsidian</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-green-600 dark:text-green-400">Evernote</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-pink-600 dark:text-pink-400">Apple Notes</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-red-600 dark:text-red-400">Google Keep</span></th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "料金", n: "個人無料", o: "無料/Sync$4", e: "無料/月1,100円〜", a: "完全無料", g: "完全無料" },
                { label: "同期", n: "クラウド", o: "ローカル/有料Sync", e: "クラウド", a: "iCloud", g: "Google" },
                { label: "Markdown", n: "対応", o: "ネイティブ対応", e: "非対応", a: "非対応", g: "非対応" },
                { label: "データベース", n: "高機能", o: "プラグイン", e: "なし", a: "なし", g: "なし" },
                { label: "双方向リンク", n: "対応", o: "コア機能", e: "限定的", a: "対応", g: "なし" },
                { label: "AI機能", n: "搭載", o: "プラグイン", e: "搭載", a: "基本的", g: "なし" },
                { label: "オフライン", n: "一部対応", o: "完全対応", e: "対応", a: "完全対応", g: "対応" },
                { label: "対応環境", n: "全デバイス", o: "全OS", e: "全デバイス", a: "Apple限定", g: "Web/モバイル" },
              ].map((row) => (
                <tr key={row.label}>
                  <td className="border border-card-border p-3 font-medium bg-card-bg">{row.label}</td>
                  <td className="border border-card-border p-3">{row.n}</td>
                  <td className="border border-card-border p-3">{row.o}</td>
                  <td className="border border-card-border p-3">{row.e}</td>
                  <td className="border border-card-border p-3">{row.a}</td>
                  <td className="border border-card-border p-3">{row.g}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mt-2">※ 料金は2026年4月時点の情報です。プランや機能は変更される場合があります。</p>
      </section>

      {/* Section 3 - Detailed Reviews */}
      <section id="detail" className="mb-10">
        <h2 className="text-2xl font-bold mb-6">3. 各アプリの詳細レビュー（メリット・デメリット）</h2>
        <div className="space-y-10">
          {noteApps.map((app, index) => (
            <div key={app.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{index + 1}</span>
                <h3 className="text-xl font-bold">{app.name}</h3>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colorMap[app.color]}`}>{app.badge}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 text-sm">
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">料金</span><span className="font-bold">{app.price}</span></div>
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">タイプ</span><span className="font-bold">{app.type}</span></div>
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">対応環境</span><span className="font-bold">{app.platforms}</span></div>
              </div>
              <div className="mb-5">
                <h4 className="text-sm font-bold mb-2">機能詳細</h4>
                <div className="bg-background rounded-lg p-3 text-sm">
                  <p className="text-muted mb-1"><span className="font-medium">プラン：</span>{app.plan}</p>
                  <p className="text-muted mb-1"><span className="font-medium">主な機能：</span>{app.featureDetail}</p>
                  <p className="text-muted mb-1"><span className="font-medium">同期：</span>{app.sync}</p>
                  <p className="text-muted"><span className="font-medium">ストレージ：</span>{app.storage}</p>
                </div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-5">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{app.bestFor}</p>
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-bold mb-2 text-green-600 dark:text-green-400">メリット</h4>
                <ul className="space-y-1">{app.pros.map((p) => (<li key={p} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{p}</li>))}</ul>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-2 text-red-600 dark:text-red-400">デメリット</h4>
                <ul className="space-y-1">{app.cons.map((c) => (<li key={c} className="text-sm text-muted flex items-start gap-2"><span className="text-red-500 mt-0.5">&#9651;</span>{c}</li>))}</ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 - Use Cases */}
      <section id="use-cases" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">4. 用途別おすすめメモ・ノートアプリ</h2>
        <div className="space-y-4">
          {[
            { scene: "仕事のタスク・プロジェクト管理と一緒にメモしたい", app: "Notion", reason: "メモ・タスク管理・Wiki・データベースを1つのツールに統合。チームでの情報共有にも対応し、テンプレートですぐに始められます。個人利用なら無料です。" },
            { scene: "読書メモ・学習ノートを体系的に整理したい", app: "Obsidian", reason: "双方向リンクでノート間の関連を自然に構築。グラフビューで知識のつながりを可視化でき、学習内容の理解が深まります。完全無料でプラグインも豊富です。" },
            { scene: "Web記事やPDFを収集・保存したい", app: "Evernote", reason: "Webクリッパーでウェブページを丸ごと保存。画像内テキストのOCR検索にも対応し、集めた情報を効率的に検索・活用できます。" },
            { scene: "買い物リストやアイデアをサッとメモしたい", app: "Google Keep", reason: "付箋感覚でサッとメモ。チェックリスト・リマインダー・音声メモも対応し、シンプルなメモに最適。Googleアカウントがあれば無料で使えます。" },
            { scene: "iPadで手書きメモを取りたい", app: "Apple Notes", reason: "Apple Pencilとの組み合わせで最高の手書き体験。手書きテキストの検索にも対応し、書類スキャン機能も内蔵。追加コスト不要で使えます。" },
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
        <h2 className="text-2xl font-bold mb-4">5. メモ・ノートアプリの選び方5つのポイント</h2>
        <div className="space-y-3">
          {[
            { num: "1", title: "メモの用途を明確にする", desc: "ちょっとしたメモならGoogle Keep、知識管理ならObsidian、オールインワンならNotionと、用途で最適なアプリが変わります。自分が何をメモしたいかを明確にしましょう。" },
            { num: "2", title: "使用デバイスを確認する", desc: "Apple製品のみならApple Notes、マルチプラットフォームならNotion・Google Keep・Evernoteが対応。ObsidianもWindows・Mac・Linux・iOS・Androidに対応しています。" },
            { num: "3", title: "オフライン利用の必要性を考える", desc: "ネット環境がない場所でもメモしたい場合は、Obsidian（ローカル保存）やApple Notes（デバイス保存）がおすすめ。クラウド前提のNotionはオフライン対応が一部限定的です。" },
            { num: "4", title: "データの所有権とプライバシー", desc: "Obsidianはデータがローカルのファイルとして保存されるため、データの所有権が完全に自分にあります。プライバシーを重視する方はObsidianがおすすめです。" },
            { num: "5", title: "長期的な移行のしやすさ", desc: "将来的にアプリを変更する可能性を考えると、Markdown形式で保存されるObsidian、エクスポート機能があるNotionが移行しやすいです。独自形式のアプリはデータ移行が困難になることがあります。" },
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
            メモ・ノートアプリは用途と使い方に合ったものを選ぶことが大切です。オールインワンなら「Notion」、知識管理なら「Obsidian」、Web情報収集なら「Evernote」、Apple製品ユーザーなら「Apple Notes」、シンプルなメモなら「Google Keep」がおすすめです。
          </p>
          <p className="text-muted leading-relaxed mb-4">
            ほとんどのアプリが無料で使えるので、気になるものをまずは試してみましょう。大切なのは自分に合ったアプリを見つけて、メモする習慣を続けること。情報を記録し整理する力は、仕事でもプライベートでも大きな武器になります。
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm font-bold mb-2 text-slate-900 dark:text-white">この記事のポイント</p>
            <ul className="text-sm text-muted space-y-1">
              <li>・オールインワンなら「Notion」（個人無料・メモ+タスク+Wiki）</li>
              <li>・知識管理・第二の脳なら「Obsidian」（無料・ローカル保存）</li>
              <li>・Web情報収集なら「Evernote」（Webクリッパー最強）</li>
              <li>・シンプルなメモなら「Google Keep」（完全無料）</li>
              <li>・ほとんどのアプリが無料で試せる、まずは使ってみよう</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/project-management-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">プロジェクト管理ツール比較おすすめ5選</span>
            <p className="text-xs text-muted mt-1">Notion・Asana・Trello・Backlog・Jiraを徹底比較</p>
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
