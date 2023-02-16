import { Schema } from "mongoose";

// NOTE when you add to your schema and then wipe you mongoDB re-spin 

export const WatcherSchema = new Schema(
  {
    birdId: { type: Schema.Types.ObjectId, required: true, ref: 'Bird' },
    creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

WatcherSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

// NOTE this is saying that only one thing in MongoDb can exist with this creatorId and this birdId --> the same person cant see that bird twice 
WatcherSchema.index({ birdId: 1, creatorId: 1 }, { unique: true })