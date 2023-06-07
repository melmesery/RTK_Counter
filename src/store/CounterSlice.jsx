import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    plus: (state, action) => {
      state.value += action.payload;
    },
    minus: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { plus, minus } = counterSlice.actions;

export default counterSlice.reducer;
