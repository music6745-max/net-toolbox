"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

const NAMES_DATA = {
  male: [
    { kanji: "\u6E4A", reading: "\u307F\u306A\u3068", meaning: "\u6E2F\u306B\u5411\u304B\u3046\u3088\u3046\u306A\u5E0C\u671B" },
    { kanji: "\u84BC\u592A", reading: "\u305D\u3046\u305F", meaning: "\u84BC\u7A7A\u306E\u3088\u3046\u306B\u5E83\u3044\u5FC3" },
    { kanji: "\u6A39", reading: "\u3044\u3064\u304D", meaning: "\u5927\u304D\u306A\u6728\u306E\u3088\u3046\u306B\u305F\u304F\u307E\u3057\u304F" },
    { kanji: "\u967D\u7FD4", reading: "\u306F\u308B\u3068", meaning: "\u592A\u967D\u306E\u3088\u3046\u306B\u8F1D\u304F" },
    { kanji: "\u60A0\u771F", reading: "\u3086\u3046\u307E", meaning: "\u60A0\u3005\u3068\u771F\u3063\u3059\u3050" },
    { kanji: "\u7FD4", reading: "\u304B\u3051\u308B", meaning: "\u7A7A\u3092\u98DB\u3076\u3088\u3046\u306B\u81EA\u7531\u306B" },
    { kanji: "\u5927\u548C", reading: "\u3084\u307E\u3068", meaning: "\u5927\u304D\u306A\u548C\u3092\u3082\u305F\u3089\u3059" },
    { kanji: "\u7C8B", reading: "\u3059\u3044", meaning: "\u6D17\u7DF4\u3055\u308C\u305F\u4EBA\u306B" },
    { kanji: "\u8490", reading: "\u308C\u3093", meaning: "\u84EE\u306E\u82B1\u306E\u3088\u3046\u306B\u6E05\u3089\u304B" },
    { kanji: "\u5FD7\u6717", reading: "\u3057\u308D\u3046", meaning: "\u5FD7\u3092\u6301\u3061\u660E\u308B\u304F" },
    { kanji: "\u6643\u5927", reading: "\u3053\u3046\u305F", meaning: "\u660E\u308B\u304F\u5927\u304D\u306A\u4EBA" },
    { kanji: "\u7AF6", reading: "\u304D\u3087\u3046", meaning: "\u7AF6\u3044\u5408\u3044\u5F37\u304F\u306A\u308B" },
  ],
  female: [
    { kanji: "\u967D\u8475", reading: "\u3072\u307E\u308A", meaning: "\u592A\u967D\u306E\u3088\u3046\u306B\u660E\u308B\u3044" },
    { kanji: "\u51DB", reading: "\u308A\u3093", meaning: "\u51DB\u3068\u3057\u305F\u7F8E\u3057\u3055" },
    { kanji: "\u7D50\u83DC", reading: "\u3086\u3044\u306A", meaning: "\u7D50\u3073\u3064\u304F\u7D41" },
    { kanji: "\u82B1\u97F3", reading: "\u304B\u306E\u3093", meaning: "\u82B1\u306E\u3088\u3046\u306B\u7F8E\u3057\u3044\u97F3" },
    { kanji: "\u8429", reading: "\u3057\u3085\u3046", meaning: "\u79CB\u306E\u82B1\u306E\u3088\u3046\u306B\u512A\u96C5" },
    { kanji: "\u7F8E\u6708", reading: "\u307F\u3065\u304D", meaning: "\u7F8E\u3057\u3044\u6708\u306E\u3088\u3046\u306B" },
    { kanji: "\u5F69\u4E43", reading: "\u3042\u3084\u306E", meaning: "\u5F69\u308A\u8C4A\u304B\u306A\u4EBA\u751F" },
    { kanji: "\u7D17\u82E5", reading: "\u3055\u308F", meaning: "\u3057\u306A\u3084\u304B\u3067\u82E5\u3005\u3057\u3044" },
    { kanji: "\u83EF\u6B69", reading: "\u304B\u307B", meaning: "\u83EF\u3084\u304B\u306B\u6B69\u3080" },
    { kanji: "\u7DBE\u97F3", reading: "\u3042\u3084\u306D", meaning: "\u7F8E\u3057\u3044\u97F3\u8272" },
    { kanji: "\u7426\u5B50", reading: "\u308B\u308A\u3053", meaning: "\u5B9D\u77F3\u306E\u3088\u3046\u306B\u8F1D\u304F" },
    { kanji: "\u6E05\u9999", reading: "\u3055\u3084\u304B", meaning: "\u6E05\u3089\u304B\u3067\u9999\u308A\u9AD8\u3044" },
  ],
};

