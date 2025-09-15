"use client";
import Link from "next/link";
import { useTheme } from "../ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="w-full flex items-center justify-between py-4 px-8 bg-[#3b5bfd] dark:bg-[#181e2a] fixed top-0 left-0 z-10">
      <div className="flex items-center gap-2">
        <span className="bg-white dark:bg-[#fbbf24] rounded-full w-10 h-10 flex items-center justify-center font-bold text-[#3b5bfd] dark:text-[#181e2a] text-xl mr-2">Q</span>
        <span className="text-white dark:text-[#fbbf24] text-2xl font-bold tracking-wide">QUIZ</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <Link href="/" className="text-white dark:text-[#fbbf24] hover:text-blue-200 dark:hover:text-yellow-300 font-medium transition">Home</Link>
        <Link href="#about" className="text-white dark:text-[#fbbf24] hover:text-blue-200 dark:hover:text-yellow-300 font-medium transition">About</Link>
        <Link href="#pricing" className="text-white dark:text-[#fbbf24] hover:text-blue-200 dark:hover:text-yellow-300 font-medium transition">Pricing</Link>
        <Link href="#contact" className="text-white dark:text-[#fbbf24] hover:text-blue-200 dark:hover:text-yellow-300 font-medium transition">Contact</Link>
      </div>
      <div className="flex items-center gap-2">
        <button
          aria-label="Toggle theme"
          onClick={toggleTheme}
          className="mr-2 p-2 rounded-full bg-white/20 dark:bg-[#fbbf24]/20 border border-white/30 dark:border-[#fbbf24]/30 hover:bg-white/40 dark:hover:bg-[#fbbf24]/40 transition"
        >
          <AnimatePresence mode="wait" initial={false}>
            {theme === "light" ? (
              <motion.svg
                key="sun"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-yellow-400"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <circle cx="12" cy="12" r="5" />
                <g>
                  <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" />
                  <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" />
                  <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" />
                  <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" />
                </g>
              </motion.svg>
            ) : (
              <motion.svg
                key="moon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-[#fbbf24]"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
              </motion.svg>
            )}
          </AnimatePresence>
        </button>
        <Link href="/components/auth/login" className="px-4 py-2 rounded text-[#3b5bfd] dark:text-[#fbbf24] bg-white dark:bg-[#181e2a] font-semibold hover:bg-blue-100 dark:hover:bg-[#232c43] transition">Sign In</Link>
        <Link href="/components/auth/signup" className="px-4 py-2 rounded bg-white/20 dark:bg-[#fbbf24]/20 border border-white dark:border-[#fbbf24] text-white dark:text-[#fbbf24] font-semibold hover:bg-white hover:text-[#3b5bfd] dark:hover:bg-[#fbbf24] dark:hover:text-[#181e2a] transition">Sign Up</Link>
      </div>
    </nav>
  );
}
