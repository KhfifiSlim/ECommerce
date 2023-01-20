const asyncHandler = require("express-async-handler");
const Category = require("../models/category");
const listCategory = asyncHandler(async (req, res) => {
  Category.find({ type: 1 }, function (err, category) {
    if (category.length == 0) {
      res.status(200).json({ result: "No result" });
    } else {
      res.status(200).json(category);
    }
  });
});
const listSubCat = asyncHandler(async (req, res) => {
  Category.find({ type: 2, cat_id: req.params.id }, function (err, category) {
    try {
      if (category.length == 0) {
        res.status(200).json({ result: "No result" });
      } else {
        res.status(200).json(category);
      }
    } catch (err) {
      res.status(200).json({ error: err });
    }
  });
});

const addCat = asyncHandler(async (req, res) => {
  var newCat = await Category.create({
    name: req.body.name,
    type: 1,
  });
  res.status(200).json({ result: "success", category: newCat });
});
const addSubCat = asyncHandler(async (req, res) => {
  var newCat = await Category.create({
    name: req.body.name,
    type: 2,
    cat_id: req.body.cat_id,
  });
  res.status(200).json({ result: "success", category: newCat });
});
const updateCat = asyncHandler(async (req, res) => {
  const updatedCat = await Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedCat);
});

const deleteCat = asyncHandler(async (req, res) => {
  const cat = await Category.findById(req.params.id);
  await cat.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  listCategory,
  listSubCat,
  addCat,
  updateCat,
  deleteCat,
  addSubCat,
};
