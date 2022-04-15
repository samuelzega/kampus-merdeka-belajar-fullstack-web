const express = require('express')
const router = express.Router()
const UserController = require('../controller/userController')

router.post('/login',  UserController.login)
router.post('/register',  UserController.register)
router.put('/register',  UserController.register)
router.delete('/register',  UserController.register)
router.patch('/register',  UserController.register)


module.exports = router