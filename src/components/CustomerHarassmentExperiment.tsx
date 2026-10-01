export const CUSTOMER_HARASSMENT_EXPERIMENT_ID =
  "opp_customer_harassment_kit";

type InquiryCtaProps = {
  position: "hero" | "final";
};

export function CustomerHarassmentInquiryCta({
  position,
}: InquiryCtaProps) {
  return (
    <div
      data-experiment-id={CUSTOMER_HARASSMENT_EXPERIMENT_ID}
      data-experiment-status="paused"
      data-position={position}
      className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-slate-900"
    >
      <p className="text-sm font-bold text-amber-800">新規受付停止中</p>
      <p className="mt-2 text-sm leading-relaxed text-slate-700">
        個別調整、短納期対応、法務に隣接する確認を安全に継続できる運用体制と合わないため、
        新規相談と受注を停止しました。再開時期は未定です。
      </p>
      <p className="mt-2 text-xs leading-relaxed text-slate-600">
        顧客・従業員の氏名、連絡先、録音、実際の事案内容などの個人情報・機密情報を送らないでください。
      </p>
    </div>
  );
}
