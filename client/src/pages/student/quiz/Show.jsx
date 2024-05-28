import { Card } from "../../../components/Card";

import CountdownTimer from "../../../components/CountdownTimer";
import { TestComponent } from "../../../components/quiz/TestComponent";
import { ClassicComponent } from "../../../components/quiz/ClassicComponent";
import { FilltheblankComponent } from "../../../components/quiz/FilltheblankComponent";
import { TrueFalseComponent } from "../../../components/quiz/TrueFalseComponent";
import { useGetQuestionByQuizMutation } from "../../../features/questions/questionsApiSlice";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function StudentQuizShow() {

  var { quizId } = useParams();
  const [getQuestionByQuiz] = useGetQuestionByQuizMutation();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    getQuestionData();
  }, [])

  const getQuestionData = async () => {
    try {
      const response = await getQuestionByQuiz(quizId).unwrap();
      setQuestions(response.data);

      if (response) {
        await Promise.all(response.data.map(async (question) => {
          await setAnswer(question.id, null)
          console.log(answers)
        }))
      }

    }
    catch (error) {
      console.log(error);
    }
  }

  const setAnswer = async (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  }


  return (
    <div className="container">
      <div className="pcoded-content">
        <div>
          <Card props={{ name: "Quizim" }}>
            <div className="d-flex justify-content-end">
              <CountdownTimer durationInMinutes={60} />
            </div>
            <div class="container mt-sm-5 my-1">
              <TestComponent />
              <ClassicComponent />
              <FilltheblankComponent />
              <TrueFalseComponent />
              {
                questions.map((question, index) => {
                  return (
                    <div>
                      {question.id}
                    </div>
                  )
                })
              }
              <div class="d-flex align-items-center pt-3">
                <div class="ml-auto mr-sm-5">
                  <button class="btn btn-success">Kaydet</button>
                </div>
              </div>
            </div>
          </Card>
        </div >
      </div >
    </div >
  )
}

