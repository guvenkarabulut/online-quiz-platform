import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      Cookies.set("token", token);
      Cookies.set("user", user);
    },
    setRegister: (state, action) => {
      const { user, token } = action.payload;
      Cookies.set("token", token);
      Cookies.set("user", user);
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
      Cookies.remove("token");
      Cookies.remove("user");
      window.location.reload();
    },
  },
});

export const { setCredentials, setRegister, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrenUser = (state) => state.auth.user;

export const selectCurrentToken = (state) => state.auth.token;
