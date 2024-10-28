import express from 'express'
import 'dotenv/config.js'
import cors from 'cors'
import helmet from 'helmet'
import router from './router/router.js'
import errorHandler from './middlewares/ErrorHandlingMiddleware.js'
import connectDB from './db.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(helmet())
app.use('/', router)

// @ts-ignore
app.use(errorHandler)

connectDB()

const PORT = process.env.PORT || 5000

try {
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
} catch (error) {
  console.error('Error starting the server:', error)
}
