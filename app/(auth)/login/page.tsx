"use client";

import { PageHeader } from '@/components/page-header';
import { Card } from '@/components/ui/card';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from "@/integrations/supabase/client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useAuth } from '@/components/auth-provider';

export default function LoginPage() {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    // If user is already authenticated, redirect to dashboard
    if (user) {
      console.log('User already authenticated, redirecting:', user.email);
      router.push('/');
    }
  }, [user, router]);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('Auth state changed:', event, session?.user?.email);
      
      if (event === 'SIGNED_IN') {
        toast.success('Successfully signed in!');
        router.push('/');
        router.refresh();
      }
      if (event === 'USER_UPDATED') {
        console.log('User updated:', session?.user);
      }
      if (event === 'SIGNED_OUT') {
        console.log('User signed out');
      }
    });

    return () => subscription.unsubscribe();
  }, [router]);

  // Don't render login form if user is authenticated
  if (user) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md p-8 space-y-6">
        <PageHeader 
          heading="Welcome Back" 
          description="Sign in to your account to continue"
        />
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
          redirectTo={`${typeof window !== 'undefined' ? window.location.origin : ''}/`}
          onError={(error) => {
            console.error('Auth error:', error);
            toast.error(error.message);
          }}
        />
      </Card>
    </div>
  );
}