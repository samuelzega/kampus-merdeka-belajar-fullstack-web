var express = require('express');
var router = express.Router();

/* GET users listing. */
router.use('/students' , require('./student'))
router.use('/groups' , require('./group'))
router.use('/subjects' , require('./subject'))
router.use('/studentsubject' , require('./studentSubject'))

module.exports = router;
