import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice.jsx";
import toggleReducer from "./ToggleSlice.jsx";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    toggle: toggleReducer,
  },
});

export default store;
