const UserRoutes = require('./users')
const express = require('express')
const Router = express.Router()

Router.get('/', UserRoutes.getAll)
Router.post('/', UserRoutes.createOne)
Router.get('/:user_id', UserRoutes.getOne)
Router.put('/:user_id', UserRoutes.editOne)
Router.delete('/:user_id', UserRoutes.removeOne)
Router.put('/cart/add/:user_id',UserRoutes.addToCart)
Router.put('/cart/remove/:user_id',UserRoutes.removeFromCart)

module.exports = Router
