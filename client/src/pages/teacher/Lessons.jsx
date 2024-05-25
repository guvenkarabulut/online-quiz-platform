import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { SeeStudentsModal } from "../../components/modals/SeeStudentsModal";
import { Table } from "../../components/Table";
import { TableRow } from "../../components/TableRow";
import DefaultLayout from "../../layouts/DefaultLayout";

const TeacherLessons = () => {
  return (
    <DefaultLayout>
      <div className="pcoded-main-container">

        <Breadcrumb props={{ childs: ["Dersler"] }} />
        <Card props={{ name: "Dersler" }}>
          <div className="table-responsive">
            <Table columns={["#", "Ders Kodu", "Ders Adı", "Öğrenci Sayısı", "İşlemler"]}>
              <TableRow rows={["1", "MAT-101", "Matematik", "22"]}>
                <button type="button" className="btn btn-danger btn-with-icon"><i
                  className="feather icon-trash"></i></button>
                <SeeStudentsModal />
              </TableRow>
            </Table>
          </div>
        </Card>
      </div>
    </DefaultLayout >
  );
};

export default TeacherLessons;
