import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { siteConfig } from "@/lib/tools";

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
    google: "-DIu5mdFjxw1ikjtlccXK53hdAfXXT3UzFNb3YU14dc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <header className="bg-white border-b border-card-border sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/" className="text-lg font-bold text-primary">
              {siteConfig.name}
            </Link>
            <nav className="text-sm text-muted">
              無料で使えるWeb便利ツール集
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-white border-t border-card-border mt-12">
          <div className="max-w-5xl mx-auto px-4 py-8 text-sm text-muted">
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <Link href="/privacy" className="hover:text-primary">プライバシーポリシー</Link>
              <Link href="/terms" className="hover:text-primary">利用規約</Link>
              <Link href="/contact" className="hover:text-primary">お問い合わせ</Link>
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
