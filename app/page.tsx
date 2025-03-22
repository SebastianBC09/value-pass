import Link from "next/dist/client/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16">
      <p className="text-lg text-gray-700 max-w-2xl mb-8">
        Explore interactive demos to understand how pass by reference and pass by value work in different programming languages.
        Experiment with code examples and see a live visualization of memory operations.
      </p>
      <Link
        href="/demo"
        className="px-6 py-3 bg-blue-600 text-white rounded-md text-lg hover:bg-blue-700 transition"
      >
        Go to Demo
      </Link>
    </div>
  );
}
