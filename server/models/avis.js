const mongoose = require('mongoose')

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    description: {
      type: String,
    },
    prod_id: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('avis', categorySchema)
