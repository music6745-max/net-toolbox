import Link from "next/link";

export type MoshimoBookLinkProps = {
  title: string;
  author: string;
  description: string;
  /** 楽天ブックス検索URL（もしもアフィ経由推奨）。未指定時はタイトルで検索URL自動生成。 */
  rakutenSearchUrl?: string;
  /** Amazon検索URL（もしも経由Amazon提携承認後に差し替え）。未指定時はタイトルで検索URL自動生成。 */
  amazonSearchUrl?: string;
  /** カテゴリやおすすめタグ（例: 「入門書」「定番」など） */
  badge?: string;
};

/**
 * 汎用・書籍紹介カードコンポーネント。
 *
 * Amazon提携（もしもアフィリエイト経由）承認後は、環境変数
 * `NEXT_PUBLIC_MOSHIMO_AMAZON_ENABLED=true` を設定することで Amazon ボタンが表示されます。
 * それまでは楽天ブックス検索リンクのみを表示します。
 *
 * props はすべて差し替え可能で、将来的に amazonSearchUrl を
 * もしも経由の短縮 URL（https://hb.afl.rakuten.co.jp/hgc/ 形式 / もしもの ck URL）へ
 * 差し替えるだけでアフィ計測が有効になります。
 */
export function MoshimoBookLink({
  title,
  author,
  description,
  rakutenSearchUrl,
  amazonSearchUrl,
  badge,
}: MoshimoBookLinkProps) {
  const amazonEnabled = process.env.NEXT_PUBLIC_MOSHIMO_AMAZON_ENABLED === "true";

  const rakutenHref =
    rakutenSearchUrl ??
    `https://search.rakuten.co.jp/search/mall/${encodeURIComponent(title)}/`;
  const amazonHref =
    amazonSearchUrl ??
    `https://www.amazon.co.jp/s?k=${encodeURIComponent(title)}`;

  return (
    <div className="bg-card-bg border border-card-border rounded-xl p-5 mb-4">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div>
          <h3 className="font-bold text-base leading-snug mb-1">{title}</h3>
          <p className="text-xs text-muted">著者: {author}</p>
        </div>
        {badge && (
          <span className="shrink-0 text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">
            {badge}
          </span>
        )}
      </div>
      <p className="text-sm text-muted leading-relaxed mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        <Link
          href={rakutenHref}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="text-xs font-bold px-4 py-2 rounded-lg bg-[#bf0000] text-white hover:opacity-90 transition-opacity"
        >
          楽天ブックスで見る
        </Link>
        {amazonEnabled && (
          <Link
            href={amazonHref}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="text-xs font-bold px-4 py-2 rounded-lg bg-[#ff9900] text-slate-900 hover:opacity-90 transition-opacity"
          >
            Amazonで見る
          </Link>
        )}
      </div>
      <p className="text-[10px] text-muted mt-3">
        ※ 書籍リンクはアフィリエイト広告を含みます。価格・在庫は販売店側で変動します。
      </p>
    </div>
  );
}

export default MoshimoBookLink;
