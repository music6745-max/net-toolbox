"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

interface ParsedUA {
  browser: string;
  browserVersion: string;
  os: string;
  osVersion: string;
  device: string;
  engine: string;
}

function parseUA(ua: string): ParsedUA {
  const result: ParsedUA = {
    browser: "不明",
    browserVersion: "",
    os: "不明",
    osVersion: "",
    device: "デスクトップ",
    engine: "不明",
  };

  // Device
  if (/iPhone/i.test(ua)) result.device = "iPhone";
  else if (/iPad/i.test(ua)) result.device = "iPad";
  else if (/Android/i.test(ua) && /Mobile/i.test(ua)) result.device = "Androidスマートフォン";
  else if (/Android/i.test(ua)) result.device = "Androidタブレット";

  // OS
  if (/Windows NT 10\.0/i.test(ua)) { result.os = "Windows"; result.osVersion = "10/11"; }
  else if (/Windows NT 6\.3/i.test(ua)) { result.os = "Windows"; result.osVersion = "8.1"; }
  else if (/Windows NT 6\.2/i.test(ua)) { result.os = "Windows"; result.osVersion = "8"; }
  else if (/Windows NT 6\.1/i.test(ua)) { result.os = "Windows"; result.osVersion = "7"; }
  else if (/Windows/i.test(ua)) { result.os = "Windows"; }
  else if (/Mac OS X ([\d_]+)/i.test(ua)) {
    const m = ua.match(/Mac OS X ([\d_]+)/i);
    result.os = "macOS";
    result.osVersion = m ? m[1].replace(/_/g, ".") : "";
  }
  else if (/iPhone OS ([\d_]+)/i.test(ua)) {
    const m = ua.match(/iPhone OS ([\d_]+)/i);
    result.os = "iOS";
    result.osVersion = m ? m[1].replace(/_/g, ".") : "";
  }
  else if (/iPad.*OS ([\d_]+)/i.test(ua)) {
    const m = ua.match(/OS ([\d_]+)/i);
    result.os = "iPadOS";
    result.osVersion = m ? m[1].replace(/_/g, ".") : "";
  }
  else if (/Android ([\d.]+)/i.test(ua)) {
    const m = ua.match(/Android ([\d.]+)/i);
    result.os = "Android";
    result.osVersion = m ? m[1] : "";
  }
  else if (/Linux/i.test(ua)) { result.os = "Linux"; }
  else if (/CrOS/i.test(ua)) { result.os = "Chrome OS"; }

  // Engine
  if (/Gecko\/([\d.]+)/i.test(ua) && !/like Gecko/i.test(ua)) result.engine = "Gecko";
  else if (/AppleWebKit\/([\d.]+)/i.test(ua)) result.engine = "WebKit/Blink";
  else if (/Trident\/([\d.]+)/i.test(ua)) result.engine = "Trident";

  // Browser (order matters: more specific first)
  if (/Edg\/([\d.]+)/i.test(ua)) {
    const m = ua.match(/Edg\/([\d.]+)/i);
    result.browser = "Microsoft Edge";
    result.browserVersion = m ? m[1] : "";
  } else if (/OPR\/([\d.]+)/i.test(ua) || /Opera\/([\d.]+)/i.test(ua)) {
    const m = ua.match(/OPR\/([\d.]+)/i) || ua.match(/Opera\/([\d.]+)/i);
    result.browser = "Opera";
    result.browserVersion = m ? m[1] : "";
  } else if (/Firefox\/([\d.]+)/i.test(ua)) {
    const m = ua.match(/Firefox\/([\d.]+)/i);
    result.browser = "Firefox";
    result.browserVersion = m ? m[1] : "";
  } else if (/SamsungBrowser\/([\d.]+)/i.test(ua)) {
    const m = ua.match(/SamsungBrowser\/([\d.]+)/i);
    result.browser = "Samsung Internet";
    result.browserVersion = m ? m[1] : "";
  } else if (/Chrome\/([\d.]+)/i.test(ua) && !/Chromium/i.test(ua)) {
    const m = ua.match(/Chrome\/([\d.]+)/i);
    result.browser = "Google Chrome";
    result.browserVersion = m ? m[1] : "";
  } else if (/Chromium\/([\d.]+)/i.test(ua)) {
    const m = ua.match(/Chromium\/([\d.]+)/i);
    result.browser = "Chromium";
    result.browserVersion = m ? m[1] : "";
  } else if (/Safari\/([\d.]+)/i.test(ua)) {
    const m = ua.match(/Version\/([\d.]+)/i);
    result.browser = "Safari";
    result.browserVersion = m ? m[1] : "";
  } else if (/MSIE ([\d.]+)/i.test(ua) || /Trident.*rv:([\d.]+)/i.test(ua)) {
    const m = ua.match(/MSIE ([\d.]+)/i) || ua.match(/rv:([\d.]+)/i);
    result.browser = "Internet Explorer";
    result.browserVersion = m ? m[1] : "";
  }

  return result;
}

