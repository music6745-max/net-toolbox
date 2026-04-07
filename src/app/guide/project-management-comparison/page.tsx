import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】プロジェクト管理ツール比較おすすめ5選｜機能・料金・チーム規模別に徹底解説",
    description:
      "2026年最新のプロジェクト管理ツールを徹底比較。Notion・Asana・Trello・Backlog・Jiraの機能・料金・使いやすさを詳しく解説。",
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    datePublished: "2026-04-06",
    dateModified: "2026-04-06",
    mainEntityOfPage: `${siteConfig.url}/guide/project-management-comparison`,
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

const pmTools = [
  {
    name: "Notion",
    type: "オールインワン ワークスペース",
    price: "無料 / Plus月額$10 / Business月額$18",
    plan: "フリー（個人無料）/ Plus（月額$10/人）/ Business（月額$18/人）/ Enterprise（要問合せ）",
    features: "タスク管理・Wiki・ドキュメント・データベース・AI機能",
    featureDetail: "カンバン・テーブル・カレンダー・タイムラインなど多彩なビュー、Wiki・ドキュメント作成、リレーショナルDB、AI要約・生成",
    integration: "Slack・Google Drive・GitHub・Figma・Zapierなど100以上",
    platforms: "Web / Windows / Mac / iOS / Android",
    pros: [
      "タスク管理・Wiki・ドキュメントを1つのツールに集約",
      "柔軟なデータベースとビュー（カンバン・テーブル・カレンダー等）",
      "テンプレートが豊富で導入が簡単",
      "AI機能で文章要約・生成・翻訳が可能",
      "個人利用なら無料で十分な機能",
      "デザインが美しくモチベーションが上がる",
    ],
    cons: [
      "自由度が高すぎて初期設計に迷うことがある",
      "大規模チームでは権限管理がやや複雑",
      "オフライン対応が完全ではない",
    ],
    bestFor:
      "個人の知識管理からチームのプロジェクト管理まで幅広く対応。タスク管理とドキュメント管理を1つのツールにまとめたい方に最適です。",
    url: "https://www.notion.so/",
    badge: "オールインワン",
    color: "purple",
  },
  {
    name: "Asana",
    type: "チームタスク管理特化型",
    price: "無料 / Starter月額$10.99 / Advanced月額$24.99",
    plan: "Personal（無料・10人まで）/ Starter（月額$10.99/人）/ Advanced（月額$24.99/人）/ Enterprise（要問合せ）",
    features: "タスク管理・プロジェクト管理・ワークフロー自動化・ポートフォリオ",
    featureDetail: "リスト・ボード・タイムライン・カレンダー表示、依存関係設定、ワークフロー自動化、ゴール設定・進捗管理",
    integration: "Slack・Microsoft Teams・Google Workspace・Salesforce・Zapierなど200以上",
    platforms: "Web / Windows / Mac / iOS / Android",
    pros: [
      "チームでのタスク管理に最適化されたUI/UX",
      "ワークフロー自動化でルーティン作業を効率化",
      "プロジェクト横断のポートフォリオ管理が可能",
      "200以上の外部ツールとの連携",
      "ゴール設定と進捗追跡で目標管理もできる",
      "無料プランでも10人まで基本機能が使える",
    ],
    cons: [
      "有料プランの料金がやや高め",
      "ドキュメント管理機能はNotionに比べて弱い",
      "日本語UIがやや不自然な箇所がある",
    ],
    bestFor:
      "チームでのタスク管理・プロジェクト管理に特化。複数プロジェクトを横断的に管理したい中〜大規模チームに最適です。",
    url: "https://asana.com/ja",
    badge: "チーム管理最適",
    color: "pink",
  },
  {
    name: "Trello",
    type: "カンバン式タスク管理",
    price: "無料 / Standard月額$5 / Premium月額$10",
    plan: "無料（ボード10枚まで）/ Standard（月額$5/人）/ Premium（月額$10/人）/ Enterprise（要問合せ）",
    features: "カンバンボード・チェックリスト・Power-Up・自動化（Butler）",
    featureDetail: "直感的なカンバンボード、カード型タスク管理、チェックリスト、期限設定、Butler自動化、カレンダー・タイムライン表示",
    integration: "Slack・Google Drive・Dropbox・Jira・Confluenceなど200以上（Power-Up）",
    platforms: "Web / Windows / Mac / iOS / Android",
    pros: [
      "カンバンボードで直感的にタスクを管理",
      "UIがシンプルで学習コストがほとんどゼロ",
      "Butler自動化で繰り返し作業を効率化",
      "Power-Upで機能を自由に拡張",
      "無料プランでも基本的なタスク管理は十分",
      "ドラッグ&ドロップで快適な操作感",
    ],
    cons: [
      "大規模プロジェクトには機能が不足しがち",
      "ガントチャート表示はPremium以上が必要",
      "レポート・分析機能が弱い",
    ],
    bestFor:
      "シンプルなタスク管理をしたい方、小規模チーム・個人に最適。カンバンボードの直感的な操作で、誰でもすぐに使い始められます。",
    url: "https://trello.com/",
    badge: "シンプル最強",
    color: "blue",
  },
  {
    name: "Backlog",
    type: "日本製プロジェクト管理",
    price: "フリー（無料）/ スターター月額2,970円 / スタンダード月額17,600円",
    plan: "フリー（無料・10人まで）/ スターター（月額2,970円・30人まで）/ スタンダード（月額17,600円・無制限）/ プレミアム（月額29,700円）",
    features: "課題管理・Wiki・Git/SVN・ガントチャート・バーンダウンチャート",
    featureDetail: "課題（タスク）管理、Wiki、Gitリポジトリ、ガントチャート、バーンダウンチャート、ファイル共有、カンバンボード",
    integration: "Slack・Chatwork・Microsoft Teams・Typetalkなど",
    platforms: "Web / iOS / Android",
    pros: [
      "日本企業が開発・運営で日本語サポートが万全",
      "課題管理とGitリポジトリが一体化",
      "ガントチャート・バーンダウンチャート標準搭載",
      "Wiki機能でドキュメント管理も可能",
      "UIがシンプルで日本のビジネス文化に合った設計",
      "フリープランで10人まで無料で使える",
    ],
    cons: [
      "海外ツールに比べてUI/UXがやや古い印象",
      "API・連携機能は海外ツールに比べて少ない",
      "有料プランは組織単位の料金（人数が少なくても固定費がかかる）",
    ],
    bestFor:
      "日本語サポートが必要な日本企業・チームに最適。IT開発チームならGit連携が便利で、ガントチャートでプロジェクト全体を見渡せます。",
    url: "https://backlog.com/ja/",
    badge: "日本製・安心",
    color: "green",
  },
  {
    name: "Jira",
    type: "アジャイル開発向けプロジェクト管理",
    price: "無料（10人まで）/ Standard月額$7.16/人 / Premium月額$12.48/人",
    plan: "Free（10人まで）/ Standard（月額$7.16/人）/ Premium（月額$12.48/人）/ Enterprise（要問合せ）",
    features: "スクラムボード・スプリント管理・バックログ・ロードマップ・自動化",
    featureDetail: "スクラム/カンバンボード、スプリント計画・管理、バックログ管理、ロードマップ、高度なワークフロー自動化、レポート・分析",
    integration: "Confluence・Bitbucket・Slack・GitHub・GitLabなど3,000以上",
    platforms: "Web / iOS / Android",
    pros: [
      "アジャイル開発（スクラム・カンバン）に最適化",
      "スプリント管理・バックログ管理の機能が充実",
      "3,000以上のアプリ・連携でカスタマイズ自在",
      "高度なワークフロー自動化で効率化",
      "詳細なレポート・分析でチームの生産性を可視化",
      "無料プランで10人まで基本機能が使える",
    ],
    cons: [
      "設定が複雑で導入・学習コストが高い",
      "非エンジニアにはUIが分かりにくい",
      "シンプルなタスク管理には機能過多",
    ],
    bestFor:
      "ソフトウェア開発チーム、アジャイル開発を実践しているチームに最適。スクラム・カンバンのフレームワークに沿った管理が標準機能で可能です。",
    url: "https://www.atlassian.com/ja/software/jira",
    badge: "開発チーム向け",
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
    question: "無料で使えるプロジェクト管理ツールはどれですか？",
    answer: "Notion（個人無料）、Trello（ボード10枚まで無料）、Asana（10人まで無料）、Backlog（10人まで無料）、Jira（10人まで無料）の5つすべてに無料プランがあります。個人利用ならNotion、小規模チームならTrelloの無料プランが最も充実しています。",
  },
  {
    question: "個人のタスク管理におすすめのツールはどれですか？",
    answer: "個人のタスク管理にはNotionまたはTrelloがおすすめです。Notionはタスク管理に加えてメモ・Wiki・データベースも一元管理できます。Trelloはカンバンボードでシンプルにタスクを管理したい方に最適です。",
  },
  {
    question: "チームでの導入が簡単なツールはどれですか？",
    answer: "Trelloが最も導入が簡単です。直感的なカンバンボードのUIで、説明なしでもすぐに使い始められます。次にNotionもテンプレートを活用すれば素早く導入できます。JiraやBacklogは機能が豊富な分、初期設定にやや時間がかかります。",
  },
  {
    question: "ソフトウェア開発チームに最適なツールはどれですか？",
    answer: "ソフトウェア開発にはJiraまたはBacklogがおすすめです。Jiraはアジャイル開発（スクラム・カンバン）に最適化されており、世界中の開発チームで採用されています。Backlogは日本語サポートが充実しており、Git連携も標準搭載です。",
  },
  {
    question: "ガントチャートが使えるツールはどれですか？",
    answer: "Backlogはガントチャートが標準搭載されています。Asanaはタイムラインビューでガントチャートに近い表示が可能（Starter以上）。Notionもタイムラインビューでガントチャート的な管理ができます。Trelloはプレミアムプラン以上で対応しています。",
  },
  {
    question: "日本語サポートが充実しているツールはどれですか？",
    answer: "Backlogは日本企業（ヌーラボ）が開発・運営しており、日本語サポートが最も充実しています。日本語でのメール・チャットサポート、日本語ドキュメント、日本語セミナーなどが提供されています。NotionやTrelloも日本語UIに対応していますが、サポートは主に英語です。",
  },
];

