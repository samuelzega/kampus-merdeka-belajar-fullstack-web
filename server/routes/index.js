var express = require('express');
var router = express.Router();

/* GET users listing. */
router.use('/students' , require('./student'))

module.exports = router;
