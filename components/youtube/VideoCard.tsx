"use client";

import { motion } from "framer-motion";
import { staggerItemVariants } from "@/components/motion/StaggerContainer";
import type { YouTubeVideo } from "@/data/youtube";

interface VideoCardProps {
  video: YouTubeVideo;
  onPlay: (video: YouTubeVideo) => void;
}

export default function VideoCard({ video, onPlay }: VideoCardProps) {
  const isPlaceholder = video.id.startsWith("placeholder");
  const aspectClass = video.isShort ? "aspect-[9/16]" : "aspect-video";

  return (
    <motion.div variants={staggerItemVariants}>
      <motion.button
        onClick={() => !isPlaceholder && onPlay(video)}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className={`w-full ${aspectClass} rounded-lg overflow-hidden relative group
                   bg-bg-secondary border border-border/50 hover:border-accent-muted/50
                   transition-colors duration-300 cursor-pointer`}
        disabled={isPlaceholder}
      >
        {isPlaceholder ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-text-tertiary mb-3"
            >
              <rect x="2" y="2" width="20" height="20" rx="2" />
              <polygon points="10,8 16,12 10,16" fill="currentColor" />
            </svg>
            <span className="text-text-secondary text-sm font-serif">
              {video.title}
            </span>
            <span className="text-text-tertiary text-xs mt-1">
              {video.description}
            </span>
          </div>
        ) : (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-bg-primary/40 group-hover:bg-bg-primary/20 transition-colors flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-bg-primary/80 border border-accent-muted/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="text-accent-primary ml-0.5"
                >
                  <polygon points="4,2 14,8 4,14" />
                </svg>
              </div>
            </div>
          </>
        )}
      </motion.button>
      <div className="mt-3">
        <h3 className="text-text-primary text-sm font-serif">{video.title}</h3>
        <p className="text-text-tertiary text-xs mt-1">{video.publishedAt}</p>
      </div>
    </motion.div>
  );
}
