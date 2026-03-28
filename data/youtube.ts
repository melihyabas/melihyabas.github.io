export interface YouTubeVideo {
  id: string;
  title: string;
  description?: string;
  publishedAt: string;
  isShort: boolean;
}

export const youtubeVideos: YouTubeVideo[] = [
  {
    id: "khnIzjufEd8",
    title: "Ana Karakter Sendromu",
    publishedAt: "2026-03-28",
    isShort: true,
  },
  {
    id: "YSNVN2e888A",
    title: "Hayat, beklenilen adaleti vermez",
    publishedAt: "2026-03-28",
    isShort: true,
  },
  {
    id: "ya2qx3xibzg",
    title: "Yapay Zeka Distopyası",
    publishedAt: "2026-03-28",
    isShort: true,
  },
  {
    id: "16uCA13AYxQ",
    title: "Yapay Zeka Ütopyası",
    publishedAt: "2026-03-28",
    isShort: true,
  },
];
