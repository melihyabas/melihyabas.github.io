"use client";

import StaggerContainer from "@/components/motion/StaggerContainer";
import BlogPostCard from "./BlogPostCard";
import type { BlogPost } from "@/lib/rss";
import { useLanguage } from "@/lib/i18n";

interface BlogPostListProps {
  posts: BlogPost[];
}

export default function BlogPostList({ posts }: BlogPostListProps) {
  const { t } = useLanguage();

  if (posts.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-text-secondary text-body mb-4">
          {t("blog.empty")}
        </p>
        <a
          href="https://birmiktarfikir.blogspot.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-primary hover:text-accent-hover transition-colors"
        >
          {t("blog.visitDirect")} &rarr;
        </a>
      </div>
    );
  }

  return (
    <StaggerContainer className="flex flex-col gap-6 max-w-3xl mx-auto px-6 pb-20">
      {posts.map((post) => (
        <BlogPostCard key={post.link} post={post} />
      ))}
    </StaggerContainer>
  );
}
