"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <Monitor className="h-4 w-4" />
          <span className="text-sm font-medium">Screen Mode</span>
        </div>
        <div className="h-8 w-16" />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between px-4 py-2 ml-4">
      <div className="flex items-center gap-2">
        <Monitor className="h-4 w-4" />
        <span className="text-sm font-medium">Screen Mode</span>
      </div>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="relative h-8 w-16 rounded-full bg-secondary transition-colors hover:bg-secondary/80"
        role="switch"
        aria-checked={theme === "dark"}
      >
        <div
          className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm transition-all duration-200 ${
            theme === "dark" ? "translate-x-8" : "translate-x-0"
          }`}
        >
          {theme === "dark" ? (
            <Moon className="h-4 w-4 text-gray-900" />
          ) : (
            <Sun className="h-4 w-4 text-gray-900" />
          )}
        </div>
      </button>
    </div>
  );
}