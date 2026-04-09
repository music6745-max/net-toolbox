import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";

export const metadata: Metadata = {
  title: "【無料】文字化け変換・復元ツール＆原因と直し方ガイド【2026年最新】",
  description:
    "文字化けの変換・復元がワンクリックで可能。UTF-8・Shift_JIS・EUC-JPの文字コード自動判定、メール/CSV/ZIPの文字化けを無料で修復できるツール＆原因と直し方を徹底解説。",
  alternates: {
    canonical: `${siteConfig.url}/guide/mojibake-fix-guide`,
  },
};

const faqItems = [
  {
    question: "文字化けはなぜ起きるのですか？",
    answer:
      "文字化けは「保存時と表示時の文字コードが違う」ことで発生します。例えばShift_JISで書かれたファイルをUTF-8で開くと、日本語の文字が別のバイト列として解釈され、意味不明な記号や「�」として表示されてしまいます。",
  },
  {
    question: "UTF-8、Shift_JIS、EUC-JPの違いは？",
    answer:
      "UTF-8はWorld Wide Webで最も広く使われている現代標準の文字コードで、世界中の文字を扱えます。Shift_JISは日本のWindows環境やExcelで長く使われてきた文字コード、EUC-JPはUNIXや古いLinuxで使われていた日本語文字コードです。現在はUTF-8への統一が進んでいます。",
  },
  {
    question: "メールの文字化けを直す方法はありますか？",
    answer:
      "メールソフト側のエンコーディング設定を UTF-8 / ISO-2022-JP に切り替えるのが基本です。Gmailなら「原文表示」で確認でき、Outlookでは「メッセージ形式」からエンコーディングを変更できます。ネットツールボックスの文字コード変換ツールでも修復できるケースがあります。",
  },
  {
    question: "文字コードは自動で判別できますか？",
    answer:
      "はい。ネットツールボックスの「文字コード判定（encoding-detector）」ツールを使えば、テキストを貼り付けるだけでUTF-8/Shift_JIS/EUC-JP/ISO-2022-JPなどを自動判別できます。BOMの有無もチェック可能です。",
  },
  {
    question: "ZIPファイルの中身が文字化けします。対処法は？",
    answer:
      "Windows製のZIPはShift_JIS、Mac製はUTF-8でファイル名を保存することが多く、異なるOSで展開すると化けます。7-ZipやThe UnarchiverなどUTF-8対応の展開ツールを使うか、リネームツールで文字コード変換を行うのが一般的な解決策です。",
  },
];

const sections = [
  { id: "what-is-mojibake", title: "文字化けとは" },
  { id: "causes", title: "文字化けが起きる主な原因" },
  { id: "encodings", title: "主要な文字コードと違い" },
  { id: "fix-steps", title: "文字化けを直す4ステップ" },
  { id: "tool-usage", title: "文字コード判定ツールの使い方" },
  { id: "scenarios", title: "シーン別の対処法" },
  { id: "related-tools", title: "関連する便利ツール" },
  { id: "faq", title: "よくある質問" },
];

