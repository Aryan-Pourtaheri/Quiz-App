"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemButton from "./ThemButton";
import { useTheme } from "../ThemeContext";
import { useSession } from "../SessionContext";

export default function Header() {
  const { session } = useSession();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  console.log('this is session:' + session)
  
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[var(--navbar)] text-[var(--foreground)] shadow-lg">
      <nav className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="bg-white dark:bg-[#fbbf24] rounded-full w-10 h-10 flex items-center justify-center font-bold text-[#3b5bfd] text-xl">Q</span>
          <span className="text-white dark:text-[#fbbf24] text-2xl font-bold">QUIZ</span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#contact">Contact</Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Theme & Auth Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <button onClick={toggleTheme} className="p-2 rounded-full border hover:bg-white/20">
            <ThemButton />
          </button>

          {session ? (
            <Link href="/dashboard" className="btn-signin">Dashboard</Link>
          ) : (
            <>
              <Link href="/components/auth/login" className="btn-signin">Sign In</Link>
              <Link href="/components/auth/signup" className="btn-signup">Sign Up</Link>
            </>
          )}
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="md:hidden bg-[var(--navbar)]">
            <Link href="/">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#pricing">Pricing</Link>
            <Link href="#contact">Contact</Link>
            {!session && (
              <>
                <Link href="/components/auth/login">Sign In</Link>
                <Link href="/components/auth/signup">Sign Up</Link>
              </>
            )}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
