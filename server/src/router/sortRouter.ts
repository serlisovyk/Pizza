import { Router } from 'express'
const router = Router()

import SortController from '../controllers/SortController.js'

router.get('/', SortController.getAll)

export default router
