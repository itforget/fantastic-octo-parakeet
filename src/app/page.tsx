import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md fixed w-full top-0">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">My App</h1>
          <nav className="flex space-x-4">
            <Link
              href="/login"
              className="text-blue-500 hover:text-blue-700 font-medium transition"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="text-green-500 hover:text-green-700 font-medium transition"
            >
              Register
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-screen pt-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Home Page</h1>
        <p className="text-lg text-gray-600">Welcome to our application!</p>
      </main>
    </div>
  );
}
