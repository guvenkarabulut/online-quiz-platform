import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { SeeStudentsModal } from "../../components/modals/SeeStudentsModal";
import { Table } from "../../components/Table";
import { TableRow } from "../../components/TableRow";
import { useGetUserByIdMutation } from "../../features/users/usersApiSlice";
import DefaultLayout from "../../layouts/DefaultLayout";
import { getUserIdFromToken } from "../../utils/jwt";

const StudentLessons = () => {
  const [lessons, setLessons] = useState([]);

  const [getUserById] = useGetUserByIdMutation();
  useEffect(() => {
    getLessonsData();
  }, [])

  const getLessonsData = async () => {
    try {
      const response = await getUserById(getUserIdFromToken(Cookies.get("token"))).unwrap();
      setLessons(response.lessons);

    } catch (error) {
      console.log(error);
    }
  }



  return (
    <DefaultLayout props={{ name: "Ogrenci" }}>
      <div className="pcoded-main-container">
        <Breadcrumb props={{ childs: ["Dersler"] }} />
        <Card props={{ name: "Dersler" }}>
          <div className="table-responsive">
            <Table columns={["#", "Ders Kodu", "Ders Adı", "Ders Tanimi"]}>
              {
                lessons.map((lesson, index) => {
                  return (
                    <TableRow key={lesson.id} rows={[index + 2, lesson.lesson_code, lesson.name, lesson.definition]}>
                    </TableRow>
                  )
                })
              }
            </Table>
          </div>
        </Card>
      </div>
    </DefaultLayout >
  );
};

export default StudentLessons;
