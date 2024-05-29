import { apiSlice } from "../../app/api/apiSlice";

export const quizsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getQuizzes: builder.mutation({
      query: () => ({
        url: `quizzes`,
        method: "GET",
      }),
    }),
    getQuizzesByTeacher: builder.mutation({
      query: (id) => ({
        url: `teacher-quizzes/${parseInt(id)}`,
        method: "GET",
      }),
    }),
    createQuiz: builder.mutation({
      query: (data) => ({
        url: `quizzes`,
        method: "POST",
        body: data,
      }),
    }),
    updateQuiz: builder.mutation({
      query: (data) => ({
        url: `quizzes`,
        method: "PUT",
        body: data,
      }),
    }),
    getQuizById: builder.mutation({
      query: (id) => ({
        url: `quizzes/${id}`,
        method: "GET",
      }),
    }),
    deleteQuiz: builder.mutation({
      query: (quizId) => ({
        url: `quizzes/${quizId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetQuizzesMutation,
  useGetQuizzesByTeacherMutation,
  useCreateQuizMutation,
  useUpdateQuizMutation,
  useGetQuizByIdMutation,
  useDeleteQuizMutation,
} = quizsApiSlice;
