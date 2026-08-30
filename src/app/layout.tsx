import type { Metadata } from 'next';
import { Instrument_Sans } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import './globals.css';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Guglex Technologies | Payments & Product Engineering',
    template: '%s | Guglex Technologies',
  },
  description:
    'Guglex Technologies designs and ships payment products, digital platforms, and software infrastructure for businesses across Africa and beyond.',
  keywords:
    'Guglex Technologies, payments, fintech, Ewale, Gyepayments, software development, Ghana, Africa',
  icons: {
    icon: [
      { url: '/favicon/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon.ico', sizes: 'any' },
      { url: '/favicon/icon1.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [{ url: '/favicon/apple-icon.png', sizes: '180x180' }],
  },
  manifest: '/favicon/manifest.json',
  other: {
    'facebook-domain-verification': 'q4ga7k3y5i0busmqpm7744flbxvo67',
  },
};

const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");var d=t==="dark"||(t!=="light"&&t!=="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches)||((!t||t==="system")&&window.matchMedia("(prefers-color-scheme: dark)").matches);var r=document.documentElement;r.classList.toggle("dark",d);r.style.colorScheme=d?"dark":"light"}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(instrumentSans.variable)} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider>
          <TooltipProvider>
            {children}
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
