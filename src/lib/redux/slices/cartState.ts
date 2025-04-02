import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartState: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleState: (state) => {
      state.cartState = !state.cartState;
    },
  },
});

export const { toggleState } = cartSlice.actions;
export default cartSlice.reducer;
