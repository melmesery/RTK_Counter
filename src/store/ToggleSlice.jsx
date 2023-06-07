import { createSlice } from "@reduxjs/toolkit";

export const toggleSlice = createSlice({
  name: "toggle",
  initialState: { replace: false },
  reducers: {
    switchToggle: (state) => {
      state.replace = !state.replace;
    },
  },
});

export const { switchToggle } = toggleSlice.actions;

export default toggleSlice.reducer;
