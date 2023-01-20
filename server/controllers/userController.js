const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const Users = require('../models/users')

const getUser = asyncHandler(async (req, res) => {
  Users.find({email: req.body.email,password:req.body.password}, function(err, user) 
  {
     if (user.length == 0)
     {
      res.status(200).json({"result":"Email ou mot de passe incorrect !"});
     } else {
      const user ={email:req.body.email}
      jwt.sign(user,process.env.SECRETKEY,(err,resultat) => {
        if(err){
          res.status(200).json( {error:err});
        }else{
          res.status(200).json( {"result":"success" ,"token":resultat});
        }
      })
     }
  });
 })

// const setUser = asyncHandler(async (req, res) => {
// const userExist = await Users.find({ email: req.body.email });
//      if (userExist.length == 0)
//      {
//     Newuser = await Users.create({
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//     })  
//       res.status(200).json({result:"success"});
//      } else {
//       res.status(200).json({result:"Email already exists"});
//      }
// })


module.exports = {
  getUser
}
