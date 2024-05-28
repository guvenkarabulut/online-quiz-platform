import { useEffect, useState } from "react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Table } from "../../components/Table";
import { TableRow } from "../../components/TableRow";
import { useGetStudentsByTeacherMutation } from "../../features/students/studentsApiSlice";
import DefaultLayout from "../../layouts/DefaultLayout";

export function TeacherStudents() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    getStudentsData();
  }, [])

  const [getStudentsByTeacher] = useGetStudentsByTeacherMutation();

  const getStudentsData = async () => {
    try {
      const response = await getStudentsByTeacher(5).unwrap();
      setStudents(response.data);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <DefaultLayout>
      <div className="pcoded-main-container">
        <div className="pcoded-content">
          <Breadcrumb props={{ childs: ["Ogrenciler"] }} />
          <div>
            <Card props={{ name: "Quizlerim" }}>
              <div className="table-responsive">
                <Table columns={["#", "Ad Soyad", "Kullanici Adi"]}>
                  {
                    students.map((student, index) => {
                      return (
                        <TableRow key={student.id} rows={[index + 1, student.firstname + " " + student.lastname, student.username]}>
                        </TableRow>
                      )
                    })
                  }
                </Table>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DefaultLayout >
  )
}
