var express = require('express');
var router = express.Router();
const StudentSubjecController = require('../controller/studentSubject')

/* GET users listing. */
router.get('/' , StudentSubjecController.getAllStudentSubject)
router.post('/' , StudentSubjecController.addStudentSubject)

module.exports = router;
