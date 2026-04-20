import { FAQJsonLd } from "@/components/JsonLd";

type FAQItem = { question: string; answer: string };

export function ToolFAQSection({
  toolName,
  faqs,
  howTo,
}: {
  toolName: string;
  faqs: FAQItem[];
  howTo?: string[];
}) {
  return (
    <>
      <FAQJsonLd items={faqs} />
      {howTo && howTo.length > 0 && (
        <section className="mt-10">
          <h2 className="text-lg font-bold mb-3">{toolName}の使い方</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm text-muted leading-relaxed">
            {howTo.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </section>
      )}
      <section className="mt-10">
        <h2 className="text-lg font-bold mb-4">よくある質問</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card-bg border border-card-border rounded-lg p-4">
              <h3 className="text-sm font-semibold mb-2">Q. {faq.question}</h3>
              <p className="text-sm text-muted leading-relaxed">A. {faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
