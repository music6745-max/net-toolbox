"use client";

import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

type BookInfo = {
  title: string;
  authors?: string[];
  publisher?: string;
  publishedDate?: string;
  pageCount?: number;
  description?: string;
  thumbnail?: string;
  infoLink?: string;
};

export default function Page() {
  const [isbn, setIsbn] = useState("");
  const [book, setBook] = useState<BookInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const lookup = async () => {
    const cleaned = isbn.replace(/[-\s]/g, "");
    if (!/^\d{10}(\d{3})?$/.test(cleaned)) {
      setError("ISBNは10桁または13桁の数字で入力してください");
      setBook(null);
      return;
    }
    setError("");
    setLoading(true);
    setBook(null);
    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=isbn:${cleaned}`
      );
      const data = await res.json();
      if (!data.items || data.items.length === 0) {
        setError("該当する書籍が見つかりませんでした");
      } else {
        const v = data.items[0].volumeInfo;
        setBook({
          title: v.title,
          authors: v.authors,
          publisher: v.publisher,
          publishedDate: v.publishedDate,
          pageCount: v.pageCount,
          description: v.description,
          thumbnail: v.imageLinks?.thumbnail?.replace("http://", "https://"),
          infoLink: v.infoLink,
        });
      }
    } catch {
      setError("検索中にエラーが発生しました。時間をおいて再度お試しください。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>ISBN書籍情報検索</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">ISBN書籍情報検索ツール</h1>
      <p className="text-muted mb-8">
        ISBN番号からGoogle Books APIを使って書籍のタイトル・著者・出版社などの情報を検索します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">ISBN（10桁または13桁）</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && lookup()}
              className="flex-1 border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="例: 9784873119045"
            />
            <button
              onClick={lookup}
              disabled={loading}
              className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors disabled:opacity-60"
            >
              {loading ? "検索中..." : "検索"}
            </button>
          </div>
          {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
        </div>

        {book && (
          <div className="bg-background rounded-xl p-5 flex gap-5 flex-col sm:flex-row">
            {book.thumbnail && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={book.thumbnail}
                alt={book.title}
                className="w-32 h-auto rounded shadow-sm self-center sm:self-start"
              />
            )}
            <div className="flex-1 space-y-2 text-sm">
              <h2 className="text-lg font-bold">{book.title}</h2>
              {book.authors && (
                <p><span className="text-muted">著者:</span> {book.authors.join(", ")}</p>
              )}
              {book.publisher && (
                <p><span className="text-muted">出版社:</span> {book.publisher}</p>
              )}
              {book.publishedDate && (
                <p><span className="text-muted">発行日:</span> {book.publishedDate}</p>
              )}
              {book.pageCount && (
                <p><span className="text-muted">ページ数:</span> {book.pageCount}p</p>
              )}
              {book.description && (
                <p className="text-muted leading-relaxed line-clamp-6">{book.description}</p>
              )}
              {book.infoLink && (
                <a
                  href={book.infoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-primary underline text-xs"
                >
                  Google Booksで詳細を見る
                </a>
              )}
            </div>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted space-y-2">
          <p>書籍の裏表紙やカバー裏にあるISBN番号（10桁または13桁）を入力して検索ボタンを押すだけ。</p>
          <p>Google Books APIを利用しているため、日本語書籍・洋書ともに広くヒットします。</p>
        </div>
      </section>

      <AffiliateSection slug="isbn-lookup" category="日常ツール" />
      <RelatedTools currentSlug="isbn-lookup" category="日常ツール" />
    </div>
  );
}
