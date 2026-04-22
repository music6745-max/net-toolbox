import { notFound, redirect } from "next/navigation";
import { offers, getOffer } from "@/lib/offers";
import { siteConfig } from "@/lib/tools";
import type { Metadata } from "next";

/**
 * /go/[id] — アフィリエイトリダイレクトエンドポイント（ネットツールボックス版）
 *
 * offers.ts の id を経由して、URL変更が一箇所で済むようにする。
 * noindex（検索結果から除外）、/go/* は robots.txt で disallow 済み。
 */

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return offers.map((o) => ({ id: o.id }));
}

export const metadata: Metadata = {
  title: `リダイレクト｜${siteConfig.name}`,
  robots: { index: false, follow: false },
};

export default async function GoPage(
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const offer = getOffer(id);
  if (!offer) notFound();
  redirect(offer.affiliate_url);
}
