import { NextFunction, Request, Response } from 'express'
import ApiError from '../error/ApiError.js'

export default function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof ApiError) return res.status(err.status).json({ message: err })

  return res.status(500).json({ message: 'Непредвиденная ошибка' })
}
