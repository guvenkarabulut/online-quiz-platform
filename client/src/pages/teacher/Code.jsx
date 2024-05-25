import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Table } from "../../components/Table";
import { TableRow } from "../../components/TableRow";
import { TeacherCodeForm } from "../../components/teacher/code/Form";
import DefaultLayout from "../../layouts/DefaultLayout";

export function TeacherCode() {
  return (
    <DefaultLayout>

      <div className="pcoded-main-container">
        <Breadcrumb props={{ childs: ["Kod Sorulari"] }} />
        <Card props={{ name: "Soru Olustur" }}>
          <TeacherCodeForm />
        </Card>
        <Card props={{ name: "Soru Olustur" }}>
          <div className="table-responsive">
            <Table columns={["#", "Soru", "Ders", "İşlemler"]}>
              <TableRow rows={["1", "Kod Sorusu", "Matematik"]}>
                <button type="button" className="btn btn-danger btn-with-icon"><i
                  className="feather icon-trash"></i></button>
              </TableRow>
            </Table>
          </div>

        </Card>
      </div>
    </DefaultLayout>
  )
}
