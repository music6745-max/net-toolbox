"use client";

import { useMemo } from "react";
import { AdSenseUnit } from "@/components/AdSenseUnit";
import { isIndexableToolSlug } from "@/lib/contentPolicy";
import { onTrackedLinkClick } from "@/lib/tracking";

interface Recommendation {
  title: string;
  description: string;
  linkText: string;
  url: string;
  tag: string;
}

// Affiliate recommendations mapped by tool category or specific tool slug
// URLs are placeholder - replace with actual affiliate links after signup
const RECOMMENDATIONS: Record<string, Recommendation[]> = {
  // Security tools
  "セキュリティ": [
    {
      title: "ExpressVPN - 高速VPNサービス",
      description: "業界最速の安全・匿名VPN。公共WiFiでのセキュリティも万全に。",
      linkText: "詳しく見る",
      url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+3WIBJM+5JSS+5YRHE",
      tag: "VPN",
    },
    {
      title: "NordVPN - VPNサービス",
      description: "オンラインプライバシーを保護。公共WiFiでも安全にインターネットを利用。",
      linkText: "詳しく見る",
      url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+3U4L4I+3YFI+674EQ",
      tag: "セキュリティ",
    },
    {
      title: "MillenVPN - 国産VPNサービス",
      description: "日本企業が運営する安心のVPN。高速通信で動画視聴やセキュリティ対策に。",
      linkText: "詳しく見る",
      url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+41V7ZM+3JTE+HV7V6",
      tag: "VPN",
    },
  ],
  // Design tools
  "デザイン": [
    {
      title: "Canva Pro - デザインツール",
      description: "プロ品質のデザインを簡単作成。テンプレート豊富で初心者にもおすすめ。",
      linkText: "無料で始める",
      url: "https://www.canva.com/ja_jp/",
      tag: "デザイン",
    },
    {
      title: "Adobe Creative Cloud",
      description: "Photoshop・Illustrator等のプロ向けデザインツール。学割あり。",
      linkText: "詳しく見る",
      url: "https://www.adobe.com/jp/creativecloud.html",
      tag: "デザイン",
    },
  ],
  // Dev tools
  "開発ツール": [
    {
      title: "Udemy - プログラミング講座",
      description: "Web開発・アプリ開発を学べるオンライン講座。セール時は1,200円から。",
      linkText: "講座を探す",
      url: "https://www.udemy.com/",
      tag: "学習",
    },
    {
      title: "ConoHa WING - 高性能レンタルサーバー",
      description: "国内最速の高性能レンタルサーバー。初期費用無料、WordPress簡単セットアップ対応。",
      linkText: "詳しく見る",
      url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1FSQEQ+50+5SG2LT",
      tag: "サーバー",
    },
    {
      title: "エックスサーバー - 国内シェアNo.1",
      description: "国内シェアNo.1のレンタルサーバー。高速・安定・大容量でWordPressにも最適。",
      linkText: "詳しく見る",
      url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1B19KI+CO4+6HES1",
      tag: "サーバー",
    },
  ],
  // Daily tools
  "日常ツール": [
    {
      title: "マネーフォワード ME - 家計簿アプリ",
      description: "銀行・クレジットカードと自動連携。家計を見える化して節約。",
      linkText: "無料で始める",
      url: "https://moneyforward.com/me",
      tag: "家計管理",
    },
  ],
  // Text tools
  "テキスト": [
    {
      title: "Notion - オールインワン作業ツール",
      description: "メモ・タスク管理・データベースを一つに。テキスト作業の効率化に。",
      linkText: "無料で始める",
      url: "https://www.notion.so/ja-jp",
      tag: "生産性",
    },
  ],
  // Image/media tools
  "画像・メディア": [
    {
      title: "Canva Pro - 画像編集",
      description: "画像のリサイズ・加工・テンプレートが豊富。SNS画像の作成にも。",
      linkText: "無料で始める",
      url: "https://www.canva.com/ja_jp/",
      tag: "画像編集",
    },
  ],
};

