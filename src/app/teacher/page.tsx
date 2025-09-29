'use client';
import { motion } from "framer-motion";

export default function TeacherPage() {
  return (
    <motion.main
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-yellow-50 to-yellow-100"
    >
      <motion.h2
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-3xl font-bold text-yellow-700 mb-4"
      >
        Teacher Dashboard
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-gray-700 max-w-lg text-center"
      >
        Manage your quizzes, analyze reports, and help students grow by providing valuable feedback.
      </motion.p>
      <motion.div
        whileHover={{ rotate: 2, scale: 1.02 }}
        className="mt-6 px-6 py-3 bg-yellow-500 text-white rounded-xl shadow hover:bg-yellow-600"
      >
        Create New Quiz
      </motion.div>
    </motion.main>
  );
}
