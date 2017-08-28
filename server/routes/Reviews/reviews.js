const Review = require('../../models/Review')

exports.getAll = (req, res) => {
    Review.find((err, reviews) => {
      if (err) { res.json({ message: err, data: null }) } else { res.json({ message: 'Got all reviews', data: reviews }) }
    })
  }

exports.createOne = (req, res) => {
  const review = new Review()
  review.loadData(req.body)
  review.setMetaDates()
  review.save((err, review) => {
    if (err) { res.json({ message: err, data: null }) } else { res.json({ message: `Created new review: ${review.comment}`, data: review }) }
  })
}

exports.getOne = (req, res) => {
  Review.findById(req.params.review_id, (err, review) => {
    if (err) { res.json({ message: err, data: null }) } else { res.json({ message: `Updated review: ${review.comment}`, data: review }) }
  })
}


exports.editOne = (req, res) => {
  Review.findById(req.params.review_id, (err, review) => {
    review.loadData(req.body)
    review.setMetaDates()
    review.save((err, review) => {
      if (err) { res.json({ message: err, data: null }) } else { res.json({ message: `Updated review: ${review.comment}`, data: review }) }
    })
  })
}

exports.removeOne = (req, res) => {
  Review.remove({_id: req.params.review_id}, (err) => {
    if (err) { res.json({ message: err, data: null}) } else { res.json({ message: `Successfully deleted review.`, data: {} }) }
  })
}
