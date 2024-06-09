const express = require('express')
const app = express()
const route=require('./router')
const cors=require('cors')
const cookieParser=require('cookie-parser')
require('dotenv').config()

const PORT =5000

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/',route)

app.listen(PORT,()=>{
    console.log(`Server Running on port http://localhost:${PORT}`)
})
