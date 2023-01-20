const express = require('express')
const router = express.Router()
const cors =require('cors');

const {
  getUser,
}= require('../controllers/userController')

router.use(cors())

router.route('/login').post(getUser)

module.exports = router
