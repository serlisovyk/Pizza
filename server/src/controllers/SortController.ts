import { NextFunction, Request, Response } from 'express'
import SortService from '../services/SortService.js'
import ApiError from '../error/ApiError.js'

class SortController {
  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const sort = await SortService.getAllSorts()
      res.status(200).json(sort)
    } catch (err) {
      next(
        err instanceof ApiError
          ? err
          : ApiError.badRequest('An unknown error occurred')
      )
    }
  }
}

export default new SortController()
