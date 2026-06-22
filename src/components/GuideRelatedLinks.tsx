import Link from "next/link";
import { isIndexableGuideSlug } from "@/lib/contentPolicy";

type GuideMeta = { title: string; desc: string };

const guideMeta: Record<string, GuideMeta> = {
  // 通信系
  "sim-comparison": { title: "格安SIMおすすめ比較", desc: "楽天モバイル・ahamo・LINEMO等を料金/速度で比較" },
  "wifi-comparison": { title: "ポケットWiFi/モバイルWiFi比較", desc: "外出先で使えるWiFiを料金・速度で徹底比較" },
  "hikari-fiber-comparison": { title: "光回線おすすめ比較", desc: "戸建・マンション向け光回線を料金で比較" },
  "vpn-comparison": { title: "VPNサービス比較", desc: "セキュリティ強化に最適なVPNを徹底比較" },
  "rental-server-comparison": { title: "レンタルサーバー比較", desc: "ブログ・サイト運営向けサーバーを比較" },
  // 金融系
  "credit-card-comparison": { title: "クレジットカード比較", desc: "還元率・年会費でおすすめカードを比較" },
  "insurance-comparison": { title: "生命保険比較", desc: "掛け捨て・終身など主要保険を徹底比較" },
  "car-insurance-comparison": { title: "自動車保険比較", desc: "ダイレクト型自動車保険の保険料を比較" },
  "pet-insurance-comparison": { title: "ペット保険比較", desc: "犬猫の医療費に備えるペット保険を比較" },
  "cancer-insurance-comparison": { title: "がん保険比較", desc: "治療費に備えるがん保険を徹底比較" },
  "bicycle-insurance-comparison": { title: "自転車保険比較", desc: "義務化対応の自転車保険をおすすめ順で紹介" },
  "housing-loan-comparison": { title: "住宅ローン比較", desc: "金利タイプ別に主要住宅ローンを比較" },
  "fx-account-comparison": { title: "FX口座比較", desc: "スプレッド・スワップで主要FX口座を比較" },
  "crypto-exchange-comparison": { title: "暗号資産取引所比較", desc: "手数料・取扱通貨数で主要取引所を比較" },
  "investment-app-comparison": { title: "投資アプリ比較", desc: "つみたてNISA対応の投資アプリを比較" },
  "online-broker-comparison": { title: "ネット証券比較", desc: "手数料・取扱商品で主要ネット証券を比較" },
  "real-estate-investment-comparison": { title: "不動産投資サービス比較", desc: "ワンルーム・REITなど投資先を比較" },
  "furusato-tax-comparison": { title: "ふるさと納税サイト比較", desc: "返礼品・ポイント還元でサイトを比較" },
  // 仕事・スキル系
  "programming-school-comparison": { title: "プログラミングスクール比較", desc: "受講料・転職保証で主要校を比較" },
  "online-english-comparison": { title: "オンライン英会話比較", desc: "料金・講師でオンライン英会話を比較" },
  "job-site-comparison": { title: "転職サイト比較", desc: "求人数・年収アップ率で転職サイトを比較" },
  "crowdsourcing-comparison": { title: "クラウドソーシング比較", desc: "案件数・手数料で主要サイトを比較" },
  "side-business-tools": { title: "副業に必要なWebツール完全ガイド", desc: "ブログ開設から確定申告まで網羅" },
  "remote-work-tools": { title: "リモートワーク便利ツール", desc: "在宅勤務を効率化するツールを厳選" },
  "web-tools-for-work": { title: "仕事効率化Webツール15選", desc: "業務効率を上げる無料ツールを紹介" },
  "developer-tools-guide": { title: "Web開発者向け便利ツール", desc: "JSON整形・正規表現テスト等を解説" },
  "accounting-software-comparison": { title: "会計ソフト比較", desc: "freee・マネフォ・弥生など主要ソフトを比較" },
  // 生活系
  "water-server-comparison": { title: "ウォーターサーバー比較", desc: "天然水・RO水で主要サーバーを比較" },
  "food-delivery-comparison": { title: "フードデリバリー比較", desc: "Uber Eats・出前館等の手数料を比較" },
  "meal-kit-comparison": { title: "ミールキット比較", desc: "Oisix・ヨシケイ等のミールキットを比較" },
  "electric-company-comparison": { title: "電力会社比較", desc: "電気代を抑える新電力プランを比較" },
  "gas-company-comparison": { title: "ガス会社比較", desc: "都市ガス自由化対応プランを比較" },
  "electricity-saving-tips": { title: "電気代節約術", desc: "家計を助ける節電テクニックを紹介" },
  "solar-power-comparison": { title: "太陽光発電比較", desc: "家庭用太陽光発電サービスを比較" },
  // 趣味・エンタメ
  "streaming-comparison": { title: "動画配信サービス比較", desc: "Netflix・U-NEXT等の月額・作品数を比較" },
  "ebook-comparison": { title: "電子書籍ストア比較", desc: "Kindle・楽天Kobo等を品揃えで比較" },
  "cloud-storage-comparison": { title: "クラウドストレージ比較", desc: "Google Drive・Dropbox等を比較" },
  "photo-editing-comparison": { title: "写真編集ソフト比較", desc: "Lightroom等の写真編集ソフトを比較" },
  "video-editing-comparison": { title: "動画編集ソフト比較", desc: "Premiere Pro等の動画編集ソフトを比較" },
  // 健康・美容
  "hair-removal-comparison": { title: "脱毛サロン・クリニック比較", desc: "医療脱毛・サロン脱毛を徹底比較" },
  "personal-gym-comparison": { title: "パーソナルジム比較", desc: "RIZAP等のパーソナルジムを比較" },
  "fitness-app-comparison": { title: "フィットネスアプリ比較", desc: "宅トレ向けアプリを徹底比較" },
  "online-counseling-comparison": { title: "オンラインカウンセリング比較", desc: "メンタルケアサービスを比較" },
  "online-fitness-comparison": { title: "オンラインフィットネス比較", desc: "オンラインヨガ・トレーニングを比較" },
  "pet-food-comparison": { title: "ペットフード比較", desc: "プレミアムドッグ・キャットフードを比較" },
  // その他
  "note-taking-app-comparison": { title: "ノートアプリ比較", desc: "Notion・Evernote等を徹底比較" },
  "project-management-comparison": { title: "プロジェクト管理ツール比較", desc: "Asana・Trello等を比較" },
  "matching-app-comparison": { title: "マッチングアプリ比較", desc: "Pairs・with等の主要アプリを比較" },
  "marriage-agency-comparison": { title: "結婚相談所比較", desc: "成婚率で主要結婚相談所を比較" },
  "car-purchase-comparison": { title: "車買取・購入サービス比較", desc: "ガリバー・ビッグモーター等を比較" },
  "moving-company-comparison": { title: "引越し業者比較", desc: "サカイ・アート等の引越し料金を比較" },
  "junk-removal-comparison": { title: "不用品回収業者比較", desc: "料金・対応エリアで業者を比較" },
  "travel-booking-comparison": { title: "旅行予約サイト比較", desc: "じゃらん・楽天トラベル等を比較" },
  "smartphone-comparison": { title: "スマートフォン比較", desc: "iPhone・Android主要モデルを比較" },
  "tablet-comparison": { title: "タブレット比較", desc: "iPad・Androidタブレットを徹底比較" },
  "smart-watch-comparison": { title: "スマートウォッチ比較", desc: "Apple Watch・Garmin等を比較" },
  "air-purifier-comparison": { title: "空気清浄機比較", desc: "花粉・ハウスダスト対策モデルを比較" },
  "cordless-cleaner-comparison": { title: "コードレス掃除機比較", desc: "ダイソン・マキタ等の人気モデルを比較" },
  "rice-cooker-comparison": { title: "炊飯器比較", desc: "象印・タイガー等の高級炊飯器を比較" },
  "baby-goods-comparison": { title: "ベビー用品比較", desc: "出産準備に必要なベビー用品を比較" },
};

