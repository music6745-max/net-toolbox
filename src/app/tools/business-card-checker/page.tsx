"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [company, setCompany] = useState("");
  const [dept, setDept] = useState("");
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [url, setUrl] = useState("");

  const checks = [
    { label: "会社名", ok: company.length > 0, value: company },
    { label: "部署名", ok: dept.length > 0, value: dept },
    { label: "役職", ok: title.length > 0, value: title },
    { label: "氏名", ok: name.length > 0, value: name },
    { label: "メール", ok: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email), value: email },
    { label: "電話番号", ok: /^[\d\-+() ]{8,}$/.test(phone), value: phone },
    { label: "住所", ok: address.length > 5, value: address },
    { label: "URL", ok: /^https?:\/\//.test(url), value: url },
  ];
  const score = checks.filter(c => c.ok).length;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>名刺情報チェッカー</span></nav>
      <h1 className="text-2xl font-bold mb-2">名刺情報チェッカー</h1>
      <p className="text-muted mb-8">名刺に必要な情報が揃っているかチェック。名刺作成前の確認に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-3">
        <input type="text" value={company} onChange={e => setCompany(e.target.value)} placeholder="会社名" className="w-full border border-card-border rounded-lg px-4 py-2 text-sm" />
        <input type="text" value={dept} onChange={e => setDept(e.target.value)} placeholder="部署名" className="w-full border border-card-border rounded-lg px-4 py-2 text-sm" />
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="役職" className="w-full border border-card-border rounded-lg px-4 py-2 text-sm" />
        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="氏名" className="w-full border border-card-border rounded-lg px-4 py-2 text-sm" />
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="メールアドレス" className="w-full border border-card-border rounded-lg px-4 py-2 text-sm" />
        <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="電話番号" className="w-full border border-card-border rounded-lg px-4 py-2 text-sm" />
        <input type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder="住所" className="w-full border border-card-border rounded-lg px-4 py-2 text-sm" />
        <input type="url" value={url} onChange={e => setUrl(e.target.value)} placeholder="URL (https://...)" className="w-full border border-card-border rounded-lg px-4 py-2 text-sm" />
        <div className="mt-4 space-y-1">
          {checks.map(c => (
            <div key={c.label} className="flex items-center gap-2 text-sm">
              <span className={c.ok ? "text-green-500" : "text-red-500"}>{c.ok ? "✓" : "✗"}</span>
              <span className={c.ok ? "" : "text-muted"}>{c.label}</span>
            </div>
          ))}
        </div>
        <div className="bg-primary/10 rounded-lg p-4 text-center mt-4">
          <div className="text-xs text-muted mb-1">完成度</div>
          <div className="text-2xl font-bold text-primary">{score}/{checks.length} ({Math.round(score / checks.length * 100)}%)</div>
        </div>
      </div>
      <AffiliateSection slug="business-card-checker" category="日常ツール" />
      <RelatedTools currentSlug="business-card-checker" category="日常ツール" />
    </div>
  );
}
