const {User} = require("../db/index")
const bcrypt = require("bcrypt")

async function userMiddleware(req, res, next) {
    const username = req.headers["username"]
    const password = req.headers["password"]
    const user = await User.findOne({username:username})
    if(!user){
        res.status(404).send("Incorrect username")
    }
    const isValid = await bcrypt.compare(password,user.password)
    if(!isValid){
        res.status(404).send("Incorrect password")
    }
    next()
}

module.exports = userMiddleware;