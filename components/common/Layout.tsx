import React from 'react';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800 text-white p-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">
              Memory Visualization & Pass By Demo
            </span>
          </h1>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6 lg:p-8 max-w-7xl mx-auto w-full">{children}</main>
      <footer className="bg-gray-800 dark:bg-gray-950 text-white p-4 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-gray-300">&copy; {new Date().getFullYear()} Your App Name</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
