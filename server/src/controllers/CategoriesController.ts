import { NextFunction, Request, Response } from 'express'
import CategoryService from '../services/CategoriesService.js'
import ApiError from '../error/ApiError.js'

class CategoriesController {
  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const categories = await CategoryService.getAllCategories()
      res.status(200).json(categories)
    } catch (err) {
      next(
        err instanceof ApiError
          ? err
          : ApiError.badRequest('An unknown error occurred')
      )
    }
  }
}

export default new CategoriesController()
