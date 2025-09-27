// "use client";

// import useTheme from "@/hooks/useTheme";

// export default function ThemeProvider({ children }: { children: React.ReactNode }) {
//   const [theme, , mounted] = useTheme();

//   if (!mounted) return null;

//   return <div className={theme}>{children}</div>;
// }


"use client";

import useTheme from "@/hooks/useTheme";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, , mounted] = useTheme();

  if (!mounted) {
    // Render a placeholder container with no theme to avoid mismatch
    return <div suppressHydrationWarning>{children}</div>;
  }

  return <div className={theme}>{children}</div>;
}
