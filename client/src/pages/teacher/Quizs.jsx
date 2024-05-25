import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Table } from "../../components/Table";
import { TableRow } from "../../components/TableRow";
import DefaultLayout from "../../layouts/DefaultLayout";
import { AddQuizModal } from "../../components/modals/AddQuizModal";
import { SeeQuizQuestionsModal } from "../../components/modals/SeeQuizQuestionsModal";

export function TeacherQuizs() {
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
                  <TableRow rows={["1", "Quiz 1", "Quiz 1 Açıklaması", "30 dk", "01.01.2021", "01.01.2021", "Matematik"]}>
                    <button type="button" className="btn btn-danger btn-with-icon"><i className="feather icon-trash"></i></button>
                    <button type="button" className="btn btn-success btn-with-icon"><i className="feather icon-edit"></i></button>
                    <SeeQuizQuestionsModal />
                    <a href="/quiz/1/show" type="button" className="btn btn-secondary btn-with-icon-text">
                      Quiz Detayi
                    </a>
                  </TableRow>
                </Table>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DefaultLayout >
  )
}
