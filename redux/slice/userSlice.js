import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  role: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },

    setRole: (state, action) => {
      state.role = action.payload;
    },

    emptyUser: (state) => {
      state.user = null;
      state.role = null;
    },
  },
});

export const { setUser, setRole, emptyUser } = userSlice.actions;
