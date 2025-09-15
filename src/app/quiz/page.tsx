"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

// Dummy questions for demonstration
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "Jane Austen"],
    answer: "Harper Lee",
  },
];

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const router = useRouter();


  const handleSelect = (option: string) => {
    setSelected(option);
    if (option === questions[current].answer) {
      setScore((prev) => prev + 1);
    }
    setTimeout(() => {
      if (current < questions.length - 1) {
        setCurrent((prev) => prev + 1);
        setSelected(null);
      } else {
        setShowResult(true);
      }
    }, 900);
  };

  const handleTryAgain = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setShowResult(false);
  };

  const progress = ((current + (showResult ? 1 : 0)) / questions.length) * 100;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-[#fbbf24] via-[#3b82f6] to-[#1e293b]">
      {/* Progress Bar */}
      <div className="w-full max-w-md mb-6">
        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#3b82f6] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-xs text-right mt-1 text-[#1e293b] font-semibold">
          {showResult ? questions.length : current + 1} / {questions.length}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -30 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="bg-white/90 rounded-3xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center"
      >
        <AnimatePresence mode="wait">
          {showResult ? (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -40 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-extrabold mb-6 text-[#1e293b] tracking-tight drop-shadow-lg flex items-center gap-2"
              >
                <span className="inline-block bg-[#fbbf24] text-[#1e293b] rounded-full w-10 h-10 flex items-center justify-center text-2xl font-black shadow">🎉</span>
                Quiz Complete!
              </motion.h2>
              <p className="mb-2 text-xl font-semibold text-[#3b82f6]">You finished the quiz!</p>
              <p className="font-bold text-2xl text-[#1e293b] mb-4">Score: {score} / {questions.length}</p>
              <div className="flex flex-col gap-3 items-center">
                <button
                  className="px-8 py-3 rounded-full bg-[#3b82f6] text-white font-bold shadow hover:bg-[#1e293b] transition text-lg cursor-pointer"
                  onClick={handleTryAgain}
                >
                  Try Again
                </button>
                <button
                  className="px-8 py-3 rounded-full bg-gray-300 text-[#1e293b] font-bold shadow hover:bg-gray-400 transition text-lg cursor-pointer"
                  onClick={() => router.push("/")}
                >
                  Back to Main Page
                </button>
              </div>
            </motion.div>
          ) : (
            <QuestionCard
              key={current}
              question={questions[current].question}
              options={questions[current].options}
              answer={questions[current].answer}
              selected={selected}
              onSelect={handleSelect}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}

// QuestionCard component
type QuestionCardProps = {
  question: string;
  options: string[];
  answer: string;
  selected: string | null;
  onSelect: (option: string) => void;
};

function QuestionCard({ question, options, answer, selected, onSelect }: QuestionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      <h3 className="text-2xl font-bold mb-8 text-[#3b82f6] text-center drop-shadow">
        {question}
      </h3>
      <div className="grid gap-5">
        {options.map((option) => {
          let cardStyle = "w-full px-8 py-5 rounded-2xl font-semibold text-lg shadow-lg border-2 transition-all duration-200 cursor-pointer ";
          if (selected) {
            if (option === selected && option === answer) {
              cardStyle += "bg-green-200 border-green-500 text-green-900 scale-105 animate-bounce";
            } else if (option === selected) {
              cardStyle += "bg-red-200 border-red-500 text-red-900 shake";
            } else {
              cardStyle += "bg-gray-100 border-gray-300 text-gray-400 opacity-70";
            }
          } else {
            cardStyle += "bg-[#fbbf24]/80 border-[#3b82f6] text-[#1e293b] hover:bg-[#3b82f6] hover:text-white hover:scale-105";
          }
          return (
            <motion.div
              key={option}
              whileTap={{ scale: 0.97 }}
              className={cardStyle}
              onClick={() => !selected && onSelect(option)}
              tabIndex={0}
              role="button"
              aria-pressed={selected === option}
            >
              {option}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
