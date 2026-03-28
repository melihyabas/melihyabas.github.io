"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/navigation";
import { useLanguage } from "@/lib/i18n";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

export default function MobileDrawer({
  isOpen,
  onClose,
  pathname,
}: MobileDrawerProps) {
  const { t } = useLanguage();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg-primary/85 backdrop-blur-sm md:hidden"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed top-0 right-0 bottom-0 z-50 w-64 bg-bg-secondary border-l border-border/50 md:hidden"
          >
            <div className="flex justify-end p-6">
              <button
                onClick={onClose}
                className="text-text-secondary hover:text-text-primary transition-colors"
                aria-label="Close navigation menu"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <line x1="4" y1="4" x2="16" y2="16" />
                  <line x1="16" y1="4" x2="4" y2="16" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-2 px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`block py-3 text-lg font-serif transition-colors ${
                      isActive(link.href)
                        ? "text-accent-primary"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {t(link.labelKey)}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
