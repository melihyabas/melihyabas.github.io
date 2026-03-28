"use client";

import { motion } from "framer-motion";
import { staggerItemVariants } from "@/components/motion/StaggerContainer";
import { useLanguage } from "@/lib/i18n";
import type { BlogPost } from "@/lib/rss";

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const { t } = useLanguage();

  return (
    <motion.article variants={staggerItemVariants}>
      <a
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <div
          className="bg-bg-secondary border border-border/50 rounded-lg p-8
                     group-hover:border-accent-muted/50 transition-colors duration-300"
        >
          <h2 className="font-serif text-xl text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
            {post.title}
          </h2>
          <time className="text-text-tertiary text-sm block mb-4">
            {post.formattedDate}
          </time>
          {post.excerpt && (
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              {post.excerpt}
            </p>
          )}
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((cat) => (
                <span
                  key={cat}
                  className="text-xs text-accent-muted font-mono px-2 py-0.5 bg-bg-tertiary rounded"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}
          <span className="text-accent-primary text-sm inline-flex items-center gap-1">
            {t("blog.readOn")}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M3 7h8M8 4l3 3-3 3" />
            </svg>
          </span>
        </div>
      </a>
    </motion.article>
  );
}
