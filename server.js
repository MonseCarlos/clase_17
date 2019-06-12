const express = require('express')
const app = express()
const router=require('./auth')

function roothandle(request,response){
    response.send("Hello Word!")
}

app.use('/auth',router)
app.get('/',roothandle)

app.listen(9000)