// "use client";

// import useTheme from "@/hooks/useTheme";

// export default function ThemeProvider({ children }: { children: React.ReactNode }) {
//   const [theme, , mounted] = useTheme();

//   if (!mounted) return null;

//   return <div className={theme}>{children}</div>;
// }


// src/components/ThemeProvider.tsx
"use client";

import React, { useEffect } from "react";
import useTheme from "@/hooks/useTheme";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, , mounted] = useTheme();

  // Ensure html class is set as soon as we mount (defensive; useTheme already does it)
  useEffect(() => {
    if (!mounted) return;
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme, mounted]);

  // Important: DO NOT return null on the server-first render.
  // Render a wrapper so server and client both produce the same DOM shape.
  // Use suppressHydrationWarning so React doesn't throw if attributes differ on hydration.
  return <div suppressHydrationWarning>{children}</div>;
}

