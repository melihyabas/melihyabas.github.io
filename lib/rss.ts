import { stripHtml, truncate, formatDate } from "./utils";

export interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  formattedDate: string;
  excerpt: string;
  categories?: string[];
}

const RSS_URL =
  "https://birmiktarfikir.blogspot.com/feeds/posts/default?alt=rss";

function normalizeCategories(raw: unknown): string[] {
  if (raw == null) return [];
  const list = Array.isArray(raw) ? raw : [raw];
  return list.map((c) => {
    if (typeof c === "string") return c;
    if (c && typeof c === "object" && "_" in c) {
      return String((c as { _: string })._);
    }
    return String(c);
  });
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    const Parser = (await import("rss-parser")).default;
    const parser = new Parser();
    const feed = await parser.parseURL(RSS_URL);

    const posts: BlogPost[] = (feed.items || []).map((item) => ({
      title: String(item.title ?? "Untitled"),
      link: String(item.link ?? RSS_URL),
      pubDate: String(item.pubDate ?? ""),
      formattedDate: item.pubDate ? formatDate(String(item.pubDate)) : "",
      excerpt: truncate(
        stripHtml(
          String(item.contentSnippet ?? item.content ?? "")
        ),
        150
      ),
      categories: normalizeCategories(item.categories),
    }));

    return JSON.parse(JSON.stringify(posts)) as BlogPost[];
  } catch {
    return [];
  }
}
