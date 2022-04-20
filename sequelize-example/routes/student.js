var express = require('express');
var router = express.Router();
const StudentController = require('../controller/student')

/* GET users listing. */
router.get('/',StudentController.getAllStudent);
router.post('/register',StudentController.addStudent);

module.exports = router;
