"use client";

import { useState } from "react";
import Link from "next/link";

type LicenseType = "MIT" | "Apache-2.0" | "GPL-3.0" | "BSD-2-Clause" | "BSD-3-Clause" | "ISC" | "MPL-2.0";

const LICENSE_INFO: Record<LicenseType, { label: string; description: string; permissions: string[]; limitations: string[] }> = {
  "MIT": {
    label: "MIT License",
    description: "最も広く使われているシンプルなライセンス。商用利用・改変・再配布・私的使用が自由に可能。",
    permissions: ["商用利用", "改変", "配布", "私的使用"],
    limitations: ["保証なし", "責任制限"],
  },
  "Apache-2.0": {
    label: "Apache License 2.0",
    description: "MITに加えて特許権の明示的な許諾条項を含む。大企業でも安心して採用できる。",
    permissions: ["商用利用", "改変", "配布", "特許使用", "私的使用"],
    limitations: ["商標使用不可", "責任制限", "保証なし"],
  },
  "GPL-3.0": {
    label: "GNU GPL v3.0",
    description: "コピーレフトライセンス。派生物も同じGPLライセンスでの公開が義務付けられる。",
    permissions: ["商用利用", "改変", "配布", "特許使用", "私的使用"],
    limitations: ["同一ライセンス義務", "ソース開示義務", "保証なし"],
  },
  "BSD-2-Clause": {
    label: "BSD 2-Clause License",
    description: "シンプルで寛容なライセンス。著作権表示と免責事項の保持のみ必要。",
    permissions: ["商用利用", "改変", "配布", "私的使用"],
    limitations: ["保証なし", "責任制限"],
  },
  "BSD-3-Clause": {
    label: "BSD 3-Clause License",
    description: "BSD 2-Clauseに著者名の宣伝利用禁止条項を追加したライセンス。",
    permissions: ["商用利用", "改変", "配布", "私的使用"],
    limitations: ["著者名の無断使用禁止", "保証なし", "責任制限"],
  },
  "ISC": {
    label: "ISC License",
    description: "MITと機能的に同等の非常にシンプルなライセンス。Node.jsのnpmパッケージで広く使用。",
    permissions: ["商用利用", "改変", "配布", "私的使用"],
    limitations: ["保証なし", "責任制限"],
  },
  "MPL-2.0": {
    label: "Mozilla Public License 2.0",
    description: "ファイル単位のコピーレフト。改変したファイルのソース公開義務があるが、プロプライエタリとの組み合わせも可能。",
    permissions: ["商用利用", "改変", "配布", "特許使用", "私的使用"],
    limitations: ["同一ライセンス（ファイル単位）", "保証なし"],
  },
};

const generateLicenseText = (type: LicenseType, year: string, name: string): string => {
  const y = year || new Date().getFullYear().toString();
  const n = name || "Your Name";

  switch (type) {
    case "MIT":
      return `MIT License

Copyright (c) ${y} ${n}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;

    case "Apache-2.0":
      return `Apache License
Version 2.0, January 2004
http://www.apache.org/licenses/

Copyright ${y} ${n}

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`;

    case "GPL-3.0":
      return `GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007

Copyright (C) ${y} ${n}

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.`;

    case "BSD-2-Clause":
      return `BSD 2-Clause License

Copyright (c) ${y}, ${n}
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`;

    case "BSD-3-Clause":
      return `BSD 3-Clause License

Copyright (c) ${y}, ${n}
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
   contributors may be used to endorse or promote products derived from
   this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`;

    case "ISC":
      return `ISC License

Copyright (c) ${y}, ${n}

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.`;

    case "MPL-2.0":
      return `Mozilla Public License Version 2.0

Copyright (c) ${y} ${n}

This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at https://mozilla.org/MPL/2.0/.`;
  }
};

export default function LicenseGeneratorPage() {
  const [licenseType, setLicenseType] = useState<LicenseType>("MIT");
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [authorName, setAuthorName] = useState("");
  const [copied, setCopied] = useState(false);

  const output = generateLicenseText(licenseType, year, authorName);
  const info = LICENSE_INFO[licenseType];

  const copyOutput = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>ライセンス生成</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">ライセンス生成ツール</h1>
      <p className="text-muted mb-8">
        オープンソースライセンスの種類・年号・著者名を入力してLICENSEファイルのテキストを生成します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">ライセンスの種類</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {(Object.keys(LICENSE_INFO) as LicenseType[]).map((t) => (
              <button
                key={t}
                onClick={() => setLicenseType(t)}
                className={`border rounded-lg py-2 px-3 text-sm font-medium transition-colors text-left ${licenseType === t ? "bg-primary text-white border-primary" : "border-card-border hover:border-primary text-muted"}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* License info */}
        <div className="bg-background rounded-lg p-3">
          <p className="text-sm font-medium mb-1">{info.label}</p>
          <p className="text-xs text-muted mb-2">{info.description}</p>
          <div className="flex gap-4 text-xs">
            <div>
              <span className="text-green-600 font-medium">許可: </span>
              {info.permissions.join("・")}
            </div>
            <div>
              <span className="text-red-500 font-medium">制限: </span>
              {info.limitations.join("・")}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium mb-1">年号</label>
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              min="1970"
              max="2100"
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">著者名</label>
            <input
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              placeholder="Your Name"
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-base font-bold">生成されたライセンス</h2>
          <button onClick={copyOutput} className="text-sm text-primary hover:text-primary-hover font-medium">
            {copied ? "コピー済み" : "コピー"}
          </button>
        </div>
        <pre className="bg-card-bg border border-card-border rounded-xl p-4 text-xs font-mono overflow-x-auto max-h-96 overflow-y-auto whitespace-pre">
          {output}
        </pre>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. ライセンスの種類を選択します。各ライセンスの説明・許可事項・制限事項が表示されます。</p>
          <p>2. 年号と著者名を入力します（省略するとデフォルト値が使用されます）。</p>
          <p>3. 「コピー」ボタンで内容をコピーし、プロジェクトのLICENSEファイルに貼り付けてください。</p>
          <p>※ ライセンスの選択は法的な判断を伴います。不明な場合は専門家にご相談ください。</p>
        </div>
      </section>
    </div>
  );
}
