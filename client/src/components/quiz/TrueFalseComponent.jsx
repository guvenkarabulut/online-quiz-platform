
import { useEffect, useState } from "react";

export function TrueFalseComponent({ index, question, onAnswerChange }) {
  const [currentQuestion, setCurrentQuestion] = useState(question);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    setCurrentQuestion(question);
  }, [question]);

  const handleAnswerChange = (event) => {
    const newAnswer = event.target.value;
    setSelectedAnswer(newAnswer);
    onAnswerChange(newAnswer);
  };

  return (
    <div className="question ml-sm-5 pl-sm-5 pt-2">
      {currentQuestion && (
        <>
          <div className="py-2 h5">
            <b>{index}. Soru: {currentQuestion.Text}</b>
          </div>
          <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
            <label className="options">
              Doğru
              <input
                type="radio"
                name={`radio-${index}`}
                value="Doğru"
                checked={selectedAnswer === "Doğru"}
                onChange={handleAnswerChange}
              />
              <span className="checkmark"></span>
            </label>
            <label className="options">
              Yanlış
              <input
                type="radio"
                name={`radio-${index}`}
                value="Yanlış"
                checked={selectedAnswer === "Yanlış"}
                onChange={handleAnswerChange}
              />
              <span className="checkmark"></span>
            </label>
          </div>
        </>
      )}
    </div>
  );
}

