const asyncHandler = require("express-async-handler");
const Products = require("../models/products");
const multer = require("multer");
const sessionStorage = require("sessionstorage-for-nodejs");


var cat_name = []
cat_name ['63c6d7046e9a121b87be4a04'] = "Laptop gamer";
cat_name ['63c6d72a6e9a121b87be4a06'] = "Laptop Pro";
cat_name ['63c6d7326e9a121b87be4a08'] = "Laptop en promotion";
cat_name ['63c6d73a6e9a121b87be4a0a'] = "PC Gamers";
cat_name ['63c6d7426e9a121b87be4a0c'] = "PC Pro";
cat_name ['63c6d74a6e9a121b87be4a0e'] = "PC en promotion";

const listProducts = asyncHandler(async (req, res) => {
  if (req.query.s) {
    var search = req.query.s;
    Products.find({ title: { $regex: search }}, function (err, product) {
      if (product.length == 0) {
        res.status(200).json({"result":"No product"});
      } else {
        var result = product.filter(obj => {
          return obj.cat = cat_name[obj.cat];
        })
        res.status(200).json(result);
      }
    });
  } else {
    Products.find({}, function (err, product) {
      if (product.length == 0) {
        res.status(200).json({});
      } else {
        var result = product.filter(obj => {
          return obj.cat = cat_name[obj.cat];
        })
        if (req.query.limit) {
          var limit = req.query.limit;
        res.status(200).json(result.slice(0,limit));
      } else
        res.status(200).json(result);
      }
    });
  }
});

const listProductsCat = asyncHandler(async (req, res) => {
  var sort = "";
  if (req.params.cat) {
    var cat = req.params.cat;
    var sortFilter = {cat: cat};
    if(req.query.sort){
      sort = req.query.sort
      if(sort == "priceDESC")
        var product = await Products.find(sortFilter).sort({ price: -1 });
      else if(sort == "priceASC")
        var product = await Products.find(sortFilter).sort({ price: 1 });
    } else 
    var product = await Products.find(sortFilter);

    if (product.length == 0) {
      res.status(200).json({"result":"No product"});
    } else {
      var result = product.filter(obj => {
        return obj.cat = cat_name[obj.cat];
      })
      res.status(200).json(result);
    }

  } else {
    res.status(200).json({});
  }
});


const getProduct = asyncHandler(async (req, res) => {
  Products.find({ _id: req.params.id }, function (err, product) {
    if (product.length == 0) {
      res.status(200).json({ result: "No result" });
    } else {
      product[0].cat=cat_name[product[0].cat];
      res.status(200).json(product[0]);
    }
  });
});


const addProduct = asyncHandler(async (req, res) => {
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./images");
    },
    filename: function (req, file, cb) {
      var ext = file.originalname.split(".");
      cb(null, Math.floor(Math.random() * 500000000) + "." + ext[1]);
    },
  });
  const upload = multer({ storage: storage });
  upload.single("image");
  var newProduct = await Products.create({
    title: req.body.title,
    price: req.body.price,
    cat: req.body.cat,
    image: `http://localhost:3000/images/${req.file.filename}`,
    description: req.body.description,
    info: req.body.info,
    qty: req.body.qty,
  });
  res.status(200).json({ result: "success", product: newProduct });
});

const updateProduct = asyncHandler(async (req, res) => {
  const updatedProduct = await Products.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedProduct);
});

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Products.findById(req.params.id);
  await product.remove();
  res.status(200).json({ id: req.params.id });
});

//// FAVORITE
const addFavorite = asyncHandler(async (req, res) => {
  let storedFav = [];
  if (sessionStorage.getItem("favorite")) {
    storedFav = JSON.parse(sessionStorage.getItem("favorite"));
    console.log(storedFav);
    storedFav.push(req.params.id);
    sessionStorage.setItem("favorite", JSON.stringify(storedFav));
  } else {
    storedFav = [req.params.id];
    sessionStorage.setItem("favorite", JSON.stringify(storedFav));
  }
  console.log(sessionStorage.getItem("favorite"));
  res.status(200).json({ result: storedFav });
});

const listFavorite = asyncHandler(async (req, res) => {
  let storedFav = [];
  try {
    if (sessionStorage.getItem("favorite"))
      storedFav = JSON.parse(sessionStorage.getItem("favorite"));
    console.log(storedFav)

    Products.find({ _id: { $in: storedFav } }, function (err, product) {
      try{
      if (product.length == 0) {
        res.status(200).json({"result":"No product"});
      } else {
        var result = product.filter(obj => {
          return obj.cat = cat_name[obj.cat];
        })
        res.status(200).json(result);
      }}catch(err){}
    });
  }catch(err){}
});
module.exports = {
  listProducts,
  addProduct,
  deleteProduct,
  updateProduct,
  listProductsCat,
  getProduct,
  addFavorite,
  listFavorite,
};
