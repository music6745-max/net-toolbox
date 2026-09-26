import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("DNS offer is result-only, reversible, and keeps the generated A8 URL exact", () => {
  const page = read("src/app/tools/dns-lookup/page.tsx");
  const generic = read("src/components/AffiliateSection.tsx");
  assert.match(page, /records\.length > 0/);
  assert.match(page, /NEXT_PUBLIC_DNS_PRIVACY_EXPERIMENT !== "false"/);
  assert.match(page, /4B1DXI\+3U4L4I\+3YFI\+674EQ/);
  assert.match(page, /exp\.tb_dns_vpn\.v1\.result/);
  const monetizationSet = generic.match(/const MONETIZATION_TOOL_SLUGS[\s\S]*?\]\);/)?.[0] ?? "";
  assert.doesNotMatch(monetizationSet, /dns-lookup/);
});

test("experiment card emits one canonical click plus experiment diagnostics", () => {
  const card = read("src/components/ExperimentOfferCard.tsx");
  assert.equal((card.match(/trackLinkClick\(/g) ?? []).length, 1);
  assert.match(card, /trackEvent\("experiment_eligible"/);
  assert.match(card, /trackEvent\("offer_view"/);
  assert.match(card, /trackEvent\("experiment_view"/);
  assert.match(card, /trackEvent\("experiment_click"/);
  assert.match(card, /intersectionRatio >= 0\.25/);
  assert.match(card, /}, 1000\);/);
  assert.match(card, /data-analytics-tracked="true"/);
});

test("landing CTAs use distinct offers and experiment IDs", () => {
  const hosting = read("src/app/guide/rental-server-comparison/page.tsx");
  const learning = read("src/app/guide/programming-school-comparison/page.tsx");
  assert.match(hosting, /ai_business_hosting_20260926/);
  assert.match(hosting, /4B1DXI\+1FSQEQ\+50\+5SG2LT/);
  assert.match(learning, /ai_pricing_skillhacks_20260926/);
  assert.match(learning, /4B1DXI\+4DRW36\+4K3S\+5YJRM/);
  assert.doesNotMatch(learning, /serviceName="Winスクール"/);
  assert.doesNotMatch(learning, /badge="業界最安値"/);
});

test("ISBN keeps the exact Moshimo URL while adding fallback experiment positions", () => {
  const page = read("src/app/tools/isbn-lookup/page.tsx");
  const offer = read("src/lib/rakutenBooksAffiliate.ts");
  assert.match(page, /exp\.tb_isbn_rkt\.v1\.result/);
  assert.match(page, /trackEvent\("experiment_click"/);
  assert.match(offer, /af\.moshimo\.com\/af\/c\/click\?a_id=5465446&p_id=54&pc_id=54&pl_id=616/);
});
