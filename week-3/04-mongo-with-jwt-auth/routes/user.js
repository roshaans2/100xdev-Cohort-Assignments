const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User,Course} = require("../db/index")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


// User Routes
router.post('/signup', async(req, res) => {
    const {username,password} = req.body
    const hashedPassword = await bcrypt.hash(password,12)
    const user = User({
        username:username,
        password:hashedPassword
    })
    await user.save()
    res.send("User created successfully")
});

router.post("/signin",async(req,res)=>{
    const {username,password} = req.body
    const user = User.findOne({username:username})
    if(user){
        const token = jwt.sign({username,password},process.env.jwtPassword)
        res.json({
            token:token
        })
    }
    else{
        res.status(411).send("Incorrect credentials")
    }
})

router.get('/courses', async(req, res) => {
    const courses = await Course.find({})
    if(!courses){
        res.status(404).send("No courses found.")
    }
    res.json(courses)
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    const {courseId} = req.params
    const token = req.headers.authorization
    const words = token.split(" ")
    const jwtToken = words[1]
    const decodedValue = jwt.verify(jwtToken,process.env.jwtPassword)
    const username = decodedValue.username
    const user = await User.findOne({username:username})
    user.purchasedCourses.push(courseId)
    await user.save()
    res.send("Course purchased successfully")
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    const token = req.headers.authorization
    const words = token.split(" ")
    const jwtToken = words[1]
    const decodedValue = jwt.verify(jwtToken,process.env.jwtPassword)
    const username = decodedValue.username
    const user  = await User.findOne({username:username}).populate('purchasedCourses')
    res.json({
        purchasedCourses:user.purchasedCourses
    })
});

module.exports = router