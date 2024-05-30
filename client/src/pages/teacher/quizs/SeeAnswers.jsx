import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Breadcrumb } from "../../../components/Breadcrumb"
import { Card } from "../../../components/Card"
import { Table } from "../../../components/Table"
import { TableRow } from "../../../components/TableRow"
import { useGetUserQuizWithAnswersByUserAndQuizIdMutation } from "../../../features/quizs/quizsApiSlice"
import { useGetUserQuizByIdMutation, useGetUserQuizForNoteMutation, useGetUsersQuizByUserIdMutation, useUpdateUserQuizMutation } from "../../../features/userQuiz/userQuizApiSlice"
import DefaultLayout from "../../../layouts/DefaultLayout"
import { Modal } from "../../../components/modals/Modal"

export function SeeAnswers() {
  const { quizId, userId } = useParams();

  const [getUserQuizWithAnswersByUserAndQuizID] = useGetUserQuizWithAnswersByUserAndQuizIdMutation();
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log(userId)
    console.log(quizId)
    try {
      const response = await getUserQuizWithAnswersByUserAndQuizID(
        {
          userId: parseInt(userId),
          quizId: parseInt(quizId)
        }
      ).unwrap();

      setQuiz(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  const [userQuiz, setUserQuiz] = useState({})

  const [getUserQuizForNote] = useGetUserQuizForNoteMutation();

  useEffect(() => {
    fetchUserQuiz();
  }, []);

  const fetchUserQuiz = async () => {
    try {
      const response = await getUserQuizForNote({ userId: userId, quizId: quizId }).unwrap();
      setUserQuiz(response);
    } catch (error) {
      console.log(error);
    }
  }


  const [note, setNote] = useState(0)

  const [updateUserQuiz] = useUpdateUserQuizMutation();

  const handleChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    try {
      const response = await updateUserQuiz(
        {
          id: userQuiz.id,
          result: parseInt(note.note),
          is_review: true,
        }
      ).unwrap();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <DefaultLayout>
      <div className="pcoded-main-container">
        <Breadcrumb props={{ childs: ["Quizler", "Quiz Bilgileri"] }} />
        <Card props={{ name: "Not Ver" }}>
          {
            userQuiz.result === 0 &&
            <Modal props={{ title: "Not Ver", buttonTitle: "Not Ver" }}>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="note">Not</label>
                  <input type='number' className="form-control" id="note" name="note" onChange={handleChange}></input>
                </div>
                <button type="submit" className="btn btn-primary">Not Ver</button>
              </form>
            </Modal>
          }
          {
            userQuiz.result !== 0 &&
            <div>
              <h4>Not: {userQuiz.result}</h4>
            </div>
          }
        </Card>
        <Card props={{ name: "Cevaplari Goruntule" }}>
          <div className="table-responsive">
            <Table columns={["#", "Soru", "Cevap", "Puan"]}>
              {
                quiz.map((quiz_answer, index) => (
                  <TableRow rows={[index + 1, quiz_answer.question.text, quiz_answer.question.user_answer.answer.Text, quiz_answer.question.point]}>
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
