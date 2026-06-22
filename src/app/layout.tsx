import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { siteConfig } from "@/lib/tools";
import { publicTools } from "@/lib/publicCatalog";
import { categories } from "@/lib/categories";
import { WebSiteJsonLd } from "@/components/JsonLd";
import { ThemeToggle } from "@/components/ThemeToggle";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - 無料Web便利ツール集`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "文字数カウント・QRコード作成・パスワード生成・JSON整形・画像変換など、仕事と制作に使う無料Webツールを提供。登録不要で使えます。",
  metadataBase: new URL(siteConfig.url),
  keywords: [
    "無料Webツール",
    "オンラインツール",
    "ブラウザツール",
    "文字数カウント",
    "QRコード作成",
    "パスワード生成",
    "JSON整形",
    "画像変換",
    "テキスト変換",
    "開発者ツール",
    "SEOツール",
    "計算ツール",
  ],
  openGraph: {
    title: `${siteConfig.name} - 無料Web便利ツール集`,
    description:
      "文字数カウント・QRコード作成・パスワード生成・JSON整形・画像変換など、仕事と制作に使う無料Webツールを提供。",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - 無料Web便利ツール`,
    description:
      "文字数カウント・QRコード作成・パスワード生成などの無料ツール。登録不要で使えます。",
    creator: "@net_toolbox_jp",
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: ["-DIu5mdFjxw1ikjtlccXK53hdAfXXT3UzFNb3YU14dc", "R_xMFhMulMpq9lvf8ZpC9HYRJvF81Jie03S7l1jyHpY"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`h-full antialiased ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://aml.valuecommerce.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VKLZD0WGP3"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-VKLZD0WGP3');`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark'||t==='light')document.documentElement.setAttribute('data-theme',t)})()`,
          }}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6483317297217533"
          crossOrigin="anonymous"
        />
        <script
          dangerouslySetInnerHTML={{ __html: 'var vc_pid = "892589513";' }}
        />
        <script
          async
          src="//aml.valuecommerce.com/vcdal.js"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <WebSiteJsonLd
          url={siteConfig.url}
          name={siteConfig.name}
          description={siteConfig.description}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteConfig.name,
              url: siteConfig.url,
              logo: `${siteConfig.url}/favicon.ico`,
              sameAs: ["https://x.com/net_toolbox_jp"],
            }),
          }}
        />
        <header className="bg-card-bg border-b border-card-border sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/" className="text-lg font-bold text-primary">
              {siteConfig.name}
            </Link>
            <nav className="flex items-center gap-4 text-sm text-muted">
              <div className="hidden sm:flex items-center gap-4">
                <Link href="/guide" className="hover:text-primary transition-colors font-medium">
                  ガイド
                </Link>
                <Link href="/tools" className="hover:text-primary transition-colors font-medium">
                  ツール一覧
                </Link>
                {categories.slice(0, 4).map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/category/${cat.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {cat.icon} {cat.slug}
                  </Link>
                ))}
              </div>
              <ThemeToggle />
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-card-bg border-t border-card-border mt-12">
          <div className="max-w-5xl mx-auto px-4 py-8 text-sm text-muted">
            <div className="mb-6">
              <h3 className="font-medium text-foreground mb-3 text-center">カテゴリ</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {categories
                  .filter((cat) => publicTools.some((tool) => tool.category === cat.slug))
                  .map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/category/${cat.slug}`}
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
                <Link href="/guide/web-tools-for-work" className="hover:text-primary transition-colors">仕事効率化ツール</Link>
                <Link href="/guide/developer-tools-guide" className="hover:text-primary transition-colors">開発者ツール活用</Link>
                <Link href="/guide/remote-work-tools" className="hover:text-primary transition-colors">リモートワークツール</Link>
                <Link href="/guide/cloud-storage-comparison" className="hover:text-primary transition-colors">クラウドストレージ比較</Link>
                <Link href="/guide/note-taking-app-comparison" className="hover:text-primary transition-colors">ノートアプリ比較</Link>
                <Link href="/guide/project-management-comparison" className="hover:text-primary transition-colors">プロジェクト管理ツール比較</Link>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <Link href="/about" className="hover:text-primary">運営者情報</Link>
              <Link href="/author" className="hover:text-primary">編集方針</Link>
              <Link href="/quality" className="hover:text-primary">品質管理</Link>
              <Link href="/privacy" className="hover:text-primary">プライバシーポリシー</Link>
              <Link href="/terms" className="hover:text-primary">利用規約</Link>
              <Link href="/contact" className="hover:text-primary">お問い合わせ</Link>
            </div>
            <p className="text-center">&copy; 2026 {siteConfig.name}. All rights reserved.</p>
            <p className="mt-1 text-center">
              主要ツールは無料でご利用いただけます。多くの処理はブラウザ内で行い、外部通信が必要な機能はページ内で明示します。
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
