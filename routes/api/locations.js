const express = require('express')
const router = express.Router()
const locationsCtrl = require('../../controllers/locations')

/*---------- Public Routes ----------*/

// POST '/api/locations'
router.post('/', locationsCtrl.create)

// GET '/api/locations'
router.get('/', locationsCtrl.index)

/*---------- Protected Routes ----------*/

module.exports = router
