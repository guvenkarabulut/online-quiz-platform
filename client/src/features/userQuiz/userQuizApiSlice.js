import { apiSlice } from "../../app/api/apiSlice";

export const userQuizApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createUserQuiz: builder.mutation({
      query: (data) => ({
        url: `user-quizzes`,
        method: "POST",
        body: data,
      }),
    }),
    getUserQuizzes: builder.mutation({
      query: (id) => ({
        url: `student-quiz/${parseInt(id)}`,
        method: "GET",
      }),
    }),
    getUserQuizById: builder.mutation({
      query: (id) => ({
        url: `user-quizzes/${id}`,
        method: "GET",
      }),
    }),
    getUsersQuizByUserId: builder.mutation({
      query: (id) => ({
        url: `student-quiz/lesson/${id}`,
        method: "GET",
      }),
    }),
    updateUserQuiz: builder.mutation({
      query: (data) => ({
        url: `user-quizzes`,
        method: "PUT",
        body: data,
      }),
    }),
    getUserQuizForNote: builder.mutation({
      query: (data) => ({
        url: `user-quizzes/${data.quizId}/${data.userId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateUserQuizMutation,
  useGetUserQuizzesMutation,
  useGetUserQuizByIdMutation,
  useGetUsersQuizByUserIdMutation,
  useUpdateUserQuizMutation,
  useGetUserQuizForNoteMutation
} = userQuizApiSlice;
