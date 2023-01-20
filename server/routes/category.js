const express = require('express')
const router = express.Router()
//const verify = require('../controllers/verifToken');
const cors =require('cors');
// TEST MEN8iR TOKEN
 const verify = (req,res,next) => { next() }


const {
  listCategory,
  listSubCat,
  addCat,
  updateCat,
  deleteCat,
  addSubCat
}= require('../controllers/categoryController')
router.use(cors())
// CRUD CATEGORY
router.route('/list').get(listCategory)
router.route('/addcat').post(verify,addCat)
router.route('/:id').delete(verify,updateCat).put(verify,deleteCat)


// CRUD SUB CATEGORY
router.route('/listsub/:id').get(verify,listSubCat)
router.route('/addsubcat').post(verify,addSubCat)

module.exports = router
