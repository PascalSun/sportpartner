require('../models/db');
var express = require('express');
var router = express.Router();
var ctrlmain = require('../controller/main');
var passport = require('passport');
var Account = require('../models/account');
// var adduser = require('../controller/register');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {user: req.user});
});

// Get register page
router.get('/register', function(req, res) {
  res.render('register', {});
});

// Post to register new accounts
router.post('/register', function(req, res, next) {
  console.log('registering user');
  if ((req.body.password == req.body.repassword)&&(req.body.password.length!=0))
  {
  Account.register(new Account({username: req.body.username}), req.body.password, function(err) {
    if (err) {
      console.log(err);
      res.render('register',{namerror:'User Already Exist'});
    }
    else{
    // After registered, redirect to login page with username and password
    console.log('user registered!');
    res.render('login',{username:req.body.username,password:req.body.password});
  }
    });
  }
  else{
    console.log('Password Not Match');
    res.render('register',{errors:'Password not match'});
  }
});

router.get('/login', function(req, res) {
  res.render('login', {user: req.user});
});

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.render('index',{username:req.body.username,user:req.user});
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
