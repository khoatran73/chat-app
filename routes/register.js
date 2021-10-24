const express = require('express')
const router = express.Router()

const registerController = require('../controllers/RegisterController')

router.get('/', registerController.get)

module.exports = router
