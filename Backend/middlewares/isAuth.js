import jwt from "jsonwebtoken"

const isAuth = async(req,res,next)=>{
try {
  let {token} = req.cookies
  if(!token){
    res.status(400).json({message:`token not found`})
  }
  let verifyToken =jwt.verify(token,process.env.JWT_SECRET)
  if(!verifyToken){
    res.status(400).json({message:"not have a valid token"})
  }
  req.userId = verifyToken.userId
  next()
} catch (error) {
  res.status(500).json({message:`is auth error ${error}`})
}
}

export default isAuth