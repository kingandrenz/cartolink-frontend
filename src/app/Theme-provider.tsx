"use client";

import useTheme from "@/hooks/useTheme";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, , mounted] = useTheme();

  if (!mounted) return null;

  return <div className={theme}>{children}</div>;
}
