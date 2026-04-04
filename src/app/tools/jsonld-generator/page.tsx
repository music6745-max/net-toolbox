"use client";

import { useState } from "react";
import Link from "next/link";

type SchemaType = "Article" | "Product" | "FAQ" | "Breadcrumb";

interface FaqItem {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export default function JsonLdGeneratorPage() {
  const [schemaType, setSchemaType] = useState<SchemaType>("Article");
  const [copied, setCopied] = useState(false);

  // Article fields
  const [articleTitle, setArticleTitle] = useState("");
  const [articleDesc, setArticleDesc] = useState("");
  const [articleUrl, setArticleUrl] = useState("");
  const [articleImage, setArticleImage] = useState("");
  const [articleAuthor, setArticleAuthor] = useState("");
  const [articleDate, setArticleDate] = useState("");
  const [articleModified, setArticleModified] = useState("");

  // Product fields
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCurrency, setProductCurrency] = useState("JPY");
  const [productAvailability, setProductAvailability] = useState("InStock");

  // FAQ fields
  const [faqItems, setFaqItems] = useState<FaqItem[]>([
    { question: "", answer: "" },
    { question: "", answer: "" },
  ]);

  // Breadcrumb fields
  const [bcItems, setBcItems] = useState<BreadcrumbItem[]>([
    { name: "トップ", url: "https://example.com" },
    { name: "カテゴリ", url: "https://example.com/category" },
  ]);

