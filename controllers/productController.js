
const db = require('../models')

//create our Main model
const Product = db.products
const Review = db.reviews

//main work

//1. create product
const addProduct = async (req, res) => {

  let info = {
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      published: !!req.body.published 
  }

  const product = await Product.create(info)
  res.status(200).send(product)
  console.log(product)

}

//2. get all products

const getAllProducts = async (req, res) => {

  try{
    let products = await Product.findAll()
    res.status(200).send(products)
  }catch(err){
    res.status(500).send('Error retrieving products'); // Handle errors if they occur
  }
}

//3. get single product

const getOneProduct = async (req, res) => {

  let id = req.params.id
  let product = await Product.findOne({ where: { id: id } })
  res.status(200).send(product)

}

//4. update single product
const updateProduct = async (req, res) => {

  let id = req.params.id
  const product = await Product.update(req.body, { where: { id: id } })
  res.status(200).send(product)

}

//5. delete single product

const deleteProduct = async (req, res) => {

  let id = req.params.id
  await Product.destroy({ where: { id: id } })
  res.status(200).send('Product is deleted successfully')

}

//6. get published product

const getPublishedProduct = async (req, res) => {
  const products = await Product.findAll({ where: { published: true}})
  res.status(200).send(products)
}

//7. conect 1 to many relation Product and Reviews
const getProductReviews = async (req, res) => {

  const data = await Product.findAll({
    include: [{
      model: Review,
      as: 'review'
    }],
    where: {id : 2}
  })

  res.status(200).send(data)
}


module.exports = {
  addProduct,
  deleteProduct,
  updateProduct,
  getOneProduct,
  getAllProducts,
  getPublishedProduct,
  getProductReviews
}