var express = require('express');
var router = express.Router();
const SubjecController = require('../controller/subject')

/* GET users listing. */
router.get('/' , SubjecController.getAllSubject)
router.post('/' , SubjecController.addSubject)

module.exports = router;
