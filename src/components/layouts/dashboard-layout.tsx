"use client";

import { MainNav } from "@/components/main-nav";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogTitle } from "@radix-ui/react-dialog";
import { LoadingIndicator } from "@/components/loading-indicator";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    setMounted(true);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (!mounted) {
    return null;
  }

  const logoSrc = theme === 'dark'
    ? "https://zzyxcgdfpkkdvtmvazos.supabase.co/storage/v1/object/public/app-branding/alpha_interview_blue_white_logo_for_blackbg_320w.png?t=2024-11-19T22%3A31%3A02.160Z"
    : "https://zzyxcgdfpkkdvtmvazos.supabase.co/storage/v1/object/public/app-branding/alpha_interview_color_logo_for_whitebg_320w.png?t=2024-11-19T22%3A42%3A19.344Z";

  return (
    <div className="min-h-screen bg-background">
      <LoadingIndicator />
      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <MainNav className="w-64 fixed inset-y-0" showBranding={true} />
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="flex items-center h-full px-4 gap-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <VisuallyHidden>Toggle navigation menu</VisuallyHidden>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-64 flex flex-col">
              <DialogTitle asChild>
                <div className="px-6 py-4 border-b">
                  <Link href="/" onClick={() => setIsOpen(false)}>
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
              </DialogTitle>
              <div className="flex-1 overflow-y-auto">
                <MainNav className="w-full h-full" onNavigate={() => setIsOpen(false)} showBranding={false} />
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/">
            <Image
              src={logoSrc}
              alt="Alpha Logo"
              width={320}
              height={73}
              className="h-8 w-auto"
              priority
            />
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <main className="lg:pl-64">
        <div className="container mx-auto px-4 pt-20 pb-6 lg:py-8 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
}