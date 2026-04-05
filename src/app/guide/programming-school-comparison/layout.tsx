import type { Metadata } from "next";
import { siteConfig } from "@/lib/tools";

export const metadata: Metadata = {
  title:
    "【2026年最新】プログラミングスクール比較おすすめ5選｜料金・言語・転職支援を徹底解説",
  description:
    "2026年最新のプログラミングスクールを徹底比較。テックアカデミー・DMM WEBCAMP・RUNTEQ・SkillHacks・Progateの料金・学習言語・転職サポート・受講形式を詳しく解説。目的別おすすめや失敗しない選び方も紹介します。",
  keywords: [
    "プログラミングスクール 比較",
    "プログラミングスクール おすすめ",
    "プログラミング 独学",
    "エンジニア 転職",
    "プログラミングスクール おすすめ 2026",
    "プログラミングスクール 安い",
    "プログラミングスクール 転職",
    "テックアカデミー",
    "DMM WEBCAMP",
    "RUNTEQ",
    "SkillHacks",
    "Progate",
  ],
  alternates: {
    canonical: `${siteConfig.url}/guide/programming-school-comparison`,
  },
  openGraph: {
    title:
      "【2026年最新】プログラミングスクール比較おすすめ5選｜料金・言語・転職支援を徹底解説",
    description:
      "テックアカデミー・DMM WEBCAMP・RUNTEQ・SkillHacks・Progateの料金・転職サポート・受講形式を徹底比較。あなたに最適なスクールが見つかります。",
    url: `${siteConfig.url}/guide/programming-school-comparison`,
    type: "article",
  },
};

export default function ProgrammingSchoolComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
