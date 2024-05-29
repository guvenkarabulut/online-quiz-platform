
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import DefaultLayout from "../../../layouts/DefaultLayout";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetQuizByIdMutation } from "../../../features/quizs/quizsApiSlice";
import { useGetQuestionsByQuizMutation } from "../../../features/questions/questionsApiSlice";
import { useCreateUserQuizMutation } from "../../../features/userQuiz/userQuizApiSlice";

export function StudentQuizIndex() {
  const handleBack = () => {
    window.history.back();
  }
  var { quizId } = useParams();
  const [quiz, setQuiz] = useState({});

  const [getQuizById] = useGetQuizByIdMutation();

  useEffect(() => {
    getQuizData();
    getQuestionData();
  }, [])

  const getQuizData = async () => {
    try {
      const response = await getQuizById(quizId).unwrap();
      setQuiz(response.data[0]);
    }
    catch (error) {
      console.log(error);
    }
  }

  const [getQuestionsByQuiz] = useGetQuestionsByQuizMutation();
  const [questions, setQuestions] = useState([]);

  const getQuestionData = async () => {
    try {
      const response = await getQuestionsByQuiz(quizId).unwrap();
      setQuestions(response.data);
    }
    catch (error) {
      console.log(error);
    }
  }

  const [createUserQuiz] = useCreateUserQuizMutation();

  const handleStart = async () => {
    try {
      const response = await createUserQuiz(
        {
          // TODO: result should be null
          result: 0,
          is_review: false,
          // TODO: user_id should be dynamic
          user_id: 6,
          quiz_id: parseInt(quizId),
        }
      ).unwrap();

      if (response) {
        window.location.href = `/student-quizs/${quizId}/show`;
      }
    }
    catch (error) {
      console.log(error);
    }
  }


  return (
    <DefaultLayout props={{ name: "Ogrenci" }}>
      <div className="pcoded-main-container">
        <div className="pcoded-content">
          <Breadcrumb props={{ childs: ["Quizler", quizId] }} />
          <div>
            <Card props={{ name: "Quizim" }}>
              <div class="card-body">
                <h5 class="card-title">Quiz Uyarisi</h5>
                <p class="card-text">
                  <ul>
                    <li>Quizinizin suresi {quiz.duration} dakikadir. Sure bitiminde quiz otomatik olarak kapanacaktir.</li>
                    <li>Kaydedilmemis cevaplariniz kaybolacak ve puanlama yapilmayacaktir.</li>
                    <li>Quizinizde 10 soru bulunmaktadir.</li>
                    <li>Sorular arasi gecis yapilamiyor.</li>
                  </ul>
                </p>
                <div class="form-group">
                  <button type="button" class="btn btn-success mr-2" onClick={() => { handleStart() }}>Baslat</button>
                  <button type="button" class="btn btn-danger" onClick={() => { handleBack() }}>Baslatma</button>
                </div>
              </div>
            </Card>
          </div >
        </div >
      </div >
    </DefaultLayout >
  )
}

