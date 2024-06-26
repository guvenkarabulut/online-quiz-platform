import { apiSlice } from "../../app/api/apiSlice";

export const lessonsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLessons: builder.mutation({
      query: () => ({
        url: `lessons`,
        method: "GET",
      }),
    }),
    getLessonsByTeacher: builder.mutation({
      query: (id) => ({
        url: `teacher-lesson/${id}`,
        method: "GET",
      }),
    }),
    createLesson: builder.mutation({
      query: (data) => ({
        url: `lessons`,
        method: "POST",
        body: data,
      }),
    }),
    deleteLesson: builder.mutation({
      query: (lessonId) => ({
        url: `lessons/${lessonId}`,
        method: "DELETE",
      }),
    }),
    deleteStudentInLesson: builder.mutation({
      query: (data) => ({
        url: `student-lesson/remove/${data.lessonId}/${data.studentId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetLessonsMutation,
  useGetLessonsByTeacherMutation,
  useCreateLessonMutation,
  useDeleteLessonMutation,
  useDeleteStudentInLessonMutation,
} = lessonsApiSlice;
