import assert from "node:assert/strict";
import test from "node:test";

import {
  isAffiliateRevenueEnabled,
  normalizeIsbn,
  RAKUTEN_BOOKS_AFFILIATE_URL,
} from "../src/lib/rakutenBooksAffiliate.ts";

test("normalizes valid ISBN input", () => {
  assert.equal(normalizeIsbn("978-4-87311-904-5"), "9784873119045");
  assert.equal(normalizeIsbn(" 4873119047 "), "4873119047");
  assert.equal(normalizeIsbn("978487311904"), null);
});

test("keeps the existing Moshimo-generated Rakuten Books URL unchanged", () => {
  assert.equal(
    RAKUTEN_BOOKS_AFFILIATE_URL,
    "https://af.moshimo.com/af/c/click?a_id=5465446&p_id=54&pc_id=54&pl_id=616&url=https%3A%2F%2Fbooks.rakuten.co.jp%2F",
  );

  const affiliate = new URL(RAKUTEN_BOOKS_AFFILIATE_URL);
  assert.equal(affiliate.origin, "https://af.moshimo.com");
  assert.equal(affiliate.pathname, "/af/c/click");
  assert.equal(affiliate.searchParams.get("a_id"), "5465446");
  assert.equal(affiliate.searchParams.get("p_id"), "54");
  assert.equal(affiliate.searchParams.get("url"), "https://books.rakuten.co.jp/");
});

test("respects the existing affiliate revenue review-mode switch", () => {
  assert.equal(isAffiliateRevenueEnabled("false"), true);
  assert.equal(isAffiliateRevenueEnabled("true"), false);
  assert.equal(isAffiliateRevenueEnabled(undefined), false);
});
