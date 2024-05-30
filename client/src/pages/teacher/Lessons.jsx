import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { SeeStudentsModal } from "../../components/modals/SeeStudentsModal";
import { Table } from "../../components/Table";
import { TableRow } from "../../components/TableRow";
import { useGetLessonsByTeacherMutation } from "../../features/lessons/lessonsApiSlice";
import DefaultLayout from "../../layouts/DefaultLayout";
import { getUserIdFromToken } from "../../utils/jwt";

const TeacherLessons = () => {
  const [lessons, setLessons] = useState([]);
  useEffect(() => {
    getLessonsData();
  }, [])

  const [getLessonsByTeacher] = useGetLessonsByTeacherMutation();

  const getLessonsData = async () => {
    try {
      const response = await getLessonsByTeacher(getUserIdFromToken(Cookies.get("token"))).unwrap();
      setLessons(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <DefaultLayout>
      <div className="pcoded-main-container">

        <Breadcrumb props={{ childs: ["Dersler"] }} />
        <Card props={{ name: "Dersler" }}>
          <div className="table-responsive">
            <Table columns={["#", "Ders Kodu", "Ders Adı", "Ders Tanimi", "İşlemler"]}>
              {
                lessons.map((lesson, index) => {
                  return (
                    <TableRow key={lesson.id} rows={[lesson.id, lesson.lesson_code, lesson.name, lesson.definition]}>
                      <SeeStudentsModal props={{ lessonId: lesson.id }} />
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

export default TeacherLessons;
