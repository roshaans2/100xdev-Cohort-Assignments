const mongoose = require("mongoose")

const CardSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    interests:{
        type:String
    },
    linkedin:{
        type:String,
    },
    twitter:{
        type:String
    }
})

const Card = mongoose.model("Card",CardSchema)

module.exports = Card