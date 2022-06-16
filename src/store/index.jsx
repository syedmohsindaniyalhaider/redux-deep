import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import toggleSlice from "./toggle-slice";

const store = configureStore({
  reducer: {
    toggle: toggleSlice,
    cart: cartSlice,
  },
});

export default store;
