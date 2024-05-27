import { apiSlice } from "../../app/api/apiSlice";

export const codeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCode: builder.mutation({
      query: (data) => ({
        url: `codes`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useCreateCodeMutation,
} = codeApiSlice;
