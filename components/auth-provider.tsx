"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { supabase } from "@/integrations/supabase/client";
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import type { User } from "@supabase/supabase-js";
import { toast } from "sonner";

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

const publicRoutes = ['/login', '/reset-password', '/update-password'];

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // Check active session
        const { data: { session } } = await supabase.auth.getSession();
        setUser(session?.user ?? null);
        console.log('Initial session check:', session?.user?.email);
      } catch (error) {
        console.error('Error checking session:', error);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth state changed:', event, session?.user?.email);
      setUser(session?.user ?? null);
      
      if (event === 'SIGNED_IN') {
        toast.success('Successfully signed in!');
        router.refresh();
        router.push('/');
      }
      if (event === 'SIGNED_OUT') {
        toast.success('Successfully signed out!');
        router.refresh();
        router.push('/login');
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router]);

  // Route protection
  useEffect(() => {
    if (!loading) {
      const isPublicRoute = publicRoutes.includes(pathname);
      
      if (!user && !isPublicRoute) {
        console.log('Redirecting to login from:', pathname);
        router.push('/login');
      }
      
      if (user && isPublicRoute) {
        console.log('Redirecting to home from:', pathname);
        router.push('/');
      }
    }
  }, [user, loading, pathname, router]);

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      router.push('/login');
    } catch (error) {
      console.error('Error signing out:', error);
      toast.error('Error signing out. Please try again.');
    }
  };

  // Show auth UI for login route
  if (!user && pathname === '/login') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold">
              Welcome to Alpha Interview
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
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

  // Show loading state
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