'use client';
import Link from "next/link";
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  type: "login" | "signup";
}

export default function AuthLayout({ children, type }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row text-[var(--text-color)]">
      {/* Left side - Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 bg-[var(--background)] md:rounded-l-xl shadow-lg text-[var(--text-color)]">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>

      {/* Right side - Image */}
      <div className="flex-1 hidden md:flex items-center justify-center bg-gradient-to-br from-[#1e293b] via-[#3b82f6] to-[#fbbf24] rounded-r-xl">
        <img
          src="https://images.unsplash.com/photo-1581091215360-45c0193cb76e?auto=format&fit=crop&w=800&q=80"
          alt="Quiz Illustration"
          className="w-3/4 h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
