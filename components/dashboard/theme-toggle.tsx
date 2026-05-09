"use client";

import {
  Moon,
  Sun,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const {
    resolvedTheme,
    setTheme,
  } = useTheme();

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent SSR mismatch
  if (!mounted) {
    return (
      <div className="h-12 w-12 rounded-2xl border border-white/10 bg-white/[0.03]" />
    );
  }

  const isDark =
    resolvedTheme === "dark";

  return (
    <button
      onClick={() =>
        setTheme(
          isDark
            ? "light"
            : "dark"
        )
      }
      className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] transition hover:bg-white/10"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-white" />
      ) : (
        <Moon className="h-5 w-5 text-black dark:text-white" />
      )}
    </button>
  );
}