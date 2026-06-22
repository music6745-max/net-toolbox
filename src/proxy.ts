import { NextResponse, type NextRequest } from "next/server";
import {
  isIndexableGuideSlug,
  isIndexableToolSlug,
} from "@/lib/contentPolicy";

export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  const parts = request.nextUrl.pathname.split("/").filter(Boolean);

  if (parts.length === 1 && parts[0] === "rankings") {
    response.headers.set("X-Robots-Tag", "noindex, follow");
  }

  if (parts.length === 2 && parts[0] === "tools") {
    const slug = decodeURIComponent(parts[1]);
    if (!isIndexableToolSlug(slug)) {
      response.headers.set("X-Robots-Tag", "noindex, follow");
    }
  }

  if (parts.length === 2 && parts[0] === "guide") {
    const slug = decodeURIComponent(parts[1]);
    if (!isIndexableGuideSlug(slug)) {
      response.headers.set("X-Robots-Tag", "noindex, follow");
    }
  }

  return response;
}

export const config = {
  matcher: ["/tools/:path*", "/guide/:path*", "/rankings"],
};
