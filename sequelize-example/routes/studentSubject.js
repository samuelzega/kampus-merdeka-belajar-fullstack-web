var express = require('express');
var router = express.Router();
const StudentSubjectController = require('../controller/studentSubject')

/* GET users listing. */
router.get('/',StudentSubjectController.getAllStudentSubject);
router.post('/',StudentSubjectController.addStudentSubject);

module.exports = router;
