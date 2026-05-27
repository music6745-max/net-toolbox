import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { siteConfig } from "@/lib/tools";
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
    default: `${siteConfig.name} - 無料Web便利ツール集｜300以上のオンラインツール`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "文字数カウント・QRコード作成・パスワード生成・JSON整形・画像変換など300以上の無料Webツールを提供。登録不要・ブラウザ完結でデータはサーバーに送信されません。",
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
    title: `${siteConfig.name} - 無料Web便利ツール集｜300以上のオンラインツール`,
    description:
      "文字数カウント・QRコード作成・パスワード生成・JSON整形・画像変換など300以上の無料Webツールを提供。登録不要・ブラウザ完結でデータはサーバーに送信されません。",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - 無料Web便利ツール300+`,
    description:
      "文字数カウント・QRコード作成・パスワード生成など300以上の無料ツール。登録不要・ブラウザ完結。",
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
                {categories.map((cat) => (
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
                <Link href="/guide/rental-server-comparison" className="hover:text-primary transition-colors">レンタルサーバー比較</Link>
                <Link href="/guide/accounting-software-comparison" className="hover:text-primary transition-colors">確定申告ソフト比較</Link>
                <Link href="/guide/vpn-comparison" className="hover:text-primary transition-colors">VPN比較</Link>
                <Link href="/guide/side-business-tools" className="hover:text-primary transition-colors">副業ツール</Link>
                <Link href="/tools/qr-code" className="hover:text-primary transition-colors">QRコード作成</Link>
                <Link href="/tools/password-strength" className="hover:text-primary transition-colors">パスワード強度チェック</Link>
                <Link href="/guide/web-tools-for-work" className="hover:text-primary transition-colors">仕事効率化ツール</Link>
                <Link href="/guide/developer-tools-guide" className="hover:text-primary transition-colors">開発者ツール活用</Link>
                <Link href="/guide/remote-work-tools" className="hover:text-primary transition-colors">リモートワークツール</Link>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <Link href="/about" className="hover:text-primary">運営者情報</Link>
              <Link href="/author" className="hover:text-primary">編集部について</Link>
              <Link href="/privacy" className="hover:text-primary">プライバシーポリシー</Link>
              <Link href="/terms" className="hover:text-primary">利用規約</Link>
              <Link href="/contact" className="hover:text-primary">お問い合わせ</Link>
            </div>
            <div className="text-center mb-4 flex flex-wrap justify-center gap-x-4 gap-y-1">
              <span className="text-xs">姉妹サイト:</span>
              <a
                href="https://ai-tools-navi.jp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:text-primary"
              >
                🤖 AIツールナビ
              </a>
              <a
                href="https://toshi-navi.jp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:text-primary"
              >
                💰 投資ナビJP
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
