import { configureStore } from "@reduxjs/toolkit";
import langueReducer from "./langueSlice";

const store = configureStore({
  reducer: {
    langue: langueReducer,
  },
});

export default store;
