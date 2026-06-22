import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/tools";

export const alt = `${siteConfig.name} - 無料Web便利ツール集`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #059669 0%, #10b981 50%, #34d399 100%)",
          color: "white",
          fontFamily: "sans-serif",
          padding: 80,
        }}
      >
        <div style={{ fontSize: 72, marginBottom: 24 }}>🛠️</div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 800,
            letterSpacing: -2,
            marginBottom: 24,
            textAlign: "center",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 36,
            opacity: 0.95,
            textAlign: "center",
            maxWidth: 1000,
            lineHeight: 1.4,
          }}
        >
          仕事・制作・開発の無料Webツール｜登録不要
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 28,
            opacity: 0.85,
            borderTop: "2px solid rgba(255,255,255,0.4)",
            paddingTop: 24,
          }}
        >
          net-toolbox.jp
        </div>
      </div>
    ),
    { ...size }
  );
}
