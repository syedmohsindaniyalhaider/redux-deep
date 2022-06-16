import { createSlice } from "@reduxjs/toolkit";

const isVisible = false;

const toggleSlice = createSlice({
  name: "toggle",
  initialState: { isVisible },
  reducers: {
    toggle(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

export const toggleActions = toggleSlice.actions;
export default toggleSlice.reducer;
