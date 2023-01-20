const jwt = require('jsonwebtoken')

module.exports = (req,res,next) =>{
    
    const token = req.header('auth-token');
    if(!token) 
        return res.status(200).json({"error" :"No token"});
    else{
        try{
        const verify = jwt.verify(token,process.env.SECRETKEY);
        req.user = verify;
        next()
    }catch(err){
        res.status(200).json({"error" :"Invalid token"});
    }
    }

}