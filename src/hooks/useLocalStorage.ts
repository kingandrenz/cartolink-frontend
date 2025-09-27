"use client";

import { useState, useEffect } from "react";

const useLocalStorage = <T,>(
  key: string,
  defaultValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(defaultValue);

  // ✅ Load saved value after first mount
  useEffect(() => {
    if (typeof window === "undefined") return; // SSR guard
    try {
      const stored = window.localStorage.getItem(key);
      if (stored) {
        setValue(JSON.parse(stored));
      }
    } catch (err) {
      console.warn(`Error reading localStorage key "${key}":`, err);
    }
  }, [key]);

  // ✅ Save value whenever it changes
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.warn(`Error writing localStorage key "${key}":`, err);
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