export default function ProjectManagementComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "プロジェクト管理ツール比較おすすめ5選", url: `${siteConfig.url}/guide/project-management-comparison` },
        ]}
      />
      <FAQJsonLd items={faqItems.map((item) => ({ question: item.question, answer: item.answer }))} />

      {/* Breadcrumb */}
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>プロジェクト管理ツール比較おすすめ5選</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">比較</span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">仕事効率化</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】プロジェクト管理ツール比較おすすめ5選｜機能・料金・チーム規模別に徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「チームのタスク管理を効率化したいけど、どのツールがいいの？」そんな疑問にお答えします。この記事では、2026年現在おすすめのプロジェクト管理ツール5選（Notion・Asana・Trello・Backlog・Jira）を機能・料金・使いやすさ・チーム規模で徹底比較。個人からチームまで最適なツールの選び方を解説します。
        </p>
      </div>

      {/* Quick Recommendation */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：用途別おすすめはこれ！</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold text-purple-700 dark:text-purple-300">個人・小規模チームのオールインワン → Notion</span>（タスク+Wiki+ドキュメント）</p>
          <p><span className="font-bold text-pink-700 dark:text-pink-300">中〜大規模チームのタスク管理 → Asana</span>（ワークフロー自動化が強力）</p>
          <p><span className="font-bold text-blue-700 dark:text-blue-300">シンプルなカンバン管理 → Trello</span>（学習コストゼロ・直感操作）</p>
          <p><span className="font-bold text-green-700 dark:text-green-300">日本企業・日本語サポート重視 → Backlog</span>（日本製・Git連携）</p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="#why-pm" className="text-primary hover:underline">1. プロジェクト管理ツールを使うメリット</a></li>
          <li><a href="#comparison-table" className="text-primary hover:underline">2. プロジェクト管理ツール5選の機能・料金比較表</a></li>
          <li><a href="#detail" className="text-primary hover:underline">3. 各ツールの詳細レビュー（メリット・デメリット）</a></li>
          <li><a href="#use-cases" className="text-primary hover:underline">4. チーム規模・用途別おすすめツール</a></li>
          <li><a href="#how-to-choose" className="text-primary hover:underline">5. プロジェクト管理ツールの選び方5つのポイント</a></li>
          <li><a href="#faq" className="text-primary hover:underline">6. よくある質問（FAQ）</a></li>
          <li><a href="#summary" className="text-primary hover:underline">7. まとめ</a></li>
        </ul>
      </div>

      {/* Section 1 */}
      <section id="why-pm" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. プロジェクト管理ツールを使うメリット</h2>
        <p className="text-muted leading-relaxed mb-4">プロジェクト管理ツールを導入することで、チームの生産性と透明性が大幅に向上します。</p>
        <div className="space-y-3">
          {[
            { icon: "&#128203;", title: "タスクの抜け漏れを防止", desc: "すべてのタスクを一元管理し、担当者・期限・進捗状況を可視化。「あの仕事、誰がやるんだっけ？」という曖昧さをなくせます。" },
            { icon: "&#128101;", title: "チームの連携が円滑に", desc: "タスクへのコメント・ファイル添付・メンション機能で、メールやチャットに散らばりがちな情報をタスクに紐づけて管理できます。" },
            { icon: "&#128200;", title: "進捗状況をリアルタイムで把握", desc: "ダッシュボード・ガントチャート・バーンダウンチャートで、プロジェクト全体の進捗をリアルタイムに可視化。遅延の早期発見が可能です。" },
            { icon: "&#9889;", title: "自動化でルーティン作業を削減", desc: "ステータス変更時の自動通知、定期タスクの自動作成、ワークフローの自動化など、繰り返し作業を効率化できます。" },
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
        <h2 className="text-2xl font-bold mb-4">2. プロジェクト管理ツール5選の機能・料金比較表</h2>
        <p className="text-muted leading-relaxed mb-4">まずは5つのツールの主要機能を一覧で比較してみましょう。</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">項目</th>
                <th className="border border-card-border p-3 text-left"><span className="text-purple-600 dark:text-purple-400">Notion</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-pink-600 dark:text-pink-400">Asana</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-blue-600 dark:text-blue-400">Trello</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-green-600 dark:text-green-400">Backlog</span></th>
                <th className="border border-card-border p-3 text-left"><span className="text-red-600 dark:text-red-400">Jira</span></th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "無料プラン", n: "個人無料", a: "10人まで", t: "ボード10枚", b: "10人まで", j: "10人まで" },
                { label: "有料プラン", n: "$10〜/人/月", a: "$10.99〜/人/月", t: "$5〜/人/月", b: "2,970円〜/月", j: "$7.16〜/人/月" },
                { label: "カンバン", n: "対応", a: "対応", t: "メイン機能", b: "対応", j: "対応" },
                { label: "ガントチャート", n: "タイムライン", a: "タイムライン", t: "Premium〜", b: "標準搭載", j: "ロードマップ" },
                { label: "Wiki/文書", n: "非常に強力", a: "基本的", t: "なし", b: "Wiki搭載", j: "Confluence連携" },
                { label: "自動化", n: "基本的", a: "高機能", t: "Butler", b: "基本的", j: "高機能" },
                { label: "Git連携", n: "GitHub連携", a: "GitHub連携", t: "Power-Up", b: "標準搭載", j: "標準搭載" },
                { label: "日本語サポート", n: "UI対応", a: "UI対応", t: "UI対応", b: "完全対応", j: "UI対応" },
              ].map((row) => (
                <tr key={row.label}>
                  <td className="border border-card-border p-3 font-medium bg-card-bg">{row.label}</td>
                  <td className="border border-card-border p-3">{row.n}</td>
                  <td className="border border-card-border p-3">{row.a}</td>
                  <td className="border border-card-border p-3">{row.t}</td>
                  <td className="border border-card-border p-3">{row.b}</td>
                  <td className="border border-card-border p-3">{row.j}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mt-2">※ 料金は2026年4月時点の情報です。プランや機能は変更される場合があります。</p>
      </section>

      {/* Section 3 - Detailed Reviews */}
      <section id="detail" className="mb-10">
        <h2 className="text-2xl font-bold mb-6">3. 各ツールの詳細レビュー（メリット・デメリット）</h2>
        <div className="space-y-10">
          {pmTools.map((tool, index) => (
            <div key={tool.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{index + 1}</span>
                <h3 className="text-xl font-bold">{tool.name}</h3>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colorMap[tool.color]}`}>{tool.badge}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 text-sm">
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">料金</span><span className="font-bold">{tool.price}</span></div>
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">タイプ</span><span className="font-bold">{tool.type}</span></div>
                <div className="bg-background rounded-lg p-3"><span className="text-muted block mb-1">対応環境</span><span className="font-bold">{tool.platforms}</span></div>
              </div>
              <div className="mb-5">
                <h4 className="text-sm font-bold mb-2">機能詳細</h4>
                <div className="bg-background rounded-lg p-3 text-sm">
                  <p className="text-muted mb-1"><span className="font-medium">プラン：</span>{tool.plan}</p>
                  <p className="text-muted mb-1"><span className="font-medium">主な機能：</span>{tool.featureDetail}</p>
                  <p className="text-muted"><span className="font-medium">連携：</span>{tool.integration}</p>
                </div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-5">
                <p className="text-sm"><span className="font-bold">こんな人におすすめ：</span>{tool.bestFor}</p>
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-bold mb-2 text-green-600 dark:text-green-400">メリット</h4>
                <ul className="space-y-1">{tool.pros.map((p) => (<li key={p} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{p}</li>))}</ul>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-2 text-red-600 dark:text-red-400">デメリット</h4>
                <ul className="space-y-1">{tool.cons.map((c) => (<li key={c} className="text-sm text-muted flex items-start gap-2"><span className="text-red-500 mt-0.5">&#9651;</span>{c}</li>))}</ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 - Use Cases */}
      <section id="use-cases" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">4. チーム規模・用途別おすすめツール</h2>
        <div className="space-y-4">
          {[
            { scene: "個人のタスク・知識管理", app: "Notion", reason: "タスク管理・メモ・Wiki・データベースを1つのツールに集約。個人なら無料で全機能が使えます。テンプレートも豊富で、自分だけのワークスペースを自由にカスタマイズできます。" },
            { scene: "小規模チーム（2〜10人）のシンプル管理", app: "Trello", reason: "カンバンボードの直感的な操作で、導入初日から全員が使えます。無料プランでも基本的なタスク管理は十分。複雑な設定不要でシンプルに始められます。" },
            { scene: "中〜大規模チームの本格プロジェクト管理", app: "Asana", reason: "ワークフロー自動化・ポートフォリオ管理・ゴール設定など、チームの生産性を最大化する機能が充実。複数プロジェクトを横断的に管理できます。" },
            { scene: "ソフトウェア開発チーム", app: "Jira / Backlog", reason: "Jiraはアジャイル開発に最適化されたスクラム・カンバン管理が可能。BacklogはGit連携が標準搭載で日本語サポートも万全。チームの開発スタイルに合わせて選びましょう。" },
            { scene: "日本企業で日本語サポートが必要", app: "Backlog", reason: "日本企業ヌーラボが開発・運営。日本語での技術サポート・ドキュメント・セミナーが充実しており、国内企業での導入実績も豊富です。" },
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
        <h2 className="text-2xl font-bold mb-4">5. プロジェクト管理ツールの選び方5つのポイント</h2>
        <div className="space-y-3">
          {[
            { num: "1", title: "チーム規模に合ったツールを選ぶ", desc: "個人〜少人数ならNotion・Trello、中規模ならAsana、開発チームならJira・Backlogがおすすめ。無料プランの人数制限も確認しましょう。" },
            { num: "2", title: "必要な機能を明確にする", desc: "カンバンだけで十分ならTrello、ガントチャートが必要ならBacklog、ドキュメント管理も一元化したいならNotionなど、必要な機能で絞り込みましょう。" },
            { num: "3", title: "既存ツールとの連携を確認", desc: "Slack・Google Workspace・GitHubなど、すでに使っているツールとの連携対応は重要です。Asana・Jiraは連携数が特に豊富です。" },
            { num: "4", title: "無料プランで試してから有料に移行", desc: "5つすべてに無料プランがあるので、まずは無料で試しましょう。チームメンバーの使い勝手の感想を集めてから有料プランに移行するのがおすすめです。" },
            { num: "5", title: "サポート体制と学習リソースを確認", desc: "日本語サポートが必要ならBacklog一択。その他のツールは英語サポートが中心ですが、日本語のコミュニティやブログ記事は豊富にあります。" },
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
            プロジェクト管理ツールはチーム規模と用途に合ったものを選ぶことが大切です。オールインワンなら「Notion」、チーム管理特化なら「Asana」、シンプルさなら「Trello」、日本語サポートなら「Backlog」、開発チームなら「Jira」がおすすめです。
          </p>
          <p className="text-muted leading-relaxed mb-4">
            5つすべてに無料プランがあるので、まずは試してみてチームに合うか確認しましょう。ツールの導入はゴールではなく、チームの生産性向上のための手段です。シンプルに始めて、必要に応じて機能を拡張していくのがおすすめです。
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm font-bold mb-2">この記事のポイント</p>
            <ul className="text-sm text-muted space-y-1">
              <li>・個人・オールインワンなら「Notion」（個人無料）</li>
              <li>・チーム管理特化なら「Asana」（ワークフロー自動化が強力）</li>
              <li>・シンプル・直感的なら「Trello」（学習コストゼロ）</li>
              <li>・日本語サポート・Git連携なら「Backlog」（日本製）</li>
              <li>・5つすべてに無料プランあり、まずは試してから判断</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/note-taking-app-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">メモ・ノートアプリ比較おすすめ5選</span>
            <p className="text-xs text-muted mt-1">Notion・Obsidian・Evernoteなどを徹底比較</p>
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
