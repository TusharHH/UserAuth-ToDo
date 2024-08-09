const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName: {
        type: String, 
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        requie: true
    },
})

const user = new mongoose.model('user', userSchema)
module.exports = user