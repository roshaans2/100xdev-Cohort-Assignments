const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User,Course} = require("../db/index")
const bcrypt = require("bcrypt")


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

router.get('/courses', async(req, res) => {
    const courses = await Course.find({})
    if(!courses){
        res.status(404).send("No courses found.")
    }
    res.json(courses)
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    const username = req.headers["username"]
    const {courseId} = req.params
    const user = await User.findOne({username:username})
    user.purchasedCourses.push(courseId)
    await user.save()
    res.send("Course purchased successfully")

});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    const username = req.headers["username"]
    const user = await User.findOne({username:username}).populate('purchasedCourses')
    console.log(user.purchasedCourses)
    res.json({
        purchasedCourses:user.purchasedCourses
    })
});

module.exports = router