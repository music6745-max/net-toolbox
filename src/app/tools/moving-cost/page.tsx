"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function MovingCostPage() {
  const [distance, setDistance] = useState(50);
  const [people, setPeople] = useState("single");
  const [season, setSeason] = useState("normal");
  const [floor, setFloor] = useState("1");
  const [elevator, setElevator] = useState(false);

  const calc = () => {
    let base = people === "single" ? 30000 : people === "couple" ? 60000 : people === "family3" ? 80000 : 100000;
    if (distance <= 15) base *= 1.0;
    else if (distance <= 50) base *= 1.2;
    else if (distance <= 200) base *= 1.5;
    else if (distance <= 500) base *= 2.0;
    else base *= 2.5;
    if (season === "peak") base *= 1.5;
    else if (season === "semi") base *= 1.2;
    const floorNum = parseInt(floor);
    if (floorNum >= 3 && !elevator) base *= 1.2;
    if (floorNum >= 5 && !elevator) base *= 1.3;
    return Math.round(base / 1000) * 1000;
  };

  const cost = calc();
  const fmt = (n: number) => n.toLocaleString();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">{"\u30C8\u30C3\u30D7"}</Link><span className="mx-2">/</span><span>{"\u5F15\u8D8A\u3057\u8CBB\u7528\u8A08\u7B97"}</span></nav>
      <h1 className="text-2xl font-bold mb-2">{"\u5F15\u8D8A\u3057\u8CBB\u7528\u8A08\u7B97"}</h1>
      <p className="text-muted mb-8">{"\u8DDD\u96E2\u30FB\u4EBA\u6570\u30FB\u6642\u671F\u304B\u3089\u5F15\u8D8A\u3057\u8CBB\u7528\u306E\u76EE\u5B89\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"}</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">{"\u79FB\u52D5\u8DDD\u96E2: " + distance + "km"}</label>
          <input type="range" min={5} max={1000} value={distance} onChange={(e) => setDistance(+e.target.value)} className="w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{"\u4E16\u5E2F\u30BF\u30A4\u30D7"}</label>
          <select value={people} onChange={(e) => setPeople(e.target.value)} className="w-full p-2 border border-card-border rounded-lg bg-base text-sm">
            <option value="single">{"\u5358\u8EAB"}</option>
            <option value="couple">{"2\u4EBA\u66AE\u3089\u3057"}</option>
            <option value="family3">{"3\u4EBA\u5BB6\u65CF"}</option>
            <option value="family4">{"4\u4EBA\u4EE5\u4E0A"}</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{"\u6642\u671F"}</label>
          <select value={season} onChange={(e) => setSeason(e.target.value)} className="w-full p-2 border border-card-border rounded-lg bg-base text-sm">
            <option value="normal">{"\u901A\u5E38\u671F\uFF085\u6708\u301C1\u6708\uFF09"}</option>
            <option value="semi">{"\u3084\u3084\u7E41\u5FD9\u671F\uFF082\u6708\u30FB4\u6708\uFF09"}</option>
            <option value="peak">{"\u7E41\u5FD9\u671F\uFF083\u6708\uFF09"}</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{"\u968E\u6570"}</label>
          <select value={floor} onChange={(e) => setFloor(e.target.value)} className="w-full p-2 border border-card-border rounded-lg bg-base text-sm">
            <option value="1">{"1\u968E"}</option>
            <option value="2">{"2\u968E"}</option>
            <option value="3">{"3\u968E"}</option>
            <option value="4">{"4\u968E"}</option>
            <option value="5">{"5\u968E\u4EE5\u4E0A"}</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" checked={elevator} onChange={(e) => setElevator(e.target.checked)} id="elevator" />
          <label htmlFor="elevator" className="text-sm">{"\u30A8\u30EC\u30D9\u30FC\u30BF\u30FC\u3042\u308A"}</label>
        </div>
        <div className="mt-6 p-4 bg-primary/10 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-medium">{"\u898B\u7A4D\u3082\u308A\u76EE\u5B89"}</span>
            <span className="text-2xl font-bold text-primary">{"\u00A5" + fmt(cost)}</span>
          </div>
          <p className="text-xs text-muted mt-2">{"\u203B \u5B9F\u969B\u306E\u8CBB\u7528\u306F\u696D\u8005\u3084\u8377\u7269\u91CF\u306B\u3088\u308A\u7570\u306A\u308A\u307E\u3059\u3002\u8907\u6570\u793E\u306B\u898B\u7A4D\u3082\u308A\u3092\u53D6\u308B\u3053\u3068\u3092\u304A\u3059\u3059\u3081\u3057\u307E\u3059\u3002"}</p>
        </div>
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">{"\u4F7F\u3044\u65B9"}</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>{"\u79FB\u52D5\u8DDD\u96E2\u30FB\u4E16\u5E2F\u30BF\u30A4\u30D7\u30FB\u6642\u671F\u306A\u3069\u3092\u9078\u629E\u3059\u308B\u3068\u3001\u5F15\u8D8A\u3057\u8CBB\u7528\u306E\u76EE\u5B89\u304C\u81EA\u52D5\u8A08\u7B97\u3055\u308C\u307E\u3059\u3002"}</p></div></section>
      <AffiliateSection slug="moving-cost" category="\u65E5\u5E38\u30C4\u30FC\u30EB" />
      <RelatedTools currentSlug="moving-cost" category="\u65E5\u5E38\u30C4\u30FC\u30EB" />
    </div>
  );
}
