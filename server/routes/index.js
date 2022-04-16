var express = require('express');
var router = express.Router();

/* GET users listing. */
router.use('/students' , require('./student'))
router.use('/groups' , require('./group'))
router.use('/subjects' , require('./subject'))

module.exports = router;
