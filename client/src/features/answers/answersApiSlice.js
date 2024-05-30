import { apiSlice } from "../../app/api/apiSlice";

export const answersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createAnswer: builder.mutation({
      query: (data) => ({
        url: `answers`,
        method: "POST",
        body: data,
      }),
    }),
    createUserAnswer: builder.mutation({
      query: (data) => ({
        url: `user-answers`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useCreateAnswerMutation,
  useCreateUserAnswerMutation
} = answersApiSlice;
