import React, { useState } from 'react';
import '../css/MultiplicationQuiz.css';

const MultiplicationQuiz = () => {
  // Multiplication quiz questions for kids
  const quizQuestions = [
    {
      question: "2 × 3 = ?",
      options: ["5", "6", "7", "8"],
      correctAnswer: 1,
      explanation: "Great job! 2 multiplied by 3 equals 6. Think: 2 + 2 + 2 = 6"
    },
    {
      question: "5 × 4 = ?",
      options: ["15", "20", "25", "9"],
      correctAnswer: 1,
      explanation: "Excellent! 5 × 4 = 20. You can count by 5s: 5, 10, 15, 20"
    },
    {
      question: "7 × 2 = ?",
      options: ["9", "12", "14", "16"],
      correctAnswer: 2,
      explanation: "Well done! 7 × 2 = 14. Double 7 is 14!"
    },
    {
      question: "3 × 8 = ?",
      options: ["16", "20", "24", "11"],
      correctAnswer: 2,
      explanation: "Perfect! 3 × 8 = 24. Remember: 8, 16, 24 (counting by 8s three times)"
    },
    {
      question: "6 × 5 = ?",
      options: ["25", "30", "35", "11"],
      correctAnswer: 1,
      explanation: "Awesome! 6 × 5 = 30. Half of 60 is 30!"
    },
    {
      question: "9 × 3 = ?",
      options: ["18", "21", "27", "12"],
      correctAnswer: 2,
      explanation: "Fantastic! 9 × 3 = 27. Think: 10 × 3 = 30, then subtract 3 to get 27"
    },
    {
      question: "4 × 7 = ?",
      options: ["21", "24", "28", "11"],
      correctAnswer: 2,
      explanation: "Super! 4 × 7 = 28. Double 14 is 28!"
    },
    {
      question: "8 × 8 = ?",
      options: ["56", "64", "72", "16"],
      correctAnswer: 1,
      explanation: "Terrific! 8 × 8 = 64. Remember this special multiplication fact!"
    },
    {
      question: "10 × 6 = ?",
      options: ["50", "60", "70", "16"],
      correctAnswer: 1,
      explanation: "Wonderful! 10 × 6 = 60. Just add a 0 to the 6!"
    },
    {
      question: "11 × 5 = ?",
      options: ["50", "55", "60", "16"],
      correctAnswer: 1,
      explanation: "Brilliant! 11 × 5 = 55. 10 × 5 = 50, plus one more 5 makes 55!"
    }
  ];

  // State management
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answered, setAnswered] = useState(false);

  // Current question
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;

  // Handle option selection
  const handleOptionSelect = (index) => {
    if (!answered) {
      setSelectedOption(index);
    }
  };

  // Check answer and proceed
  const handleNext = () => {
    if (selectedOption === null) return;

    // Check if answer is correct
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    // Show explanation
    setAnswered(true);
    setShowExplanation(true);

    // If continuing to next question
    if (!isLastQuestion) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
        setAnswered(false);
        setShowExplanation(false);
      }, 1500);
    }
  };

  // Finish quiz
  const handleSubmit = () => {
    handleNext();
    setQuizCompleted(true);
  };

  // Restart quiz
  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setQuizCompleted(false);
    setShowExplanation(false);
    setAnswered(false);
  };

  // Calculate percentage
  const percentage = Math.round((score / quizQuestions.length) * 100);

  // Get celebration message based on score
  const getCelebrationMessage = () => {
    if (percentage === 100) return "🏆 Math Whiz! Perfect Score! 🏆";
    if (percentage >= 80) return "🎉 Awesome Job! You're a Multiplication Master! 🎉";
    if (percentage >= 60) return "👍 Good Work! Keep Practicing! 👍";
    return "✏️ Nice Try! You'll Get Better With Practice! ✏️";
  };

  return (
    <div className="quiz-container">
      <h1>✏️ Multiplication Quiz for Kids ✏️</h1>
      <div className="progress">
        Question {currentQuestionIndex + 1} of {quizQuestions.length}
      </div>

      {!quizCompleted ? (
        <div className="quiz-area">
          <div className="question">{currentQuestion.question}</div>
          <div className="options">
            {currentQuestion.options.map((option, index) => {
              let className = "option";
              if (answered) {
                if (index === currentQuestion.correctAnswer) {
                  className += " correct";
                } else if (index === selectedOption) {
                  className += " incorrect";
                }
              } else if (index === selectedOption) {
                className += " selected";
              }
              return (
                <div
                  key={index}
                  className={className}
                  onClick={() => handleOptionSelect(index)}
                >
                  {option}
                </div>
              );
            })}
          </div>

          {showExplanation && (
            <div className="explanation">{currentQuestion.explanation}</div>
          )}

          {!isLastQuestion ? (
            <button
              onClick={handleNext}
              disabled={selectedOption === null || answered}
            >
              {answered ? "Continue" : "Next Question"}
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={selectedOption === null || answered}
            >
              Finish Quiz
            </button>
          )}
        </div>
      ) : (
        <div className="result">
          <div className="celebration">{getCelebrationMessage()}</div>
          You got {score} out of {quizQuestions.length} correct!<br />
          That's {percentage}%!
          <br />
          <button onClick={handleRestart}>Try Again</button>
        </div>
      )}
    </div>
  );
};

export default MultiplicationQuiz;