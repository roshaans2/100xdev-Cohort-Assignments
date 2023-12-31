const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin,Course} = require("../db/index")
const router = Router();
const bcrypt = require("bcrypt")

// Admin Routes
router.post('/signup', async(req, res) => {
    const {username,password} = req.body
    const admin = Admin({
        username:username,
        password:await bcrypt.hash(password,12)
    })
    await admin.save()
    res.send("Admin created successfully")
});

router.post('/courses', adminMiddleware, async(req, res) => {
    const course = Course(req.body)
    await course.save()
    res.json({ message: 'Course created successfully', courseId: course._id  })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    const courses = await Course.find({})
    if(courses.length == 0){
        res.status(404).send("No courses found")
    }
    res.json(courses)
});



module.exports = router;