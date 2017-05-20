var express = require('express');
var router = express.Router();
var viewhandle = require('../controller/views');
/* GET users index page */
router.get('/', viewhandle.index);


module.exports = router;
