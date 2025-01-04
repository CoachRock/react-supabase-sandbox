"use client";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { UserProfile } from "@/components/user-profile";
import { ThemeToggle } from "@/components/theme-toggle";
import { navItems } from "./nav-items";

interface MainNavProps {
  className?: string;
  onNavigate?: () => void;
  showBranding?: boolean;
}

export function MainNav({ className, onNavigate, showBranding = true }: MainNavProps) {
  const location = useLocation();

  return (
    <div className={cn("flex flex-col border-r bg-card h-full", className)}>
      <div className="flex flex-col h-full overflow-hidden">
        {showBranding && (
          <div className="px-6 mb-6 pt-6">
            <Link to="/" onClick={onNavigate}>
              <img
                src="/alpha-logo.svg"
                alt="Alpha Logo"
                className="w-full h-auto"
              />
            </Link>
          </div>
        )}
        <div className="flex-1 px-4 overflow-y-auto">
          <nav className="space-y-2">
            {navItems.map((route) => (
              <Button
                key={route.href}
                variant={location.pathname === route.href ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start gap-2",
                  location.pathname === route.href && "bg-secondary"
                )}
                asChild
                onClick={onNavigate}
              >
                <Link to={route.href}>
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