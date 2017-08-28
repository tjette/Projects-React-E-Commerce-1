const OrderRoutes = require('./orders')
const express = require('express')
const Router = express.Router()

Router.get('/',OrderRoutes.getAll)
Router.post('/', OrderRoutes.createOne)
Router.get('/:order_id', OrderRoutes.getOne)
Router.put('/:order_id', OrderRoutes.editOne)
Router.delete('/:order_id', OrderRoutes.removeOne)

module.exports = Router
