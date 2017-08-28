const ProductRoutes = require('./products')
const express = require('express')
const Router = express.Router()

Router.get('/', ProductRoutes.getAll)
Router.post('/', ProductRoutes.createOne)
Router.get('/:product_id', ProductRoutes.getOne)
Router.put('/:product_id', ProductRoutes.editOne)
Router.delete('/:product_id', ProductRoutes.removeOne)

module.exports = Router
