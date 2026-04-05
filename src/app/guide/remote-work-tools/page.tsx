import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "リモートワークに必須の無料ツール10選｜在宅勤務を効率化",
  description:
    "リモートワーク・在宅勤務に役立つ無料Webツール10選を紹介。ポモドーロタイマー・世界時計・タイムゾーン変換・パスワード生成・QRコードなど、登録不要ですぐに使えるツールを厳選。",
  alternates: {
    canonical: `${siteConfig.url}/guide/remote-work-tools`,
  },
  keywords: [
    "リモートワーク ツール",
    "在宅勤務 便利ツール",
    "テレワーク 無料ツール",
    "リモートワーク 効率化",
    "在宅ワーク おすすめツール",
  ],
};

const toolGroups = [
  {
    groupTitle: "時間管理・集中力アップ",
    groupIcon: "⏱️",
    groupDesc:
      "在宅勤務ではオンオフの切り替えが難しいもの。時間管理ツールで集中力を維持しましょう。",
    tools: [
      {
        name: "ポモドーロタイマー",
        slug: "pomodoro",
        desc: "25分集中＋5分休憩のポモドーロテクニックをブラウザで実践。在宅勤務で集中力が途切れがちな方に最適です。作業と休憩のリズムを作ることで、長時間の在宅ワークでも高い生産性を維持できます。",
      },
      {
        name: "ストップウォッチ",
        slug: "stopwatch",
        desc: "タスクにかかった時間を正確に計測。作業時間の記録や、ミーティングの時間管理に活用できます。自分の作業ペースを把握することで、スケジュール管理の精度が上がります。",
      },
    ],
  },
  {
    groupTitle: "海外チームとの連携",
    groupIcon: "🌍",
    groupDesc:
      "海外拠点のチームやクライアントとのやり取りに欠かせないツール",
    tools: [
      {
        name: "世界時計",
        slug: "world-clock",
        desc: "世界各地の現在時刻を一覧表示。海外のチームメンバーやクライアントとのミーティング調整に便利です。複数のタイムゾーンを同時に確認できるので、最適な会議時間を見つけやすくなります。",
      },
      {
        name: "タイムゾーン変換",
        slug: "timezone-converter",
        desc: "日本時間と海外の時刻を簡単に変換。「ニューヨークの午前10時は日本の何時？」がすぐにわかります。リモートでの国際ミーティングのスケジューリングに欠かせないツールです。",
      },
    ],
  },
  {
    groupTitle: "セキュリティ対策",
    groupIcon: "🔒",
    groupDesc:
      "自宅ネットワークからの業務にはセキュリティ意識が不可欠です",
    tools: [
      {
        name: "パスワード生成",
        slug: "password-generator",
        desc: "安全なランダムパスワードを即座に生成。リモートワークでは多数のSaaSツールやVPNアカウントを管理する必要があります。各サービスごとに強力なパスワードを設定しましょう。",
      },
      {
        name: "ハッシュ生成",
        slug: "hash-generator",
        desc: "MD5やSHA-256のハッシュ値を生成。ファイルをチームメンバーに共有する際、ハッシュ値で整合性を検証すれば改ざんの有無を確認できます。",
      },
    ],
  },
  {
    groupTitle: "コミュニケーション・共有",
    groupIcon: "📤",
    groupDesc:
      "リモート環境でのスムーズな情報共有をサポートするツール",
    tools: [
      {
        name: "QRコード作成",
        slug: "qr-code",
        desc: "URLやテキストからQRコードを生成。オンラインイベントの参加リンクや、共有ドキュメントのURLをQRコードにすれば、スマホからもすぐにアクセスできます。",
      },
      {
        name: "URLエンコード",
        slug: "url-encode",
        desc: "日本語を含むURLを安全にエンコード。チャットツールでリンクを共有する際、URLが途切れるのを防ぎます。SlackやTeamsでの共有時に重宝します。",
      },
    ],
  },
  {
    groupTitle: "データ処理・開発",
    groupIcon: "💻",
    groupDesc:
      "リモートでの開発作業やデータ整理に役立つツール",
    tools: [
      {
        name: "JSON整形",
        slug: "json-formatter",
        desc: "APIレスポンスや設定ファイルのJSONを見やすく整形。リモート環境でのデバッグやコードレビュー時に活用できます。シンタックスハイライト付きで視認性も抜群です。",
      },
      {
        name: "テキスト差分比較",
        slug: "text-diff",
        desc: "2つのテキストの違いをハイライト表示。リモートでの共同作業で、ドキュメントの変更箇所をすばやく把握できます。設定ファイルの更新確認にも便利です。",
      },
    ],
  },
];

