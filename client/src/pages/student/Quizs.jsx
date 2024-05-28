import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Table } from "../../components/Table";
import { TableRow } from "../../components/TableRow";
import DefaultLayout from "../../layouts/DefaultLayout";
export function StudentQuizs() {
  return (
    <DefaultLayout props={{ name: "Ogrenci" }}>
      <div className="pcoded-main-container">
        <div className="pcoded-content">
          <Breadcrumb props={{ childs: ["Quizler"] }} />
          <div>
            <Card props={{ name: "Quizlerim" }}>
              <div className="table-responsive">
                <Table columns={["#", "Quiz Adı", "Quiz Açıklaması", "Süre", "Başlangıç Tarihi", "Bitiş Tarihi", "Ders", "İşlemler"]}>
                  <TableRow rows={["1", "Quiz 1", "Quiz 1 Açıklaması", "30 dk", "01.01.2021", "01.01.2021", "Matematik"]}>
                    <a href="/student-quizs/2/index" type="button" className="btn btn-primary btn-with-icon-text">
                      Quize Basla
                    </a>
                    <a href="/quiz/1/show" type="button" className="btn btn-secondary btn-with-icon-text">
                      Quiz Bilgiler
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
