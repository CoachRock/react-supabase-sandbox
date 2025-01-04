"use client";

import { PageHeader } from '@/components/page-header';
import { Card } from '@/components/ui/card';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from "@/integrations/supabase/client";

export default function LoginPage() {
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
        />
      </Card>
    </div>
  );
}