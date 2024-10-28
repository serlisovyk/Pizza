import { ICartProduct, ICartState } from '../types/types'

export const changeTotalPrice = (state: ICartState) => {
  state.totalPrice = state.items.reduce(
    (sum: number, item) => item.price * item.count + sum,
    0
  )
}

export const deleteItemFromCart = (state: ICartState, payload: ICartProduct) => {
  state.items = state.items.filter(
    item =>
      item._id !== payload._id ||
      item.size !== payload.size ||
      item.type !== payload.type
  )
}

export const searchItemInCart = (state: ICartState, payload: ICartProduct) => {
  const findItem = state.items.find(
    item =>
      item._id === payload._id &&
      item.size === payload.size &&
      item.type === payload.type
  )
  return findItem
}

export const saveCartToLocalStorage = (cart: ICartState) => {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export const loadCartFromLocalStorage = (): ICartState => {
  const cartData = localStorage.getItem('cart')
  return cartData ? JSON.parse(cartData) : { items: [], totalPrice: 0 }
}
