import { createSlice } from "@reduxjs/toolkit";

export const toggleSlice = createSlice({
  name: "toggle",
  initialState: { toggle: false },
  reducers: {
    switchToggle: (state, action) => {},
  },
});

export const { switchToggle } = toggleSlice.actions;

export default toggleSlice.reducer;
