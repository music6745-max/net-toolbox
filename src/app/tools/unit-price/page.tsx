"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

interface Item {
  id: number;
  name: string;
  price: string;
  quantity: string;
  unit: string;
}

let nextId = 3;

export default function Page() {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: "商品A", price: "298", quantity: "500", unit: "g" },
    { id: 2, name: "商品B", price: "398", quantity: "750", unit: "g" },
  ]);

  const addItem = () => {
    setItems([...items, { id: nextId++, name: "", price: "", quantity: "", unit: "g" }]);
  };

  const removeItem = (id: number) => {
    if (items.length <= 1) return;
    setItems(items.filter((i) => i.id !== id));
  };

  const updateItem = (id: number, field: keyof Item, value: string) => {
    setItems(items.map((i) => (i.id === id ? { ...i, [field]: value } : i)));
  };

  const calculated = items.map((item) => {
    const price = parseFloat(item.price) || 0;
    const qty = parseFloat(item.quantity) || 0;
    const unitPrice = qty > 0 ? price / qty : 0;
    return { ...item, unitPrice };
  });

  const validItems = calculated.filter((i) => i.unitPrice > 0);
  const bestDeal = validItems.length > 0
    ? validItems.reduce((best, item) => (item.unitPrice < best.unitPrice ? item : best))
    : null;

  const inputClass =
    "w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary";

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>単価計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">単価計算ツール</h1>
      <p className="text-muted mb-8">
        商品の価格と量から単価を計算し、お買い得商品を比較します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        {items.map((item) => (
          <div key={item.id} className={`border rounded-lg p-4 ${bestDeal && bestDeal.id === item.id ? "border-green-500 bg-green-50/50" : "border-card-border"}`}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium">
                {bestDeal && bestDeal.id === item.id && (
                  <span className="text-green-600 mr-2">★ お買い得</span>
                )}
              </span>
              <button
                onClick={() => removeItem(item.id)}
                className="text-sm text-red-500 hover:text-red-700"
                disabled={items.length <= 1}
              >
                削除
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <div>
                <label className="block text-xs text-muted mb-1">商品名</label>
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => updateItem(item.id, "name", e.target.value)}
                  placeholder="商品名"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs text-muted mb-1">価格（円）</label>
                <input
                  type="number"
                  value={item.price}
                  onChange={(e) => updateItem(item.id, "price", e.target.value)}
                  placeholder="298"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs text-muted mb-1">量</label>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateItem(item.id, "quantity", e.target.value)}
                  placeholder="500"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs text-muted mb-1">単位</label>
                <input
                  type="text"
                  value={item.unit}
                  onChange={(e) => updateItem(item.id, "unit", e.target.value)}
                  placeholder="g"
                  className={inputClass}
                />
              </div>
            </div>
            {(() => {
              const c = calculated.find((ci) => ci.id === item.id);
              if (!c || c.unitPrice <= 0) return null;
              return (
                <div className="mt-2 text-sm">
                  <span className="text-muted">単価: </span>
                  <span className="font-medium font-mono">
                    {c.unitPrice.toFixed(2)}円/{c.unit}
                  </span>
                </div>
              );
            })()}
          </div>
        ))}

        <button
          onClick={addItem}
          className="w-full border-2 border-dashed border-card-border rounded-lg py-3 text-sm text-muted hover:border-primary/30 hover:text-primary transition-colors"
        >
          + 商品を追加
        </button>

        {validItems.length >= 2 && bestDeal && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm">
            <p className="font-medium text-green-700">
              「{bestDeal.name || "名前未設定"}」が最もお買い得です！
            </p>
            <p className="text-green-600 mt-1">
              単価: {bestDeal.unitPrice.toFixed(2)}円/{bestDeal.unit}
            </p>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">単価計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>商品名、価格、量、単位を入力すると、自動で単価が計算されます。</p>
          <p>複数の商品を追加して比較でき、最もお買い得な商品がハイライト表示されます。</p>
          <p>スーパーでの買い物比較などにご活用ください。</p>
        </div>
      </section>

      <RelatedTools currentSlug="unit-price" category="日常ツール" />
    </div>
  );
}