// Tool-specific overrides for higher relevance
const TOOL_SPECIFIC: Record<string, Recommendation[]> = {
  "loan-calculator": [
    {
      title: "住信SBIネット銀行 - 住宅ローン",
      description: "業界最低水準の金利。ネットで完結、来店不要。変動金利0.3%台〜",
      linkText: "金利をチェック",
      url: "https://www.netbk.co.jp/contents/lp/hl/",
      tag: "住宅ローン",
    },
    {
      title: "モゲチェック - 住宅ローン比較",
      description: "複数の銀行の住宅ローンを一括比較。最適なローンが見つかる。",
      linkText: "無料で比較する",
      url: "https://mogecheck.jp/",
      tag: "ローン比較",
    },
  ],
  "bmi-calculator": [
    {
      title: "あすけん - 食事管理アプリ",
      description: "食事を記録するだけでカロリー・栄養バランスを自動分析。ダイエットに。",
      linkText: "無料で始める",
      url: "https://www.asken.jp/",
      tag: "健康管理",
    },
  ],
  "body-fat": [
    {
      title: "タニタ 体組成計",
      description: "体脂肪率・筋肉量・内臓脂肪を正確に測定。スマホ連携で記録管理。",
      linkText: "Amazonで見る",
      url: "https://www.amazon.co.jp/s?k=タニタ+体組成計",
      tag: "健康機器",
    },
  ],
  "calorie-calculator": [
    {
      title: "あすけん - カロリー管理",
      description: "食事写真を撮るだけでカロリーを自動計算。栄養士からのアドバイスも。",
      linkText: "無料で始める",
      url: "https://www.asken.jp/",
      tag: "カロリー管理",
    },
  ],
  "password-generator": [
    {
      title: "NordVPN - セキュリティ強化に",
      description: "パスワード管理機能付きVPN。NordPassでパスワードも安全に管理。",
      linkText: "詳しく見る",
      url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+3U4L4I+3YFI+674EQ",
      tag: "セキュリティ",
    },
  ],
  "color-converter": [
    {
      title: "Figma - UIデザインツール",
      description: "チームでリアルタイム共同編集。Webデザインの業界標準ツール。",
      linkText: "無料で始める",
      url: "https://www.figma.com/ja/",
      tag: "デザイン",
    },
  ],
  "json-formatter": [
    {
      title: "Visual Studio Code",
      description: "最も人気のコードエディタ。拡張機能でJSON整形も簡単。無料。",
      linkText: "ダウンロード",
      url: "https://code.visualstudio.com/",
      tag: "エディタ",
    },
  ],
  "compound-interest": [
    {
      title: "SBI証券 - ネット証券",
      description: "業界最安の手数料。投資信託・NISA・iDeCoで複利運用を始めよう。",
      linkText: "口座開設(無料)",
      url: "https://www.sbisec.co.jp/",
      tag: "資産運用",
    },
  ],
  "savings-calculator": [
    {
      title: "楽天証券 - 積立投資",
      description: "楽天ポイントで投資できる。100円から積立投資が始められる。",
      linkText: "詳しく見る",
      url: "https://www.rakuten-sec.co.jp/",
      tag: "資産運用",
    },
  ],
  "electricity-calculator": [
    {
      title: "エネチェンジ - 電力比較",
      description: "電力会社を無料で比較。切り替えるだけで年間数万円の節約に。",
      linkText: "無料で比較する",
      url: "https://enechange.jp/",
      tag: "節約",
    },
  ],
  "electricity-rate": [
    {
      title: "エネチェンジ - 電気代見直し",
      description: "電力会社の乗り換えで電気代を節約。簡単シミュレーション。",
      linkText: "無料で比較する",
      url: "https://enechange.jp/",
      tag: "節約",
    },
  ],
  "currency-converter": [
    {
      title: "Wise - 海外送金・両替",
      description: "銀行より最大8倍安い手数料で海外送金。リアルタイムの為替レート。",
      linkText: "詳しく見る",
      url: "https://wise.com/jp/",
      tag: "海外送金",
    },
  ],
  "mortgage-calculator": [
    {
      title: "SUUMO - 住宅情報サイト",
      description: "物件検索から住宅ローンシミュレーションまで。マイホーム探しに。",
      linkText: "物件を探す",
      url: "https://suumo.jp/",
      tag: "住宅",
    },
  ],
  "salary-calculator": [
    {
      title: "doda - 転職サイト",
      description: "年収アップの転職なら。非公開求人多数、専任アドバイザーがサポート。",
      linkText: "無料で登録",
      url: "https://doda.jp/",
      tag: "転職",
    },
  ],
  "blood-pressure": [
    {
      title: "タニタ 血圧計",
      description: "正確な測定で毎日の健康管理。スマホ連携で記録を簡単管理。",
      linkText: "Amazonで見る",
      url: "https://www.amazon.co.jp/s?k=タニタ+血圧計",
      tag: "健康機器",
    },
  ],
  "pregnancy-due-date": [
    {
      title: "ゼクシィBaby - 妊娠・出産情報",
      description: "妊娠・出産に役立つ情報が満載。無料の妊婦雑誌もお届け。",
      linkText: "無料登録する",
      url: "https://zexybaby.zexy.net/",
      tag: "マタニティ",
    },
  ],
  "pace-calculator": [
    {
      title: "Garmin - ランニングウォッチ",
      description: "GPS搭載のランニングウォッチで正確なペース・距離を記録。",
      linkText: "Amazonで見る",
      url: "https://www.amazon.co.jp/s?k=Garmin+ランニングウォッチ",
      tag: "ランニング",
    },
  ],
  "shoe-size": [
    {
      title: "Amazon - シューズ",
      description: "サイズがわかったらAmazonで購入。返品無料のTry Before You Buy対応。",
      linkText: "シューズを探す",
      url: "https://www.amazon.co.jp/b?node=2016926051",
      tag: "ショッピング",
    },
  ],
  "unit-price": [
    {
      title: "Amazon - お得な大容量商品",
      description: "まとめ買いで単価を下げてお得に。定期おトク便でさらに割引。",
      linkText: "お得商品を探す",
      url: "https://www.amazon.co.jp/s?k=お得+大容量",
      tag: "節約",
    },
  ],
  "grade-calculator": [
    {
      title: "スタディサプリ - オンライン学習",
      description: "月額2,178円で全教科の授業が見放題。テスト対策・受験対策に。",
      linkText: "無料体験する",
      url: "https://studysapuri.jp/",
      tag: "学習",
    },
  ],
  "jwt-generator": [
    {
      title: "NordVPN - セキュリティ対策",
      description: "開発・テスト環境のセキュリティ強化に。公共WiFiでも安全に作業。",
      linkText: "詳しく見る",
      url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+3U4L4I+3YFI+674EQ",
      tag: "セキュリティ",
    },
  ],
  "ip-subnet": [
    {
      title: "ConoHa VPS - 開発用サーバー",
      description: "初期費用無料、月682円〜。ネットワーク学習やサーバー構築の実験環境に。",
      linkText: "詳しく見る",
      url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1FSQEQ+50+5SG2LT",
      tag: "VPS",
    },
  ],
  "csp-generator": [
    {
      title: "エックスサーバー - セキュアなホスティング",
      description: "WAF・SSL標準搭載の安全なサーバー。CSP設定もカスタマイズ可能。",
      linkText: "詳しく見る",
      url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1B19KI+CO4+6HES1",
      tag: "サーバー",
    },
  ],
  "moving-cost": [
    {
      title: "SUUMO引越し見積もり",
      description: "複数の引越し業者に一括見積もり。最安値がすぐわかる。",
      linkText: "無料見積もり",
      url: "https://hikkoshi.suumo.jp/",
      tag: "引越し",
    },
  ],
  "wedding-cost": [
    {
      title: "ゼクシィ - 結婚準備",
      description: "式場探し・費用相場・見積もり比較。結婚準備のすべてがわかる。",
      linkText: "式場を探す",
      url: "https://zexy.net/",
      tag: "ウェディング",
    },
  ],
  "tax-calculator": [
    {
      title: "freee - クラウド会計ソフト",
      description: "確定申告・経理をクラウドで簡単に。個人事業主・フリーランスに。",
      linkText: "無料で始める",
      url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y",
      tag: "会計",
    },
    {
      title: "弥生会計 - 会計ソフトNo.1",
      description: "売上実績No.1の会計ソフト。確定申告も簡単、白色申告は永年無料。",
      linkText: "無料で始める",
      url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU",
      tag: "会計",
    },
  ],
  // --- 健康系ツール ---
  "calorie-burn": [
    {
      title: "あすけん - 食事・運動管理アプリ",
      description: "消費カロリーと食事を記録して効率的なダイエットを。栄養士のアドバイス付き。",
      linkText: "無料で始める",
      url: "https://www.asken.jp/",
      tag: "健康管理",
    },
  ],
  "ideal-weight": [
    {
      title: "タニタ 体組成計",
      description: "BMI・体脂肪率・筋肉量を正確測定。理想体重の管理に最適。",
      linkText: "Amazonで見る",
      url: "https://www.amazon.co.jp/s?k=タニタ+体組成計",
      tag: "健康機器",
    },
  ],
  "water-intake": [
    {
      title: "Amazon - ウォーターボトル",
      description: "目盛り付きボトルで水分摂取量を管理。1日の水分量を可視化。",
      linkText: "Amazonで見る",
      url: "https://www.amazon.co.jp/s?k=ウォーターボトル+目盛り付き",
      tag: "健康グッズ",
    },
  ],
  "sleep-calculator": [
    {
      title: "Amazon - スマートウォッチ",
      description: "睡眠の質を自動計測。レム睡眠・深い眠りの分析で睡眠改善。",
      linkText: "Amazonで見る",
      url: "https://www.amazon.co.jp/s?k=スマートウォッチ+睡眠計測",
      tag: "睡眠管理",
    },
  ],
  // --- 金融・節約系ツール ---
  "invoice-generator": [
    {
      title: "freee - フリーランスの請求書管理",
      description: "請求書の作成から経理まで一元管理。確定申告もラクラク。",
      linkText: "無料で始める",
      url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y",
      tag: "会計",
    },
    {
      title: "弥生会計 - 請求書・経理管理",
      description: "請求書作成から経理までNo.1ソフトにお任せ。白色申告は永年無料。",
      linkText: "無料で始める",
      url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU",
      tag: "会計",
    },
  ],
  "discount-calculator": [
    {
      title: "Amazon - タイムセール",
      description: "割引率がわかったら早速チェック。毎日開催のタイムセールでお得にお買い物。",
      linkText: "セールを見る",
      url: "https://www.amazon.co.jp/gp/goldbox",
      tag: "セール",
    },
  ],
  "roi-calculator": [
    {
      title: "SBI証券 - ネット証券No.1",
      description: "業界最安の手数料で投資リターンを最大化。NISA・iDeCo対応。",
      linkText: "口座開設(無料)",
      url: "https://www.sbisec.co.jp/",
      tag: "資産運用",
    },
  ],
  "breakeven-calculator": [
    {
      title: "マネーフォワード クラウド会計",
      description: "売上・経費を自動取得して損益をリアルタイム把握。事業分析に。",
      linkText: "詳しく見る",
      url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y",
      tag: "会計",
    },
  ],
  "profit-calculator": [
    {
      title: "freee - クラウド会計",
      description: "利益率の管理から確定申告まで。フリーランス・個人事業主の味方。",
      linkText: "無料で始める",
      url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y",
      tag: "会計",
    },
  ],
  "loan-comparison": [
    {
      title: "モゲチェック - 住宅ローン比較",
      description: "複数銀行のローンを一括比較。金利差で数百万円の違いが出ることも。",
      linkText: "無料で比較する",
      url: "https://mogecheck.jp/",
      tag: "ローン比較",
    },
  ],
  "fuel-calculator": [
    {
      title: "エネチェンジ - エネルギー比較",
      description: "電気・ガスの料金を比較。乗り換えで光熱費を年間数万円節約。",
      linkText: "無料で比較する",
      url: "https://enechange.jp/",
      tag: "節約",
    },
  ],
  "electricity-cost": [
    {
      title: "エネチェンジ - 電力会社比較",
      description: "電力会社を無料で比較。切り替えるだけで年間数万円の節約に。",
      linkText: "無料で比較する",
      url: "https://enechange.jp/",
      tag: "節約",
    },
  ],
  "split-bill": [
    {
      title: "マネーフォワード ME - 家計簿アプリ",
      description: "銀行・カードと連携して支出を自動記録。グループでの出費管理にも。",
      linkText: "無料で始める",
      url: "https://moneyforward.com/me",
      tag: "家計管理",
    },
  ],
  "rent-split": [
    {
      title: "マネーフォワード ME - 家計簿",
      description: "割り勘の支出も自動記録。銀行・カード連携で家計を見える化。",
      linkText: "無料で始める",
      url: "https://moneyforward.com/me",
      tag: "家計管理",
    },
  ],
  // --- 開発ツール（A8.net サーバー系） ---
  "docker-template": [
    {
      title: "ConoHa VPS - Docker対応VPS",
      description: "初期費用無料、SSD搭載の高速VPS。Docker環境の構築に最適。",
      linkText: "詳しく見る",
      url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1FSQEQ+50+5SG2LT",
      tag: "VPS",
    },
  ],
  "gitignore-generator": [
    {
      title: "エックスサーバー - Git対応サーバー",
      description: "SSH接続・Git対応の高性能サーバー。本番環境のデプロイに。",
      linkText: "詳しく見る",
      url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1B19KI+CO4+6HES1",
      tag: "サーバー",
    },
  ],
  "htaccess-generator": [
    {
      title: "エックスサーバー - .htaccess対応",
      description: "htaccessを完全サポート。リダイレクト・キャッシュ設定も自由自在。",
      linkText: "詳しく見る",
      url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1B19KI+CO4+6HES1",
      tag: "サーバー",
    },
  ],
  "robots-txt-generator": [
    {
      title: "ConoHa WING - SEOに強いサーバー",
      description: "表示速度国内最速。SEO対策の土台となる高速サーバー環境。",
      linkText: "詳しく見る",
      url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1FSQEQ+50+5SG2LT",
      tag: "サーバー",
    },
  ],
  "sitemap-generator": [
    {
      title: "ConoHa WING - WordPress最適化",
      description: "WordPress簡単セットアップ。サイトマップ自動生成プラグインもワンクリック。",
      linkText: "詳しく見る",
      url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1FSQEQ+50+5SG2LT",
      tag: "サーバー",
    },
  ],
  "meta-tag-generator": [
    {
      title: "ConoHa WING - SEO対策サーバー",
      description: "メタタグ設定と合わせて、高速サーバーでSEO効果を最大化。",
      linkText: "詳しく見る",
      url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1FSQEQ+50+5SG2LT",
      tag: "サーバー",
    },
  ],
  "readme-generator": [
    {
      title: "SkillHacks - プログラミング学習",
      description: "動画でプログラミングを学べる講座。GitHubの使い方も基礎から。",
      linkText: "詳しく見る",
      url: "https://skillhacks.co.jp/",
      tag: "学習",
    },
  ],
  // --- VPN・セキュリティ系（A8.net高単価） ---
  "hash-generator": [
    {
      title: "NordVPN - 通信の暗号化に",
      description: "AES-256暗号化でオンライン通信を保護。セキュリティ意識の高い方に。",
      linkText: "詳しく見る",
      url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+3U4L4I+3YFI+674EQ",
      tag: "VPN",
    },
  ],
  "text-encrypt": [
    {
      title: "ExpressVPN - プライバシー保護",
      description: "業界最速の暗号化通信。テキストだけでなく通信全体を暗号化。",
      linkText: "詳しく見る",
      url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+3WIBJM+5JSS+5YRHE",
      tag: "VPN",
    },
  ],
  "password-strength": [
    {
      title: "MillenVPN - 安心の国産VPN",
      description: "パスワードと合わせてVPNでセキュリティ強化。日本企業運営で安心。",
      linkText: "詳しく見る",
      url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+41V7ZM+3JTE+HV7V6",
      tag: "VPN",
    },
  ],
  "passphrase-generator": [
    {
      title: "NordVPN + NordPass",
      description: "VPNとパスワード管理をセットで。パスフレーズも安全に保管。",
      linkText: "詳しく見る",
      url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+3U4L4I+3YFI+674EQ",
      tag: "セキュリティ",
    },
  ],
  "ip-address": [
    {
      title: "ExpressVPN - IPアドレスを保護",
      description: "VPN接続でIPアドレスを隠してプライバシーを保護。世界94カ国対応。",
      linkText: "詳しく見る",
      url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+3WIBJM+5JSS+5YRHE",
      tag: "VPN",
    },
  ],
  "ip-info": [
    {
      title: "MillenVPN - IP保護の国産VPN",
      description: "日本のIPアドレスで安全にブラウジング。確定率99%の信頼性。",
      linkText: "詳しく見る",
      url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+41V7ZM+3JTE+HV7V6",
      tag: "VPN",
    },
  ],
  "dns-lookup": [
    {
      title: "NordVPN - DNS漏洩防止",
      description: "DNS漏洩を完全防止。安全なDNS経由でプライバシーを保護。",
      linkText: "詳しく見る",
      url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+3U4L4I+3YFI+674EQ",
      tag: "VPN",
    },
  ],
  "wifi-qr": [
    {
      title: "NordVPN - 公共WiFiのセキュリティ",
      description: "カフェ・空港のフリーWiFiも安全に。VPNで通信を暗号化。",
      linkText: "詳しく見る",
      url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+3U4L4I+3YFI+674EQ",
      tag: "WiFiセキュリティ",
    },
  ],
  "useragent-parser": [
    {
      title: "ExpressVPN - フィンガープリント対策",
      description: "UserAgentからの追跡を防止。VPNでブラウザの匿名性を向上。",
      linkText: "詳しく見る",
      url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+3WIBJM+5JSS+5YRHE",
      tag: "プライバシー",
    },
  ],
  // --- 日常・ライフスタイル系 ---
  "timezone-converter": [
    {
      title: "MillenVPN - 海外出張に",
      description: "海外でも日本のサービスにアクセス可能。出張・旅行の必需品。",
      linkText: "詳しく見る",
      url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+41V7ZM+3JTE+HV7V6",
      tag: "VPN",
    },
  ],
  "world-clock": [
    {
      title: "MillenVPN - 海外接続対応",
      description: "世界中のサーバーに接続可能。海外のサービスも自由にアクセス。",
      linkText: "詳しく見る",
      url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+41V7ZM+3JTE+HV7V6",
      tag: "VPN",
    },
  ],
  "baby-name-generator": [
    {
      title: "ゼクシィBaby - 出産・育児情報",
      description: "名前選びと合わせて妊娠・出産の情報も。無料の妊婦向け雑誌をお届け。",
      linkText: "無料登録する",
      url: "https://zexybaby.zexy.net/",
      tag: "マタニティ",
    },
  ],
  "blood-type-calculator": [
    {
      title: "ゼクシィBaby - 妊娠・出産準備",
      description: "赤ちゃんの血液型が気になったら。出産準備に役立つ情報満載。",
      linkText: "無料登録する",
      url: "https://zexybaby.zexy.net/",
      tag: "マタニティ",
    },
  ],
  "dog-age-calculator": [
    {
      title: "Amazon - ペット用品",
      description: "愛犬の年齢に合ったフード・おもちゃ・ケア用品が見つかる。",
      linkText: "ペット用品を見る",
      url: "https://www.amazon.co.jp/b?node=2127212051",
      tag: "ペット",
    },
  ],
  "horoscope-calculator": [
    {
      title: "Amazon - 占い・スピリチュアル書籍",
      description: "星座占い・運勢の本が充実。自分の星座をもっと深く知ろう。",
      linkText: "Amazonで見る",
      url: "https://www.amazon.co.jp/s?k=星座+占い+本",
      tag: "書籍",
    },
  ],
  "typing-test": [
    {
      title: "SkillHacks - プログラミング学習",
      description: "タイピングの次はプログラミング。動画講座でスキルアップ。",
      linkText: "詳しく見る",
      url: "https://skillhacks.co.jp/",
      tag: "学習",
    },
  ],
  "pomodoro-timer": [
    {
      title: "Amazon - 集中力グッズ",
      description: "ポモドーロ・テクニックと合わせて集中力をブースト。ノイキャンイヤホンも。",
      linkText: "Amazonで見る",
      url: "https://www.amazon.co.jp/s?k=集中力+タイマー",
      tag: "生産性",
    },
  ],
  "cooking-converter": [
    {
      title: "Amazon - キッチンスケール",
      description: "正確な計量で料理の味が安定。0.1g単位で測れるデジタルスケール。",
      linkText: "Amazonで見る",
      url: "https://www.amazon.co.jp/s?k=キッチンスケール+デジタル",
      tag: "キッチン",
    },
  ],
};

