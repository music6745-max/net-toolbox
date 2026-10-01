import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const read = (path) =>
  readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("service page clearly stops new intake and is excluded from search", () => {
  const page = read("src/app/services/customer-harassment-kit/page.tsx");
  assert.match(page, /CUSTOMER_HARASSMENT_EXPERIMENT_ID/);
  assert.match(page, /新規受付停止中/);
  assert.match(page, /再開時期は未定/);
  assert.match(page, /index: false/);
  assert.match(page, /法的助言/);
  assert.match(page, /個人情報/);
  assert.doesNotMatch(page, /mailto:/);
  assert.doesNotMatch(page, /contact@net-toolbox\.jp/);
  assert.doesNotMatch(page, /trackEvent/);
  assert.doesNotMatch(page, /19,800円/);
  assert.doesNotMatch(page, /4営業時間以内/);
});

test("paused CTA exposes no inquiry or tracking action", () => {
  const component = read("src/components/CustomerHarassmentExperiment.tsx");
  assert.match(component, /opp_customer_harassment_kit/);
  assert.match(component, /新規受付停止中/);
  assert.match(component, /個人情報・機密情報を送らないでください/);
  assert.doesNotMatch(component, /mailto:/);
  assert.doesNotMatch(component, /trackEvent/);
  assert.doesNotMatch(component, /href=/);
});

test("paused offer is no longer promoted or included in the sitemap", () => {
  const home = read("src/app/page.tsx");
  const layout = read("src/app/layout.tsx");
  const sitemap = read("src/app/sitemap.ts");
  assert.doesNotMatch(home, /CustomerHarassmentLandingLink/);
  assert.doesNotMatch(layout, /CustomerHarassmentLandingLink/);
  assert.doesNotMatch(sitemap, /services\/customer-harassment-kit/);
  assert.doesNotMatch(home, /\/services\/customer-harassment-kit/);
  assert.doesNotMatch(layout, /\/services\/customer-harassment-kit/);
});

