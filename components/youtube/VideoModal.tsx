"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { YouTubeVideo } from "@/data/youtube";

interface VideoModalProps {
  video: YouTubeVideo | null;
  onClose: () => void;
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
  return (
    <AnimatePresence>
      {video && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-bg-primary/90 backdrop-blur-sm" />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-3xl"
          >
            <button
              onClick={onClose}
              className="absolute -top-10 right-0 text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Close video"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </button>

            <div
              className={`w-full ${video.isShort ? "max-w-sm mx-auto aspect-[9/16]" : "aspect-video"} bg-black rounded-lg overflow-hidden`}
            >
              <iframe
                src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
