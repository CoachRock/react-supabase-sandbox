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
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        console.log('Current session check:', {
          session: session,
          user: session?.user,
          error: error,
          timestamp: new Date().toISOString(),
          authConfig: {
            endpoint: supabase.auth.api?.url,
            headers: supabase.auth.api?.headers,
            project: supabase.auth.api?.projectId,
            version: supabase.auth.api?.version,
          }
        });
        
        if (session?.user) {
          console.log('User already authenticated, redirecting:', session.user.email);
          router.push('/');
        }
      } catch (error) {
        console.error('Session check error:', {
          error: error,
          stack: error instanceof Error ? error.stack : undefined,
          timestamp: new Date().toISOString(),
          context: 'Initial session check',
          details: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    };

    checkSession();
  }, [router]);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth state changed:', {
        event: event,
        user: session?.user,
        timestamp: new Date().toISOString(),
        sessionDetails: session ? {
          accessToken: !!session.access_token,
          refreshToken: !!session.refresh_token,
          expiresAt: session.expires_at,
          provider: session.user?.app_metadata?.provider,
          authConfig: {
            endpoint: supabase.auth.api?.url,
            projectId: supabase.auth.api?.projectId,
          }
        } : null
      });
      
      if (event === 'SIGNED_IN') {
        console.log('Sign in successful:', {
          user: session?.user,
          timestamp: new Date().toISOString()
        });
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
        console.log('Initial session:', {
          session: session,
          timestamp: new Date().toISOString()
        });
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
              stack: error.stack,
              timestamp: new Date().toISOString(),
              requestDetails: {
                url: window.location.href,
                userAgent: navigator.userAgent,
                authProvider: 'email',
                supabaseUrl: supabase.auth.api?.url,
                supabaseProject: supabase.auth.api?.projectId,
                supabaseVersion: supabase.auth.api?.version
              }
            });
            toast.error(error.message || 'An error occurred during authentication');
          }}
          localization={{
            variables: {
              sign_in: {
                email_label: 'Email address',
                password_label: 'Password',
                button_label: 'Sign in',
                loading_button_label: 'Signing in...',
                email_input_placeholder: 'Enter your email',
                password_input_placeholder: 'Enter your password'
              }
            }
          }}
        />
      </Card>
    </div>
  );
}