export function AffiliateSection({ slug, category }: { slug: string; category: string }) {
  const reviewMode = process.env.NEXT_PUBLIC_ADSENSE_REVIEW_MODE !== "false";
  const recommendations = useMemo(() => {
    if (reviewMode) return [];
    if (!isIndexableToolSlug(slug)) return [];
    // Tool-specific recommendations take priority
    if (TOOL_SPECIFIC[slug]) return TOOL_SPECIFIC[slug];
    // Fall back to category-level recommendations
    return RECOMMENDATIONS[category] || [];
  }, [slug, category, reviewMode]);

  if (recommendations.length === 0) return null;

  return (
    <section className="mt-10">
      <h2 className="text-lg font-bold mb-4">おすすめサービス</h2>
      <div className="space-y-3">
        {recommendations.map((rec, i) => (
          <a
            key={i}
            href={rec.url}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            onClick={onTrackedLinkClick({
              page: slug,
              position: `affiliate_section_${i + 1}`,
              service: rec.title,
              href: rec.url,
            })}
            className="block bg-card-bg border border-card-border rounded-xl p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-sm">{rec.title}</h3>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full whitespace-nowrap">{rec.tag}</span>
                </div>
                <p className="text-sm text-muted leading-relaxed">{rec.description}</p>
              </div>
              <span className="text-sm text-primary whitespace-nowrap font-medium shrink-0">{rec.linkText} →</span>
            </div>
          </a>
        ))}
      </div>
      <p className="text-xs text-muted mt-2 text-right">※ PR・広告を含みます</p>
      {/* Display ad after affiliate recommendations */}
      <AdSenseUnit format="rectangle" className="mt-4" />
    </section>
  );
}
