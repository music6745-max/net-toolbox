/**
 * 🎯 Offer Master — ネットツールボックス のアフィリエイトリンク一元管理
 *
 * money-navi と同じ構造で管理。クロスドメイン集計の際に
 * `offer_id` を揃えておくと、Looker Studio で合算 CVR が出せる。
 *
 * toolbox は「集客の柱」なので自身では高単価オファーが少ない。
 * 主戦略は: toolbox ツール → money-navi の詳細ガイド へ誘導し、
 *           money-navi 側で高単価アフィに転送する（内部リンク経由）。
 */

export type OfferProvider =
  | "a8net"
  | "moshimo"
  | "rakuten"
  | "valuecommerce"
  | "amazon"
  | "direct";

export type OfferStatus = "active" | "direct" | "paused" | "review";

export interface Offer {
  id: string;
  service: string;
  provider: OfferProvider;
  payout_yen: number;
  official_url: string;
  affiliate_url: string;
  status: OfferStatus;
  note?: string;
  category?: string;
}

export const offers: Offer[] = [
  // ============ toolbox 内で直接使う高単価オファー ============
  {
    id: "zeirishi-dotcom",
    service: "税理士ドットコム",
    provider: "a8net",
    payout_yen: 12000,
    official_url: "https://www.zeiri4.com/",
    affiliate_url: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
    status: "active",
    note: "tax-calculator, invoice-calculator 等の税務系ツールから誘導。",
    category: "日常ツール",
  },
  {
    id: "hoken-mammoth",
    service: "保険マンモス",
    provider: "a8net",
    payout_yen: 10000,
    official_url: "https://hoken-mammoth.com/",
    affiliate_url: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
    status: "active",
    note: "FP無料相談。ライフプラン系ツールから。",
    category: "日常ツール",
  },

  // ============ money-navi へのクロスドメインリンク ============
  // これ自体は 0円だが、money-navi 側で高単価オファーに接続される
  {
    id: "toshi-navi-invoice",
    service: "投資ナビJP: インボイス制度完全ガイド",
    provider: "direct",
    payout_yen: 0,
    official_url: "https://toshi-navi.jp/guide/invoice-system-complete-guide",
    affiliate_url: "https://toshi-navi.jp/guide/invoice-system-complete-guide?utm_source=net-toolbox&utm_medium=referral&utm_campaign=tool_cross_link",
    status: "active",
    note: "クロスドメイン送客: 税金ツール→ガイド",
    category: "日常ツール",
  },
  {
    id: "toshi-navi-ideco",
    service: "投資ナビJP: iDeCo金融機関比較",
    provider: "direct",
    payout_yen: 0,
    official_url: "https://toshi-navi.jp/guide/ideco-broker-comparison",
    affiliate_url: "https://toshi-navi.jp/guide/ideco-broker-comparison?utm_source=net-toolbox&utm_medium=referral&utm_campaign=tool_cross_link",
    status: "active",
    category: "日常ツール",
  },
  {
    id: "toshi-navi-nisa",
    service: "投資ナビJP: 新NISA証券会社ランキング",
    provider: "direct",
    payout_yen: 0,
    official_url: "https://toshi-navi.jp/guide/nisa-broker-ranking-2026",
    affiliate_url: "https://toshi-navi.jp/guide/nisa-broker-ranking-2026?utm_source=net-toolbox&utm_medium=referral&utm_campaign=tool_cross_link",
    status: "active",
    category: "日常ツール",
  },

  // ============ カゴヤ・ジャパン (法人向けクラウド/レンタルサーバー) — 2026-04-28 A8新着承認 ============
  {
    id: "kagoya-rental-server",
    service: "KAGOYA（カゴヤ・ジャパン）",
    provider: "a8net",
    payout_yen: 2000,
    official_url: "https://www.kagoya.jp/",
    affiliate_url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1HL182+7YE+674EQ",
    status: "active",
    note: "A8プログラム 04-0205 (insId=s00000001031001)。2026-04-28 mylink取得・active化。法人利用実績多数のクラウド/VPS/レンタルサーバー、1983年設立で約58000アカウント実績。素材ID 041テキスト推奨。toolbox-site rental-server-comparison/best-rental-servers で活用。報酬は要再確認 (推定2000円)。",
    category: "日常ツール",
  },
];

const offerById = new Map<string, Offer>(offers.map((o) => [o.id, o]));

export function getOffer(id: string): Offer | undefined {
  return offerById.get(id);
}

export function getOfferHref(id: string): string | null {
  const o = offerById.get(id);
  return o ? o.affiliate_url : null;
}

export function isMonetized(id: string): boolean {
  const o = offerById.get(id);
  return !!o && o.status === "active";
}
