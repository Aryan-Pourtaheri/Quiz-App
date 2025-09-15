import Link from "next/link";
import { useContext } from "react";

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-8 bg-[#1e293b] shadow-md fixed top-0 left-0 z-10">
      <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-[#fbbf24]">
        <span>Quiz System</span>
      </Link>
      <div className="flex items-center gap-4">
        <Link href="/login" className="px-4 py-2 rounded bg-[#fbbf24] text-[#1e293b] font-medium hover:bg-yellow-400 transition">Login</Link>
      </div>
    </nav>
  );
}


export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e293b] via-[#3b82f6] to-[#fbbf24] flex flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col items-center justify-center pt-32 pb-16 px-4">
        <div className="bg-white/90 rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-6 text-[#1e293b]">Login</h2>
          <form className="w-full flex flex-col gap-4">
            <input type="email" placeholder="Email" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]" />
            <input type="password" placeholder="Password" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]" />
            <button type="submit" className="w-full py-2 rounded bg-[#fbbf24] text-[#1e293b] font-bold hover:bg-yellow-400 transition">Login</button>
          </form>
          <p className="mt-4 text-sm text-gray-700">Don&apos;t have an account? <Link href="/signup" className="text-[#3b82f6] font-semibold hover:underline">Sign Up</Link></p>
        </div>
      </main>
    </div>
  );
}
