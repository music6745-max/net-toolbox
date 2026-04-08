import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";

export const metadata: Metadata = {
  title: "Twitter(X) プレビュー確認完全ガイド｜投稿前チェックとOGP表示の仕組み【2026年最新】",
  description:
    "Twitter/X の投稿プレビューを事前確認する方法を徹底解説。OGP画像の表示確認、Twitter Card、文字数カウント、リンクカードの仕組みまで実例つきで紹介。投稿前に見た目をチェックしたい方必見。",
  alternates: {
    canonical: `${siteConfig.url}/guide/twitter-preview-guide`,
  },
};

const faqItems = [
  {
    question: "Twitter(X) の投稿プレビューを事前に確認する方法はありますか？",
    answer:
      "はい。ネットツールボックスの「Twitterプレビュー」ツールを使えば、投稿前にPCとスマホでの見た目をリアルタイムにシミュレーションできます。文字数オーバーや改行位置、URLカードの表示まで事前に確認できます。",
  },
  {
    question: "Twitter Card（OGP）が表示されないのはなぜ？",
    answer:
      "主な原因は (1) meta タグ `og:image` や `twitter:card` の記述不足 (2) 画像URLがHTTPS化されていない (3) キャッシュが残っている、の3つです。Twitter Card Validator（Card Editor）で再取得するか、URLにクエリパラメータを付けて再読込することで改善するケースが多いです。",
  },
  {
    question: "Twitter(X)の文字数制限はいくつですか？",
    answer:
      "無料プランは半角280文字/全角140文字が基本です。X Premium（旧Twitter Blue）加入者は最大25,000文字まで投稿できます。URLは短縮URL換算で23文字、画像添付は文字数にカウントされません。",
  },
  {
    question: "Twitterプレビューツールは無料で使えますか？",
    answer:
      "はい、ネットツールボックスの各ツールは完全無料・登録不要です。ブラウザ内で動作するため、投稿内容が外部サーバーに送信されることはありません。",
  },
  {
    question: "OGP画像の推奨サイズは？",
    answer:
      "Twitter/Xの大型カード（summary_large_image）は 1200×628px、正方形カード（summary）は 120×120px以上が推奨です。アスペクト比は2:1、ファイルサイズは5MB以下に収めるとほぼすべての環境で正常に表示されます。",
  },
];

const sections = [
  { id: "why-preview", title: "なぜ投稿前プレビューが重要か" },
  { id: "how-to-check", title: "Twitterプレビュー確認の方法3つ" },
  { id: "tool-usage", title: "プレビューツールの使い方" },
  { id: "ogp-basics", title: "OGPとTwitter Cardの仕組み" },
  { id: "troubleshooting", title: "カードが表示されない時の対処法" },
  { id: "related-tools", title: "関連する便利ツール" },
  { id: "faq", title: "よくある質問" },
];

