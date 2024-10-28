import { Schema, model } from 'mongoose'
import { IProduct } from '../types/types'

const productSchema = new Schema<IProduct>({
  _id: {
    type: Schema.Types.ObjectId,
    auto: true,
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  types: {
    type: [Number],
    required: true,
  },
  sizes: {
    type: [Number],
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
  },
})

const Product = model<IProduct>('Product', productSchema)

export default Product
