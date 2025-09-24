'use client';
import { useState } from "react";
import AuthLayout from "../AuthLayout";
import { handleLoginSubmit } from "./handleLogin"; // your existing function
import Link from "next/link";

export default function LoginPage() {
  const [user, setUser] = useState({ email: "", password: "" });

  const resetForm = () => setUser({ email: "", password: "" });

  return (
    <AuthLayout type="login">
      <h2 className="text-3xl font-bold mb-6 text-[var(--text-color)]">Login</h2>
      <form onSubmit={(e) => handleLoginSubmit(e, user, resetForm)} className="w-full flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={e => setUser({ ...user, email: e.target.value })}
          className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={e => setUser({ ...user, password: e.target.value })}
          className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
          required
        />
        <button
          type="submit"
          className="w-full py-3 rounded bg-[#fbbf24] text-[#1e293b] font-bold hover:bg-yellow-400 transition"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-700">
        Don&apos;t have an account? <Link href="/components/auth/signup" className="text-[#3b82f6] font-semibold hover:underline">Sign Up</Link>
      </p>
    </AuthLayout>
  );
}
