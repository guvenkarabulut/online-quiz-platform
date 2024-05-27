import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const lessonsSlice = createSlice({
  name: "lesson",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    setLessons: (state, action) => {
      state.lessons = action.payload;
    },
  },
});

export const { setLessons } = lessonsSlice.actions;

export default lessonsSlice.reducer;

export const selectCurrentLesson = (state) => state.lessons.lesson;
