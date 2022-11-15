const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const { urlencoded } = require('express')
const app = new express()

//Data base connection
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://souravrn:Mongo321atlas@cluster0.z8fhr4f.mongodb.net/blogg")
.then(()=>{
    console.log("mongodb is connected succesfully")
})
.catch(error=>{
    console.log('Connection error',error)
})


app.use(cors())
app.use(express.json())
app.use(urlencoded({extended:true}))
app.use(logger('dev'))

const blogDetails = require('./models/data')

app.get('/bloggData', async(req,res)=>{
    try{
        const items = await blogDetails.find()
        res.send(items)
    }catch(error){
        console.log(error.message)
    }
})



app.listen(3000,()=>{
    console.log("app running at 3000....")
})