export default function UserAgentParserPage() {
  const [currentUA, setCurrentUA] = useState("");
  const [inputUA, setInputUA] = useState("");
  const [parsed, setParsed] = useState<ParsedUA | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => {
      const ua = navigator.userAgent;
      setCurrentUA(ua);
      setInputUA(ua);
      setParsed(parseUA(ua));
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  const analyze = () => {
    if (!inputUA.trim()) return;
    setParsed(parseUA(inputUA));
  };

  const resetToCurrentUA = () => {
    setInputUA(currentUA);
    setParsed(parseUA(currentUA));
  };

  const copyUA = async () => {
    await navigator.clipboard.writeText(currentUA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>UserAgent解析</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">UserAgent解析ツール</h1>
      <p className="text-muted mb-8">
        現在のブラウザのUserAgent文字列を解析し、ブラウザ・OS・デバイス種別を表示します。任意のUserAgentの解析にも対応しています。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-medium">現在のUserAgent</label>
          <button
            onClick={copyUA}
            className="text-sm text-primary hover:text-primary-hover font-medium"
          >
            {copied ? "コピー済み" : "コピー"}
          </button>
        </div>
        <div className="bg-background rounded-lg p-3 text-xs font-mono break-all mb-4">
          {currentUA || "読み込み中..."}
        </div>

        <label className="block text-sm font-medium mb-2">解析するUserAgent（編集可能）</label>
        <textarea
          value={inputUA}
          onChange={(e) => setInputUA(e.target.value)}
          placeholder="UserAgent文字列を入力..."
          className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none bg-background"
          rows={3}
        />

        <div className="flex gap-3 mt-4">
          <button
            onClick={analyze}
            className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            解析する
          </button>
          <button
            onClick={resetToCurrentUA}
            className="border border-card-border px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-card-bg transition-colors"
          >
            現在のUAに戻す
          </button>
        </div>
      </div>

      {parsed && (
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <h2 className="text-base font-bold mb-4">解析結果</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: "ブラウザ", value: `${parsed.browser}${parsed.browserVersion ? ` ${parsed.browserVersion}` : ""}` },
              { label: "OS", value: `${parsed.os}${parsed.osVersion ? ` ${parsed.osVersion}` : ""}` },
              { label: "デバイス", value: parsed.device },
              { label: "レンダリングエンジン", value: parsed.engine },
            ].map(({ label, value }) => (
              <div key={label} className="bg-background rounded-lg p-4">
                <p className="text-xs text-muted mb-1">{label}</p>
                <p className="text-sm font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">UserAgent解析ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. ページを開くと現在のブラウザのUserAgentが自動的に表示・解析されます。</p>
          <p>2. テキストエリアのUserAgentを書き換えて「解析する」ボタンで任意のUserAgentを解析できます。</p>
          <p>3. 「現在のUAに戻す」ボタンで現在のブラウザのUserAgentに戻せます。</p>
          <p>ブラウザ・OS・デバイス種別・レンダリングエンジンを判定して表示します。すべての処理はブラウザ内で完結します。</p>
        </div>
      </section>


      <AffiliateSection slug="useragent-parser" category="開発ツール" />
      <RelatedTools currentSlug="useragent-parser" category="開発ツール" />
    </div>
  );
}