export default function MojibakeFixGuidePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "文字化け修復完全ガイド", url: `${siteConfig.url}/guide/mojibake-fix-guide` },
        ]}
      />
      <ArticleJsonLd
        headline="文字化け修復完全ガイド｜原因・文字コード判定・直し方"
        description="文字化けの原因と直し方、UTF-8/Shift_JIS/EUC-JPの違い、文字コード自動判定まで徹底解説。"
        url={`${siteConfig.url}/guide/mojibake-fix-guide`}
      />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>文字化け修復完全ガイド</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
            テキスト・文字コード
          </span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          文字化け修復 完全ガイド｜原因・文字コード判定・直し方
        </h1>
        <p className="text-muted leading-relaxed">
          メールを開いたら「縺薙ｓ縺ｫ縺｡縺ｯ」のような意味不明な文字列に…。CSVをExcelで開くと日本語がすべて「??」に…。こうした文字化けトラブルに悩まされた経験は誰にでもあるはずです。本ガイドでは文字化けが起きる本当の原因から、UTF-8・Shift_JIS・EUC-JPなど主要な文字コードの違い、リアルタイムで文字コードを判定するツールの使い方、そしてメール/CSV/ZIPそれぞれの現場で使える修復テクニックまで、徹底的に解説します。
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

      <div className="bg-orange-50 dark:bg-orange-900/40 border border-orange-200 dark:border-orange-800 rounded-lg p-4 mb-8">
        <p className="text-sm font-medium mb-2">今すぐ文字コードを確認したい方へ</p>
        <p className="text-sm text-muted mb-3">
          テキストを貼り付けるだけで文字コードを自動判定。変換や文字コード一覧も無料で使えます。
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/tools/encoding-detector" className="inline-block bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90">
            文字コード判定を開く →
          </Link>
          <Link href="/tools/char-code" className="inline-block border border-orange-300 text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/50">
            文字コード変換 →
          </Link>
        </div>
      </div>

      <section id="what-is-mojibake" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. 文字化けとは</h2>
        <p className="text-muted leading-relaxed mb-4">
          文字化け（mojibake）とは、コンピューター上で文字が正しく表示されず、意味不明な記号・他言語の文字・疑問符「?」・置換文字「�」などになってしまう現象を指します。英語でも「mojibake」として国際的に通じる、日本発のIT用語の一つです。原因のほとんどは「文字コードの不一致」であり、正しい文字コードを指定し直すだけで多くの場合修復できます。
        </p>
        <p className="text-muted leading-relaxed mb-4">
          代表的な文字化けパターンには「縺薙ｓ縺ｫ縺｡縺ｯ（UTF-8をShift_JISで表示）」「繧ｳ繝ｳ繝斐Η繝ｼ繧ｿ（Shift_JISをUTF-8で表示）」「&#12371;&#12435;（HTMLエスケープ未デコード）」などがあります。パターンを見れば原因の見当がつくこともあります。
        </p>
      </section>

      <section id="causes" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. 文字化けが起きる主な原因</h2>
        <div className="space-y-3">
          {[
            { title: "保存時と読込時の文字コードが違う", desc: "最もよくある原因。Shift_JISで保存されたCSVをUTF-8で開く、UTF-8のテキストをShift_JISで解釈する、などで発生します。" },
            { title: "BOMの有無による誤判定", desc: "BOM（Byte Order Mark）はUTF-8の先頭に付く目印。BOMがない/余分にあると自動判定に失敗することがあります。" },
            { title: "メールヘッダの Content-Type ミス", desc: "charset の指定ミスや欠落で受信側が正しくデコードできず文字化けします。" },
            { title: "ZIPファイルのファイル名", desc: "Windows製ZIPがShift_JIS、Mac製がUTF-8と異なり、相互に展開すると化けるケースが多発します。" },
            { title: "HTML/XMLの meta charset 不備", desc: "ページの meta charset がファイル保存時の実際の文字コードと異なると、ブラウザで文字化けして表示されます。" },
            { title: "コピペ時の不可視文字混入", desc: "ゼロ幅スペースや特殊な制御文字がコピペで混入し、想定外の表示崩れを引き起こすこともあります。" },
          ].map((t, i) => (
            <div key={i} className="bg-card-bg border border-card-border rounded-xl p-4">
              <h3 className="font-bold text-sm mb-1">{t.title}</h3>
              <p className="text-sm text-muted">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="encodings" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">3. 主要な文字コードと違い</h2>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-card-border">
                <th className="text-left p-2 font-bold">文字コード</th>
                <th className="text-left p-2 font-bold">特徴</th>
                <th className="text-left p-2 font-bold">主な用途</th>
              </tr>
            </thead>
            <tbody className="text-muted">
              <tr className="border-b border-card-border">
                <td className="p-2 font-bold text-foreground">UTF-8</td>
                <td className="p-2">世界中の文字を表現可能。Webの事実上の標準</td>
                <td className="p-2">Webサイト、API、最新のテキストファイル</td>
              </tr>
              <tr className="border-b border-card-border">
                <td className="p-2 font-bold text-foreground">Shift_JIS</td>
                <td className="p-2">Windows/Excelで長く標準だった日本語コード</td>
                <td className="p-2">古いCSV、Windowsメモ帳、旧来の日本語ソフト</td>
              </tr>
              <tr className="border-b border-card-border">
                <td className="p-2 font-bold text-foreground">EUC-JP</td>
                <td className="p-2">UNIX系で使われた日本語文字コード</td>
                <td className="p-2">古いLinux/UNIXサーバ、レガシーシステム</td>
              </tr>
              <tr className="border-b border-card-border">
                <td className="p-2 font-bold text-foreground">ISO-2022-JP</td>
                <td className="p-2">メールで使われるエスケープシーケンス方式</td>
                <td className="p-2">日本語メール（JIS）</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-foreground">UTF-16</td>
                <td className="p-2">固定2バイトまたは4バイト</td>
                <td className="p-2">Windows内部処理、一部のXML</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted leading-relaxed">
          現在新しくファイルを作る場合はUTF-8が推奨です。ただし業務でExcelCSVを扱う場合はShift_JIS（CP932）を要求されることが今もあります。用途に応じて適切な文字コードを選ぶことが大切です。
        </p>
      </section>

      <section id="fix-steps" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">4. 文字化けを直す4ステップ</h2>
        <ol className="space-y-3 text-sm">
          <li className="bg-card-bg border border-card-border rounded-lg p-4">
            <strong>STEP 1. 元のデータの文字コードを特定する</strong>
            <p className="text-muted mt-1">
              <Link href="/tools/encoding-detector" className="text-primary hover:underline">文字コード判定ツール</Link>
              にテキストを貼り付ければ、リアルタイムで元の文字コードが判定されます。
            </p>
          </li>
          <li className="bg-card-bg border border-card-border rounded-lg p-4">
            <strong>STEP 2. 表示側の文字コード設定を合わせる</strong>
            <p className="text-muted mt-1">ブラウザ/エディタ/メールソフトの文字コード設定を、元の文字コードに合わせて変更します。VS Codeなら「Reopen with Encoding」機能が便利です。</p>
          </li>
          <li className="bg-card-bg border border-card-border rounded-lg p-4">
            <strong>STEP 3. 必要ならUTF-8に変換保存する</strong>
            <p className="text-muted mt-1">今後のトラブル予防のため、Shift_JIS等のファイルはUTF-8で保存し直しておくのがおすすめです。</p>
          </li>
          <li className="bg-card-bg border border-card-border rounded-lg p-4">
            <strong>STEP 4. meta charset / HTTPヘッダも合わせる</strong>
            <p className="text-muted mt-1">Webサイトの場合、&lt;meta charset=&quot;UTF-8&quot;&gt; とサーバの Content-Type ヘッダを一致させておくことで、ブラウザ側で再発しません。</p>
          </li>
        </ol>
      </section>

      <section id="tool-usage" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">5. 文字コード判定ツールの使い方</h2>
        <p className="text-muted leading-relaxed mb-4">
          ネットツールボックスの
          <Link href="/tools/encoding-detector" className="text-primary hover:underline">文字コード判定ツール</Link>
          は、テキストを貼り付けるだけでリアルタイムに文字コードを判定します。ブラウザ上で動作するため、機密情報を含む文字列でも外部サーバに送信されることはありません。UTF-8（BOMあり/なし）、Shift_JIS、EUC-JP、ISO-2022-JPなど主要な日本語文字コードすべてに対応しています。
        </p>
        <p className="text-muted leading-relaxed mb-4">
          個々の文字のコードポイントを調べたい場合は
          <Link href="/tools/char-code" className="text-primary hover:underline">文字コード変換ツール</Link>
          を使いましょう。1文字ずつUnicodeやUTF-8バイト列、HTMLエンティティ等を確認できます。
        </p>
      </section>

      <section id="scenarios" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">6. シーン別の対処法</h2>
        <div className="space-y-4">
          <div className="bg-green-50 dark:bg-green-900/40 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <h3 className="font-bold text-sm mb-2">ExcelでCSVが文字化け</h3>
            <p className="text-sm text-muted">ExcelはデフォルトでShift_JISを想定します。UTF-8のCSVを直接開くと化けるため、「データ→テキストから」でインポートウィザードを使うか、UTF-8 BOM付きで保存すると自動認識されます。</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/40 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <h3 className="font-bold text-sm mb-2">メール本文が文字化け</h3>
            <p className="text-sm text-muted">受信メールソフトのエンコーディング設定を変更するか、原文表示で確認します。送信側でISO-2022-JPやUTF-8の charset 指定を忘れているケースが多くあります。</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/40 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <h3 className="font-bold text-sm mb-2">ZIPファイル名が文字化け</h3>
            <p className="text-sm text-muted">7-Zip、Keka、The Unarchiverなど文字コードを指定して展開できるツールを使うことでほぼ解決できます。</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/40 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <h3 className="font-bold text-sm mb-2">ブラウザで文字化け</h3>
            <p className="text-sm text-muted">ChromeやEdgeでは自動判定が強力ですが、稀に誤判定します。ページのHTMLソースを見て meta charset がファイル実態と一致しているか確認しましょう。</p>
          </div>
        </div>
      </section>

      <section id="related-tools" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">7. 関連する便利ツール</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/tools/encoding-detector" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary">
            <div className="font-bold mb-1">文字コード判定</div>
            <p className="text-xs text-muted">テキストからUTF-8/Shift_JIS/EUC-JPを自動判定</p>
          </Link>
          <Link href="/tools/char-code" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary">
            <div className="font-bold mb-1">文字コード変換</div>
            <p className="text-xs text-muted">Unicode・UTF-8バイト・HTMLエンティティの相互変換</p>
          </Link>
          <Link href="/tools/character-count" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary">
            <div className="font-bold mb-1">文字数カウント</div>
            <p className="text-xs text-muted">文字数・バイト数をリアルタイム表示</p>
          </Link>
          <Link href="/tools/char-diff" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary">
            <div className="font-bold mb-1">テキスト差分比較</div>
            <p className="text-xs text-muted">修復前後のテキスト差分を視覚的に確認</p>
          </Link>
        </div>
      </section>

      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">8. よくある質問</h2>
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
        <h2 className="text-xl font-bold mb-3">文字化けを今すぐ直そう</h2>
        <p className="text-sm text-muted mb-5">
          文字コードを貼り付けて判定、そのまま変換まで。無料・登録不要・ブラウザ内処理で安心です。
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/tools/encoding-detector" className="inline-block bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90">
            文字コード判定を開く
          </Link>
          <Link href="/tools/char-code" className="inline-block border border-card-border px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-card-bg">
            文字コード変換
          </Link>
        </div>
      </section>
      <GuideRelatedLinks currentSlug="mojibake-fix-guide" />
    </div>
  );
}
