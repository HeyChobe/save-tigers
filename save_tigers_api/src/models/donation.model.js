const mongoose = require("mongoose")

const donationSchema = mongoose.Schema({
    fullname: {type: String, required: true},
    email: {type: String, required: true},
    amount: {type: String, required: true}
})

module.exports = mongoose.model("Donation", donationSchema)