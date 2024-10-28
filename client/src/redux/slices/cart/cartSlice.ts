import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartProduct } from '../../../types/types'
import { RootState } from '../../store'
import {
  changeTotalPrice,
  deleteItemFromCart,
  loadCartFromLocalStorage,
  saveCartToLocalStorage,
  searchItemInCart,
} from '../../../utils/utils'

const initialState = loadCartFromLocalStorage()

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, { payload }: PayloadAction<Omit<ICartProduct, 'count'>>) {
      const findItem = searchItemInCart(state, payload as ICartProduct)

      if (findItem) findItem.count++
      else state.items.push({ ...payload, count: 1 })

      changeTotalPrice(state)
      saveCartToLocalStorage(state)
    },

    minusItemInCart(state, { payload }: PayloadAction<ICartProduct>) {
      const findItem = searchItemInCart(state, payload)

      if (findItem) findItem.count--
      if (findItem?.count === 0) deleteItemFromCart(state, payload)

      changeTotalPrice(state)
      saveCartToLocalStorage(state)
    },

    removeItemFromCart(state, { payload }: PayloadAction<ICartProduct>) {
      deleteItemFromCart(state, payload)
      changeTotalPrice(state)
      saveCartToLocalStorage(state)
    },

    clearCart(state) {
      state.items = []
      state.totalPrice = 0
      saveCartToLocalStorage(state)
    },
  },
})

export const selectCart = (state: RootState) => state.cart

export const { actions: cartActions } = cartSlice

export default cartSlice.reducer
