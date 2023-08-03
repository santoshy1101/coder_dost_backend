const mongoose = require("mongoose")
const { Schema } = mongoose;

const productSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  price: Number,
  body: String,
  description:String,
  category:"String",
  rtinag:Number,
  image:String

});

exports.Prodouct = mongoose.model('Product', productSchema);

