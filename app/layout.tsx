import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Memory Visualization App",
  description: "Interactive tool for understanding memory concepts in programming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}>
        <div className="flex flex-col min-h-screen">
          <header className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 text-white shadow-lg">
            <div className="container mx-auto px-4 py-5 flex justify-between items-center">
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                <span className="text-blue-200 dark:text-blue-300">Memory</span> Visualization & Pass By Demo
              </h1>
            </div>
          </header>

          {/* Added dark mode styling to main container */}
          <main className="flex-1 container mx-auto px-4 py-8 bg-white dark:bg-gray-900 transition-colors duration-300">
            {children}
          </main>

          <footer className="bg-gray-800 dark:bg-gray-950 text-white py-6">
            <div className="container mx-auto px-4 text-center">
              <p>&copy; {new Date().getFullYear()} Memory Visualization App</p>
              <p className="text-sm text-gray-400 mt-2">Educational tool for understanding memory concepts</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
