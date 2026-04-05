import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【完全ガイド】QRコードの作り方と活用術",
  description:
    "QRコードの作成方法を初心者向けに徹底解説。URL・テキスト・WiFi・名刺など用途別の活用術や、無料ツールを使った簡単な作り方を紹介します。",
  alternates: {
    canonical: `${siteConfig.url}/guide/qr-code-howto`,
  },
};

function HowToJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "QRコードの作り方",
    description: "無料のオンラインツールを使ってQRコードを作成する方法",
    step: [
      {
        "@type": "HowToStep",
        name: "QRコード作成ツールを開く",
        text: "ネットツールボックスのQRコード作成ツールにアクセスします。",
        url: `${siteConfig.url}/tools/qr-code`,
      },
      {
        "@type": "HowToStep",
        name: "内容を入力する",
        text: "QRコードに埋め込みたいURL、テキスト、WiFi情報などを入力します。",
      },
      {
        "@type": "HowToStep",
        name: "QRコードを生成する",
        text: "入力内容を確認し、QRコードを自動生成します。",
      },
      {
        "@type": "HowToStep",
        name: "ダウンロードする",
        text: "生成されたQRコードをPNG画像としてダウンロードします。",
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function QrCodeHowtoPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <HowToJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          {
            name: "QRコードの作り方",
            url: `${siteConfig.url}/guide/qr-code-howto`,
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
        <span>QRコードの作り方</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            実践ガイド
          </span>
          <span className="text-xs text-muted">5分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【完全ガイド】QRコードの作り方と活用術
        </h1>
        <p className="text-muted leading-relaxed">
          QRコードは今やビジネスから日常生活まで幅広く使われています。この記事では、QRコードの基本から実践的な活用方法、無料ツールを使った簡単な作成手順まで詳しく解説します。
        </p>
      </div>

      {/* Table of Contents */}
      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#what-is-qr" className="text-primary hover:underline">
              1. QRコードとは？
            </a>
          </li>
          <li>
            <a href="#how-to-create" className="text-primary hover:underline">
              2. QRコードの作り方（4ステップ）
            </a>
          </li>
          <li>
            <a href="#use-cases" className="text-primary hover:underline">
              3. QRコードの活用シーン7選
            </a>
          </li>
          <li>
            <a href="#best-practices" className="text-primary hover:underline">
              4. QRコード作成のベストプラクティス
            </a>
          </li>
          <li>
            <a href="#faq" className="text-primary hover:underline">
              5. よくある質問
            </a>
          </li>
        </ul>
      </div>

      {/* Section 1 */}
      <section id="what-is-qr" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. QRコードとは？</h2>
        <p className="text-muted leading-relaxed mb-4">
          QRコード（Quick Response Code）は、1994年に日本のデンソーウェーブ社が開発した二次元バーコードです。従来のバーコードが横方向にしか情報を持てないのに対し、QRコードは縦横両方に情報を格納できるため、はるかに多くのデータを収められます。
        </p>
        <p className="text-muted leading-relaxed mb-4">
          スマートフォンのカメラをかざすだけで読み取れる手軽さから、URLの共有、決済、名刺交換、イベント管理など、さまざまな場面で活用されています。
        </p>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p className="text-sm font-medium mb-1">豆知識</p>
          <p className="text-sm text-muted">
            QRコードは最大7,089文字の数字、または4,296文字の英数字を格納できます。また、一部が汚れたり欠損しても読み取れるエラー訂正機能を備えています。
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section id="how-to-create" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          2. QRコードの作り方（4ステップ）
        </h2>
        <p className="text-muted leading-relaxed mb-6">
          ネットツールボックスの無料QRコード作成ツールを使えば、わずか数秒でQRコードを作成できます。アカウント登録も不要です。
        </p>

        <div className="space-y-4">
          {[
            {
              step: "STEP 1",
              title: "QRコード作成ツールを開く",
              desc: "ネットツールボックスのQRコード作成ページにアクセスします。ブラウザがあればPC・スマホどちらからでも利用可能です。",
            },
            {
              step: "STEP 2",
              title: "内容を入力する",
              desc: "QRコードに埋め込みたい情報を入力します。URL、テキスト、メールアドレスなど、自由に設定できます。",
            },
            {
              step: "STEP 3",
              title: "QRコードを確認する",
              desc: "入力内容に応じてQRコードがリアルタイムで生成されます。正しく読み取れるかプレビューで確認しましょう。",
            },
            {
              step: "STEP 4",
              title: "画像をダウンロードする",
              desc: "生成されたQRコードをPNG画像としてダウンロード。印刷物やWebサイトなど、さまざまな場所で使用できます。",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-card-bg border border-card-border rounded-xl p-5"
            >
              <div className="flex items-start gap-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full flex-shrink-0">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/tools/qr-code"
            className="inline-block bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            QRコード作成ツールを使う
          </Link>
        </div>
      </section>

      {/* Section 3 */}
      <section id="use-cases" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          3. QRコードの活用シーン7選
        </h2>

        <div className="space-y-6">
          {[
            {
              icon: "🌐",
              title: "WebサイトURL共有",
              desc: "会社やサービスのURLをQRコードにすれば、チラシや名刺から直接アクセスしてもらえます。長いURLを手入力してもらう手間が省けます。",
            },
            {
              icon: "💳",
              title: "名刺・連絡先交換",
              desc: "名前、メールアドレス、電話番号などをvCard形式でQRコードに埋め込めます。相手はスキャンするだけでスマホの連絡先に保存できます。",
            },
            {
              icon: "📶",
              title: "WiFi接続情報の共有",
              desc: "WiFiのSSIDとパスワードをQRコードにすれば、来客やお客様にスムーズにWiFi接続を提供できます。飲食店やオフィスで重宝します。",
            },
            {
              icon: "💰",
              title: "キャッシュレス決済",
              desc: "PayPayやLINE Payなどのモバイル決済でQRコードが広く使われています。個人間送金やお店での支払いに活用できます。",
            },
            {
              icon: "🎫",
              title: "イベント・チケット管理",
              desc: "参加者ごとにユニークなQRコードを発行すれば、受付でスキャンするだけで本人確認ができます。イベントの入場管理が効率化できます。",
            },
            {
              icon: "📦",
              title: "商品・在庫管理",
              desc: "商品情報をQRコードで管理すれば、在庫確認や棚卸作業が効率化されます。製造業や物流でも広く活用されています。",
            },
            {
              icon: "📄",
              title: "PDFやドキュメントへのリンク",
              desc: "マニュアルやカタログのPDFへのリンクをQRコードにして印刷物に貼り付ければ、紙とデジタルをスムーズに繋げられます。",
            },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <div>
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 */}
      <section id="best-practices" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          4. QRコード作成のベストプラクティス
        </h2>

        <div className="space-y-4">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <h3 className="font-bold text-sm mb-2">適切なサイズで印刷する</h3>
            <p className="text-sm text-muted">
              QRコードは最低でも2cm x
              2cm以上のサイズで印刷しましょう。小さすぎるとスマートフォンのカメラで読み取れないことがあります。遠くから読み取る場合は、距離の1/10以上のサイズが目安です。
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <h3 className="font-bold text-sm mb-2">
              コントラストを確保する
            </h3>
            <p className="text-sm text-muted">
              QRコードは白背景に黒いパターンが基本です。背景色と前景色のコントラストが低いと読み取りに失敗します。明るい色の背景に暗い色のコードを配置してください。
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <h3 className="font-bold text-sm mb-2">
              余白（クワイエットゾーン）を確保する
            </h3>
            <p className="text-sm text-muted">
              QRコードの周囲には最低でもセル4個分の余白が必要です。余白がないと正しく認識されないことがあります。画像を切り抜くときは余白を削りすぎないように注意しましょう。
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <h3 className="font-bold text-sm mb-2">
              公開前に必ずテストする
            </h3>
            <p className="text-sm text-muted">
              QRコードを印刷・公開する前に、複数のスマートフォンで実際に読み取りテストを行いましょう。iPhoneとAndroidの両方で確認するのがおすすめです。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">5. よくある質問</h2>
        <div className="space-y-4">
          {[
            {
              q: "QRコードの作成に費用はかかりますか？",
              a: "ネットツールボックスのQRコード作成ツールは完全無料です。作成回数の制限もなく、商用利用も可能です。",
            },
            {
              q: "作成したQRコードに有効期限はありますか？",
              a: "静的QRコード（URLやテキストを直接埋め込んだもの）には有効期限はありません。ただし、リンク先のページが削除された場合はアクセスできなくなります。",
            },
            {
              q: "どのくらいの文字数を埋め込めますか？",
              a: "QRコードには最大4,296文字の英数字を格納できます。ただし、情報量が増えるほどQRコードが複雑になり、読み取りにくくなるため、できるだけ短い内容にすることを推奨します。",
            },
            {
              q: "QRコードが読み取れない場合は？",
              a: "サイズが小さすぎないか、余白が十分か、コントラストが適切かを確認してください。また、画像がぼやけていると読み取りにくくなります。",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-card-bg border border-card-border rounded-xl p-5"
            >
              <h3 className="font-bold mb-2">Q. {item.q}</h3>
              <p className="text-sm text-muted leading-relaxed">
                A. {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card-bg border border-card-border rounded-xl p-8 text-center">
        <h2 className="text-xl font-bold mb-3">
          QRコードを今すぐ作成しよう
        </h2>
        <p className="text-sm text-muted mb-5">
          無料・登録不要でQRコードを作成できます。URLやテキストを入力するだけで、すぐにダウンロード可能です。
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/tools/qr-code"
            className="inline-block bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            QRコード作成ツールを使う
          </Link>
          <Link
            href={`/category/${encodeURIComponent("画像・メディア")}`}
            className="inline-block border border-card-border px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-card-bg transition-colors"
          >
            画像・メディアツール一覧
          </Link>
        </div>
      </section>
    </div>
  );
}
