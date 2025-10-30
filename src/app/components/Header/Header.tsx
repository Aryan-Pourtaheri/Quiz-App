"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemButton from "./ThemButton";
import { useTheme } from "../ThemeContext";
import { useSession } from "../SessionContext";
import SignOutButton from "./SignOutBtn";
import "./header.css";

export default function Header() {
  const { session } = useSession();
  const { toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[var(--navbar)] text-[#fbbf24] shadow-lg">
      <nav className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="bg-white dark:bg-[#fbbf24] rounded-full w-10 h-10 flex items-center justify-center font-bold text-black text-xl">
            Q
          </span>
          <span className="text-white dark:text-[#fbbf24] text-2xl font-bold">
            QUIZ
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#contact">Contact</Link>
        </div>

        {/* Desktop Auth + Theme */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-[#fbbe246e] hover:bg-white/20 transition"
          >
            <ThemButton />
          </button>

          {session ? (
            <>
              <Link href={'/' + session?.role} className="btn-signin">
                Dashboard
              </Link>
              <SignOutButton />
            </>
          ) : (
            <>
              <Link href="/components/auth/login" className="btn-signin">
                Sign In
              </Link>
              <Link href="/components/auth/signup" className="btn-signup">
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden bg-[var(--navbar)] overflow-hidden"
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.15 },
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 },
                },
              }}
              className="flex flex-col px-6 py-8 space-y-3"
            >
              {["Home", "About", "Pricing", "Contact"].map((label, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: -10 },
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <Link
                    href={label === "Home" ? "/" : `#${label.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}

              {/* Compact Auth + Theme row */}
              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: -10 },
                }}
                transition={{ duration: 0.25 }}
                className="flex items-center gap-3 pt-3 border-t border-white/10"
              >
                <button
                  onClick={() => {
                    toggleTheme();
                    setIsMobileMenuOpen(false);
                  }}
                  className="p-1.5 rounded-full hover:bg-white/20 transition"
                >
                  <ThemButton />
                </button>

                {session ? (
                  <>
                    <Link
                      href="/dashboard"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="btn-xs"
                    >
                      Dashboard
                    </Link>
                    <SignOutButton />
                  </>
                ) : (
                  <>
                    <Link
                      href="/components/auth/login"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="btn-xs"
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/components/auth/signup"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="btn-xs-alt"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


    </header>
  );
}
