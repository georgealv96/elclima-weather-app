const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  city: String,
  country: String
})

module.exports = mongoose.model('Location', locationSchema)
