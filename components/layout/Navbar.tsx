"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "@/data/navigation";
import { useLanguage } from "@/lib/i18n";
import MobileDrawer from "./MobileDrawer";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { t } = useLanguage();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-bg-primary/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-lg text-text-primary hover:text-accent-primary transition-colors"
          >
            MY
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm tracking-wide group"
              >
                <span
                  className={
                    isActive(link.href)
                      ? "text-accent-primary"
                      : "text-text-secondary hover:text-text-primary transition-colors"
                  }
                >
                  {t(link.labelKey)}
                </span>
                {isActive(link.href) && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-accent-primary"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          <div className="flex md:hidden items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setDrawerOpen(true)}
              className="text-text-secondary hover:text-text-primary transition-colors p-2"
              aria-label="Open navigation menu"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <line x1="3" y1="5" x2="17" y2="5" />
                <line x1="3" y1="10" x2="17" y2="10" />
                <line x1="3" y1="15" x2="17" y2="15" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <MobileDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
