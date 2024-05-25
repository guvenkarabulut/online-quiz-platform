import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { SeeStudentsModal } from "../../components/modals/SeeStudentsModal";
import { Table } from "../../components/Table";
import { TableRow } from "../../components/TableRow";
import DefaultLayout from "../../layouts/DefaultLayout";

export function AdminTeachers() {
  return (
    <DefaultLayout props={{ name: "Admin" }}>
      <div className="pcoded-main-container">
        <Breadcrumb props={{ childs: ["Ogretmenler"] }} />
        <Card props={{ name: "Ogretmen Ekle" }}>
          <div className="table-responsive">
            <Table columns={["#", "Isim Soyisim", "Eposta", "Kullanici Adi", "İşlemler"]}>
              <TableRow rows={["1", "Mustafa Akil", "makil@gmail.com", "makil21"]}>
                <button type="button" className="btn btn-success btn-with-icon-text">Ogretmen Yap</button>
              </TableRow>
            </Table>
          </div>
        </Card>
      </div>
    </DefaultLayout>
  )
}

