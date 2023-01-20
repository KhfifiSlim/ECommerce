const mongoose = require('mongoose')

const studentSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    price: {
      type: String,
    },
    cat: {
      type: String,
    },    
    image: {
      type: String,
    },
    description: {
      type: String,
    },    
    info: {
      type: String,
    },
    qty: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('products', studentSchema)