  const generateJsonLd = (): object => {
    if (schemaType === "Article") {
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        ...(articleTitle && { headline: articleTitle }),
        ...(articleDesc && { description: articleDesc }),
        ...(articleUrl && { url: articleUrl }),
        ...(articleImage && { image: articleImage }),
        ...(articleAuthor && { author: { "@type": "Person", name: articleAuthor } }),
        ...(articleDate && { datePublished: articleDate }),
        ...(articleModified && { dateModified: articleModified }),
      };
    }
    if (schemaType === "Product") {
      return {
        "@context": "https://schema.org",
        "@type": "Product",
        ...(productName && { name: productName }),
        ...(productDesc && { description: productDesc }),
        ...(productImage && { image: productImage }),
        ...(productBrand && { brand: { "@type": "Brand", name: productBrand } }),
        ...(productPrice && {
          offers: {
            "@type": "Offer",
            price: productPrice,
            priceCurrency: productCurrency,
            availability: `https://schema.org/${productAvailability}`,
          },
        }),
      };
    }
    if (schemaType === "FAQ") {
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems
          .filter((f) => f.question || f.answer)
          .map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
      };
    }
    // Breadcrumb
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: bcItems
        .filter((b) => b.name || b.url)
        .map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: b.name,
          item: b.url,
        })),
    };
  };

  const output = JSON.stringify(generateJsonLd(), null, 2);
  const scriptTag = `<script type="application/ld+json">\n${output}\n</script>`;

  const copyOutput = async () => {
    await navigator.clipboard.writeText(scriptTag);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const schemaTypes: { value: SchemaType; label: string }[] = [
    { value: "Article", label: "Article（記事）" },
    { value: "Product", label: "Product（商品）" },
    { value: "FAQ", label: "FAQPage（よくある質問）" },
    { value: "Breadcrumb", label: "BreadcrumbList（パンくず）" },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>構造化データ生成</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">構造化データ生成ツール</h1>
      <p className="text-muted mb-8">
        schema.orgの構造化データ（JSON-LD形式）を生成します。SEOのリッチリザルト対策に活用できます。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="mb-5">
          <label className="block text-sm font-medium mb-2">スキーマタイプを選択</label>
          <div className="grid grid-cols-2 gap-2">
            {schemaTypes.map((t) => (
              <button
                key={t.value}
                onClick={() => setSchemaType(t.value)}
                className={`border rounded-lg py-2 px-3 text-sm font-medium transition-colors ${schemaType === t.value ? "bg-primary text-white border-primary" : "border-card-border hover:border-primary text-muted"}`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {schemaType === "Article" && (
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-muted mb-1">タイトル（headline）</label>
              <input type="text" value={articleTitle} onChange={(e) => setArticleTitle(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" placeholder="記事タイトル" />
            </div>
            <div>
              <label className="block text-xs text-muted mb-1">説明（description）</label>
              <textarea value={articleDesc} onChange={(e) => setArticleDesc(e.target.value)} rows={2} className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none" placeholder="記事の説明" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-muted mb-1">URL</label>
                <input type="url" value={articleUrl} onChange={(e) => setArticleUrl(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" placeholder="https://example.com/article" />
              </div>
              <div>
                <label className="block text-xs text-muted mb-1">画像URL（image）</label>
                <input type="url" value={articleImage} onChange={(e) => setArticleImage(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" placeholder="https://example.com/image.jpg" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-xs text-muted mb-1">著者名（author）</label>
                <input type="text" value={articleAuthor} onChange={(e) => setArticleAuthor(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" placeholder="山田太郎" />
              </div>
              <div>
                <label className="block text-xs text-muted mb-1">公開日</label>
                <input type="date" value={articleDate} onChange={(e) => setArticleDate(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
              </div>
              <div>
                <label className="block text-xs text-muted mb-1">更新日</label>
                <input type="date" value={articleModified} onChange={(e) => setArticleModified(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
              </div>
            </div>
          </div>
        )}

        {schemaType === "Product" && (
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-muted mb-1">商品名（name）</label>
              <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" placeholder="商品名" />
            </div>
            <div>
              <label className="block text-xs text-muted mb-1">説明（description）</label>
              <textarea value={productDesc} onChange={(e) => setProductDesc(e.target.value)} rows={2} className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none" placeholder="商品説明" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-muted mb-1">ブランド（brand）</label>
                <input type="text" value={productBrand} onChange={(e) => setProductBrand(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" placeholder="ブランド名" />
              </div>
              <div>
                <label className="block text-xs text-muted mb-1">画像URL</label>
                <input type="url" value={productImage} onChange={(e) => setProductImage(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" placeholder="https://example.com/product.jpg" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-xs text-muted mb-1">価格（price）</label>
                <input type="number" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" placeholder="1000" />
              </div>
              <div>
                <label className="block text-xs text-muted mb-1">通貨</label>
                <select value={productCurrency} onChange={(e) => setProductCurrency(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary">
                  <option value="JPY">JPY（円）</option>
                  <option value="USD">USD（ドル）</option>
                  <option value="EUR">EUR（ユーロ）</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-muted mb-1">在庫状況</label>
                <select value={productAvailability} onChange={(e) => setProductAvailability(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary">
                  <option value="InStock">在庫あり</option>
                  <option value="OutOfStock">在庫なし</option>
                  <option value="PreOrder">予約受付中</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {schemaType === "FAQ" && (
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className="border border-card-border rounded-lg p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-muted">Q{i + 1}</span>
                  {faqItems.length > 1 && (
                    <button onClick={() => setFaqItems(faqItems.filter((_, j) => j !== i))} className="text-xs text-red-400 hover:text-red-600">削除</button>
                  )}
                </div>
                <input
                  type="text"
                  value={item.question}
                  onChange={(e) => { const n = [...faqItems]; n[i].question = e.target.value; setFaqItems(n); }}
                  className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  placeholder="質問文"
                />
                <textarea
                  value={item.answer}
                  onChange={(e) => { const n = [...faqItems]; n[i].answer = e.target.value; setFaqItems(n); }}
                  rows={2}
                  className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
                  placeholder="回答文"
                />
              </div>
            ))}
            <button
              onClick={() => setFaqItems([...faqItems, { question: "", answer: "" }])}
              className="text-sm text-primary hover:text-primary-hover font-medium"
            >
              + Q&amp;Aを追加
            </button>
          </div>
        )}

        {schemaType === "Breadcrumb" && (
          <div className="space-y-3">
            {bcItems.map((item, i) => (
              <div key={i} className="flex gap-2 items-center">
                <span className="text-xs text-muted w-6 flex-shrink-0">{i + 1}.</span>
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => { const n = [...bcItems]; n[i].name = e.target.value; setBcItems(n); }}
                  className="flex-1 border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  placeholder="ページ名"
                />
                <input
                  type="url"
                  value={item.url}
                  onChange={(e) => { const n = [...bcItems]; n[i].url = e.target.value; setBcItems(n); }}
                  className="flex-1 border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  placeholder="https://example.com/page"
                />
                {bcItems.length > 1 && (
                  <button onClick={() => setBcItems(bcItems.filter((_, j) => j !== i))} className="text-xs text-red-400 hover:text-red-600 flex-shrink-0">削除</button>
                )}
              </div>
            ))}
            <button
              onClick={() => setBcItems([...bcItems, { name: "", url: "" }])}
              className="text-sm text-primary hover:text-primary-hover font-medium"
            >
              + 項目を追加
            </button>
          </div>
        )}
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-base font-bold">生成されたJSON-LD</h2>
          <button onClick={copyOutput} className="text-sm text-primary hover:text-primary-hover font-medium">
            {copied ? "コピー済み" : "scriptタグごとコピー"}
          </button>
        </div>
        <pre className="bg-card-bg border border-card-border rounded-xl p-4 text-xs font-mono overflow-x-auto max-h-96 overflow-y-auto whitespace-pre-wrap break-all">
          {scriptTag}
        </pre>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. スキーマタイプ（Article・Product・FAQ・Breadcrumb）を選択します。</p>
          <p>2. 各フィールドに情報を入力すると、JSON-LDが自動生成されます。</p>
          <p>3. 「scriptタグごとコピー」で生成コードをコピーし、HTMLの&lt;head&gt;内に貼り付けます。</p>
          <p>4. Google検索コンソールのリッチリザルトテストで検証することをお勧めします。</p>
        </div>
      </section>
    </div>
  );
}
