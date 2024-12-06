function ProgressBar({ totalQuestions, currentQuestionId }) {
  const getCircleClass = (questionId) => {
    if (questionId < currentQuestionId) {
      return "bg-primary text-green-800"; // green circle for passed questions
    }
    if (questionId === currentQuestionId) {
      return "bg-gray-300 text-gray-700"; // current question (gray)
    }
    return "bg-gray-200 text-gray-500"; // upcoming questions (light gray)
  };

  return (
    <div className="flex items-center justify-center space-x-4 ">
      {Array.from({ length: totalQuestions }, (_, index) => {
        const questionId = index + 1;
        return (
          <div
            key={questionId}
            className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-300 ${getCircleClass(
              questionId
            )}`}
          >
            <span className="font-bold text-sm">{questionId}</span>
          </div>
        );
      })}
    </div>
  );
}

export default ProgressBar;