export default function TwitterPreviewGuidePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "Twitterプレビュー確認ガイド", url: `${siteConfig.url}/guide/twitter-preview-guide` },
        ]}
      />
      <ArticleJsonLd
        headline="Twitter(X) プレビュー確認完全ガイド｜投稿前チェックとOGP表示の仕組み"
        description="Twitter/X の投稿プレビューを事前確認する方法。OGP画像、Twitter Card、文字数カウントまで実例つきで紹介。"
        url={`${siteConfig.url}/guide/twitter-preview-guide`}
      />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>Twitterプレビュー確認ガイド</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
            SNS・ツール
          </span>
          <span className="text-xs text-muted">10分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          Twitter(X) プレビュー確認の完全ガイド｜投稿前チェックの決定版
        </h1>
        <p className="text-muted leading-relaxed">
          「この文章Twitterに投稿したら、実際どう見える？」「リンクをツイートしたらサムネが出ない…」そんな悩みを解決するのが Twitterプレビューの事前確認です。本ガイドではブラウザだけで投稿の見た目を確認する方法、OGP画像（Twitter Card）の仕組み、表示されないときのトラブル解消まで、実務で使える知識を網羅的に解説します。企業アカウント運用者からブロガー、個人投稿者まで、投稿品質を底上げしたい方すべてにおすすめの内容です。
        </p>
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          {sections.map((s, i) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="text-primary hover:underline">
                {i + 1}. {s.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-sky-50 dark:bg-sky-900/40 border border-sky-200 dark:border-sky-800 rounded-lg p-4 mb-8">
        <p className="text-sm font-medium mb-2">今すぐプレビューしたい方へ</p>
        <p className="text-sm text-muted mb-3">
          テキストと画像を入力するだけで、Twitter(X) の投稿が実機とほぼ同じ見た目で表示されます。
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/tools/twitter-preview" className="inline-block bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90">
            Twitterプレビューを開く →
          </Link>
          <Link href="/tools/twitter-card-preview" className="inline-block border border-sky-300 text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/50">
            Twitterカードプレビュー →
          </Link>
        </div>
      </div>

      <section id="why-preview" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. なぜ投稿前プレビューが重要か</h2>
        <p className="text-muted leading-relaxed mb-4">
          Twitter(X) は短いテキストが中心のプラットフォームですが、実際に投稿したあとに「文字数オーバーで尻切れ」「改行の位置がおかしい」「リンクのサムネ画像が出てこない」など見た目のトラブルが頻発します。一度投稿してから修正しようとすると、投稿を削除して再投稿するしかなく、いいね数もリプライも失ってしまいます。だからこそ投稿前に正確なプレビューで見た目を確認することが重要です。
        </p>
        <p className="text-muted leading-relaxed mb-4">
          特に企業アカウントやブログ記事の告知ツイート、商品紹介では、視覚的な第一印象がクリック率（CTR）を大きく左右します。投稿プレビューで細部まで調整することで、エンゲージメント率が2倍以上になるケースも珍しくありません。
        </p>
      </section>

      <section id="how-to-check" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. Twitterプレビュー確認の方法3つ</h2>
        <div className="space-y-4">
          <div className="bg-card-bg border border-card-border rounded-xl p-5">
            <h3 className="font-bold mb-2">方法1. オンラインのTwitterプレビューツールを使う</h3>
            <p className="text-sm text-muted leading-relaxed mb-2">
              もっとも手軽で正確なのがこの方法です。ネットツールボックスの
              <Link href="/tools/twitter-preview" className="text-primary hover:underline">Twitterプレビューツール</Link>
              は、テキスト・画像・ユーザー名を入力するだけで、実際のタイムライン上での見え方を即座に再現します。PC表示とスマホ表示の両方を並べて確認できるため、投稿前チェックに最適です。
            </p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5">
            <h3 className="font-bold mb-2">方法2. Twitter Card Validator（公式）で確認</h3>
            <p className="text-sm text-muted leading-relaxed">
              URLのサムネイル（Twitter Card）表示を確認するには、公式の Card Validator（現在は X Card Editor）が使えます。ただしログインが必要な上、再取得にタイムラグがあり頻繁な確認には不向きです。リンクカードのキャッシュ更新用途に使うのがおすすめです。
            </p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5">
            <h3 className="font-bold mb-2">方法3. 下書き機能でテスト投稿</h3>
            <p className="text-sm text-muted leading-relaxed">
              Twitter(X) の下書き保存や「自分だけに公開」ツイートで見た目を確認する方法もあります。ただし実際の投稿時と挙動が違う場合があり、スクリーンショット作成や比較には向きません。
            </p>
          </div>
        </div>
      </section>

      <section id="tool-usage" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">3. プレビューツールの使い方</h2>
        <ol className="space-y-3 text-sm mb-4">
          <li className="bg-card-bg border border-card-border rounded-lg p-4">
            <strong>STEP 1. 投稿したいテキストを入力</strong>
            <p className="text-muted mt-1">本文を入力すると、リアルタイムに右側のプレビューに反映されます。改行位置や絵文字もそのまま確認できます。</p>
          </li>
          <li className="bg-card-bg border border-card-border rounded-lg p-4">
            <strong>STEP 2. ユーザー名・アイコンを設定</strong>
            <p className="text-muted mt-1">実アカウントに近い表示にしたい場合は表示名とハンドル名を入力。プロフィール画像のアップロードにも対応しています。</p>
          </li>
          <li className="bg-card-bg border border-card-border rounded-lg p-4">
            <strong>STEP 3. 画像を添付（任意）</strong>
            <p className="text-muted mt-1">最大4枚までの画像を追加でき、レイアウト（1枚/2枚/3枚/4枚）の自動調整まで再現されます。</p>
          </li>
          <li className="bg-card-bg border border-card-border rounded-lg p-4">
            <strong>STEP 4. 文字数カウントを確認</strong>
            <p className="text-muted mt-1">140文字を超えるとアラート表示。X Premiumを想定した長文モードにも切り替え可能です。</p>
          </li>
        </ol>
        <p className="text-muted text-sm">
          投稿の文字数を別途しっかり確認したい方は
          <Link href="/tools/sns-char-limit" className="text-primary hover:underline">SNS文字数カウント</Link>
          や
          <Link href="/tools/character-count" className="text-primary hover:underline">文字数カウンター</Link>
          も合わせて使うと便利です。
        </p>
      </section>

      <section id="ogp-basics" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">4. OGPとTwitter Cardの仕組み</h2>
        <p className="text-muted leading-relaxed mb-4">
          Twitter(X) にURLを貼り付けると表示されるサムネイル付きのカードは、「Twitter Card」と呼ばれる仕組みで生成されています。このTwitter Cardは、Webページの &lt;head&gt; 内に書かれた以下のmetaタグを元に描画されます。
        </p>
        <div className="bg-gray-900 text-gray-100 text-xs rounded-lg p-4 mb-4 overflow-x-auto">
          <pre>{`<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="ページタイトル">
<meta name="twitter:description" content="ページの説明文">
<meta name="twitter:image" content="https://example.com/ogp.jpg">`}</pre>
        </div>
        <p className="text-muted leading-relaxed mb-4">
          最近のTwitter(X) は Open Graph Protocol（og:〜）のmetaタグも読み取るため、Facebook用のOGPと共有することも可能です。重要なのは twitter:card で種類を指定することと、画像URLをHTTPSで絶対パス指定することの2点です。
        </p>
      </section>

      <section id="troubleshooting" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">5. カードが表示されない時の対処法</h2>
        <div className="space-y-3">
          {[
            { title: "metaタグを見直す", desc: "twitter:card, twitter:title, twitter:image の3つが最低限必要です。抜けていないかソースで確認しましょう。" },
            { title: "画像URLをHTTPSで指定", desc: "HTTPのままだとカード化されない場合が多いです。CDNを利用してHTTPS配信を徹底してください。" },
            { title: "Card Validator でキャッシュ更新", desc: "古い情報がキャッシュされているケースでは、Card Editor で該当URLを再取得すると最新OGPが読み込まれます。" },
            { title: "画像サイズ・形式を確認", desc: "5MB以下、1200x628px推奨、JPEG/PNG/WebP/GIF対応。アスペクト比が極端にズレていると表示崩れします。" },
            { title: "URLに無視パラメータを追加", desc: "?v=2 のようなダミークエリで別URL扱いにし、再クロールを促す手法も有効です。" },
          ].map((t, i) => (
            <div key={i} className="bg-yellow-50 dark:bg-yellow-900/40 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <h3 className="font-bold text-sm mb-1">{i + 1}. {t.title}</h3>
              <p className="text-sm text-muted">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="related-tools" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">6. 関連する便利ツール</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/tools/twitter-preview" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary">
            <div className="font-bold mb-1">Twitterプレビュー</div>
            <p className="text-xs text-muted">投稿前に実際の見た目をシミュレート</p>
          </Link>
          <Link href="/tools/twitter-card-preview" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary">
            <div className="font-bold mb-1">Twitterカードプレビュー</div>
            <p className="text-xs text-muted">URLのOGP表示を事前チェック</p>
          </Link>
          <Link href="/tools/sns-char-limit" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary">
            <div className="font-bold mb-1">SNS文字数カウント</div>
            <p className="text-xs text-muted">主要SNSの文字数制限を一覧でチェック</p>
          </Link>
          <Link href="/tools/character-count" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary">
            <div className="font-bold mb-1">文字数カウンター</div>
            <p className="text-xs text-muted">文字数・単語数・バイト数をリアルタイム計算</p>
          </Link>
        </div>
      </section>

      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">7. よくある質問</h2>
        <div className="space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. {item.question}</h3>
              <p className="text-sm text-muted leading-relaxed">A. {item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card-bg border border-card-border rounded-xl p-8 text-center">
        <h2 className="text-xl font-bold mb-3">投稿前にプレビューしよう</h2>
        <p className="text-sm text-muted mb-5">
          テキストを入力するだけで、Twitter(X) の実機とほぼ同じ見た目が確認できます。無料・登録不要で今すぐ使えます。
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/tools/twitter-preview" className="inline-block bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90">
            Twitterプレビューを開く
          </Link>
          <Link href="/" className="inline-block border border-card-border px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-card-bg">
            全ツール一覧
          </Link>
        </div>
      </section>
      <GuideRelatedLinks currentSlug="twitter-preview-guide" />
    </div>
  );
}
