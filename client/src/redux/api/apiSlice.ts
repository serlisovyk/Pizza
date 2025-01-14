import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASIC_URL } from '../../utils/constants'
import {
  ICategory,
  IProduct,
  IProductSearchParams,
  ISortListItem,
} from '../../types/types'
import { buildProductQueryParams } from '../../utils/utils'

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
      query: params => ({
        url: '/products',
        params: buildProductQueryParams(params),
      }),
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
