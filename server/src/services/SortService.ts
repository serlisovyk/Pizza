import SortModel from '../models/SortModel.js'
import { ISort } from '../types/types'
import ApiError from '../error/ApiError.js'

class SortService {
  async getAllSorts(): Promise<ISort[]> {
    const sorts: ISort[] = await SortModel.find()

    if (!sorts.length) throw ApiError.notFound('No sorts found')

    return sorts
  }
}

export default new SortService()
