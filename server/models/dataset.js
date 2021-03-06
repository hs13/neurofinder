var mongoose = require('mongoose')

module.exports = mongoose.model('Dataset', {
  name: {type: String, unique: true},
  contributors: [String],
  region: String,
  lab: String,
  animal: String,
  regions: [{id: String, coordinates: []}]
})