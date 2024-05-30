import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Breadcrumb } from "../../../components/Breadcrumb"
import { Card } from "../../../components/Card"
import { QuestionsForm } from "../../../components/questions/Form"
import { QuestionsUpdateForm } from "../../../components/questions/UpdateForm"
import { Table } from "../../../components/Table"
import { TableRow } from "../../../components/TableRow"
import { useDeleteQuestionMutation, useGetQuestionsByQuizMutation } from "../../../features/questions/questionsApiSlice"
import DefaultLayout from "../../../layouts/DefaultLayout"

export function TeacherQuizsQuestionShow() {
  const { quizId } = useParams()

  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    getQuestionsData();
  }, [])

  const [getQuestionsByQuiz] = useGetQuestionsByQuizMutation();

  const getQuestionsData = async () => {
    try {
      const response = await getQuestionsByQuiz(quizId).unwrap();
      setQuestions(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const [deleteQuestion] = useDeleteQuestionMutation();

  const handleDelete = async (id) => {
    try {
      await deleteQuestion(id).unwrap();
      getQuestionsData();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <DefaultLayout>
      <div className="pcoded-main-container">
        <Breadcrumb props={{ childs: ["Quizler", "Sorular"] }} />
        <Card props={{ name: "Soru Olustur" }}>
          <QuestionsForm props={{ quizId: quizId }} />
        </Card >

        <Card props={{ name: "Sorular" }}>
          <div className="table-responsive">
            <Table columns={["#", "Soru Isim", "Puan", "İşlemler"]}>
              {
                questions.map((question, index) => {
                  return (
                    <TableRow key={question.question.ID} rows={[index + 1, question.question.Text, question.question.Point]}>
                      <div className="d-flex">
                        <button type="button" className="btn btn-danger btn-with-icon" onClick={() => handleDelete(question.question.ID)}>
                          <i className="feather icon-trash"></i>
                        </button>
                        <div class="accordion" id={question.question.ID + "accordionExample"}>
                          <div class="accordion-item">
                            <h2 class="accordion-header">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#" + question.question.ID + "collapseOne"} aria-expanded="false" aria-controls={question.question.ID + "collapseOne"}>
                                Soruyu Guncelle
                              </button>
                            </h2>
                            <div id={question.question.ID + "collapseOne"} class="accordion-collapse collapsed collapse " data-bs-parent={"#" + question.question.ID + " accordionExample"}>
                              <div class="accordion-body">
                                <QuestionsUpdateForm props={{ question: question.question }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TableRow>
                  )
                })
              }
            </Table>
          </div>
        </Card>
      </div >


    </DefaultLayout >
  )

}
