"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { supabase } from "@/integrations/supabase/client";
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import type { User } from "@supabase/supabase-js";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signOut: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);

        if (event === "SIGNED_IN") {
          router.refresh();
          router.push("/");
        }
        if (event === "SIGNED_OUT") {
          router.refresh();
          router.push("/login");
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [router]);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        // If no session and not on an auth page, redirect to login
        if (!session && 
            !pathname.startsWith("/login") && 
            !pathname.startsWith("/reset-password") && 
            !pathname.startsWith("/update-password")) {
          router.push("/login");
        }
      } catch (error) {
        console.error('Error checking auth status:', error);
        router.push("/login");
      }
    };

    checkAuth();
  }, [pathname, router]);

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      router.push("/login");
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // If on auth page and authenticated, redirect to home
  useEffect(() => {
    if (user && (
      pathname.startsWith("/login") || 
      pathname.startsWith("/reset-password") || 
      pathname.startsWith("/update-password")
    )) {
      router.push("/");
    }
  }, [user, pathname, router]);

  // Show auth UI if not authenticated and on login page
  if (!user && pathname.startsWith("/login")) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
              Welcome to Alpha Interview
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Please sign in to continue
            </p>
          </div>
          <div className="mt-8">
            <Auth
              supabaseClient={supabase}
              appearance={{ 
                theme: ThemeSupa,
                variables: {
                  default: {
                    colors: {
                      brand: '#3B82F6',
                      brandAccent: '#2563EB',
                    },
                  },
                },
              }}
              providers={[]}
              redirectTo={`${window.location.origin}/`}
            />
          </div>
        </div>
      </div>
    );
  }

  // Show loading state while checking auth
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};