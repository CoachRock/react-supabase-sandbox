# Authentication Flow Documentation

## Overview
This document outlines the authentication flow implementation in the Alpha Interview application.

## Database Schema

### Profiles Table
```sql
Table: profiles
- id (uuid, PK, FK to auth.users)
- email (text)
- full_name (text, nullable)
- avatar_url (text, nullable)
- role (text, default: 'user')
- created_at (timestamp with timezone)
- updated_at (timestamp with timezone)
```

## Authentication Flow

### 1. Initial Access (/)
- Unauthenticated users are automatically redirected to /login
- Authenticated users see the dashboard
- Protected by useAuth hook and client-side redirects

### 2. Login Page (/login)
- Handles both login and signup through Supabase Auth UI
- Redirects authenticated users to dashboard
- Shows success/error toasts for user feedback
- Supports email/password authentication

### 3. Protected Routes
All routes except /login are protected and:
- Check for authentication status
- Redirect to login if no session exists
- Show loading state during auth check

### 4. Session Management
- Uses AuthProvider context for global auth state
- Handles auth state changes via Supabase onAuthStateChange
- Manages user profile data synchronization

### 5. Logout Flow
- Accessible via user profile menu
- Clears session
- Redirects to login page
- Shows confirmation toast

## Row Level Security (RLS)
Profiles table is protected by the following policies:
1. Select: Users can only view their own profile (except admins)
2. Insert: Users can only insert their own profile
3. Update: Users can only update their own profile
4. Delete: Users can only delete their own profile

## Implementation Details

### Key Components
1. `AuthProvider` (/components/auth-provider.tsx)
   - Manages global auth state
   - Handles session persistence
   - Provides auth context to app

2. `LoginPage` (/app/(auth)/login/page.tsx)
   - Handles authentication UI
   - Manages redirects
   - Shows success/error feedback

3. `UserProfile` (/components/user-profile.tsx)
   - Displays user info
   - Provides logout functionality
   - Shows role-specific UI

### Protected Routes Implementation
```typescript
// Example of protected route pattern
"use client";
import { useAuth } from '@/components/auth-provider';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) return null;

  return <YourComponent />;
}
```

## Error Handling
- Authentication errors show in toast notifications
- Failed redirects are caught and handled
- Network errors show appropriate feedback
- Invalid auth states trigger automatic logout

## Future Improvements
1. Implement password reset flow
2. Add social authentication providers
3. Add multi-factor authentication
4. Enhance profile management
5. Add session timeout handling
6. Implement remember me functionality

## Testing Authentication
1. Disable email verification in Supabase dashboard for development
2. Test login/logout flow
3. Verify protected route access
4. Check profile data persistence
5. Verify role-based access