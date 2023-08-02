const Location = require('../models/location')

module.exports = {
  create
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
