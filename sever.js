const express = require("express")
const lorger = require("morgan")
const parser = require("body-parser")
const route = require('./route')
require('dotenv').config()

const app = express()


app.use(lorger('tiny'))

app.use(parser.json())

app.use(parser.urlencoded({extended:false}))

app.listen(4000, ()=>{
    console.log('listening on port 4000')
})

app.use('/', route)
