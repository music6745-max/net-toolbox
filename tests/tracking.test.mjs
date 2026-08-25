import assert from "node:assert/strict";
import test from "node:test";

import {
  fallbackOfferIdFromUrl,
  shouldTrackDelegatedAffiliateClick,
  trackedLinkEventForUrl,
} from "../src/lib/tracking.ts";

test("delegated tracking accepts known ASP URLs", () => {
  assert.equal(
    shouldTrackDelegatedAffiliateClick(
      "https://px.a8.net/svt/ejp?a8mat=ABC+DEF",
      false,
    ),
    true,
  );
  assert.equal(
    shouldTrackDelegatedAffiliateClick("https://af.moshimo.com/af/c/click", false),
    true,
  );
});

test("delegated tracking skips explicitly tracked links", () => {
  assert.equal(
    shouldTrackDelegatedAffiliateClick("https://px.a8.net/svt/ejp", true),
    false,
  );
});

test("delegated tracking excludes sister, self, and official external URLs", () => {
  for (const href of [
    "https://toshi-navi.jp/guide/example",
    "https://ai-tools-navi.jp/",
    "https://net-toolbox.jp/tools",
    "https://www.jalan.net/",
  ]) {
    assert.equal(shouldTrackDelegatedAffiliateClick(href, false), false, href);
  }
  assert.equal(trackedLinkEventForUrl("https://toshi-navi.jp/"), "internal_referral_click");
  assert.equal(trackedLinkEventForUrl("https://www.jalan.net/"), "outbound_click");
});

test("A8 fallback offer IDs are stable and do not expose the raw URL", () => {
  assert.equal(
    fallbackOfferIdFromUrl("https://px.a8.net/svt/ejp?a8mat=4B1DXI+1FSQEQ+50+5SG2LT"),
    "a8mat_4b1dxi_1fsqeq_50_5sg2lt",
  );
  assert.equal(
    fallbackOfferIdFromUrl("https://px.a8.net/svt/ejp"),
    "unmapped_a8net",
  );
});
