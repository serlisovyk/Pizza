import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { ISortListItem } from '../../../types/types'




const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    searchValue: '',
    currentPage: 1,
    currentCategory: 'Все',
    sort: { name: 'популярности', sortProperty: 'rating' } as ISortListItem,
  },
  reducers: {
    setActiveCategory(state, { payload }: PayloadAction<string>) {
      state.currentCategory = payload
    },

    setSearchValue(state, { payload }: PayloadAction<string>) {
      state.searchValue = payload
    },

    setSort(state, { payload }: PayloadAction<ISortListItem>) {
      state.sort = payload
    },

    setCurrentPage(state, { payload }: PayloadAction<number>) {
      state.currentPage = payload
    },
  },
})

export const selectFilter = (state: RootState) => state.filter

export const { actions: filterActions } = filterSlice

export default filterSlice.reducer
