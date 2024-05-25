import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Layout from './layouts/Layout';
import { AdminLessons } from './pages/admin/Lessons';
import { AdminStudents } from './pages/admin/Students';
import { AdminTeachers } from './pages/admin/Teachers';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { StudentCode } from './pages/student/Code';
import StudentLessons from './pages/student/Lessons';
import { StudentQuizIndex } from './pages/student/quiz/Index';
import { StudentQuizShow } from './pages/student/quiz/Show';
import { StudentQuizs } from './pages/student/Quizs';
import { TeacherCode } from './pages/teacher/Code';
import TeacherLessons from './pages/teacher/Lessons';
import { TeacherQuizs } from './pages/teacher/Quizs';
import { TeacherQuizsShow } from './pages/teacher/quizs/Show';
import { TeacherStudents } from './pages/teacher/Students';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<DefaultLayout />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/teacher-lessons' element={<TeacherLessons />} />
        <Route path='/teacher-quizs' element={<TeacherQuizs />} />
        <Route path='/teacher-students' element={<TeacherStudents />} />
        <Route path='/teacher-codes' element={<TeacherCode />} />
        {/* /quiz/1/show */}
        <Route path='/quiz/:quizId/show' element={<TeacherQuizsShow />} />

        <Route path='/admin-lessons' element={<AdminLessons />} />
        <Route path='/admin-teachers' element={<AdminTeachers />} />
        <Route path='/admin-students' element={<AdminStudents />} />


        <Route path='/student-lessons' element={<StudentLessons />} />
        <Route path='/student-codes' element={<StudentCode />} />
        <Route path='/student-quizs' element={<StudentQuizs />} />

        {/* /student-quizs/1/index */}
        <Route path='/student-quizs/:quizId/index' element={<StudentQuizIndex />} />
        {/* /student-quizs/1/show */}
        <Route path='/student-quizs/:quizId/show' element={<StudentQuizShow />} />
      </Route>
    </Routes>
  );
}

export default App;
