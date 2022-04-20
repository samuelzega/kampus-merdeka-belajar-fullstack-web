var express = require('express');
var router = express.Router();
const GroupController = require('../controller/group')

/* GET users listing. */
router.get('/',GroupController.getAllGroup);
router.post('/',GroupController.addGroup);

module.exports = router;
