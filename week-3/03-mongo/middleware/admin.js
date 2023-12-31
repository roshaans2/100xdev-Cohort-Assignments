const {Admin} = require("../db/index")
const bcrypt = require("bcrypt")

async function adminMiddleware(req, res, next) {
    const username = req.headers["username"]
    const password = req.headers["password"]
    const user = await Admin.findOne({username:username})
    if(!user){
        res.status(404).send("You are not a admin")
    }
    const isValid = await bcrypt.compare(password,user.password)
    if(!isValid){
        res.status(404).send("Invalid Password")
    }
    next()
}

module.exports = adminMiddleware;