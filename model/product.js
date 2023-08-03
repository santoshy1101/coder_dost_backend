const mongoose = require('mongoose')
const { Schema } = mongoose

const productSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  id: String,
  title: String,
  description: String,
  price: Number,
  rating: Number,
  stock: Number,
  brand: String,
  category: String,
})

exports.Prodouct = mongoose.model('Product', productSchema)
