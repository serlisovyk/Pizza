import CategoryModel from '../models/CategoriesModel.js'
import { ICategory } from '../types/types'
import ApiError from '../error/ApiError.js'

class CategoryService {
  async getAllCategories(): Promise<ICategory[]> {
    const categories: ICategory[] = await CategoryModel.find()

    if (!categories.length) throw ApiError.notFound('No categories found')

    return categories
  }
}

export default new CategoryService()
