'use client';
import { motion } from "framer-motion";

export default function StudentPage() {
  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-r from-blue-50 to-blue-100"
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-3xl font-bold text-blue-700 mb-4"
      >
        Student Dashboard
      </motion.h2>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-gray-700 max-w-lg text-center"
      >
        Welcome! Here you can track your quizzes, view results, and improve your learning progress.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
      >
        Start Quiz
      </motion.button>
    </motion.main>
  );
}
