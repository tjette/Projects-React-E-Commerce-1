const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

const UserSchema = new mongoose.Schema({
  local: {
    email: String,
    password: String,
    firstName: String,
    lastName: String
  },
  cart: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}],
  orders: [{type: mongoose.Schema.Types.ObjectId, ref: 'Order'}],
  reviews: [{type: mongoose.Schema.Types.ObjectId, ref: 'Review'}]
})

UserSchema.methods.loadData = function (data) {
  this.name = data.name || this.name
  this.password = data.password || this.password
  this.address = data.address || this.address
}

UserSchema.methods.setMetaDates = function () {
  const newDate = new Date()
  this.created = this.created || newDate
  this.modified = newDate
}

UserSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

// this compares database password to the one the user entered
UserSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.local.password);
}

module.exports = mongoose.model('User', UserSchema)
