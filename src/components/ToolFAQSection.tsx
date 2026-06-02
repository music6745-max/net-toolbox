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
          <h2 className="mb-3 text-lg font-bold">{toolName}の使い方</h2>
          <ol className="list-inside list-decimal space-y-2 text-sm leading-relaxed text-muted">
            {howTo.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </section>
      )}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold">よくある質問</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-lg border border-card-border bg-card-bg p-4">
              <h3 className="mb-2 text-sm font-semibold">Q. {faq.question}</h3>
              <p className="text-sm leading-relaxed text-muted">A. {faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
