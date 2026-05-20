import type { NextConfig } from "next";

const retiredGuideRedirects = [
  ["best-rental-servers", "/guide/rental-server-comparison"],
  ["best-vpn-services", "/guide/vpn-comparison"],
  ["beauty-clinic-ranking-2026", "/guide/beauty-clinic-comparison"],
  ["car-loan-rate-comparison", "/guide/car-loan-comparison"],
  ["credit-card-ranking-2026", "/guide/credit-card-comparison"],
  ["english-school-ranking-2026", "/guide/online-english-comparison"],
  ["fuel-economy-guide", "/tools/fuel-calculator"],
  ["insurance-ranking-2026", "/guide/insurance-comparison"],
  ["job-agent-ranking-2026", "/guide/job-site-comparison"],
  ["matching-app-ranking-2026", "/guide/matching-app-comparison"],
  ["mojibake-fix-guide", "/tools/encoding-detector"],
  ["online-broker-ranking-2026", "/guide/online-broker-comparison"],
  ["password-security", "/tools/password-strength"],
  ["pet-insurance-ranking-2026", "/guide/pet-insurance-comparison"],
  ["programming-school-ranking-2026", "/guide/programming-school-comparison"],
  ["qr-code-howto", "/tools/qr-code"],
  ["rental-server-ranking-2026", "/guide/rental-server-comparison"],
  ["subscription-management", "/tools/subscription-cost-calc"],
  ["tax-software-comparison", "/guide/accounting-software-comparison"],
  ["twitter-preview-guide", "/tools/twitter-preview"],
  ["vpn-ranking-2026", "/guide/vpn-comparison"],
  ["wifi-ranking-2026", "/guide/wifi-comparison"],
] as const;

const nextConfig: NextConfig = {
  async redirects() {
    return retiredGuideRedirects.map(([from, destination]) => ({
      source: `/guide/${from}`,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
