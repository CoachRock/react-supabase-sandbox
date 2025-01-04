import { Card } from '@/components/ui/card';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from "@/integrations/supabase/client";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useAuth } from '@/components/auth/auth-provider';
import { PageHeader } from '@/components/page-header';

export default function LoginPage() {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    // If user is already authenticated, redirect to dashboard
    if (user) {
      navigate('/', { replace: true });
    }
  }, [user, navigate]);

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
          redirectTo={window.location.origin}
        />
      </Card>
    </div>
  );
}