export default function RemoteWorkToolsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          {
            name: "リモートワーク必須ツール10選",
            url: `${siteConfig.url}/guide/remote-work-tools`,
          },
        ]}
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
        <span>リモートワーク必須ツール10選</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300">
            リモートワーク
          </span>
          <span className="text-xs text-muted">7分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          リモートワークに必須の無料ツール10選｜在宅勤務を効率化
        </h1>
        <p className="text-muted leading-relaxed">
          リモートワークや在宅勤務が当たり前になった今、自宅でも快適に働くための環境整備が重要です。この記事では、時間管理・セキュリティ・海外チームとの連携など、リモートワークで本当に役立つ無料Webツール10選を紹介します。すべて登録不要・ブラウザだけで使えるので、今すぐ業務に取り入れられます。
        </p>
      </div>

      {/* Table of Contents */}
      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          {toolGroups.map((group, i) => (
            <li key={group.groupTitle}>
              <a
                href={`#group-${i}`}
                className="text-primary hover:underline"
              >
                {i + 1}. {group.groupIcon} {group.groupTitle}
              </a>
            </li>
          ))}
          <li>
            <a href="#tips" className="text-primary hover:underline">
              6. リモートワークを快適にするコツ
            </a>
          </li>
        </ul>
      </div>

      {/* Intro */}
      <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-4 mb-8">
        <p className="text-sm font-medium mb-1">このガイドの特徴</p>
        <ul className="text-sm text-muted space-y-1">
          <li>・ すべて無料・登録不要で利用可能</li>
          <li>・ ブラウザ上で動作し、データがサーバーに送信されない</li>
          <li>・ PC・スマホ・タブレットに対応</li>
          <li>・ 在宅勤務・テレワーク・ノマドワークに最適</li>
        </ul>
      </div>

      {/* Tool Groups */}
      {toolGroups.map((group, groupIndex) => (
        <section key={group.groupTitle} id={`group-${groupIndex}`} className="mb-10">
          <h2 className="text-2xl font-bold mb-2">
            {groupIndex + 1}. {group.groupIcon} {group.groupTitle}
          </h2>
          <p className="text-sm text-muted mb-5">{group.groupDesc}</p>

          <div className="space-y-4">
            {group.tools.map((tool, toolIndex) => {
              let toolNumber = 0;
              for (let g = 0; g < groupIndex; g++) {
                toolNumber += toolGroups[g].tools.length;
              }
              toolNumber += toolIndex + 1;

              return (
                <div
                  key={tool.slug}
                  className="bg-card-bg border border-card-border rounded-xl p-5"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded">
                      #{toolNumber}
                    </span>
                    <h3 className="font-bold">{tool.name}</h3>
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-3">
                    {tool.desc}
                  </p>
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="text-sm text-primary hover:underline"
                  >
                    {tool.name}を使う →
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      ))}

      {/* Tips */}
      <section id="tips" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          6. リモートワークを快適にするコツ
        </h2>
        <div className="space-y-4">
          <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-4">
            <h3 className="font-bold text-sm mb-2">
              作業時間を「見える化」する
            </h3>
            <p className="text-sm text-muted">
              ポモドーロタイマーやストップウォッチでタスクごとの作業時間を記録しましょう。1日の終わりに振り返ることで、作業の効率化ポイントが見えてきます。
            </p>
          </div>
          <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-4">
            <h3 className="font-bold text-sm mb-2">
              セキュリティを習慣にする
            </h3>
            <p className="text-sm text-muted">
              自宅のWi-Fiは会社のネットワークほど安全ではありません。各サービスごとに強力なパスワードを設定し、定期的に更新する習慣をつけましょう。パスワード生成ツールを使えば、安全なパスワードがワンクリックで作れます。
            </p>
          </div>
          <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-4">
            <h3 className="font-bold text-sm mb-2">
              海外チームとのやり取りは時差を意識
            </h3>
            <p className="text-sm text-muted">
              グローバルチームとの連携では、相手の現地時間を常に意識しましょう。世界時計で複数の拠点の時刻を一目で確認でき、タイムゾーン変換で最適なミーティング時間を見つけられます。
            </p>
          </div>
          <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-4">
            <h3 className="font-bold text-sm mb-2">
              ツールをブックマークしておく
            </h3>
            <p className="text-sm text-muted">
              よく使うツールはブラウザのブックマークバーに登録しておきましょう。必要なときにワンクリックでアクセスでき、作業の中断を最小限に抑えられます。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card-bg border border-card-border rounded-xl p-8 text-center">
        <h2 className="text-xl font-bold mb-3">
          まだまだ便利なツールがあります
        </h2>
        <p className="text-sm text-muted mb-5">
          ネットツールボックスにはこの記事で紹介した10個以外にも、250以上の無料ツールが揃っています。リモートワークをさらに快適にするツールがきっと見つかります。
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-block bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            全ツール一覧を見る
          </Link>
          <Link
            href="/guide/web-tools-for-work"
            className="inline-block border border-card-border px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-card-bg transition-colors"
          >
            仕事効率化ツール15選
          </Link>
          <Link
            href="/guide/password-security"
            className="inline-block border border-card-border px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-card-bg transition-colors"
          >
            パスワードセキュリティガイド
          </Link>
        </div>
      </section>
    </div>
  );
}
