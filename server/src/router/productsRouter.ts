import { Router } from 'express'
const router = Router()

import ProductsController from '../controllers/ProductsController.js'

router.get('/', ProductsController.getAll)
router.get('/:id', ProductsController.getOne)

export default router
