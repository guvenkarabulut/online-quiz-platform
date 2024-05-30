import { apiSlice } from "../../app/api/apiSlice";

export const submissionsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createSubmissions: builder.mutation({
      query: (data) => ({
        url: `code-submissions`,
        method: "POST",
        body: data,
      }),
    }),
    getSubmissionsByCodeId: builder.mutation({
      query: (codeId) => ({
        url: `code-submission-code/${codeId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateSubmissionsMutation,
  useGetSubmissionsByCodeIdMutation,
} = submissionsApiSlice;
