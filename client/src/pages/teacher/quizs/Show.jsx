import { Breadcrumb } from "../../../components/Breadcrumb"
import { Card } from "../../../components/Card"
import { SeeStudentsModal } from "../../../components/modals/SeeStudentsModal"
import { Table } from "../../../components/Table"
import { TableRow } from "../../../components/TableRow"
import DefaultLayout from "../../../layouts/DefaultLayout"

export function TeacherQuizsShow() {
  return (
    <DefaultLayout>
      <div className="pcoded-main-container">
        <Breadcrumb props={{ childs: ["Quizler", "Quiz Bilgileri"] }} />
        <Card props={{ name: "Dersler" }}>
          <div className="table-responsive">
            <Table columns={["#", "Isim Soyisim", "Eposta", "Kullanici Adi", "İşlemler"]}>
              <TableRow rows={["1", "Mustafa Akil", "makil@gmail.com", "makil21"]}>
                <button type="button" className="btn btn-primary btn-with-icon-text">
                  Cevapları Gör
                </button>
                <button type="button" className="btn btn-success btn-with-icon-text">
                  Puan Ver
                </button>
              </TableRow>
            </Table>
          </div>
        </Card>
      </div>


    </DefaultLayout>
  )

}
