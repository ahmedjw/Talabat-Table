import { configureStore } from "@reduxjs/toolkit";
import ordersReducer from "./orders";

export const store = configureStore({
  reducer: {
    orders: ordersReducer,
  },
});
