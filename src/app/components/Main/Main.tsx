"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Main() {
  // Parallax effect for animated background shapes
  // (simple version, can be improved with useScroll/useTransform)
  // Animated SVGs for extra vibrance
  // pt-20 ensures content never goes behind navbar (navbar is py-4 = 4rem)
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen p-8 overflow-hidden pt-60 pb-8 text-[var(--foreground)]">

      {/* Animated, vibrant background shapes */}
      <motion.div
        className="absolute inset-0 -z-20 pointer-events-none"
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Top left blob */}
        <motion.div
          className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] rounded-full bg-gradient-to-br from-[#fbbf24]/70 via-[#fde68a]/60 to-[#3b82f6]/40 blur-2xl opacity-70 dark:from-[#3b5bfd]/70 dark:via-[#232c43]/60 dark:to-[#fbbf24]/40"
          initial={{ scale: 0.7, opacity: 0.5 }}
          animate={{ scale: [0.7, 1.1, 1], opacity: [0.5, 0.7, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
        />
        {/* Bottom right blob */}
        <motion.div
          className="absolute bottom-[-100px] right-[-100px] w-[260px] h-[260px] rounded-full bg-gradient-to-tr from-[#3b82f6]/60 via-[#fbbf24]/40 to-[#e0e7ff]/60 blur-2xl opacity-60 dark:from-[#fbbf24]/60 dark:via-[#3b5bfd]/40 dark:to-[#232c43]/60"
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.6] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", delay: 2 }}
        />
        {/* Animated SVG wave divider */}
        <motion.svg
          className="absolute left-0 right-0 top-[30%] w-full h-24 opacity-60 dark:opacity-40"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
        >
          <path fill="url(#waveGradient)" fillOpacity="1" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,154.7C840,149,960,171,1080,186.7C1200,203,1320,213,1380,218.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
          </defs>
        </motion.svg>
      </motion.div>
      {/* Glassmorphism card effect for main content */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#fbbf24]/60 via-[#3b82f6]/40 to-[#e0e7ff]/80 dark:from-[#232c43]/80 dark:via-[#3b5bfd]/40 dark:to-[#181e2a]/90" />
      <motion.section
        id="home"
        className="w-full max-w-3xl text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg text-[var(--foreground)]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Quiz System
        </motion.h1>
        <motion.p
          className="text-lg mb-6 text-[var(--foreground)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          A modern, secure, and interactive quiz platform for schools, teachers, and students. Empowering digital learning and assessment for the next generation.
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <Link
            href="/quiz"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#3b5bfd] to-[#3b82f6] dark:from-[#fbbf24] dark:to-[#3b5bfd] text-white dark:text-[#181e2a] font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-[#3b5bfd]/40 dark:focus:ring-[#fbbf24]/40"
          >
            <span className="inline-flex items-center gap-2">
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, repeatType: "loop" }}
                className="inline-block"
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="inline-block">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.span>
              Start Quiz
            </span>
          </Link>
        </motion.div>
      </motion.section>

      <motion.section
        id="about"
        className="w-full max-w-4xl mb-16"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
  <h2 className="text-2xl font-bold mb-4 drop-shadow text-[var(--foreground)]">About</h2>
  <p className="text-base mb-2 text-[var(--foreground)]">Quiz System is designed to make learning fun and effective. With real-time feedback, progress tracking, and a vibrant user interface, students and teachers can focus on what matters most: learning and growth.</p>
  <ul className="list-disc list-inside text-[var(--foreground)]">
          <li>Role-based access for students, teachers, and admins</li>
          <li>Animated, interactive quiz experience</li>
          <li>Secure authentication and data privacy</li>
        </ul>
      </motion.section>

      <motion.section
        id="pricing"
        className="w-full max-w-4xl mb-16"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
  <h2 className="text-2xl font-bold mb-4 drop-shadow text-[var(--foreground)]">Pricing</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            {
              title: "Student",
              price: "Free",
              features: ["Access quizzes", "Track progress", "Earn badges"],
              color: "[#3b5bfd]",
              btn: "Sign Up",
              btnClass: "bg-[#3b5bfd] text-white hover:bg-[#2434a1] dark:bg-[#232c43] dark:text-[#fbbf24] dark:hover:bg-[#3b5bfd]/80"
            },
            {
              title: "Teacher",
              price: "$9/mo",
              features: ["Create quizzes", "Analyze results", "Manage students"],
              color: "[#fbbf24]",
              btn: "Start Free Trial",
              btnClass: "bg-[#fbbf24] text-[#1e293b] hover:bg-[#fbbf24]/80 dark:bg-[#3b5bfd] dark:text-[#fbbf24] dark:hover:bg-[#232c43]"
            },
            {
              title: "School",
              price: "Custom",
              features: ["All teacher features", "School-wide analytics", "Priority support"],
              color: "[#3b82f6]",
              btn: "Contact Sales",
              btnClass: "bg-[#3b82f6] text-white hover:bg-[#2563eb] dark:bg-[#fbbf24] dark:text-[#3b5bfd] dark:hover:bg-[#3b5bfd]/80"
            },
          ].map((plan, i) => (
            <motion.div
              key={plan.title}
              className={`bg-[var(--card)] rounded-lg shadow-lg p-6 border-t-4 border-${plan.color} glass-card relative overflow-hidden text-[var(--foreground)]`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(59,91,253,0.18)" }}
            >
              <motion.div
                className="absolute -top-8 -right-8 w-20 h-20 rounded-full bg-gradient-to-br from-[#3b5bfd]/30 to-[#fbbf24]/30 blur-xl opacity-40 dark:from-[#fbbf24]/30 dark:to-[#3b5bfd]/30"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 30, 0] }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "mirror", delay: i * 1.5 }}
              />
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-[var(--foreground)]">
                {plan.title}
                {plan.title === "Student" && (
                  <span className="inline-block animate-bounce text-[#3b5bfd] dark:text-[#fbbf24]">🎓</span>
                )}
                {plan.title === "Teacher" && (
                  <span className="inline-block animate-pulse text-[#fbbf24] dark:text-[#3b5bfd]">🧑‍🏫</span>
                )}
                {plan.title === "School" && (
                  <span className="inline-block animate-spin-slow text-[#3b82f6] dark:text-[#fbbf24]">🏫</span>
                )}
              </h3>
              <p className="text-2xl font-extrabold mb-2">{plan.price}</p>
              <ul className="mb-4 text-[var(--foreground)]">
                {plan.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <button className={`w-full px-4 py-2 rounded font-semibold transition ${plan.btnClass} shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#3b5bfd]/40 dark:focus:ring-[#fbbf24]/40`}><Link href={''}>{plan.btn}</Link></button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="w-full max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
  <h2 className="text-2xl font-bold mb-4 drop-shadow text-[var(--foreground)]">Contact</h2>
  <form className="bg-[var(--card)] rounded-lg shadow-lg p-6 flex flex-col gap-4 glass-card">
          <input type="text" placeholder="Your Name" className="px-4 py-2 rounded border border-gray-300 dark:border-[#3b5bfd] bg-[var(--card)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[#3b5bfd] dark:focus:ring-[#fbbf24] transition placeholder:text-gray-400 dark:placeholder:text-gray-400" />
          <input type="email" placeholder="Your Email" className="px-4 py-2 rounded border border-gray-300 dark:border-[#3b5bfd] bg-[var(--card)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[#3b5bfd] dark:focus:ring-[#fbbf24] transition placeholder:text-gray-400 dark:placeholder:text-gray-400" />
          <textarea placeholder="Your Message" className="px-4 py-2 rounded border border-gray-300 dark:border-[#3b5bfd] bg-[var(--card)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[#3b5bfd] dark:focus:ring-[#fbbf24] transition placeholder:text-gray-400 dark:placeholder:text-gray-400" rows={4}></textarea>
          <button type="submit" className="px-6 py-2 bg-gradient-to-r from-[#3b5bfd] to-[#3b82f6] dark:from-[#fbbf24] dark:to-[#3b5bfd] text-white dark:text-[#181e2a] rounded font-bold hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-[#3b5bfd]/40 dark:focus:ring-[#fbbf24]/40">Send Message</button>
        </form>
      </motion.section>
    </main>
  );
}

