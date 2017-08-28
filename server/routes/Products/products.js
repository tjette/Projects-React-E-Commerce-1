const Product = require('../../models/Product')

exports.getAll = (req, res) => {
  Product.find((err, products) => {
    if (err) {
      res.json({ message: err, data: null })
    } else {
      res.json({ message: 'Successfully retrieved all products!', data: products })
    }
  })
}

exports.createOne = (req, res) => {
  const product = new Product()
  product.loadData(req.body)
  product.setMetaDates()
  product.save((err, savedProduct) => {
    if (err) {
      res.json({ message: err, data: null })
    } else {
      res.json({ message: `Successfully created new product: ${savedProduct.name}`, data: savedProduct })
    }
  })
}


exports.getOne = (req, res) => {
  Product.findById(req.params.product_id, (err, product) => {
    if (err) {
      res.json({ message: err, data: null })
    } else {
      res.json({ message: `Successfully updated product: ${product.name}`, data: product })
    }
  })
}

exports.editOne = (req, res) => {
  Product.findById(req.params.product_id, (err, product) => {
    product.loadData(req.body)
    product.setMetaDates()
    product.save((err, savedProduct) => {
      if (err) {
        res.json({ message: err, data: null })
      } else {
        res.json({ message: `Successfully updated product: ${product.name}`, data: savedProduct })
      }
    })
  })
}

exports.removeOne = (req, res) => {
  Product.remove({ _id: req.params.product_id }, (err) => {
    if (err) {
      res.json({ message: err, data: null })
    } else {
      res.json({ message: 'Product successfully deleted.', data: {} })
    }
  })
}
