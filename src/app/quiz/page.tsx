import { useState } from "react";
import QuizQuestion from "./QuizQuestion";

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
];

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (option: string) => {
    setSelected(option);
    if (option === questions[current].answer) {
      setScore((s) => s + 1);
    }
    setTimeout(() => {
      if (current < questions.length - 1) {
        setCurrent((c) => c + 1);
        setSelected(null);
      } else {
        setShowResult(true);
      }
    }, 700);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h2 className="text-2xl font-semibold mb-4">Quiz</h2>
      {showResult ? (
        <div className="text-center">
          <p className="mb-2">Quiz finished!</p>
          <p className="font-bold">Score: {score} / {questions.length}</p>
        </div>
      ) : (
        <QuizQuestion
          question={questions[current].question}
          options={questions[current].options}
          onSelect={handleSelect}
        />
      )}
    </main>
  );
}
