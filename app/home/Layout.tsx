import React from 'react';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="bg-indigo-700 text-white p-4">
        <h1 className="text-3xl font-bold">Welcome Home!</h1>
      </header>
      <main>{children}</main>
    </>
  );
}
