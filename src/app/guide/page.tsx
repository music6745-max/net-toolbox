import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

const guides = [
  {
    slug: "rental-server-comparison",
    title:
      "【2026年最新】レンタルサーバー比較おすすめ5選｜料金・速度・WordPress対応を徹底解説",
    description:
      "ConoHa WING・エックスサーバー・ロリポップ・mixhost・シンレンタルサーバーの料金・速度・WordPress対応を徹底比較。初心者にも最適なサーバーが見つかります。",
    category: "比較",
    readTime: "15分",
    icon: "🖥️",
  },
  {
    slug: "best-rental-servers",
    title: "【2026年】レンタルサーバーおすすめ比較5選｜初心者向け",
    description:
      "ConoHa WING・エックスサーバー・ロリポップなど初心者向けにおすすめ5社の料金・速度・WordPress対応を徹底比較します。",
    category: "比較",
    readTime: "10分",
    icon: "🖥️",
  },
  {
    slug: "tax-software-comparison",
    title: "【2026年】確定申告ソフト比較｜フリーランス・副業向けおすすめ",
    description:
      "freee・弥生・マネーフォワードの料金プラン・特徴・メリットデメリットを解説。副業やフリーランスの確定申告に最適なソフトが見つかります。",
    category: "副業・税金",
    readTime: "8分",
    icon: "📊",
  },
  {
    slug: "accounting-software-comparison",
    title: "【2026年最新】確定申告ソフト比較おすすめ3選｜freee・弥生・マネーフォワード徹底解説",
    description:
      "freee・弥生会計・マネーフォワード クラウドの料金・機能・使いやすさ・e-Tax対応を徹底比較。個人事業主・フリーランスの確定申告に最適なソフトが見つかります。",
    category: "副業・税金",
    readTime: "15分",
    icon: "🧾",
  },
  {
    slug: "vpn-comparison",
    title: "【2026年最新】VPN比較おすすめ3選｜料金・速度・安全性を徹底解説",
    description:
      "NordVPN・ExpressVPN・MillenVPNの料金・速度・セキュリティを徹底比較。無料VPNとの違いや選び方のポイントも紹介。",
    category: "比較",
    readTime: "12分",
    icon: "🔐",
  },
  {
    slug: "sim-comparison",
    title: "【2026年最新】格安SIM比較おすすめ6選｜料金・速度・通話プランを徹底解説",
    description:
      "楽天モバイル・ahamo・LINEMO・povo・UQモバイル・ワイモバイルの料金・速度・通話プランを徹底比較。乗り換えのポイントも紹介。",
    category: "比較",
    readTime: "15分",
    icon: "📱",
  },
  {
    slug: "best-vpn-services",
    title: "【2026年】VPNおすすめ比較｜安全なインターネット利用に",
    description:
      "NordVPN・ExpressVPN・MillenVPNなどおすすめ5社の料金・速度・セキュリティ機能を比較。公共WiFi保護や海外利用に最適なVPNが見つかります。",
    category: "セキュリティ",
    readTime: "8分",
    icon: "🛡️",
  },
  {
    slug: "side-business-tools",
    title: "副業に必要なWebツール完全ガイド｜無料で始める",
    description:
      "ブログ開設のレンタルサーバー、確定申告ソフト、VPN、画像作成、文章作成まで。副業に必要なWebツールをカテゴリ別にまとめました。",
    category: "副業",
    readTime: "12分",
    icon: "💰",
  },
  {
    slug: "qr-code-howto",
    title: "【完全ガイド】QRコードの作り方と活用術",
    description:
      "QRコードの作成方法から、名刺・URL・WiFi共有・決済など実践的な活用術まで徹底解説。無料ツールを使った簡単な作り方も紹介します。",
    category: "実践ガイド",
    readTime: "5分",
    icon: "📱",
  },
  {
    slug: "password-security",
    title: "安全なパスワードの作り方｜セキュリティ対策ガイド",
    description:
      "パスワードの安全性を高める方法を解説。よくある危険なパスワード、強力なパスワードの条件、パスワードマネージャーの活用法まで。",
    category: "セキュリティ",
    readTime: "6分",
    icon: "🔒",
  },
  {
    slug: "web-tools-for-work",
    title: "仕事効率化に使える無料Webツール15選",
    description:
      "テキスト処理、データ変換、デザイン補助など、業務効率を上げる無料Webツール15個を厳選紹介。登録不要ですぐに使えます。",
    category: "仕事術",
    readTime: "8分",
    icon: "💼",
  },
  {
    slug: "developer-tools-guide",
    title: "Web開発者向け便利ツール活用ガイド",
    description:
      "JSON整形、Base64変換、正規表現テスト、ハッシュ生成など、Web開発で役立つオンラインツールの使い方を詳しく解説。",
    category: "開発",
    readTime: "7分",
    icon: "💻",
  },
  {
    slug: "remote-work-tools",
    title: "リモートワークに必須の無料ツール10選｜在宅勤務を効率化",
    description:
      "ポモドーロタイマー・世界時計・タイムゾーン変換・パスワード生成など、リモートワーク・在宅勤務に役立つ無料ツール10選を厳選紹介。",
    category: "リモートワーク",
    readTime: "7分",
    icon: "🏠",
  },
  {
    slug: "job-site-comparison",
    title: "【2026年最新】転職サイト比較おすすめ5選｜求人数・サポート・年齢層別に徹底解説",
    description:
      "doda・リクルートエージェント・マイナビ転職・ビズリーチ・エン転職の求人数・サポート体制・対象年齢層を徹底比較。20代・30代・40代の年代別おすすめも紹介。",
    category: "比較",
    readTime: "15分",
    icon: "💼",
  },
  {
    slug: "online-english-comparison",
    title:
      "【2026年最新】オンライン英会話比較おすすめ5選｜料金・講師・特徴を徹底解説",
    description:
      "DMM英会話・NativeCamp・QQEnglish・Kimini英会話・AQUESの料金・講師・レッスン内容を徹底比較。初心者からビジネス英語、TOEIC対策まで目的別おすすめも紹介。",
    category: "比較",
    readTime: "15分",
    icon: "🗣️",
  },
  {
    slug: "programming-school-comparison",
    title:
      "【2026年最新】プログラミングスクール比較おすすめ5選｜料金・言語・転職支援を徹底解説",
    description:
      "テックアカデミー・DMM WEBCAMP・RUNTEQ・SkillHacks・Progateの料金・学習言語・転職サポート・受講形式を徹底比較。目的別おすすめや失敗しない選び方も紹介。",
    category: "比較",
    readTime: "15分",
    icon: "💻",
  },
  {
    slug: "insurance-comparison",
    title:
      "【2026年最新】ネット保険比較おすすめ5選｜生命保険・医療保険・がん保険を徹底解説",
    description:
      "ライフネット生命・SBI生命・アクサダイレクト生命・チューリッヒ生命・オリックス生命の保険料・保障内容・申込み方法を徹底比較。",
    category: "比較",
    readTime: "15分",
    icon: "🛡️",
  },
  {
    slug: "streaming-comparison",
    title:
      "【2026年最新】動画配信サービス比較おすすめ6選｜料金・作品数・画質を徹底解説",
    description:
      "Amazon Prime Video・Netflix・U-NEXT・Disney+・Hulu・ABEMAの料金・作品数・画質を徹底比較。あなたに最適な動画配信サービスが見つかります。",
    category: "比較",
    readTime: "15分",
    icon: "🎬",
  },
  {
    slug: "wifi-comparison",
    title:
      "【2026年最新】ポケットWiFi・ホームルーター比較おすすめ5選｜料金・速度・エリアを徹底解説",
    description:
      "WiMAX・楽天モバイル・ドコモhome5G・ソフトバンクAir・モバレコAirの月額料金・通信速度・エリアを徹底比較。",
    category: "比較",
    readTime: "15分",
    icon: "📶",
  },
  {
    slug: "credit-card-comparison",
    title:
      "【2026年最新】クレジットカード比較おすすめ5選｜年会費無料・ポイント還元率を徹底解説",
    description:
      "楽天カード・三井住友カード(NL)・JCBカードW・PayPayカード・dカードの年会費・ポイント還元率・特典を徹底比較。",
    category: "比較",
    readTime: "15分",
    icon: "💳",
  },
  {
    slug: "cloud-storage-comparison",
    title:
      "【2026年最新】クラウドストレージ比較おすすめ5選｜容量・料金・セキュリティを徹底解説",
    description:
      "Google Drive・iCloud+・OneDrive・Dropbox・Amazon Driveの無料容量・有料プラン・共有機能・セキュリティを徹底比較。",
    category: "比較",
    readTime: "15分",
    icon: "☁️",
  },
  {
    slug: "ebook-comparison",
    title:
      "【2026年最新】電子書籍サービス比較おすすめ5選｜品揃え・料金・使いやすさを徹底解説",
    description:
      "Kindle・楽天Kobo・BookLive!・ebookjapan・DMMブックスの品揃え・料金・キャンペーン・対応デバイスを徹底比較。",
    category: "比較",
    readTime: "15分",
    icon: "📚",
  },
  {
    slug: "fitness-app-comparison",
    title:
      "【2026年最新】フィットネスアプリ比較おすすめ5選｜機能・料金・目的別に徹底解説",
    description:
      "Nike Training Club・MyFitnessPal・FiNC・あすけん・Freeleticsの機能・料金・ワークアウト内容を徹底比較。",
    category: "比較",
    readTime: "15分",
    icon: "💪",
  },
  {
    slug: "photo-editing-comparison",
    title:
      "【2026年最新】写真編集ソフト比較おすすめ5選｜機能・料金・初心者向けを徹底解説",
    description:
      "Adobe Lightroom・Canva・GIMP・Pixlr・Fotorの機能・料金・AI機能を徹底比較。初心者からプロまで最適なソフトが見つかります。",
    category: "比較",
    readTime: "15分",
    icon: "📷",
  },
  {
    slug: "video-editing-comparison",
    title:
      "【2026年最新】動画編集ソフト比較おすすめ5選｜機能・料金・初心者〜プロ向けを徹底解説",
    description:
      "Adobe Premiere Pro・DaVinci Resolve・CapCut・Filmora・PowerDirectorの機能・料金を徹底比較。YouTube・SNS動画制作に最適。",
    category: "比較",
    readTime: "15分",
    icon: "🎥",
  },
  {
    slug: "project-management-comparison",
    title:
      "【2026年最新】プロジェクト管理ツール比較おすすめ5選｜機能・料金・チーム規模別に徹底解説",
    description:
      "Notion・Asana・Trello・Backlog・Jiraの機能・料金・使いやすさを徹底比較。個人からチームまで最適なツールが見つかります。",
    category: "比較",
    readTime: "15分",
    icon: "📋",
  },
  {
    slug: "furusato-tax-comparison",
    title:
      "【2026年最新】ふるさと納税サイト比較おすすめ5選｜還元率・返礼品・ポイントを徹底解説",
    description:
      "楽天ふるさと納税・さとふる・ふるなび・ふるさとチョイス・au PAY ふるさと納税の還元率・返礼品数・ポイント還元を徹底比較。タイプ別おすすめも紹介。",
    category: "比較",
    readTime: "15分",
    icon: "🎁",
  },
  {
    slug: "investment-app-comparison",
    title:
      "【2026年最新】投資アプリ比較おすすめ5選｜手数料・取扱商品・初心者向けを徹底解説",
    description:
      "SBI証券・楽天証券・マネックス証券・松井証券・PayPay証券の手数料・取扱商品・ポイント還元を徹底比較。新NISA対応の証券口座選びに最適。",
    category: "比較",
    readTime: "15分",
    icon: "📈",
  },
  {
    slug: "crowdsourcing-comparison",
    title:
      "【2026年最新】クラウドソーシング比較おすすめ5選｜手数料・案件数・初心者向けを徹底解説",
    description:
      "クラウドワークス・ランサーズ・ココナラ・シュフティ・Bizseekの手数料・案件数・特徴を徹底比較。在宅副業におすすめのサイトが見つかります。",
    category: "比較",
    readTime: "15分",
    icon: "💻",
  },
  {
    slug: "water-server-comparison",
    title:
      "【2026年最新】ウォーターサーバー比較おすすめ5選｜料金・水質・サイズを徹底解説",
    description:
      "プレミアムウォーター・コスモウォーター・フレシャス・アクアクララ・クリクラの料金・水質・解約金・サイズを徹底比較。",
    category: "比較",
    readTime: "15分",
    icon: "💧",
  },
  {
    slug: "food-delivery-comparison",
    title:
      "【2026年最新】食材宅配サービス比較おすすめ5選｜料金・品質・配送エリアを徹底解説",
    description:
      "Oisix・らでぃっしゅぼーや・パルシステム・コープデリ・ヨシケイの料金・品質・ミールキット・配送エリアを徹底比較。",
    category: "比較",
    readTime: "15分",
    icon: "🥬",
  },
  {
    slug: "note-taking-app-comparison",
    title:
      "【2026年最新】メモ・ノートアプリ比較おすすめ5選｜機能・料金・同期・整理術を徹底解説",
    description:
      "Notion・Obsidian・Evernote・Apple Notes・Google Keepの機能・料金・同期を徹底比較。あなたに最適なアプリが見つかります。",
    category: "比較",
    readTime: "15分",
    icon: "📝",
  },
  {
    slug: "hikari-fiber-comparison",
    title:
      "【2026年最新】光回線比較おすすめ5選｜料金・速度・キャンペーンを徹底解説",
    description:
      "NURO光・auひかり・ドコモ光・ソフトバンク光・楽天ひかりの料金・速度・キャンペーン・セット割を徹底比較。",
    category: "比較",
    readTime: "15分",
    icon: "🌐",
  },
  {
    slug: "matching-app-comparison",
    title:
      "【2026年最新】マッチングアプリ比較おすすめ5選｜料金・会員数・目的別を徹底解説",
    description:
      "Pairs・with・Omiai・タップル・ゼクシィ縁結びの料金・会員数・年齢層を徹底比較。目的別おすすめも紹介。",
    category: "比較",
    readTime: "15分",
    icon: "💕",
  },
  {
    slug: "hair-removal-comparison",
    title:
      "【2026年最新】脱毛サロン・医療脱毛比較おすすめ5選｜料金・効果・痛みを徹底解説",
    description:
      "ミュゼ・銀座カラー・ストラッシュ・リゼクリニック・湘南美容クリニックの料金・効果・痛み・店舗数を徹底比較。",
    category: "比較",
    readTime: "15分",
    icon: "✨",
  },
  {
    slug: "moving-company-comparison",
    title:
      "【2026年最新】引越し業者比較おすすめ5選｜料金・サービス・一括見積もりを徹底解説",
    description:
      "サカイ・アート・アリさんマーク・日本通運・ヤマトホームコンビニエンスの料金とサービスを徹底比較。",
    category: "比較",
    readTime: "15分",
    icon: "📦",
  },
  {
    slug: "car-purchase-comparison",
    title:
      "【2026年最新】車買取サービス比較おすすめ5選｜高額査定・一括査定・特徴を徹底解説",
    description:
      "カーセンサー・ガリバー・ビッグモーター・アップル・カーネクストの査定額と特徴を徹底比較。高額売却のコツも解説。",
    category: "比較",
    readTime: "15分",
    icon: "🚗",
  },
  {
    slug: "electric-company-comparison",
    title:
      "【2026年最新】電力会社比較おすすめ5選｜料金・プラン・切り替え方法を徹底解説",
    description:
      "Looopでんき・ENEOSでんき・楽天でんき・auでんき・TERASELでんきの料金・特典・切り替え方法を徹底比較。電気代節約に役立ちます。",
    category: "比較",
    readTime: "15分",
    icon: "⚡",
  },
  {
    slug: "online-broker-comparison",
    title:
      "【2026年最新】ネット証券比較おすすめ5選｜手数料・NISA・取扱銘柄を徹底解説",
    description:
      "SBI証券・楽天証券・マネックス証券・松井証券・auカブコム証券の手数料・NISA対応・取扱銘柄を徹底比較。投資初心者にも最適。",
    category: "比較",
    readTime: "15分",
    icon: "📈",
  },
  {
    slug: "fx-account-comparison",
    title:
      "【2026年最新】FX口座比較おすすめ5選｜スプレッド・スワップ・ツールを徹底解説",
    description:
      "GMOクリック証券・DMM FX・外為どっとコム・みんなのFX・SBI FXトレードのスプレッド・スワップ・ツールを徹底比較。",
    category: "比較",
    readTime: "15分",
    icon: "💹",
  },
  {
    slug: "pet-insurance-comparison",
    title:
      "【2026年最新】ペット保険比較おすすめ5選｜補償内容・保険料・選び方を徹底解説",
    description:
      "アニコム・アイペット・PS保険・楽天ペット保険・FPC保険の補償内容・保険料・窓口精算対応を徹底比較。",
    category: "比較",
    readTime: "15分",
    icon: "🐕",
  },
  {
    slug: "gas-company-comparison",
    title:
      "【2026年最新】ガス会社比較おすすめ5選｜料金・プラン・切り替え方法を徹底解説",
    description:
      "レモンガス・東京ガス・大阪ガス・東邦ガス・ニチガスの料金・特典・切り替え方法を徹底比較。ガス代節約に役立ちます。",
    category: "比較",
    readTime: "15分",
    icon: "🔥",
  },
  {
    slug: "solar-power-comparison",
    title:
      "【2026年最新】太陽光発電比較おすすめ5選｜価格・メーカー・売電を徹底解説",
    description:
      "タイナビ・ソーラーパートナーズ・グリエネ・ミツモア・エコ発の太陽光発電一括見積もりサービスを徹底比較。",
    category: "比較",
    readTime: "15分",
    icon: "☀️",
  },
  {
    slug: "car-insurance-comparison",
    title:
      "【2026年最新】自動車保険比較おすすめ5選｜保険料・補償・ロードサービスを徹底解説",
    description:
      "ソニー損保・SBI損保・アクサダイレクト・三井ダイレクト・チューリッヒの保険料・補償・ロードサービスを徹底比較。",
    category: "比較",
    readTime: "15分",
    icon: "🚙",
  },
  {
    slug: "crypto-exchange-comparison",
    title:
      "【2026年最新】仮想通貨取引所比較おすすめ5選｜手数料・取扱通貨・セキュリティを徹底解説",
    description:
      "コインチェック・bitFlyer・GMOコイン・bitbank・DMM Bitcoinの手数料・取扱通貨・セキュリティを徹底比較。",
    category: "比較",
    readTime: "15分",
    icon: "₿",
  },
  {
    slug: "personal-gym-comparison",
    title:
      "【2026年最新】パーソナルジム比較おすすめ5選｜料金・効果・特徴を徹底解説",
    description:
      "RIZAP・24/7Workout・BEYOND・チキンジム・ASPIの料金・効果・特徴を徹底比較。本気でボディメイクしたい方に。",
    category: "比較",
    readTime: "15分",
    icon: "💪",
  },
  {
    slug: "smartphone-comparison",
    title:
      "【2026年最新】スマホ機種比較おすすめ5選｜iPhone・Androidを徹底解説",
    description:
      "iPhone 16・Galaxy S24・Pixel 8・Xperia 10 VI・AQUOS sense9を価格・カメラ・バッテリーで徹底比較。ライフスタイル別おすすめも紹介。",
    category: "比較",
    readTime: "12分",
    icon: "📱",
  },
  {
    slug: "electricity-saving-tips",
    title: "【2026年最新】電気代節約完全ガイド｜今日からできる10の方法",
    description:
      "値上がりが続く電気代を月3,000円以上節約する具体策を徹底解説。エアコン・冷蔵庫・待機電力の見直しから電力会社切替まで。",
    category: "実践ガイド",
    readTime: "10分",
    icon: "⚡",
  },
  {
    slug: "online-counseling-comparison",
    title:
      "【2026年最新】オンラインカウンセリング比較おすすめ5選｜料金・特徴を徹底解説",
    description:
      "cotree・Unlace・メザニン・うららか相談室・Awarefyの料金・カウンセラー・対応形式を徹底比較。在宅で相談できるサービスの選び方を解説。",
    category: "比較",
    readTime: "12分",
    icon: "💬",
  },
  {
    slug: "subscription-management",
    title: "【2026年最新】サブスク管理術完全ガイド｜年5万円節約する見直し方法",
    description:
      "増えすぎたサブスクを賢く整理し年5万円以上節約する具体策。家計簿アプリの活用、解約タイミング、固定費見直しのコツまで解説。",
    category: "実践ガイド",
    readTime: "10分",
    icon: "📋",
  },
  {
    slug: "housing-loan-comparison",
    title:
      "【2026年最新】住宅ローン比較おすすめ5選｜金利・手数料・団信を徹底解説",
    description:
      "auじぶん銀行・住信SBI・PayPay銀行・三井住友信託・ARUHIフラット35の金利・手数料・団信を徹底比較。借り換えで総返済額を削減するコツも。",
    category: "比較",
    readTime: "15分",
    icon: "🏠",
  },
  {
    slug: "bicycle-insurance-comparison",
    title:
      "【2026年最新】自転車保険比較おすすめ5選｜義務化対応・保険料・補償内容を徹底解説",
    description:
      "au損保・セブン-イレブン・楽天損保・ZuttoRide・三井住友海上の自転車保険を保険料・補償・示談交渉サービスで徹底比較。義務化エリアと加入のポイントも解説。",
    category: "比較",
    readTime: "15分",
    icon: "🚲",
  },
  {
    slug: "pet-food-comparison",
    title:
      "【2026年最新】プレミアムペットフード比較おすすめ5選｜原材料・価格・安全性を徹底解説",
    description:
      "モグワン・カナガン・ピッコロ・ファインペッツ・ヤラーのプレミアムフードを原材料・価格・安全性で徹底比較。愛犬・愛猫の健康を守る選び方も解説。",
    category: "比較",
    readTime: "15分",
    icon: "🐾",
  },
  {
    slug: "meal-kit-comparison",
    title:
      "【2026年最新】ミールキット比較おすすめ5選｜オイシックス・ヨシケイ・パルシステムを徹底解説",
    description:
      "Oisix・ヨシケイ・パルシステム・らでぃっしゅぼーや・ワタミの宅食ダイレクトを料金・調理時間・品質で徹底比較。共働き家庭の時短調理を支援。",
    category: "比較",
    readTime: "15分",
    icon: "🍱",
  },
  {
    slug: "online-fitness-comparison",
    title:
      "【2026年最新】オンラインフィットネス比較おすすめ5選｜LEAN BODY・SOELU・LIVE FITを徹底解説",
    description:
      "LEAN BODY・SOELU・LIVE FIT・トルチャ・Nintendo Sports Connectのオンラインフィットネスを月額料金・レッスン内容で徹底比較。在宅運動習慣の作り方を解説。",
    category: "比較",
    readTime: "15分",
    icon: "🧘",
  },
  {
    slug: "baby-goods-comparison",
    title:
      "【2026年最新】ベビー用品・おむつ定期便比較おすすめ5選｜Amazon・楽天・コープを徹底解説",
    description:
      "Amazonファミリー・楽天ママ割・コープデリ・パルシステム・西松屋のベビー用品定期便を割引率・対応商品・配送エリアで徹底比較。子育て世帯のおむつ購入を最適化。",
    category: "比較",
    readTime: "15分",
    icon: "🍼",
  },
  {
    slug: "tablet-comparison",
    title: "タブレットおすすめ5選【2026年最新】徹底比較｜選び方も解説",
    description:
      "iPad・Surface・Galaxy Tab・Lenovoの主要5モデルを性能・価格・SIM対応で徹底比較。仕事・学習・動画視聴それぞれの最適解を解説します。",
    category: "比較",
    readTime: "15分",
    icon: "📱",
  },
  {
    slug: "smart-watch-comparison",
    title: "スマートウォッチおすすめ5選【2026年最新】徹底比較｜選び方も解説",
    description:
      "Apple Watch・Garmin・Fitbit・Galaxy Watchの主要5モデルをバッテリー・健康機能・対応OSで徹底比較し、ライフスタイル別の最適解を解説。",
    category: "比較",
    readTime: "15分",
    icon: "⌚",
  },
  {
    slug: "air-purifier-comparison",
    title: "空気清浄機おすすめ5選【2026年最新】徹底比較｜選び方も解説",
    description:
      "シャープ・ダイキン・パナソニック・ダイソン・Levoitの主要5モデルを集塵性能・加湿・電気代で徹底比較し、部屋に合う1台を解説します。",
    category: "比較",
    readTime: "15分",
    icon: "🌬️",
  },
  {
    slug: "cordless-cleaner-comparison",
    title: "コードレス掃除機おすすめ5選【2026年最新】徹底比較｜選び方も解説",
    description:
      "ダイソン・マキタ・シャーク・パナソニック・アイリスオーヤマの主要5モデルを吸引力・重量・バッテリーで徹底比較し、生活スタイル別に最適解を解説。",
    category: "比較",
    readTime: "15分",
    icon: "🧹",
  },
  {
    slug: "rice-cooker-comparison",
    title: "炊飯器おすすめ5選【2026年最新】徹底比較｜選び方も解説",
    description:
      "象印・タイガー・パナソニック・三菱・アイリスオーヤマの主要5モデルを加熱方式・内釜・炊き分け機能で徹底比較し、家族構成別に最適解を解説。",
    category: "比較",
    readTime: "15分",
    icon: "🍚",
  },
  {
    slug: "marriage-agency-comparison",
    title:
      "【2026年最新】結婚相談所比較おすすめ5選｜料金・会員数・成婚率を徹底解説",
    description:
      "IBJメンバーズ・パートナーエージェント・ツヴァイ・ゼクシィ縁結びエージェント・オーネットの料金・会員数・成婚率を徹底比較。",
    category: "比較",
    readTime: "15分",
    icon: "💍",
  },
  {
    slug: "auto-lease-comparison",
    title: "【2026年最新】カーリース比較おすすめ5選｜頭金0円・月額料金・契約期間を徹底解説",
    description: "ニコノリ・KINTO・定額カルモくん・コスモMyカーリース・SOMPOで乗ーるなど主要カーリース5社の月額料金・契約年数・走行距離制限・残価設定を徹底比較。",
    category: "比較",
    readTime: "15分",
    icon: "🚗",
  },
  {
    slug: "mobile-router-comparison",
    title: "【2026年最新】モバイルWi-Fi・ポケットWi-Fi比較おすすめ5選｜料金・速度・データ容量を徹底解説",
    description: "WiMAX・楽天モバイル・どこよりもWiFi・MUGEN WiFi・ZEUS WiFiなど主要モバイルWi-Fi5社を料金・速度・データ容量・縛りで徹底比較。",
    category: "比較",
    readTime: "15分",
    icon: "📡",
  },
  {
    slug: "home-security-comparison",
    title: "【2026年最新】ホームセキュリティ比較おすすめ5選｜SECOM・ALSOK・料金・補償を徹底解説",
    description: "SECOM・ALSOK・関電SOS・CSP・Panasonicなど主要ホームセキュリティ5社の月額料金・初期費用・駆けつけ時間・補償内容を徹底比較。",
    category: "比較",
    readTime: "15分",
    icon: "🔐",
  },
  {
    slug: "funeral-service-comparison",
    title: "【2026年最新】葬儀・お葬式の事前相談比較おすすめ5選｜料金・プラン・口コミを徹底解説",
    description: "小さなお葬式・よりそうお葬式・イオンのお葬式・公益社・お花のはなぞのなど主要葬儀サービス5社のプラン料金・対応エリア・追加費用を徹底比較。",
    category: "比較",
    readTime: "15分",
    icon: "🕊️",
  },
  {
    slug: "tutoring-comparison",
    title: "【2026年最新】オンライン家庭教師・塾比較おすすめ5選｜料金・指導科目・合格実績を徹底解説",
    description: "オンライン家庭教師ピース・家庭教師のトライ・スタディサプリ・東進オンライン学校・進研ゼミなど主要オンライン学習サービス5社を徹底比較。",
    category: "比較",
    readTime: "15分",
    icon: "🎓",
  },
  {
    slug: "uber-eats-delivery-comparison",
    title: "【2026年最新】フードデリバリーアプリ比較おすすめ4選｜Uber Eats・出前館・menu・Wolt",
    description: "Uber Eats・出前館・menu・Woltの配達料・手数料・加盟店数・クーポン・対応エリアを徹底比較。シーン別・お得度別の選び方を解説します。",
    category: "比較",
    readTime: "15分",
    icon: "🍔",
  },
  {
    slug: "golf-school-comparison",
    title: "【2026年最新】ゴルフスクール比較おすすめ5選｜ライザップゴルフ・ゴルフパフォーマンス他",
    description: "ライザップゴルフ・ゴルフパフォーマンス・サンクチュアリゴルフ・チキンゴルフ・ゴルテックを料金・レッスン内容・成果保証で徹底比較。",
    category: "比較",
    readTime: "15分",
    icon: "⛳",
  },
  {
    slug: "beauty-clinic-comparison",
    title: "【2026年最新】美容皮膚科・医療ダイエット比較おすすめ5選｜料金・施術メニューを徹底解説",
    description: "湘南美容クリニック・TCB・品川美容外科・東京美容外科・DIOクリニックの料金・人気施術・医療ダイエットを徹底比較。",
    category: "比較",
    readTime: "15分",
    icon: "💆",
  },
  {
    slug: "lasik-ico-comparison",
    title: "【2026年最新】レーシック・ICL比較おすすめ5選｜料金・術式・保証を徹底解説",
    description: "品川近視クリニック・新宿近視クリニック・神戸神奈川アイクリニック・先進会眼科・錦糸眼科のレーシック・ICL料金・術式・保証を徹底比較。",
    category: "比較",
    readTime: "15分",
    icon: "👁️",
  },
  {
    slug: "wedding-ring-comparison",
    title: "【2026年最新】結婚指輪・婚約指輪ブランド比較おすすめ5選｜価格・デザイン・品質を徹底解説",
    description: "カルティエ・ティファニー・4℃・アイプリモ・ケイウノの結婚指輪・婚約指輪を価格・デザイン・素材・サービスで徹底比較。",
    category: "比較",
    readTime: "15分",
    icon: "💍",
  },
];

