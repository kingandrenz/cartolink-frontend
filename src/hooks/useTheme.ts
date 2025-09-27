"use client";

import { useEffect, useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function useTheme() {
  const [theme, setTheme] = useLocalStorage<"light" | "dark">("theme", "dark");
  const [mounted, setMounted] = useState(false);

  // ✅ Mark component as mounted (avoid hydration mismatch)
  useEffect(() => setMounted(true), []);

  // ✅ Add/remove `dark` class based on theme
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    root.setAttribute("data-theme", theme);
  }, [theme, mounted]);

  return [theme, setTheme, mounted] as const;
}
