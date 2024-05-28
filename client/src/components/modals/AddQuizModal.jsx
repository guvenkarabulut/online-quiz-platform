import { useEffect, useState } from "react"
import { useGetLessonsByTeacherMutation } from "../../features/lessons/lessonsApiSlice";
import { useCreateQuizMutation } from "../../features/quizs/quizsApiSlice";
import { formatDate } from "../../utils/date";

export function AddQuizModal() {
  const handleChange = (e) => {
    setQuiz({
      ...quiz,
      [e.target.name]: e.target.value
    })
    console.log(quiz)
  }

  const [quiz, setQuiz] = useState({
    title: "",
    description: "",
    duration: 0,
    start_time: '',
    end_time: '',
    lesson_id: 0,
    teacher_id: 5
  })

  const [lessons, setLessons] = useState([]);
  useEffect(() => {
    getLessonsData();
  }, [])

  const [getLessonsByTeacher] = useGetLessonsByTeacherMutation();

  const getLessonsData = async () => {
    try {
      const response = await getLessonsByTeacher(5).unwrap();
      setLessons(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  const [createQuiz] = useCreateQuizMutation();

  const handleSubmit = async () => {
    try {
      const formattedQuiz = {
        ...quiz,
        duration: parseInt(quiz.duration),
        lesson_id: parseInt(quiz.lesson_id),
        start_time: formatDate(quiz.start_time),
        end_time: formatDate(quiz.end_time)
      };
      const response = await createQuiz(formattedQuiz).unwrap();
      if (response) {
        setQuiz({
          title: "",
          description: "",
          duration: "",
          start_time: "",
          end_time: "",
          lesson_id: "",
        })
      }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <div
        id="exampleModalPopovers"
        className="modal fade"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalPopoversLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id="exampleModalPopoversLabel"
              >
                Quiz Ekle
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
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
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    for="input-1"
                    className="col-sm-6 col-form-label"
                  >Ders</label
                  >
                  <div className="col-sm-6">
                    <select className="form-control" name="lesson_id" onChange={handleChange}>
                      <option value="">Ders Seç</option>
                      {
                        lessons.map((lesson) => {
                          return (
                            <option value={lesson.id}>{lesson.name}</option>
                          )
                        })
                      }
                    </select>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Kapat
                </button>
                <button type="submit" className="btn btn-primary">
                  Kaydet
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModalPopovers"
      >
        Quiz Ekle
      </button>
    </>
  )
}
