import { configureStore } from "@reduxjs/toolkit";
import { apiService } from "../pages/services/api";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    [apiService.reducerPath]: apiService.reducer,
    cart: cartReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware),
});