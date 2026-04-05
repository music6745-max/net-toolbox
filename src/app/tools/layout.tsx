import { ShareButtons } from "@/components/ShareButtons";
import { RelatedGuides } from "@/components/RelatedGuides";

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <div className="max-w-3xl mx-auto px-4 pb-10">
        <RelatedGuides />
        <ShareButtons />
      </div>
    </>
  );
}
