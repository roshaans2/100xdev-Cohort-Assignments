const jwt = require("jsonwebtoken")

require("dotenv").config()

async function adminMiddleware(req, res, next) {
    const token = req.headers.authorization
    const words = token.split(" ")
    const jwtToken = words[1]
    try {
        decodedValue = jwt.verify(jwtToken,process.env.jwtPassword)
        if(decodedValue.username){
            next()
        }
        else{
            res.status(403).send("You are not authenticated")
        }
    } catch (error) {
        res.json({
            msg:"Incorrect inputs"
        })
    }
}

module.exports = adminMiddleware;