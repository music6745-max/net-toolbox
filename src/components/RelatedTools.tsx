"use client";

import Link from "next/link";
import { type Tool } from "@/lib/tools";
import { publicTools } from "@/lib/publicCatalog";

const categoryNotes: Record<string, { title: string; points: string[] }> = {
  "開発ツール": {
    title: "開発作業で使うときの確認ポイント",
    points: [
      "多くの変換・整形ツールはブラウザ内で処理します。DNS確認やIP確認のように外部通信が必要な機能は、ページ内の説明も確認してください。",
      "整形・変換・生成結果は、言語仕様や実行環境によって解釈が変わる場合があります。本番投入前にテスト環境やCIで検証してください。",
      "JSON、正規表現、HTTPヘッダーなどは小さな差分が不具合につながるため、変更前後を保存して比較する運用がおすすめです。",
    ],
  },
  "テキスト": {
    title: "テキスト処理で失敗しやすい点",
    points: [
      "全角・半角、改行コード、絵文字、結合文字はツールごとに数え方が変わることがあります。提出前の原稿は最終媒体でも確認してください。",
      "文字数や単語数は目安です。SNS、広告、フォームなど入力先の仕様がある場合は、入力先のカウンターと併用してください。",
      "変換後の文章は、固有名詞や数字が意図せず変わっていないかを目視で確認すると安全です。",
    ],
  },
  "画像・メディア": {
    title: "画像・メディアを扱うときの確認ポイント",
    points: [
      "画像処理はブラウザ内で行います。大きなファイルでは端末性能により処理時間が変わります。",
      "圧縮や変換後は画質、ファイルサイズ、透過、縦横比を確認してから公開してください。",
      "SNSや広告媒体は推奨サイズが更新されることがあります。重要な入稿では媒体側の最新仕様も確認してください。",
    ],
  },
  "デザイン": {
    title: "デザイン調整で見るべき点",
    points: [
      "生成したCSSや色は、ライト/ダークモード、モバイル、ブラウザ差で見え方が変わります。",
      "色やコントラストは見た目だけでなく、読みやすさとアクセシビリティを基準に確認してください。",
      "装飾値はそのまま採用するより、既存デザインシステムの余白・角丸・影に合わせて調整すると破綻しにくくなります。",
    ],
  },
  "セキュリティ": {
    title: "セキュリティ系ツールの注意点",
    points: [
      "パスワードやトークンを扱う場合は、共有端末や録画中の画面で入力しないでください。",
      "強度判定や生成結果は補助情報です。実運用では多要素認証、パスワードマネージャー、権限管理と併用してください。",
      "暗号化・ハッシュ・JWTの結果は用途により安全性が変わります。認証基盤の設計判断には公式仕様や専門家レビューを使ってください。",
    ],
  },
};

const defaultNote = {
  title: "このツールを使う前に",
  points: [
    "入力内容はブラウザ内で処理され、会員登録なしで使えます。",
    "計算や変換結果は作業補助として使い、重要な提出物では元データと照合してください。",
    "似たツールが複数ある場合は、目的に近いものを選び、結果の形式が合うかを確認してください。",
  ],
};

export function RelatedTools({ currentSlug, category }: { currentSlug: string; category: string }) {
  const note = categoryNotes[category] ?? defaultNote;
  const sameCategoryTools = publicTools.filter(
    (t) => t.category === category && t.slug !== currentSlug
  );

  // Primary: 12 related tools (up from 6) for improved internal linking / SEO
  const related = sameCategoryTools.length >= 12
    ? sameCategoryTools.slice(0, 12)
    : [
        ...sameCategoryTools,
        ...publicTools
          .filter((t) => t.category !== category && t.slug !== currentSlug)
          .slice(0, 12 - sameCategoryTools.length),
      ];

  // Secondary: tools grouped by category (for site-wide navigation)
  const byCategory: Record<string, Tool[]> = {};
  publicTools.forEach((t) => {
    if (t.slug === currentSlug) return;
    if (!byCategory[t.category]) byCategory[t.category] = [];
    byCategory[t.category].push(t);
  });

  return (
    <section className="mt-10">
      <div className="bg-card-bg border border-card-border rounded-xl p-5 mb-8">
        <h2 className="text-lg font-bold mb-3">{note.title}</h2>
        <ul className="space-y-2 text-sm text-muted leading-relaxed">
          {note.points.map((point) => (
            <li key={point} className="flex gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2 className="text-lg font-bold mb-4">関連ツール</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {related.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3 hover:border-primary/30 hover:shadow-sm transition-all"
          >
            <span className="text-2xl">{tool.icon}</span>
            <div className="min-w-0">
              <div className="text-sm font-medium truncate">{tool.name}</div>
              <div className="text-xs text-muted truncate">{tool.description}</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-4 text-center">
        <Link
          href={`/category/${encodeURIComponent(category)}`}
          className="text-sm text-primary hover:underline"
        >
          「{category}」のツールをすべて見る →
        </Link>
      </div>

      {/* Additional: Category-based site navigation (all sub-category tools) */}
      <div className="mt-10 pt-6 border-t border-card-border">
        <h3 className="text-base font-bold mb-4">🗂️ カテゴリから他のツールを探す</h3>
        <div className="space-y-4">
          {Object.entries(byCategory)
            .filter(([catKey]) => catKey !== category)
            .slice(0, 5)
            .map(([catKey, catTools]) => (
              <div key={catKey}>
                <h4 className="text-xs font-semibold mb-2 text-muted">{catKey}</h4>
                <div className="flex flex-wrap gap-1.5">
                  {catTools.slice(0, 10).map((t) => (
                    <Link
                      key={t.slug}
                      href={`/tools/${t.slug}`}
                      className="text-xs px-2.5 py-1 rounded-full border border-card-border bg-card-bg hover:border-primary/40 hover:bg-primary/5 transition-all"
                    >
                      {t.icon} {t.name.slice(0, 20)}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
