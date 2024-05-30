import { Card } from "../../../components/Card";

import CountdownTimer from "../../../components/CountdownTimer";
import { TestComponent } from "../../../components/quiz/TestComponent";
import { ClassicComponent } from "../../../components/quiz/ClassicComponent";
import { FilltheblankComponent } from "../../../components/quiz/FilltheblankComponent";
import { TrueFalseComponent } from "../../../components/quiz/TrueFalseComponent";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetQuestionsByQuizMutation } from "../../../features/questions/questionsApiSlice";
import { useCreateAnswerMutation, useCreateUserAnswerMutation } from "../../../features/answers/answersApiSlice";
import { useGetQuizByIdMutation } from "../../../features/quizs/quizsApiSlice";
import { useGetUserQuizByIdMutation } from "../../../features/userQuiz/userQuizApiSlice";
import { getUserIdFromToken } from "../../../utils/jwt";
import Cookies from "js-cookie";
export function StudentQuizShow() {

  var { quizId, userQuizId } = useParams();

  const [getQuestionsByQuiz] = useGetQuestionsByQuizMutation();

  const [quiz, setQuiz] = useState({});

  const [duration, setDuration] = useState(0);

  const [calculatedDuration, setCalculatedDuration] = useState(0);

  const [getQuizById] = useGetQuizByIdMutation();

  const [getUserQuizById] = useGetUserQuizByIdMutation();
  const [userQuiz, setUserQuiz] = useState({});

  const [questions, setQuestions] = useState([]);

  const [answers, setAnswers] = useState({});

  useEffect(() => {
    fetchQuiz();
    fetchQuestions();
    fetchUserQuiz();
  }, []);

  useEffect(() => {
    if (userQuiz.StartingTime && duration) {
      const new_duration = calculateDuration(userQuiz.StartingTime, duration);
      console.log(new_duration);

      if (new_duration <= 0) {
        alert("Süreniz doldu.");
      } else {
        setCalculatedDuration(new_duration);
      }
    }
  }, [userQuiz]);

  const calculateDuration = (starting_time, duration) => {
    var now = new Date();
    if (typeof starting_time === "string") {
      starting_time = new Date(starting_time);
    }
    var diff = now - starting_time;
    var diffInMinutes = diff / 60000;
    var remainingTime = Number(duration) - Number(diffInMinutes);
    return remainingTime;
  }

  const fetchUserQuiz = async () => {
    try {
      const response = await getUserQuizById(userQuizId);
      setUserQuiz(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchQuiz = async () => {
    try {
      const response = await getQuizById(quizId);
      setQuiz(response.data.data[0]);
      const quizDuration = response.data.data[0].duration;
      setDuration(Number(quizDuration));
    } catch (error) {
      console.log(error);
    }
  }

  const fetchQuestions = async () => {
    try {
      const response = await getQuestionsByQuiz(quizId);
      setQuestions(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  const handleAnswerChange = (index, answer) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [index]: { answer },
    }));

    console.log(answers);
  };

  const [createAnswer] = useCreateAnswerMutation();
  const [createUserAnswer] = useCreateUserAnswerMutation();

  const handleSave = async () => {
    console.log(answers);

    try {
      Object.entries(answers).forEach(async ([index, answer]) => {
        const response = await createAnswer({
          question_id: parseInt(index),
          text: answer.answer,
          user_id: getUserIdFromToken(Cookies.get("token")),
        })

        if (response) {

          const answerId = response.data.ID;
          const userAnswerResponse = await createUserAnswer({
            answer_id: answerId,
            user_id: getUserIdFromToken(Cookies.get("token")),
            quiz_id: parseInt(quizId),
          });
        }
      });

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container">
      <div className="pcoded-content">
        <div>
          <Card props={{ name: "Quizim" }}>
            <div className="d-flex justify-content-end">
              {calculatedDuration !== 0 && (
                <CountdownTimer durationInMinutes={parseInt(calculatedDuration)} />
              )
              }
            </div>
            <div class="container mt-sm-5 my-1">
              {
                questions.map((question, index) => {
                  return (
                    <>
                      {
                        question.question.Type === 1 &&
                        <TestComponent
                          question={question.question}
                          index={index + 1}
                          onAnswerChange={(answer) => handleAnswerChange(question.question.ID, answer)}

                        />
                      }
                      {
                        question.question.Type === 2 &&
                        <ClassicComponent
                          question={question.question}
                          index={index + 1}
                          onAnswerChange={(answer) => handleAnswerChange(question.question.ID, answer)}

                        />
                      }
                      {
                        question.question.Type === 3 &&
                        <FilltheblankComponent
                          question={question.question}
                          index={index + 1}
                          onAnswerChange={(answer) => handleAnswerChange(question.question.ID, answer)}

                        />
                      }
                      {
                        question.question.Type === 4 &&
                        <TrueFalseComponent
                          question={question.question}
                          index={index + 1}
                          onAnswerChange={(answer) => handleAnswerChange(question.question.ID, answer)}

                        />
                      }
                    </>
                  )
                })
              }
              <div class="d-flex align-items-center pt-3">
                <div class="ml-auto mr-sm-5">
                  <button class="btn btn-success" onClick={handleSave}>Kaydet</button>
                </div>
              </div>
            </div>
          </Card>
        </div >
      </div >
    </div >
  )
}

