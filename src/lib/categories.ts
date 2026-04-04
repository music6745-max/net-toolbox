export const categories = [
  {
    slug: "テキスト",
    name: "テキストツール",
    description: "文字数カウント、テキスト変換、差分比較など、テキスト処理に便利なオンラインツール集。",
    icon: "📝",
  },
  {
    slug: "開発ツール",
    name: "開発ツール",
    description: "JSON整形、正規表現テスト、Base64変換など、プログラマー向けの開発支援ツール集。",
    icon: "💻",
  },
  {
    slug: "画像・メディア",
    name: "画像・メディアツール",
    description: "QRコード作成、画像変換、メディアサイズ計算など、画像・メディア関連のオンラインツール集。",
    icon: "🖼️",
  },
  {
    slug: "日常ツール",
    name: "日常ツール",
    description: "年齢計算、BMI計算、単位変換など、毎日の生活で役立つ便利なオンラインツール集。",
    icon: "🏠",
  },
  {
    slug: "デザイン",
    name: "デザインツール",
    description: "カラーコード変換、CSS生成、グラデーション作成など、Webデザインに役立つオンラインツール集。",
    icon: "🎨",
  },
  {
    slug: "セキュリティ",
    name: "セキュリティツール",
    description: "パスワード生成、ハッシュ生成など、セキュリティ関連のオンラインツール集。",
    icon: "🔒",
  },
] as const;

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}
