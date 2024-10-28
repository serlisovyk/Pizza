import { connect } from 'mongoose'

export default async function connectDB() {
  try {
    await connect(
      'mongodb+srv://serlisovyk:serggres123@pizza.iuabp.mongodb.net/pizza?retryWrites=true&w=majority&appName=pizza' as string
    )
    console.log('Connected to MongoDB')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
