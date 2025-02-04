import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nio Equipment and Engineering - Material Handling Equipment Manufacturer',
  description: 'Leading manufacturer of scissor lifts, goods lifts, mobile dock ramps, and dock levelers in Pune, Maharashtra. High-quality material handling solutions since 2021.',
  keywords: 'material handling equipment, scissor lifts, goods lifts, mobile dock ramps, dock levelers, climbing trolleys, industrial stackers, hand pallet trucks, hydraulic lifting tables, Pune, Maharashtra',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}