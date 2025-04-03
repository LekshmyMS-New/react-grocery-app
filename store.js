import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    cart: cartSlice,
    user: userSlice,
  },
});
