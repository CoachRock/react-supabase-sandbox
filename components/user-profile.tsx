"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/components/auth-provider";

interface UserProfileProps {
  onNavigate?: () => void;
}

export function UserProfile({ onNavigate }: UserProfileProps) {
  const { user, signOut } = useAuth();

  if (!user) return null;

  return (
    <div className="border-t p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Link 
        href="/user-profile" 
        className="flex items-center gap-3 group"
        onClick={onNavigate}
      >
        <Avatar className="h-10 w-10 border-2 border-primary/10">
          <AvatarImage 
            src={user.user_metadata.avatar_url}
            alt={user.email || ""}
          />
          <AvatarFallback>
            {user.email?.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium leading-none truncate group-hover:text-blue-500 transition-colors">
            {user.email}
          </p>
          <p className="text-xs text-muted-foreground mt-1 truncate">
            {user.user_metadata.role || "User"}
          </p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={(e) => {
            e.preventDefault();
            signOut();
          }}
        >
          <LogOut className="h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
}