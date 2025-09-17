"use client";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "../ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import ThemButton  from "./ThemButton";
import "./header.css";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      
      <header className="fixed top-0 left-0 w-full z-50 bg-[var(--navbar)] text-[var(--foreground)] shadow-lg transition-colors duration-300">
        <nav className="NavbarStyle">
          <div className="flex items-center gap-2">
            <span className="bg-white dark:bg-[#fbbf24] rounded-full w-10 h-10 flex items-center justify-center font-bold text-[#3b5bfd] dark:text-[#181e2a] text-xl mr-2">Q</span>
            <span className="text-white dark:text-[#fbbf24] text-2xl font-bold tracking-wide">QUIZ</span>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="#about" className="nav-link">About</Link>
            <Link href="#pricing" className="nav-link">Pricing</Link>
            <Link href="#contact" className="nav-link">Contact</Link>
          </div>

          {/* Mobile hamburger menu button */}
          <button
            className="md:hidden text-white dark:text-[#fbbf24] focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Theme toggle + auth buttons */}
          <div className="hidden md:flex items-center gap-2">
            <button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="mr-2 p-2 rounded-full bg-white/20 dark:bg-[#fbbf24]/20 border border-white/30 dark:border-[#fbbf24]/30 hover:bg-white/40 dark:hover:bg-[#fbbf24]/40 transition"
            >
              <ThemButton />
            </button>

            <Link href="/components/auth/login" className="btn-signin">Sign In</Link>
            <Link href="/components/auth/signup" className="btn-signup">Sign Up</Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { height: "auto", opacity: 1, transition: { duration: 0.3, when: "beforeChildren", staggerChildren: 0.1 } },
                closed: { height: 0, opacity: 0, transition: { duration: 0.3, when: "afterChildren" } }
              }}
              className="md:hidden flex flex-col bg-[var(--navbar)] px-4 py-4 text-[var(--foreground)] z-10 shadow-md mt-14 overflow-hidden"
            >
              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: -10 }
                }}
                className="flex flex-col space-y-3"
              >
                <Link href="/" className="mobile-link">Home</Link>
                <Link href="#about" className="mobile-link">About</Link>
                <Link href="#pricing" className="mobile-link">Pricing</Link>
                <Link href="#contact" className="mobile-link">Contact</Link>
              </motion.div>

              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 10 }
                }}
                className="flex items-center justify-between pt-4"
              >
                <Link href="/components/auth/login" className="btn-signin">Sign In</Link>
                <Link href="/components/auth/signup" className="btn-signup">Sign Up</Link>
                <button
                  aria-label="Toggle theme"
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-white/20 dark:bg-[#fbbf24]/20 border border-white/30 dark:border-[#fbbf24]/30 hover:bg-white/40 dark:hover:bg-[#fbbf24]/40 transition"
                >
                  <ThemButton />
                </button>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
      
    </>
  );
}
