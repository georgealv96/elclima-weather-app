const Location = require('../models/location')

module.exports = {
  create,
  index,
  delete: deleteLocation
}

async function create(req, res) {
  try {
    // Using our Model to create a document in the locations collection in MongoDB
    const location = await Location.create({
      user: req.user,
      city: req.body.city,
      country: req.body.country,
      url: req.body.url
    })
    // This will return the user object
    await location.populate('user')
    res.status(201).json({ data: location })
  } catch (err) {
    res.status(400).json({ error: err })
  }
}

async function index(req, res) {
  try {
    // Looking for all of the locations that the user logged in has pinned
    const locations = await Location.find({ user: req.user })
      .populate('user')
      .exec()
    res.status(200).json({ locations })
  } catch (err) {
    res.status(400).json({ error: err })
  }
}

async function deleteLocation(req, res) {
  try {
    const location = await Location.findOne({
      user: req.user,
      url: req.params.locationUrl
    })
    location.remove(req.params.id)
    await location.save()
    res.json({ data: 'Location removed' })
  } catch (err) {
    res.status(400).json({ error: err })
  }
}
