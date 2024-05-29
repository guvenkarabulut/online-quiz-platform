import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Table } from "../../components/Table";
import { TableRow } from "../../components/TableRow";
import DefaultLayout from "../../layouts/DefaultLayout";
import { AddQuizModal } from "../../components/modals/AddQuizModal";
import { useEffect, useState } from "react";
import { useDeleteQuizMutation, useGetQuizzesByTeacherMutation, useGetQuizzesMutation } from "../../features/quizs/quizsApiSlice";

export function TeacherQuizs() {
  const [quizzes, setQuizzes] = useState([]);
  useEffect(() => {
    getQuizzesData();
  }, [])

  const [getQuizzesByTeacher] = useGetQuizzesByTeacherMutation()

  const getQuizzesData = async () => {
    try {
      const response = await getQuizzesByTeacher(7).unwrap();
      setQuizzes(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const [deleteQuiz] = useDeleteQuizMutation();

  const handleDelete = async (id) => {
    try {
      await deleteQuiz(id).unwrap();
      getQuizzesData();
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <DefaultLayout>
      <div className="pcoded-main-container">
        <div className="pcoded-content">
          <Breadcrumb props={{ childs: ["Quizler"] }} />
          <div>
            <Card props={{ name: "Quiz Ekle" }}>
              <AddQuizModal />
            </Card>
            <Card props={{ name: "Quizlerim" }}>
              <div className="table-responsive">
                <Table columns={["#", "Quiz Adı", "Quiz Açıklaması", "Süre", "Başlangıç Tarihi", "Bitiş Tarihi", "Ders", "İşlemler"]}>
                  {
                    quizzes.map((quiz, index) => {
                      return (
                        <TableRow key={quiz.id} rows={[index + 1, quiz.title, quiz.description, quiz.duration, quiz.start_time, quiz.end_time, quiz.lesson.Name]}>
                          <button type="button" className="btn btn-danger btn-with-icon" onClick={() => { handleDelete(quiz.id) }}><i className="feather icon-trash"></i></button>
                          <a href={`/teacher-quizs/update/${quiz.id}`} type="button" className="btn btn-success btn-with-icon">
                            <i className="feather icon-edit"></i>
                          </a>
                          <a href={`/quiz/${quiz.id}/questions/show`} type="button" className="btn btn-primary btn-with-icon-text">
                            Sorular
                          </a>
                          <a href={`/quiz/${quiz.id}/show`} type="button" className="btn btn-secondary btn-with-icon-text">
                            Quiz Detayi
                          </a>
                        </TableRow>
                      )
                    })
                  }
                </Table>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DefaultLayout >
  )
}
