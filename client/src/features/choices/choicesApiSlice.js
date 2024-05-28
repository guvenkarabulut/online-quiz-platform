import { apiSlice } from "../../app/api/apiSlice";

export const choicesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createChoice: builder.mutation({
      query: (data) => ({
        url: `choices`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useCreateChoiceMutation,
} = choicesApiSlice;
