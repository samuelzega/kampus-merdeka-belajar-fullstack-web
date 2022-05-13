var express = require('express');
var router = express.Router();
const StudentController = require('../controller/student')
const AuthSession = require('../middleware/authenticationSession')

/* GET users listing. */
router.get('/', StudentController.getAllStudent);
router.post('/register',StudentController.addStudent);
router.post('/login',StudentController.login);
router.get('/getdatafromtoken',AuthSession);

module.exports = router;
