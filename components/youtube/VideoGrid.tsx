"use client";

import { useState } from "react";
import StaggerContainer from "@/components/motion/StaggerContainer";
import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";
import type { YouTubeVideo } from "@/data/youtube";

interface VideoGridProps {
  videos: YouTubeVideo[];
}

export default function VideoGrid({ videos }: VideoGridProps) {
  const [activeVideo, setActiveVideo] = useState<YouTubeVideo | null>(null);

  return (
    <>
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-6 pb-20">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            onPlay={setActiveVideo}
          />
        ))}
      </StaggerContainer>

      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </>
  );
}
