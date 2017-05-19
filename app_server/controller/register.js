require('../models/db');
var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports.newUser = index;


function index(req,res){
  var newUser = new User({email:req.body.email,password:req.body.password});
  newUser.save(function(err,data){
    if(err){
      console.log(err);
      res.status(500);
      res.render('error',{
        message:err.message,
        error:err
      });
    }

    else{
        console.log(data,' saved');
        res.redirect('/');
        // index(req,res);
      }
      });

};
