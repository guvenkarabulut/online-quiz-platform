import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Table } from "../../components/Table";
import { TableRow } from "../../components/TableRow";
import DefaultLayout from "../../layouts/DefaultLayout";


export function AdminStudents() {
  return (
    <DefaultLayout props={{ name: "Admin" }}>
      <div className="pcoded-main-container">
        <Breadcrumb props={{ childs: ["Ogrenciler"] }} />
        <Card props={{ name: "Ogrenciler" }}>
          <div className="table-responsive">
            <Table columns={["#", "Isim Soyisim", "Eposta", "Kullanici Adi", "İşlemler"]}>
              <TableRow rows={["1", "Mustafa Akil", "makil@gmail.com", "makil21"]}>
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
