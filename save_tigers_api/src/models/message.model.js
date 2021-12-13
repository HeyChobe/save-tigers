const mongoose = require("mongoose")

const messageSchema = mongoose.Schema({
    fullname: {type: String, required: true},
    email: {type: String, required: true},
    detail: {type: String, required: true}
})

module.exports = mongoose.model("Message", messageSchema)