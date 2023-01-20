const mongoose = require('mongoose')

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    type: {
      type: Number,
    },
    cat_id: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('category', categorySchema)
