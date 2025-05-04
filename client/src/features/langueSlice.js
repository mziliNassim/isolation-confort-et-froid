import { createSlice } from "@reduxjs/toolkit";

const langueSlice = createSlice({
  name: "langue",
  initialState: 0,
  reducers: {
    setLangue: (state, action) => {
      localStorage.setItem("langue", action.payload);
      return action.payload;
    },
    getStorageLangue: (state) => {
      const langue = localStorage.getItem("langue");
      return langue;
    },
  },
});

export const { setLangue } = langueSlice.actions;
export default langueSlice.reducer;
