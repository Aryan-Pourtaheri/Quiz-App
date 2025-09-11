type QuizQuestionProps = {
  question: string;
  options: string[];
  onSelect: (option: string) => void;
};

export default function QuizQuestion({ question, options, onSelect }: QuizQuestionProps) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium mb-2">{question}</h3>
      <ul className="space-y-2">
        {options.map((option) => (
          <li key={option}>
            <button
              className="w-full px-4 py-2 border rounded hover:bg-gray-100"
              onClick={() => onSelect(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
