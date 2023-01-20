const asyncHandler = require("express-async-handler");
const Avis = require("../models/avis");

const listAvis = asyncHandler(async (req, res) => {
  if (req.query.prod_id) {
    var prod_id = req.query.prod_id;
    Avis.find({ prod_id: prod_id }, function (err, avis) {
      if (avis.length == 0) {
        res.status(404).json({"result":"No result"});
      } else {
        res.status(200).json(avis);
      }
    });
  } 
});

const AllAvis=asyncHandler(async(req,res) =>{
  try {
       const avisdata = await Avis.find();
       res.status(201).json(avisdata)
       console.log(avisdata);
    } catch (error) {
      res.status(422).json(error);
  }
})


const addAvis = asyncHandler(async (req, res) => {
  var newAvis = await Avis.create({
    name: req.body.name,
    email: req.body.email,
    description: req.body.description,
    prod_id: req.body.prod_id,
  });
  res.status(200).json({ result: "success", product: newAvis });
});

module.exports = {
  addAvis,
  listAvis,
  AllAvis,
};
