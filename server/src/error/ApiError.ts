export default class ApiError extends Error {
  status: number

  constructor(status: number, message: string) {
    super()
    this.message = message
    this.status = status
  }

  static badRequest(message: string) {
    return new ApiError(400, message)
  }

  static internal(message: string) {
    return new ApiError(500, message)
  }

  static forbidden(message: string) {
    return new ApiError(403, message)
  }

  static notFound(message: string) {
    return new ApiError(404, message)
  }
}
