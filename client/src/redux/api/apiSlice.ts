import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASIC_URL } from '../../utils/constants'
import {
  ICategory,
  IProduct,
  IProductSearchParams,
  ISortListItem,
} from '../../types/types'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASIC_URL }),
  tagTypes: ['Categories', 'Sort', 'Pizzas', 'OnePizza'],
  endpoints: builder => ({
    getCategories: builder.query<ICategory[], void>({
      query: () => '/categories',
      providesTags: ['Categories'],
    }),

    getSortList: builder.query<ISortListItem[], void>({
      query: () => '/sort',
      providesTags: ['Sort'],
    }),

    getPizzas: builder.query<IProduct[], IProductSearchParams>({
      query: ({ currentCategory, searchValue, currentPage, sortProperty }) => {
        const params: Record<string, any> = {
          page: currentPage,
          limit: 4,
          sortBy: sortProperty,
          order: 'desc',
        }

        if (currentCategory !== 'Все') params.category = currentCategory
        if (searchValue) params.search = searchValue

        return {
          url: '/products',
          params,
        }
      },
      providesTags: ['Pizzas'],
    }),

    getOnePizza: builder.query<IProduct, string>({
      query: id => `/products/${id}`,
      providesTags: ['OnePizza'],
    }),
  }),
})

export const {
  useGetCategoriesQuery,
  useGetSortListQuery,
  useGetPizzasQuery,
  useGetOnePizzaQuery,
} = apiSlice
