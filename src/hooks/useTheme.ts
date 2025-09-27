"use client";

import { useEffect, useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function useTheme() {
  // Persist theme with localStorage (defaults to "dark")
  const [theme, setTheme] = useLocalStorage<"light" | "dark">("theme", "dark");
  const [mounted, setMounted] = useState(false);

  // Ensure mounted to avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  // Sync theme with <html> tag
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    root.setAttribute("data-theme", theme);

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme, mounted]);

  return [theme, setTheme] as const;
}
