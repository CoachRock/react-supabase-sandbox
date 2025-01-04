import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hwmiwrstytxiwgazwlhc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3bWl3cnN0eXR4aXdnYXp3bGhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ0MDI5ODAsImV4cCI6MjAxOTk3ODk4MH0.GE-I5a4-Oza8g5NOtMjR3AMsxQVF1J8_5tKNCaAhV7Y';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    storageKey: 'alpha-interview-auth',
    storage: typeof window !== 'undefined' ? window.localStorage : undefined,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});