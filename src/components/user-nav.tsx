"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function UserNav() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2 px-4 py-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-primary h-8 w-8" />
        <div>
          <p className="text-sm font-medium">Steve Rock</p>
          <p className="text-xs text-muted-foreground">Hiring Manager Admin</p>
        </div>
      </div>
    </div>
  );
}