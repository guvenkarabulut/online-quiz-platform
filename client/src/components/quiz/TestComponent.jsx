
import { useEffect, useState } from "react";

export function TestComponent({ index, question, onAnswerChange }) {
  const [currentQuestion, setCurrentQuestion] = useState(question);
  const [selectedChoice, setSelectedChoice] = useState(null);

  useEffect(() => {
    setCurrentQuestion(question);
  }, [question]);

  const handleChoiceChange = (event) => {
    const newChoice = event.target.value;
    setSelectedChoice(newChoice);
    onAnswerChange(newChoice);
  };

  return (
    <div className="question ml-sm-5 pl-sm-5 pt-2">
      {currentQuestion && (
        <>
          <div className="py-2 h5">
            <b>{index}. Soru: {currentQuestion.Text}</b>
          </div>
          <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
            {currentQuestion.choices.map((choice, idx) => (
              <label className="options" key={idx}>
                {choice.text}
                <input
                  type="radio"
                  name={`radio-${index}`}
                  value={choice.text}
                  checked={selectedChoice === choice.text}
                  onChange={handleChoiceChange}
                />
                <span className="checkmark"></span>
              </label>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

