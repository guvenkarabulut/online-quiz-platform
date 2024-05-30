import { Routes, Route } from 'react-router-dom';
import RequireAuth from './features/auth/RequireAuth';
import DefaultLayout from './layouts/DefaultLayout';
import Layout from './layouts/Layout';
import { AdminLessons } from './pages/admin/Lessons';
import { AdminStudents } from './pages/admin/Students';
import { AdminTeachers } from './pages/admin/Teachers';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { StudentCode } from './pages/student/Code';
import { StudentCodes } from './pages/student/Codes';
import StudentLessons from './pages/student/Lessons';
import { StudentQuizIndex } from './pages/student/quiz/Index';
import { StudentQuizShow } from './pages/student/quiz/Show';
import { StudentQuizs } from './pages/student/Quizs';
import { TeacherCode } from './pages/teacher/Code';
import TeacherLessons from './pages/teacher/Lessons';
import { TeacherQuizs } from './pages/teacher/Quizs';
import { TeacherQuizsQuestionShow } from './pages/teacher/quizs/QuestionShow';
import { SeeAnswers } from './pages/teacher/quizs/SeeAnswers';
import { TeacherQuizsShow } from './pages/teacher/quizs/Show';
import { TeacherQuizUpdate } from './pages/teacher/quizs/Update';
import { TeacherStudents } from './pages/teacher/Students';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<DefaultLayout />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route element={<RequireAuth />}>
          <Route path='/admin-lessons' element={<AdminLessons />} />
          <Route path='/admin-teachers' element={<AdminTeachers />} />
          <Route path='/admin-students' element={<AdminStudents />} />
          <Route path='/teacher-lessons' element={<TeacherLessons />} />
          <Route path='/teacher-quizs' element={<TeacherQuizs />} />
          <Route path='/teacher-quizs/update/:quizId' element={<TeacherQuizUpdate />} />
          <Route path='/quiz/:quizId/questions/show' element={<TeacherQuizsQuestionShow />} />
          {/* implement edilmedi */}
          <Route path='/quiz/:quizId/show' element={<TeacherQuizsShow />} />
          <Route path='/quiz/:quizId/:userId/answers' element={<SeeAnswers />} />
          <Route path='/teacher-students' element={<TeacherStudents />} />
          <Route path='/teacher-codes' element={<TeacherCode />} />
          <Route path='/student-lessons' element={<StudentLessons />} />
          <Route path='/student-code/:codeId' element={<StudentCode />} />
          <Route path='/student-codes' element={<StudentCodes />} />
          <Route path='/student-quizs' element={<StudentQuizs />} />
          <Route path='/student-quizs/:quizId/index' element={<StudentQuizIndex />} />
          <Route path='/student-quizs/:quizId/show/:userQuizId' element={<StudentQuizShow />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
