const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const cors = require('cors')
const uri = "mongodb://127.0.0.1:27017/belajar_mongo"
const Article = require('/home/ronald916/Documents/mevn/exjs/utils/article')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

mongoose.connect(uri, {useNewUrlParser : true, useUnifiedTopology : true})
    .then(res => app.listen(port))
    .catch(err => console.log("Koneksi Gagal"))


app.get('/users', (req,res) => {
    Article.find()
        .then(result => res.json({result}))
        .catch(err => console.log(err))
})

app.post('/users', (req,res) => {
    Article.create({
        name : req.body.name,
        age : req.body.age,
    })
        .then(result => res.json({result}))
        .catch(err => console.log(err))
})

app.get('/delete/:name', (req,res) => {
    let nameParams = req.params.name.toLowerCase() || req.params.name

    Article.deleteOne({
        name : req.params.name
    })
        .then(result => res.json({result}))
        .catch(err => console.log(err))
})
