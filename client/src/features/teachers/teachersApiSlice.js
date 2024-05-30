import { apiSlice } from "../../app/api/apiSlice";

export const teachersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllTeachers: builder.mutation({
      query: () => ({
        url: `teacher`,
        method: "GET",
      }),
    }),
    setTeacher: builder.mutation({
      query: (userId) => ({
        url: `teacher/${userId}`,
        method: "GET",
      }),
    }),
    setTeacherToLesson: builder.mutation({
      query: (userId, lessonId) => ({
        url: `teacher-lesson/${userId}/${lessonId}`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useGetAllTeachersMutation,
  useSetTeacherMutation,
} = teachersApiSlice;
