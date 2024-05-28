import { apiSlice } from "../../app/api/apiSlice";

export const studentsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStudentsByLessonId: builder.mutation({
      query: (id) => ({
        url: `students/${id}`,
        method: "GET",
      }),
    }),
    getStudentsNotInLesson: builder.mutation({
      query: (id) => ({
        url: `student-lesson/${id}`,
        // url: `students`,
        method: "GET",
      }),
    }),
    setStudentToLesson: builder.mutation({
      query: (data) => ({
        url: `students/${data.lessonId}/${data.studentId}`,
        method: "GET",
      }),
    }),
    getStudentsByTeacher: builder.mutation({
      query: (id) => ({
        url: `student-teacher/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetStudentsByLessonIdMutation,
  useGetStudentsNotInLessonMutation,
  useSetStudentToLessonMutation,
  useGetStudentsByTeacherMutation,
} = studentsApiSlice;
