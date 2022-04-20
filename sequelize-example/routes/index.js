var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/students', require('./student'));
router.use('/subjects', require('./subject'));
router.use('/groups', require('./group'));
router.use('/studentsubject', require('./studentSubject'));

module.exports = router;
