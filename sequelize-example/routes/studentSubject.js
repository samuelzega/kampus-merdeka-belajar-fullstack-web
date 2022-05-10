var express = require('express');
var router = express.Router();
const StudentSubjectController = require('../controller/studentSubject')

const Auth = require('../middleware/authentication')

/* GET users listing. */
router.get('/',StudentSubjectController.getAllStudentSubject);
router.post('/', Auth, StudentSubjectController.addStudentSubject);

module.exports = router;
