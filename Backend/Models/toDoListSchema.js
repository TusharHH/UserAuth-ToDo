const mongoose = require('mongoose')

const todolistSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String, 
        require: true
    },
    description: {
        type: String
    }
})

const toDoList = new mongoose.model("toDoList", todolistSchema)
module.exports = toDoList;