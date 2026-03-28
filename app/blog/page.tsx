import type { Metadata } from "next";
import { fetchBlogPosts } from "@/lib/rss";
import PageHeader from "@/components/layout/PageHeader";
import PageTransition from "@/components/layout/PageTransition";
import BlogPostList from "@/components/blog/BlogPostList";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on consciousness, philosophy, and the human experience — from birmiktarfikir.",
};

export default async function BlogPage() {
  const posts = await fetchBlogPosts();

  return (
    <PageTransition>
      <PageHeader titleKey="blog.title" subtitleKey="blog.subtitle" />
      <BlogPostList posts={posts} />
    </PageTransition>
  );
}
