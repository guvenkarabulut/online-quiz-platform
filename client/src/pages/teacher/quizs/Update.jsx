import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Breadcrumb } from "../../../components/Breadcrumb"
import { Card } from "../../../components/Card"
import { formatDate } from "../../../utils/date";
import { useGetQuizByIdMutation, useUpdateQuizMutation } from "../../../features/quizs/quizsApiSlice"
import DefaultLayout from "../../../layouts/DefaultLayout"

export function TeacherQuizUpdate() {
  const params = useParams();

  const [quiz, setQuiz] = useState({});

  const [getQuizById] = useGetQuizByIdMutation();

  useEffect(() => {
    getQuizData();
  }, [])

  const getQuizData = async () => {
    try {
      const response = await getQuizById(params.quizId).unwrap();
      setQuiz(response.data[0]);
    }
    catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e) => {
    setQuiz({
      ...quiz,
      [e.target.name]: e.target.value
    })
  }
  const [updateQuiz] = useUpdateQuizMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateQuiz(
        {
          ID: parseInt(params.quizId),
          title: quiz.title,
          description: quiz.description,
          duration: parseInt(quiz.duration),
          start_time: formatDate(quiz.start_time),
          end_time: formatDate(quiz.end_time)
        }
      ).unwrap();
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <DefaultLayout>
      <div className="pcoded-main-container">
        <Breadcrumb props={{ childs: ["Quizler", "Quiz Bilgileri", params.quizId] }} />
        <Card props={{ name: "Dersler" }}>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="form-group row">
                <label
                  for="input-1"
                  className="col-sm-6 col-form-label"
                >Quiz Adı</label
                >
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    id="input-1"
                    placeholder="Quiz Adı"
                    name="title"
                    onChange={handleChange}
                    value={quiz.title}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  for="input-1"
                  className="col-sm-6 col-form-label"
                >Quiz Açıklaması</label
                >
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    id="input-1"
                    placeholder="Quiz Açıklaması"
                    name="description"
                    onChange={handleChange}
                    value={quiz.description}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  for="input-1"
                  className="col-sm-6 col-form-label"
                >Süre</label
                >
                <div className="col-sm-6">
                  <input
                    type="numeric"
                    className="form-control"
                    id="input-1"
                    placeholder="Süre"
                    name="duration"
                    onChange={handleChange}
                    value={quiz.duration}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  for="input-1"
                  className="col-sm-6 col-form-label"
                >Başlangıç Tarihi<sub
                >(Opsiyonel)</sub
                  ></label
                >
                <div className="col-sm-6">
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="input-1"
                    placeholder="Başlangıç Tarihi"
                    name="start_time"
                    onChange={handleChange}
                    value={quiz.start_time}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  for="input-1"
                  className="col-sm-6 col-form-label"
                >Bitiş Tarihi<sub>(Opsiyonel)</sub></label
                >
                <div className="col-sm-6">
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="input-1"
                    placeholder="Bitiş Tarihi"
                    name="end_time"
                    onChange={handleChange}
                    value={quiz.end_time}
                  />
                </div>
              </div>

            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                Kaydet
              </button>
            </div>
          </form>
        </Card>
      </div>
    </DefaultLayout>
  )

}