export default function BabyNameGeneratorPage() {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [count, setCount] = useState(5);
  const [results, setResults] = useState<typeof NAMES_DATA.male>([]);

  const generate = () => {
    const pool = [...NAMES_DATA[gender]];
    const shuffled = pool.sort(() => Math.random() - 0.5);
    setResults(shuffled.slice(0, Math.min(count, shuffled.length)));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">{"\u30C8\u30C3\u30D7"}</Link><span className="mx-2">/</span><span>{"\u540D\u524D\u5019\u88DC\u751F\u6210"}</span></nav>
      <h1 className="text-2xl font-bold mb-2">{"\u540D\u524D\u5019\u88DC\u751F\u6210"}</h1>
      <p className="text-muted mb-8">{"\u6761\u4EF6\u3092\u9078\u3076\u3068\u540D\u524D\u306E\u5019\u88DC\u3092\u63D0\u6848\u3057\u307E\u3059\u3002"}</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">{"\u6027\u5225"}</label>
          <div className="flex gap-3">
            <button onClick={() => setGender("male")} className={"px-4 py-2 rounded-lg text-sm font-medium " + (gender === "male" ? "bg-primary text-white" : "bg-base border border-card-border")}>{"\u7537\u306E\u5B50"}</button>
            <button onClick={() => setGender("female")} className={"px-4 py-2 rounded-lg text-sm font-medium " + (gender === "female" ? "bg-primary text-white" : "bg-base border border-card-border")}>{"\u5973\u306E\u5B50"}</button>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{"\u8868\u793A\u6570: " + count + "\u4EF6"}</label>
          <input type="range" min={1} max={10} value={count} onChange={(e) => setCount(+e.target.value)} className="w-full" />
        </div>
        <button onClick={generate} className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:opacity-90">{"\u5019\u88DC\u3092\u751F\u6210"}</button>
        {results.length > 0 && (
          <div className="mt-4 space-y-3">
            {results.map((name, i) => (
              <div key={i} className="p-4 border border-card-border rounded-lg">
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-bold">{name.kanji}</span>
                  <span className="text-sm text-muted">{name.reading}</span>
                </div>
                <p className="text-sm text-muted mt-1">{name.meaning}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">{"\u4F7F\u3044\u65B9"}</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>{"\u6027\u5225\u3068\u8868\u793A\u6570\u3092\u9078\u3093\u3067\u300C\u5019\u88DC\u3092\u751F\u6210\u300D\u3092\u62BC\u3059\u3068\u3001\u540D\u524D\u306E\u5019\u88DC\u304C\u30E9\u30F3\u30C0\u30E0\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002\u6F22\u5B57\u30FB\u8AAD\u307F\u30FB\u610F\u5473\u3092\u53C2\u8003\u306B\u3067\u304D\u307E\u3059\u3002"}</p></div></section>
      <AffiliateSection slug="baby-name-generator" category="\u65E5\u5E38\u30C4\u30FC\u30EB" />
      <RelatedTools currentSlug="baby-name-generator" category="\u65E5\u5E38\u30C4\u30FC\u30EB" />
    </div>
  );
}
