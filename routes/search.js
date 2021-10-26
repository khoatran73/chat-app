const express = require('express')
const router = express.Router()

const searchController = require('../controllers/SearchController')

router.post('/:key', searchController.post)

module.exports = router
