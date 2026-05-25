"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

type CalcState = {
  display: string;
  expression: string;
  waitingForOperand: boolean;
  hasResult: boolean;
};

const INITIAL_STATE: CalcState = {
  display: "0",
  expression: "",
  waitingForOperand: false,
  hasResult: false,
};

function safeEval(expr: string): number | null {
  try {
    // Only allow numbers, operators, dots, parentheses, spaces
    if (!/^[\d\s+\-*/().%]+$/.test(expr)) return null;
    // Replace % with /100 for percentage
    const sanitized = expr.replace(/(\d+(?:\.\d+)?)%/g, "($1/100)");
    // Use Function constructor as a safe alternative to direct eval

    const result = new Function(`"use strict"; return (${sanitized})`)() as number;
    if (!isFinite(result) || isNaN(result)) return null;
    return result;
  } catch {
    return null;
  }
}

function formatDisplay(value: string): string {
  if (value.length > 12) {
    const num = parseFloat(value);
    if (!isNaN(num)) {
      return num.toPrecision(8).replace(/\.?0+$/, "");
    }
  }
  return value;
}

const BUTTON_LAYOUT = [
  [
    { label: "AC", type: "clear", wide: false },
    { label: "+/-", type: "sign", wide: false },
    { label: "%", type: "percent", wide: false },
    { label: "÷", type: "operator", op: "/", wide: false },
  ],
  [
    { label: "7", type: "digit", wide: false },
    { label: "8", type: "digit", wide: false },
    { label: "9", type: "digit", wide: false },
    { label: "×", type: "operator", op: "*", wide: false },
  ],
  [
    { label: "4", type: "digit", wide: false },
    { label: "5", type: "digit", wide: false },
    { label: "6", type: "digit", wide: false },
    { label: "−", type: "operator", op: "-", wide: false },
  ],
  [
    { label: "1", type: "digit", wide: false },
    { label: "2", type: "digit", wide: false },
    { label: "3", type: "digit", wide: false },
    { label: "+", type: "operator", op: "+", wide: false },
  ],
  [
    { label: "0", type: "digit", wide: true },
    { label: ".", type: "dot", wide: false },
    { label: "=", type: "equals", wide: false },
  ],
];

