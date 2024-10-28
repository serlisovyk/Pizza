import ApiError from '../error/ApiError.js'
import ProductsModel from '../models/ProductsModel.js'
import { QueryParams, SortOptions } from '../types/types'

class ProductsService {
  async getAllProducts(query: QueryParams, page: number = 1) {
    const { category, search, sortBy } = query

    const filter: { [key: string]: any } = {}
    const options = {
      sort: {} as Record<SortOptions, number>,
      skip: (page - 1) * 4,
      limit: 4,
    }

    if (category && category !== 'Все') filter.category = category
    if (search) filter.$or = [{ title: { $regex: search, $options: 'i' } }]
    if (sortBy) options.sort[sortBy] = -1

    const paginatedProducts = await ProductsModel.find(filter, null, options)

    if (!paginatedProducts.length) throw ApiError.notFound('No products found')

    return paginatedProducts
  }

  async getProductById(id: string) {
    const product = await ProductsModel.findById(id)

    if (!product) throw ApiError.notFound('Product not found')

    return product
  }
}

export default new ProductsService()
