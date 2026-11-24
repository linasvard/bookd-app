import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import Nav from '@/components/nav';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Book'd | Search and track your reading",
  description: 'Search and track your reading.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${geistSans.variable}  h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <header>
          <div className="mx-auto flex items-center justify-between px-4 py-4">
            <div className="flex items-center gap-8">
              <span className="text-lg font-semibold">📚 Bookd</span>
              <Nav />
            </div>

            <input
              type="text"
              placeholder="Search..."
              className="rounded-md border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 dark:border-zinc-800 dark:bg-black dark:text-zinc-50 dark:placeholder:text-zinc-600"
            />
          </div>
        </header>
        <main className="flex flex-1 w-full flex-col items-center justify-between px-4 sm:items-start">
          {children}
        </main>
      </body>
    </html>
  );
}
