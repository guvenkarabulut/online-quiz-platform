import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { SeeStudentsModal } from "../../components/modals/SeeStudentsModal";
import { Table } from "../../components/Table";
import { TableRow } from "../../components/TableRow";
import DefaultLayout from "../../layouts/DefaultLayout";

const StudentLessons = () => {
  return (
    <DefaultLayout props={{ name: "Ogrenci" }}>
      <div className="pcoded-main-container">
        <Breadcrumb props={{ childs: ["Dersler"] }} />
        <Card props={{ name: "Dersler" }}>
          <div className="table-responsive">
            <Table columns={["#", "Ders Kodu", "Ders Adı", "Öğrenci Sayısı", "İşlemler"]}>
              <TableRow rows={["1", "MAT-101", "Matematik", "22"]}>
                <button type="button" className="btn btn-primary btn-with-icon-text">
                  Ders Detayi
                </button>
              </TableRow>
            </Table>
          </div>
        </Card>
      </div>
    </DefaultLayout >
  );
};

export default StudentLessons;
