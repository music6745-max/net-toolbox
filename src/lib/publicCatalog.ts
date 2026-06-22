import { tools, type Tool } from "@/lib/tools";
import { isIndexableToolSlug } from "@/lib/contentPolicy";

export function dedupeBySlug<T extends { slug: string }>(items: readonly T[]): T[] {
  const seen = new Set<string>();
  const result: T[] = [];

  for (const item of items) {
    if (seen.has(item.slug)) continue;
    seen.add(item.slug);
    result.push(item);
  }

  return result;
}

export function getPublicTools(items: readonly Tool[] = tools): Tool[] {
  return dedupeBySlug(items).filter((tool) => isIndexableToolSlug(tool.slug));
}

export const publicTools = getPublicTools();
