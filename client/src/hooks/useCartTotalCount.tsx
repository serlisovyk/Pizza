import { useAppSelector } from './useAppSelector'
import { RootState } from '../redux/store'
import { selectCart } from '../redux/slices/cart/cartSlice'

export default function useCartTotalCount() {
  const items = useAppSelector((state: RootState) => selectCart(state).items)

  return items.reduce((sum: number, item) => sum + item.count, 0)
}
