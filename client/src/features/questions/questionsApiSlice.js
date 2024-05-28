import { apiSlice } from "../../app/api/apiSlice";

export const questionsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getQuestionsByQuizId: builder.mutation({
      query: (quiz_id) => ({
        // url: `questions/${quiz_id}`,
        url: `questions`,
        method: "GET",
      }),
    }),
    createQuestion: builder.mutation({
      query: (data) => ({
        url: `questions`,
        method: "POST",
        body: data,
      }),
    }),
    deleteQuestion: builder.mutation({
      query: (question_id) => ({
        url: `questions/${question_id}`,
        method: "DELETE",
      }),
    }),
    updateQuestion: builder.mutation({
      query: (data) => ({
        url: `questions`,
        method: "PUT",
        body: data,
      }),
    }),
    getQuestionByQuiz: builder.mutation({
      query: (id) => ({
        url: `questions/quiz/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetQuestionsByQuizIdMutation,
  useCreateQuestionMutation,
  useDeleteQuestionMutation,
  useUpdateQuestionMutation,
  useGetQuestionByQuizMutation,
} = questionsApiSlice;
