import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  cartItems: [],
};
const cartSlice = createSlice({
  name: 'cart Items',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const cartItem = {
        id: action.payload.id,
        name: action.payload.name,
        qty: action.payload.qty,
        price: action.payload.price,
        imgUrl: action.payload.imgUrl,
        rating: action.payload.rating,
      };
      const existItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      existItem
        ? (existItem.qty += 1)
        : state.cartItems.push(cartItem);
    },
    incrQty: (state, action) => {
      state.cartItems.map((item) =>
        item.id === action.payload ? (item.qty += 1) : item.qty
      );
    },
    decrQty: (state, action) => {
      state.cartItems.map((item) =>
        item.id === action.payload
          ? item.qty > 1 && (item.qty -= 1)
          : item.qty
      );
    },
    remvoveFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => (state.cart = item.id !== action.payload)
      );
    },
  },
});

export const { addToCart, remvoveFromCart, incrQty, decrQty } =
  cartSlice.actions;
export default cartSlice.reducer;
