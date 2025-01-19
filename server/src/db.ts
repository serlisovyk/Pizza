import { connect } from 'mongoose'

export default async function connectDB() {
  try {
    if (!process.env.DB_URI) {
      console.log('DB_URI not found')
      process.exit(1)
    }

    await connect(process.env.DB_URI)

    console.log('Connected to MongoDB')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
