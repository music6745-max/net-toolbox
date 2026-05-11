import type { NextConfig } from "next";

const retiredGuideRedirects = [
  ["beauty-clinic-ranking-2026", "beauty-clinic-comparison"],
  ["credit-card-ranking-2026", "credit-card-comparison"],
  ["english-school-ranking-2026", "online-english-comparison"],
  ["insurance-ranking-2026", "insurance-comparison"],
  ["job-agent-ranking-2026", "job-site-comparison"],
  ["matching-app-ranking-2026", "matching-app-comparison"],
  ["online-broker-ranking-2026", "online-broker-comparison"],
  ["pet-insurance-ranking-2026", "pet-insurance-comparison"],
  ["programming-school-ranking-2026", "programming-school-comparison"],
  ["rental-server-ranking-2026", "rental-server-comparison"],
  ["vpn-ranking-2026", "vpn-comparison"],
  ["wifi-ranking-2026", "wifi-comparison"],
] as const;

const nextConfig: NextConfig = {
  async redirects() {
    return retiredGuideRedirects.map(([from, to]) => ({
      source: `/guide/${from}`,
      destination: `/guide/${to}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
