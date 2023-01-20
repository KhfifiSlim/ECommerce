const express = require('express')
const router = express.Router()
const cors =require('cors');

//const verify = require('../controllers/verifToken');
const multer = require("multer")
const Products = require("../models/products");
// BECH TA3MEL TEST MEN8iR TOKEN
 const verify = (req,res,next) => { next() }


const {
  listProducts,
  addProduct,
  deleteProduct,
  updateProduct,
  getProduct,
  addFavorite,
  listFavorite,
  listProductsCat
}= require('../controllers/productController')


router.use(cors())
// CRUD PRODUCT
router.route('/list').get(verify,listProducts)

router.route('/getproductsByCat/:cat').get(verify,listProductsCat)


router.route('/:id').get(verify,getProduct)

//router.route('/add').post(verify,addProduct)
const storage = multer.diskStorage({
  destination:(req,file,callback)=>{
    callback(null,"../client/public/uploads/");
  },
  filename: (req,file,callback)=>{
    const fileName = `${Date.now()}_${file.originalname.replace(/\s+/g, '-')}`;
    callback(null,fileName);
  }
})

const upload = multer({ storage:storage});

router.post("/add", upload.single("image"),async (req,res,next)=> {
  try{
            
      const newProduct = new Products({
        title: req.body.title,
        price: req.body.price,
        cat: req.body.cat,
        image:req.file.filename,
        description: req.body.description,
        info: req.body.info,
        qty: req.body.qty,
    
    });
    //save user and respond
      const product = await newProduct.save();
      res.status(200).json(product);
  }catch(err){
    console.log(err);
    res.status(500).json(err)
  }
    
});


router.route('/:id').delete(verify,deleteProduct).put(verify,updateProduct)

// FAVORITE FUNCTION
router.route('/fav/:id').post(addFavorite)
router.route('/fav/list').get(listFavorite)

module.exports = router
