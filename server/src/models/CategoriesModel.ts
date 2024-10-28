import { model, Schema } from 'mongoose'
import { ICategory } from '../types/types'

const categorySchema = new Schema<ICategory>({
  _id: {
    type: Schema.Types.ObjectId,
    auto: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
})

const Category = model<ICategory>('Category', categorySchema)

export default Category
