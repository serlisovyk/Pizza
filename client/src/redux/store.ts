import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filter/filterSlice'
import cartSlice from './slices/cart/cartSlice'
import { apiSlice } from './api/apiSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    filter: filterSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: getMiddleware => getMiddleware().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
