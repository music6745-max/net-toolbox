"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

interface Device {
  id: number;
  name: string;
  wattage: string;
  hoursPerDay: string;
  daysPerMonth: string;
}

let nextId = 2;

export default function Page() {
  const [devices, setDevices] = useState<Device[]>([
    { id: 1, name: "エアコン", wattage: "500", hoursPerDay: "8", daysPerMonth: "30" },
  ]);
  const [rate, setRate] = useState("31");

  const addDevice = () => {
    setDevices([...devices, { id: nextId++, name: "", wattage: "", hoursPerDay: "", daysPerMonth: "30" }]);
  };

  const removeDevice = (id: number) => {
    if (devices.length <= 1) return;
    setDevices(devices.filter((d) => d.id !== id));
  };

  const updateDevice = (id: number, field: keyof Device, value: string) => {
    setDevices(devices.map((d) => (d.id === id ? { ...d, [field]: value } : d)));
  };

  const rateNum = parseFloat(rate) || 31;

  const calculated = devices.map((d) => {
    const w = parseFloat(d.wattage) || 0;
    const h = parseFloat(d.hoursPerDay) || 0;
    const days = parseFloat(d.daysPerMonth) || 0;
    const kwhPerMonth = (w * h * days) / 1000;
    const monthlyCost = kwhPerMonth * rateNum;
    const yearlyCost = monthlyCost * 12;
    return { ...d, kwhPerMonth, monthlyCost, yearlyCost };
  });

  const totalMonthly = calculated.reduce((sum, d) => sum + d.monthlyCost, 0);
  const totalYearly = calculated.reduce((sum, d) => sum + d.yearlyCost, 0);

  const inputClass =
    "w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary";

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>電気料金比較</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">電気料金計算ツール</h1>
      <p className="text-muted mb-8">
        家電の消費電力と使用時間から月額・年額の電気代を計算。複数の家電を比較できます。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1">電力単価（円/kWh）</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="31"
            className="w-32 border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
          <span className="text-xs text-muted ml-2">※全国平均目安: 31円/kWh</span>
        </div>

        {devices.map((device) => {
          const c = calculated.find((ci) => ci.id === device.id);
          return (
            <div key={device.id} className="border border-card-border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium">{device.name || "家電"}</span>
                <button
                  onClick={() => removeDevice(device.id)}
                  className="text-sm text-red-500 hover:text-red-700"
                  disabled={devices.length <= 1}
                >
                  削除
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div>
                  <label className="block text-xs text-muted mb-1">名前</label>
                  <input type="text" value={device.name} onChange={(e) => updateDevice(device.id, "name", e.target.value)} placeholder="エアコン" className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs text-muted mb-1">消費電力（W）</label>
                  <input type="number" value={device.wattage} onChange={(e) => updateDevice(device.id, "wattage", e.target.value)} placeholder="500" className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs text-muted mb-1">時間/日</label>
                  <input type="number" value={device.hoursPerDay} onChange={(e) => updateDevice(device.id, "hoursPerDay", e.target.value)} placeholder="8" className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs text-muted mb-1">日/月</label>
                  <input type="number" value={device.daysPerMonth} onChange={(e) => updateDevice(device.id, "daysPerMonth", e.target.value)} placeholder="30" className={inputClass} />
                </div>
              </div>
              {c && c.monthlyCost > 0 && (
                <div className="mt-3 flex gap-6 text-sm">
                  <div><span className="text-muted">月間消費: </span><span className="font-mono">{c.kwhPerMonth.toFixed(1)} kWh</span></div>
                  <div><span className="text-muted">月額: </span><span className="font-mono font-medium">{Math.round(c.monthlyCost).toLocaleString()}円</span></div>
                  <div><span className="text-muted">年額: </span><span className="font-mono">{Math.round(c.yearlyCost).toLocaleString()}円</span></div>
                </div>
              )}
            </div>
          );
        })}

        <button
          onClick={addDevice}
          className="w-full border-2 border-dashed border-card-border rounded-lg py-3 text-sm text-muted hover:border-primary/30 hover:text-primary transition-colors"
        >
          + 家電を追加
        </button>

        {calculated.some((d) => d.monthlyCost > 0) && (
          <div className="bg-background rounded-lg p-4">
            <div className="flex justify-between text-sm font-medium">
              <span>合計（月額）</span>
              <span className="font-mono text-primary">{Math.round(totalMonthly).toLocaleString()}円</span>
            </div>
            <div className="flex justify-between text-sm font-medium mt-1">
              <span>合計（年額）</span>
              <span className="font-mono text-primary">{Math.round(totalYearly).toLocaleString()}円</span>
            </div>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">電気料金計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>家電の消費電力（W）、1日あたりの使用時間、月間使用日数を入力してください。</p>
          <p>電力単価（デフォルト31円/kWh）は契約プランに合わせて変更できます。</p>
          <p>複数の家電を追加して、電気代を比較・合計できます。</p>
        </div>
      </section>

      <RelatedTools currentSlug="electricity-rate" category="日常ツール" />
    </div>
  );
}
