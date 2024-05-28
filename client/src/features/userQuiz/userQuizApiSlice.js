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

  }),
});

export const {
  useCreateUserQuizMutation,
} = userQuizApiSlice;
