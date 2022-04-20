var express = require('express');
var router = express.Router();
const SubjectController = require('../controller/subject')

/* GET users listing. */
router.get('/',SubjectController.getAllSubject);
router.post('/',SubjectController.addSubject);

module.exports = router;
