const mongoose = require("mongoose")

const labelsSchema = mongoose.Schema({
    id: {type: String, required: true},
    label: {type: String, required: true},
})

module.exports = mongoose.model("Label", labelsSchema)