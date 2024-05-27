import { apiSlice } from "../../app/api/apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.mutation({
      query: () => ({
        url: `users`,
        method: "GET",
      }),
    }),
    getStudents: builder.mutation({
      query: () => ({
        url: `users/student`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetUsersMutation,
  useGetStudentsMutation,
} = usersApiSlice;
