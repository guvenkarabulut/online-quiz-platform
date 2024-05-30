import Cookies from 'js-cookie';
import { Editor } from 'primereact/editor';
import { useEffect, useState } from "react";
import { useCreateCodeMutation } from '../../../features/code/codeApiSlice';
import { useGetLessonsByTeacherMutation } from '../../../features/lessons/lessonsApiSlice';
import { useCreateSubmissionsMutation } from '../../../features/submissions/submissionsApiSlice';
import { getUserIdFromToken } from '../../../utils/jwt';

export function TeacherCodeForm({ props }) {
  const [text, setText] = useState('');

  const [getLessonByTeacher] = useGetLessonsByTeacherMutation();
  const [lessons, setLessons] = useState([]);

  // TODO: change 5 after login
  useEffect(() => {
    getLessons(getUserIdFromToken(Cookies.get("token")))
  }, [])

  const getLessons = async (teacherId) => {
    const response = await getLessonByTeacher(teacherId).unwrap();
    setLessons(response.data);
  }
  const [code, setCode] = useState({
    question: text,
    lesson_id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCode({
      ...code,
      [name]: value,
    });
  }

  const [tests, setTests] = useState([{ input: "", output: "" }]);

  const handleAddTest = () => {
    setTests([...tests, { input: "", output: "" }]);
  }

  const handleTestChange = (e, index) => {
    const { name, value } = e.target;
    const newTests = tests.map((test, i) => {
      if (i === index) {
        return {
          ...test,
          [name]: value,
        }
      }
      return test;
    })
    setTests(newTests);
    console.log(newTests);
  }

  const [createCode] = useCreateCodeMutation();
  const [createSubmissions] = useCreateSubmissionsMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createCode({
      question: code.question,
      lesson_id: parseInt(code.lesson_id),
    }).unwrap();

    if (response) {
      await Promise.all(tests.map(async (test) => {
        await createSubmissions({
          input: test.input,
          expected_output: test.output,
          code_id: response.ID
        });
      }));
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <div classname="mb-3">
        <label for="inputEmail4">Soru</label>
        <Editor value={text} onTextChange={(e) => {
          setText(e.htmlValue);
          setCode({
            ...code,
            question: e.htmlValue,
          });
        }} style={{ height: '160px' }} />
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label for="inputEmail4">Ders</label>
          <select className="form-control" aria-label="Default select example" name="lesson_id" onChange={handleChange}>
            <option>Ders Sec</option>
            {
              lessons.map((lesson) => (
                <option value={lesson.id}>{lesson.name}</option>
              ))
            }
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <div className="form-group d-flex justify-content-between align-items-center">
            <label for="inputEmail4">Testler</label>
            <button type="button" className="btn btn-primary" onClick={handleAddTest}>Test Ekle</button>
          </div>
          {
            tests.map((test, index) => (
              <div className="form-group d-flex justify-content-between align-items-center">
                <div className="form-group col-md-6">
                  <input type="text" className="form-control" id="inputEmail4" name="input" placeholder='Giris' value={test.input} onChange={(e) => handleTestChange(e, index)} />
                </div>
                <div className="form-group col-md-6">
                  <input type="text" className="form-control" id="inputEmail4" name="output" value={test.output} placeholder="Cikis" onChange={(e) => handleTestChange(e, index)} />
                </div>
              </div>
            ))
          }

        </div>
      </div>
      <button type="submit" className="btn btn-primary">Kaydet</button>
    </form >
  )
}
