"use client";

import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

type Matrix = number[][];

function createMatrix(size: number): Matrix {
  return Array.from({ length: size }, () => Array(size).fill(0));
}

function addMatrices(a: Matrix, b: Matrix): Matrix {
  return a.map((row, i) => row.map((val, j) => val + b[i][j]));
}

function subtractMatrices(a: Matrix, b: Matrix): Matrix {
  return a.map((row, i) => row.map((val, j) => val - b[i][j]));
}

function multiplyMatrices(a: Matrix, b: Matrix): Matrix {
  const size = a.length;
  const result = createMatrix(size);
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      for (let k = 0; k < size; k++) {
        result[i][j] += a[i][k] * b[k][j];
      }
    }
  }
  return result;
}

function transposeMatrix(m: Matrix): Matrix {
  return m[0].map((_, i) => m.map((row) => row[i]));
}

function determinant(m: Matrix): number {
  const n = m.length;
  if (n === 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];
  let det = 0;
  for (let j = 0; j < n; j++) {
    const sub = m.slice(1).map((row) => [...row.slice(0, j), ...row.slice(j + 1)]);
    det += (j % 2 === 0 ? 1 : -1) * m[0][j] * determinant(sub);
  }
  return det;
}

function inverseMatrix(m: Matrix): Matrix | null {
  const det = determinant(m);
  if (det === 0) return null;
  const n = m.length;
  if (n === 2) {
    return [
      [m[1][1] / det, -m[0][1] / det],
      [-m[1][0] / det, m[0][0] / det],
    ];
  }
  // 3x3 cofactor method
  const cofactors = createMatrix(n);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const sub = m
        .filter((_, ri) => ri !== i)
        .map((row) => row.filter((_, ci) => ci !== j));
      cofactors[i][j] = ((i + j) % 2 === 0 ? 1 : -1) * determinant(sub);
    }
  }
  const adjugate = transposeMatrix(cofactors);
  return adjugate.map((row) => row.map((val) => val / det));
}

function formatNum(n: number): string {
  return Number.isInteger(n) ? String(n) : n.toFixed(4).replace(/\.?0+$/, "");
}

export default function Page() {
  const [size, setSize] = useState<2 | 3>(2);
  const [matA, setMatA] = useState<Matrix>(createMatrix(2));
  const [matB, setMatB] = useState<Matrix>(createMatrix(2));
  const [operation, setOperation] = useState<string>("add");
  const [result, setResult] = useState<string>("");

  const changeSize = (s: 2 | 3) => {
    setSize(s);
    setMatA(createMatrix(s));
    setMatB(createMatrix(s));
    setResult("");
  };

  const updateCell = (
    mat: "A" | "B",
    row: number,
    col: number,
    val: string
  ) => {
    const setter = mat === "A" ? setMatA : setMatB;
    const prev = mat === "A" ? matA : matB;
    const newMat = prev.map((r, ri) =>
      r.map((c, ci) => (ri === row && ci === col ? (val === "" || val === "-" ? 0 : Number(val)) : c))
    );
    setter(newMat);
  };

  const calculate = () => {
    let res: Matrix | number | null = null;
    let label = "";
    switch (operation) {
      case "add":
        res = addMatrices(matA, matB);
        label = "A + B =";
        break;
      case "subtract":
        res = subtractMatrices(matA, matB);
        label = "A - B =";
        break;
      case "multiply":
        res = multiplyMatrices(matA, matB);
        label = "A x B =";
        break;
      case "detA":
        res = determinant(matA);
        label = "det(A) =";
        break;
      case "detB":
        res = determinant(matB);
        label = "det(B) =";
        break;
      case "transposeA":
        res = transposeMatrix(matA);
        label = "A^T =";
        break;
      case "transposeB":
        res = transposeMatrix(matB);
        label = "B^T =";
        break;
      case "inverseA":
        res = inverseMatrix(matA);
        label = "A^(-1) =";
        if (res === null) { setResult("行列Aの逆行列は存在しません（行列式が0）。"); return; }
        break;
      case "inverseB":
        res = inverseMatrix(matB);
        label = "B^(-1) =";
        if (res === null) { setResult("行列Bの逆行列は存在しません（行列式が0）。"); return; }
        break;
    }
    if (typeof res === "number") {
      setResult(`${label} ${formatNum(res)}`);
    } else if (Array.isArray(res)) {
      const formatted = (res as Matrix)
        .map((row) => "[ " + row.map(formatNum).join(", ") + " ]")
        .join("\n");
      setResult(`${label}\n${formatted}`);
    }
  };

  const renderMatrix = (mat: Matrix, label: string, matKey: "A" | "B") => (
    <div>
      <label className="block text-sm font-medium mb-2">行列{label}</label>
      <div className="inline-block">
        {mat.map((row, ri) => (
          <div key={ri} className="flex gap-1 mb-1">
            {row.map((_, ci) => (
              <input
                key={ci}
                type="number"
                defaultValue={mat[ri][ci]}
                onChange={(e) => updateCell(matKey, ri, ci, e.target.value)}
                className="w-16 border border-card-border rounded px-2 py-1.5 text-sm text-center font-mono focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>行列計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">行列計算ツール</h1>
      <p className="text-muted mb-8">
        2x2、3x3行列の加算・減算・乗算・行列式・転置・逆行列を計算します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div className="flex gap-3">
          <button
            onClick={() => changeSize(2)}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${size === 2 ? "bg-primary text-white" : "bg-background"}`}
          >
            2x2
          </button>
          <button
            onClick={() => changeSize(3)}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${size === 3 ? "bg-primary text-white" : "bg-background"}`}
          >
            3x3
          </button>
        </div>

        <div className="flex flex-wrap gap-8">
          {renderMatrix(matA, "A", "A")}
          {renderMatrix(matB, "B", "B")}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">演算</label>
          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
            className="border border-card-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            <option value="add">A + B（加算）</option>
            <option value="subtract">A - B（減算）</option>
            <option value="multiply">A x B（乗算）</option>
            <option value="detA">det(A)（行列式）</option>
            <option value="detB">det(B)（行列式）</option>
            <option value="transposeA">A^T（転置）</option>
            <option value="transposeB">B^T（転置）</option>
            <option value="inverseA">A^(-1)（逆行列）</option>
            <option value="inverseB">B^(-1)（逆行列）</option>
          </select>
        </div>

        <button
          onClick={calculate}
          className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          計算する
        </button>

        {result && (
          <div>
            <span className="text-sm font-medium block mb-2">結果</span>
            <pre className="bg-background rounded-lg p-4 text-sm font-mono overflow-x-auto whitespace-pre-wrap">
              {result}
            </pre>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">行列計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>行列サイズ（2x2 / 3x3）を選び、行列A・Bの値を入力します。</p>
          <p>演算を選択して「計算する」ボタンを押すと結果が表示されます。</p>
          <p>行列式・転置・逆行列は単一の行列に対して計算されます。</p>
        </div>
      </section>

      <AffiliateSection slug="matrix-calculator" category="日常ツール" />


      <RelatedTools currentSlug="matrix-calculator" category="日常ツール" />
    </div>
  );
}
