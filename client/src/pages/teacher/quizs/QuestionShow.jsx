import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Breadcrumb } from "../../../components/Breadcrumb"
import { Card } from "../../../components/Card"
import { QuestionsForm } from "../../../components/questions/Form"
import { QuestionsUpdateForm } from "../../../components/questions/UpdateForm"
import { Table } from "../../../components/Table"
import { TableRow } from "../../../components/TableRow"
import { useDeleteQuestionMutation, useGetQuestionsByQuizIdMutation } from "../../../features/questions/questionsApiSlice"
import DefaultLayout from "../../../layouts/DefaultLayout"

export function TeacherQuizsQuestionShow() {
  const { quizId } = useParams()

  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    getQuestionsData();
  }, [])

  const [getQuestions] = useGetQuestionsByQuizIdMutation();

  const getQuestionsData = async () => {
    try {
      const response = await getQuestions(quizId).unwrap();
      setQuestions(response.data);
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
                    <TableRow key={question.id} rows={[index + 1, question.text, question.point]}>
                      <button type="button" className="btn btn-danger btn-with-icon" onClick={() => handleDelete(question.id)}>
                        <i className="feather icon-trash"></i>
                      </button>
                      <div id="ogrenciEkle" className="modal fade" tabindex="-1" role="dialog"
                        aria-labelledby="exampleModalPopoversLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalPopoversLabel">
                                Duzenle</h5>
                              <button type="button" className="close" data-dismiss="modal"
                                aria-label="Close"><span
                                  aria-hidden="true">&times;</span></button>
                            </div>
                            <div className="modal-body">
                              <QuestionsUpdateForm props={{ question: question }} />
                            </div>
                            <div className="modal-footer">
                              <button type="button"
                                className="btn btn-primary">Kaydet</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button type="button" className="btn btn-success btn-with-icon-text"
                        data-toggle="modal" data-target="#ogrenciEkle">
                        <i className="feather icon-edit"></i>Duzenle</button>
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