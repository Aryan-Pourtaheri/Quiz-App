'use client';
import Link from "next/link";
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  type: "login" | "signup";
}

export default function AuthLayout({ children, type }: AuthLayoutProps) {
  const isLogin = type === "login";

  return (
    <div className="min-h-screen flex flex-col md:flex-row text-[var(--text-color)]">
      {/* Left side - Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 bg-[var(--background)] md:rounded-l-xl shadow-lg">

        <div className="w-full max-w-md">
          {children}
        </div>
        <p className="mt-14 text-sm text-[var(--text-color)] text-center">
          <Link href="/" className="text-[#3b82f6] font-semibold hover:underline">← Back to Home</Link>
        </p>
      </div>

      {/* Right side - Image & Info */}
      <div
        className={`flex-1 hidden md:flex flex-col items-center justify-center px-8 text-white rounded-r-xl ${
          isLogin
            ? "bg-gradient-to-br from-indigo-800 via-blue-500 to-cyan-400"
            : "bg-gradient-to-br from-pink-500 via-yellow-400 to-orange-400"
        }`}
      >
        <img
          src="/assets/quiz-illu.jpg" 
          alt="Quiz Illustration"
          className="w-3/4 h-auto object-cover rounded-lg shadow-lg mb-6"
        />
        <h2 className="text-3xl font-bold mb-2">
          {isLogin ? "Welcome Back!" : "Join Us Today!"}
        </h2>
        <p className="text-center text-sm max-w-sm">
          {isLogin
            ? "Log in to test your knowledge and track your progress."
            : "Create an account and start your quiz journey now."}
        </p>


      </div>
    </div>
  );
}
