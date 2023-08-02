const express = require('express')
const router = express.Router()
const locationsCtrl = require('../../controllers/locations')

/*---------- Public Routes ----------*/

// POST '/api/locations'
router.post('/', locationsCtrl.create)

/*---------- Protected Routes ----------*/

module.exports = router
