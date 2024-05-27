import { createSlice } from "@reduxjs/toolkit";

const teachersSlice = createSlice({
  name: "teachers",
  initialState: {
    token: null,
  },
  reducers: {
    setTeachers: (state, action) => {
      state.teachers = action.payload;
    },
  },
});

export const { setTeachers } = teachersSlice.actions;

export default teachersSlice.reducer;
