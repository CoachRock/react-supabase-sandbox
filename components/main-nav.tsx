"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { UserProfile } from "@/components/user-profile";
import { ThemeToggle } from "@/components/theme-toggle";
import { navItems } from "@/components/nav-items";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface MainNavProps {
  className?: string;
  onNavigate?: () => void;
  showBranding?: boolean;
}

export function MainNav({ className, onNavigate, showBranding = true }: MainNavProps) {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const logoSrc = theme === 'dark'
    ? "https://zzyxcgdfpkkdvtmvazos.supabase.co/storage/v1/object/public/app-branding/alpha_interview_blue_white_logo_for_blackbg_320w.png?t=2024-11-19T22%3A31%3A02.160Z"
    : "https://zzyxcgdfpkkdvtmvazos.supabase.co/storage/v1/object/public/app-branding/alpha_interview_color_logo_for_whitebg_320w.png?t=2024-11-19T22%3A42%3A19.344Z";

  return (
    <div className={cn("flex flex-col border-r bg-card h-full", className)}>
      <div className="flex flex-col h-full overflow-hidden">
        {showBranding && (
          <div className="px-6 mb-6 pt-6">
            <Link href="/" onClick={onNavigate}>
              <Image
                src={logoSrc}
                alt="Alpha Logo"
                width={320}
                height={73}
                className="w-full h-auto"
                priority
              />
            </Link>
          </div>
        )}
        <div className="flex-1 px-4 overflow-y-auto">
          <nav className="space-y-2">
            {navItems.map((route) => (
              <Button
                key={route.href}
                variant={pathname === route.href ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start gap-2",
                  pathname === route.href && "bg-secondary"
                )}
                asChild
                onClick={onNavigate}
              >
                <Link href={route.href}>
                  <route.icon className="h-4 w-4" />
                  {route.label}
                </Link>
              </Button>
            ))}
          </nav>
        </div>
        <div className="mt-auto border-t">
          <ThemeToggle />
          <UserProfile onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
}