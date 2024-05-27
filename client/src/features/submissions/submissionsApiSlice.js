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
  }),
});

export const {
  useCreateSubmissionsMutation,
} = submissionsApiSlice;
