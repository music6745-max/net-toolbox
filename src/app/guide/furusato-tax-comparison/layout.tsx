import { AffiliateCTA } from "@/components/AffiliateCTA";

export default function FurusatoTaxComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <div className="max-w-3xl mx-auto px-4 pb-10">
        <AffiliateCTA
          serviceName="税理士ドットコム"
          url="/go/zeirishi-dotcom"
          description="副業・投資・不動産など複数の収入源がある方は、ふるさと納税の控除上限だけでなく総合的な税務戦略を税理士に相談するのがお得。税理士ドットコムなら全国の税理士を無料で紹介してもらえます。"
          badge="無料・お住まいの地域で紹介"
          color="green"
        />
      </div>
    </>
  );
}
