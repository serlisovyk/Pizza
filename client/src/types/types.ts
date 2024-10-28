export interface IProduct {
  _id: string
  imageUrl: string
  description: string
  title: string
  types: number[]
  sizes: number[]
  price: number
  category: number
  rating: number
}

export interface ICartProduct {
  _id: string
  count: number
  imageUrl: string
  price: number
  size: number
  title: string
  type: string
}

export interface ISortListItem {
  name: string
  sortProperty: 'rating' | 'title' | 'price'
}

export interface ICategory {
  _id: number
  name: string
}

export interface IProductSearchParams {
  currentCategory: string
  searchValue: string
  currentPage: number
  sortProperty: string
}

export interface ICartState {
  items: ICartProduct[]
  totalPrice: number
}

// export interface IProductResponse {
//   totalResults: number
//   products: IProduct[]
//   page: number
//   totalPages: number
// }
