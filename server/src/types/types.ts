import { Document } from 'mongoose'

export interface QueryParams {
  category?: string
  search?: string
  sortBy?: SortOptions
  page?: number
}

export interface ICategory extends Document {
  name: string
}

export interface IProduct extends Document {
  id: string
  imageUrl: string
  description: string
  title: string
  types: number[]
  sizes: number[]
  price: number
  category: string
  rating: number
}

export interface ISort extends Document {
  name: string
  sortProperty: SortOptions
}

export type SortOptions = 'title' | 'price' | 'rating'
