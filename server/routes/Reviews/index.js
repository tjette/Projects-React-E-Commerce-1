const ReviewRoutes = require('./reviews')
const express = require('express')
const Router = express.Router()

Router.get('/', ReviewRoutes.getAll)
Router.post('/', ReviewRoutes.createOne)
Router.get('/:review_id', ReviewRoutes.getOne)
Router.put('/:review_id', ReviewRoutes.editOne)
Router.delete('/:review_id', ReviewRoutes.removeOne)

module.exports = Router
