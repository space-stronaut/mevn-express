const mongoose = require('mongoose')
const Schema = mongoose.Schema

const article_schema = new Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
})

const Article = mongoose.model('Articles', article_schema)

module.exports = Article