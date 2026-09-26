import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const read = (path) =>
  readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("paid pilot states buyer, price, deliverables, source, and boundary", () => {
  const page = read("src/app/services/customer-harassment-kit/page.tsx");
  assert.match(page, /CUSTOMER_HARASSMENT_EXPERIMENT_ID/);
  assert.match(page, /19,800円/);
  assert.match(page, /従業員1〜50名/);
  assert.match(page, /納品するもの/);
  assert.match(page, /2026年10月1日/);
  assert.match(page, /https:\/\/www\.mhlw\.go\.jp\//);
  assert.match(page, /法的助言/);
  assert.match(page, /適法性の保証/);
  assert.match(page, /個人情報/);
  assert.match(page, /4営業時間以内/);
});

test("inquiry CTA is attributable without editing shared tracking", () => {
  const component = read("src/components/CustomerHarassmentExperiment.tsx");
  assert.match(component, /opp_customer_harassment_kit/);
  assert.match(component, /contact@net-toolbox\.jp/);
  assert.match(component, /trackEvent\("experiment_eligible"/);
  assert.match(component, /if \(!eligibleRecorded\)/);
  assert.match(component, /trackEvent\("offer_view"/);
  assert.match(component, /trackEvent\("experiment_view"/);
  assert.match(component, /trackEvent\("experiment_click"/);
  assert.match(component, /trackEvent\("service_inquiry_start"/);
  assert.match(component, /data-analytics-tracked="true"/);
  assert.match(component, /個人情報を記載しないでください/);
});

test("offer route is discoverable from home, footer, and sitemap", () => {
  const home = read("src/app/page.tsx");
  const layout = read("src/app/layout.tsx");
  const sitemap = read("src/app/sitemap.ts");
  assert.match(home, /CustomerHarassmentLandingLink/);
  assert.match(layout, /CustomerHarassmentLandingLink/);
  assert.match(sitemap, /services\/customer-harassment-kit/);
});

