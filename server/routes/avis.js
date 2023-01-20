const express = require('express')
const router = express.Router()
const cors =require('cors');

const {
  addAvis,
  listAvis,
  AllAvis,
}= require('../controllers/avisController')
router.use(cors())
// CRUD PRODUCT
router.route('/list').get(listAvis)
router.route('/allavis').get(AllAvis)
router.route('/add').post(addAvis)

module.exports = router
