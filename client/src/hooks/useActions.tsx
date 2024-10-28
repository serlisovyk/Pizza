import { useMemo } from 'react'
import { bindActionCreators } from '@reduxjs/toolkit'
import { cartActions } from '../redux/slices/cart/cartSlice'
import { filterActions } from '../redux/slices/filter/filterSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store'

const useAppDispatch = useDispatch.withTypes<AppDispatch>()

const rootActions = {
  ...cartActions,
  ...filterActions,
}

export default function useActions() {
  const dispatch = useAppDispatch()

  return useMemo(() => {
    return bindActionCreators(rootActions, dispatch)
  }, [dispatch])
}
