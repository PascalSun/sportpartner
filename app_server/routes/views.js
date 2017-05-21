var express = require('express');
var router = express.Router();
var viewhandle = require('../controller/views');
/* GET view other guys index page */
router.get('/', viewhandle.index);

/* GET show list of visitor and hosts */
router.get('/list',viewhandle.list);

module.exports = router;
