"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useAuth } from "@/components/auth-provider";

interface UserProfileProps {
  onNavigate?: () => void;
}

export function UserProfile({ onNavigate }: UserProfileProps) {
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      toast.success("Successfully logged out");
    } catch (error) {
      console.error("Error logging out:", error);
      toast.error("Error logging out");
    }
  };

  if (!user) return null;

  return (
    <div className="border-t p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Link 
        to="/user-profile" 
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
          className="h-8 w-8 hover:bg-destructive hover:text-destructive-foreground"
          onClick={(e) => {
            e.preventDefault();
            handleLogout();
          }}
          title="Logout"
        >
          <LogOut className="h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
}