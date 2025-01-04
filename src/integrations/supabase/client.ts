import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hwmiwrstytxiwgazwlhc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3bWl3cnN0eXR4aXdnYXp3bGhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU5NTU2ODIsImV4cCI6MjA1MTUzMTY4Mn0.UpYjvnl-Rq4HZqx9Nhw8-ssV6ew-SOShQFeyTO8VATE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    storageKey: 'alpha-interview-auth',
    storage: typeof window !== 'undefined' ? window.localStorage : undefined,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});