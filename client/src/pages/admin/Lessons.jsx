import { useEffect, useState } from "react";
import { AdminLessonsForm } from "../../components/admin/lessons/Form";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Table } from "../../components/Table";
import { TableRow } from "../../components/TableRow";
import { useDeleteLessonMutation, useGetLessonsMutation } from "../../features/lessons/lessonsApiSlice";
import DefaultLayout from "../../layouts/DefaultLayout";

export function AdminLessons() {

  const [lessons, setLessons] = useState([]);
  useEffect(() => {
    getLessonsData();
  }, [])

  const [getLessons] = useGetLessonsMutation();

  const getLessonsData = async () => {
    try {
      const response = await getLessons().unwrap();
      setLessons(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const [deleteLesson] = useDeleteLessonMutation();

  const handleDelete = async (id) => {
    try {
      await deleteLesson(id).unwrap();
      getLessonsData();
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <DefaultLayout props={{ name: "Admin" }}>
      <div className="pcoded-main-container">
        <Breadcrumb props={{ childs: ["Dersler"] }} />
        <Card props={{ name: "Ders Ekle" }}>
          <AdminLessonsForm />
        </Card>
        <Card props={{ name: "Dersler" }}>
          <div className="table-responsive">
            <Table columns={["#", "Ders Kodu", "Ders Adı", "Tanim", "Öğretmen Ismi", "İşlemler"]}>
              {
                lessons.map((lesson, index) => {
                  return (
                    <TableRow key={lesson.id} rows={[index + 1, lesson.lesson_code, lesson.name, lesson.definition, (lesson.teacher.FirstName + " " + lesson.teacher.LastName)]}>
                      <button type="button" className="btn btn-danger btn-with-icon" onClick={() => handleDelete(lesson.id)}><i
                        className="feather icon-trash"></i></button>
                    </TableRow>
                  )
                })
              }
            </Table>
          </div>
        </Card>
      </div>
    </DefaultLayout >
  )
}

