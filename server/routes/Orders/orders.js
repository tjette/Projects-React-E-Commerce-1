const Order = require('../../models/Order')

exports.getAll = (req, res) => {
    Order.find((err, orders) => {
      if (err) {
        res.json({ message: err, data: null })
      } else {
        res.json({ message: 'Got all orders', data: orders })
      }
    })
  }

exports.createOne = (req, res) => {
  const order = new Order()
  order.setStatus(req.body)
  order.save((err, order) => {
    if (err) {
      res.json({ message: err, data: null })
    } else {
      res.json({ message: `Created new order.`, data: order })
    }
  })
}


exports.getOne = (req, res) => {
  Order.findById(req.params.order_id, (err, order) => {
    if (err) {
      res.json({ message: err, data: null })
    } else {
      res.json({ message: `Updated order: ${order.comment}`, data: order })
    }
  })
}

exports.editOne = (req, res) => {
  Order.findById(req.params.order_id, (err, order) => {
    order.rating = req.body.rating ? req.body.rating : order.rating
    order.comment = req.body.comment ? req.body.comment : order.comment
    order.dateModified = new Date()

    order.save((err, order) => {
      if (err) {
        res.json({ message: err, data: null })
      } else {
        res.json({ message: `Updated order: ${order.comment}`, data: order })
      }
    })
  })
}

exports.removeOne = (req, res) => {
  Order.remove({_id: req.params.order_id}, (err) => {
    if (err) {
      res.json({ message: err, data: null})
    } else {
      res.json({ message: `Successfully deleted order.`, data: {} })
    }
  })
}
