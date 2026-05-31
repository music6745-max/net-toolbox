"use client";

import { useMemo, useState } from "react";

const KAIGO_NAVI_URL =
  "https://toshi-navi.jp/kaigo?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_shopping_supplies_replenishment";
const GUIDE_URL =
  "https://toshi-navi.jp/guide/parent-shopping-supplies-replenishment?utm_source=net-toolbox&utm_medium=referral&utm_campaign=parent_shopping_supplies_replenishment";
const BOOTH_URL = "https://kaigo-okane.booth.pm/items/8434977";
const FULL_PACK_URL = "https://kaigo-okane.booth.pm/items/8383441";

export default function KaigoParentShoppingSuppliesReplenishmentMemoPage() {
  const [checkDate, setCheckDate] = useState("");
  const [target, setTarget] = useState("");
  const [regularItems, setRegularItems] = useState("");
  const [doNotBuyItems, setDoNotBuyItems] = useState("");
  const [restockRules, setRestockRules] = useState("");
  const [seasonalPrep, setSeasonalPrep] = useState("");
  const [purchaseChannels, setPurchaseChannels] = useState("");
  const [familyNotes, setFamilyNotes] = useState("");
  const [nextReview, setNextReview] = useState("");

  const output = useMemo(() => {
    return [
      "【高齢親 買い物・日用品補充メモ】",
      checkDate ? `確認日: ${checkDate}` : "確認日: 未入力",
      target ? `対象者（呼び名）: ${target}` : "対象者（呼び名）: 未入力",
      "",
      "■ よく買う定番品（商品名/数量の目安/購入先）",
      regularItems || "未入力",
      "",
      "■ 買わなくてよいもの（重複・在庫過多など）",
      doNotBuyItems || "未入力",
      "",
      "■ 補充の目安（残量/タイミング/担当）",
      restockRules || "未入力",
      "",
      "■ 季節行事・季節替えの準備（必要な範囲だけ）",
      seasonalPrep || "未入力",
      "",
      "■ 購入先・配達・受け取りのメモ（分かる範囲）",
      purchaseChannels || "未入力",
      "",
      "■ 家族共有メモ（共有範囲/更新ルール/申し送り）",
      familyNotes || "未入力",
      "",
      "■ 次回見直すタイミング",
      nextReview || "未入力",
      "",
      "※このメモは家族内で買い物と補充の情報を見返すための記録です。緊急時の判断、医療判断、介護サービスの利用可否判断、契約判断は扱いません。急ぎの判断が必要な場合は、関係窓口や公式の案内に従って確認してください。氏名・住所・電話番号などの個人情報は必要な範囲に絞り、家族内で管理してください。パスワード・暗証番号・ログイン情報・カード番号・口座番号・マイナンバー等の秘密情報は記録しないでください。",
    ].join("\n");
  }, [checkDate, doNotBuyItems, familyNotes, nextReview, purchaseChannels, regularItems, restockRules, seasonalPrep, target]);

  const copyOutput = async () => {
    await navigator.clipboard.writeText(output);
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6">
        <a href="/tools" className="text-sm font-semibold text-blue-700 hover:underline">
          ツール一覧へ戻る
        </a>
        <h1 className="mt-3 text-2xl font-bold text-slate-900">高齢親 買い物・日用品補充メモメーカー</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          よく買う定番品、買わなくてよいもの、補充の目安、季節行事の準備メモを、家族内で見返しやすい形式にそろえます。秘密情報は記録しないでください。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">入力</h2>
          <div className="mt-4 space-y-4">
            <MemoField
              label="確認日"
              value={checkDate}
              onChange={setCheckDate}
              placeholder="例: 2026年5月31日、帰省日、月末の見直し日"
              rows={2}
            />
            <MemoField
              label="対象者（呼び名）"
              value={target}
              onChange={setTarget}
              placeholder={"例:\n- 母（実家）\n- 父（義実家）\n※氏名や住所など個人情報は必要最小限"}
              rows={3}
            />
            <MemoField
              label="よく買う定番品（商品名/数量の目安/購入先）"
              value={regularItems}
              onChange={setRegularItems}
              placeholder={
                "例:\n- トイレットペーパー / 12ロール / 月1 / 近所スーパー\n- ティッシュ / 5箱 / 2週間ごと / ドラッグストア\n- レトルトごはん / 10食 / 月末に補充 / ネット注文\n※個人情報や決済情報は書かない"
              }
              rows={7}
            />
            <MemoField
              label="買わなくてよいもの（重複・在庫過多など）"
              value={doNotBuyItems}
              onChange={setDoNotBuyItems}
              placeholder={
                "例:\n- 同じ洗剤は予備が多いので買わない\n- 使わない食品は買い足さない\n- 賞味期限が近いものは補充しない\n※判断の代替ではなく、家族内の目安メモ"
              }
            />
            <MemoField
              label="補充の目安（残量/タイミング/担当）"
              value={restockRules}
              onChange={setRestockRules}
              placeholder={
                "例:\n- 残り2つになったら補充（担当: A）\n- 月末にまとめ買い（担当: B）\n- 帰省時に残量を確認（担当: その時行く人）\n※契約や費用の最終判断は関係窓口へ確認"
              }
            />
            <MemoField
              label="季節行事・季節替えの準備（必要な範囲だけ）"
              value={seasonalPrep}
              onChange={setSeasonalPrep}
              placeholder={"例:\n- 夏: 虫よけ、冷感寝具\n- 冬: 防寒、加湿\n- 年末年始: 予備の食料、消耗品\n※必要な範囲だけでOK"}
            />
            <MemoField
              label="購入先・配達・受け取りのメモ（分かる範囲）"
              value={purchaseChannels}
              onChange={setPurchaseChannels}
              placeholder={"例:\n- 近所スーパー（営業時間）\n- ドラッグストア（ポイント日）\n- ネット注文（受け取り方法のメモ）\n※ログイン情報や暗証番号は書かない"}
            />
            <MemoField
              label="家族共有メモ（共有範囲/更新ルール/申し送り）"
              value={familyNotes}
              onChange={setFamilyNotes}
              placeholder={"例:\n- 共有範囲: きょうだい3人のみ\n- 更新: 変更があったら追記、月末に見直し\n- 外部転送しない"}
            />
            <MemoField
              label="次回見直すタイミング"
              value={nextReview}
              onChange={setNextReview}
              placeholder="例: 次回帰省後、月末の共有会、季節替え前"
              rows={2}
            />
          </div>
        </section>

        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-bold text-slate-900">出力メモ</h2>
            <button
              type="button"
              onClick={copyOutput}
              className="rounded-md bg-blue-700 px-4 py-2 text-sm font-bold text-white hover:bg-blue-800"
            >
              コピー
            </button>
          </div>
          <pre className="mt-4 min-h-[620px] whitespace-pre-wrap rounded-md bg-slate-50 p-4 text-sm leading-6 text-slate-800">
            {output}
          </pre>
          <div className="mt-5 space-y-3 rounded-md border border-blue-100 bg-blue-50 p-4 text-sm text-slate-700">
            <p className="font-bold text-slate-900">次の整理</p>
            <a className="block font-semibold text-blue-700 hover:underline" href={KAIGO_NAVI_URL}>
              親のこと整理ナビで関連テンプレートを診断する
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={GUIDE_URL}>
              買い物・日用品補充の共有方法を読む
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={BOOTH_URL}>
              買い物・日用品補充メモテンプレート集を見る
            </a>
            <a className="block font-semibold text-blue-700 hover:underline" href={FULL_PACK_URL}>
              介護まるごと総合パックを見る
            </a>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        このツールは家族内の買い物・日用品補充メモです。秘密情報は記録しないでください。緊急時の判断、医療判断、契約判断は扱いません。急ぎの判断が必要な場合は、関係窓口や公式の案内に従って確認してください。
      </section>
    </main>
  );
}

function MemoField({
  label,
  value,
  onChange,
  placeholder,
  rows = 4,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  rows?: number;
}) {
  return (
    <label className="block text-sm font-semibold text-slate-800">
      {label}
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm leading-6"
      />
    </label>
  );
}
