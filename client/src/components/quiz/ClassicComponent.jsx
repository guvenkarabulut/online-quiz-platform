
import { useEffect, useState } from "react";

export function ClassicComponent({ index, question, onAnswerChange }) {
  const [currentQuestion, setCurrentQuestion] = useState(question);
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    setCurrentQuestion(question);
  }, [question]);

  const handleAnswerChange = (event) => {
    const newAnswer = event.target.value;
    setAnswer(newAnswer);
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
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Cevap"
              rows="3"
              value={answer}
              onChange={handleAnswerChange}
            ></textarea>
          </div>
        </>
      )}
    </div>
  );
}

