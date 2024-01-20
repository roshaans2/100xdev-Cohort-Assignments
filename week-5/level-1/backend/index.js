const express = require("express")
const mongoose = require("mongoose")
const Card = require("./Card")
const cors = require("cors")
const app = express()

require("dotenv").config()

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("DB Connected")
})
.catch((error)=>{
    console.log(error)
})

app.get("/cards",async(req,res)=>{
    try {
        const cards = await Card.find({})
        res.json({
        cards:cards
    })
    } catch (error) {
        res.status(404).json(error)
    }
})

app.post("/cards",async(req,res)=>{
    try {
        const card = Card(req.body)
        await card.save()
        res.json({
            msg:"Card created sucessfully"
        })
    } catch (error) {
        res.send(error)
    }
})



app.listen(3000,()=>{
    console.log("Server running at port 3000")
})