const categoryColors: Record<string, string> = {
  実践ガイド: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  セキュリティ: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  仕事術: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  開発: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  比較: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  "副業・税金": "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
  副業: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
  リモートワーク: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
};

export const metadata: Metadata = {
  title: "ガイド・使い方記事一覧",
  description:
    "Webツールの使い方、セキュリティ対策、仕事効率化など、役立つガイド記事をまとめています。初心者から上級者まで幅広く活用できます。",
  alternates: {
    canonical: `${siteConfig.url}/guide`,
  },
};

export default function GuidePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
        ]}
      />

      {/* Breadcrumb */}
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">
          ホーム
        </Link>
        <span className="mx-2">/</span>
        <span>ガイド</span>
      </nav>

      <section className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-3">ガイド・使い方記事</h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          Webツールの活用方法やセキュリティ対策など、実践的なガイド記事をお届けします。
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guide/${guide.slug}`}
            className="block bg-card-bg border border-card-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-200 group"
          >
            <div className="flex items-start gap-4">
              <span className="text-4xl flex-shrink-0">{guide.icon}</span>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[guide.category] || "bg-gray-100 text-gray-700"}`}
                  >
                    {guide.category}
                  </span>
                  <span className="text-xs text-muted">
                    {guide.readTime}で読める
                  </span>
                </div>
                <h2 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors leading-snug">
                  {guide.title}
                </h2>
                <p className="text-sm text-muted leading-relaxed line-clamp-2">
                  {guide.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* About section */}
      <section className="mt-12 bg-card-bg border border-card-border rounded-xl p-8 text-center">
        <h2 className="text-xl font-bold mb-3">ツールを使ってみる</h2>
        <p className="text-sm text-muted mb-4">
          ガイドで紹介しているツールはすべて無料・登録不要で今すぐ使えます。
        </p>
        <Link
          href="/"
          className="inline-block bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
        >
          ツール一覧を見る
        </Link>
      </section>
    </div>
  );
}
