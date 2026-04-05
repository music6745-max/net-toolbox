"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function WeddingCostPage() {
  const [guests, setGuests] = useState(60);
  const [venue, setVenue] = useState("hotel");
  const [food, setFood] = useState("standard");
  const [dress, setDress] = useState("rental");
  const [photo, setPhoto] = useState(true);
  const [flowers, setFlowers] = useState("standard");

  const calc = () => {
    let total = 0;
    const venueBase = venue === "hotel" ? 800000 : venue === "guesthouse" ? 600000 : venue === "restaurant" ? 400000 : 300000;
    total += venueBase;
    const foodPerPerson = food === "premium" ? 20000 : food === "standard" ? 15000 : 10000;
    total += foodPerPerson * guests;
    const drinkPerPerson = 4000;
    total += drinkPerPerson * guests;
    const dressCost = dress === "purchase" ? 500000 : dress === "rental" ? 250000 : 150000;
    total += dressCost;
    total += 100000;
    if (photo) total += 200000;
    const flowerCost = flowers === "premium" ? 400000 : flowers === "standard" ? 250000 : 100000;
    total += flowerCost;
    total += 50000;
    const giftPerPerson = 5000;
    total += giftPerPerson * guests;
    total += 30000 * Math.ceil(guests / 10);
    return total;
  };

  const total = calc();
  const giftMoney = guests * 30000;
  const selfPay = total - giftMoney;

  const fmt = (n: number) => n.toLocaleString();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">{"\u30C8\u30C3\u30D7"}</Link><span className="mx-2">/</span><span>{"\u7D50\u5A5A\u5F0F\u8CBB\u7528\u8A08\u7B97"}</span></nav>
      <h1 className="text-2xl font-bold mb-2">{"\u7D50\u5A5A\u5F0F\u8CBB\u7528\u8A08\u7B97"}</h1>
      <p className="text-muted mb-8">{"\u4EBA\u6570\u3084\u6761\u4EF6\u304B\u3089\u7D50\u5A5A\u5F0F\u306E\u6982\u7B97\u8CBB\u7528\u3092\u898B\u7A4D\u3082\u308A\u307E\u3059\u3002"}</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">{"\u62DB\u5F85\u4EBA\u6570"}</label>
          <input type="number" value={guests} onChange={(e) => setGuests(Math.max(1, +e.target.value))} className="w-full p-2 border border-card-border rounded-lg bg-base text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{"\u4F1A\u5834\u30BF\u30A4\u30D7"}</label>
          <select value={venue} onChange={(e) => setVenue(e.target.value)} className="w-full p-2 border border-card-border rounded-lg bg-base text-sm">
            <option value="hotel">{"\u30DB\u30C6\u30EB"}</option>
            <option value="guesthouse">{"\u30B2\u30B9\u30C8\u30CF\u30A6\u30B9"}</option>
            <option value="restaurant">{"\u30EC\u30B9\u30C8\u30E9\u30F3"}</option>
            <option value="other">{"\u305D\u306E\u4ED6"}</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{"\u6599\u7406\u30E9\u30F3\u30AF"}</label>
          <select value={food} onChange={(e) => setFood(e.target.value)} className="w-full p-2 border border-card-border rounded-lg bg-base text-sm">
            <option value="premium">{"\u30D7\u30EC\u30DF\u30A2\u30E0\uFF08\u7D042\u4E07\u5186/\u4EBA\uFF09"}</option>
            <option value="standard">{"\u30B9\u30BF\u30F3\u30C0\u30FC\u30C9\uFF08\u7D041.5\u4E07\u5186/\u4EBA\uFF09"}</option>
            <option value="casual">{"\u30AB\u30B8\u30E5\u30A2\u30EB\uFF08\u7D041\u4E07\u5186/\u4EBA\uFF09"}</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{"\u30C9\u30EC\u30B9"}</label>
          <select value={dress} onChange={(e) => setDress(e.target.value)} className="w-full p-2 border border-card-border rounded-lg bg-base text-sm">
            <option value="purchase">{"\u8CFC\u5165\uFF08\u7D0450\u4E07\u5186\uFF09"}</option>
            <option value="rental">{"\u30EC\u30F3\u30BF\u30EB\uFF08\u7D0425\u4E07\u5186\uFF09"}</option>
            <option value="simple">{"\u30B7\u30F3\u30D7\u30EB\uFF08\u7D0415\u4E07\u5186\uFF09"}</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{"\u88C5\u82B1"}</label>
          <select value={flowers} onChange={(e) => setFlowers(e.target.value)} className="w-full p-2 border border-card-border rounded-lg bg-base text-sm">
            <option value="premium">{"\u8C6A\u83EF\uFF08\u7D0440\u4E07\u5186\uFF09"}</option>
            <option value="standard">{"\u30B9\u30BF\u30F3\u30C0\u30FC\u30C9\uFF08\u7D0425\u4E07\u5186\uFF09"}</option>
            <option value="simple">{"\u30B7\u30F3\u30D7\u30EB\uFF08\u7D0410\u4E07\u5186\uFF09"}</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" checked={photo} onChange={(e) => setPhoto(e.target.checked)} id="photo" />
          <label htmlFor="photo" className="text-sm">{"\u524D\u64AE\u308A\u64AE\u5F71\uFF08\u7D0420\u4E07\u5186\uFF09"}</label>
        </div>
        <div className="mt-6 p-4 bg-primary/10 rounded-lg space-y-2">
          <div className="flex justify-between"><span className="font-medium">{"\u7DCF\u8CBB\u7528\uFF08\u6982\u7B97\uFF09"}</span><span className="text-xl font-bold text-primary">{"\u00A5" + fmt(total)}</span></div>
          <div className="flex justify-between text-sm text-muted"><span>{"\u3054\u795D\u5100\u4E88\u60F3\uFF08\u7D043\u4E07/\u4EBA\uFF09"}</span><span>{"\u00A5" + fmt(giftMoney)}</span></div>
          <div className="flex justify-between text-sm"><span className="font-medium">{"\u81EA\u5DF1\u8CA0\u62C5\u76EE\u5B89"}</span><span className={"font-bold " + (selfPay < 0 ? "text-green-500" : "text-red-500")}>{"\u00A5" + fmt(selfPay)}</span></div>
        </div>
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">{"\u4F7F\u3044\u65B9"}</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>{"\u62DB\u5F85\u4EBA\u6570\u3084\u4F1A\u5834\u30BF\u30A4\u30D7\u306A\u3069\u306E\u6761\u4EF6\u3092\u9078\u629E\u3059\u308B\u3068\u3001\u7D50\u5A5A\u5F0F\u306E\u6982\u7B97\u8CBB\u7528\u304C\u81EA\u52D5\u8A08\u7B97\u3055\u308C\u307E\u3059\u3002\u3054\u795D\u5100\u3092\u5DEE\u3057\u5F15\u3044\u305F\u81EA\u5DF1\u8CA0\u62C5\u984D\u3082\u8868\u793A\u3055\u308C\u307E\u3059\u3002"}</p></div></section>
      <AffiliateSection slug="wedding-cost" category="\u65E5\u5E38\u30C4\u30FC\u30EB" />
      <RelatedTools currentSlug="wedding-cost" category="\u65E5\u5E38\u30C4\u30FC\u30EB" />
    </div>
  );
}
