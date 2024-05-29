import { Card } from "../../../components/Card";

import CountdownTimer from "../../../components/CountdownTimer";
import { TestComponent } from "../../../components/quiz/TestComponent";
import { ClassicComponent } from "../../../components/quiz/ClassicComponent";
import { FilltheblankComponent } from "../../../components/quiz/FilltheblankComponent";
import { TrueFalseComponent } from "../../../components/quiz/TrueFalseComponent";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetQuestionsByQuizMutation } from "../../../features/questions/questionsApiSlice";
export function StudentQuizShow() {

  var { quizId } = useParams();

  const [getQuestionsByQuiz] = useGetQuestionsByQuizMutation();

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await getQuestionsByQuiz(quizId);
      setQuestions(response.data);
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
              <CountdownTimer durationInMinutes={60} />
            </div>
            <div class="container mt-sm-5 my-1">
              <TestComponent />
              <ClassicComponent />
              <FilltheblankComponent />
              <TrueFalseComponent />
              {questions.id}
              {/* { */}
              {/*   questions.map((question) => { */}
              {/*     return ( */}
              {/*       <div class="card my-3"> */}
              {/*         {question.id} */}
              {/*       </div> */}
              {/*     ) */}
              {/**/}
              {/*   }) */}
              {/* } */}
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

