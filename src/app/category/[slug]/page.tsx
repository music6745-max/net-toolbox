import Link from "next/link";
import { tools, siteConfig } from "@/lib/tools";
import { categories, getCategoryBySlug } from "@/lib/categories";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const decoded = decodeURIComponent(slug);
  const cat = getCategoryBySlug(decoded);
  const name = cat?.name ?? decoded;
  const description = cat?.description ?? `${decoded}カテゴリのオンラインツール一覧`;

  return {
    title: `${name} - 無料オンラインツール一覧`,
    description,
    openGraph: {
      title: `${name} | ${siteConfig.name}`,
      description,
    },
  };
}

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const decoded = decodeURIComponent(slug);
  const cat = getCategoryBySlug(decoded);
  const categoryTools = tools.filter((t) => t.category === decoded);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "トップ", url: siteConfig.url },
          { name: cat?.name ?? decoded, url: `${siteConfig.url}/category/${slug}` },
        ]}
      />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>{cat?.name ?? decoded}</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">
        {cat?.icon} {cat?.name ?? decoded}
      </h1>
      <p className="text-muted mb-8">
        {cat?.description ?? `${decoded}カテゴリのツール一覧です。`}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryTools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="block bg-card-bg border border-card-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-200"
          >
            <div className="text-3xl mb-3">{tool.icon}</div>
            <h2 className="text-lg font-semibold mb-1">{tool.name}</h2>
            <p className="text-sm text-muted leading-relaxed">{tool.description}</p>
          </Link>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-lg font-bold mb-4">他のカテゴリ</h2>
        <div className="flex flex-wrap gap-3">
          {categories
            .filter((c) => c.slug !== decoded)
            .map((c) => (
              <Link
                key={c.slug}
                href={`/category/${c.slug}`}
                className="inline-flex items-center gap-2 bg-card-bg border border-card-border rounded-lg px-4 py-2 text-sm hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <span>{c.icon}</span>
                <span>{c.name}</span>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
