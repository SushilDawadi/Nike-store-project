//this store file manage the state of our web application globally
import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
const Store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

export default Store;
