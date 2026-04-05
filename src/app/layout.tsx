import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { siteConfig } from "@/lib/tools";
import { categories } from "@/lib/categories";
import { WebSiteJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - 無料Web便利ツール集`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: ["-DIu5mdFjxw1ikjtlccXK53hdAfXXT3UzFNb3YU14dc", "R_xMFhMulMpq9lvf8ZpC9HYRJvF81Jie03S7l1jyHpY"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6483317297217533"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <WebSiteJsonLd
          url={siteConfig.url}
          name={siteConfig.name}
          description={siteConfig.description}
        />
        <header className="bg-card-bg border-b border-card-border sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/" className="text-lg font-bold text-primary">
              {siteConfig.name}
            </Link>
            <nav className="hidden sm:flex items-center gap-4 text-sm text-muted">
              <Link href="/guide" className="hover:text-primary transition-colors font-medium">
                ガイド
              </Link>
              {categories.slice(0, 4).map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/category/${encodeURIComponent(cat.slug)}`}
                  className="hover:text-primary transition-colors"
                >
                  {cat.icon} {cat.slug}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-card-bg border-t border-card-border mt-12">
          <div className="max-w-5xl mx-auto px-4 py-8 text-sm text-muted">
            <div className="mb-6">
              <h3 className="font-medium text-foreground mb-3 text-center">カテゴリ</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/category/${encodeURIComponent(cat.slug)}`}
                    className="hover:text-primary transition-colors"
                  >
                    {cat.icon} {cat.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <h3 className="font-medium text-foreground mb-3 text-center">ガイド記事</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/guide" className="hover:text-primary transition-colors">活用ガイド一覧</Link>
                <Link href="/guide/best-rental-servers" className="hover:text-primary transition-colors">レンタルサーバー比較</Link>
                <Link href="/guide/tax-software-comparison" className="hover:text-primary transition-colors">確定申告ソフト比較</Link>
                <Link href="/guide/best-vpn-services" className="hover:text-primary transition-colors">VPN比較</Link>
                <Link href="/guide/side-business-tools" className="hover:text-primary transition-colors">副業ツール</Link>
                <Link href="/guide/qr-code-howto" className="hover:text-primary transition-colors">QRコードの作り方</Link>
                <Link href="/guide/password-security" className="hover:text-primary transition-colors">パスワードセキュリティ</Link>
                <Link href="/guide/web-tools-for-work" className="hover:text-primary transition-colors">仕事効率化ツール</Link>
                <Link href="/guide/developer-tools-guide" className="hover:text-primary transition-colors">開発者ツール活用</Link>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <Link href="/privacy" className="hover:text-primary">プライバシーポリシー</Link>
              <Link href="/terms" className="hover:text-primary">利用規約</Link>
              <Link href="/contact" className="hover:text-primary">お問い合わせ</Link>
            </div>
            <div className="text-center mb-4">
              <span className="text-xs">姉妹サイト: </span>
              <a
                href="https://ai-tools-navi-navy.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:text-primary"
              >
                🤖 AIツールナビ - AIツール比較・おすすめガイド
              </a>
            </div>
            <p className="text-center">&copy; 2026 {siteConfig.name}. All rights reserved.</p>
            <p className="mt-1 text-center">
              すべてのツールは無料でご利用いただけます。データはブラウザ内で処理され、サーバーに送信されません。
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
