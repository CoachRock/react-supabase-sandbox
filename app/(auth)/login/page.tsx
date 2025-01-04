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
    const checkSession = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      console.log('Current session:', session, 'Error:', error);
      
      if (session?.user) {
        console.log('User already authenticated, redirecting:', session.user.email);
        router.push('/');
      }
    };

    checkSession();
  }, [router]);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth state changed:', event, session?.user?.email);
      
      if (event === 'SIGNED_IN') {
        console.log('Sign in successful:', session?.user);
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
      if (event === 'INITIAL_SESSION') {
        console.log('Initial session:', session);
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
            console.error('Auth error details:', {
              message: error.message,
              status: error.status,
              name: error.name,
              stack: error.stack
            });
            toast.error(error.message);
          }}
          localization={{
            variables: {
              sign_in: {
                email_label: 'Email address',
                password_label: 'Password',
                button_label: 'Sign in',
                loading_button_label: 'Signing in...',
              }
            }
          }}
        />
      </Card>
    </div>
  );
}