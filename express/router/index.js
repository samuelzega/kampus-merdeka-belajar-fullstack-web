const express = require('express')
const app = express()
const userRouter = require('./user')

app.use('/user', userRouter)
// app.use('/books', userRouter)
// app.use('/checkout', userRouter)
// app.use('/payment', userRouter)


module.exports = app