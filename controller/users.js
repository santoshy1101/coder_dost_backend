// read C R U D
let users = require('../data.json')
const model = require('../model/product')
const Product = model.Prodouct
console.log(Product)

exports.getAllUsers = async (req, res) => {
  const products = await Product.find()
  console.log(products)
  res.send(products)
}
exports.getUser = async (req, res) => {
  const id = req.params.id
  console.log(id)
  const product = await Product.find({ _id: id })
  res.send(product)
}

// create
exports.createUser = async (req, res) => {
  console.log('create user')
  const product = new Product(req.body)
  await product.save()
  res.send(product)
}

// update
exports.updateUser = async(req, res) => {
  let id = req.params.id
  const updateProduct = await Product.findByIdAndUpdate({_id:id},req.body,{new:true})  

  res.send(updateProduct)
}

// replace
exports.replaceUser = async(req, res) => {
  let id = req.params.id
  const replaceProduct = await Product.findOneAndReplace({_id:id},req.body,{new:true})
  res.send(replaceProduct)
}

// delete
exports.deleteUser = async(req, res) => {
  const id = req.params.id;
  const deleteProduct = await Product.findOneAndDelete({_id:id});
  res.send(deleteProduct)
}
