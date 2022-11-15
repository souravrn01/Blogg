const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const bloggSchema = new Schema({
    date: String,
    comment: String,
    article: String
})

let bloggData = mongoose.model("data",bloggSchema)
module.exports = bloggData;