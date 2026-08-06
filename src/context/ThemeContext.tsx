import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "theme-light" | "theme-dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("gogia_theme");
      if (saved === "theme-dark") return "theme-dark";
    }
    return "theme-light"; // Light is default on load
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "theme-light") {
      root.classList.add("theme-light");
      root.classList.remove("theme-dark");
    } else {
      root.classList.add("theme-dark");
      root.classList.remove("theme-light");
    }
    localStorage.setItem("gogia_theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "theme-light" ? "theme-dark" : "theme-light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
