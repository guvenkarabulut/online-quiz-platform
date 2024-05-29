import { useEffect, useState } from "react";
import { useDeleteStudentInLessonMutation } from "../../features/lessons/lessonsApiSlice";
import { useGetStudentsByLessonIdMutation, useGetStudentsNotInLessonMutation, useSetStudentToLessonMutation } from "../../features/students/studentsApiSlice";
import { Table } from "../Table";
import { TableRow } from "../TableRow";

export function SeeStudentsModal({ props }) {
  const [students, setStudents] = useState([]);
  const [lessonId, setLessonId] = useState(0);

  const [getStudentsByLessonId] = useGetStudentsByLessonIdMutation();

  useEffect(() => {
    getStudentsData(props.lessonId)
    getStudentsNotInLessonData(props.lessonId)
    setLessonId(props.lessonId);
  }, [])

  const getStudentsData = async (id) => {
    try {
      const response = await getStudentsByLessonId(id).unwrap();
      setStudents(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  const [studentsNotInLesson, setStudentsNotInLesson] = useState([]);

  const [getStudentsNotInLesson] = useGetStudentsNotInLessonMutation();


  const getStudentsNotInLessonData = async (id) => {
    try {
      const response = await getStudentsNotInLesson(id).unwrap();
      setStudentsNotInLesson(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const [setStudentToLesson] = useSetStudentToLessonMutation();

  const [studentId, setStudentId] = useState(0);

  const handleSetStudentToLesson = async () => {
    try {
      console.log(studentId, lessonId);
      await setStudentToLesson({ lessonId: lessonId, studentId: studentId });
    } catch (error) {
      console.log(error);
    }
  }

  const [deleteStudentInLesson] = useDeleteStudentInLessonMutation();

  const handleDeleteStudent = async (studentId) => {
    try {
      await deleteStudentInLesson({ lessonId: lessonId, studentId: studentId });
      getStudentsData(lessonId);
      getStudentsNotInLessonData(lessonId);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div class="accordion" id={lessonId + "accordionExample"}>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#" + lessonId + "collapseOne"} aria-expanded="false" aria-controls={lessonId + "collapseOne"}>
              Ogrenci Ekle
            </button>
          </h2>
          <div id={lessonId + "collapseOne"} class="accordion-collapse collapsed collapse " data-bs-parent={"#" + lessonId + " accordionExample"}>
            <div class="accordion-body">
              <form onSubmit={handleSetStudentToLesson} key={lessonId}>
                <div className="form-group">
                  <label
                    for="exampleFormControlInput1" key={lessonId}>Öğrenciler</label>
                  <select className="form-control"
                    id="exampleFormControlSelect1" onChange={(e) => setStudentId(e.target.value)}>
                    <option value="" selected disabled hidden>Öğrenci Seç</option>
                    {
                      studentsNotInLesson.map((student) => {
                        return (
                          <option value={student.id}>{student.firstname + " " + student.lastname}</option>
                        )
                      })
                    }
                  </select>
                </div>
                <button type="submit"
                  className="btn btn-primary">Kaydet</button>
              </form>
              <div className="table-responsive">
                <Table columns={["#", "İsim Soyisim", "Kullanıcı Adı", "İşlemler"]}>
                  {
                    students.map((student, index) => {
                      return (
                        <TableRow key={student.id} rows={[index + 1, student.firstname + " " + student.lastname, student.username]}>
                          <button type="button" className="btn btn-danger btn-with-icon" onClick={() => { handleDeleteStudent(student.id) }} >
                            <i className="feather icon-trash"></i>
                          </button>
                        </TableRow>
                      )
                    })
                  }
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
