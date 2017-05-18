var express = require('express');
var router = express.Router();
var ctrlmain = require('../controller/main');
var adduser = require('../controller/register');
/* GET home page. */
router.get('/',ctrlmain.index);
router.get('/login',function(req,res){
    res.render('login',{});
});
router.get('/register',function(req,res){
    res.render('register',{});
});
router.post('/register',adduser.newUser);



module.exports = router;
