import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/CartSlice';
import categorySlice from './slices/categorySlice';
import searchSlice from './slices/searchSlice';
const store = configureStore({
  reducer: {
    cart: cartSlice,
    category: categorySlice,
    search: searchSlice,
  },
});

export default store;
