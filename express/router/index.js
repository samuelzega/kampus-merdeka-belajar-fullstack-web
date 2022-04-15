const express = require('express')
const router = express.Router()
const userRouter = require('./user')

router.use('/user', userRouter)
// app.use('/books', userRouter)
// app.use('/checkout', userRouter)
// app.use('/payment', userRouter)


module.exports = router