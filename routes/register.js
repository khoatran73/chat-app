const express = require('express')
const router = express.Router()

const registerController = require('../controllers/RegisterController')
const upload = require('../middleware/upload')

router.get('/', registerController.get)

router.post('/', upload.single('image'), registerController.post)

module.exports = router
