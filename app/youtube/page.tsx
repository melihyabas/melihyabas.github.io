import type { Metadata } from "next";
import { youtubeVideos } from "@/data/youtube";
import PageHeader from "@/components/layout/PageHeader";
import PageTransition from "@/components/layout/PageTransition";
import VideoGrid from "@/components/youtube/VideoGrid";

export const metadata: Metadata = {
  title: "YouTube",
  description:
    "Video content — shorts, clips, and moments captured in motion.",
};

export default function YouTubePage() {
  return (
    <PageTransition>
      <PageHeader titleKey="youtube.title" subtitleKey="youtube.subtitle" />
      <VideoGrid videos={youtubeVideos} />
    </PageTransition>
  );
}
