import { ThemeProvider } from '@/components/theme-provider'
import { AuthProvider } from '@/components/auth-provider'
import { DashboardLayout } from '@/components/layouts/dashboard-layout'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alpha Interview',
  description: 'Virtual Interview Management System',
  icons: {
    icon: 'https://zzyxcgdfpkkdvtmvazos.supabase.co/storage/v1/object/public/app-branding/favicon.png?t=2024-11-19T23%3A17%3A15.812Z',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <DashboardLayout>{children}</DashboardLayout>
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}