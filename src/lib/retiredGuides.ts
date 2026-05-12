export const retiredGuideRedirects = {
  "beauty-clinic-ranking-2026": "beauty-clinic-comparison",
  "credit-card-ranking-2026": "credit-card-comparison",
  "english-school-ranking-2026": "online-english-comparison",
  "fuel-economy-guide": "/tools/fuel-calculator",
  "insurance-ranking-2026": "insurance-comparison",
  "job-agent-ranking-2026": "job-site-comparison",
  "matching-app-ranking-2026": "matching-app-comparison",
  "mojibake-fix-guide": "/tools/encoding-detector",
  "online-broker-ranking-2026": "online-broker-comparison",
  "password-security": "/tools/password-strength",
  "pet-insurance-ranking-2026": "pet-insurance-comparison",
  "programming-school-ranking-2026": "programming-school-comparison",
  "qr-code-howto": "/tools/qr-code",
  "rental-server-ranking-2026": "rental-server-comparison",
  "subscription-management": "/tools/subscription-cost-calc",
  "twitter-preview-guide": "/tools/twitter-preview",
  "vpn-ranking-2026": "vpn-comparison",
  "wifi-ranking-2026": "wifi-comparison",
} as const;

const retiredGuideSlugs = new Set<string>(Object.keys(retiredGuideRedirects));

export function isRetiredGuideSlug(slug: string) {
  return retiredGuideSlugs.has(slug);
}

export function getIndexableGuides<T extends { slug: string }>(
  guides: readonly T[]
): T[] {
  return guides.filter((guide) => !isRetiredGuideSlug(guide.slug));
}