const groups: Record<string, string[]> = {
  telecom: ["sim-comparison", "wifi-comparison", "hikari-fiber-comparison", "vpn-comparison", "rental-server-comparison"],
  finance: ["credit-card-comparison", "insurance-comparison", "car-insurance-comparison", "pet-insurance-comparison", "cancer-insurance-comparison", "bicycle-insurance-comparison", "housing-loan-comparison", "fx-account-comparison", "crypto-exchange-comparison", "investment-app-comparison", "online-broker-comparison", "real-estate-investment-comparison", "furusato-tax-comparison"],
  work: ["programming-school-comparison", "online-english-comparison", "job-site-comparison", "crowdsourcing-comparison", "side-business-tools", "remote-work-tools", "web-tools-for-work", "developer-tools-guide", "accounting-software-comparison"],
  life: ["water-server-comparison", "food-delivery-comparison", "meal-kit-comparison", "electric-company-comparison", "gas-company-comparison", "hikari-fiber-comparison", "electricity-saving-tips", "solar-power-comparison"],
  ent: ["streaming-comparison", "ebook-comparison", "cloud-storage-comparison", "photo-editing-comparison", "video-editing-comparison"],
  health: ["hair-removal-comparison", "personal-gym-comparison", "fitness-app-comparison", "online-counseling-comparison", "online-fitness-comparison", "pet-food-comparison"],
  other: ["note-taking-app-comparison", "project-management-comparison", "matching-app-comparison", "marriage-agency-comparison", "car-purchase-comparison", "moving-company-comparison", "junk-removal-comparison", "travel-booking-comparison", "smartphone-comparison", "tablet-comparison", "smart-watch-comparison", "air-purifier-comparison", "cordless-cleaner-comparison", "rice-cooker-comparison", "baby-goods-comparison"],
};

function findGroup(slug: string): string[] {
  for (const slugs of Object.values(groups)) {
    if (slugs.includes(slug)) return slugs;
  }
  return groups.other;
}

export function GuideRelatedLinks({ currentSlug }: { currentSlug: string }) {
  const groupSlugs = findGroup(currentSlug);
  const related = groupSlugs
    .filter((s) => s !== currentSlug && guideMeta[s] && isIndexableGuideSlug(s))
    .slice(0, 5);

  if (related.length === 0) return null;

  return (
    <section className="mb-10">
      <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {related.map((slug) => {
          const m = guideMeta[slug];
          return (
            <Link
              key={slug}
              href={`/guide/${slug}`}
              className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200"
            >
              <span className="text-sm font-bold hover:text-primary">{m.title}</span>
              <p className="text-xs text-muted mt-1 line-clamp-2">{m.desc}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
