"use client";

import { useState } from "react";

export function ShareButtons() {
  const [copied, setCopied] = useState(false);

  const handleShare = (platform: "twitter" | "line") => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);

    if (platform === "twitter") {
      window.open(
        `https://twitter.com/intent/tweet?text=${title}&url=${url}`,
        "_blank",
        "noopener,noreferrer,width=550,height=420"
      );
    } else {
      window.open(
        `https://social-plugins.line.me/lineit/share?url=${url}`,
        "_blank",
        "noopener,noreferrer,width=550,height=420"
      );
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const input = document.createElement("input");
      input.value = window.location.href;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="mt-8 border-t border-card-border pt-6">
      <p className="text-sm font-medium text-muted mb-3">
        このツールをシェア
      </p>
      <div className="flex items-center gap-2 flex-wrap">
        <button
          onClick={() => handleShare("twitter")}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0f1419] text-white text-sm rounded-lg hover:bg-[#0f1419]/80 transition-colors"
          aria-label="X(Twitter)でシェア"
        >
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          X
        </button>
        <button
          onClick={() => handleShare("line")}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#06C755] text-white text-sm rounded-lg hover:bg-[#06C755]/80 transition-colors"
          aria-label="LINEでシェア"
        >
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
          </svg>
          LINE
        </button>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-card-bg border border-card-border text-sm rounded-lg hover:bg-primary-light transition-colors"
          aria-label="URLをコピー"
        >
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          {copied ? "コピーしました" : "URLコピー"}
        </button>
      </div>
    </div>
  );
}
