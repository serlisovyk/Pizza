import { NextFunction, Request, Response } from 'express'
import { QueryParams } from '../types/types'
import ApiError from '../error/ApiError.js'
import ProductsService from '../services/ProductsService.js'

class ProductsController {
  async getAll(
    req: Request<{}, {}, {}, QueryParams>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { page = 1 } = req.query

    try {
      const paginatedProducts = await ProductsService.getAllProducts(req.query, page)
      res.status(200).json(paginatedProducts)
    } catch (err) {
      next(
        err instanceof ApiError
          ? err
          : ApiError.badRequest('An unknown error occurred')
      )
    }
  }

  async getOne(
    req: Request<{ id: string }, {}, {}, {}>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const singleProduct = await ProductsService.getProductById(req.params.id)
      res.status(200).json(singleProduct)
    } catch (err) {
      next(
        err instanceof ApiError
          ? err
          : ApiError.badRequest('An unknown error occurred')
      )
    }
  }
}

export default new ProductsController()
