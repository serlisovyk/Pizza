import { model, Schema } from 'mongoose'
import { ISort } from '../types/types'

const sortSchema = new Schema<ISort>(
  {
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
    sortProperty: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      enum: ['rating', 'price', 'title'],
    },
  },
  { collection: 'sort' }
)

const Sort = model<ISort>('Sort', sortSchema)

export default Sort
