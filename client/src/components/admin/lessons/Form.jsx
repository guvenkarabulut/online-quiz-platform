import Cookies from "js-cookie";
import { useEffect, useState } from "react"
import { useCreateLessonMutation } from "../../../features/lessons/lessonsApiSlice";
import { useGetAllTeachersMutation } from "../../../features/teachers/teachersApiSlice";
import { getUserIdFromToken } from "../../../utils/jwt";

export function AdminLessonsForm() {
  const [teachers, setTeachers] = useState([])

  useEffect(() => {
    getTeachers()
  }, [])

  const [getAllTeachers] = useGetAllTeachersMutation();

  const getTeachers = async () => {
    try {
      const response = await getAllTeachers().unwrap();
      setTeachers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const [lesson, setLesson] = useState({
    name: "",
    definition: "",
    lesson_code: "",
    teacher_id: getUserIdFromToken(Cookies.get("token"))
  })

  const handleChange = (e) => {
    setLesson({
      ...lesson,
      [e.target.name]: e.target.value
    })
    console.log(lesson)
  }

  const [createLesson] = useCreateLessonMutation();

  const handleSubmit = async (e) => {
    try {
      const lessonData = await createLesson({
        name: lesson.name,
        definition: lesson.definition,
        lesson_code: lesson.lesson_code,
        teacher_id: parseInt(lesson.teacher_id),
      }).unwrap()

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label for="inputEmail4">Ders Adi</label>
          <input type="text" className="form-control" id="inputEmail4" placeholder="Ders Adi" name="name" onChange={handleChange} />
        </div>
        <div className="form-group col-md-6">
          <label for="inputEmail4">Ders Kodu</label>
          <input type="text" className="form-control" id="inputEmail4" placeholder="Ders Kodu" name="lesson_code" onChange={handleChange} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label for="inputEmail4">Ogretmen</label>
          <select className="form-control" aria-label="Default select example" name="teacher_id" onChange={handleChange}>
            <option>Ogretmen Sec</option>
            {teachers.map((teacher) => (
              <option value={teacher.id}>{teacher.firstname + " " + teacher.lastname}</option>
            ))
            }
          </select>
        </div>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Ders Tanimi</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="definition" onChange={handleChange}></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Kaydet</button>
    </form>
  )
}
