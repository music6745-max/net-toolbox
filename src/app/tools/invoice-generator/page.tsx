"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

type Item = { name: string; quantity: number; unit: string; unitPrice: number };

export default function InvoiceGeneratorPage() {
  const [companyName, setCompanyName] = useState("");
  const [clientName, setClientName] = useState("");
  const [invoiceDate, setInvoiceDate] = useState(new Date().toISOString().slice(0, 10));
  const [dueDate, setDueDate] = useState("");
  const [items, setItems] = useState<Item[]>([{ name: "", quantity: 1, unit: "個", unitPrice: 0 }]);
  const [taxRate, setTaxRate] = useState(10);
  const [note, setNote] = useState("");
  const printRef = useRef<HTMLDivElement>(null);

  const addItem = () => setItems([...items, { name: "", quantity: 1, unit: "個", unitPrice: 0 }]);
  const removeItem = (i: number) => setItems(items.filter((_, idx) => idx !== i));
  const updateItem = (i: number, field: keyof Item, value: string | number) => {
    const next = [...items];
    (next[i] as Record<string, unknown>)[field] = value;
    setItems(next);
  };

  const subtotal = items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  const tax = Math.round(subtotal * taxRate / 100);
  const total = subtotal + tax;
  const fmt = (n: number) => n.toLocaleString();

  const handlePrint = () => {
    const content = printRef.current;
    if (!content) return;
    const win = window.open("", "_blank");
    if (!win) return;
    win.document.write("<html><head><title>請求書</title><style>body{font-family:sans-serif;padding:40px;color:#333}table{width:100%;border-collapse:collapse;margin:20px 0}th,td{border:1px solid #ddd;padding:8px;text-align:left}th{background:#f5f5f5}.total{font-size:24px;font-weight:bold;text-align:right}.header{display:flex;justify-content:space-between}.right{text-align:right}</style></head><body>" + content.innerHTML + "</body></html>");
    win.document.close();
    win.print();
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>請求書作成</span></nav>
      <h1 className="text-2xl font-bold mb-2">請求書作成ツール</h1>
      <p className="text-muted mb-8">請求書を作成して印刷・PDF保存できます。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-1">発行者名</label><input type="text" value={companyName} onChange={e => setCompanyName(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent" placeholder="株式会社サンプル" /></div>
          <div><label className="block text-sm font-medium mb-1">宛先</label><input type="text" value={clientName} onChange={e => setClientName(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent" placeholder="株式会社クライアント 御中" /></div>
          <div><label className="block text-sm font-medium mb-1">発行日</label><input type="date" value={invoiceDate} onChange={e => setInvoiceDate(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent" /></div>
          <div><label className="block text-sm font-medium mb-1">支払期限</label><input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent" /></div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-2"><label className="text-sm font-medium">明細</label><button onClick={addItem} className="text-xs bg-primary text-white rounded px-2 py-1">+ 行追加</button></div>
          {items.map((item, i) => (
            <div key={i} className="grid grid-cols-12 gap-2 mb-2">
              <input type="text" value={item.name} onChange={e => updateItem(i, "name", e.target.value)} placeholder="品目" className="col-span-4 border border-card-border rounded px-2 py-1 bg-transparent text-sm" />
              <input type="number" value={item.quantity} onChange={e => updateItem(i, "quantity", Number(e.target.value))} className="col-span-2 border border-card-border rounded px-2 py-1 bg-transparent text-sm" />
              <input type="text" value={item.unit} onChange={e => updateItem(i, "unit", e.target.value)} className="col-span-1 border border-card-border rounded px-2 py-1 bg-transparent text-sm" />
              <input type="number" value={item.unitPrice} onChange={e => updateItem(i, "unitPrice", Number(e.target.value))} placeholder="単価" className="col-span-3 border border-card-border rounded px-2 py-1 bg-transparent text-sm" />
              <span className="col-span-1 flex items-center text-sm">{fmt(item.quantity * item.unitPrice)}</span>
              <button onClick={() => removeItem(i)} className="col-span-1 text-red-500 text-sm">x</button>
            </div>
          ))}
        </div>
        <div className="flex gap-4 items-center">
          <label className="text-sm">税率</label>
          <select value={taxRate} onChange={e => setTaxRate(Number(e.target.value))} className="border border-card-border rounded px-2 py-1 bg-transparent text-sm">
            <option value={10}>10%</option><option value={8}>8%（軽減税率）</option><option value={0}>0%（非課税）</option>
          </select>
        </div>
        <div><label className="block text-sm font-medium mb-1">備考</label><textarea value={note} onChange={e => setNote(e.target.value)} rows={2} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent text-sm" /></div>
        <div className="text-right space-y-1 text-sm">
          <p>小計: {fmt(subtotal)}円</p>
          <p>消費税({taxRate}%): {fmt(tax)}円</p>
          <p className="text-xl font-bold">合計: {fmt(total)}円</p>
        </div>
        <button onClick={handlePrint} className="w-full bg-primary text-white rounded-lg py-2 font-medium hover:opacity-90 transition">印刷 / PDF保存</button>
      </div>
      <div ref={printRef} className="hidden">
        <div className="header"><div><h1 style={{fontSize:"28px",marginBottom:"4px"}}>請求書</h1><p>{clientName} 御中</p></div><div className="right"><p>{companyName}</p><p>発行日: {invoiceDate}</p>{dueDate && <p>支払期限: {dueDate}</p>}</div></div>
        <p className="total" style={{margin:"20px 0"}}>ご請求金額: {fmt(total)}円</p>
        <table><thead><tr><th>品目</th><th>数量</th><th>単位</th><th>単価</th><th>金額</th></tr></thead><tbody>{items.map((item, i) => <tr key={i}><td>{item.name}</td><td>{item.quantity}</td><td>{item.unit}</td><td>{fmt(item.unitPrice)}円</td><td>{fmt(item.quantity * item.unitPrice)}円</td></tr>)}</tbody></table>
        <p className="right">小計: {fmt(subtotal)}円</p><p className="right">消費税({taxRate}%): {fmt(tax)}円</p><p className="right" style={{fontSize:"18px",fontWeight:"bold"}}>合計: {fmt(total)}円</p>
        {note && <p style={{marginTop:"20px"}}>備考: {note}</p>}
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>発行者名・宛先・明細を入力して「印刷/PDF保存」をクリックすると、ブラウザの印刷機能でPDFとして保存できます。</p></div></section>
      <AffiliateSection slug="invoice-generator" category="日常ツール" />
      <RelatedTools currentSlug="invoice-generator" category="日常ツール" />
    </div>
  );
}