export default function CalculatorPage() {
  const [state, setState] = useState<CalcState>(INITIAL_STATE);
  const [history, setHistory] = useState<string[]>([]);

  const handleDigit = useCallback((digit: string) => {
    setState((prev) => {
      if (prev.waitingForOperand || prev.hasResult) {
        return {
          ...prev,
          display: digit,
          waitingForOperand: false,
          hasResult: false,
        };
      }
      if (prev.display === "0" && digit !== ".") {
        return { ...prev, display: digit };
      }
      if (prev.display.length >= 12) return prev;
      return { ...prev, display: prev.display + digit };
    });
  }, []);

  const handleDot = useCallback(() => {
    setState((prev) => {
      if (prev.waitingForOperand || prev.hasResult) {
        return { ...prev, display: "0.", waitingForOperand: false, hasResult: false };
      }
      if (prev.display.includes(".")) return prev;
      return { ...prev, display: prev.display + "." };
    });
  }, []);

  const handleOperator = useCallback((op: string) => {
    setState((prev) => {
      if (prev.expression && !prev.waitingForOperand && !prev.hasResult) {
        const fullExpr = prev.expression + prev.display;
        const result = safeEval(fullExpr);
        if (result !== null) {
          const resultStr = String(result);
          return {
            display: resultStr,
            expression: resultStr + op,
            waitingForOperand: true,
            hasResult: false,
          };
        }
      }
      return {
        ...prev,
        expression: (prev.hasResult ? prev.display : prev.expression || prev.display) + op,
        waitingForOperand: true,
        hasResult: false,
      };
    });
  }, []);

  const handleEquals = useCallback(() => {
    setState((prev) => {
      if (!prev.expression) return prev;
      const fullExpr = prev.expression + prev.display;
      const result = safeEval(fullExpr);
      if (result === null) {
        return { ...INITIAL_STATE, display: "エラー" };
      }
      const resultStr = String(result);
      const historyEntry = `${fullExpr} = ${resultStr}`;
      setHistory((h) => [historyEntry, ...h].slice(0, 10));
      return {
        display: resultStr,
        expression: "",
        waitingForOperand: false,
        hasResult: true,
      };
    });
  }, []);

  const handleClear = useCallback(() => {
    setState(INITIAL_STATE);
  }, []);

  const handleSign = useCallback(() => {
    setState((prev) => {
      if (prev.display === "0") return prev;
      if (prev.display.startsWith("-")) {
        return { ...prev, display: prev.display.slice(1) };
      }
      return { ...prev, display: "-" + prev.display };
    });
  }, []);

  const handlePercent = useCallback(() => {
    setState((prev) => {
      const num = parseFloat(prev.display);
      if (isNaN(num)) return prev;
      return { ...prev, display: String(num / 100) };
    });
  }, []);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      const key = e.key;
      if (/^\d$/.test(key)) handleDigit(key);
      else if (key === ".") handleDot();
      else if (key === "+" || key === "-" || key === "*" || key === "/") handleOperator(key);
      else if (key === "Enter" || key === "=") handleEquals();
      else if (key === "Escape") handleClear();
      else if (key === "%") handlePercent();
      else if (key === "Backspace") {
        setState((prev) => {
          if (prev.hasResult || prev.waitingForOperand) return prev;
          if (prev.display.length <= 1) return { ...prev, display: "0" };
          return { ...prev, display: prev.display.slice(0, -1) };
        });
      }
    },
    [handleDigit, handleDot, handleOperator, handleEquals, handleClear, handlePercent]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  const onButton = (btn: { label: string; type: string; op?: string }) => {
    if (btn.type === "digit") handleDigit(btn.label);
    else if (btn.type === "dot") handleDot();
    else if (btn.type === "operator" && btn.op) handleOperator(btn.op);
    else if (btn.type === "equals") handleEquals();
    else if (btn.type === "clear") handleClear();
    else if (btn.type === "sign") handleSign();
    else if (btn.type === "percent") handlePercent();
  };

  const btnBase =
    "flex items-center justify-center rounded-2xl text-xl font-medium select-none active:scale-95 transition-transform cursor-pointer h-16";

  const btnStyle = (type: string) => {
    if (type === "operator") return `${btnBase} bg-primary text-white hover:bg-primary-hover`;
    if (type === "equals") return `${btnBase} bg-primary text-white hover:bg-primary-hover`;
    if (type === "clear" || type === "sign" || type === "percent")
      return `${btnBase} bg-card-bg border border-card-border hover:border-primary hover:text-primary text-muted`;
    return `${btnBase} bg-foreground text-white hover:opacity-90`;
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">
          トップ
        </Link>
        <span className="mx-2">/</span>
        <span>電卓</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">電卓ツール</h1>
      <p className="text-muted mb-8">
        四則演算・パーセント計算に対応したオンライン電卓です。キーボードでも操作できます。
      </p>

      <div className="flex flex-col sm:flex-row gap-6 items-start">
        <div className="bg-card-bg border border-card-border rounded-2xl p-4 w-full sm:w-72 shadow-sm">
          {/* Display */}
          <div className="bg-background rounded-xl p-4 mb-4 text-right min-h-[80px] flex flex-col justify-between">
            <div className="text-xs text-muted font-mono h-5 truncate text-right">
              {state.expression || "\u00A0"}
            </div>
            <div
              className={`font-mono font-semibold truncate transition-all ${
                formatDisplay(state.display).length > 9 ? "text-2xl" : "text-4xl"
              }`}
            >
              {formatDisplay(state.display)}
            </div>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-4 gap-2">
            {BUTTON_LAYOUT.map((row, ri) =>
              row.map((btn) => (
                <button
                  key={`${ri}-${btn.label}`}
                  onClick={() => onButton(btn)}
                  className={`${btnStyle(btn.type)} ${btn.wide ? "col-span-2" : ""}`}
                >
                  {btn.label}
                </button>
              ))
            )}
          </div>
        </div>

        {/* History */}
        {history.length > 0 && (
          <div className="flex-1 bg-card-bg border border-card-border rounded-2xl p-4 w-full">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-bold">計算履歴</h2>
              <button
                onClick={() => setHistory([])}
                className="text-xs text-muted hover:text-primary transition-colors"
              >
                クリア
              </button>
            </div>
            <ul className="space-y-1.5">
              {history.map((h, i) => (
                <li key={i} className="text-sm font-mono text-muted bg-background rounded-lg px-3 py-2">
                  {h}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">電卓ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>画面上のボタンをクリックするか、キーボードで数字と演算子を入力して計算できます。</p>
          <p>
            <strong>キーボード操作：</strong>数字・演算子（+・-・*・/）・Enterで計算・Escでクリア・Backspaceで一文字削除・%でパーセント。
          </p>
          <p>
            <strong>%ボタン：</strong>表示中の数値を100で割ります（例：50% → 0.5）。
          </p>
          <p>計算結果は履歴に最大10件保存されます。</p>
        </div>
      </section>


      <AffiliateSection slug="calculator" category="日常ツール" />
      <RelatedTools currentSlug="calculator" category="日常ツール" />
    </div>
  );
}
