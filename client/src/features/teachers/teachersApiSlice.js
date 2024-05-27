import { apiSlice } from "../../app/api/apiSlice";

export const teachersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    setTeacher: builder.mutation({
      query: (userId) => ({
        url: `users/teacher/${userId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useSetTeacherMutation,
} = teachersApiSlice;
