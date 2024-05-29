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
        url: `students`,
        method: "GET",
      }),
    }),
    getUserById: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetUsersMutation,
  useGetStudentsMutation,
  useGetUserByIdMutation,
} = usersApiSlice;
