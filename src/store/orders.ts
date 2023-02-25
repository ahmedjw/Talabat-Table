import { createSlice } from "@reduxjs/toolkit";
import { stateInterface } from "./interfaces";

const initialState = {
  orders: {},
};

const OrdersSlice = createSlice({
  name: "Orders",
  initialState,
  reducers: {
    clearCart: (state: any) => {
      state.orders = [];
    },
    addOrders: (state: stateInterface, action) => {
      const data = action.payload;
      state.orders = { ...data };
    },
  },
});

export const { clearCart, addOrders } = OrdersSlice.actions;

export default OrdersSlice.reducer;
