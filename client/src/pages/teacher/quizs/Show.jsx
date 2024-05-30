import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Breadcrumb } from "../../../components/Breadcrumb"
import { Card } from "../../../components/Card"
import { Table } from "../../../components/Table"
import { TableRow } from "../../../components/TableRow"
import { useGetUsersQuizByUserIdMutation } from "../../../features/userQuiz/userQuizApiSlice"
import DefaultLayout from "../../../layouts/DefaultLayout"

export function TeacherQuizsShow() {
  const [getUsersQuizByUserId] = useGetUsersQuizByUserIdMutation();

  const [quiz, setQuiz] = useState({});

  var { quizId } = useParams();

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    try {
      const response = await getUsersQuizByUserId(quizId).unwrap();
      setQuiz(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <DefaultLayout>
      <div className="pcoded-main-container">
        <Breadcrumb props={{ childs: ["Quizler", "Quiz Bilgileri"] }} />
        <Card props={{ name: "Dersler" }}>
          <div className="table-responsive">
            <Table columns={["#", "Isim Soyisim", "Eposta", "Kullanici Adi", "İşlemler"]}>
              {
                quiz.length > 0 && quiz.map((quiz_answer, index) => (
                  <TableRow key={quiz_answer.id} rows={[index + 2, quiz_answer.firstname + " " + quiz_answer.lastname, quiz_answer.email, quiz_answer.username]}>
                    <a href={`/quiz/${quizId}/${quiz_answer.id}/answers`} className="btn btn-primary btn-with-icon-text">
                      Cevapları Gör
                    </a>
                  </TableRow>
                ))
              }

            </Table>
          </div>
        </Card>
      </div>


    </DefaultLayout>
  )

}
