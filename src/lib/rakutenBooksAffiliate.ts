// Existing Moshimo-generated Rakuten Books link already used in this site.
// Keep the generated URL byte-for-byte instead of rewriting its destination.
export const RAKUTEN_BOOKS_AFFILIATE_URL =
  "https://af.moshimo.com/af/c/click?a_id=5465446&p_id=54&pc_id=54&pl_id=616&url=https%3A%2F%2Fbooks.rakuten.co.jp%2F";

export function normalizeIsbn(value: string): string | null {
  const cleaned = value.replace(/[-\s]/g, "");
  return /^\d{10}(?:\d{3})?$/.test(cleaned) ? cleaned : null;
}

export function isAffiliateRevenueEnabled(reviewMode: string | undefined): boolean {
  return reviewMode === "false";
}
