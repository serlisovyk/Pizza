import { Router } from 'express'
const router = Router()

import productsRouter from './productsRouter.js'
import categoriesRouter from './categoriesRouter.js'
import sortRouter from './sortRouter.js'

router.use('/products', productsRouter)
router.use('/categories', categoriesRouter)
router.use('/sort', sortRouter)

export default router
