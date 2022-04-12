const express = require('express')
const app = express()
const UserController = require('../controller/userController')

app.post('/login',  UserController.login)
app.post('/register',  UserController.register)


module.exports = app