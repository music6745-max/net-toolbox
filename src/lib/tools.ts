export interface Tool {
  slug: string;
  name: string;
  description: string;
  icon: string;
  category: string;
}

export const tools: Tool[] = [
  {
    slug: "qr-code",
    name: "QRコード作成",
    description: "テキストやURLからQRコードを簡単に作成。PNG画像としてダウンロードできます。",
    icon: "📱",
    category: "画像・メディア",
  },
  {
    slug: "character-count",
    name: "文字数カウント",
    description: "文章の文字数・単語数・行数をリアルタイムでカウント。レポートやSNS投稿に便利。",
    icon: "🔢",
    category: "テキスト",
  },
  {
    slug: "password-generator",
    name: "パスワード生成",
    description: "安全なランダムパスワードを生成。長さや使用文字を自由にカスタマイズ。",
    icon: "🔐",
    category: "セキュリティ",
  },
  {
    slug: "json-formatter",
    name: "JSON整形",
    description: "JSONデータを見やすくフォーマット。構文チェックも同時に行います。",
    icon: "📋",
    category: "開発ツール",
  },
  {
    slug: "color-converter",
    name: "カラーコード変換",
    description: "HEX・RGB・HSLのカラーコードを相互変換。プレビュー付きで色を確認。",
    icon: "🎨",
    category: "デザイン",
  },
  {
    slug: "base64",
    name: "Base64変換",
    description: "テキストをBase64にエンコード・デコード。日本語テキストにも対応。",
    icon: "🔄",
    category: "開発ツール",
  },
  {
    slug: "url-encode",
    name: "URLエンコード/デコード",
    description: "URLの日本語や特殊文字をパーセントエンコーディング形式に変換・復元。",
    icon: "🔗",
    category: "開発ツール",
  },
  {
    slug: "date-calculator",
    name: "日数計算",
    description: "2つの日付間の日数を計算。何日後・何日前の日付も求められます。",
    icon: "📅",
    category: "日常ツール",
  },
  {
    slug: "text-diff",
    name: "テキスト差分比較",
    description: "2つのテキストを比較して差分をハイライト表示。変更箇所を素早く確認。",
    icon: "📝",
    category: "テキスト",
  },
  {
    slug: "hash-generator",
    name: "ハッシュ生成",
    description: "SHA-1/SHA-256/SHA-512のハッシュ値を生成。データ整合性の確認に。",
    icon: "🛡️",
    category: "セキュリティ",
  },
];

export const siteConfig = {
  name: "ネットツールボックス",
  description: "無料で使えるWeb便利ツール集。QRコード作成、文字数カウント、パスワード生成など、日常で使えるツールが揃っています。",
  url: "https://net-toolbox.vercel.app",
};
