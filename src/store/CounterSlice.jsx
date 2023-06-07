import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    plus: (state, action) => {
      state.value += 1;
    },
    minus: (state, action) => {
      state.value -= 1;
    },
  },
});

export const { plus, state } = counterSlice.actions;

export default counterSlice.reducer;
