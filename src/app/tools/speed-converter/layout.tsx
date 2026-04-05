import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "速度変換 - 無料オンラインツール",
  description: "km/h、mph、m/s、ノットなどの速度単位を相互変換します。登録不要・無料でブラウザ上で使えます。",
  alternates: {
    canonical: "https://net-toolbox.jp/tools/speed-converter",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
