require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const NODE_ENV = process.env.NODE_ENV
const userRouter = require('./routes/user')
const productRouter = require('./routes/product')

mongoose.connect(`mongodb://localhost/ecommers_${NODE_ENV}`, { useNewUrlParser: true })

app.use(cors())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())
app.use('/users', userRouter)
app.use('/products', productRouter)

app.listen(3000, () => {
    console.log('nyanyi di 3000')
})
module.exports = app