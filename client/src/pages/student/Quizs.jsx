import { useEffect, useState } from "react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Table } from "../../components/Table";
import { TableRow } from "../../components/TableRow";
import { useGetQuizzesMutation } from "../../features/quizs/quizsApiSlice";
import DefaultLayout from "../../layouts/DefaultLayout";
export function StudentQuizs() {
  const [quizzes, setQuizzes] = useState([]);
  useEffect(() => {
    getQuizzesData();
  }, [])

  const [getQuizzes] = useGetQuizzesMutation()

  const getQuizzesData = async () => {
    try {
      const response = await getQuizzes().unwrap();
      setQuizzes(response.data);
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <DefaultLayout props={{ name: "Ogrenci" }}>
      <div className="pcoded-main-container">
        <div className="pcoded-content">
          <Breadcrumb props={{ childs: ["Quizler"] }} />
          <div>
            <Card props={{ name: "Quizlerim" }}>
              <div className="table-responsive">
                <Table columns={["#", "Quiz Adı", "Quiz Açıklaması", "Süre", "Başlangıç Tarihi", "Bitiş Tarihi", "Ders", "İşlemler"]}>
                  {
                    quizzes.map((quiz, index) => {
                      return (
                        <TableRow key={quiz.id} rows={[index + 1, quiz.title, quiz.description, quiz.duration, quiz.start_time, quiz.end_time, quiz.lesson.Name]}>
                          <a href={`/student-quizs/${quiz.id}/index`} type="button" className="btn btn-primary btn-with-icon-text">
                            Quize Basla
                          </a>
                          <a href={`/quiz/${quiz.id}/show`} type="button" className="btn btn-secondary btn-with-icon-text">
                            Quiz Bilgiler
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
