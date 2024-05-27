import { apiSlice } from "../../app/api/apiSlice";

export const codeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCode: builder.mutation({
      query: () => ({
        url: `codes`,
        method: "GET",
      }),
    }),
    createCode: builder.mutation({
      query: (data) => ({
        url: `codes`,
        method: "POST",
        body: data,
      }),
    }),
    deleteCode: builder.mutation({
      query: (codeId) => ({
        url: `codes/${codeId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetCodeMutation,
  useCreateCodeMutation,
  useDeleteCodeMutation,
} = codeApiSlice;
